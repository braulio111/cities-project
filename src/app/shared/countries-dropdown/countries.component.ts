import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-dropdown',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})


export class CountriesComponent implements OnInit {
  countriesList: any = [];
  selectedCountry: any;
  cities: City[];
  selectedCity: City;
  selectedCityCode: string;

  constructor(private CountriesService: CountriesService) {

   }

   ngOnInit(): void {
    this.CountriesService.getCountries().subscribe({
      next: (response) => {
        response.data.forEach(country => {
          this.countriesList.push({ name: country.name, code: country.code });
        })
      }
    })
  }

  onLazyLoad(event: any): void {
    if (event.last === 100 && event.first === 90) {
      this.CountriesService.getCountries(event.last).subscribe({
        next: (response) => {
          response.data.forEach(country => {
            this.countriesList.push({ name: country.name, code: country.code });
          })
        }
      })
    }
  }

}

interface City {
  name: string,
  code: string
}
