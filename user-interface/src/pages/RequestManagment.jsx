import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Badge, Select } from "@chakra-ui/react";
import Toastnotification from "../utils/Toastnotification";
import { getMentorRequest } from "../utils/url";

const BookingList = () => {
  const [bookings, setBookings] = useState([]);
  const { showToast } = Toastnotification();

  const fetchAllBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(getMentorRequest, {
        headers: { Authorization: token },
      });
      setBookings(response.data.bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
      showToast("Error", "Failed to fetch bookings", "error");
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 drop-shadow-md">
          All Bookings
        </h2>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings found.</p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-3xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800">
                    {booking.username}
                  </h3>

                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-gray-700">Status:</span>
                    <Badge
                      colorScheme={
                        booking.status.toLowerCase() === "pending"
                          ? "yellow"
                          : booking.status.toLowerCase() === "approved"
                          ? "green"
                          : "red"
                      }
                      variant="subtle"
                      px={2}
                      py={1}
                      rounded="full"
                    >
                      {booking.status}
                    </Badge>
                  </div>

                  <div className="text-sm text-gray-600">
                    <p>
                      <span className="font-semibold text-gray-700">
                        Email:
                      </span>{" "}
                      {booking.email}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Mobile:
                      </span>{" "}
                      {booking.mobileNumber}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Topic for Guidance:
                      </span>{" "}
                      {booking.topicOnWhichGuidanceIsRequired}
                    </p>
                    <p>
                      <span className="font-semibold text-gray-700">
                        Booking Date:
                      </span>{" "}
                      {formatDate(booking.bookingDate)}
                    </p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <Button
                    colorScheme="purple"
                    variant="solid"
                    size="sm"
                    rounded="full"
                    _hover={{ bg: "purple.500" }}
                    px={6}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingList;
