import React, { useState } from "react";
import CreateJobForm from "./JobForm";
import { X, Menu } from "lucide-react";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <>
      <nav className="w-full bg-white px-6 py-4 flex items-center justify-between md:justify-around relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img src="/cmwlogo.svg" alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#303030]">
          <li className="hover:text-black cursor-pointer">Home</li>
          <li className="hover:text-black cursor-pointer">Find Jobs</li>
          <li className="hover:text-black cursor-pointer">Find Talents</li>
          <li className="hover:text-black cursor-pointer">About us</li>
          <li className="hover:text-black cursor-pointer">Testimonials</li>
        </ul>

        {/* Desktop Create Jobs Button */}
        <button
          className="hidden md:block bg-[#A128FF] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition"
          onClick={toggleForm}
        >
          Create Jobs
        </button>

        {/* Hamburger Icon - Mobile */}
        <button
          className="md:hidden text-gray-700"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden bg-white absolute top-[72px] left-0 w-full px-6 py-4 shadow-md space-y-4 text-sm font-semibold text-[#303030] transform transition-transform duration-300 ease-in-out z-40 ${
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      >
        <li className="hover:text-black cursor-pointer">Home</li>
        <li className="hover:text-black cursor-pointer">Find Jobs</li>
        <li className="hover:text-black cursor-pointer">Find Talents</li>
        <li className="hover:text-black cursor-pointer">About us</li>
        <li className="hover:text-black cursor-pointer">Testimonials</li>
        <button
          className="w-full bg-[#A128FF] text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:opacity-90 transition"
          onClick={() => {
            toggleForm();
            setMobileMenuOpen(false);
          }}
        >
          Create Jobs
        </button>
      </div>

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
