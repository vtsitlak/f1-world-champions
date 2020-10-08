import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeasonsComponent } from './seasons/seasons.component';
import { SeasonComponent } from './season/season.component';
import { SeasonsRoutingModule } from './seasons-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SeasonLineComponent } from './season-line/season-line.component';



@NgModule({
  declarations: [SeasonsComponent, SeasonComponent, SeasonLineComponent],
  imports: [
    CommonModule,
    SharedModule,
    SeasonsRoutingModule,
  ]
})
export class SeasonsModule { }
