import React, { useState, useRef } from "react";
import { TriangleAlert, CheckCircle, ArrowDown } from "lucide-react";

const Dosage = ({ medicines }) => {
  const scrollRef = useRef(null);
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (el) {
      setShowScrollBtn(
        el.scrollHeight > el.clientHeight &&
          el.scrollTop + el.clientHeight < el.scrollHeight
      );
    }
  };

  const scrollDown = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ top: 200, behavior: "smooth" });
      setTimeout(checkScroll, 300); // Re-check after scrolling
    }
  };

  return (
    <div className="space-y-6 w-full">
      <div className="relative bg-white bg-opacity-90 rounded-3xl shadow-2xl p-6 overflow-hidden w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-100 opacity-30 pointer-events-none" />
        <h3 className="relative text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 text-center flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
          <div className="flex justify-center bg-blue-200 rounded-full p-4 shadow-md">
            <CheckCircle color="blue" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
          Dosage Recommendation
        </h3>

        {medicines.length === 0 ? (
          <>
            <p className="text-gray-700 text-center text-lg sm:text-xl font-medium py-10">
              Select symptoms and Submit to see medicine recommendation
            </p>
            <div className="flex flex-col items-center p-4">
              <TriangleAlert className="text-orange-500 w-8 h-8 sm:w-10 sm:h-10" />
              <p className="text-center text-base sm:text-lg font-semibold text-red-500 mt-4">
                *Please select only the symptoms you have experienced. Incorrect
                selections may affect the results.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Scrollable List */}
            <div
              ref={scrollRef}
              onScroll={checkScroll} // Check on mobile touch
              onMouseEnter={checkScroll} // Check scroll when hovering
              onTouchStart={checkScroll} // Check on mobile touch
              className="max-h-[70vh] overflow-y-auto p-4"
            >
              {medicines.map((medicine, index) => (
                <div
                  key={index}
                  className="glass-card hover-card p-6 rounded-2xl shadow-md mt-4 flex flex-col sm:flex-row justify-between items-center gap-4"
                >
                  <div className="text-center sm:text-left flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      {medicine.medicine}
                    </h3>
                    <p className="text-blue-600 text-base sm:text-lg mt-1">
                      {medicine.dosage}mg per dose
                    </p>
                    <p className="text-gray-700 text-base sm:text-lg mt-2">
                      <strong>Duration:</strong> {medicine.duration} days
                    </p>
                    <a
                      href={`https://www.drugs.com/${medicine.medicine
                        .replace(/\s+/g, "-")
                        .toLowerCase()}.html`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline text-sm sm:text-base mt-3"
                    >
                      Learn more about {medicine.medicine}
                    </a>
                  </div>
                  <span className="text-blue-700 bg-blue-200 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm sm:text-lg font-medium">
                    {medicine.frequency} times a day
                  </span>
                </div>
              ))}
            </div>

            {/* Scroll Down Button */}
            {showScrollBtn && (
              <button
                onClick={scrollDown}
                className="fixed bottom-2 right-[65vh] bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
              >
                <ArrowDown className="w-4 h-4" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Dosage;
