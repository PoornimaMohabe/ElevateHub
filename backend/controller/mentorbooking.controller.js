const Booking = require("../model/mentorBooking.model");
const Mentor = require("../model/mentor.model");
const User = require("../model/user.model");


const bookingMentor = async (req, res) => {
  try {
    const { mentorId } = req.body;
    const { username, email, userId, mobileNumber } = req.body;

    const booking = new Booking({
      mentorId,
      userId,
      username,
      email,
      mobileNumber,
      bookingDate: new Date(),
    });

    await booking.save();

    res.status(201).json({ message: "Mentor booked successfully", booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// READ
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate("Mentor.mentorId User.userId");
    res.status(200).json({ bookings });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// READ
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await Booking.findById(id).populate("mentorId userId");

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
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

// DELETE
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
};