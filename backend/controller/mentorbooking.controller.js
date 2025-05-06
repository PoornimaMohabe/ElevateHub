const Booking = require("../model/mentorBooking.model");
const Mentor = require("../model/mentor.model");
const User = require("../model/user.model");


const bookingMentor = async (req, res) => {
  try {
    const { mentorId , mentorName} = req.body;
    const { username, email, userId, mobileNumber,topicOnWhichGuidanceIsRequired } = req.body;

    const booking = new Booking({
      mentorId,
      mentorName,
      userId,
      username,
      email,
      mobileNumber,
      topicOnWhichGuidanceIsRequired,
      bookingDate: new Date(),
    });

    await booking.save();

    res.status(201).json({ message: "Mentor booked successfully", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// READ - Get all bookings
const getAllBookings = async (req, res) => {

  try {
    const bookings = await Booking.find({});
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ - Get particular booking for user  bookings
const getParticularUserBookingforStudent = async (req, res) => {
  const id = req.user.userId
  console.log(req);
  
  console.log(id)

  try {
    const bookings = await Booking.find({userId: id});
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({"msg":"Failed to fetch your send request data",  "erroe while fetching data": error.message });
  }
};

// READ - Get particular booking for user  bookings
const getParticularUserBookingforTutor = async (req, res) => {
  const id = req.user.userId
  console.log(req);
  
  console.log(id)

  try {
    const bookings = await Booking.find({mentorId: id});
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({"msg":"Failed to fetch your send request data",  "erroe while fetching data": error.message });
  }
};

// READ - Get a single booking by ID
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE - Update a booking
const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedBooking = await Booking.findByIdAndUpdate(id, updateData, { new: true });

    if (!updatedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking updated successfully", updatedBooking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE - Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndDelete(id);

    if (!deletedBooking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  bookingMentor,
  getAllBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
  getParticularUserBookingforStudent,
  getParticularUserBookingforTutor
};