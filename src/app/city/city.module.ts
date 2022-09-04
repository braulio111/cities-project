import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NearCitiesComponent } from './components/near-cities/near-cities.component';
import { CityComponent } from './pages/city/city.component';



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
