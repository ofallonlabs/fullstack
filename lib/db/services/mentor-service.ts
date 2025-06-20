import "server-only";
import prisma from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";

type UpdateMentorInformation = {
    tagline?:string,
    currentJobTitle?:string,
    aboutMe?:string
}


async function getMentor(userId: string){
    let targetMentor = null;    

    try{

        targetMentor =  await prisma.mentor.findUnique({
                where: {
                    userId
                }
        });

    }catch(e: unknown){

        printError("MentorService - getMentor",e);

    }

    return targetMentor;
}

async function updateMentorInformation(mentorId: number, data: UpdateMentorInformation){

    let updatedUser = null;    

    try{

        updatedUser =  await prisma.mentor.update({
            data,
            where: {
                id: mentorId
            }           
        });

    }catch(e: unknown){

        printError("MentorService - updateMentorInformation",e);

    }

    return updatedUser;

}


export {
    getMentor,
    updateMentorInformation
}