"use server";

import { updateUserInformation } from "@/lib/db/services/users-service"; 
import { ErrorMessageType, MenteePersonalInformationFormState, MenteePersonalInformationFormSchema } from "@/definition/dashboard/mentee/personal-information-schema";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";

export default async function personalInformationFormAction(prevState: MenteePersonalInformationFormState, formData: FormData) {
 
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    if (!session || session.user.role != "MENTEE") {
        return { message: {type: ErrorMessageType.FAILURE,content: "You are not allowed to perfomed this action"} };
    }    
   
    let dataToValidate : {firstname: FormDataEntryValue | null, lastname: FormDataEntryValue | null, avatar?: FormDataEntryValue | null} = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname")        
    }

    if(formData.get("avatar")){
        dataToValidate = {
            avatar: formData.get("avatar"),
            ...dataToValidate           
        }
    }
    

    const {success, error, data} = MenteePersonalInformationFormSchema.safeParse(dataToValidate);

    if(!success){
        return { 
                errors:
                    error?.issues?.map((zerror)=>{
                        return {
                            target: zerror.path.length > 0 ? zerror?.path?.[0].toString() : 'root',
                            message: zerror?.message ?? ""
                    }
                    })
            };
    }
 
    const { firstname, lastname, avatar } = data;
    
    await updateUserInformation(session.user.id, avatar ? {firstName: firstname, lastName: lastname, image: avatar, name: `${firstname} ${lastname}`} : {firstName: firstname, lastName: lastname, name: `${firstname} ${lastname}`});

     
    
    // try{
    
    //     await auth.api.updateUser(
    //         {
    //             body:
    //             {
    //                 firstName: firstname,
    //                 lastName: lastname,
    //                 name: `${firstname} ${lastname}`
    //             },
    //             headers: await headers()
    //         }
    //     );

    // }catch(e:unknown){
    //      if(e instanceof Error)
    //      return { message: {type: ErrorMessageType.FAILURE,content: `${e.message}`} };
    // }

    revalidatePath(`/`); 
    
    return { message: {type: ErrorMessageType.SUCCESS,content: "Updated Successfully"} };
}





