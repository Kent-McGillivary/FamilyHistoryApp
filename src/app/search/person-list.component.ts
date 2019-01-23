// TODO SOMEDAY: Feature Componetized like CrisisCenter

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from '../models/person';
import { PersonService } from '../services/person.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'person-list-items',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})


export class PersonListComponent implements OnInit {
  persons: Observable<Person[]>;

  private selectedId: string;

  constructor(
    private service: PersonService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.persons = this.route.params
    .pipe(switchMap((params: Params) => {
        this.selectedId = params['id'];
        return this.service.getPersons();
      }));
  }

  isSelected(person: Person) { return person.personId === this.selectedId; }

  onSelect(person: Person) {
    this.router.navigate(['/person', person.personId]);
  }
}
