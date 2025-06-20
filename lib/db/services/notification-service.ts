import "server-only";
import prisma, { Notification } from "@/lib/db/prisma";
import { printError } from "@/utils/Utils";


type CreateNotificationType  = Pick<Notification, "type" | "content" | "status" | "notifier" | "timestamp">;


async function getNotificationForUser(userId: string){

    let targetNotifications = null;    

    try{

        targetNotifications =  await prisma.notification.findMany({
                where: {
                    userId: userId
                }
        });

    }catch(e: unknown){

        printError("NotificationService - getNotificationForUser",e);

    }

    return targetNotifications;

}

async function createNotification(userId: string, data: CreateNotificationType){

    let newNotification = null;    

    try{

        newNotification =  await prisma.notification.create({
            data: {
                userId,
                ...data
            }         
        });

    }catch(e: unknown){

        printError("NotificationService - createNotification",e);

    }

    return newNotification;

}

async function updateUserInformation(notificationId: number, userId:string, data: Partial<CreateNotificationType>){

    let updatedNotification = null;    

    try{

        updatedNotification =  await prisma.notification.update({
            data,
            where: {
                    id: notificationId,
                    userId
            }           
        });

    }catch(e: unknown){

        printError("NotificationService - updateUserInformation",e);

    }

    return updatedNotification;

}


export {
    getNotificationForUser,
    createNotification,
    updateUserInformation
}
 