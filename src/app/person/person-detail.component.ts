import 'rxjs/add/operator/switchMap';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { slideInDownAnimation } from '../animations';

import { PersonService } from './../services/person.service';
import { Person } from './../models/person';
import { Observable } from 'rxjs/Observable';


@Component({
  templateUrl: './templates/person-detail.component.html',
  animations: [ slideInDownAnimation ]
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
      .switchMap((params: Params) => {
        if(params["personId"] === "K1WK-GTK" ) {
          this.parentLink = "/person/LCM9-9ND";
        }
        else {
          this.parentLink = "/person/K1WK-GTK";
        }

        return this.service.getPerson(params['personId']);
      })
      .subscribe((person: Person) => {
        this.person = person;
      });
  }

  goBack() {
    this.router.navigate(['/persons']);
  }
}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/