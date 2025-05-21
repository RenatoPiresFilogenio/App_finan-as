import prismaClient from "../../../prisma";
interface listProp{
    userId: string,
}


class ListCategoryService{
async execute({userId}: listProp){

    const listing_category = await prismaClient.category.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      name: true,
    },
  });

  return listing_category
}
}

export {ListCategoryService}