import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPeople } from '../models/interfaces/IPeople';
import { baseAdressBookApiUrl } from '../app.constant';
import { IChangeEventDate } from '../models/interfaces/IChangeEventDate';
import { IChangeDateRequest } from '../models/interfaces/IChangeDataRequest';

@Injectable({
  providedIn: 'root'
})
export class AndressbookService {

  constructor(private httpClient: HttpClient) { }

  getAdressBook():Observable<IPeople[]>{
    return this.httpClient.get<Array<IPeople>>(baseAdressBookApiUrl).pipe(
      map(people => people.map(person => ({id: person.id, nome: person.nome, cognome: person.cognome, dataNascita: person.dataNascita})))
    );
  }

  
  changeEventDate(request: IChangeEventDate){
   
    let api : string = "";
    
    api = baseAdressBookApiUrl+"ChangeBirthDay";
    
    const body = {
      newDataEvent: request.dateEvent,
       objID: request.codEvent
    }

   return this.httpClient.patch<IChangeDateRequest>(api, body);
  }
}
