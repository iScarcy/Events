import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateModel } from "../Global/AppState.model";

const getsaintstate=createFeatureSelector<AppStateModel>("saints")

export const gestsaintslist=createSelector(getsaintstate, (state)=>{
    debugger;
    return state.saints;
});