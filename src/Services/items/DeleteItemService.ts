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
        })

        if(!findItem){
           throw new Error("id não encontrado")
        }

        const deleteItem = await prismaClient.item.delete({
            where:{
                id:findItem.id
            }
        })
        return deleteItem
    }
}

export {DeleteItemService}  
