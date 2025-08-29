# Example usage:
from model.predict import predict_medicine_info


while True:
    print("---------------")
    # input_age = int(input("\nEnter Age: "))
    input_age = 20
    input_symptoms = input("Enter comma separated symptoms: ").split(", ")
    result = predict_medicine_info(input_age, input_symptoms)
    print("Predicted results:", result)
    print("---------------")