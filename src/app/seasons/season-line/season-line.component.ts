import { Component, Input } from '@angular/core';
import { RaceTable, Driver } from '../../@interfaces/race';

@Component({
  selector: 'app-season-line',
  templateUrl: './season-line.component.html',
  styleUrls: ['./season-line.component.scss']
})
export class SeasonLineComponent {

  @Input() raceTable: RaceTable;
  @Input() champion: Driver;

}
