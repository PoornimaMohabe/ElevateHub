import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import AllRouter from "./AllRouter";
import Footer from "./components/Footer";




function App() {
  return (
    <>
      <Navbar />
      <div className="mt-16">
        <AllRouter />
        <Footer />
        
      </div>
    </>
  );
}

export default App;
