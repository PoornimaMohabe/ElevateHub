import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import { addMentor } from "../utils/url";
import axios from "axios";
import Toastnotification from "../utils/Toastnotification";

const MentorRegistration = ({ isOpen, setIsOpen }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_Number: "",
    image: "",
    tech_Skill: "",
    Designation: "",
    bio: "",
    availability: "",
    Years_Of_Experience: "",
    linkedln_Profile: "",
    github_Profile: "",
  });

  const { showToast } = Toastnotification();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      tech_Skill: formData.tech_Skill.split(",").map((item) => item.trim()),
      availability: formData.availability.split(",").map((item) => item.trim()),
    };

    try {
      const response = await axios.post(addMentor, payload);
      showToast("Mentor application submitted successfully!", "success");
      setIsOpen(false);
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        phone_Number: "",
        image: "",
        tech_Skill: "",
        Designation: "",
        bio: "",
        availability: "",
        Years_Of_Experience: "",
        linkedln_Profile: "",
        github_Profile: "",
      });
    } catch (error) {
      console.error(error.message);
      showToast("Failed to submit mentor application.", error.message, "error");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      size="4xl" // 🛠️ Increased Modal size for larger screens
      isCentered
    >
      <ModalOverlay />
      <ModalContent borderRadius="2xl" p={{ base: 4, md: 8 }}>
        <ModalHeader fontSize="2xl" textAlign="center" color="gray.700">
          Apply to Become a Mentor
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-gray-700">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Phone Number *</label>
              <input
                type="text"
                name="phone_Number"
                value={formData.phone_Number}
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Profile Image URL *</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                required
                placeholder="Paste your profile image URL"
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">Designation *</label>
              <input
                type="text"
                name="Designation"
                value={formData.Designation}
                onChange={handleChange}
                required
                placeholder="e.g., Software Engineer, Data Scientist"
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">
                Years of Experience *
              </label>
              <input
                type="number"
                name="Years_Of_Experience"
                value={formData.Years_Of_Experience}
                onChange={handleChange}
                min="0"
                required
                placeholder="Enter years of experience"
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">LinkedIn Profile *</label>
              <input
                type="url"
                name="linkedln_Profile"
                value={formData.linkedln_Profile}
                onChange={handleChange}
                required
                placeholder="Enter your LinkedIn URL"
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block text-gray-700">GitHub Profile *</label>
              <input
                type="url"
                name="github_Profile"
                value={formData.github_Profile}
                onChange={handleChange}
                required
                placeholder="Enter your GitHub URL"
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700">Technical Skills *</label>
              <input
                type="text"
                name="tech_Skill"
                value={formData.tech_Skill}
                onChange={handleChange}
                placeholder="e.g., React, Node.js, MongoDB"
                required
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700">Availability *</label>
              <input
                type="text"
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                placeholder="e.g., Weekends, Evenings"
                required
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-700">Short Bio *</label>
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                required
                placeholder="Tell us something about yourself..."
                className="mt-1 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 p-2 placeholder-gray-400"
              />
            </div>

            <div className="md:col-span-2 flex justify-center">
              <Button
                type="submit"
                colorScheme="orange"
                size="lg"
                fontWeight="bold"
                px={8}
              >
                Submit Application
              </Button>
            </div>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default MentorRegistration;
