import React from 'react';
import { CheckCircle } from 'lucide-react';


const DosageResult = ({ recommendation }) => {
  return (
    <div className="glass-card rounded-2xl p-8 animate-scale-in">
      <div className="flex items-center mb-6">
        <div className="h-12 w-12 rounded-full bg-medisure-100 flex items-center justify-center">
         <CheckCircle className="h-6 w-6 text-medisure-500" />
        </div>
        <h2 className="ml-4 text-2xl font-semibold text-medisure-900">
          Dosage Recommendation
        </h2>
      </div>
      {recommendation.medicines.map((medicine, index) => (
        <div key={index} className="bg-white/50 rounded-xl p-6 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-medisure-800">
                {medicine.medicine} {medicine.dosage}mg
              </h3>
              <p className="text-medisure-600 text-sm mt-1">
                {medicine.dosage}mg per dose
              </p>
            </div>
            <div className="mt-2 md:mt-0 px-4 py-2 bg-medisure-50 rounded-lg border border-medisure-100">
              <span className="text-sm font-medium text-medisure-700">
                {medicine.frequency} times a day
              </span>
            </div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              <span className="font-medium text-medisure-700">Duration:</span> {medicine.duration} days
            </p>
          </div>
          <a
            href={`https://www.drugs.com/${medicine.medicine
              .replace(/\s+/g, "-")
              .toLowerCase()}.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline text-sm sm:text-base mt-3 sm:mt-0"
          >
            Learn more about {medicine.medicine}
          </a>
        </div>
      ))}
      
      
      {/* <div className="mb-6">
        <h4 className="font-medium text-medisure-800 mb-2">Instructions</h4>
        <p className="text-gray-700 bg-white/50 p-4 rounded-lg border border-gray-100">
          {recommendation.instructions}
        </p>
      </div> */}
      
      {/* {recommendation.warnings.length > 0 && (
        <div>
          <h4 className="font-medium text-medisure-800 mb-2">Warnings</h4>
          <ul className="bg-red-50 border border-red-100 rounded-lg p-4">
            {recommendation.warnings.map((warning, index) => (
              <li key={index} className="text-red-700 flex items-start mb-2 last:mb-0">
                <span className="inline-block mr-2">•</span>
                <span>{warning}</span>
              </li>
            ))}
          </ul>
        </div>
      )} */}
      
      <div className="mt-8 pt-4 border-t border-gray-100 text-gray-500">
        <p>This recommendation is based on the information provided and should be verified by a healthcare professional before use.</p>
      </div>
    </div>
  );
};

export default DosageResult;