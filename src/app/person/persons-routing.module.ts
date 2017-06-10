import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent }    from './person-list.component';
import { PersonDetailComponent }  from './person-detail.component';

const personsRoutes: Routes = [
  { path: 'persons',  component: PersonListComponent },
  { path: 'person/:personId', component: PersonDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(personsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonsRoutingModule { }


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/