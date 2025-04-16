import mongoose from "mongoose";

const URL1 = process.env.MONGO_URL;
const URL2 = process.env.ATLAS_URL;

const dbconn = async () => {
    mongoose.connect(process.env.ATLAS_URL,{
        dbName: "Spandan"
    }).then(()=>{
        console.log(`Connected to ATLAS`);
    }).catch((err)=>{
        console.log("connecting database error",err);
    });
}


export default dbconn;