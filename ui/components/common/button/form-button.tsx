'use client'

import { useFormStatus } from "react-dom"
import { classNames } from "@/utils/Utils";

type FormButtonType = {
    title: { idle:string, pending:string }, 
    style: { idle: string, pending:string }
}

export default function FormButton({title, style} : FormButtonType){
    const {pending} = useFormStatus();

    return (
        <button 
        type="submit"
        className={classNames(
            pending 
            ? 
            style.pending
            :
            style.idle
        )}    
        disabled={pending}>{pending ? title.pending : title.idle}</button>
    );
}

