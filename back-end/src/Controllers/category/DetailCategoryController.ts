import { Request, Response } from "express";
import { DetailCategoryService} from "../../Services/category/DetailCategoryService";

class DetailCategoryControler {
    async handle(req:Request,res:Response){
        const { id } = req.params;
        const userId = req.userId as string; 
        const detailCategoryService = new DetailCategoryService();

        const DetailCategory = await detailCategoryService.execute({
            id,
            userId
        })
        
        return res.json(DetailCategory)
    }
}

export {DetailCategoryControler}