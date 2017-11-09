import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PersonDetailComponent } from './person-detail.component';

import { PersonService } from './../services/person.service';

import { PersonsRoutingModule } from './persons-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PersonsRoutingModule
  ],
  declarations: [
     PersonDetailComponent
  ],
  providers: [ PersonService ]
})
export class PersonModule {}


/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
