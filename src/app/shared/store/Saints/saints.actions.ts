import { createAction, props } from "@ngrx/store";
import { ISaint } from "src/app/models/interfaces/ISaint";
import { INewSaintStoreRequestModel } from "./saints.model";
import { INewSaintRequest } from "src/app/models/requests/INewSaintRequest";

export const LOAD_SAINTS='[Saints page] load saints';
export const LOAD_SAINTS_SUCCESS='[Saints page] load saints success';
export const NEW_SAINT='[Saints page] add new saint';
export const NEW_SAINT_SUCCESS='[Saints page] add new saint success';

export const loadsaints=createAction(LOAD_SAINTS);
export const loadsaintssuccess=createAction(LOAD_SAINTS_SUCCESS, props<{saints:ISaint[]}>())

export const newsaint=createAction(NEW_SAINT, props<{data:INewSaintRequest}>());
export const newsaintssuccess=createAction(NEW_SAINT_SUCCESS, props<{saint:ISaint}>())
