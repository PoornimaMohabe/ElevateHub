const { MentoreshiprequestModel } = require("../model/mentorship.model");

// POST
const post_Mentorship = async (req, res) => {
  const payload = req.body;
  try {
    const new_Request = new MentoreshiprequestModel(payload);
    await new_Request.save();
    res.status(200).json({ status: true, msg: "Mentorship request sent successfully" });
  } catch (error) {
    res.status(400).json({ status: false, msg: `${error.message}` });
  }
};

// GET
const get_All_Mentorship = async (req, res) => {
  try {
    const all_Requests = await MentoreshiprequestModel.find().sort({ createdAt: -1 });
    const totalRequests = all_Requests.length;
    res.status(200).json({
      status: true,
      msg: totalRequests > 0 ? "List of mentorship requests" : "No requests found",
      totalRequests,
      all_Requests
    });
  } catch (error) {
    res.status(400).json({ status: false, msg: `${error.message}` });
  }
};

// PATCH
const update_Mentorship = async (req, res) => {
  const payload = req.body;
  const { id } = req.params;
  try {
    const updated_Request = await MentoreshiprequestModel.findByIdAndUpdate({ _id: id }, payload, { new: true });
    res.status(200).json({ status: true, msg: "Mentorship request updated successfully" });
  } catch (error) {
    res.status(400).json({ status: false, msg: `${error.message}` });
  }
};

// DELETE
const delete_Mentorship = async (req, res) => {
  const { id } = req.params;
  try {
    await MentoreshiprequestModel.findByIdAndDelete({ _id: id });
    res.status(200).json({ status: true, msg: "Mentorship request deleted successfully" });
  } catch (error) {
    res.status(400).json({ status: false, msg: `${error.message}` });
  }
};

module.exports = {
  post_Mentorship,
  get_All_Mentorship,
  update_Mentorship,
  delete_Mentorship
};
