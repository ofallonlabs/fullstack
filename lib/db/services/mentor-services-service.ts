import "server-only";
import prisma, { ServiceCategory, ServiceType } from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";

 

type AddMentorService = {

  mentorId: number
  title: string
  description?: string  
  qualifications?: string  
  productId?: string  
  priceId?: string  
  price: number
  type: ServiceType,
  category: ServiceCategory   
  calendlyEvent?: string  
  needApproval: boolean

}


async function getMentorServices(mentorId: number){

    let targetMentorServices = null;    

    try{

        targetMentorServices =  await prisma.mentorService.findMany({
                where: {
                    mentorId: mentorId
                }
        });

    }catch(e: unknown){

        printError("MentorServices - getMentorServices",e);

    }

    return targetMentorServices;  

}

async function getMentorService(mentorId: number, serviceId: number){

    let targetMentorService = null;    

    try{

        targetMentorService =  await prisma.mentorService.findUnique({
                where: {
                    mentorId: mentorId,
                    id: serviceId
                }
        });

    }catch(e: unknown){

        printError("MentorServices - getMentorService",e);

    }

    return targetMentorService;  

}

async function createMentorService(data: AddMentorService){

    let newMentorService = null;    

    try{

        newMentorService =  await prisma.mentorService.create({data});

    }catch(e: unknown){

        printError("MentorServices - createMentorService",e);

    }

    return newMentorService;

}

async function updateMentorService(mentorId: number, serviceId: number, data: Omit<Partial<AddMentorService>, "mentorId">){

    let updatedMentorService = null;    

    try{

        updatedMentorService =  await prisma.mentorService.update({
            where:{
                id:serviceId,
                mentorId: mentorId
            },
            data: data
        });

    }catch(e: unknown){

        printError("MenteeGoal - updateMentorService",e);

    }

    return updatedMentorService;

}


export {
    getMentorServices,
    getMentorService,
    createMentorService,
    updateMentorService
}