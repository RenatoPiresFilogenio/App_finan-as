import prismaClient from "../../../prisma";
interface CategoryProp{
    name:string;
}

class DetailCategoryService {
    async execute({ name }: CategoryProp) {
        const categoryName = name;


        const DetailCategory = await prismaClient.category.findMany({
            where: {
                name: categoryName 
            }
        });

        return DetailCategory; 
    }
}

export {DetailCategoryService}