import "server-only";
import prisma from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";



type CraeteUserInformationType = {
  name: string  
  firstName: string    
  lastName: string    
  country: string   
  externalURL?: string   
  image?: string    
}


async function getUserInformation(id: string){

    let targetUser = null;    

    try{

        targetUser =  await prisma.user.findUnique({
                where: {
                    id: id
                }
        });

    }catch(e: unknown){

        printError("UsersService - getUserInformation",e);

    }

    return targetUser;

}

async function updateUserInformation(id: string, data: Partial<CraeteUserInformationType>){

    let updatedUser = null;    

    try{

        updatedUser =  await prisma.user.update({
            data,
            where: {
                    id: id
            }           
        });

    }catch(e: unknown){

        printError("UsersService - updateUserInformation",e);

    }

    return updatedUser;

}


export {
    getUserInformation,
    updateUserInformation
}
 