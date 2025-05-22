import prismaClient from "../../../prisma";

interface CategoryProp{
    name:string;
    userId:string;
}

class CreateCategoryService{
    async execute({name,userId  }:CategoryProp){

        if(!name || !userId){
            throw new Error("sem nome na categoria ou id nao identificado")
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