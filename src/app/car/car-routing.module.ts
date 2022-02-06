import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car.component';
import { CarListComponent } from './car-list/car-list.component';

const routes: Routes = [
  {path: '', component: CarListComponent},
  {path: 'cars', component: CarListComponent},
  {path: 'car/:id', component: CarComponent},
  {path: 'car/add', component: CarComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
