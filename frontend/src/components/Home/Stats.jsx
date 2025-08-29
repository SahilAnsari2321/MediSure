import React from "react";
import CountUp from "react-countup";
import { Users, Stethoscope, Heart, Shield } from "lucide-react";

const Stats = () => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
        Our Impact in Numbers
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 px-4">
        <StatItem
          icon={<Users className="h-10 w-10 text-blue-600" />}
          end={15000}
          suffix="+"
          title="Active Users"
        />
        <StatItem
          icon={<Heart className="h-10 w-10 text-blue-600" />}
          end={1200}
          title="Successful Health Plans"
        />
        <StatItem
          icon={<Stethoscope className="h-10 w-10 text-blue-600" />}
          end={300}
          suffix="+"
          title="Medical Partners"
        />
        <StatItem
          icon={<Shield className="h-10 w-10 text-blue-600" />}
          end={99.9}
          decimals={1}
          suffix="%"
          title="Data Security"
        />
      </div>
    </section>
  );
};

export default Stats;

function StatItem({ icon, end, suffix, decimals = 0, title }) {
  return (
    <div className="text-center bg-white p-8 rounded-2xl shadow-lg transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center justify-center bg-blue-50 rounded-full p-4 shadow-md mx-auto w-16 h-16 mb-4">
        {icon}
      </div>
      <h3 className="text-4xl font-bold text-gray-900">
        <CountUp end={end} suffix={suffix} decimals={decimals} duration={2.5} />
      </h3>
      <p className="text-gray-600 mt-2">{title}</p>
    </div>
  );
}
