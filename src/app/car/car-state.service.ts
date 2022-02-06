import { Injectable } from '@angular/core';
import { CarI, CarReadReqRes } from './car.model';
import { Observable, tap } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class CarStateService {
  cars$: Observable<CarReadReqRes[]> = new Observable<CarReadReqRes[]>();
  car$: Observable<CarI> = new Observable<CarI>();

  constructor() {}

  readCar(
    observableMethod: Observable<CarI>,
    form: FormGroup,
  ) {
    this.car$ = observableMethod.pipe(tap((car: CarI) => form.patchValue({
      name: car.name,
      plate: car.plate,
      make: car.make,
      model: car.model,
      year: car.year,
      device_type: car.device_type,
      device_serial: car.device_serial,
      tracker_type: car.tracker_type,
      vin: car.vin,
      driver: car.driver,
      current_odometer: car.current_odometer,
      tank_capacity: car.tank_capacity,
      labels_uuid: car.labels_uuid,
    })));
  }

  readCars(observableMethod: Observable<CarReadReqRes[]>) { this.cars$ = observableMethod; }


}
