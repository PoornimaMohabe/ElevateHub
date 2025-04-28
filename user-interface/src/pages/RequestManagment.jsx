import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@chakra-ui/react";
import Toastnotification from "../utils/Toastnotification";
import { StudentBookMentorship } from "../utils/url";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const { showToast } = Toastnotification();

  const fetchAllBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(StudentBookMentorship);
      setBookings(response.data.bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
      showToast("Error", "Failed to fetch bookings", "error");
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6">All Bookings</h2>

          {bookings.length === 0 ? (
            <p className="text-center text-gray-500">No bookings found.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  className="flex flex-col md:flex-row gap-4 p-4 border rounded-lg shadow-sm"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1">
                      {booking.username}
                    </h3>
                    <p className="text-sm text-gray-600">
                      Email: {booking.email}
                    </p>
                    <p className="text-sm text-gray-600">
                      Mobile: {booking.mobileNumber}
                    </p>
                    <p className="text-sm text-gray-600">
                      Mentor ID: {booking.mentorId}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Button colorScheme="teal" variant="outline" size="sm">
                      View Details
                      
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingList;
