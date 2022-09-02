import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityComponent } from './pages/city/city.component';
import { NearCitiesComponent } from './components/near-cities/near-cities.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CityComponent,
    NearCitiesComponent,

  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CityComponent,
  ]
})
export class CityModule { }
