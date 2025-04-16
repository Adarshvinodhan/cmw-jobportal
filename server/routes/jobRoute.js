import { Router } from "express";
import { createJob, getAllJobs } from "../controllers/jobsController.js";

const jobRouter = Router();

jobRouter.get('/jobs',getAllJobs)
jobRouter.post('/job',createJob)

export default jobRouter;
