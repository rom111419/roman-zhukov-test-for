import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CarFormService {

  constructor() {}

  public readControlsConfig() {
    return {
      uuid: [ '' ],
      name: [ '', Validators.required],
      plate: [ '', Validators.required],
      make: [ '', Validators.required],
      model: [ '', Validators.required],
      year: [ '', Validators.required],
      device_type: [ '', Validators.required],
      device_serial: [ '', Validators.required],
      tracker_type: [ '', Validators.required],
      vin: [ '', Validators.required],
      driver: [ '', Validators.required],
      current_odometer: [ '', Validators.required ],
      tank_capacity: [ '', Validators.required ],
      labels_uuid: [ [''] ],
    }
  }
}
