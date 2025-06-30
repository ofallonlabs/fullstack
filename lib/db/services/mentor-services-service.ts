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


async function getAllServices(){

    let allServices = null;    

    try{

        allServices =  await prisma.mentorService.findMany({
                where: {
                    isArchived: false,
                },
                include:{
                    mentor : {
                        include: {
                            user: true
                        }
                    }
                }
        });

    }catch(e: unknown){

        printError("MentorServices - getAllServices",e);

    }

    return allServices;  

}

async function getMentorServices(mentorId: number){

    let targetMentorServices = null;    

    try{

        targetMentorServices =  await prisma.mentorService.findMany({
                where: {
                    mentorId: mentorId,
                    isArchived: false,
                },
                include:{
                    mentor : {
                        include: {
                            user: true
                        }
                    }
                }                 
        });

    }catch(e: unknown){

        printError("MentorServices - getMentorServices",e);

    }

    return targetMentorServices;  

}

async function getMentorSeriveByServiceId(serviceId: number){

    let targetMentorService = null;    

    try{

        targetMentorService =  await prisma.mentorService.findUnique({
                where: {
                    id: serviceId,
                    isArchived: false,                    
                },
                include:{
                    mentor : {
                        include: {
                            user: true
                        }
                    }
                }                
        });

    }catch(e: unknown){

        printError("MentorServices - getMentorSeriveByServiceId",e);

    }

    return targetMentorService;  

}

async function getMentorService(mentorId: number, serviceId: number){

    let targetMentorService = null;    

    try{

        targetMentorService =  await prisma.mentorService.findUnique({
                where: {
                    mentorId: mentorId,
                    id: serviceId,
                    isArchived: false,                    
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

async function archiveMentorService(mentorId: number, serviceId: number){

    try{

        await prisma.mentorService.update({
            where:{
                id:serviceId,
                mentorId: mentorId
            },
            data: {
                isArchived: true,
                archivedAt: new Date()
            }
        });

    }catch(e: unknown){

        printError("MenteeGoal - archiveMentorService",e);

    }

}


export {
    getAllServices,
    getMentorServices,
    getMentorService,
    getMentorSeriveByServiceId,
    createMentorService,
    updateMentorService,
    archiveMentorService
}