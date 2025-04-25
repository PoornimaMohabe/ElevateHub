import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

import AlumniList from "./pages/AlumniList";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import JobListing from "./pages/JobListing";
import AllMentors from "./pages/Mentor/AllMentors";
import MentorCard from "./pages/Mentor/MentorCard";


const AllRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/all-jobs" element={<JobListing />} />
      <Route path="/alumni-list" element={<AlumniList />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/mentor" element={<MentorCard />} />
      <Route path="/all-mentors" element={<AllMentors />} />
    </Routes>
  );
};

export default AllRouter;
