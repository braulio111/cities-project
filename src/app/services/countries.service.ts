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
  
  public getCountries(limit: number): Observable<CitiesResponseModel>{
    return this.http.get<CitiesResponseModel>('https://wft-geo-db.p.rapidapi.com/v1/geo/countries', {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': '5b8b53d7f6mshb64105ad229cf77p1c7bd2jsn08db3a0517fe',
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }),
    params: new HttpParams().set('limit', limit)
    }).pipe(take(1));
  }
}
