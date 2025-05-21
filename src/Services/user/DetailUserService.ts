import prismaClient from "../../../prisma";

interface UserProp{
    id:string,
}

class DetailUserService{
    async execute({id}:UserProp){

        const userExist = await prismaClient.users.findFirst({
        where:{
            id:id
        },
        select:{
            id:true,
            name:true,
            email:true
        }
    })

    return userExist
    }
}

export {DetailUserService}