const mongoose = require("mongoose")
const url  = process.env.MONGO_URI

mongoose.set("strictQuery", false);
const connectdb = async ()=>{
    mongoose.connect(url).then(()=>{
        console.log('Connection Successful');
    }).catch((error)=>{     
        console.log('Something went wrong', error)
    });
}

module.exports = connectdb;
