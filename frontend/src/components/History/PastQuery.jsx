import React from "react";
import { format } from "date-fns";

const PastQuery = ({ query, onClick }) => {
  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      className="glass-card rounded-xl p-6 cursor-pointer hover-card"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-medisure-800">
            {query.medicines[0].medicine + " " + query.medicines[0].dosage + "mg"}
            {query.medicines.length > 1 && (
              <span className="text-sm text-gray-600 ml-2">
                + {query.medicines.length - 1} more
              </span>
            )}
          </h3>
          <p className="text-sm text-gray-600 mt-1">
            {format(query.date, "d, MMMM yyyy") +
              " • " +
              format(query.date, "h:mm a")}
          </p>
        </div>
        <div className="px-3 py-1 bg-medisure-50 rounded-full text-xs font-medium text-medisure-700">
          {query.medicines[0].dosage + "mg per dose"}
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mt-3">
        {query.symptoms.map((symptom, index) => (
          <span
            key={index}
            className="text-xs bg-white/70 text-gray-700 rounded-full px-2 py-1"
          >
            {symptom}
          </span>
        ))}
        {query.symptoms.length > 3 && (
          <span className="text-xs bg-white/70 text-gray-700 rounded-full px-2 py-1">
            +{query.symptoms.length - 3} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center text-xs text-gray-600">
          <span className="mr-3">Age: {query.age}</span>
          <span className="mr-3">
            Weight: {query.weight ? query.weight + "kg" : "NA"}
          </span>
          <span>Height: {query.height ? query.height + "cm" : "NA"}</span>
        </div>
        <div className="text-medisure-500 text-sm font-medium">
          View Details
        </div>
      </div>
    </div>
  );
};

export default PastQuery;
