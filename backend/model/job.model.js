const mongoose = require("mongoose");

const jobSchema = mongoose.Schema({
  jobTitle: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  roleAndResponsibilities: {
    type: [String],
    required: true
  },
  requiredQualifications: {
    type: [String],
    required: true
  },
  jobType: {
    type: String,
    enum: ["Full Time", "Part Time"],
    required: true,
    default: "Full Time"
  },
  lastDateToApply: {
    type: Date,
   
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }
},
{
  timestamps: true,
  versionKey: false
});

const JobModel = mongoose.model("JobDetails", jobSchema);

module.exports = {
  JobModel
};
