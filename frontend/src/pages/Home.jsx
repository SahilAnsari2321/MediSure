import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Home/Hero";
import Faq from "../components/Home/Faq";
import Service from "../components/Home/Service";
import Stats from "../components/Home/Stats";
import FAQ from "../components/Home/Faq";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-medisure-50 to-blue-50 page-transition">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with enhanced design */}
        <Hero />

        {/* Service Section with Icons */}
        <Service />

        {/* Frequently Asked Questions (FAQ) */}
        <FAQ />

        {/* Statistics Section */}
        <Stats />

        {/* Contact Us Section */}
        <section className="py-16">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-lg text-gray-700 mt-4">
            Have any questions or feedback? We'd love to hear from you!
          </p>
          <div className="flex justify-center mt-8">
            <Link
              to="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-200"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
