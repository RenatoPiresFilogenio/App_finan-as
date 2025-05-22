import { Request, Response } from "express";
import { CreateCategoryService } from "../../Services/category/CreateCategoryService";

class CreateCategoryController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;
    const userId = req.userId as string; 

    const createCategoryService = new CreateCategoryService();

    const criandoCategory = await createCategoryService.execute({
      name,
      userId 
    });

    return res.json(criandoCategory);
  }
}

export { CreateCategoryController };
