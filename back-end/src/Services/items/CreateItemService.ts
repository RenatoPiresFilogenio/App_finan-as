import prismaClient from "../../../prisma";

interface itemProps{
    name:string;
    amount:number;
    categoryId:string;
}

class CreateItemService{
async execute({name,amount,categoryId}:itemProps){

    if(!name || !amount || !categoryId){
    throw new Error("falta informação");
}

const findCategory = await prismaClient.category.findFirst({
    where:{
        id: categoryId
    }
})

if(!findCategory){
    throw new Error("categoria não identificado no banco");
}

    const createitem = await prismaClient.item.create({
       data:{ name,
                amount,
                categoryId}
    })

    await prismaClient.category.update({
      where: { id: categoryId },
      data: {
        total: {
          increment: amount, 
        },
      },
    });

    return createitem;
}
}

export {CreateItemService}