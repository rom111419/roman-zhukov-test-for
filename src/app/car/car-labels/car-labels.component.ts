import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { map, Observable, of, startWith, Subscription, switchMap } from 'rxjs';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { CarStateService } from '../car-state.service';
import { FormService } from '../../core/services/form.service';
import { CarFormService } from '../car.form.service';
import { CarRestService } from '../car-rest.service';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../core/services/crud.service';
import { EntityCollectionService, EntityCollectionServiceFactory } from '@ngrx/data';
import { Label, LabelReadReqRes } from './label.model';
import { CarI } from '../car.model';

@Component({
  selector: 'app-car-labels',
  templateUrl: './car-labels.component.html',
  styleUrls: [ './car-labels.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarLabelsComponent implements OnDestroy {

  @ViewChild('labelInput') labelInput!: ElementRef<HTMLInputElement>;
  separatorKeysCodes: number[] = [ ENTER, COMMA ];
  labelCtrl = new FormControl();
  filteredLabels$: Observable<LabelReadReqRes[]>;
  labels: string[] = [];
  allLabels: LabelReadReqRes[] = [];
  uuid: string = this.activatedRoute.snapshot.params['id'] || '';
  subs: Subscription = new Subscription();
  labelEntity: EntityCollectionService<Label>;
  carEntity: EntityCollectionService<CarI>;

  constructor(
    public state: CarStateService,
    public entityCollectionServiceFactory: EntityCollectionServiceFactory,
    private f: FormService,
    private fb: FormBuilder,
    private form: CarFormService,
    private crud: CrudService,
    private rest: CarRestService,
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef,
  ) {
    this.labelEntity = entityCollectionServiceFactory.create<Label>('label');
    this.carEntity = entityCollectionServiceFactory.create<CarI>('car');
    this.readLabels();
    this.filteredLabels$ = this.labelCtrl.valueChanges.pipe(
      startWith(null),
      map((label): LabelReadReqRes[] => label ? this._filter(label) : this.allLabels),
    );
  }

  readLabels() {

    this.subs.add(
      this.labelEntity.getAll().pipe(
        switchMap((labels: Label[]) => {
          this.allLabels = labels as LabelReadReqRes[];
          return this.carEntity.getByKey(this.uuid);
        }),
        switchMap((car: CarI) => {
          const labels_uuid = car.labels_uuid;
          this.labels = this.allLabels
            .filter(label => labels_uuid.includes(label.uuid))
            .map(label => label.label);
          this.cd.markForCheck();
          return of(car);
        }),
      ).subscribe(),
    );
  }

  add(event: MatChipInputEvent): void {
    const label = (event.value || '').trim();

    if (label) {
      this.labels.push(label);
      this.labelEntity.add({ label: label });
    }

    event.chipInput!.clear();
    this.labelCtrl.setValue(null);
  }

  remove(label: string): void {
    const index = this.labels.indexOf(label);

    if (index >= 0) {
      this.labels.splice(index, 1);
    }

    this.subs.add(this.carEntity.getByKey(this.uuid)
      .pipe(
        switchMap(car => {
            const result = { ...car, labels_uuid: Array.from(new Set([ ...car.labels_uuid ])) };
            console.log(car);
            return this.carEntity.update(result);
          },
        ))
      .subscribe(),
    );
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    const label = event.option.viewValue.split('Delete')[0];
    this.labels.push(label);
    this.subs.add(this.carEntity.getByKey(this.uuid)
      .pipe(
        switchMap(car => {
          const result = { ...car, labels_uuid: Array.from(new Set([ ...car.labels_uuid, event.option.value ])) };
          return this.carEntity.update(result);
          },
        ))
      .subscribe(),
    );

    this.labelInput.nativeElement.value = '';
    this.labelCtrl.setValue(null);
  }

  deleteLabel(label: LabelReadReqRes, event: Event) {
    event.stopPropagation();
    this.subs.add(this.labelEntity.delete(label).subscribe(() => {
      this._filter(label.label);
      this.cd.markForCheck();
    }));
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  private _filter(value: string): LabelReadReqRes[] {
    const filterValue: string = value.toLowerCase();
    return this.allLabels.filter((label: LabelReadReqRes) => label.label?.toLowerCase().includes(filterValue));
  }


}
