import {  createAction, props } from "@ngrx/store";
import { IEvents } from "src/app/models/interfaces/IEvents";
import { IDaysEventStoreRequestModel, IEventTypeRequestModel, IEventTypeStoreRequestModel} from "./events.model";
import { IDaysEvents } from "src/app/models/interfaces/IDaysEvents";
 
export const LOAD_EVENTS_SUCCESS='[Event page] load events success';
export const LOAD_EVENTS='[Event page] load events';
export const LOAD_EVENTS_BY_DAYS='[Event page] load events by days';

export const loadevents=createAction(LOAD_EVENTS,  props<{data:IEventTypeRequestModel}>());
export const loadeventsByDays=createAction(LOAD_EVENTS_BY_DAYS,  props<{data:IDaysEvents}>());
export const loadeventssuccess=createAction(LOAD_EVENTS_SUCCESS, props<{events:IEvents[]}>())

 

 