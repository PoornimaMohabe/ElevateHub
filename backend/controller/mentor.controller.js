const { MentorModel } = require('../model/mentor.model');

// POST
const post_Mentor = async (req, res) => {
    const payload = req.body;
    try {
        const new_Mentor = new MentorModel(payload);
        await new_Mentor.save();
        res.status(201).json({ status: true, msg: "Mentor added successfully" });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

// GET
const get_All_Mentors = async (req, res) => {
    try {
        const all_Mentors = await MentorModel.find().sort({ createdAt: -1 });
        const totalMentors = all_Mentors.length;
        res.status(200).json({
            status: true,
            msg: totalMentors > 0 ? "List of all mentors" : "No mentors available",
            totalMentors,
            all_Mentors,
        });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

// GET 
const get_Single_Mentor = async (req, res) => {
    const { id } = req.params;
    try {
        const mentor = await MentorModel.findOne({_id: id});
        if (!mentor) {
            return res.status(404).json({ status: false, msg: "Mentor not found" });
        }
        res.status(200).json({ status: true, msg: "Mentor details fetched successfully", mentor });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};


// PATCH
const update_Mentor = async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    try {
        const updatedMentor = await MentorModel.findByIdAndUpdate(id, payload, { new: true });
        res.status(200).json({ status: true, msg: "Mentor updated successfully", updatedMentor });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

// DELETE
const delete_Mentor = async (req, res) => {
    const { id } = req.params;
    try {
        await MentorModel.findByIdAndDelete(id);
        res.status(200).json({ status: true, msg: "Mentor deleted successfully" });
    } catch (error) {
        res.status(400).json({ status: false, msg: `${error.message}` });
    }
};

module.exports = {
    post_Mentor,
    get_All_Mentors,
    get_Single_Mentor,
    update_Mentor,
    delete_Mentor,
};
