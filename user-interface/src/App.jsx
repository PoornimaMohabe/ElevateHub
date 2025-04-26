import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import AllRouter from "./AllRouter";
import Footer from "./components/Footer";
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

    <MentorDashboard/>
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
