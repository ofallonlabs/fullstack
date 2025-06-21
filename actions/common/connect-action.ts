"use server";

export enum ConnectType {
    STRIPE,
    CALENDLY
}

export type ToggleConnectType = {
    type : ConnectType
}

export type ToggleConnectActionType = (connectType: ToggleConnectType) => Promise<void>

export default async function ToggleConnectAction(connectType: ToggleConnectType){

}