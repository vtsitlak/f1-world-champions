import { Component, OnInit } from '@angular/core';
import { RaceService } from '../../@services/race.service';
import { Race, Driver, RaceTable, DriverPoints } from '../../@interfaces/race';
import { zip } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-seasons',
  templateUrl: './seasons.component.html',
  styleUrls: ['./seasons.component.scss']
})
export class SeasonsComponent implements OnInit {

  raceTables: RaceTable[] = [];
  champions: Driver[] = [];
  loading = true;

  constructor(
    private raceService: RaceService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    // create an array of observables and use zip, to load the data by once
    const years = Array.from({ length: 11 }, (x, i) => (i + 2005).toString());
    const raceTables$ = [];
    years.forEach(year => raceTables$.push(this.raceService.getSeason(year)));

    zip(...raceTables$).subscribe((raceTables: RaceTable[]) => {
      this.raceTables = raceTables;
      raceTables.forEach(racetable => {
        const champion: Driver = this.seasonChampion(racetable.Races);
        this.champions.push(champion);
      });
      this.loading = false;
    },
      // on fail losding data display the snack bar with the erro message
      () => {
        this.loading = false;
        this.openSnackBar('Failed to load Data', 'reload');
      });
  }

  seasonChampion(races: Race[]): Driver {
    // calculate the max points od a season for a driver to find the champion
    const driversPoints: DriverPoints[] = [];

    races.forEach(race => {
      race.Results.forEach(result => {
        const driverIdIndex = driversPoints.map(dp => dp.driver.driverId).indexOf(result.Driver.driverId);

        if (driverIdIndex > -1) {
          driversPoints[driverIdIndex].points += parseInt(result.points, 10);
        } else {
          const newDriverPoints: DriverPoints = {
            driver: result.Driver,
            points: parseInt(result.points, 10),
          };
          driversPoints.push(newDriverPoints);
        }
      });
    });

    const maxPoints = Math.max(...driversPoints.map(dp => dp.points), 0);
    const maxPointsIndex = driversPoints.map(dp => dp.points).indexOf(maxPoints);

    return driversPoints[maxPointsIndex].driver;
  }

  openSnackBar(message: string, action: string): void {
    // opens the snackbar. On action reloads the page to try agin to load the data
    this.snackBar.open(message, action, {
      duration: 10000,
    }).onAction().subscribe(() => {
      window.location.reload();
    });
  }

}
