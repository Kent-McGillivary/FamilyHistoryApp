import { SearchPersonComponent } from './search/search-person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './search/person-list.component';



const appRoutes: Routes = [
  /* { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '/persons' } */
  { path: 'persons',  component: PersonListComponent },
  { path: 'search',  component: SearchPersonComponent }

];

@NgModule({
  imports: [
   RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

