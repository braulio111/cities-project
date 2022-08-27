import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, take } from 'rxjs/operators';
import { CitiesResponseModel } from '../shared/models/cities-response.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }

  cityCodes: string[] = ['Q60', 'Q24004405', 'Q65', 'Q90', 'Q220', 'Q172'];

  public getCityDetails(): Observable<CitiesResponseModel> { // Expect response model
    return this.http.get<CitiesResponseModel>('https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q60', { // API URL
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'e6c33ffd35msh7138885537fe8cbp1b1f5bjsne18c7cb4a25b',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      })
    }).pipe(take(1));
  }
}
