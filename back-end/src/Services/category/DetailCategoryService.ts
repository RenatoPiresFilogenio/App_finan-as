import prismaClient from "../../../prisma";
interface CategoryProp{
    name:string;
    userId:string;
}

class DetailCategoryService {
    async execute({ name, userId }: CategoryProp) {
       
        if(!name || !userId){
            throw new Error("sem nome na categoria ou id nao identificado")
        }

        const DetailCategory = await prismaClient.category.findMany({
            where: {
                name,
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