import React from "react";
import mentorhome from "../assets/images/mentorhome.png";

const MentorsDashboard = () => {
  return (
    <div className="w-full min-h-screen  bg-gray-50">
      {/* Home Static Section */}
      <div className="relative w-full h-[600px]">
        <div className="absolute inset-0 bg-slate-800 bg-opacity-80 flex flex-col justify-center items-center text-white p-4 z-10">
          <h4 className="text-3xl font-bold mb-4 text-center">You are the true pillars of ElevateHub</h4>
          <p className="text-lg text-center max-w-2xl">
            Welcome to your mentor dashboard! Here you can guide, inspire, and empower the future.
            Fill the gap with your knowledge and experience.
          </p>
        </div>
        <img
          src={mentorhome}
          alt="Mentor Home"
          className="w-full h-[600px] object-cover"
        />
      </div>

      {/* Title Section */}
      <div className="text-center mt-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Mentor Dashboard</h1>
        <p className="text-lg text-gray-600">Manage mentorship requests, post opportunities, and make a lasting impact.</p>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mt-16 p-6">
        {/*Decorative Circles */}
        <div className="col-span-3 flex justify-center items-center relative h-[400px]">

          <div className="absolute w-80 h-80 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 opacity-90"></div>

          <div className="absolute w-52 h-52 rounded-full bg-gradient-to-r from-green-400 to-blue-500 translate-x-16 translate-y-12 opacity-90"></div>

          <div className="absolute w-44 h-44 rounded-full bg-gradient-to-r from-pink-400 to-yellow-500 -translate-x-16 translate-y-20 opacity-90"></div>
        </div>

        {/* Right Side */}
        <div className="col-span-2 flex flex-col justify-center items-start space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">Manage Mentorship Requests</h2>
            <p className="text-gray-600">Review and connect with students seeking your guidance.</p>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold transition">Get Started</button>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">Post Jobs & Internships</h2>
            <p className="text-gray-600">Help students find opportunities by posting jobs and internships.</p>
            <button className="mt-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md font-semibold transition">Post Now</button>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">Expand Your Network</h2>
            <p className="text-gray-600">Build your personal brand while making a difference in someone’s journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsDashboard;
