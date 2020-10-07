import { Injectable } from '@angular/core';
import { MRData, RaceTable } from '../@interfaces/race';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(
    private http: HttpClient,
  ) { }

  getSeason(season: string): Observable<RaceTable> {
    return this.http.get(`https://ergast.com/api/f1/${season}.json?limit=1000&offset=1`)
      .pipe(
        map((mrdData: MRData) => mrdData.RaceTable),
      );
  }

}
