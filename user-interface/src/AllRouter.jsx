import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";


import AlumniList from "./pages/AlumniList";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/Dashboard";
import Jobs from "./pages/Jobs";

import SignUp from "./pages/SignUp";
import JobListing from "./pages/JobListing";
import AboutUs from "./pages/Aboutus";
import Login from "./pages/Login";

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
    </Routes>
  );
};

export default AllRouter;
