const express  = require("express");
const {post_Job, get_All_Jobs, update_Job,  delete_Job} = require("../controller/job.controller");
const jobRouter = express.Router();


jobRouter.post("/post_jobs" , post_Job);
jobRouter.get("/all_jobs" , get_All_Jobs);
jobRouter.put("/update_jobs/:id" , update_Job);
jobRouter.delete("/delete_jobs/:id" , delete_Job);


module.exports = {
    jobRouter
}
