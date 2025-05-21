import prismaClient from "../../../prisma";

interface CategoryProp{
    name:string;
    userId:string;
}

class CreateCategoryService{
    async execute({name,userId  }:CategoryProp){

        if(!name){
            throw new Error("sem nome na categoria")
        }

        const createCategory = await prismaClient.category.create({
            data:{
                name,
                userId
            }
        })

         return createCategory;
    }
}

export {CreateCategoryService}