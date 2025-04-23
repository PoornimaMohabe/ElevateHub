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
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
   },
    {
        timestamps: true,
        versionkey: false
    });

const JobModel = mongoose.model("JobDetails", jobSchema);

module.exports = {
    JobModel
};