import { sequelize } from "../connection.js";
import { DataTypes } from "sequelize";

const usedModel = sequelize.define('User',{
    id : {
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    userName : {
        type : DataTypes.STRING,
        allowNull : false
    },
    email :{
        type : DataTypes.STRING,
        unique:true,
        allowNull : false
    },
    password : {
        type : DataTypes.STRING,
        allowNull :false
    },
    confirmEmail :{
        type: DataTypes.BOOLEAN,
        defaultValue : false,
    },
    profilePicture : {
        type : DataTypes.STRING,
        allowNull : true,
    }
});

export default usedModel;