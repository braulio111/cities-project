import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.citiesService.getCityDetails().subscribe(
      {
        next: (response) => console.log(response.data)
      }
    )
  }

}
