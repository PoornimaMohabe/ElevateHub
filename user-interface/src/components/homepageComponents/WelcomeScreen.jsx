import { Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const WelcomeScreen = () => {
  return (
    <div className="bg-[#0262C2] min-h-screen flex flex-col justify-center items-center text-white px-6 py-10 relative overflow-hidden">
      {/* Background circles animation */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-full w-4 h-4 m-2 animate-pulse"
          ></div>
        ))}
      </div>

      {/* Main Avatar Group */}
      <div className="relative w-72 h-72 mb-10">
        <div className="absolute bg-white rounded-full w-28 h-28 top-0 left-1/2 transform -translate-x-1/2 border-4 border-[#0262C2] overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mc_3lfLFYqJ98feOSZ9bq2xQEkN8kgUpLvwknxRSe6ljY4VBaFszWsQiHTQlqfzNr1g&usqp=CAU"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bg-white rounded-full w-20 h-20 top-[30%] left-4 border-4 border-[#0262C2] overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mc_3lfLFYqJ98feOSZ9bq2xQEkN8kgUpLvwknxRSe6ljY4VBaFszWsQiHTQlqfzNr1g&usqp=CAU"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bg-white rounded-full w-20 h-20 top-[30%] right-4 border-4 border-[#0262C2] overflow-hidden shadow-lg">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mc_3lfLFYqJ98feOSZ9bq2xQEkN8kgUpLvwknxRSe6ljY4VBaFszWsQiHTQlqfzNr1g&usqp=CAU"
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 leading-tight">
        Find your <br /> perfect Mentor
      </h1>

      {/* Main Button */}
      <Link to="/all-mentors">
        <Button className="bg-white text-[#0262C2] font-semibold px-10 py-3 rounded-full text-lg flex items-center gap-3 shadow-md hover:scale-105 transition-all duration-300">
          Let’s Start <span className="text-2xl">→</span>
        </Button>
      </Link>
    </div>
  );
};

export default WelcomeScreen;
