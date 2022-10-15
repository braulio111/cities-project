import { Component, OnInit } from '@angular/core';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-dropdown',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})


export class CountriesComponent implements OnInit {
  countriesList: Country[] = [];
  selectedCountry: any;

  constructor(private CountriesService: CountriesService) {}

   ngOnInit(): void {
    this.CountriesService.getCountries().subscribe({
      next: (response) => {
        response.data.forEach(country => {
          this.countriesList.push({ name: country.name, code: country.code });
        })
      }
    })

    this.CountriesService.getCountries(100).subscribe({
      next: (response) => {
        response.data.forEach(country => {
          this.countriesList.push({ name: country.name, code: country.code });
        })
      }
    })
  }

  getCountryIcon(countryCode: string) {
    return getUnicodeFlagIcon(countryCode);
  }
}

interface Country {
  name: string,
  code: string
}
