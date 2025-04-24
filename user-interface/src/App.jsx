import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";

import ContactUs from "./pages/ContactUs";


import AllRouter from "./AllRouter";

import JobListing from "./pages/JobListing";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
 

  return (
    <>
    <div className="bg-blue-500 text-white p-4">Tailwind is working!</div>
      {/* <Navbar />
      <AllRouter /> */}
      {/* <Login /> */}
      {/* <AboutUs/> */}
      {/* <ContactUs/> */}
      {/* <SignUp />? */}

    </>
  );
}

export default App;
