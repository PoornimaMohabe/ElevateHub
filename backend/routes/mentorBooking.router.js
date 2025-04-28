const express = require('express');

const { authmiddleware } = require('../middleware/auth.middleware');
const { bookingMentor, getAllBookings, getBookingById, updateBooking, deleteBooking } = require('../controller/mentorbooking.controller');
const mentorBookingRouter = express.Router();

mentorBookingRouter.post('/bookmentor',  bookingMentor)
mentorBookingRouter.get("/student-bookings", getAllBookings); 
mentorBookingRouter.get("/student-bookings/:id", getBookingById); 
mentorBookingRouter.put("/bookings/:id", updateBooking); 
mentorBookingRouter.delete("/bookings/:id", deleteBooking);

module.exports = {
    mentorBookingRouter
}