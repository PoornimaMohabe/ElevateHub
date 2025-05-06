import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaFacebook,
  FaTelegram,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { bookMentor, getSingleMentor } from "../../utils/url";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import Toastnotification from "../../utils/Toastnotification";
import { useSelector } from "react-redux";
import { authorizationToken } from "../../utils/Token";

const MentorProfile = () => {
  const [mentor, setMentors] = useState({});
  const [topic, setTopic] = useState("");
  const { id } = useParams();
  const { showToast } = Toastnotification();
  const navigate = useNavigate();
  const location = useLocation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const state = useSelector((state) => state);

  const fetchMentor = async () => {
    const getSingleMentorURL = `${getSingleMentor}/${id}`;
    try {
      const response = await axios.get(getSingleMentorURL);
      setMentors(response.data.mentor);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchMentor();
  }, [id]);

  const handleBooking = async () => {
    const token = localStorage.getItem("token");
    const userdetails = JSON.parse(localStorage.getItem("user"));

    if (!token) {
      showToast("Please login", "Please login to book a mentor.", "error");
      localStorage.setItem("redirectPath", location.pathname);
      navigate("/login");
      return;
    }

    if (!topic.trim()) {
      showToast("Topic is required", "Please enter the topic.", "warning");
      return;
    }

    try {
      const bookingData = {
        mentorId: mentor._id,
        mentorName: mentor.name,
        userId: userdetails._id,
        username: userdetails.name,
        email: userdetails.email,
        mobileNumber: userdetails.mobileNumber,
        topicOnWhichGuidanceIsRequired: topic,
      };

      const response = await axios.post(bookMentor, bookingData, {
        headers: {
          Authorization: token,
        },
      });
      console.log(authorizationToken);

      console.log("this is from mentor booking", response.data);

      showToast("Mentor booked successfully!", "success");
      onClose();
      setTopic("");
    } catch (error) {
      console.error(error);
      showToast("Failed to book mentor.", error.message, "error");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-6 p-8">
          <img
            src={mentor.image}
            alt="Mentor"
            className="rounded-xl w-36 h-40 object-cover"
          />

          <div className="flex-1 sm:mt-[auto]">
            <div className="flex justify-between items-center gap-2 ">
              <h2 className="text-xl font-bold">{mentor.name}</h2>

              {/* Book Mentor Button */}
              <Button
                onClick={onOpen}
                colorScheme="green"
                className="bg-lime-800 text-white px-4 py-2 text-sm md:p-4 md:text-base rounded-md"
              >
                Book Mentor
              </Button>
            </div>
            <p className="text-sm text-gray-600 mt-1">{mentor.Designation}</p>
            <p className="text-sm mt-2 text-gray-700">
              🗣️ Speaks: <span className="font-medium">English</span>
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              <div className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                ✅ A highly rated and experienced mentor
              </div>
              <div className="bg-red-100 text-red-700 text-xs font-medium px-3 py-1 rounded-full">
                🏆 Top 1% ENGLISH TUTOR
              </div>
            </div>
          </div>
        </div>

        {/* Body Section */}
        <div className="md:flex gap-10 p-8 pt-4">
          {/* About Me */}
          <div className="md:w-2/3">
            <h3 className="text-sm font-semibold mb-2">About Me</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {mentor.bio}
            </p>
          </div>

          {/* Contact Details */}
          <div className="md:w-1/3">
            <h3 className="text-sm font-semibold mb-2 sm:mt-3">
              Contact Details
            </h3>
            <p className="text-xs text-gray-500">EMAIL ADDRESS</p>
            <p className="text-sm text-blue-500 mb-4">{mentor.email}</p>
            <p className="text-xs text-gray-500">SOCIAL MEDIA</p>

            <div className="flex gap-3 my-2 text-gray-600 text-lg">
              {mentor.linkedln_Profile && (
                <a
                  href={mentor.linkedln_Profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              )}
              {mentor.github_Profile && (
                <a
                  href={mentor.github_Profile}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-4 mb-2 sm:mt-4">SKILLS</p>
            <div className="flex flex-wrap gap-2">
              {mentor.tech_Skill &&
                mentor.tech_Skill.map((skill) => (
                  <span
                    key={skill}
                    className="bg-gray-100 text-xs px-2 py-1 rounded text-gray-700"
                  >
                    {skill}
                  </span>
                ))}
            </div>
          </div>
        </div>

        {/* Availability */}
        <div className="px-8 pb-8 mt-[-40px] sm:mt-3 ">
          <h3 className="text-sm font-semibold mb-4">Availability</h3>
          <div className="flex flex-wrap gap-6 px-1">
            <div>
              <p className="text-s text-gray-400">05:00 pm</p>
            </div>
            <div>
              <p className="text-s text-gray-400">06:00 pm</p>
            </div>
            <div>
              <p className="text-s text-gray-400">07:00 pm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for entering topic */}
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter Topic for Guidance</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              placeholder="Enter the topic..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="green" mr={3} onClick={handleBooking}>
              Book Mentor
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MentorProfile;
