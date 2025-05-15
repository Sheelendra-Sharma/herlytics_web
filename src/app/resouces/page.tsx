"use client";

import React from "react";
import {
  FaGraduationCap,
  FaBookOpen,
  FaDesktop,
  FaUniversity,
} from "react-icons/fa";

type Resource = {
  icon: React.ReactNode;
  label: string;
};

const resources: Resource[] = [
  { icon: <FaGraduationCap size={50} />, label: "Online Courses" },
  { icon: <FaBookOpen size={50} />, label: "Learning Material" },
  { icon: <FaDesktop size={50} />, label: "Hands-on Lab" },
  { icon: <FaUniversity size={50} />, label: "Govt Interface" },
];

const page: React.FC = () => {
  return (
    <section className="flex flex-col items-center py-16 bg-gray-50">
      <h2 className="text-4xl font-bold text-gray-900 mb-12">Resources</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {resources.map((res, idx) => (
          <div
            key={idx}
            className="w-56 h-56 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-2 hover:shadow-2xl duration-300"
          >
            <div className="text-orange-500 mb-4">{res.icon}</div>
            <p className="text-lg font-semibold text-gray-800 text-center">
              {res.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default page;
