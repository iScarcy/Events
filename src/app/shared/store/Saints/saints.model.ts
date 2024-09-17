import { ISaint } from "src/app/models/interfaces/ISaint";

export interface ISaintsModel{
    saints: ISaint[]
}

export interface IStoreModel{
    data: ISaintsModel,
    type:string
}
