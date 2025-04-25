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

import MentorProfile from "./pages/Mentor/MentorProfile";

function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        {/* <Home/> */}
        {/* <MentorCard />
        <AllMentors /> */}
        {/* <MentorProfile/> */}
        <AllRouter />
        <Footer/>
      </div>
   
      
      {/* <Login /> */}
      {/* <AboutUs/> */}
      {/* <ContactUs/> */}
      {/* <SignUp />? */}
      {/* <Alljob /> */}
    </>
  );
}

export default App;
