import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EntityDefinitionService } from '@ngrx/data';
import { carEntityMetadata } from './car.ngrx-data.configs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CarListComponent } from './car-list/car-list.component';
import { MatCardModule } from '@angular/material/card';
import { CarLabelsComponent } from './car-labels/car-labels.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    CarComponent,
    CarListComponent,
    CarLabelsComponent,
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
  ],
})
export class CarModule {
  constructor(eds: EntityDefinitionService) {
    eds.registerMetadataMap(carEntityMetadata);
  }
}
