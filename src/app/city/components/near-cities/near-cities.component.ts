import { Component, Input, OnInit } from '@angular/core';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-near-cities',
  templateUrl: './near-cities.component.html',
  styleUrls: ['./near-cities.component.scss']
})
export class NearCitiesComponent implements OnInit {

  @Input() cityInfo: any;
  nearCities: any[];
  constructor(private citiesService: CitiesService) { }
  ngOnInit(): void {
    this.citiesService.getNearCities(this.cityInfo.id).subscribe({
      next: (response) => {
        this.nearCities = response.data
        this.nearCities.shift()
        this.nearCities.pop();
      }
    })
  }

}
