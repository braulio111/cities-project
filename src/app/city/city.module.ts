import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CityComponent } from './pages/city/city.component';
import { NearCitiesComponent } from './components/near-cities/near-cities.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CarouselComponent,
    NearCitiesComponent,
    CityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarouselModule
  ],
  exports: [
    CityComponent
  ]
})
export class CityModule { }
