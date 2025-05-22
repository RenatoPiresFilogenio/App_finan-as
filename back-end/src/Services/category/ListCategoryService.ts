import prismaClient from "../../../prisma";
interface listProp{
    userId: string,
}


class ListCategoryService{
async execute({userId}: listProp){

  if(!userId){
            throw new Error("erro ao pegar id")
    }

    const listing_category = await prismaClient.category.findMany({
    where: {
      userId: userId,
    },
    select: {
      id:true,
      name: true,
      total: true
    },
  });

  return listing_category
}
}

export {ListCategoryService}