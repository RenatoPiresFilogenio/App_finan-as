import { Request, Response } from "express";
import { DeleteCategoryService } from "../../Services/category/DeleteCategoryService";

class DeleteCategoryController{
async handle(req:Request,res:Response){
    const {id} = req.body
    const userId = req.userId as string
    
    if(!userId){
        return res.status(401).json({ error: "Usuário não autenticado" });
    }
    const deleteCategoryService = new DeleteCategoryService();

    const deleteCategory = await deleteCategoryService.execute({id,userId})

    return res.json(deleteCategory);
}
}

export {DeleteCategoryController}