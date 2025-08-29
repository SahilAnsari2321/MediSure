import React, { useRef, useState } from "react";
import { Mic, MicOff } from "lucide-react";
import { toast } from "react-toastify";

const VoiceInput = ({ searchTerm, setSearchTerm }) => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => setIsListening(true);

    recognition.onresult = (event) => {
      const transcript = event.results[event.results.length - 1][0].transcript;
      setSearchTerm((prev) => prev + (prev ? " " : "") + transcript);
    };

    recognition.onend = () => setIsListening(false);

    recognitionRef.current = recognition;
    recognition.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return (
    <div className="">
      <button
        onClick={isListening ? stopListening : startListening}
        className={`p-2 rounded-full text-white ${
          isListening ? "bg-red-500" : "bg-blue-500"
        }`}
      >
        {isListening ? <MicOff size={24} /> : <Mic size={24} />}
      </button>
    </div>
  );
};

export default VoiceInput;
