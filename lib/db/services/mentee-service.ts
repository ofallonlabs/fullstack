import "server-only";
import prisma from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";


async function getMentee(userId: string){
    let targetMentee = null;    

    try{

        targetMentee =  await prisma.mentee.findUnique({
                where: {
                    userId
                }
        });

    }catch(e: unknown){

        printError("MenteeService - getMentee",e);

    }

    return targetMentee;
}


export {
    getMentee
}