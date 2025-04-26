const express  = require("express");
const {post_Job, get_All_Jobs, update_Job,  delete_Job, get_Single_Job} = require("../controller/job.controller");
const jobRouter = express.Router();


jobRouter.post("/postJobs" , post_Job);
jobRouter.get("/allJobs" , get_All_Jobs);
jobRouter.get("/jobdetails/:id" , get_Single_Job);
jobRouter.put("/updateJobs/:id" , update_Job);
jobRouter.delete("/deleteJobs/:id" , delete_Job);


module.exports = {
    jobRouter
}
