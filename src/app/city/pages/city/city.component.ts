import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../../../services/cities.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  id: any;
  cityInfo: any;

  constructor(private citiesService: CitiesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    
    this.citiesService.getCityDetails(this.id).subscribe({
      next: (response) => {
        this.cityInfo = response.data;
      }
    })
  }

}
