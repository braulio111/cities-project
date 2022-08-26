import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    MenubarModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
