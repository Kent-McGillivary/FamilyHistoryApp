
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


import { PersonService } from './../services/person.service';
import { Person } from './../models/person';

import { switchMap } from 'rxjs/operators';


@Component({
  templateUrl: './templates/person-detail.component.html'
})
export class PersonDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  person: Person;
  parentLink:String;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonService
  ) {

  }

  ngOnInit() {

   this.route.params
   .pipe(switchMap(((params: Params) => {
        if(params["personId"] === "K1WK-GTK" ) {
          this.parentLink = "/person/LCM9-9ND";
        }
        else {
          this.parentLink = "/person/K1WK-GTK";
        }

        return this.service.getPerson(params['personId']);
      })))
      .subscribe((person: Person) => {
        this.person = person;
      });
  }

  goBack() {
    this.router.navigate(['/persons']);
  }
}
