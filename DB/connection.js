import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('freedb_umsAPI', 'freedb_somood', '8zQyHAeJS?f$wsc', {
    host: 'sql.freedb.tech',
    port:3306,
    dialect:'mysql'
});

export const connectDB = ()=>{
    sequelize.sync(/**{force:true}*/).then(()=>{
        console.log(" database connection successfully")
    }).catch((error)=>{
        console.log("error to connect to the database: "  + error);
    });
}