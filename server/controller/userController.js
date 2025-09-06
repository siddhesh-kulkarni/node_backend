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
    const emp = await UserModal.findOne({ where: { empId: empId } });
    if (emp == null) {
      await UserModal.create(req.body);
      return res.status(200).json({ message: "Employee added successfully." });
    }

    return res.status(404).json({message : "Employee is already exists."})
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
