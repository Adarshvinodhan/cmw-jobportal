import React, { useState } from "react";
import CreateJobForm from "./JobForm";
import { X } from "lucide-react";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);

  return (
    <>
      <nav className="w-full bg-white px-6 py-4 flex items-center justify-around">
        {/* Logo + Links */}
        <div className="flex items-center gap-16">
          <img src="/cmwlogo.svg" alt="Logo" className="w-10 h-10 rounded-full" />
          <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#303030]">
            <li className="hover:text-black cursor-pointer">Home</li>
            <li className="hover:text-black cursor-pointer">Find Jobs</li>
            <li className="hover:text-black cursor-pointer">Find Talents</li>
            <li className="hover:text-black cursor-pointer">About us</li>
            <li className="hover:text-black cursor-pointer">Testimonials</li>
          </ul>
          <button
            className="bg-[#A128FF] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition"
            onClick={toggleForm}
          >
            Create Jobs
          </button>
        </div>
      </nav>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="relative bg-white rounded-2xl p-6 max-w-3xl w-full shadow-xl animate-fadeIn">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
              onClick={toggleForm}
            >
              <X size={24} />
            </button>

            <CreateJobForm />
          </div>
        </div>
      )}
    </>
  );
}
