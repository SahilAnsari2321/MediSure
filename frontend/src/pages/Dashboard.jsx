import React, { useState } from "react";

import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { API_BASE_URL } from "../constants";
import Form from "../components/Dashboard/Form";
import Dosage from "../components/Dashboard/Dosage";
import Loading from "../components/Private/Loading";

export default function Dashboard() {
  const [medicines, setMedicines] = useState([]);
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (selectedSymptomNames) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/predict`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          symptoms: selectedSymptomNames,
          age: user.age,
          email: user.email,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(result);
        setMedicines(result.medicines || []);
        toast.success("Medicine recommendation fetched!.");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 bg-gradient-to-br from-blue-50 to-blue-200 flex items-center justify-center p-6 page-transition">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Symptoms Selection */}
        <Form handleSubmit={handleSubmit} />

        {/* Medicine Recommendations */}
        <Dosage medicines={medicines} />
        {}
      </div>
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Loading />
        </div>
      )}
    </main>
  );
}
