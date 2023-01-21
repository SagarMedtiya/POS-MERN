const mongoose = require('mongoose');
require('dotenv').config();
const connectdb = require("./config/config")
const itemModel = require("./models/itemModel")
const items = require('./util/data')
require("colors")

connectdb();


//function seeder
const importData = async()=>{
    try{
        await itemModel.deleteMany();
        const itemsData = await itemModel.insertMany(items);
        console.log('All items added'.bgGreen.inverse);
        process.exit();   
    }
    catch(error){
        console.log(`${error}`.bgRed);
        process.exit(1);
    }
}

importData();