import prismaClient from "../../../prisma";

interface categoryProp{
    id:string;
    userId: string;
}

class DeleteCategoryService{
async execute({id, userId}:categoryProp){

if(!id){
    throw new Error("id inexistente")
}

const findCategory = await prismaClient.category.findFirst({
    where:{
        id,
    userId,
    },
});

if(!findCategory){
      throw new Error("id inexistente")
}

await prismaClient.item.deleteMany({
      where: {
        categoryId: findCategory.id,
      },
    });

const deleteCategory = await prismaClient.category.delete({
    where:{
        id:findCategory.id
    },
    select:{
        name:true
    }
})

    return deleteCategory
}
}

export{DeleteCategoryService}