import React from 'react'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-[#12131C] text-white py-16 px-8 lg:px-24">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">About ElevateHub</h2>
        <p className="text-sm text-gray-400 mb-6">
        ElevateHub bridges the gap between ambition and opportunity. Our platform connects students with expert mentors, career opportunities, and real-world experiences. Join a community where growth never stops.
        </p>
        <div className="flex space-x-4">
  <Facebook className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
  <Twitter className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
  <Linkedin className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
  <Youtube className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
</div>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-4 uppercase">Quick Links</h3>
        <ul className="space-y-2 text-sm text-gray-400">
        <Link to="/">     <li><a href="#">Home</a></li> </Link>
        <Link to="/about-us">       <li><a href="#">About Us</a></li></Link>
        <Link to="/">      <li><a href="#">Documentation</a></li></Link>
        <Link to="/contact-us">      <li><a href="#">Contact</a></li></Link>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-4 uppercase">Power</h3>
        <ul className="space-y-2 text-sm text-gray-400">
        <Link to="/mentor-registration">     <li><a href="#">Become a Mentor</a></li></Link>
        <Link to="/all-jobs">     <li><a href="#">Browse Jobs & Internships</a></li></Link>
        <Link to="/all-jobs">     <li><a href="#">Jobs</a></li></Link>
        <Link to="/all-mentors">     <li><a href="#">Book a Mentor</a></li></Link>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-4 uppercase">Subscribe to our Newsletter</h3>
        <div className="flex mb-4">
          <input
            type="email"
            placeholder="youremail@here.com"
            className="bg-[#1E1F29] text-sm text-white px-4 py-2 rounded-l-md w-full outline-none"
          />
          <button className="bg-gradient-to-r from-[#4E5DFF] to-[#45B8FF] px-6 py-2 text-white rounded-r-md font-semibold text-sm">
            SUBSCRIBE
          </button>
        </div>
        <p className="text-xs text-gray-400">
        Stay inspired. Stay connected. Follow us on our social media channels and be part of the ElevateHub movement. ❤️
        </p>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-500">
      <p>© 2025 ElevateHub. Empowering Futures, One Connection at a Time.</p>
      
    </div>
  </footer>
  )
}

export default Footer
