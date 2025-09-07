import express from "express";
import { addEmp, deleteEmployee, getAllEmps, updateEmployee } from "../controller/userController.js";

const router = express.Router();

// get employee
router.get('/getAllEmps',getAllEmps);

// add employees
router.post('/addEmp',addEmp);

// update employee
router.put('/updateEmp/:empId',updateEmployee);

// delete employee
router.delete('/deleteEmp/:empId',deleteEmployee);

export default router;