require("dotenv").config()
require("colors")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const PORT = process.env.PORT
const connectdb = require("./config/config")
//rest object
const app = express();


//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
connectdb();

//routes
app.get('/',(req,res)=>{
    res.send("<h1>POS backend</h1>")
})

//listen
app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`.bgCyan.white); 
})