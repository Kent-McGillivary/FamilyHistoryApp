import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PersonModule } from './person/person.module';

import { SearchPersonComponent } from './search/search-person.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PersonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
