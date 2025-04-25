import {
    FaRegBuilding,
    FaRegComments,
    FaBolt,
    FaStar,
    FaLinkedin,
    FaGithub,
  } from "react-icons/fa";
  import { getAllMentor } from "../../utils/url";
  import axios from "axios";
  import { useEffect, useState } from "react";
  import { Button } from "@chakra-ui/react";
  
  function MentorCard() {
    const [mentors, setMentors] = useState([]);
    const visibleMentors = mentors.slice(0, 6);
  
    const fetchAllMentors = async () => {
      try {
        const response = await axios.get(getAllMentor);
        setMentors(response.data.all_Mentors);
      } catch (err) {
        console.log(err.message);
      }
    };
  
    useEffect(() => {
      fetchAllMentors();
    }, []);
  
  
  
   
    return (
      <div className="px-40 py-6 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
          {visibleMentors.map((mentor, index) => (
            <div
              key={index}
              className="w-full md:w-[100%] bg-white rounded-xl shadow border border-gray-100 overflow-hidden"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="w-40 h-40 rounded-full  mx-auto object-cover"
              />
  
              <div className="p-4 flex flex-col justify-between h-full">
                <div>
                  <div className="text-base font-semibold">{mentor.name}</div>
                  
                  <div className="text-gray-600 text-sm mt-1 flex justify-between gap-1 items-start">
                  <div className="flex "><FaRegBuilding className="mt-0.5" />
                    <p>{mentor.Designation}</p>
                    </div>
                    <button className="bg-blue-900 hover:bg-blue-700 text-white shadow border rounded-xs h-8 p-2 ">Know More</button>
                  </div>
  
                  {mentor.tag && (
                    <div className="inline-flex items-center gap-1 bg-green-100 text-green-800 text-xs font-semibold px-2 py-0.5 rounded mt-2">
                      {mentor.tag === "Available ASAP" ? <FaBolt /> : <FaStar />}
                      {mentor.tag}
                    </div>
                  )}
  
                  <div className="flex justify-between bg-red-100 mt-4 p-2   text-sm text-gray-500">
                    <div className="border-t pt-2">
                      <p className="text-gray-400">Experience</p>
                      <p className="text-black font-medium">
                        {mentor.Years_Of_Experience} yrs
                      </p>
                    </div>
                    <div className="flex border-t pt-2 gap-4 text-xl text-gray-600">
                      <a
                        href={mentor.linkedln_Profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-700"
                      >
                        <FaLinkedin />
                      </a>
                      <a
                        href={mentor.github_Profile}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-black"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
  
          {mentors.length > 6 && (
            <div className="text-center mt-10">
              <a
                href="/all-mentors"
                className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
              >
                View More Mentors
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default MentorCard;
  