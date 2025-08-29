from datetime import datetime, timedelta

from bson import ObjectId
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

from config import Config
from extensions import mongo, jwt

app = Flask(__name__)
CORS(app, supports_credentials=True)

app.config.from_object(Config)
mongo.init_app(app)
jwt.init_app(app)

@app.route('/', methods=['GET'])
def index():
    return jsonify({"message": "Welcome to the Medisure API!"}), 200

@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()

        username = data.get('username')
        email = data.get('email')
        phone = data.get('phone')
        password = data.get('password')
        gender = data.get('gender')
        age = data.get('age')

        if not username or not email or not phone or not password or not gender or not age:
            return jsonify({"message": "All fields are required!"}), 400

        if len(username) < 3:
            return jsonify({"message": "Username must be at least 3 characters long!"}), 400

        if '@' not in email or '.' not in email:
            return jsonify({"message": "Invalid email address!"}), 400

        if not len(phone) >= 10:
            return jsonify({"message": "Phone number must be 10 digits long!"}), 400

        if len(password) < 8:
            return jsonify({"message": "Password must be at least 8 characters long!"}), 400

        if gender not in ['male', 'female']:
            return jsonify({"message": "Invalid gender. Choose 'male', 'female'."}), 400

        if not age.isdigit() or int(age) < 18:
            return jsonify({"message": "Age must be a number and at least 18."}), 400

        user = mongo.db.users.find_one({'email': email})
        if user:
            return jsonify({"message": "Email already registered!"}), 400

        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

        if gender == 'male':
            image = 'i1'
        else:
            image = 'i2'

        mongo.db.users.insert_one({
            'username': username,
            'email': email,
            'phone': phone,
            'password': hashed_password,
            'gender': gender,
            'age': int(age),
            'image': image
        })

        return jsonify({"message": "User registered successfully!"}), 201

    except Exception as e:
        print("Error during registration:", e)
        return jsonify({"message": "An error occurred during registration."}), 500


# User Login Route
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    user = mongo.db.users.find_one({'email': email})

    if user and check_password_hash(user['password'], password):
        access_token = create_access_token(identity=str(user['_id']), expires_delta=timedelta(hours=1))

        return jsonify({
            'token': access_token,
            'user': {'email': user['email'], 'username': user['username'], 'id': str(user['_id']),
                     'image': user['image']}
        }), 200
    else:
        return jsonify({'message': 'Invalid credentials'}), 401


@app.route('/protected', methods=['GET'])
@jwt_required()
def protected():
    user_id = get_jwt_identity()
    user = mongo.db.users.find_one({'_id': ObjectId(user_id)})

    if user:
        return jsonify({
            'email': user['email'],
            'username': user['username'],
            'phone': user['phone'],
            'image': user['image'],
            'age': user['age'],
            'gender': user['gender'],
            'height': user.get('height', ''),
            'weight': user.get('weight', '')
        }), 200
    else:
        return jsonify({'message': 'User not found'}), 404


@app.route('/profile', methods=['PUT'])
@jwt_required()
def update_profile():
    try:
        data = request.get_json()
        user_id = get_jwt_identity()
        # Fetch the user from the database
        user = mongo.db.users.find_one({'_id': ObjectId(user_id)})

        if not user:
            return jsonify({'message': 'User not found'}), 404

        username = data.get('username', user['username'])
        email = data.get('email', user['email'])
        phone = data.get('phone', user['phone'])
        age = data.get('age', user['age'])
        gender = data.get('gender', user['gender'])
        height = data.get('height', user.get('height', ''))
        weight = data.get('weight', user.get('weight', ''))

        print(age)

        # if mongo.db.users.find_one({'email': email, '_id': {'$ne': ObjectId(user_id)}}):
        #     return jsonify({'message': 'Email already in use!'}), 400

        if len(username) < 3:
            return jsonify({"message": "Username must be at least 3 characters long!"}), 400

        # if '@' not in email or '.' not in email:
        #     return jsonify({"message": "Invalid email address!"}), 400

        if not len(phone) >= 10:
            return jsonify({"message": "Phone number must be 10 digits long!"}), 400

        if gender not in ['male', 'female']:
            return jsonify({"message": "Invalid gender. Choose 'male', 'female'."}), 400

        if not str(age).isdigit() or int(age) < 18:
            return jsonify({"message": "Age must be a number and at least 18."}), 400

        if height and int(height) < 0:
            return jsonify({"message": "Height must be a number and at least 0."}), 400

        if weight and int(weight) < 0:
            return jsonify({"message": "Weight must be a number and at least 0."}), 400

        mongo.db.users.update_one(
            {'_id': ObjectId(user_id)},
            {'$set': {
                'username': username,
                # 'email': email,
                'phone': phone,
                'age': age,
                'gender': gender,
                'height': height,
                'weight': weight

            }}
        )

        return jsonify({
            'message': 'Profile updated successfully!',
            'user': {
                'id': str(user['_id']),
                'username': username,
                'email': email,
                'phone': phone,
                'age': age,
                'gender': gender,
                'height': height,
                'weight': weight
            }
        }), 200

    except Exception as e:
        print("Error updating profile:", e)
        return jsonify({'message': 'An error occurred while updating the profile'}), 500


@app.route('/profile/img', methods=['PUT'])
@jwt_required()
def update_profile_image():
    try:
        data = request.get_json()
        user_id = get_jwt_identity()
        user = mongo.db.users.find_one({'_id': ObjectId(user_id)})

        if not user:
            return jsonify({'message': 'User not found'}), 404

        image = data.get('image', user['image'])

        mongo.db.users.update_one(
            {'_id': ObjectId(user_id)},
            {'$set': {
                'image': image,

            }}
        )

        return jsonify({
            'message': 'Profile updated successfully!',
            'user': {
                'id': str(user['_id']),
            }
        }), 200

    except Exception as e:
        print("Error updating profile:", e)
        return jsonify({'message': 'An error occurred while updating the profile'}), 500


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        data = request.get_json()
        print(data)
        if not data:
            return jsonify({"error": "Please provide symptoms in the request body."}), 400

        user_symptoms = data['symptoms']
        user_age = int(data['age'])
        user_email = data['email']
        medicines_dict = {}

        print(user_symptoms)

        try:
            from model.predict import predict_medicine_info
            predicted_disease = predict_medicine_info(user_age, user_symptoms)
            print(predicted_disease['medicine'])


            for symptom in user_symptoms:
                predicted_medicine = predict_medicine_info(user_age, symptom)
                name = predicted_medicine["medicine"]

                    # Update if the medicine is new or has a higher dosage
                if name not in medicines_dict or predicted_medicine["dosage"] > medicines_dict[name]["dosage"]:
                    medicines_dict[name] = predicted_medicine

                # Convert dictionary back to a list
            medicines = list(medicines_dict.values())

           
            record = {
                'symptoms': user_symptoms,
                'age': user_age,
                'medicines': medicines,  # Store the entire list of medicines
                'date': datetime.utcnow().isoformat(timespec='seconds'),
                'email': user_email
            }

            # Insert the list of medicine records into MongoDB
            mongo.db.predictions.insert_one(record)

            return jsonify({
                "medicines" : medicines
            })
        except KeyError as e:
            print(f"KeyError: {e}")
            return jsonify({"error": "One or more symptoms are not recognized."}), 400


@app.route('/history', methods=['POST'])
def history():
    if request.method == 'POST':
        data = request.get_json()
        email = data['email']
        print(data)

        user = mongo.db.predictions.find({'email': email})
        if not user:
            return jsonify({'message': 'User not found'}), 404
        return jsonify(user), 200


if __name__ == '__main__':
    app.run(debug=True)

