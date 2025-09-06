import express from "express";
import { addEmp, getAllEmps } from "../controller/userController.js";

const router = express.Router();

// get employee
router.get('/getAllEmps',getAllEmps);

// add employees
router.post('/addEmp',addEmp);

export default router;