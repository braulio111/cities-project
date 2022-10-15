import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CitiesResponseModel } from '../shared/models/cities-response.model';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { }


  public getCityDetails(cityCode: string): Observable<CitiesResponseModel> { // Expect response model
    return this.http.get<CitiesResponseModel>(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityCode}`, { // API URL
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      })
    }).pipe(take(1));
  }

  public getCityDescription(city: string): Observable<any> {
    return this.http.get<any>('https://wiki-briefs.p.rapidapi.com/search', { // API URL
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
        'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com'
      }),
      params: new HttpParams().set('q', city)
    }).pipe(take(1));
  }

  public getNearCities(cityID: number): Observable<any> {
    return this.http.get<any>(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${cityID}/nearbyCities`, { // API URL
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'aa803d784fmshdc6b4cf35281382p16b366jsn1758e8020f60',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      })
    }).pipe(take(1));
  }
}
