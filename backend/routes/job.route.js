import express from 'express'
import { getAdminJobs, getAllJob, getJobById, postJob } from './../controllers/JobController.js'
import isAuthenticated from '../middlewares/isAuthenticated.js';

const router = express.Router();


router.route("/postjob").post(isAuthenticated, postJob)
router.route("/getAllJob").get(isAuthenticated, getAllJob)
router.route("/getAdminJobs").get(isAuthenticated, getAdminJobs)
router.route("/get/:id").get(isAuthenticated, getJobById)

export default router