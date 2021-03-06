import { Injectable } from '@angular/core';
import {
  EntityActionOptions,
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
  QueryParams,
} from '@ngrx/data';
import { CarCreateReqRes } from './car.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarRestService extends EntityCollectionServiceBase<CarCreateReqRes> {
  constructor(public serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('car', serviceElementsFactory);
  }

  override getAll(options?: EntityActionOptions): Observable<CarCreateReqRes[]> {
    return super.getAll(options) as Observable<CarCreateReqRes[]>;
  }

  override getByKey(key: any, options?: EntityActionOptions): Observable<CarCreateReqRes> {
    return super.getByKey(key, options);
  }

  override getWithQuery(queryParams: QueryParams | string, options?: EntityActionOptions): Observable<CarCreateReqRes[]> {
    return super.getWithQuery(queryParams, options);
  }
}
