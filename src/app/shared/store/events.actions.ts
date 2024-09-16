import {  createAction, props } from "@ngrx/store";
import { IEvents } from "src/app/models/interfaces/IEvents";
import { IDaysEventStoreRequestModel, IEventTypeRequestModel, IEventTypeStoreRequestModel} from "./events.model";
import { IDaysEvents } from "src/app/models/interfaces/IDaysEvents";
import { IChangeEventDate } from "src/app/models/interfaces/IChangeEventDate";
import { EventActionResult } from "src/app/models/enums/eventActionResult";
import { ISaint } from "src/app/models/interfaces/ISaint"; 
export const LOAD_EVENTS_SUCCESS='[Event page] load events success';
export const LOAD_EVENTS='[Event page] load events';
export const LOAD_EVENTS_BY_DAYS='[Event page] load events by days';
export const CHANGE_EVENT_DATE='[Event page] Change event date';
export const CHANGE_EVENT_DATE_SUCCESS='[Event page] Change event date SUCCESS';
 
export const loadevents=createAction(LOAD_EVENTS,  props<{data:IEventTypeRequestModel}>());
export const loadeventsByDays=createAction(LOAD_EVENTS_BY_DAYS,  props<{data:IDaysEvents}>());
export const loadeventssuccess=createAction(LOAD_EVENTS_SUCCESS, props<{events:IEvents[]}>())

export const changeDateEvent=createAction(CHANGE_EVENT_DATE, props<{data:IChangeEventDate}>() ) 
export const changeDateEventSuccess=createAction(CHANGE_EVENT_DATE_SUCCESS, props<{event:IEvents}>()) 
