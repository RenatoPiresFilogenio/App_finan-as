import {Request,Response} from 'express'
import { DeleteItemService } from '../../Services/items/DeleteItemService'
class DeleteItemController{
async handle(req:Request,res:Response){
    const {id} = req.body;
    const userid = req.userId as string

    if(!userid){
        return res.status(401).json({ error: "Usuário não autenticado" });
    }

    const deleteItemService = new DeleteItemService();
    const deletingItem = await deleteItemService.execute({id,userid})
    
    return res.json(deletingItem)
}
}

export {DeleteItemController}