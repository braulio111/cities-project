import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, take } from 'rxjs';
import { CitiesResponseModel } from '../shared/models/cities-response.model';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private http: HttpClient) { }

  public getStates(countryID: string): Observable<CitiesResponseModel>{
    return this.http.get<CitiesResponseModel>(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryID}/regions`, {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }),
      params: new HttpParams().set('limit', 100)
      }).pipe(take(1));
  }

  public getStateCities(countryCode: string, stateCode: string, offset = 0): Observable<CitiesResponseModel>{
    return this.http.get<CitiesResponseModel>(`https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${countryCode}/regions/${stateCode}/cities`, {
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }),
      params: new HttpParams().set('limit', 100).set('offset', offset)
      }).pipe(take(1));
  }
}
