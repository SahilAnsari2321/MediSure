import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import VoiceInput from "./VoiceInput";

const allSymptoms = [{name: "Diabetic nephropathy"},
  {name: "Pain"},
  {name: "Scarlet fever"},
  {name: "Skin infections"},
  {name: "Sneezing"},
  {name: "Urinary tract infections"},
  {name: "Allergic rhinitis (hay fever)"},
  {name: "Tonsillitis"},
  {name: "Severe pain"},
  {name: "Asthma"},
  {name: "Otitis media"},
  {name: "High cholesterol (hypercholesterolemia)"},
  {name: "Mild to moderate pain"},
  {name: "Chest pain (angina)"},
  {name: "Respiratory tract infections"},
  {name: "Prophylaxis of influenza A and B"},
  {name: "Allergic conjunctivitis"},
  {name: "Musculoskeletal pain"},
  {name: "Cancer-related pain"},
  {name: "Bacterial infections"},
  {name: "Oral thrush (oral candidiasis)"},
  {name: "Surgical prophylaxis"},
  {name: "Itching of the nose, throat, or roof of the mouth"},
  {name: "Rosacea"},
  {name: "Bacterial vaginosis"},
  {name: "Visceral leishmaniasis"},
  {name: "Plague"},
  {name: "Streptococcal upper respiratory tract infections"},
  {name: "Exercise-induced bronchoconstriction"},
  {name: "Chronic bacterial prostatitis"},
  {name: "Chronic idiopathic urticaria (hives)"},
  {name: "Rheumatoid arthritis"},
  {name: "High triglycerides (hypertriglyceridemia)"},
  {name: "Intra-abdominal infections"},
  {name: "Muscle aches"},
  {name: "Heterozygous familial hypercholesterolemia"},
  {name: "Post-surgical pain"},
  {name: "Skin itching and hives"},
  {name: "Methicillin-resistant Staphylococcus aureus (MRSA) infections"},
  {name: "Sore throat"},
  {name: "Seasonal allergies"},
  {name: "Type 2 diabetes mellitus"},
  {name: "Lower respiratory tract infections"},
  {name: "Cutaneous candidiasis"},
  {name: "Pneumonia"},
  {name: "Kidney stones pain"},
  {name: "Irregular heart rhythms (arrhythmias)"},
  {name: "Back pain"},
  {name: "Acute pain"},
  {name: "Perennial allergic rhinitis"},
  {name: "Osteoarthritis"},
  {name: "Recent myocardial infarction (heart attack)"},
  {name: "Arthritis"},
  {name: "Backache"},
  {name: "Toothaches"},
  {name: "Neuropathic pain"},
  {name: "Pelvic inflammatory disease"},
  {name: "Candidemia"},
  {name: "Severe acute pain"},
  {name: "Recent stroke"},
  {name: "Prevention of cardiovascular diseases"},
  {name: "Menstrual pain"},
  {name: "Chromomycosis"},
  {name: "Ankylosing spondylitis"},
  {name: "Chronic pain"},
  {name: "Gastrointestinal infections"},
  {name: "Hypertriglyceridemia"},
  {name: "Meningitis"},
  {name: "COVID-19 requiring hospitalization"},
  {name: "Malaria prevention"},
  {name: "Cardiovascular event prevention"},
  {name: "Influenza in immunocompromised patients"},
  {name: "Juvenile rheumatoid arthritis"},
  {name: "Athlete's foot (tinea pedis)"},
  {name: "Fever"},
  {name: "Treatment of acute, uncomplicated influenza A and B"},
  {name: "Eczema"},
  {name: "Cold and flu"},
  {name: "Pityriasis versicolor (tinea versicolor)"},
  {name: "Acute coronary syndrome (ACS)"},
  {name: "Onychomycosis (fungal infections of fingernails and toenails)"},
  {name: "COVID-19 in patients with compromised immune systems"},
  {name: "Cough"},
  {name: "Blastomycosis"},
  {name: "Acute otitis media"},
  {name: "Stroke risk reduction"},
  {name: "Tinea capitis (scalp ringworm)"},
  {name: "Protozoal infections"},
  {name: "Paracoccidioidomycosis"},
  {name: "Tinea cruris (jock itch)"},
  {name: "Mild-to-moderate COVID-19 in non-hospitalized patients at high risk of severe disease"},
  {name: "High blood pressure (hypertension)"},
  {name: "Skin allergies"},
  {name: "Strep throat"},
  {name: "Sexually transmitted infections"},
  {name: "Oropharyngeal and esophageal candidiasis"},
  {name: "Tinea pedis (athlete's foot)"},
  {name: "Hives (urticaria)"},
  {name: "Bacterial endocarditis prophylaxis"},
  {name: "Itchy or watery eyes"},
  {name: "Inhalational anthrax (post-exposure)"},
  {name: "Rheumatic fever prophylaxis"},
  {name: "Jock itch (tinea cruris)"},
  {name: "Heart failure"},
  {name: "Tinea corporis (ringworm of the body)"},
  {name: "Herpes simplex virus infections"},
  {name: "Histoplasmosis"},
  {name: "Fibromyalgia"},
  {name: "Reducing risk of myocardial infarction and stroke"},
  {name: "Peripheral arterial disease"},
  {name: "Fusospirochetosis (Vincent's infection)"},
  {name: "Coccidioidomycosis"},
  {name: "Migraine"},
  {name: "Dental pain"},
  {name: "Mucormycosis"},
  {name: "Herpes labialis (cold sores)"},
  {name: "Pharyngitis"},
  {name: "Acute gout"},
  {name: "Cryptococcal meningitis"},
  {name: "Hay fever (allergic rhinitis)"},
  {name: "Varicella (chickenpox)"},
  {name: "Acute bacterial exacerbation of chronic bronchitis"},
  {name: "Anaerobic infections"},
  {name: "Herpes zoster (shingles)"},
  {name: "Acne"},
  {name: "Some food allergies"},
  {name: "Headache"},
  {name: "Muscle pain"},
  {name: "Ringworm (tinea corporis)"},
  {name: "Primary dysbetalipoproteinemia"},
  {name: "Genital herpes"},
  {name: "Gonorrhea"},
  {name: "Septicemia"},
  {name: "Postoperative pain"},
  {name: "Moderate pain"},
  {name: "Runny nose"},
  {name: "Post-myocardial infarction management"},
  {name: "Bronchitis"},
  {name: "Cold"},
  {name: "Coronary artery disease"},
  {name: "Conjunctivitis (red, itchy eyes)"},
  {name: "Inflammation"},
  {name: "Joint pain"},
  {name: "Systemic fungal infections"},
  {name: "Itchy nose or throat"},
  {name: "Vaginal yeast infections (vaginal candidiasis)"},
  {name: "Acute bacterial sinusitis"},
  {name: "Endocarditis"},
  {name: "Cancer pain"},
  {name: "Bone and joint infections"},
  {name: "Left ventricular dysfunction"},
  {name: "Pneumococcal respiratory infections"},
  {name: "Primary dysmenorrhea"},
  {name: "Trichomoniasis"},
  {name: "Severe influenza requiring hospitalization"},
  {name: "Erysipelas"},
  {name: "Potential reduction of influenza-related complications"},
  {name: "Invasive aspergillosis"},
  {name: "Mixed dyslipidemia"},
  {name: "Seasonal allergic rhinitis"},
  {name: "Menstrual cramps"},
  {name: "Moderate to severe pain"},
  {name: "Sinus infections"},
  {name: "Prediabetes"},
  {name: "Staphylococcal skin and soft tissue infections"},
  {name: "Ear infections"},
  {name: "Homozygous familial hypercholesterolemia"},
  {name: "Irregular heartbeats (arrhythmias)"},
  {name: "Vaginal candidiasis"},
  {name: "Red, itchy, or watery eyes"},
  {name: "Skin and skin structure infections"},
  {name: "Reactions to insect bites and stings"},
  {name: "Polycystic ovary syndrome (PCOS)"},];

const Form = ({ handleSubmit }) => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSymptoms, setFilteredSymptoms] = useState(allSymptoms);
  const [currentPage, setCurrentPage] = useState(1);
  const symptomsPerPage = 10;

  useEffect(() => {
    const timer = setTimeout(() => {
      const results = allSymptoms.filter((symptom) =>
        symptom.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (results.length <= symptomsPerPage) {
        setCurrentPage(1);
      }

      setFilteredSymptoms(results);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const symptomsToDisplay = filteredSymptoms.slice(
    (currentPage - 1) * symptomsPerPage,
    currentPage * symptomsPerPage
  );

  const toggleSymptom = (symptomName) => {
    setSelectedSymptoms((prev) =>
      prev.includes(symptomName)
        ? prev.filter((name) => name !== symptomName)
        : [...prev, symptomName]
    );
  };

  const selectedSymptomNames = selectedSymptoms
    .map((name) => {
      const symptom = allSymptoms.find((s) => s.name === name);
      return symptom ? symptom.name : null;
    })
    .filter((name) => name !== null);

  const clearSelectedSymptoms = () => {
    setSelectedSymptoms([]);
  };

  return (
    <div className="space-y-6 w-full">
      <div className="bg-white bg-opacity-90 rounded-3xl shadow-2xl p-8 overflow-hidden w-full">
        {/* Decorative overlay */}
        <h2 className="relative text-3xl font-extrabold text-gray-800 mb-6 text-center md:text-left">
          Symptoms
        </h2>
        <div className="relative mb-6 w-full flex items-center gap-2">
          {/* Search Input with "X" Inside */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-6 w-6" />
            <input
              type="text"
              placeholder="Search symptoms..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-12 p-2 w-full text-lg rounded-full border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition duration-300"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Voice Input Button Outside */}
          <VoiceInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* Symptoms Grid with Fixed Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[300px]">
          {symptomsToDisplay.map((symptom) => (
            <button
              key={symptom.name}
              onClick={() => toggleSymptom(symptom.name)}
              className={`relative group p-4 min-h-[50px] w-full rounded-xl text-left transition transform hover:scale-105 duration-200 ${
                selectedSymptoms.includes(symptom.name)
                  ? "bg-blue-100 text-blue-700 border-2 border-blue-500"
                  : "bg-white/50 text-gray-700 border-2 hover:border-gray-300"
              }`}
            >
              <span className="block truncate">{symptom.name}</span>

              {/* Optimized Tooltip - Fully Hidden When Not Hovered */}
              <span className="absolute left-1/2 bottom-full mb-2 w-48 px-3 py-2 text-sm text-white bg-black rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 delay-300 break-words text-center transform -translate-x-1/2 z-10">
                {symptom.name}
              </span>
            </button>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Previous
          </button>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                prev < Math.ceil(filteredSymptoms.length / symptomsPerPage)
                  ? prev + 1
                  : prev
              )
            }
            disabled={
              currentPage ===
              Math.ceil(filteredSymptoms.length / symptomsPerPage)
            }
            className={`px-5 py-2 rounded-full font-semibold transition-colors duration-200 ${
              currentPage ===
              Math.ceil(filteredSymptoms.length / symptomsPerPage)
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between">
          <button
            onClick={clearSelectedSymptoms}
            disabled={selectedSymptoms.length === 0}
            className={`mt-6 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 hover:bg-blue-600
                  ${
                    selectedSymptoms.length === 0
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
          >
            Clear
          </button>
          <button
            onClick={() => handleSubmit(selectedSymptomNames)}
            disabled={selectedSymptoms.length === 0}
            className={`mt-6 bg-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200 hover:bg-blue-600
                  ${
                    selectedSymptoms.length === 0
                      ? "cursor-not-allowed opacity-50"
                      : ""
                  }`}
          >
            Get Dosage Recommendation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
