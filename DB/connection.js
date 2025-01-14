import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('ums', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
});

export const connectDB = ()=>{
    sequelize.sync().then(()=>{
        console.log(" database connection successfully")
    }).catch((error)=>{
        console.log("error to connect to the database: "  + error);
    });
}