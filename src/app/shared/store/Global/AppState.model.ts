import { IEventsModel } from "../events.model";
import { ISaintsModel } from "../Saints/saints.model";

export interface AppStateModel{
    events:IEventsModel,
    saints:ISaintsModel
}