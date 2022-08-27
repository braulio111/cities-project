import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-container',
  templateUrl: './city-container.component.html',
  styleUrls: ['./city-container.component.scss']
})
export class CityContainerComponent implements OnInit {

  constructor() { }
  CardInfo = [
    {
      img: "",
      city: "",
      country: "",
      text: "",
      footer: ""
    }
  ]
    
  

  ngOnInit(): void {
  }

}
