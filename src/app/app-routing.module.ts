import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CountryComponent} from './country/country.component';
import {InvitedComponent} from './invited/invited.component';

const routes: Routes = [
  {path:'invited',component:InvitedComponent},
  {path:'country',component:CountryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
