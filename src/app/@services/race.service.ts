import { Injectable } from '@angular/core';
import { MRData } from '../@interfaces/race';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RaceService {

  constructor(
    private http: HttpClient,
  ) { }

  getRace(season: string): Observable<MRData> | any {
    return this.http.get(`https://ergast.com/api/f1/${season}/results.json?limit=100&offset=1`)
      .pipe(
        catchError(this.handleError),
      );
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
}
