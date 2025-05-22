import {Request,Response} from 'express'
import { DetailItemService} from '../../Services/items/DetailItemService'

class DetailItemController {
async handle(req:Request, res:Response){
    const {id} = req.body;

    const detailItemService = new DetailItemService();

    const item_detail = await detailItemService.execute({id});


    return res.json(item_detail)
}
}
export {DetailItemController}