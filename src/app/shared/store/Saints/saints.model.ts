import { ISaint } from "src/app/models/interfaces/ISaint";
import { INewSaintRequest } from "src/app/models/requests/INewSaintRequest";

export interface ISaintsModel{
    saints: ISaint[]
}

export interface IStoreModel{
    data: ISaintsModel,
    type:string
}


export interface IStoreRequest{
    type:string
}


export interface INewSaintStoreRequestModel extends IStoreRequest{
    data: INewSaintRequest
}

