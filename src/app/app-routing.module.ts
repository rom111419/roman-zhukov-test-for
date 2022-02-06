import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarModule } from './car/car.module';

const routes: Routes = [{
  path: '', loadChildren: () => import('./car/car.module')
    .then((m => m.CarModule))
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
