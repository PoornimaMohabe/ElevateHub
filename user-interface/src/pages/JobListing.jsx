import React, { useState, useEffect } from "react";
import axios from "axios";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch jobs from the backend API
  const fetchJobs = async () => {
    try {
      const response = await axios.get("http://localhost:4500/allJobs");
      setJobs(response.data.all_Jobs);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) => {
    return (
      job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
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
            onChange={handleSearchChange}
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
        {/* Job Listings */}
        <div>
          <h2 className="text-xl font-bold text-[#2b3c6b] mb-4">
            Featured Jobs
          </h2>
          <div className="space-y-4 mb-10">
            {filteredJobs.map((job) => (
              <div
                key={job._id}
                className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
              >
                <div className="flex items-center gap-4">
                  {/* Job Title and Company */}
                  <div>
                    <p className="font-semibold text-[#2b3c6b]">
                      {job.jobTitle}
                    </p>
                    <p className="text-sm text-gray-500">
                      {job.companyName} • {job.location}
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  {/* Job Type */}
                  <span
                    className={`${
                      job.jobType === "Full Time"
                        ? "bg-green-100 text-green-600"
                        : "bg-yellow-100 text-yellow-600"
                    } text-xs px-3 py-1 rounded-full`}
                  >
                    {job.jobType}
                  </span>
                  <p className="text-sm text-gray-400 mt-1">
                    Post Date: {new Date(job.createdAt).toLocaleDateString()}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Last Date to Apply:{" "}
                    {new Date(job.lastDateToApply).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
