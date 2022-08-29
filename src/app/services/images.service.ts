import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ImagesResponseModel } from '../shared/models/images-response.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor(private http: HttpClient) { }

  public getImage(image: string): Observable<ImagesResponseModel> { // Expect response model
    return this.http.get<ImagesResponseModel>('https://api.unsplash.com/search/photos', { // API URL
      headers: new HttpHeaders({
        'Authorization': 'Client-ID 2XCBAhNrzgxb4G6hYMSMEseg3dwRFOpRXEP1WIzxPQg'
      }),
      params: new HttpParams().set('query', image)
    }).pipe(take(1));
  }
}
