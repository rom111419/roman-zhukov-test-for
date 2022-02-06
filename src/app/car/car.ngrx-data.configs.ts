import { DefaultDataServiceConfig, EntityMetadataMap, EntityPluralNames } from '@ngrx/data';
import { environment } from '../../environments/environment';
import { CarReadReqRes } from './car.model';


export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.api,
  timeout: 1000,
};

export const carEntityMetadata: EntityMetadataMap = {
  cars: {
    entityName: 'car',
    selectId: (car: CarReadReqRes) => car.uuid,
  }
};

export const carPluralNames: EntityPluralNames = {};
