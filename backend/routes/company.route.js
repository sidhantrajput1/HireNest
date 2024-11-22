import express from 'express'
import { getAllCompany, registerCompany } from '../controllers/CompanyController';

const router = express.Router();

router.route("/registerCompany").post(registerCompany);
router.route("/getAllCompany").post(getAllCompany);


export default router