import { IEvents } from "src/app/models/interfaces/IEvents";

export interface IEventsModel{
    typeEvent:string,
    events:IEvents[];
}

export interface IStoreModel{
    data: IEventsModel,
    type:string
}