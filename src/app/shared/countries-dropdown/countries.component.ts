import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries-dropdown',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries: any;
  constructor(private CountriesService: CountriesService) { }

  ngOnInit(): void {
    this.CountriesService.getCountries(100).subscribe({
      next: (response) => this.countries = response.data
  
    })
  }
}
