import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IEvents } from '../models/interfaces/IEvents';
import { baseAdressBookApiUrl, baseApiUrl } from '../app.constant';
import { IDaysEvents } from '../models/interfaces/IDaysEvents';
import { IChangeEventDate } from '../models/interfaces/IChangeEventDate';
import { IChangeDateRequest } from '../models/interfaces/IChangeDataRequest';
import { EventActionResult } from '../models/enums/eventActionResult';

@Injectable({
  providedIn: 'root'
})
export class RecurringEventsService {
  
  constructor(private httpEvents: HttpClient) { }

  getEvents(eventsType:string):Observable<IEvents[]>{
    console.log("LOAD");
    return this.httpEvents.get<Array<IEvents>>(baseApiUrl+eventsType).pipe(
      map(events => events.map(event => ({codEvent: event.codEvent, type:event.type, date: event.date, description: event.description,  eventActionResult:  EventActionResult.None})))
    );
  }

  getEventsByDays(request:IDaysEvents ):Observable<IEvents[]>{
    
    const body = {
      from: request.from,
      to: request.to
    }
    
   return this.httpEvents.put<Array<IEvents>>(baseApiUrl+"days", body).pipe(
      map(events => events.map(event => ({codEvent: event.codEvent,  type:event.type, date: event.date, description: event.description,  eventActionResult:  EventActionResult.None})))
    );
  }

  changeEventDate(request: IChangeEventDate){
   
    let api : string = "";
    
    switch(request.typeEvent){
      case 0: api = baseAdressBookApiUrl+"ChangeBirthDay";
      break;
      case 2: api = baseApiUrl+"ChangeEventDate";
      break;
    }

    const body = {
      newDataEvent: request.dateEvent,
       objID: request.codEvent
    }

   return this.httpEvents.patch<IChangeDateRequest>(api, body);
  }
}
