import React, { useState, useEffect } from "react";
import { allJobs } from "../utils/url";
import axios from "axios";

const JobListing = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJobs = async () => {
    try {
      const response = await axios.get(allJobs);
      setJobs(response.data.all_Jobs);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  console.log(jobs);

  useEffect(() => {
    fetchJobs();
  }, []);

  return(
    <div className="min-h-screen bg-[#f8f9fd] font-sans">
    {/* Header Section */}
    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-10 rounded-b-3xl relative">
      <h1 className="text-white text-3xl font-bold text-center mb-8">120 Jobs Found</h1>

      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-2rem] w-[80%] bg-white rounded-xl shadow-lg flex items-center justify-between px-6 py-4">
        <input
          type="text"
          placeholder="Search for Job Posting"
          className="w-full px-4 py-2 border-none focus:outline-none"
        />
        <div className="border-l h-6 mx-4" />
        <input
          type="text"
          placeholder="Set Location"
          className="w-full px-4 py-2 border-none focus:outline-none"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg ml-4 shadow">Search</button>
      </div>
    </div>

    {/* Main Section */}
    <div className="mt-24 px-8 flex gap-12">
      {/* Sidebar */}
      <div className="w-1/4">
        <h3 className="font-semibold text-gray-600 mb-4">Current Search</h3>
        <div className="flex gap-2 mb-6">
          <span className="bg-[#f0f3fa] text-sm px-4 py-1 rounded-full">Sales</span>
          <span className="bg-[#f0f3fa] text-sm px-4 py-1 rounded-full">Cambridge</span>
        </div>

        <h4 className="font-semibold text-gray-600 mb-2">Refine by City</h4>
        <ul className="mb-6">
          {['Cambridge (2)', 'Durango (2)', 'Atlanta (4)', 'Sacramento (8)', 'San Fransisco (12)'].map(city => (
            <li key={city} className="mb-2 flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">{city}</span>
            </li>
          ))}
        </ul>

        <h4 className="font-semibold text-gray-600 mb-2">Refine by Categories</h4>
        <ul>
          {['Accounting (5)', 'Admin-Clerical (4)', 'Banking (2)', 'Finance (5)', 'Human Resource (5)', 'Management (1)'].map(cat => (
            <li key={cat} className="mb-2 flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-700">{cat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Job Listings */}
      <div className="flex-1">
        <h2 className="text-xl font-bold text-[#2b3c6b] mb-4">Featured jobs</h2>
        <div className="space-y-4 mb-10">
          {[
            { logo: 'nike', title: 'Nike Product Manager', company: 'Nike', location: 'San Fransisco' },
            { logo: 'apple', title: 'Product Developer', company: 'Apple Inc.', location: 'Los Angeles' },
            { logo: 'twitter', title: 'Twitter Executive Producer', company: 'Twitter', location: 'Munich' },
          ].map((job, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={`/${job.logo}.png`} alt="logo" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-[#2b3c6b]">{job.title}</p>
                  <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">Full Time</span>
                <p className="text-sm text-gray-400 mt-1">April 12, 2020</p>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-xl font-bold text-[#2b3c6b] mb-4">Job Listing</h2>
        <div className="space-y-4">
          {[
            { logo: 'amazon', title: 'Amazon Chief of Staff', company: 'Amazon', location: 'Abu Dhabi' },
            { logo: 'audi', title: 'Audi Sales Manager', company: 'Audi', location: 'New York' },
          ].map((job, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
              <div className="flex items-center gap-4">
                <img src={`/${job.logo}.png`} alt="logo" className="w-10 h-10" />
                <div>
                  <p className="font-semibold text-[#2b3c6b]">{job.title}</p>
                  <p className="text-sm text-gray-500">{job.company} • {job.location}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">Full Time</span>
                <p className="text-sm text-gray-400 mt-1">April 12, 2020</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

  
)
  
  
};

export default JobListing;
