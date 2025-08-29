import pandas as pd
import numpy as np
import lightgbm as lgb
from sklearn.model_selection import train_test_split, RandomizedSearchCV
from sklearn.preprocessing import LabelEncoder, MultiLabelBinarizer
from sklearn.metrics import accuracy_score, classification_report, mean_squared_error, r2_score
from sklearn.utils.class_weight import compute_class_weight
import warnings
import re
import logging
import joblib

warnings.filterwarnings("ignore")
logging.getLogger("lightgbm").setLevel(logging.ERROR)

# -------------------------------------------
# Convert dosage strings to numeric
# -------------------------------------------
def convert_dosage(dosage_str):
    if "Not recommended" in dosage_str:
        return 0.0
    if '-' in dosage_str:
        parts = dosage_str.replace("mg", "").split('-')
        try:
            values = [float(p.strip()) for p in parts if p.strip()]
            return np.mean(values) if values else np.nan
        except:
            return np.nan
    else:
        value = re.sub(r'[^0-9.]', '', dosage_str)
        try:
            return float(value)
        except:
            return np.nan

# -------------------------
# Load and preprocess data
# -------------------------
data = pd.read_csv("../dataset/generated_medicine_data.csv")
data["symptoms"] = data["symptoms"].apply(lambda x: x.split(", "))
mlb = MultiLabelBinarizer()
symptom_matrix = mlb.fit_transform(data["symptoms"])
symptom_df = pd.DataFrame(symptom_matrix, columns=mlb.classes_)

medicine_le = LabelEncoder()
data["medicine_label"] = medicine_le.fit_transform(data["medicine"])
data["dosage_value"] = data["dosage"].apply(convert_dosage)
data["frequency"] = pd.to_numeric(data["frequency"], errors='coerce')
data["duration"] = pd.to_numeric(data["duration"], errors='coerce')
data.dropna(subset=["dosage_value", "frequency", "duration"], inplace=True)

X = pd.concat([data[["age"]], symptom_df], axis=1)
y_class = data["medicine_label"]
y_reg = data[["dosage_value", "frequency", "duration"]]

X_train, X_test, y_class_train, y_class_test, y_reg_train, y_reg_test = train_test_split(
    X, y_class, y_reg, test_size=0.2, stratify=y_class, random_state=42
)

# ---------------------------------
# Compute class weights
# ---------------------------------
class_weights = compute_class_weight(class_weight='balanced', classes=np.unique(y_class_train), y=y_class_train)
class_weight_dict = dict(zip(np.unique(y_class_train), class_weights))

# ---------------------------------
# Classification Model + Tuning
# ---------------------------------
param_dist_class = {
    "n_estimators": [100, 200],
    "max_depth": [3, 5, 7, -1],
    "learning_rate": [0.01, 0.1],
    "num_leaves": [15, 31, 63]
}

clf = lgb.LGBMClassifier(random_state=42, n_jobs=-1, verbose=-1, class_weight=class_weight_dict)
clf_search = RandomizedSearchCV(
    clf,
    param_distributions=param_dist_class,
    n_iter=5,
    cv=2,
    random_state=42,
    n_jobs=-1,
    verbose=0
)

clf_search.fit(
    X_train,
    y_class_train,
    eval_set=[(X_test, y_class_test)],
    callbacks=[lgb.early_stopping(20, verbose=False)]
)

best_classifier = clf_search.best_estimator_
y_class_pred = best_classifier.predict(X_test)

# Evaluation
class_accuracy = accuracy_score(y_class_test, y_class_pred)
print("Medicine Classification Accuracy: {:.2f}%".format(class_accuracy * 100))
print("\nClassification Report for Medicine:")
print(classification_report(y_class_test, y_class_pred, target_names=medicine_le.classes_))

# ---------------------------------
# Regression Model for Dosage, Frequency, Duration
# ---------------------------------
param_dist_reg = {
    "n_estimators": [100, 200],
    "max_depth": [3, 5, 7, -1],
    "learning_rate": [0.01, 0.1],
    "num_leaves": [15, 31, 63]
}

models_reg = {}
y_reg_pred = pd.DataFrame(index=X_test.index)

for col in y_reg.columns:
    reg = lgb.LGBMRegressor(random_state=42, n_jobs=-1, verbose=-1)
    reg_search = RandomizedSearchCV(
        reg,
        param_distributions=param_dist_reg,
        n_iter=5,
        cv=2,
        random_state=42,
        n_jobs=-1,
        verbose=0
    )
    reg_search.fit(
        X_train,
        y_reg_train[col],
        eval_set=[(X_test, y_reg_test[col])],
        callbacks=[lgb.early_stopping(20, verbose=False)]
    )
    best_reg = reg_search.best_estimator_
    y_reg_pred[col] = best_reg.predict(X_test)
    models_reg[col] = best_reg

# Evaluate regression
mse = mean_squared_error(y_reg_test, y_reg_pred, multioutput='raw_values')
r2 = r2_score(y_reg_test, y_reg_pred, multioutput='uniform_average')
print("\nRegression Performance:")
print("Mean Squared Error (Dosage, Frequency, Duration):", mse)
print("Overall R2 Score: {:.2f}".format(r2))

# ---------------------------------
# Save all models and encoders
# ---------------------------------
joblib.dump(best_classifier, "best_classifier.pkl")
joblib.dump(models_reg, "models_reg.pkl")
joblib.dump(mlb, "mlb.pkl")
joblib.dump(medicine_le, "medicine_le.pkl")

print("\n✅ Models saved successfully!")
