const express = require('express');

const { authmiddleware } = require('../middleware/auth.middleware');
const { bookingMentor, getAllBookings, getBookingById, updateBooking, deleteBooking, getParticularUserBookingforStudent, getParticularUserBookingforTutor } = require('../controller/mentorbooking.controller');
const mentorBookingRouter = express.Router();

mentorBookingRouter.post('/bookmentor', authmiddleware,  bookingMentor)
mentorBookingRouter.get("/student-bookings", getAllBookings); // Get all bookings
mentorBookingRouter.get("/individual-student-bookings", authmiddleware, getParticularUserBookingforStudent); // Get all bookings by student ID
mentorBookingRouter.get("/mentor-reuqest", authmiddleware, getParticularUserBookingforTutor); // Get single booking by ID
mentorBookingRouter.get("/student-bookings/:id", getBookingById); // Get single booking
mentorBookingRouter.put("/bookings/:id", updateBooking); // Update booking
mentorBookingRouter.delete("/bookings/:id", deleteBooking); // Delete booking

module.exports = {
    mentorBookingRouter
}