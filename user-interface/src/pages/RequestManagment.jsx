import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const dummyRequests = [
  { id: 1, name: "John Doe", message: "Looking for guidance in web development.", status: "Pending" },
  { id: 2, name: "Jane Smith", message: "Need advice on career switching to tech.", status: "Pending" },
  { id: 3, name: "Michael Johnson", message: "Interested in learning about product management.", status: "Pending" },
];

const RequestManagement = () => {
  const [requests, setRequests] = useState(dummyRequests);

  const handleStatusChange = (id, newStatus) => {
    const updatedRequests = requests.map((req) =>
      req.id === id ? { ...req, status: newStatus } : req
    );
    setRequests(updatedRequests);

    if (newStatus === "Accepted") {
      toast.success("Request accepted by you");
    } else if (newStatus === "Rejected") {
      toast.error("Request rejected by you");
    } else {
      toast.info("Request marked as pending");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* Top paragraph */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Manage Mentorship Requests</h1>
        <p className="text-gray-600 text-lg">
          Review incoming mentorship requests and manage their statuses. 
          Stay connected and help students by taking timely actions.
        </p>
      </div>

      {/* Requests List */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {requests.map((req) => (
          <div key={req.id} className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between space-y-4 border border-gray-200 hover:shadow-lg transition">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">{req.name}</h2>
              <p className="text-gray-600 mt-2">{req.message}</p>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  req.status === "Accepted"
                    ? "bg-green-100 text-green-700"
                    : req.status === "Rejected"
                    ? "bg-red-100 text-red-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {req.status}
              </span>

              <div className="flex space-x-2">
                <button
                  onClick={() => handleStatusChange(req.id, "Accepted")}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium transition"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleStatusChange(req.id, "Pending")}
                  className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md text-sm font-medium transition"
                >
                  Pending
                </button>
                <button
                  onClick={() => handleStatusChange(req.id, "Rejected")}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toast Notifications */}
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />
    </div>
  );
};

export default RequestManagement;
