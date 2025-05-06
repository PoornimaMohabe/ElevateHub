const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: "Mentor",  // 👈 this must match exactly your Mentor model name
    required: true,
  },
  mentorName: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    // ref: "User",   // 👈 same, must match your User model name
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  topicOnWhichGuidanceIsRequired: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  bookingDate: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["pending", "confirmed", "completed", "canceled"],
    default: "pending",
  },
  username :{
    type: String,
    required: true,
  }, 
  userId :{
    type: String,
    required: true,
  },
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
