import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/seasons',
  },
  // lazy loading Seasons module
  {
    path: 'seasons',
    loadChildren: () => import('./seasons/seasons.module').then(m => m.SeasonsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
