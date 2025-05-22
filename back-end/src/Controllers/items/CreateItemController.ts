import { Request, Response } from "express";
import { CreateItemService } from "../../Services/items/CreateItemService";

class CreateItemController{
async handle(req:Request,res:Response){
    const {name, amount, categoryId } = req.body;
    
    const createItemService = new CreateItemService();
    const createItem = await createItemService.execute({
        name,amount,categoryId
    })

    return res.json(createItem);
}
}

export {CreateItemController}