import React, { useState, useEffect } from "react";
import PastQuery from "../components/History/PastQuery";
import DosageResult from "../components/History/DosageResult";
import { format } from "date-fns";
import { ChevronLeft } from "lucide-react";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../constants";
import { useAuth } from "../context/AuthContext";
import { NavLink } from "react-router-dom";

const History = () => {
  const [pastQueries, setPastQueries] = useState([]);
  const [selectedQuery, setSelectedQuery] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMedicineRecommendation = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/history`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
          }),
        });

        const result = await response.json();

        if (response.ok) {
          console.log(result);
          setPastQueries(result);
          // toast.success("Medicine recommendation fetched!");
        } else {
          toast.error(result.message);
        }
      } catch (error) {
        toast.error("Failed to connect to the server. Please try again later.");
      }
    };

    fetchMedicineRecommendation();
  }, []);

  return (
    <>
      <div className="pt-16 p-4 page-transition bg-medisure-50 min-h-screen">
        { !selectedQuery && <NavLink
          to="/dashboard"
          className="absolute top-20 z-20 flex sm:mr-96 "
        >
          <button className="flex items-center text-medisure-700 hover:text-medisure-900 mb-6 transition-colors">
            <ChevronLeft />
            Back to Dashboard
          </button>
        </NavLink>}
        <div className="max-w-5xl mx-auto pb-14">
          {selectedQuery ? (
            <div className="animate-fade-in p-20">
              <button
                onClick={() => setSelectedQuery(null)}
                className="flex items-center text-medisure-700 hover:text-medisure-900 mb-6 transition-colors"
              >
                <ChevronLeft />
                Back to History
              </button>

              <div className="bg-white/50 rounded-xl p-4 mb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-medisure-900">
                      {format(selectedQuery.date, "d, MMMM yyyy")}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {format(selectedQuery.date, "h:mm a")}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-medisure-50 rounded-full text-sm font-medium text-medisure-700">
                      Age: {selectedQuery.age}
                    </div>
                    <div className="px-3 py-1 bg-medisure-50 rounded-full text-sm font-medium text-medisure-700">
                      Weight:{" "}
                      {selectedQuery.weight
                        ? selectedQuery.weight + "kg"
                        : "NA"}
                    </div>
                    <div className="px-3 py-1 bg-medisure-50 rounded-full text-sm font-medium text-medisure-700">
                      Height:{" "}
                      {selectedQuery.height
                        ? selectedQuery.height + "cm"
                        : "NA"}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <h3 className="font-medium text-medisure-800 mb-2">
                    Symptoms
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedQuery.symptoms.map((symptom, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-medisure-100/50 text-medisure-800 rounded-full text-sm"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <DosageResult recommendation={selectedQuery} />
            </div>
          ) : (
            <>
              <h1 className="text-3xl font-bold mt-10 mb-6">
                Past Recommendations
              </h1>
              {pastQueries.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastQueries.map((query) => (
                    <PastQuery
                      key={query.id}
                      query={query}
                      onClick={() => setSelectedQuery(query)}
                    />
                  ))}
                </div>
              ) : (
                <p>No past recommendations found.</p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default History;
