import prismaClient from "../../../prisma";

interface UserProp{
    id:string;
}

class DeleteUserService{
async execute({id}:UserProp){
    const ID = id;
 
    if(!ID){
      throw new Error("ID inexistente")        
    }

   const idUser = await prismaClient.users.findFirst({
    where:{
        id:id
    }
   })

   if(!idUser){
    throw new Error("ID inexistente") 
   }

   const deleteUser = await prismaClient.users.delete({
    where:{
        id:idUser.id
    }
   })

   return deleteUser

}
}

export {DeleteUserService}