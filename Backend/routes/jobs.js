const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

const checkAuthentication = require("../middlewares/checkAuthentication");
const {
  fetchJobs,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobs");

router.get("/", fetchJobs);
router.post("/", checkAuthentication, createJob);
router.put("/", updateJob);
router.delete("/", deleteJob);

module.exports = router;
