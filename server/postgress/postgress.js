import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
import { createUserModel } from "../model/userSchema.js";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS || "",
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
);

let UserModal = null;

const connection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection established successfully.");
    UserModal = await createUserModel(sequelize);
    await sequelize.sync({ alter: true });
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
  }
};

export { connection, UserModal };
