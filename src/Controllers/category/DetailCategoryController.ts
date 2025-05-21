import { Request, Response } from "express";
import { DetailCategoryService} from "../../Services/category/DetailCategoryService";

class DetailCategoryControler {
    async handle(req:Request,res:Response){
        const {name} = req.body

        const detailCategoryService = new DetailCategoryService();

        const DetailCategory = await detailCategoryService.execute({
            name
        })
        
        return res.json(DetailCategory)
    }
}

export {DetailCategoryControler}