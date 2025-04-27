import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { getAllJob } from "../utils/url";
import SingleJobDetails from "./SingleJobDetails";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(getAllJob);
      setJobs(response.data.all_Jobs);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleMoreDetails = (id) => {
    setSelectedJobId(id);
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setSelectedJobId(null);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fd] font-sans">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-10 rounded-b-3xl relative">
        <h1 className="text-white text-3xl font-bold text-center mb-8">
          {filteredJobs.length} Jobs Found
        </h1>

        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] w-[80%] bg-white rounded-xl shadow-lg flex items-center justify-between px-6 py-4">
          <input
            type="text"
            placeholder="Search for Job Posting"
            className="w-full px-4 py-2 border-none focus:outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="border-l h-6 mx-4" />
          <input
            type="text"
            placeholder="Set Location"
            className="w-full px-4 py-2 border-none focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg ml-4 shadow">
            Search
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="mt-24 px-8">
        <h2 className="text-xl font-bold text-[#2b3c6b] mb-4">Featured Jobs</h2>

        <div className="space-y-6 mb-10">
          {filteredJobs.map((job) => (
            <div
              key={job._id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
            >
              {/* Left Section */}
              <div className="flex items-start gap-4 w-full md:w-2/3">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg text-lg">
                  💼
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#2b3c6b]">
                    {job.jobTitle}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {job.companyName} • {job.location}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    📅 Post Date: {new Date(job.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-500">
                    ⏳ Last Date:{" "}
                    {new Date(job.lastDateToApply).toLocaleDateString()}
                  </p>
                </div>
              </div>

              {/* Right Section */}
              <div className="flex flex-col md:items-end items-start gap-3">
                <span
                  className={`${
                    job.jobType === "Full Time"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  } text-sm px-4 py-1 rounded-full font-medium`}
                >
                  {job.jobType}
                </span>

                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => handleMoreDetails(job._id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 text-sm rounded-lg transition"
                  >
                    More Details
                  </button>
                  <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm rounded-lg transition">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Drawer for Job Details */}
      {selectedJobId && (
        <SingleJobDetails
          id={selectedJobId}
          isOpen={drawerOpen}
          onClose={handleDrawerClose}
        />
      )}
    </div>
  );
};

export default JobListing;
