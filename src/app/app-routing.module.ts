import { SearchPersonComponent } from './search/search-person.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  /* { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '/persons' } */
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

