require("dotenv").config()
require("colors")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const PORT = process.env.PORT
const url  = process.env.MONGO_URI
//rest object
const app = express();
const mongoose = require("mongoose")
mongoose.set("strictQuery", false);
mongoose.connect(url).then(()=>{
    console.log('Connection Successful');
}).catch((error)=>{     
    console.log('Something went wrong', error)
});

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


//routes
app.get('/',(req,res)=>{
    res.send("<h1>POS backend</h1>")
})

//listen
app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`.bgCyan.white); 
})