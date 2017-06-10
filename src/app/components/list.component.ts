import { Component, OnInit } from '@angular/core';

import { Person } from '../models/person';

import { PersonService } from '../services/person.service';

const HEROES: Person[] = [
  { personId: "11", firstName: 'Mr. Nice', lastName:'t' },
  { personId: "12", firstName: 'Narco', lastName:'t' },
  { personId: "13", firstName: 'Bombasto', lastName:'t' },
  { personId: "14", firstName: 'Celeritas', lastName:'t' },
  { personId: "15", firstName: 'Magneta', lastName:'t' },
  { personId: "16", firstName: 'RubberMan', lastName:'t' },
  { personId: "17", firstName: 'Dynama', lastName:'t' },
  { personId: "18", firstName: 'Dr IQ', lastName:'t' },
  { personId: "19", firstName: 'Magma', lastName:'t' },
  { personId: "20", firstName: 'Tornado', lastName:'t' }
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
