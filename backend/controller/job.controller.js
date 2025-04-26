const { JobModel } = require("../model/job.model");

// POST
const post_Job = async (req, res) => {
    const payload = req.body;
    try {
        const new_Job = new JobModel(payload);
        await new_Job.save();
        res.status(200).json({ status: true, msg: "Job posted successfully" });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

// GET
const get_All_Jobs = async (req, res) => {
    try {
        const all_Jobs = await JobModel.find().sort({ createdAt: -1 });
        const totalJobs = all_Jobs.length;
        res.status(200).json({
            status: true,
            msg: totalJobs > 0 ? "List of all jobs" : "No jobs available",
            totalJobs,
            all_Jobs,
        });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

// GET
const get_Single_Job = async (req, res) => {
    const { id } = req.params;
    try {
        const job = await JobModel.findOne({_id:id});
        if (job) {
            res.status(200).json({ status: true, msg: "Job found", job });
        } else {
            res.status(404).json({ status: false, msg: "Job not found" });
        }
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

// PATCH
const update_Job = async (req, res) => {
    const payload = req.body;
    const { id } = req.params;
    try {
        const update_Old_Job = await JobModel.findByIdAndUpdate({ _id: id }, payload, { new: true });
        res.status(200).json({ status: true, msg: "Job updated successfully" });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

// DELETE
const delete_Job = async (req, res) => {
    const { id } = req.params;
    try {
        const delete_Old_Job = await JobModel.findByIdAndDelete({ _id: id });
        res.status(200).json({ status: true, msg: "Job deleted successfully" });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

module.exports = {
    post_Job,
    get_All_Jobs,
    get_Single_Job, 
    update_Job,
    delete_Job,
};
