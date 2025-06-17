import "server-only";
import prisma, { Prisma } from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";

type MenteeEducationType = {
    highestEducationalLevel: string,
    fieldOfStudy: string,
    graduationYear: string,
    graduationInstitute: string
}

type MenteeJobExperience = {
    employementStatus: boolean,
    title?: string,
    employer?: string
}

type MenteeSkills = {
    name: string,
    rating: number
}

type MenteeTools = {
    name: string,
    rating: number
}


async function getMenteeBackground(menteeId: number){

    let targetMenteeBackground = null;    

    try{

        targetMenteeBackground =  await prisma.menteeBackground.findUnique({
                where: {
                    menteeId: menteeId
                }
        });

    }catch(e: unknown){

        printError("MenteeBackground - getUserInformation",e);

    }

    return targetMenteeBackground;

}

async function upsertEducation(menteeId: number, educationData: MenteeEducationType){

    let upsertedMenteeBackground = null;    

    try{

        var json = educationData as Prisma.InputJsonValue

        upsertedMenteeBackground = await prisma.menteeBackground.upsert({
            where: {
                menteeId: menteeId
            },
            create: {
                education: json,
                job: Prisma.JsonNull,
                skills: Prisma.JsonNull,
                tools: Prisma.JsonNull,
                menteeId: menteeId
            },
            update: {
                education: json,
            }
        });

    }catch(e: unknown){

        printError("MenteeBackground - upsertEducation",e);

    }

    return upsertedMenteeBackground;


}

async function upsertJobExperience(menteeId: number, jobExperienceData: MenteeJobExperience){

    let upsertedMenteeBackground = null;    

    try{

        var json = jobExperienceData as Prisma.InputJsonValue

        upsertedMenteeBackground = await prisma.menteeBackground.upsert({
            where: {
                menteeId: menteeId
            },
            create: {
                education: Prisma.JsonNull,
                job: json,
                skills: Prisma.JsonNull,
                tools: Prisma.JsonNull,
                menteeId: menteeId
            },
            update: {
                job: json,
            }
        });

    }catch(e: unknown){

        printError("MenteeBackground - upsertJobExperience",e);

    }

    return upsertedMenteeBackground;


}

async function upsertSkills(menteeId: number, skillsData: MenteeSkills[]){

    let upsertedMenteeSkills = null;    

    try{

        var json = skillsData as Prisma.JsonArray

        upsertedMenteeSkills = await prisma.menteeBackground.upsert({
            where: {
                menteeId: menteeId
            },
            create: {
                education: Prisma.JsonNull,
                job: Prisma.JsonNull,
                skills:json,
                tools: Prisma.JsonNull,
                menteeId: menteeId
            },
            update: {
                skills: json,
            }
        });

    }catch(e: unknown){

        printError("MenteeBackground - upsertSkills",e);

    }

    return upsertedMenteeSkills;


}

async function upsertTools(menteeId: number, toolssData: MenteeTools[]){

    let upsertedMenteeTools = null;    

    try{

        var json = toolssData as Prisma.JsonArray

        upsertedMenteeTools = await prisma.menteeBackground.upsert({
            where: {
                menteeId: menteeId
            },
            create: {
                education: Prisma.JsonNull,
                job: Prisma.JsonNull,
                tools:json,
                skills: Prisma.JsonNull,
                menteeId: menteeId
            },
            update: {
                tools: json,
            }
        });

    }catch(e: unknown){

        printError("MenteeBackground - upsertTools",e);

    }

    return upsertedMenteeTools;


}



export {
    getMenteeBackground,
    upsertEducation,
    upsertJobExperience,
    upsertSkills,
    upsertTools
}