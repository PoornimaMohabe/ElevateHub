const mongoose = require('mongoose');

const mentorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {   
        type: String,
        required: true
    },
    phone_Number:{
        type: String,
        required: true,
       
    },
    image: {
        type: String,
        required: true,
        unique: true
    },
    tech_Skill: {
        type: [String],
        required: true
    },
    Designation  : {
        type: String,
        required: true
    },
    bio:{
        type: String,
        required: true
    },
    availability: {
        type: [String],
        required: true
    },
    Years_Of_Experience : {
        type: Number,
        default: 0
    },
    linkedln_Profile:{
        type: String,
        required: true
    },
    github_Profile:{
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

const MentorModel = mongoose.model('MentorDetails', mentorSchema)

module.exports = {
    MentorModel
}