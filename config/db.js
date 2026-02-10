const mongoose = require("mongoose");


const connectDB = async ()=>{

    try {
        await mongoose.connect(process.env.DBURL);
        console.log("Database Successfully connected");
    } catch (error) {
        console.error("Getting error like", error.message);
        process.exit(1);
    }
};
module.exports =connectDB;
