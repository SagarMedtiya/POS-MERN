const mongoose = require("mongoose");

const itemSchema= mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    category:{
        type: String,
        required: false,
    },
    image:{
        type: String,
        required: false,
    }

},{timestamp: true})


const itemModel = mongoose.model("Item", itemSchema)

module.exports = itemModel