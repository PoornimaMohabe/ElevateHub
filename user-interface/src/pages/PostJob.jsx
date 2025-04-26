import React, { useState } from "react";
import axios from "axios";
import { addJob } from "../utils/url";
import Toastnotification from "../utils/Toastnotification";

const PostJob = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    location: "",
    description: "",
    roleAndResponsibilities: "",
    requiredQualifications: "",
    jobType: "Full Time",
    lastDateToApply: "",
  });

  const { showToast } = Toastnotification();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const jobPayload = {
      ...formData,
      roleAndResponsibilities: formData.roleAndResponsibilities
        .split(",")
        .map((item) => item.trim()),
      requiredQualifications: formData.requiredQualifications
        .split(",")
        .map((item) => item.trim()),
    };
    console.log(formData);

    try {
      const response = await axios.post(addJob, jobPayload);
      const { status, msg } = response.data;

      if (status) {
        showToast("Success", msg, "success");
        setFormData({
          jobTitle: "",
          companyName: "",
          location: "",
          description: "",
          roleAndResponsibilities: "",
          requiredQualifications: "",
          jobType: "Full Time",
          lastDateToApply: "",
        });
      } else {
        showToast("Error", msg, "error");
      }
    } catch (error) {
      showToast(
        "Error",
        error?.response?.data?.msg || "Something went wrong",
        "error"
      );
      console.log(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-2xl p-10 animate-fadeIn">
        <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
          🚀 Post a New Job
        </h1>

        <p className="text-center text-gray-600 mb-10">
          Fill out the details below carefully and submit your job opening to the platform.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Job Title</label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              placeholder="Enter the job title"
              className="inputField"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
              placeholder="Enter company name"
              className="inputField"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="e.g., Remote / Delhi / Mumbai"
              className="inputField"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Job Description</label>
            <textarea
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Describe the job role..."
              className="inputField"
            />
          </div>

          {/* Role and Responsibilities */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">
              Role & Responsibilities <span className="text-gray-400">(comma separated)</span>
            </label>
            <textarea
              name="roleAndResponsibilities"
              rows="2"
              value={formData.roleAndResponsibilities}
              onChange={handleChange}
              required
              placeholder="e.g., Develop APIs, Lead team..."
              className="inputField"
            />
          </div>

          {/* Required Qualifications */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">
              Required Qualifications <span className="text-gray-400">(comma separated)</span>
            </label>
            <textarea
              name="requiredQualifications"
              rows="2"
              value={formData.requiredQualifications}
              onChange={handleChange}
              required
              placeholder="e.g., B.Tech, 2+ years experience..."
              className="inputField"
            />
          </div>

          {/* Job Type */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Job Type</label>
            <select
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
              required
              className="inputField"
            >
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
          </div>

          {/* Last Date to Apply */}
          <div className="flex flex-col">
            <label className="font-semibold mb-2">Last Date to Apply</label>
            <input
              type="date"
              name="lastDateToApply"
              value={formData.lastDateToApply}
              onChange={handleChange}
              required
              className="inputField"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md transition-transform hover:scale-105"
          >
            Post Job
          </button>
        </form>
      </div>

      {/* Animation Keyframes */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .inputField {
          padding: 0.75rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          background-color: #f9fafb;
          transition: all 0.3s ease;
        }
        .inputField:focus {
          outline: none;
          border-color: #6366f1;
          background-color: #fff;
          box-shadow: 0 0 0 3px rgba(99,102,241,0.2);
        }
      `}</style>
    </div>
  );
};

export default PostJob;
