import { EventActionResult } from "src/app/models/enums/eventActionResult";
import { IChangeEventDate } from "src/app/models/interfaces/IChangeEventDate";
import { IDaysEvents } from "src/app/models/interfaces/IDaysEvents";
import { IEvents } from "src/app/models/interfaces/IEvents";

export interface IEventsModel{
    events:IEvents[] 
   
}

export interface IStoreModel{
    data: IEventsModel,
    type:string
}


export interface IStoreRequest{
    type:string
}
export interface IEventTypeRequestModel {
    eventType:string
}

export interface IEventTypeStoreRequestModel extends IStoreRequest{
    data: IEventTypeRequestModel
}

export interface IDaysEventStoreRequestModel extends IStoreRequest{
    data: IDaysEvents
}

export interface IChangeEventDateRequestModel extends IStoreRequest{
    data: IChangeEventDate
}