import { Request, Response } from 'express';
import { ListCategoryService } from '../../Services/category/ListCategoryService';

class ListCategoryController {
  async handle(req: Request, res: Response) {
    const userId = req.userId as string; 
    const listCategoryService = new ListCategoryService();
    const list_category = await listCategoryService.execute({ userId }); 
    return res.json(list_category);
  }
}

export { ListCategoryController };