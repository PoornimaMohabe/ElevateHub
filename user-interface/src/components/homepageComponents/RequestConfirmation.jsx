import React from "react";

const RequestConfirmation = () => {
  return (
    <div className="relative min-h-screen bg-[#52acd6] flex items-center justify-center py-10 px-4 overflow-hidden">

  {/* Decorative Circles - Top Left */}
  <div className="absolute top-6 left-6 w-5 h-5 bg-pink-300 rounded-full opacity-70 animate-ping"></div>
  <div className="absolute top-12 left-12 w-3 h-3 bg-blue-300 rounded-full opacity-70 animate-pulse"></div>
  <div className="absolute top-20 left-8 w-4 h-4 bg-yellow-300 rounded-full opacity-60 animate-bounce"></div>

  {/* Decorative Circles - Top Right */}
  <div className="absolute top-8 right-8 w-4 h-4 bg-purple-300 rounded-full opacity-70 animate-ping"></div>
  <div className="absolute top-16 right-14 w-3 h-3 bg-green-300 rounded-full opacity-60 animate-pulse"></div>

  {/* Decorative Circles - Bottom Left */}
  <div className="absolute bottom-20 left-10 w-5 h-5 bg-indigo-300 rounded-full opacity-70 animate-pulse"></div>
  <div className="absolute bottom-10 left-16 w-3 h-3 bg-teal-300 rounded-full opacity-60 animate-ping"></div>

  {/* Decorative Circles - Bottom Right */}
  <div className="absolute bottom-16 right-16 w-4 h-4 bg-rose-300 rounded-full opacity-70 animate-bounce"></div>
  <div className="absolute bottom-8 right-10 w-3 h-3 bg-lime-300 rounded-full opacity-60 animate-pulse"></div>

    {/* Main Card */}
    <div className="w-full max-w-2xl rounded-b-[30px] bg-white shadow-md overflow-hidden z-10">
      <div className="bg-[#C7E1F7] p-6 rounded-b-[30px]">

        <h2 className="text-[#004FA4] text-2xl font-bold mb-4">Request confirmation</h2>

        {/* Mentor Card */}
        <div>
          <h3 className="text-[#004FA4] font-semibold mb-2">Your Mentor</h3>
          <div className="flex items-center bg-white p-4 rounded-2xl shadow-md">
            <div className="flex-1">
              <p className="text-[#004FA4] font-bold text-lg leading-snug">Robert Miller</p>
              <p className="text-[#323232] font-medium text-sm">Senior Marketing Manager</p>
              <p className="text-[#A0A0A0] text-sm">TechLabs, Hamburg, Germany</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
              alt="mentor"
              className="w-16 h-16 rounded-full object-cover ml-4"
            />
          </div>
        </div>

        {/* Meeting Date */}
        <div className="mt-6">
          <h3 className="text-[#004FA4] font-semibold mb-2">Meeting date</h3>
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 bg-white p-4 rounded-2xl shadow-md">
              <p className="text-[#004FA4] font-bold text-base">11th March (Thursday)</p>
              <p className="text-[#A0A0A0] text-sm">12 PM – 12:30 PM</p>
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center justify-center w-24">
              <img
                src="https://img.icons8.com/ios-filled/50/000000/video-call.png"
                alt="video chat"
                className="w-6 h-6 mb-1"
              />
              <p className="text-xs text-[#004FA4] font-medium text-center">Video Chat</p>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-4 flex-wrap">
          <span className="bg-white px-4 py-1 rounded-full text-[#004FA4] text-sm shadow">English</span>
          <span className="bg-white px-4 py-1 rounded-full text-[#004FA4] text-sm shadow">Internship positions</span>
        </div>
      </div>

      {/* Confirmation */}
      <div className="flex flex-col items-center gap-3 py-6">
        <div className="w-12 h-12 bg-[#E6F4FD] rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-[#004FA4]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-[#004FA4] font-semibold">successfully sent out</p>

        <button className="bg-[#F18A47] text-white font-semibold py-3 px-10 rounded-full w-11/12 max-w-sm mt-2">
          close
        </button>
      </div>
    </div>
  </div>
  );
};

export default RequestConfirmation;
