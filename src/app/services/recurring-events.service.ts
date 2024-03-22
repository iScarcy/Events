import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEvents } from '../models/interfaces/IEvents';

@Injectable({
  providedIn: 'root'
})
export class RecurringEventsService {

  private _baseUrlEvents:string = "http://localhost:3002/api/eventi"

  constructor(private httpEvents: HttpClient) { }

  getAllEvents(){
    
    return this.httpEvents.get<IEvents[]>(this._baseUrlEvents);
  }
}
