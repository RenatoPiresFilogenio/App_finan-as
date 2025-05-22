import { Request, Response } from "express";
import { DetailUserService } from "../../Services/user/DetailUserService";
export {DetailUserService} from '../../Services/user/DetailUserService'

class DetailUserController {
    async handle(req:Request, res:Response){
                const {id} = req.body

            const detailUserService = new DetailUserService();
            
            const user_details = await detailUserService.execute({id});

            return res.json(user_details);
    }
}

export {DetailUserController}