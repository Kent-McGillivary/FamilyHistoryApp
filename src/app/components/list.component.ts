import { Component, OnInit } from '@angular/core';

import { Person } from '../models/person';

import { PersonService } from '../services/person.service';

const HEROES: Person[] = [
  { id: 11, firstName: 'Mr. Nice', lastName:'t' },
  { id: 12, firstName: 'Narco', lastName:'t' },
  { id: 13, firstName: 'Bombasto', lastName:'t' },
  { id: 14, firstName: 'Celeritas', lastName:'t' },
  { id: 15, firstName: 'Magneta', lastName:'t' },
  { id: 16, firstName: 'RubberMan', lastName:'t' },
  { id: 17, firstName: 'Dynama', lastName:'t' },
  { id: 18, firstName: 'Dr IQ', lastName:'t' },
  { id: 19, firstName: 'Magma', lastName:'t' },
  { id: 20, firstName: 'Tornado', lastName:'t' }
];

@Component({
  selector: 'list-items',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit  {
  items = HEROES;

  persons:Person[];
  isLoading = true;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.getPersons();
  }

  getPersons() {
     this.personService.getPersons().subscribe(
     data => {
        this.persons = data;
      },
      error => console.log(error),
      () => this.isLoading = false
    );
  }
}
