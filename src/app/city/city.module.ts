import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CityComponent } from './pages/city/city.component';



@NgModule({
  declarations: [
    CarouselComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CityComponent
  ]
})
export class CityModule { }
