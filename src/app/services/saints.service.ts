import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseSaintApiUrl } from '../app.constant';
import { map, Observable, tap } from 'rxjs';
import { ISaint } from '../models/interfaces/ISaint';
import { INewSaintRequest } from '../models/interfaces/INewSaintRequest';

@Injectable({
  providedIn: 'root'
})
export class SaintsService {

  constructor(private httpClient: HttpClient) { }

  getSaints():Observable<ISaint[]>{    
    return this.httpClient.get<Array<ISaint>>(baseSaintApiUrl).pipe(
      map(saints => saints.map(saint => ({id: saint.id, date: saint.date, description: saint.description})))
    );
  }

  addSaint(request:INewSaintRequest):Observable<ISaint>{
    
    const body = {
      description: request.description ,
      date: request.date
    }

   return this.httpClient.post<ISaint>(baseSaintApiUrl, body).pipe(
     map(saint => ({id: saint.id, date: saint.date, description: saint.description}))
 
   );
  
  }

}
