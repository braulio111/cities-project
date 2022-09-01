import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from './city/pages/city/city.component';
import { HomeComponent } from './homepage/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'city/:id', component: CityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
