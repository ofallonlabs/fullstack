import "server-only";
import prisma, { MentorshipStatus, Mentorship } from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";



export type MentorshipUpdateType = Partial<Pick<Mentorship, "status" | "progress" | "type" | "bookingUrl" | "archived"| "endedAt">>


async function getMentorshipForMentee(menteeId: number){

    let targetMentorships = null;    

    try{

        const applications = await prisma.application.findMany({
            where: {
                menteeId : menteeId
            },
            select: {
                id: true
            }
        });        

        targetMentorships =  await prisma.mentorship.findMany({
            where: {
                applicationId : {
                    in: applications.map((application) =>  application.id)
                }
            }
        });

    }catch(e: unknown){

        printError("MentorshipsService - getMentorshipForMentee",e);

    }

    return targetMentorships;

}

async function getMentorshipForAnApplication(applicationId: number){

    let targetMentorship = null;    

    try{

        targetMentorship =  await prisma.mentorship.findUnique({
            where: {
                applicationId : applicationId
            }
        });

    }catch(e: unknown){

        printError("MentorshipsService - getMentorshipForAnApplication",e);

    }

    return targetMentorship;

}

async function createMentorship(applicationId: number, mentorshipStatus: MentorshipStatus, mentorshipType: string){
    let newMentorship = null;    

    try{

        newMentorship =  await prisma.mentorship.create({
            data: {
                applicationId: applicationId,
                status: mentorshipStatus,
                archived: false,
                type: mentorshipType
            }
        });

    }catch(e: unknown){

        printError("MentorshipService - createMentorship",e);

    }

    return newMentorship;    
}

async function updateMentorship(applicationId: number, data: MentorshipUpdateType){
    let targetMentorship = null;    

    try{

        targetMentorship =  await prisma.mentorship.update({
            where:{
                id: applicationId
            },
            data: data
        });

    }catch(e: unknown){

        printError("MentorshipService - updateMentorship",e);

    }

    return targetMentorship;    
}

export { 
    getMentorshipForMentee,
    getMentorshipForAnApplication,
    createMentorship,
    updateMentorship
 }