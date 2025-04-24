// components/MentorCarousel.jsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mentors = [
  {
    name: "Robert Miller",
    role: "Senior Marketing Manager",
    company: "TechLabs",
    image: "/mentor-profile.jpg", // Use actual image path
  },
  {
    name: "Jane Doe",
    role: "Product Designer",
    company: "InnovateX",
    image: "/mentor-profile.jpg",
  },
  {
    name: "John Smith",
    role: "Software Engineer",
    company: "NextGen Tech",
    image: "/mentor-profile.jpg",
  },
];

const MentorCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white py-12 px-0">
      <h2 className="text-xl font-semibold text-center text-[#2C3E50] mb-8">
        Suggested mentors
      </h2>

      <Slider {...settings} className="w-full">
        {mentors.map((mentor, index) => (
          <div key={index} className="w-full">
            <div className="w-full flex flex-col items-center justify-center bg-[#F1F7FF] py-10 rounded-none">
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-48 h-48 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-xl font-bold text-[#00356C]">{mentor.name}</h3>
              <p className="text-base text-gray-700 font-semibold">
                {mentor.role}
              </p>
              <p className="text-sm text-gray-600 mb-6">{mentor.company}</p>
              <button className="bg-[#F7903D] hover:bg-[#e3792b] text-white px-6 py-2 rounded-full text-sm font-semibold transition">
                show profile
              </button>
              <div className="mt-6">
                <p className="text-center text-gray-400 text-sm">
                  {index + 1} of {mentors.length}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default MentorCarousel;
