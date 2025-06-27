import "server-only";
import prisma, { Prisma }  from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";
import { CalendlyAuthTokenType } from "@/definition/CalendlyDefinition";

type UpdateMentorInformation = {
    tagline?:string,
    currentJobTitle?:string,
    aboutMe?:string
}

async function getAllMentors(){
    let allMentors = null;    

    try{

        allMentors =  await prisma.mentor.findMany({
                where: {
                    verifiedCalendly:true,
                    verifiedStrip: true
                },
                include: {
                    user: true
                }
        });

    }catch(e: unknown){

        printError("MentorService - getAllMentors",e);

    }

    return allMentors;
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

async function getMentorbyId(id: number){
    let targetMentor = null;    

    try{

        targetMentor =  await prisma.mentor.findUnique({
                where: {
                    id: id
                }
        });

    }catch(e: unknown){

        printError("MentorService - getMentorbyId",e);

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


async function updateMentorCalendlyCred(userId: string, calendlyCode: string,  calendlyData: CalendlyAuthTokenType){

    let upsertCalendlyCred = null;    

    try{

        const json = calendlyData as Prisma.InputJsonValue

        upsertCalendlyCred = await prisma.mentor.update({
            where: {
                userId: userId
            },
            data: {
                calendlyCode: calendlyCode,
                calendlyCred: json
            }
        });

    }catch(e: unknown){

        printError("MentorSerice - updateMentorCalendlyCred",e);

    }

    return upsertCalendlyCred;


}


export {
    getAllMentors,
    getMentor,
    getMentorbyId,
    updateMentorInformation,
    updateMentorCalendlyCred
}