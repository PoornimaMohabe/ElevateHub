import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";

import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/login";

import AllRouter from "./AllRouter";

import JobListing from "./pages/JobListing";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MentorCard from "./pages/Mentor/MentorCard";
import AllMentors from "./pages/Mentor/AllMentors";
import MentorProfile from "./pages/Mentor/MentorProfile";
import PostJob from "./pages/PostJob";


import MentorRegistration from "./pages/MentorRegistration";
import MentorDashboard from "./pages/Mentordashboard";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        {/* <AllMentors /> */}
        <AllRouter />
        {/* <Home /> */}
        {/* <MentorCard />
        <AllMentors /> */}
        {/* <MentorProfile /> */}

        {/* <RequestManagement /> */}
        {/* <PostJob /> */}
        <Footer />
        {/* <Footer /> */}
        {/* <MentorRegistration /> */}

      {/* <MentorDashboard/> */}
        {/* <Login /> */}
        {/* <AboutUs/> */}
        {/* <ContactUs /> */}
        {/* <SignUp /> */}
        {/* <JobListing /> */}
        {/* <ContactUs /> */}
        {/* <SignUp /> */}
        {/* <JobListing /> */}
      </div>
    </>
  );
}

export default App;
