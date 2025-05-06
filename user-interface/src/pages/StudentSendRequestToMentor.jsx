import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  Box,
  Text,
  VStack,
  Heading,
  Spinner,
  Badge,
  Button,
  Flex,
  Select,
} from "@chakra-ui/react";
import Toastnotification from "../utils/Toastnotification";
import { getStudentIndividualBooking } from "../utils/url";
import { authorizationToken } from "../utils/Token";

const StudentSendRequestToMentor = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { showToast } = Toastnotification();

  const fetchAllBookings = async () => {
    try {
      console.log("enter in try block");
      const token = localStorage.getItem("token");
      // console.log(token);

      const response = await axios.get(getStudentIndividualBooking, {
        headers: {
          Authorization: token,
        },
      });
      console.log(response);
      setBookings(response.data.bookings);
    } catch (error) {
      console.error("Error fetching bookings:", error.message);
      showToast("Error", "Failed to fetch bookings", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllBookings();
  }, []);

  console.log(bookings);

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "yellow";
      case "accepted":
        return "green";
      case "rejected":
        return "red";
      default:
        return "gray";
    }
  };

  if (loading) {
    return (
      <Flex justify="center" align="center" h="80vh">
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  return (
    <Box p={8}>
      <Heading mb={6} textAlign="center" fontSize="3xl" color="teal.600">
        Your Mentorship Requests
      </Heading>

      {bookings.length === 0 ? (
        <Flex justify="center" align="center" h="50vh">
          <Text fontSize="xl" color="gray.500">
            You haven't sent any mentorship requests yet.
          </Text>
        </Flex>
      ) : (
        <VStack spacing={6}>
          {bookings.map((booking) => (
            <Box
              key={booking._id}
              p={6}
              borderWidth={1}
              borderRadius="2xl"
              boxShadow="lg"
              w="full"
              maxW="600px"
              transition="0.3s"
              _hover={{ transform: "scale(1.02)", boxShadow: "2xl" }}
            >
              <Flex justify="space-between" align="center" mb={4}>
                <Text fontWeight="bold" fontSize="lg" color="gray.700">
                  Mentor: {booking.mentorName || "Unknown"}
                </Text>
                <Badge
                  colorScheme={getStatusColor(booking.status)}
                  fontSize="0.9em"
                  p={1}
                >
                  {booking.status.toUpperCase()}
                </Badge>
              </Flex>

              <Text mb={2} color="gray.600">
                <strong>Topic:</strong>{" "}
                {booking.topicOnWhichGuidanceIsRequired || "Not specified"}
              </Text>

              <Text mb={2} color="gray.600">
                <strong>Requested Date:</strong>{" "}
                {new Date(booking.bookingDate).toLocaleDateString("en-GB")}{" "}
              </Text>

              {/* Optionally Add: Cancel Request Button if Pending */}
              {booking.status === "pending" && (
                <Button mt={4} colorScheme="red" size="sm" variant="outline">
                  Cancel Request
                </Button>
              )}
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default StudentSendRequestToMentor;
