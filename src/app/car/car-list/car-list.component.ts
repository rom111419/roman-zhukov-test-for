import { Component, OnInit } from '@angular/core';
import { CarStateService } from '../car-state.service';
import { FormService } from '../../core/services/form.service';
import { FormBuilder } from '@angular/forms';
import { CarFormService } from '../car.form.service';
import { CarRestService } from '../car-rest.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, take } from 'rxjs';
import { CarReadReqRes } from '../car.model';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: [ './car-list.component.scss' ],
})
export class CarListComponent implements OnInit {
  cars$: Observable<CarReadReqRes[]> = new Observable<CarReadReqRes[]>();

  constructor(
    public state: CarStateService,
    public rest: CarRestService,
    private f: FormService,
    private fb: FormBuilder,
    private form: CarFormService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.readAllCars();
  }

  goTo(uuid: string) {
    this.router.navigate([ `car/${ uuid }` ]);
  }

  deleteCar(uuid: string) {
    this.rest.delete(uuid).pipe(take(1)).subscribe(value => this.readAllCars());
  }

  private readAllCars() {
    this.state.readCars(this.rest.getAll());
  }

  addNew() {
    this.router.navigate([ 'car','add' ]);
  }
}
