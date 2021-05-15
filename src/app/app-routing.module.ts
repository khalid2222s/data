import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewLeagueTableComponent } from './view-league-table/view-league-table.component';

const routes: Routes = [
  {path: 'Tip' , component:ViewLeagueTableComponent},
  {path: 'Game' , component:ViewLeagueTableComponent},
  {path: 'Team' , component:ViewLeagueTableComponent},
  {path: '' , component:ViewLeagueTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
