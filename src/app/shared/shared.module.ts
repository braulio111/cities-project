import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { CityCardComponent } from './city-card/city-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import {DropdownModule} from 'primeng/dropdown';
import { CountriesComponent } from './countries-dropdown/countries.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatesDropdownComponent } from './states-dropdown/states-dropdown/states-dropdown.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CityCardComponent,
    CountriesComponent,
    StatesDropdownComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    MenubarModule,
    ButtonModule,
    CardModule,
    RouterModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  exports: [
    NavbarComponent,
    CityCardComponent,
    CountriesComponent
  ]
})
export class SharedModule { }
