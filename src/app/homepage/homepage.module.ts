import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CityContainerComponent } from './components/city-container/city-container.component';
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
    HomeComponent
  ]
})
export class HomepageModule { }
