import { EventActionResult } from "../enums/eventActionResult";

export interface IEvents{
    codEvent:string,
    type: string,
    date: Date,
    description: string,
    typeID: number,
    eventActionResult : EventActionResult
}