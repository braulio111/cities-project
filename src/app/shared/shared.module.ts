import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CityCardComponent } from './city-card/city-card.component';



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
    CardModule
  ],
  exports: [
    NavbarComponent,
    CityCardComponent
  ]
})
export class SharedModule { }
