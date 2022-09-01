import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { CityCardComponent } from './city-card/city-card.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent,
    CityCardComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    CityCardComponent
  ]
})
export class SharedModule { }
