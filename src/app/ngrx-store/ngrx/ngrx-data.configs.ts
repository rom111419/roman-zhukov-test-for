import { DefaultDataServiceConfig, EntityMetadataMap, EntityPluralNames } from '@ngrx/data';
import { environment } from '../../../environments/environment';
import { LabelReadReqRes } from '../../car/car-labels/label.model';

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: environment.api,
  timeout: 1000,
};

export const entityMetadata: EntityMetadataMap = {
  labels: { entityName: 'label', selectId: (label: LabelReadReqRes) => label.uuid },
};

export const pluralNames: EntityPluralNames = {};
