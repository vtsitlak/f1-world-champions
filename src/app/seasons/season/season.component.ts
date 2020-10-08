import { Component, OnInit } from '@angular/core';
import { RaceTable, Driver } from '../../@interfaces/race';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  raceTable: RaceTable;
  champion: Driver;

  constructor() { }

  ngOnInit(): void {
    this.raceTable = history.state.raceTable;
    this.champion = history.state.champion;
  }

}
