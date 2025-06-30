import "server-only";
import prisma, { Application, ApplicationStatus } from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";


export type ApplicationUpdateType = Partial<Pick<Application, "status" | "requestNote" | "responseMessage" | "checkoutId" | "archived"| "archivedAt" | "approvedAt">>


async function getApplicationsForMentee(menteeId: number){

    let targetApplications = null;    

    try{

        targetApplications =  await prisma.application.findMany({
            where: {
                menteeId : menteeId
            }
        });

    }catch(e: unknown){

        printError("ApplicationService - getApplicationsForMentee",e);

    }

    return targetApplications;

}

async function getApplicationsForMentor(mentorId: number){

    let targetApplications = null;    

    try{

        const services = await prisma.mentorService.findMany({
            where: {
                mentorId : mentorId
            },
            select: {
                id: true
            }
        });

        if(services){
            targetApplications =  await prisma.application.findMany({
                where: {
                    serviceId : {
                        in: services.map((service) => service.id)
                    }
                }
            });
        }



    }catch(e: unknown){

        printError("ApplicationService - getApplicationsForMentor",e);

    }

    return targetApplications;

}

async function getApplicationForService(serviceId: number){
    let targetApplications = null;    

    try{

        targetApplications =  await prisma.application.findMany({
            where: {
                serviceId : serviceId
            }
        });

    }catch(e: unknown){

        printError("ApplicationService - getApplicationForService",e);

    }

    return targetApplications;    
}

async function createApplication(serviceId: number, menteeId: number, ApplicationStatus: ApplicationStatus){
    let newApplication = null;    

    try{

        newApplication =  await prisma.application.create({
            data: {
                serviceId: serviceId,
                menteeId: menteeId,
                status: ApplicationStatus
            }
        });

    }catch(e: unknown){

        printError("ApplicationService - createApplication",e);

    }

    return newApplication;    
}

async function updateApplication(serviceId: number, data: ApplicationUpdateType){
    let targetApplication = null;    

    try{

        targetApplication =  await prisma.application.update({
            where:{
                id: serviceId
            },
            data: data
        });

    }catch(e: unknown){

        printError("ApplicationService - updateApplication",e);

    }

    return targetApplication;    
}


export {
    getApplicationsForMentee,
    getApplicationsForMentor,
    getApplicationForService,
    createApplication,
    updateApplication
}