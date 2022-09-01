import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CityContainerComponent } from './components/city-container/city-container.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './pages/home/home.component';




@NgModule({
  declarations: [
    CityContainerComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    CityContainerComponent,
    HomeComponent
  ]
})
export class HomepageModule { }
