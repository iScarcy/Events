import { createAction, props } from "@ngrx/store";
import { ISaint } from "src/app/models/interfaces/ISaint";

export const LOAD_SAINTS='[Saints page] load saints';
export const LOAD_SAINTS_SUCCESS='[Saints page] load saints success';

export const loadsaints=createAction(LOAD_SAINTS);
export const loadsaintssuccess=createAction(LOAD_SAINTS_SUCCESS, props<{saints:ISaint[]}>())
