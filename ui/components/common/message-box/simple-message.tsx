'use client'

export enum MessageState {
    SUCCESS,
    FAILURE,
    WARNING,
    NONE
}

type SimpleMessageType = {
    state: MessageState,
    message: string
}

export default function SimpleMessage({state, message}: SimpleMessageType){
    return (
        <>
            {
                state === MessageState.SUCCESS
                ?  <div className="text-sm py-2 rounded bg-brand-100 my-2 text-brand-600 px-4">{message}</div>
                :  state === MessageState.FAILURE
                ?
                <div className="text-sm py-2 rounded bg-red-100 my-2 text-red-600 px-4">{message}</div>
                :  state === MessageState.WARNING
                ?
                <div className="text-sm py-2 rounded bg-orange-100 my-2 text-orange-600 px-4">{message}</div>
                : null
            }  
        </>
    );
}