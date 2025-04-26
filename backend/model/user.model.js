const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobileNumber: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["student", "mentor", "admin"],
        default: "student"
    },
    otp  : {
        type : Number , 
        required: false
    }
}, 
{
    timestamps: true,
    versionkey: false
});

const UserModel = mongoose.model("userDetails", userSchema);

module.exports = {
    UserModel
};