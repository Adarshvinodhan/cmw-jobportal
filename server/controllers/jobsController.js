import Job from "../models/job.js";

const getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find().sort({ createdAt: -1 }); // newest first
      res.status(200).json(jobs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

const createJob = async (req, res) => {
    try {
        const job = new Job(req.body);
        await job.save();
        res.status(201).json(job);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export { getAllJobs, createJob };