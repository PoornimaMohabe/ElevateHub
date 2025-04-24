import React from 'react'
import { Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-[#12131C] text-white py-16 px-8 lg:px-24">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div>
        <h2 className="text-2xl font-bold mb-4">POWER.</h2>
        <p className="text-sm text-gray-400 mb-6">
          An inexpensive, quick and easy way to build beautiful responsive website pages without coding knowledge
        </p>
        <div className="flex space-x-4">
  <Facebook className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
  <Twitter className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
  <Linkedin className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
  <Youtube className="w-5 h-5 text-white hover:text-gray-300 cursor-pointer" />
</div>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-4 uppercase">Maka Agency</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#">Home</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-white mb-4 uppercase">Power</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li><a href="#">Pillar Page</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Pricing</a></li>
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
          Here you can add a hint regarding the subscription and / or use the GDPR settings of the form. Yes, our template is GDPR ready and completely translatable by the way ❤️
        </p>
      </div>
    </div>

    <div className="mt-16 border-t border-gray-700 pt-6 flex flex-col lg:flex-row items-center justify-between text-sm text-gray-500">
      <p>© 2022 maka Agency – All rights reserved</p>
      <div className="flex space-x-4 mt-4 lg:mt-0">
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
  )
}

export default Footer
