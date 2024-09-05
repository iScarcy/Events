import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseSaintApiUrl } from '../app.constant';
import { map, Observable } from 'rxjs';
import { ISaint } from '../models/interfaces/ISaint';

@Injectable({
  providedIn: 'root'
})
export class SaintsService {

  constructor(private httpEvents: HttpClient) { }

  getSaints():Observable<ISaint[]>{    
    return this.httpEvents.get<Array<ISaint>>(baseSaintApiUrl+"allSaints").pipe(
      map(saints => saints.map(saint => ({id: saint.id, date: saint.date, description: saint.description})))
    );
  }

}
