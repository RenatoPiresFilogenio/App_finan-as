import prismaClient from "../../../prisma";

interface itemProp{
    id: string;
}

class DetailItemService{
    async execute({id}:itemProp){

        if(!id){
            throw new Error("Id inexistente")
        }

        const item = await prismaClient.item.findUnique({
            where: {
                id,
               
            },
            select:{
                name:true,
                amount:true,
                category:{
                    select:{
                        name:true,
                        total:true
                    } 
                }
            }
            
        });

        if(!item){
            throw new Error("Item inexistente")
        }

        

       return item
    }
}

export {DetailItemService}