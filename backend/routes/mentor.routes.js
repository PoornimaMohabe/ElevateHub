const express = require("express");
const {
    post_Mentor,
    get_All_Mentors,
    update_Mentor,
    delete_Mentor,
    get_Single_Mentor
} = require("../controller/mentor.controller");

const mentorRouter = express.Router();

mentorRouter.post("/addmentor", post_Mentor);
mentorRouter.get("/getallmentor", get_All_Mentors);
mentorRouter.get('/mentor/:id', get_Single_Mentor);

mentorRouter.patch("/updatementor/:id", update_Mentor);
mentorRouter.delete("/deletementor/:id", delete_Mentor);

module.exports = {
    mentorRouter
};
