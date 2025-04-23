const express  = require("express");
const {post_Mentorship, get_All_Mentorship, update_Mentorship,  delete_Mentorship} = require("../controller/mentorShip.controller");
const mentorshipRouter = express.Router();


mentorshipRouter.post("/post_mentorship" , post_Mentorship);
mentorshipRouter.get("/all_mentorship" , get_All_Mentorship);
mentorshipRouter.put("/update_mentorship/:id" , update_Mentorship);
mentorshipRouter.delete("/delete_mentorship/:id" , delete_Mentorship);


module.exports = {
    mentorshipRouter
}
