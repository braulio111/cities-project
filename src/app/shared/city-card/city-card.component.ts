import { Component, Input, OnInit } from '@angular/core';
import { ImagesService } from 'src/app/services/images.service';

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss']
})
export class CityCardComponent implements OnInit {
  @Input() info: any;
  cityImage!: string;
  constructor(private imageService: ImagesService) { }

  ngOnInit(): void {
    this.imageService.getImage(this.info.city.toLowerCase()).subscribe({
      next: (response) => this.cityImage = response.results[0].urls.regular
    })
  }

  numberWithCommas(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
}
