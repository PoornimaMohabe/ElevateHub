import React, { useState } from "react";
import WelcomeScreen from "../components/homepageComponents/WelcomeScreen";
import MentorCarousel from "../components/homepageComponents/MentorCarousel";
import RequestConfirmation from "../components/homepageComponents/RequestConfirmation";
import statichomeImage from "../assets/images/image.png";
import MentorCard from "./Mentor/MentorCard";
import { Link, useNavigate } from "react-router-dom";

import { Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import MentorDashboard from "./MentorDashboard";

function Home() {
  const state = useSelector((state) => state);
  console.log("statefromhomePage", state?.auth?.role);

  return (
    <div>
      {state?.auth?.role === "mentor" ? (
        <MentorDashboard />
      ) : (
        <div className="py-24 px-6 md:px-20 ">
          <WelcomeScreen />
          <MentorCarousel />

          <MentorCard />

          {/* <RequestConfirmation/> */}
          <section className="bg-[#F1F7FF] py-24 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-4xl md:text-5xl font-extrabold text-[#00356C] mb-6 leading-tight">
                Share your wisdom. <br /> Become a Mentor!
              </h2>
              <p className="text-lg text-gray-700 mb-8 max-w-xl">
                Inspire the next generation by sharing your knowledge and
                experience. Help others grow, build meaningful connections, and
                make a lasting impact on future professionals.
              </p>
              <Link to="/mentor-registration">
                <button className="bg-[#F7903D] hover:bg-[#e3792b] text-white font-semibold px-8 py-3 rounded-full text-lg shadow-lg transition-all duration-300">
                  Become a Mentor
                </button>
              </Link>
            </div>

            {/* Image */}
            <div className="flex-1 flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbYqmGOzMTzE8SS10gy7_DAs7n2WZ-XlxIEw&s"
                alt="Mentorship"
                className="w-full max-w-md rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default Home;
