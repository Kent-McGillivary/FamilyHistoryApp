import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Person } from '../models/person';

@Injectable()
export class PersonService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getPersons(): Observable<Person[]> {
    return this.http.get('/api/persons').map(res => <Person[]>res.json());
  }
  getPerson(id:string): Observable<Person> {
    console.log("Get person with Id:" + id);
    return this.http.get(`/api/person/${id}`).map(res => <Person>res.json());
  }

}
