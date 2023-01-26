const itemModel =  require('../models/itemModel')

class itemController{
    async getItemController (req, res){
        try{
            const items = await itemModel.find(); 
            res.status(200).send(items);
        }
        catch(error){
            console.log(error);
        } 
    }
    async addItemController(req,res){
        try{
            const newItem = new itemModel(req.body);
            await newItem.save()
                    .then(data=>{
                        res.status(200).send({message:"Item added successfully"})
                    })
                    
        }
        catch(error){
            res.status(400).send("error",error);
            console.log(error);
        }
    }
}
module.exports = new itemController();