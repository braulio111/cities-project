import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from '../../../services/cities.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  id: any;
  cityInfo: any;

  constructor(private citiesService: CitiesService, private route: ActivatedRoute, private router: Router) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.route.params.subscribe(routeParams => {
      this.citiesService.getCityDetails(routeParams['id']).subscribe({
        next: (response) => this.cityInfo = response.data
      })
    });
  }
}
