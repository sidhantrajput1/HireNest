import express from 'express'
import { applyJob, getApplicant, getApplication, updateStatus } from './../controllers/applicationController.js'
import isAuthenticated from './../middlewares/isAuthenticated.js'

const router = express.Router();

router.route('/apply/:id').get(isAuthenticated , applyJob)
router.route('/get').get(isAuthenticated , getApplication)
router.route('/:id/applicants').get(isAuthenticated , getApplicant)
router.route('/status/:id/update').post(isAuthenticated , updateStatus)
 
export default router    