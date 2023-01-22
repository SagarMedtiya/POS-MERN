const itemModel =  require('../models/itemModel')
export const getItemController = async (req, res)=>{
    try{
        const items = await itemModel 
    }
    catch(error){
        console.log(error)
    }

}