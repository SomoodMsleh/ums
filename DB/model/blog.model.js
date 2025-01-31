import { DataTypes } from "sequelize";
import {sequelize} from "../connection.js"
import userModel from "./user.model.js"
const blogModel = sequelize.define("Blog",{
    title:{
        type:DataTypes.STRING(50),
        allowNull:false,
        unique:true
    },
    description:{
        type:DataTypes.TEXT(),
        allowNull:false
    }
});

userModel.hasMany(blogModel);
blogModel.belongsTo(userModel);
export default blogModel;