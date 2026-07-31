import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IEvents } from '../models/interfaces/IEvents';
import { baseAdressBookApiUrl, baseApiUrl, baseRecurringEventsApiUrl } from '../app.constant';
import { IDaysEvents } from '../models/interfaces/IDaysEvents';
import { IChangeEventDate } from '../models/interfaces/IChangeEventDate';
import { IChangeDateRequest } from '../models/requests/IChangeDataRequest';
import { EventActionResult } from '../models/enums/eventActionResult';
import { INewNamedayRequest } from '../models/requests/INewNamedayRequest';
import { INewEventRequest } from '../models/requests/INewEventRequest';
import { IEventsDto } from '../models/interfaces/IEventsDto';

@Injectable({
  providedIn: 'root'
})
export class RecurringEventsService {
  
  constructor(private httpEvents: HttpClient) { }

  

  getEvents(eventsType:string):Observable<IEvents[]>{
    eventsType = "recurring";
    return this.httpEvents.get<IEventsDto[]>(baseApiUrl+eventsType).pipe(
      map(events => events.map(event => ({codEvent: event.eventID, type:event.eventType, date: event.dateEvent, description: event.description, eventActionResult: EventActionResult.None})))
    );
  }

  getEventsByDays(request:IDaysEvents ):Observable<IEvents[]>{
    
    const body = {
      from: request.from,
      to: request.to
    }
    
   return this.httpEvents.put<Array<IEventsDto>>(baseApiUrl+"days", body).pipe(
     map(events => events.map(event => ({codEvent: event.eventID, type:event.eventType, date: event.dateEvent, description: event.description, eventActionResult: EventActionResult.None})))
    );
  }

  
  changeEventDate(request: IChangeEventDate){
   
    let api : string = baseApiUrl+"ChangeEventDate";    

    const body = {
      newDataEvent: request.dateEvent,
       objID: request.codEvent
    }

   return this.httpEvents.patch<IChangeDateRequest>(api, body);
  } 

  addNameDay(request:INewNamedayRequest){
    
     return this.httpEvents.post(baseRecurringEventsApiUrl+"NameDayWasCreated", request);
  }

  addEvent(request:INewEventRequest){
    
    return this.httpEvents.post(baseRecurringEventsApiUrl+"EventWasCreated", request);
 }
}
