import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Dashboard from "./pages/MentorDashboard";
import Login from "./pages/login";
import SignUp from "./pages/SignUp";
import JobListing from "./pages/JobListing";
import AllMentors from "./pages/Mentor/AllMentors";
import MentorCard from "./pages/Mentor/MentorCard";
import MentorProfile from "./pages/Mentor/MentorProfile";
import PostJob from "./pages/PostJob";

import MentorRegistrationPage from "./pages/MentorRegistration";
import SignUpAs from "./pages/SignUpAs";

// import ScrollToTop from "./pages/ScrollTop";
import StudentSendRequestToMentor from "./pages/StudentSendRequestToMentor";
import BookingList from "./pages/RequestManagment";
import SingleJobDetails from "./pages/SingleJobDetails";

const AllRouter = () => {
  return (
    // <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/all-jobs" element={<JobListing />} />

        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<JobListing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/mentor" element={<MentorCard />} />
        <Route path="/mentorship-request" element={<BookingList />} />
        <Route path="/all-mentors" element={<AllMentors />} />
        <Route path="/mentor/:id" element={<MentorProfile />} />
        <Route path="/postJob" element={<PostJob />} />
        <Route path="/getSingleJobDetails/:id" element={<SingleJobDetails />} />
        <Route
          path="/mentor-registration"
          element={<MentorRegistrationPage />}
        />
        <Route path="/register-as" element={<SignUpAs />} />
        <Route
          path="/student-request-to-mentor"
          element={<StudentSendRequestToMentor />}
        />
      </Routes>
    // </ScrollToTop>
  );
};

export default AllRouter;
