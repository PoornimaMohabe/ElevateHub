import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import navlogo from "../assets/images/navbarLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    {
      name: "Mentors",
      dropdown: [
        { label: "Find Mentor", path: "/all-mentors" },
        // { label: "Become a Mentor", path: "/become-coach" },
      ],
    },
    {
      name: "Jobs",
      dropdown: [
        { label: "Browse Jobs", path: "/jobs" },
        { label: "Post Jobs", path: "/postJob" },
      ],
    },

    { name: "Contact", path: "/contact-us" },
  ];

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl h-20 mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          <img src={navlogo} alt="Logo" className="h-10 object-cover" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() => setDropdown(link.name)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button className="flex items-center gap-1 hover:text-blue-600 transition">
                  {link.name}
                  <ChevronDown size={16} />
                </button>

                {/* Dropdown menu */}
                {dropdown === link.name && (
                  <div className="absolute top-full left-0  bg-white border shadow-md rounded-lg p-2 space-y-2 z-50 w-48">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block px-3 py-1 text-sm hover:bg-blue-50 rounded-md hover:text-blue-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="hover:text-blue-600 transition"
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex gap-4">
          <Link to="/login">
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
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6 pt-2 bg-white shadow-md space-y-4">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.name} className="space-y-2">
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center justify-between w-full text-left font-medium text-gray-700 hover:text-blue-600"
                >
                  {link.name}
                  <ChevronDown
                    size={18}
                    className={`${
                      dropdown === link.name ? "rotate-180" : ""
                    } transition`}
                  />
                </button>
                {dropdown === link.name && (
                  <div className="pl-4 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="block text-sm text-gray-600 hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="block text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          )}

          <hr className="my-2" />

          <Link to="/login" className="block text-blue-600 font-semibold">
            Login
          </Link>
          <Link
            to="/sign-up"
            className="block text-white bg-blue-600 text-center py-2 rounded-md hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
