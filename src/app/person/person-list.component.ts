// TODO SOMEDAY: Feature Componetized like CrisisCenter
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Person } from '../models/person';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'person-list-items',
  templateUrl: './templates/person-list.component.html',
  styleUrls: ['./css/person-list.component.css']
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
      .switchMap((params: Params) => {
        this.selectedId = params['id'];
        return this.service.getPersons();
      });
  }

  isSelected(person: Person) { return person.personId === this.selectedId; }

  onSelect(person: Person) {
    this.router.navigate(['/person', person.personId]);
  }
}