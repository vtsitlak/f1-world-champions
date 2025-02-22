import { Component, OnInit } from '@angular/core';
import { RaceTable, Driver, Race, Result } from '../../@interfaces/race';

export interface RaceDispaySource {
  date: string;
  raceName: string;
  round: string;
  winner: Driver;
}

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss']
})
export class SeasonComponent implements OnInit {

  raceTable: RaceTable;
  champion: Driver;
  dataSource: RaceDispaySource[] = [];
  displayedColumns = ['round', 'date', 'raceName', 'winner'];


  ngOnInit(): void {
    // get the data from state
    this.raceTable = history.state.raceTable;
    this.champion = history.state.champion;

    // prepare the data to be displayed on the table
    if (this.raceTable && this.champion) {
      this.raceTable.Races.forEach(race => {
        const dataSource: RaceDispaySource = {
          date: race.date,
          raceName: race.raceName,
          round: race.round,
          winner: this.raceWinner(race.Results),
        };

        this.dataSource.push(dataSource);
      });
    }
  }

  raceWinner(results: Result[]): Driver {
    // find the wiiner of a race based on the max points
    const maxPoints = Math.max(...results.map(result => parseInt(result.points, 10)), 0);
    const maxPointsIndex = results.map(result => result.points).indexOf(maxPoints.toString());

    return results[maxPointsIndex].Driver;
  }

  isChampion(winner: Driver): boolean {
    // returns if the race winner is the seasin champion
    return winner.driverId === this.champion.driverId;
  }

}
