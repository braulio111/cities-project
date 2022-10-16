import { Component, Input, OnChanges } from '@angular/core';
import { StatesService } from 'src/app/services/states.service';

@Component({
  selector: 'app-states-dropdown',
  templateUrl: './states-dropdown.component.html',
  styleUrls: ['./states-dropdown.component.scss']
})
export class StatesDropdownComponent implements OnChanges {


  @Input() selectedCountry: any;
  states: any;
  selectedState: any;

  constructor(private StatesService: StatesService) {

   }

   ngOnChanges(){
    this.StatesService.getStates(this.selectedCountry.code).subscribe({  
      next: (response) =>{
      this.states = response.data
   }})
   }
}

interface City {
  name: string,
  code: string
}

