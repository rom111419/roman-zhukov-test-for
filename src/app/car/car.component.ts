import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormService } from '../core/services/form.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CarFormService } from './car.form.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarStateService } from './car-state.service';
import { CarRestService } from './car-rest.service';
import { switchMap, take } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Label } from './car-labels/label.model';
import { CarI } from './car.model';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: [ './car.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    MatSnackBar, Overlay
  ]
})
export class CarComponent implements OnInit {
  formGroup: FormGroup = this.fb.group(this.form.readControlsConfig());
  uuid: string = this.activatedRoute.snapshot.params['id'] || '';
  carEntity: EntityCollectionService<CarI>;

  constructor(
    public entityCollectionServiceFactory: EntityCollectionServiceFactory,
    public state: CarStateService,
    private f: FormService,
    private fb: FormBuilder,
    private form: CarFormService,
    private rest: CarRestService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.carEntity = entityCollectionServiceFactory.create<CarI>('car');
    this.f.readForm().patchValue({});
  }

  ngOnInit(): void {
    this.readCar();
  }

  createCar() {
    this.rest.add(this.formGroup.value).pipe(take(1)).subscribe();
  }

  readCar() {
    this.state.readCar(this.rest.getByKey(this.uuid), this.formGroup);
  }


  updateCar() {
    this.carEntity.getByKey(this.uuid).pipe(
      switchMap(car => {
        return this.rest.update({
          ...this.formGroup.value,
          labels_uuid: car.labels_uuid,
          uuid: this.uuid
        })
      })
    ).subscribe(value => {
      this.openSnackBar('Car successfully updated', '');
    })

  }

  back() {
    this.router.navigate([ '' ]);
  }

  private openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action,{ duration: 2000 });
  }
}
