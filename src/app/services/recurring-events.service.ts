import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Event } from '../models/Event';
import { Observable, map } from 'rxjs';
import { IEvents } from '../models/interfaces/IEvents';

@Injectable({
  providedIn: 'root'
})
export class RecurringEventsService {

  private _baseApiUrl:string = "http://192.168.1.141:3002/api/"

  constructor(private httpEvents: HttpClient) { }

  getAllEvents():Observable<Event[]>{
    let eventsUrl:string = "eventi"
    return this.httpEvents.get<Array<IEvents>>(this._baseApiUrl+eventsUrl).pipe(
      map(events => events.map(event => new Event(event.type, event.data, event.description)))
    );
  }
}
