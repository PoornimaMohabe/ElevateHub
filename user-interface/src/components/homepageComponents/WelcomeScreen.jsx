import React from "react";

const WelcomeScreen = () => {
  return (
    <div className="bg-[#0262C2] min-h-screen flex flex-col justify-center items-center text-white px-6">
      <div className="relative w-[220px] h-[220px] mb-8">
        <div className="absolute bg-white rounded-full w-20 h-20 top-0 left-[50%] transform -translate-x-1/2 border-4 border-[#0262C2] overflow-hidden">
          <img src="/avatar1.jpg" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bg-white rounded-full w-16 h-16 top-[30%] left-0 border-4 border-[#0262C2] overflow-hidden">
          <img src="/avatar2.jpg" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="absolute bg-white rounded-full w-16 h-16 top-[30%] right-0 border-4 border-[#0262C2] overflow-hidden">
          <img src="/avatar3.jpg" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 flex flex-wrap justify-center items-center gap-2 opacity-30">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="bg-white rounded-full w-3 h-3"></div>
          ))}
        </div>
      </div>

      <h1 className="text-3xl font-bold text-center mb-8">Find your <br /> mentor</h1>

      <button className="bg-white text-[#0262C2] font-semibold px-8 py-2 rounded-full text-sm flex items-center gap-2">
        let’s start <span className="text-xl">→</span>
      </button>

      <button className="mt-6 text-white text-sm opacity-80 underline">
        let’s do it later
      </button>
    </div>
  );
};

export default WelcomeScreen;
