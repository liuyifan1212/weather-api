import { AlphaComponent } from './alpha/alpha.component';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  { path: 'alpha',component: AlphaComponent },
  // use a colon and parameter name to include a parameter in the url
  { path: 'seattle',component: SeattleComponent },
  { path: 'chicago',component: ChicagoComponent },
  { path: '', pathMatch: 'full', redirectTo: '/' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
