import { DataTypes } from "sequelize";

export const createUserModel = async (sequelize) => {
    const User = sequelize.define("User", {
        empId: {
            type: DataTypes.STRING,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull : false
        },
        email : {
            type: DataTypes.STRING,
            isLowercase: true,
            allowNull : false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        designation : {
            type : DataTypes.STRING,
            allowNull : false
        }

    });

    return User;
}