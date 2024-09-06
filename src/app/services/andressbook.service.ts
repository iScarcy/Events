import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IPeople } from '../models/interfaces/IPeople';
import { baseAdressBookApiUrl } from '../app.constant';

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

}
