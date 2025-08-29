medicines = [
    {
        "medicine": "Paracetamol",
        "symptoms": [
            "Headache",
            "Muscle aches",
            "Arthritis",
            "Backache",
            "Toothaches",
            "Cold",
            "Fever"
        ],
        "dosages": {
            (3, 12): {"dosage": "120mg", "frequency": 4, "duration": 3},
            (13, 17): {"dosage": "250mg", "frequency": 4, "duration": 3},
            (18, 50): {"dosage": "500mg", "frequency": 4, "duration": 3},
            (51, 99): {"dosage": "650mg", "frequency": 4, "duration": 3}
        }
    },
    {
        "medicine": "Ibuprofen",
        "symptoms": [
            "Fever", "Muscle pain", "Joint pain", "Back pain",
            "Arthritis", "Dental pain", "Menstrual pain", "Inflammation",
            "Headache", "Migraine", "Sore throat", "Cold and flu"
        ],
        "dosages": {
            (3, 12): {"dosage": "100mg", "frequency": 8, "duration": 2},
            (13, 17): {"dosage": "200mg", "frequency": 8, "duration": 3},
            (18, 50): {"dosage": "400mg", "frequency": 6, "duration": 3},
            (51, 99): {"dosage": "600mg", "frequency": 6, "duration": 3}
        }
    },
    {
        "medicine": "Aspirin",
        "symptoms": [
            "Pain", "Inflammation", "Fever", "Cardiovascular event prevention"
        ],
        "dosages": {
            (13, 17): {"dosage": "325mg", "frequency": 4, "duration": 3},
            (18, 50): {"dosage": "75mg", "frequency": 1, "duration": 5},
            (51, 70): {"dosage": "100mg", "frequency": 1, "duration": 5}
        }
    },
    {
        "medicine": "Naproxen",
        "symptoms": [
            "Arthritis",
            "Menstrual cramps",
            "Muscle aches",
            "Acute gout",
            "Fever",
            "Mild to moderate pain"
        ],
        "dosages": {
            (2, 12): {"dosage": "10mg", "frequency": 2, "duration": 2},
            (13, 17): {"dosage": "125mg", "frequency": 2, "duration": 2},
            (18, 50): {"dosage": "200mg", "frequency": 2, "duration": 3},
            (51, 70): {"dosage": "200mg", "frequency": 2, "duration": 3}
        }
    },
    {
        "medicine": "Diclofenac",
        "symptoms": [
            "Arthritis",
            "Menstrual cramps",
            "Muscle aches",
            "Acute gout",
            "Fever",
            "Migraine",
            "Mild to moderate pain"
        ],
        "dosages": {
            (2, 12): {"dosage": "10mg", "frequency": 2, "duration": 2},
            (13, 17): {"dosage": "50mg", "frequency": 2, "duration": 2},
            (18, 50): {"dosage": "100mg", "frequency": 2, "duration": 3},
            (51, 70): {"dosage": "150mg", "frequency": 2, "duration": 3}
        }
    },
    {
        "medicine": "Celecoxib",
        "symptoms": [
            "Osteoarthritis",
            "Rheumatoid arthritis",
            "Juvenile rheumatoid arthritis",
            "Ankylosing spondylitis",
            "Acute pain",
            "Primary dysmenorrhea"
        ],
        "dosages": {
            (2, 12): {"dosage": "50mg", "frequency": 2, "duration": 14},
            (13, 17): {"dosage": "100mg", "frequency": 2, "duration": 14},
            (18, 50): {"dosage": "200mg", "frequency": 1, "duration": 30},
            (51, 70): {"dosage": "200mg", "frequency": 1, "duration": 30}
        }
    },
    {
        "medicine": "Meloxicam",
        "symptoms": [
            "Osteoarthritis", "Rheumatoid arthritis", "Juvenile rheumatoid arthritis", "Pain",
            "Inflammation"
        ],
        "dosages": {
            (2, 17): {"dosage": "7.5mg", "frequency": 1, "duration": 14},
            (18, 50): {"dosage": "10mg", "frequency": 1, "duration": 14},
            (51, 70): {"dosage": "15mg", "frequency": 1, "duration": 30}
        }
    },
    {
        "medicine": "Ketorolac",
        "symptoms": [
            "Moderate to severe pain", "Postoperative pain", "Migraine", "Kidney stones pain",
            "Musculoskeletal pain"
        ],
        "dosages": {
            (17, 64): {"dosage": "10mg", "frequency": 4, "duration": 2},
            (65, 70): {"dosage": "10mg", "frequency": 4, "duration": 5}
        }
    },
    {
        "medicine": "Tramadol",
        "symptoms": [
            "Moderate pain", "Severe pain", "Post-surgical pain", "Chronic pain",
            "Neuropathic pain", "Fibromyalgia", "Arthritis", "Back pain",
            "Joint pain", "Muscle pain", "Cancer pain", "Migraine"
        ],
        "dosages": {
            (13, 17): {"dosage": "50mg", "frequency": 4, "duration": 3},
            (18, 50): {"dosage": "50mg", "frequency": 4, "duration": 5},
            (51, 70): {"dosage": "50g", "frequency": 4, "duration": 7},
            (71, 99): {"dosage": "50mg", "frequency": 4, "duration": 7}
        }
    },
    {
        "medicine": "Morphine",
        "symptoms": [
            "Severe acute pain",
            "Chronic pain",
            "Postoperative pain",
            "Cancer-related pain"
        ],
        "dosages": {
            (13, 17): {"dosage": "10mg", "frequency": 4, "duration": 7},
            (18, 50): {"dosage": "15mg", "frequency": 4, "duration": 7},
            (51, 70): {"dosage": "15mg", "frequency": 4, "duration": 7},
            (71, 99): {"dosage": "7.5mg", "frequency": 4, "duration": 7}
        }
    },

    # Antibiotics
    {
        "medicine": "Amoxicillin",
        "symptoms": [
            "Ear infections",
            "Sinus infections",
            "Respiratory tract infections",
            "Urinary tract infections",
            "Skin infections"
        ],
        "dosages": {
            (3, 12): {"dosage": "25mg", "frequency": 3, "duration": 10},
            (13, 17): {"dosage": "500mg", "frequency": 2, "duration": 10},
            (18, 50): {"dosage": "500mg", "frequency": 3, "duration": 10},
            (51, 99): {"dosage": "500mg", "frequency": 2, "duration": 10}
        }
    },
    {
        "medicine": "Azithromycin",
        "symptoms": [
            "Ear infections",
            "Sinus infections",
            "Respiratory tract infections",
            "Skin infections",
            "Sexually transmitted infections"
        ],
        "dosages": {
            (3, 12): {"dosage": "10mg", "frequency": 1, "duration": 3},
            (13, 17): {"dosage": "10mg", "frequency": 2, "duration": 3},
            (18, 50): {"dosage": "500mg", "frequency": 2, "duration": 3},
            (51, 99): {"dosage": "500mg", "frequency": 1, "duration": 3}
        }
    },
    {
        "medicine": "Ciprofloxacin",
        "symptoms": [
            "Urinary tract infections",
            "Respiratory tract infections",
            "Skin and skin structure infections",
            "Bone and joint infections",
            "Gastrointestinal infections"
        ],
        "dosages": {
            (1, 17): {"dosage": "10-20mg", "frequency": 2, "duration": 10},
            (18, 50): {"dosage": "500mg", "frequency": 2, "duration": 10},
            (51, 99): {"dosage": "500mg", "frequency": 2, "duration": 10}
        }
    },
    {
        "medicine": "Doxycycline",
        "symptoms": [
            "Respiratory tract infections",
            "Urinary tract infections",
            "Skin infections",
            "Acne",
            "Rosacea",
            "Malaria prevention"
        ],
        "dosages": {
            (9, 12): {"dosage": "2.2mg", "frequency": 1, "duration": 7},
            (13, 17): {"dosage": "100mg", "frequency": 1, "duration": 7},
            (18, 50): {"dosage": "100mg", "frequency": 1, "duration": 7},
            (51, 99): {"dosage": "100mg", "frequency": 1, "duration": 7}
        }
    },
    {
        "medicine": "Metronidazole",
        "symptoms": [
            "Bacterial infections",
            "Protozoal infections",
            "Anaerobic infections",
            "Bacterial vaginosis",
            "Trichomoniasis"
        ],
        "dosages": {
            (3, 12): {"dosage": "7mg", "frequency": 2, "duration": 7},
            (13, 17): {"dosage": "250mg", "frequency": 3, "duration": 7},
            (18, 50): {"dosage": "500mg", "frequency": 3, "duration": 7},
            (51, 99): {"dosage": "500mg", "frequency": 2, "duration": 7}
        }
    },
    {
        "medicine": "Ceftriaxone",
        "symptoms": [
            "Lower respiratory tract infections",
            "Skin and skin structure infections",
            "Urinary tract infections",
            "Pelvic inflammatory disease",
            "Intra-abdominal infections",
            "Meningitis",
            "Gonorrhea",
            "Septicemia",
            "Bone and joint infections",
            "Surgical prophylaxis"
        ],
        "dosages": {
            (3, 12): {"dosage": "50mg", "frequency": 1, "duration": 7},
            (13, 17): {"dosage": "1000mg", "frequency": 1, "duration": 7},
            (18, 50): {"dosage": "1000mg", "frequency": 1, "duration": 7},
            (51, 99): {"dosage": "1000mg", "frequency": 1, "duration": 7}
        }
    },
    {
        "medicine": "Cefixime",
        "symptoms": [
            "Urinary tract infections",
            "Otitis media",
            "Pharyngitis",
            "Tonsillitis",
            "Bronchitis",
            "Gonorrhea"
        ],
        "dosages": {
            (1, 12): {"dosage": "80mg", "frequency": 1, "duration": 7},
            (13, 17): {"dosage": "400mg", "frequency": 1, "duration": 7},
            (18, 50): {"dosage": "400mg", "frequency": 1, "duration": 7},
            (51, 99): {"dosage": "400mg", "frequency": 1, "duration": 7}
        }
    },
    {
        "medicine": "Penicillin V",
        "symptoms": [
            "Streptococcal upper respiratory tract infections",
            "Scarlet fever",
            "Erysipelas",
            "Pneumococcal respiratory infections",
            "Staphylococcal skin and soft tissue infections",
            "Fusospirochetosis (Vincent's infection)",
            "Rheumatic fever prophylaxis",
            "Bacterial endocarditis prophylaxis"
        ],
        "dosages": {
            (3, 12): {"dosage": "25mg", "frequency": 2, "duration": 10},
            (13, 17): {"dosage": "125-250mg", "frequency": 2, "duration": 10},
            (18, 50): {"dosage": "500mg", "frequency": 3, "duration": 10},
            (51, 99): {"dosage": "500mg", "frequency": 3, "duration": 10}
        }
    },
    {
        "medicine": "Clindamycin",
        "symptoms": [
            "Bone and joint infections",
            "Pelvic inflammatory disease",
            "Strep throat",
            "Pneumonia",
            "Acute otitis media",
            "Endocarditis",
            "Acne",
            "Methicillin-resistant Staphylococcus aureus (MRSA) infections"
        ],
        "dosages": {
            (3, 12): {"dosage": "8-16mg", "frequency": 2, "duration": 5},
            (13, 17): {"dosage": "75mg", "frequency": 3, "duration": 5},
            (18, 50): {"dosage": "150-450mg", "frequency": 1, "duration": 10},
            (51, 99): {"dosage": "150-450mg", "frequency": 2, "duration": 10}
        }
    },

    {
        "medicine": "Levofloxacin",
        "symptoms": [
            "Pneumonia",
            "Skin and skin structure infections",
            "Urinary tract infections",
            "Acute bacterial sinusitis",
            "Acute bacterial exacerbation of chronic bronchitis",
            "Chronic bacterial prostatitis",
            "Inhalational anthrax (post-exposure)",
            "Plague"
        ],
        "dosages": {
            (13, 64): {"dosage": "500-750mg", "frequency": 1, "duration": 10},
            (65, 99): {"dosage": "500-750mg", "frequency": 1, "duration": 12}
        }
    },

    #     Antivirals drugs
    {
        "medicine": "Acyclovir",
        "symptoms": [
            "Herpes simplex virus infections",
            "Varicella (chickenpox)",
            "Herpes zoster (shingles)",
            "Genital herpes",
            "Herpes labialis (cold sores)"
        ],
        "dosages": {
            (2, 12): {"dosage": "100-200mg", "frequency": 4, "duration": 5},
            (13, 64): {"dosage": "800mg", "frequency": 5, "duration": 7},

            (65, 99): {"dosage": "800mg", "frequency": 5, "duration": 7}
        }
    },

    {
        "medicine": "Oseltamivir",
        "symptoms": [
            "Treatment of acute, uncomplicated influenza A and B",
            "Prophylaxis of influenza A and B",
            "Severe influenza requiring hospitalization",
            "Influenza in immunocompromised patients",
            "Potential reduction of influenza-related complications"
        ],
        "dosages": {
            (1, 12): {"dosage": "30-70mg", "frequency": 2, "duration": 5},
            (13, 64): {"dosage": "75mg", "frequency": 2, "duration": 5},
            (65, 99): {"dosage": "75mg", "frequency": 2, "duration": 5}
        }
    },

    {
        "medicine": "Remdesivir",
        "symptoms": [
            "COVID-19 requiring hospitalization",
            "Mild-to-moderate COVID-19 in non-hospitalized patients at high risk of severe disease",
            "COVID-19 in patients with compromised immune systems"
        ],
        "dosages": {
            (13, 64): {"dosage": "100mg", "frequency": 1, "duration": 5},
            (65, 99): {"dosage": "200mg", "frequency": 1, "duration": 5}
        }
    },

    # {
    #     "medicine": "Tenofovir",
    #     "symptoms": [
    #         "HIV-1 infection",
    #         "Chronic hepatitis B",
    #         "Post-exposure prophylaxis (PEP) for HIV exposure"
    #     ],
    #     "dosages": {
    #         (13, 64): {"dosage": "300mg", "frequency": 1, "duration": 5},
    #         (65, 99): {"dosage": "300mg", "frequency": 1, "duration": 5}
    #     }
    # },

    # {
    #     "medicine": "Lamivudine",
    #     "symptoms": [
    #         "HIV-1 infection",
    #         "Chronic hepatitis B",
    #         "Post-exposure prophylaxis (PEP) for HIV exposure"
    #     ],
    #     "dosages": {
    #         (3, 11): {"dosage": "50mg", "frequency": 1, "duration": 365},
    #         (12, 64): {"dosage": "100mg", "frequency": 1, "duration": 365},
    #         (65, 99): {"dosage": "100mg", "frequency": 1, "duration": 365}
    #     }
    # },
    #     Antifungal Drugs
    {
        "medicine": "Fluconazole",
        "symptoms": [
            "Oropharyngeal and esophageal candidiasis",
            "Cryptococcal meningitis",
            "Vaginal candidiasis"
        ],
        "dosages": {
            (0, 1): {"dosage": "20mg", "frequency": 1, "duration": 14},
            (2, 11): {"dosage": "50mg", "frequency": 1, "duration": 14},
            (12, 64): {"dosage": "100mg", "frequency": 1, "duration": 14},
            (65, 99): {"dosage": "100mg", "frequency": 1, "duration": 14}
        }
    },
    {
        "medicine": "Clotrimazole",
        "symptoms": [
            "Athlete's foot (tinea pedis)",
            "Jock itch (tinea cruris)",
            "Ringworm (tinea corporis)",
            "Vaginal yeast infections (vaginal candidiasis)",
            "Oral thrush (oral candidiasis)",
            "Pityriasis versicolor (tinea versicolor)",
            "Cutaneous candidiasis"
        ],
        "dosages": {
            (3, 11): {"dosage": "10mg", "frequency": 5, "duration": 14},
            (12, 64): {"dosage": "10mg", "frequency": 5, "duration": 14},
            (65, 99): {"dosage": "10mg", "frequency": 5, "duration": 14}
        }
    },
    {
        "medicine": "Ketoconazole",
        "symptoms": [
            "Blastomycosis",
            "Coccidioidomycosis",
            "Histoplasmosis",
            "Chromomycosis",
            "Paracoccidioidomycosis"
        ],
        "dosages": {
            (2, 17): {"dosage": "100mg", "frequency": 1, "duration": 180},
            (18, 64): {"dosage": "200mg", "frequency": 1, "duration": 180},
            (65, 99): {"dosage": "200mg", "frequency": 1, "duration": 180}
        }
    },
    {
        "medicine": "Amphotericin B",
        "symptoms": [
            "Invasive aspergillosis",
            "Candidemia",
            "Cryptococcal meningitis",
            "Histoplasmosis",
            "Blastomycosis",
            "Coccidioidomycosis",
            "Mucormycosis",
            "Visceral leishmaniasis",
            "Systemic fungal infections"
        ],
        "dosages": {
            (2, 17): {"dosage": "15mg", "frequency": 1, "duration": 14},
            (18, 64): {"dosage": "50mg", "frequency": 1, "duration": 14},
            (65, 99): {"dosage": "50mg", "frequency": 1, "duration": 14}
        }
    },
    {
        "medicine": "Terbinafine",
        "symptoms": [
            "Onychomycosis (fungal infections of fingernails and toenails)",
            "Tinea capitis (scalp ringworm)",
            "Tinea corporis (ringworm of the body)",
            "Tinea cruris (jock itch)",
            "Tinea pedis (athlete's foot)"
        ],
        "dosages": {
            (0, 3): {"dosage": "62.5mg", "frequency": 1, "duration": 42},
            (4, 6): {"dosage": "125mg", "frequency": 1, "duration": 42},
            (7, 12): {"dosage": "187.5mg", "frequency": 1, "duration": 42},
            (13, 17): {"dosage": "250mg", "frequency": 1, "duration": 42},
            (18, 64): {"dosage": "250mg", "frequency": 1, "duration": 42},
            (65, 99): {"dosage": "250mg", "frequency": 1, "duration": 42}
        }
    },

    # Antihistamines & Allergy Medications
    {
        "medicine": "Cetirizine",
        "symptoms": [
            "Hay fever (allergic rhinitis)",
            "Conjunctivitis (red, itchy eyes)",
            "Eczema",
            "Hives (urticaria)",
            "Reactions to insect bites and stings",
            "Some food allergies"
        ],
        "dosages": {
            (0, 1): {"dosage": "2.5mg", "frequency": 1, "duration": 1},
            (2, 5): {"dosage": "2.5mg", "frequency": 1, "duration": 1},
            (6, 11): {"dosage": "5mg", "frequency": 1, "duration": 1},
            (12, 64): {"dosage": "10mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "5mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Loratadine",
        "symptoms": [
            "Allergic rhinitis (hay fever)",
            "Chronic idiopathic urticaria (hives)",
            "Allergic conjunctivitis",
            "Skin allergies",
            "Seasonal allergies"
        ],
        "dosages": {
            (2, 5): {"dosage": "5mg", "frequency": 1, "duration": 1},
            (6, 11): {"dosage": "10mg", "frequency": 1, "duration": 1},
            (12, 64): {"dosage": "10mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "10mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Fexofenadine",
        "symptoms": [
            "Runny nose",
            "Sneezing",
            "Red, itchy, or watery eyes",
            "Itching of the nose, throat, or roof of the mouth",
            "Skin itching and hives"
        ],
        "dosages": {
            (2, 11): {"dosage": "30mg", "frequency": 2, "duration": 1},
            (12, 64): {"dosage": "60mg", "frequency": 2, "duration": 1},
            (65, 99): {"dosage": "60mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Diphenhydramine",
        "symptoms": [
            "Runny nose",
            "Sneezing",
            "Itchy or watery eyes",
            "Itchy nose or throat",
            "Cough"
        ],
        "dosages": {
            (6, 11): {"dosage": "12.5mg", "frequency": 4, "duration": 1},
            (12, 64): {"dosage": "25mg", "frequency": 4, "duration": 1},
            (65, 99): {"dosage": "25mg", "frequency": 4, "duration": 1}
        }
    },
    {
        "medicine": "Montelukast",
        "symptoms": [
            "Asthma",
            "Seasonal allergic rhinitis",
            "Perennial allergic rhinitis",
            "Exercise-induced bronchoconstriction"
        ],
        "dosages": {
            (0, 5): {"dosage": "4mg", "frequency": 1, "duration": 1},
            (6, 14): {"dosage": "5mg", "frequency": 1, "duration": 1},
            (15, 99): {"dosage": "10mg", "frequency": 1, "duration": 1}
        }
    },
    # Cardiovascular Medications
    {
        "medicine": "Amlodipine",
        "symptoms": [
            "High blood pressure (hypertension)",
            "Chest pain (angina)",
            "Coronary artery disease"
        ],
        "dosages": {
            (6, 17): {"dosage": "2.5mg", "frequency": 1, "duration": 1},
            (18, 64): {"dosage": "5mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "2.5mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Atenolol",
        "symptoms": [
            "High blood pressure (hypertension)",
            "Chest pain (angina)",
            "Irregular heartbeats (arrhythmias)"
        ],
        "dosages": {
            (18, 64): {"dosage": "50mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "25mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Losartan",
        "symptoms": [
            "High blood pressure (hypertension)",
            "Diabetic nephropathy",
            "Stroke risk reduction"
        ],
        "dosages": {
            (6, 17): {"dosage": "25mg", "frequency": 1, "duration": 1},
            (18, 64): {"dosage": "50mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "25mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Enalapril",
        "symptoms": [
            "High blood pressure (hypertension)",
            "Heart failure",
            "Left ventricular dysfunction"
        ],
        "dosages": {
            (6, 17): {"dosage": "2.5mg", "frequency": 1, "duration": 1},
            (18, 64): {"dosage": "5mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "2.5mg", "frequency": 1, "duration": 1}
        }
    },

    # {
    #     "medicine": "Lisinopril",
    #     "symptoms": [
    #         "High blood pressure (hypertension)",
    #         "Heart failure",
    #         "Post-myocardial infarction management"
    #     ],
    #     "dosages": {
    #         (6, 17): {"dosage": "5 mg", "frequency": 1, "duration": 1},
    #         (18, 64): {"dosage": "10 mg", "frequency": 1, "duration": 1},
    #         (65, 99): {"dosage": "2.5 mg", "frequency": 1, "duration": 1}
    #     }
    # },

    {
        "medicine": "Metoprolol",
        "symptoms": [
            "High blood pressure (hypertension)",
            "Chest pain (angina)",
            "Heart failure",
            "Post-myocardial infarction management",
            "Irregular heart rhythms (arrhythmias)"
        ],
        "dosages": {
            (6, 17): {"dosage": "50 mg", "frequency": 1, "duration": 1},
            (18, 64): {"dosage": "100 mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "50 mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Ramipril",
        "symptoms": [
            "High blood pressure (hypertension)",
            "Heart failure",
            "Post-myocardial infarction management",
            "Reducing risk of myocardial infarction and stroke"
        ],
        "dosages": {
            (18, 64): {"dosage": "2.5 mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "1.25 mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Clopidogrel",
        "symptoms": [
            "Acute coronary syndrome (ACS)",
            "Recent myocardial infarction (heart attack)",
            "Recent stroke",
            "Peripheral arterial disease"
        ],
        "dosages": {
            (0, 24): {"dosage": "30mg", "frequency": 1, "duration": 1},
            (18, 64): {"dosage": "75 mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "75 mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Atorvastatin",
        "symptoms": [
            "High cholesterol (hypercholesterolemia)",
            "High triglycerides (hypertriglyceridemia)",
            "Prevention of cardiovascular diseases",
            "Heterozygous familial hypercholesterolemia",
            "Homozygous familial hypercholesterolemia"
        ],
        "dosages": {
            (10, 17): {"dosage": "10 mg", "frequency": 1, "duration": 1},
            (18, 64): {"dosage": "10 mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "5 mg", "frequency": 1, "duration": 1}
        }
    },
    {
        "medicine": "Rosuvastatin",
        "symptoms": [
            "High cholesterol (hypercholesterolemia)",
            "Mixed dyslipidemia",
            "Hypertriglyceridemia",
            "Primary dysbetalipoproteinemia",
            "Prevention of cardiovascular diseases"
        ],
        "dosages": {
            (8, 9): {"dosage": "5 mg", "frequency": 1, "duration": 1},
            (10, 17): {"dosage": "10 mg", "frequency": 1, "duration": 1},
            (18, 64): {"dosage": "10 mg", "frequency": 1, "duration": 1},
            (65, 99): {"dosage": "5 mg", "frequency": 1, "duration": 1}
        }
    },
    # Diabetes Medications
    {
        "medicine": "Metformin",
        "symptoms": [
            "Type 2 diabetes mellitus",
            "Polycystic ovary syndrome (PCOS)",
            "Prediabetes"
        ],
        "dosages": {
            (10, 16): {"dosage": "500 mg", "frequency": 2, "duration": 1},
            (17, 64): {"dosage": "500 mg", "frequency": 2, "duration": 1},
            (65, 99): {"dosage": "500 mg", "frequency": 1, "duration": 1}
        }
    },
    # {
    #     "medicine": "Glibenclamide",
    #     "symptoms": [
    #         "Type 2 diabetes mellitus",
    #         "Gestational diabetes",
    #         "Diabetic ketoacidosis"
    #     ],
    #     "dosages": {
    #         (10, 16): {"dosage": "1.25 mg", "frequency": 1, "duration": 1},
    #         (17, 64): {"dosage": "2.5 mg", "frequency": 1, "duration": 1},
    #         (65, 99): {"dosage": "1.25 mg", "frequency": 1, "duration": 1}
    #     }
    # },
    # {
    #     "medicine": "Glimepiride",
    #     "symptoms": [
    #         "Type 2 diabetes mellitus",
    #         "Gestational diabetes",
    #         "Diabetic ketoacidosis"
    #     ],
    #     "dosages": {
    #         (10, 16): {"dosage": "0.5 mg", "frequency": 1, "duration": 1},
    #         (17, 64): {"dosage": "1 mg", "frequency": 1, "duration": 1},
    #         (65, 99): {"dosage": "0.5 mg", "frequency": 1, "duration": 1}
    #     }
    # },

]
