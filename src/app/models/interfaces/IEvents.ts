import { EventActionResult } from "../enums/eventActionResult";

export interface IEvents{
    codEvent:string,
    type: number,
    date: Date,
    description: string,
    eventActionResult : EventActionResult
}