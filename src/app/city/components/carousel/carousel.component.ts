import { Component, Input, OnInit } from '@angular/core';
import { CitiesService } from '../../../services/cities.service';
import { ImagesService } from '../../../services/images.service';
import { ImagesResponseModel } from '../../../shared/models/images-response.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() cityInfo: any;
  images: ImagesResponseModel[];
  description: string[];
  loading: number = 0;

  constructor(private imageService: ImagesService, private citiesService: CitiesService) { }

  ngOnInit(): void {
    this.imageService.getImage(this.cityInfo.city).subscribe({
      next: (response) => {
        this.images = response.results
        this.loading++
      }
    })

    this.citiesService.getCityDescription(`${this.cityInfo.city}, ${this.cityInfo.country}`).subscribe({
      next: (response) => {
        this.description = response.summary
        this.loading++
      }
    })
  }
}
