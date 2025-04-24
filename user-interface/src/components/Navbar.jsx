// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">YourLogo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-blue-600 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition duration-300">
            Features
          </a>
          <a href="#" className="hover:text-blue-600 transition duration-300">
            Pricing
          </a>
          <a href="#" className="hover:text-blue-600 transition duration-300">
            Contact
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login">
            {" "}
            <button className="text-sm font-semibold px-4 py-2 rounded-md text-gray-700 hover:text-blue-600">
              Login
            </button>
          </Link>
          <Link to="/sign-up">
            <button className="text-sm font-semibold px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Sign Up
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button className="text-gray-700 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
