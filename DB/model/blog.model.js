import { DataTypes } from "sequelize";
import {sequelize} from "../connection.js"

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

export default blogModel;