import React from "react";
import hero from "../../assets/hero.png";
import { Link } from "react-router-dom";
import {
  Stethoscope,
  Pill,
  PlusCircle,
  UserCheck,
  Shield,
  Users,
  Heart,
} from "lucide-react";

const Hero = () => {
  return (
    <div className="px-4 lg:pt-24 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
          Your <span className="text-blue-600">Personal Health</span>{" "}
          Assistant
        </h1>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
          Get instant medicine recommendations based on your symptoms from our
          intelligent health system.
        </p>
        <div className="flex flex-col space-y-4">
          <FeatureItem
            icon={<Stethoscope className="h-8 w-8 text-blue-600" />}
            text="Professional symptom analysis"
          />
          <FeatureItem
            icon={<Pill className="h-8 w-8 text-blue-600" />}
            text="Smart medicine recommendations"
          />
          <FeatureItem
            icon={<PlusCircle className="h-8 w-8 text-blue-600" />}
            text="24/7 health guidance"
          />
        </div>
        <div className="flex gap-4 mt-8 flex-wrap">
          <Link
            to="/login"
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200"
          >
            Get Started
          </Link>
          <Link
            to="/register"
            className="px-6 py-3 bg-white text-blue-600 rounded-lg border border-blue-600 hover:bg-blue-100 transition-transform duration-200"
          >
            Create Account
          </Link>
        </div>
      </div>

      <div className="hidden md:block relative">
        <div className="absolute inset-0"></div>
        <img
          src={hero}
          alt="Medical professionals"
          className="rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default Hero;

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="bg-blue-100 rounded-full p-2 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}
