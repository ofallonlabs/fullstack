export enum ConnectType {
    STRIPE,
    CALENDLY
}

export type ToggleConnectType = {
    type : ConnectType
}

export type ToggleConnectActionType = (connectType: ToggleConnectType) => Promise<void>


export type TodoType = {
    id: string,
    action: string,
    status: string,
    description: string,
    subdescription: string,
    link: string,
}

export type StatisticsType = {
    name: string,
    value: string,
    change: string,
    changeType: string,
}