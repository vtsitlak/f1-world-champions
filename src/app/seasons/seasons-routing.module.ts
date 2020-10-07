import { Routes, RouterModule } from '@angular/router';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './season/season.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: SeasonsComponent,
  },
  {
    path: ':season',
    component: SeasonComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeasonsRoutingModule {
}
