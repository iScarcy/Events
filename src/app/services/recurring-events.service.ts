import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { IEvents } from '../models/interfaces/IEvents';
import { baseApiUrl } from '../app.constant';

@Injectable({
  providedIn: 'root'
})
export class RecurringEventsService {

  

  constructor(private httpEvents: HttpClient) { }

  getEvents(eventsType:string):Observable<IEvents[]>{
    return this.httpEvents.get<Array<IEvents>>(baseApiUrl+eventsType).pipe(
      map(events => events.map(event => ({ type:event.type, date: event.date, description: event.description})))
    );
  }
}
