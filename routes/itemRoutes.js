const express = require("express");
const itemcontroller = require("../controllers/itemController")
const router = express.Router ();

//routes
//method - get, post, delete, 
router.get('/get-item',itemcontroller.getItemController)
router.post('/add-item',itemcontroller.addItemController)
module.exports = router