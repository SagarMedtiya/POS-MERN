require("dotenv").config()
require("colors")
const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const PORT = process.env.PORT
const connectdb = require("./config/config")
const bodyParser = require("body-parser")
//rest object
const app = express();


//middlewares
app.use(cors())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false }));
app.use(morgan("dev"))
connectdb();

//routes
app.use('/api/items',require('./routes/itemRoutes'))

//listen
app.listen(PORT,()=>{
    console.log(`Listening to PORT ${PORT}`.bgCyan.white); 
})