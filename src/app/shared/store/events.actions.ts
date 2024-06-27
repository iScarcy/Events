import { createAction, props } from "@ngrx/store";
import { IEvents } from "src/app/models/interfaces/IEvents";

export const setEvents = createAction("setevents", props<{events:IEvents[]}>)