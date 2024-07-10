import {  createAction, props } from "@ngrx/store";
import { IEvents } from "src/app/models/interfaces/IEvents";
import { IEventsModel } from "./events.model";
 
export const LOAD_EVENTS_SUCCESS='[Event page] load events success';
export const LOAD_EVENTS='[Event page] load events';

export const loadevents=createAction(LOAD_EVENTS,  props<{data:IEventsModel}>());
export const loadeventssuccess=createAction(LOAD_EVENTS_SUCCESS, props<{eventType:string, events:IEvents[]}>())

 

 