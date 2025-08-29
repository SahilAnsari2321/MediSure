import React from 'react';
import { Stethoscope, Pill, PlusCircle, UserCheck, Shield, Users, Heart } from 'lucide-react';

const Service = () => {
  return (
    <section className="py-20 mt-10">
     
      <h2 className="text-4xl font-extrabold leading-tight text-gray-900 text-center mb-8">Our Key Services</h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        <ServiceItem icon={<Users className="h-10 w-10 text-blue-600" />} title="Wide User Base" description="Join thousands of people who rely on us for quick health recommendations." />
        <ServiceItem icon={<Heart className="h-10 w-10 text-blue-600" />} title="Health Monitoring" description="Track your health status with personalized health tips based on your symptoms." />
        <ServiceItem icon={<Stethoscope className="h-10 w-10 text-blue-600" />} title="Expert Analysis" description="Get advice from healthcare professionals based on accurate symptom analysis." />
        <ServiceItem icon={<Shield className="h-10 w-10 text-blue-600" />} title="Data Security" description="Your health data is encrypted and secured to ensure full privacy." />
        <ServiceItem icon={<Pill className="h-10 w-10 text-blue-600" />} title="Medication Guidance" description="Receive the best possible medication suggestions based on your inputs." />
        <ServiceItem icon={<PlusCircle className="h-10 w-10 text-blue-600" />} title="24/7 Support" description="Our virtual assistants are available to support you anytime, anywhere." />
      </div>
    </section>
  );
};

export default Service;

function ServiceItem({ icon, title, description }) {
  return (
    <div className="text-center bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center justify-center bg-blue-50 rounded-full p-4 shadow-md mx-auto w-16 h-16 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mt-2">{title}</h3>
      <p className="text-gray-600 mt-3">{description}</p>
    </div>
  );
}
