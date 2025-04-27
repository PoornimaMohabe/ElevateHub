import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import JobListing from "./pages/JobListing";
import AllMentors from "./pages/Mentor/AllMentors";
import MentorCard from "./pages/Mentor/MentorCard";
import MentorProfile from "./pages/Mentor/MentorProfile";
import PostJob from "./pages/PostJob";
import MentorRegistration from "./pages/MentorRegistration";

import SingleJobDetails from "./pages/SingleJobDetails";
import MentorsDashboard from "./pages/MentorsDashboard";




const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/all-jobs" element={<JobListing />} />
    
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/dashboard" element={<MentorsDashboard />} />
      <Route path="/jobs" element={<JobListing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/mentor" element={<MentorCard />} />
      <Route path="/all-mentors" element={<AllMentors />} />
      <Route path="/mentor/:id" element={<MentorProfile />} />
      <Route path="/postJob" element={<PostJob />} />
      <Route path="/getSingleJobDetails/:id" element={<SingleJobDetails />} />
      <Route path="/become-coach" element={<MentorRegistration />} />
    </Routes>
  );
};

export default AllRouter;
