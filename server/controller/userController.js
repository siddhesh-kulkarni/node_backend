import { UserModal } from "../postgress/postgress.js";

export const getAllEmps = async (req, res) => {
  try {
    const users = await UserModal.findAll();

    if (users.length == 0) {
      return res.status(404).json({ message: "No users not found" });
    }

    return res.status(200).json({ message: "Users fetched successfully", users });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const addEmp = async (req, res) => {
  const { empId, name, email, designation } = req.body;
  try {
    const empID = await UserModal.findOne({ where: { empId: empId } });
    if(empID) {
      return res.status(409).json({message: "Employee ID already exists"});
    }

    const empEmail = await UserModal.findOne({where: { email: email}});
    if(empEmail) {
      return res.status(409).json({message: "Employee email already exists"});
    }
      await UserModal.create({empId, name, email, designation});
      return res.status(200).json({ message: "Employee added successfully." });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


export const updateEmployee = async (req, res) => {
  // const { empId , name, email, designation } = req.body;
  const empID = req.params.empId;
  try {

    const exisitingUser = await UserModal.findOne({where : {empId : empID}});

    if(exisitingUser) {
     const emp = await UserModal.update(req.body, {where : { empId : empID }});
     return res.status(200).json({message : "Employee Updated Successfully"});
    }

    return res.status(404).json({message: "Employee ID not found"});
  } catch (error) {
    console.log(error);
    return res.status(404).json({message: "Internal Server Error",error});
  }
}

export const deleteEmployee = async (req, res) => {
  const empID = req.params.empId;
  try {

    const user = await UserModal.findOne({where: {empId : empID }});

    if(user==null) {
      return res.status(404).json({message : "Employee Not found"});
    }

    await user.destroy();
    return res.status(200).json({message : "Employee Deleted Successfully."})

  } catch (error) {
    console.log(error)
    return res.status(404).json({message : "Internal Server Error", error})
  }
}