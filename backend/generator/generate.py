import json
import random
import csv
from medicines import medicines


def generate_samples(medicine_data, num_samples=100):
    samples = []

    for med in medicine_data:
        seen_samples = set()
        medicine_name = med["medicine"]
        symptoms_list = med["symptoms"]
        dosages = list(med["dosages"].items())  # Convert to list for efficient iteration

        # Generate all possible unique (age, symptoms) combinations first
        possible_samples = []

        for (age_min, age_max), dosage_info in dosages:
            for age in range(age_min, age_max + 1):
                for _ in range(min(num_samples, len(symptoms_list))):  # Prevent excessive sampling
                    selected_symptoms = tuple(
                        sorted(random.sample(symptoms_list, k=random.randint(3, len(symptoms_list)))))
                    possible_samples.append((age, selected_symptoms, dosage_info))

        # Shuffle and pick unique samples
        random.shuffle(possible_samples)
        for age, selected_symptoms, dosage_info in possible_samples[:num_samples]:
            sample_tuple = (medicine_name, age, selected_symptoms, dosage_info["dosage"], dosage_info["frequency"],
                            dosage_info["duration"])
            if sample_tuple not in seen_samples:
                seen_samples.add(sample_tuple)
                samples.append({
                    "medicine": medicine_name,
                    "age": age,
                    "symptoms": list(selected_symptoms),
                    "dosage": dosage_info["dosage"],
                    "frequency": dosage_info["frequency"],
                    "duration": dosage_info["duration"]
                })

    return samples


# Provided dataset
medicines_data =  medicines

# Generate the dataset
generated_data = generate_samples(medicines_data, num_samples=5000)


# Save to CSV file
output_file = "../dataset/generated_medicine_data.csv"
header = ["medicine", "age", "symptoms", "dosage", "frequency", "duration"]

# Write the data to CSV
with open(output_file, mode="w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(header)  # Write the header row

    for sample in generated_data:
        writer.writerow([
            sample["medicine"],
            sample["age"],
            ", ".join(sample["symptoms"]),  # Convert list to comma-separated string
            sample["dosage"],
            sample["frequency"],
            sample["duration"]
        ])

print(f"Generated {len(generated_data)} samples and saved to {output_file}")
