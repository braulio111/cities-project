import { Component, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';
import { CitiesService } from '../../../services/cities.service';

@Component({
  selector: 'app-city-container',
  templateUrl: './city-container.component.html',
  styleUrls: ['./city-container.component.scss']
})
export class CityContainerComponent implements OnInit {

  constructor(private citiesService: CitiesService, ) { }
  CITY_CODES: string[] = ['Q60', 'Q24004405', 'Q65', 'Q90', 'Q220', 'Q172'];

  cardInfo: any[] = [];

  ngOnInit(): void {
    this.CITY_CODES.map(cityCode => {
      this.citiesService.getCityDetails(cityCode).subscribe({
        next: (response) => this.cardInfo.push(response.data)
      })
    })

  }
}
