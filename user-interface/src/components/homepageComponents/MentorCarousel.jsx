// components/MentorCarousel.jsx
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getAllMentor } from "../../utils/url";
import axios from "axios";
import { Link } from "react-router-dom";

const MentorCarousel = () => {
  const [mentors, setMentors] = useState([]);

  const fetchAllMentors = async () => {
    try {
      const response = await axios.get(getAllMentor);
      const allMentors = response.data.all_Mentors;

      const lastThreeMentors = allMentors.slice(-3);

      setMentors(lastThreeMentors);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchAllMentors();
  }, []);

  console.log("mentors from mentor course", mentors);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    centerMode: true,
    centerPadding: "120px",
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "80px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "30px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="w-full bg-[#F1F7FF] py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-[#00356C] mb-12">
        Suggested Mentors
      </h2>

      <Slider {...settings} className="w-full">
        {mentors &&
          mentors.map((mentor, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#c7c7df] backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-8 shadow-lg transition-transform hover:scale-105 duration-300">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-40 h-40 object-cover rounded-full mb-6 border-4 border-[#0262C2]"
                />
                <h3 className="text-2xl font-extrabold text-[#00356C] mb-2 text-center">
                  {mentor.name}
                </h3>
                <p className="text-base font-medium text-[#101012] text-center">
                  {mentor.Designation}
                </p>
                <Link to={`/mentor/${mentor._id}`}>
                  <button className="bg-[#F7903D] hover:bg-[#e3792b] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300">
                    Show Profile
                  </button>
                </Link>

                <p className="text-gray-600 text-xs mt-4">
                  {index + 1} of {mentors.length}
                </p>
              </div>
            </div>
          ))}
      </Slider>
    </section>
  );
};

export default MentorCarousel;
