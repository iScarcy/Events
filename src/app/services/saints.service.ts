import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseSaintApiUrl } from '../app.constant';
import { map, Observable, tap } from 'rxjs';
import { ISaint } from '../models/interfaces/ISaint';
import { INewSaintRequest } from '../models/requests/INewSaintRequest';
import { INewSaintStoreRequestModel } from '../shared/store/Saints/saints.model';

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

  addSaint(data:INewSaintRequest):Observable<ISaint>{
   
    const body = {
      description: data.description ,
      date: data.date
    }

   return this.httpClient.post<ISaint>(baseSaintApiUrl, body).pipe(
     map(saint => ({id: saint.id, date: saint.date, description: saint.description}))
 
   );
  
  }

}
