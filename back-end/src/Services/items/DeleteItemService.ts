import prismaClient from "../../../prisma";

interface itemProp{
    id:string;
    userid:string;
}

class DeleteItemService{
    async execute({id, userid}: itemProp){
        if(!id){
            throw new Error("id item inexistente")
        }

        const findItem = await prismaClient.item.findFirst({
            where:{
                id,
                category:{
                    userId:userid
                }
            },
            include:{
                category:true
            }
        })

        if(!findItem){
           throw new Error("id não encontrado")
        }

        const deleteItem = await prismaClient.item.delete({
            where:{
                id:findItem.id
            }
        })
        const itemsRestantes = await prismaClient.item.findMany({
      where: {
        categoryId: findItem.categoryId,
      },
      select: {
        amount: true,
      },
    });

    const newTotal = itemsRestantes.reduce((acc, item) => acc + item.amount, 0);

    // Atualiza o total na categoria
    await prismaClient.category.update({
      where: {
        id: findItem.categoryId,
      },
      data: {
        total: newTotal,
      },
    });

    return { message: "Item deletado e total atualizado" };
    }
}

export {DeleteItemService}  
