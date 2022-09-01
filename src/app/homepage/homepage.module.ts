import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CityCardComponent } from './components/city-card/city-card.component';
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
    ButtonModule,
    RouterModule
  ],
  exports: [
    CityCardComponent,
    CityContainerComponent,
    HomeComponent
  ]
})
export class HomepageModule { }
