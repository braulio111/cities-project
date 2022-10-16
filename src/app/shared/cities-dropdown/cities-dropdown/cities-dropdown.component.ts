import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { StatesService } from 'src/app/services/states.service';
@Component({
  selector: 'app-cities-dropdown',
  templateUrl: './cities-dropdown.component.html',
  styleUrls: ['./cities-dropdown.component.scss']
})
export class CitiesDropdownComponent implements OnChanges {

  @Input() selectedState: any;
  constructor(private StatesService: StatesService, private router: Router ) { }
  cities: any[];
  ngOnChanges(){
    this.StatesService.getStateCities(this.selectedState.countryCode, this.selectedState.isoCode).subscribe({  
      next: (response) =>{
      this.cities = response.data
   }})
    this.StatesService.getStateCities(this.selectedState.countryCode, this.selectedState.isoCode, 100).subscribe({  
     next: (response) =>{
      response.data.forEach(city => this.cities.push(city))
   }})
    this.StatesService.getStateCities(this.selectedState.countryCode, this.selectedState.isoCode, 200).subscribe({  
      next: (response) =>{
        response.data.forEach(city => this.cities.push(city))
  }}) 
  this.StatesService.getStateCities(this.selectedState.countryCode, this.selectedState.isoCode, 300).subscribe({  
    next: (response) =>{
      response.data.forEach(city => this.cities.push(city))
}}) 
    } 

    redirectTo(cityCode: any) {
      this.router.navigateByUrl(`city/${cityCode.value}`)
    }
}
