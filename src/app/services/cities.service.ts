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
        'X-RapidAPI-Key': 'e6c33ffd35msh7138885537fe8cbp1b1f5bjsne18c7cb4a25b',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      })
    }).pipe(take(1));
  }

  public getCityDescription(city: string): Observable<any> {
    return this.http.get<any>('https://wiki-briefs.p.rapidapi.com/search', { // API URL
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '5b8b53d7f6mshb64105ad229cf77p1c7bd2jsn08db3a0517fe',
        'X-RapidAPI-Host': 'wiki-briefs.p.rapidapi.com'
      }),
      params: new HttpParams().set('q', city)
    }).pipe(take(1));
  }

  public getNearCities(latitude: number, longitude: number): Observable<any> {
    return this.http.get<any>(`https://wft-geo-db.p.rapidapi.com/v1/geo/locations/${latitude}${longitude > 0 ? '+' + longitude : longitude}/nearbyCities`, { // API URL
      headers: new HttpHeaders({
        'X-RapidAPI-Key': 'e6c33ffd35msh7138885537fe8cbp1b1f5bjsne18c7cb4a25b',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      })
    }).pipe(take(1));
  }
}
