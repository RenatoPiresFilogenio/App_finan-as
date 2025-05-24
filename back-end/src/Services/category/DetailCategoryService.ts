import prismaClient from "../../../prisma";
interface CategoryProp{
    id:string;
    userId:string;
}

class DetailCategoryService {
    async execute({ id, userId }: CategoryProp) {
       
        if(!id || !userId){
            throw new Error("sem nome na categoria ou id nao identificado")
        }

        const DetailCategory = await prismaClient.category.findMany({
            where: {
                id,
                userId
            },
            select:{
                id:true,
                name:true,
                total:true,
                    items:{
                        select:{
                            name:true,
                            id:true,
                            amount:true,
                        }
                    }
            }
        });

        return DetailCategory; 
    }
}

export {DetailCategoryService}