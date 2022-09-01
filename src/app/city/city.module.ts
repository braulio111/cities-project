import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CityComponent } from './pages/city/city.component';



@NgModule({
  declarations: [
    CityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CityComponent
  ]
})
export class CityModule { }
