import os.path

import joblib
import pandas as pd

# Load the saved models and encoders
# path = "C:/Users/aryan/Desktop/Capstone/MediSure/backend/model/"
path = os.path.abspath(os.path.join(os.path.dirname(__file__), "../model/"))

mlb = joblib.load(os.path.join(path, "mlb.pkl"))
best_classifier = joblib.load(os.path.join(path, "best_classifier.pkl"))
medicine_le = joblib.load(os.path.join(path, "medicine_le.pkl"))
models_reg = joblib.load(os.path.join(path, "models_reg.pkl"))


def predict_medicine_info(age, symptoms):
    """
    Given an age (int) and symptoms (list of strings), predict:
      - Medicine (name)
      - Dosage (numeric value)
      - Frequency (numeric value)
      - Duration (numeric value)

    Returns a dictionary with the predictions.
    """

    # Convert the input symptoms to the multi-hot encoded format
    
    # Ensure symptoms is a list even if a single symptom is provided
    if isinstance(symptoms, str):
        symptoms = [symptoms]
    
    # Transform the symptoms to multi-hot encoded format
    input_symptom_matrix = mlb.transform([symptoms])

    # Create input DataFrame with age and encoded symptoms
    X_input = pd.concat([
        pd.DataFrame({"age": [age]}),
        pd.DataFrame(input_symptom_matrix, columns=mlb.classes_)
    ], axis=1)

    # Predict the medicine (classification)
    medicine_label_pred = best_classifier.predict(X_input)
    medicine_pred = medicine_le.inverse_transform(medicine_label_pred)[0]

    # Predict the regression outputs (dosage, frequency, duration)
    reg_preds = {col: models_reg[col].predict(X_input)[0] for col in ["dosage_value", "frequency", "duration"]}

    return {
        "medicine": medicine_pred,
        "dosage": int(reg_preds["dosage_value"]),
        "frequency": int(reg_preds["frequency"]),
        "duration": int(reg_preds["duration"])
    }

# Example usage:
# print("---------------")
# input_age = int(input("\nEnter Age: "))
# input_symptoms = input("Enter comma separated symptoms: ").split(", ")
# result = predict_medicine_info(input_age, input_symptoms)
# print("Predicted results:", result)
# print("---------------")
