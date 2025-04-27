import React, { useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react"; 
import SpinnerForButtonr from "..//utils/SppinerForButton";
import { registerURL } from "../utils/url";
import Toastnotification from "../utils/Toastnotification";
import logo from "../assets/images/logo.png";
import MentorRegistration from "./MentorRegistration"; 

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswod] = useState("");
  const [mobileNumber, setmobileNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false);

  const { showToast } = Toastnotification();

  const registerData = {
    name,
    email,
    mobileNumber,
    password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await axios.post(registerURL, registerData);
      console.log(response.data);
      const { msg } = response.data;

      if (msg === `user already register with email ${email}`) {
        showToast("Use another email", msg, "error");
      } else if (
        msg === `user already register with mobile number ${mobileNumber}`
      ) {
        showToast("Use another mobile number", msg, "error");
      } else if (msg === `Error while hashing password`) {
        showToast("Error while hashing password", msg, "error");
      } else if (msg === `user register successfully`) {
        showToast(
          "User registered successfully",
          "Please login using email and password"
        );
      } else {
        showToast(msg, msg, "error");
      }
    } catch (error) {
      console.error("Registration Error:", error);
      showToast("Something went wrong", error.message, "error");
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#3e027e] p-4">
      <div className="flex w-full max-w-5xl h-[600px] rounded-lg overflow-hidden shadow-lg">
        {/* Left side  */}
        <div className="w-1/2 bg-white p-10 flex flex-col justify-center relative">
          <h2 className="text-xl text-[#2c00aa] font-semibold mb-10 border-b-2 border-[#9b4dff] w-fit pb-1 ">
            REGISTER HERE
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Mobile Number"
                value={mobileNumber}
                onChange={(e) => setmobileNumber(e.target.value)}
                required
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPasswod(e.target.value)}
                required
                className="w-full border-b border-gray-300 focus:outline-none py-2"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-to-r from-[#31c1f7] to-[#6536f8] mt-6 text-white font-bold py-2 rounded-full w-full"
            >
              {isSubmitting ? <SpinnerForButtonr /> : "SIGN UP"}
            </button>
          </form>

          {/*  Mentor Button */}
          <Button
            onClick={() => setIsMentorModalOpen(true)}
            mt={6}
            colorScheme="purple"
            variant="outline"
            className="w-full mt-4 border-[#6536f8] border-2 text-[#6536f8] font-bold rounded-full py-2"
          >
            Become a Mentor
          </Button>

          {/* Registration Modal */}
          <MentorRegistration
            isOpen={isMentorModalOpen}
            setIsOpen={setIsMentorModalOpen}
          />
        </div>

        {/* Right side  */}
        <div className="w-1/2 bg-gradient-to-tr from-[#3e027e] to-[#bc06d3] p-10 text-white flex flex-col justify-center items-center relative">
          <img src={logo} alt="Logo" className="mb-4 w-8 h-8" />
          <h2 className="text-lg font-semibold mb-2">Logo Here</h2>
          <h1 className="text-3xl font-bold mb-4 text-center">
            Glad to see you!
          </h1>
          <p className="text-s font-semibold text-red-100 text-center mb-4">
            Create your free account and unlock unlimited possibilities.
          </p>
          <p className="text-sm text-center mb-6">
            Start Your Journey with ElevateHub
            <br />
            Find mentors, discover opportunities, and take your first step
            towards a brighter future.
          </p>
          <p className="text-sm">Sign up with</p>
          <div className="flex justify-center space-x-4 mt-3">
            <img
              src="https://img.icons8.com/color/48/facebook-new.png"
              alt="facebook"
              className="w-6 h-6"
            />
            <img
              src="https://img.icons8.com/color/48/twitter--v1.png"
              alt="twitter"
              className="w-6 h-6"
            />
            <img
              src="https://img.icons8.com/color/48/google-logo.png"
              alt="google"
              className="w-6 h-6"
            />
            <img
              src="https://img.icons8.com/color/48/linkedin.png"
              alt="linkedin"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
