import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CitiesResponseModel } from '../shared/models/cities-response.model';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }
  
  public getCountries(offset = 0): Observable<CitiesResponseModel>{
    return this.http.get<CitiesResponseModel>('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }),
    params: new HttpParams().set('offset', offset).set('limit', 100)
    }).pipe(take(1));
  }
}
