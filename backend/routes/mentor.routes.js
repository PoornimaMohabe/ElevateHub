const express = require("express");
const {
    post_Mentor,
    get_All_Mentors,
    update_Mentor,
    delete_Mentor
} = require("../controller/mentor.controller");

const mentorRouter = express.Router();

mentorRouter.post("/addmentor", post_Mentor);
mentorRouter.get("/getallmentor", get_All_Mentors);
mentorRouter.patch("/updatementor/:id", update_Mentor);
mentorRouter.delete("/deletementor/:id", delete_Mentor);

module.exports = {
    mentorRouter
};
