import prismaClient from "../../../prisma";
import {hash} from 'bcryptjs'
interface CreateUser{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
async execute({email,name,password}:CreateUser){

    if(!email){
        throw new Error("Email ou senha incorreto")
    }

    if(!password){
        throw new Error("Email ou senha incorreto")
    }

    const userExist = await prismaClient.user.findFirst({
        where:{
            email:email
        }
    })

    if(userExist){
        throw new Error("Email já cadastrado")
    }

    const hashingpassword = await hash(password,8)

    const user = await prismaClient.user.create({
        data:{
            name:name,
            email:email,
            password:hashingpassword,
        }

    })
   return user;
}
}


export {CreateUserService}
