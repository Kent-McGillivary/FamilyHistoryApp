import { Injectable } from '@angular/core';



import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersonService {

  
  constructor(private http:HttpClient) { }

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>('/api/persons');
  }
  getPerson(id:string): Observable<Person> {
    console.log("Get person with Id:" + id);
    return this.http.get<Person>(`/api/person/${id}`);
  }

}
