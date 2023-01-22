const express = require("express");
import { getItemController } from "../controllers/itemController";
const router = express.Router();

//routes
//method - get, post, delete, 
router.get('/get-item',getItemController)

module.exports = router