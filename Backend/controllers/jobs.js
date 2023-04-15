const Job = require("../model/Job");

exports.fetchJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find();
    if (jobs) {
      return res.status(200).json({ success: true, data: jobs });
    }
    res
      .status(404)
      .json({ success: false, message: "Opps somethings went wrong" });
  } catch (error) {
    next(error);
  }
};
exports.createJob = async (req, res, next) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({ success: true, data: job, message: "Job created" });
  } catch (error) {
    next(error);
  }
};
exports.updateJob = (req, res, next) => {
  res.send("job updated");
};
exports.deleteJob = (req, res, next) => {
  res.send("Job deleted");
};
