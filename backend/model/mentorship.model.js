const mongoose = require("mongoose");

const mentorShipRequest = mongoose.Schema({
    mentorName: {
        type: String,
        required: true
      },
      mentorEmail: {
        type: String,
        required: true
      },
      topic: {
        type: String,
        required: true
      },
      message: {
        type: String,
        required: true
      },
      requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
      }
    }, {
      timestamps: true,
      versionKey: false
});

const MentoreshiprequestModel = mongoose.model("MentorShipRequest", mentorShipRequest);

module.exports = {
    MentoreshiprequestModel
};