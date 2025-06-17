import "server-only";
import prisma from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";

type AddMenteeGoalType = {

  menteeId: number,   
  title: string,   
  description: string,
  expectations?: string,
  expectedTimeline?: string,  
  meetingFrequency: number
  focusHpw: number

}


async function getMenteeGoals(menteeId: number){

    let targetMenteeGoals = null;    

    try{

        targetMenteeGoals =  await prisma.menteeGoals.findMany({
                where: {
                    menteeId: menteeId
                }
        });

    }catch(e: unknown){

        printError("MenteeGoal - getMenteeGoals",e);

    }

    return targetMenteeGoals;

}

async function getMenteeGoal(menteeId: number, goalId: number){

    let targetMenteeGoal = null;    

    try{

        targetMenteeGoal =  await prisma.menteeGoals.findUnique({
                where: {
                    menteeId: menteeId,
                    id: goalId
                }
        });

    }catch(e: unknown){

        printError("MenteeGoal - getMenteeGoal",e);

    }

    return targetMenteeGoal;

}

async function createMenteeGoal(menteeId: number, data: AddMenteeGoalType){

    let newMenteeGoal = null;    

    try{

        newMenteeGoal =  await prisma.menteeGoals.create({
                data: data
        });

    }catch(e: unknown){

        printError("MenteeGoal - createMenteeGoal",e);

    }

    return newMenteeGoal;

}

async function updateMenteeGoal(goalId: number, menteeId: number, data: Omit<Partial<AddMenteeGoalType>,"menteeId">){

    let updatedMenteeGoal = null;    

    try{

        updatedMenteeGoal =  await prisma.menteeGoals.update({
                where: {
                    menteeId: menteeId,
                    id: goalId
                },
                data: data
        });

    }catch(e: unknown){

        printError("MenteeGoal - updateMenteeGoal",e);

    }

    return updatedMenteeGoal;

}
 
async function deleteMenteeGoal(menteeId: number, goalId: number){

    try{

        await prisma.menteeGoals.delete({
                where: {
                    menteeId: menteeId,
                    id: goalId
                }
        });

    }catch(e: unknown){

        printError("MenteeGoal - deleteMenteeGoal",e);

    }

}

export {
    getMenteeGoals,
    getMenteeGoal,
    createMenteeGoal,
    updateMenteeGoal,
    deleteMenteeGoal
}