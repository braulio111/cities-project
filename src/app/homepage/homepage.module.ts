import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityCardComponent } from './components/city-card/city-card.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { CityContainerComponent } from './components/city-container/city-container.component';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    CityCardComponent,
    CityContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ],
  exports: [
    CityCardComponent,
    CityContainerComponent,
    HomeComponent
  ]
})
export class HomepageModule { }
