import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-states-dropdown',
  templateUrl: './states-dropdown.component.html',
  styleUrls: ['./states-dropdown.component.scss']
})
export class StatesDropdownComponent implements OnInit {

  @Input() selectedCountry: any;
  countries: any;
  
  cities: City[];
  selectedCity: City;
  selectedCityCode: string;

  constructor(private CountriesService: CountriesService) {

    this.cities = [
      {name: 'New York', code: 'NY'},
      {name: 'Rome', code: 'RM'},
      {name: 'London', code: 'LDN'},
      {name: 'Istanbul', code: 'IST'},
      {name: 'Paris', code: 'PRS'}
  ];

   }

  ngOnInit(): void {
    this.CountriesService.getCountries(150).subscribe({
      next: (response) => {
      this.countries = response.data
      console.log(this.countries)
    }
    })
  }
}

interface City {
  name: string,
  code: string
}

