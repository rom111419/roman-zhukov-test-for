import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { DefaultDataServiceConfig, EntityDataModule } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from './ngrx/ngrx-store.configs';
import { environment } from '../../environments/environment';
import { reducers } from './reducers';
import { defaultDataServiceConfig, entityMetadata, pluralNames } from './ngrx/ngrx-data.configs';

export let dev: ModuleWithProviders<StoreDevtoolsModule>[] = [
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production,
  }),
];
export const devEnv = (prodEnv: boolean) => {
  if (prodEnv) {
    dev = [];
  }
};
devEnv(environment.production);


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers: metaReducers(!environment.production) }),
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot({ entityMetadata, pluralNames }),
    ...dev,
  ],
  providers: [
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig },
  ],
})
export class NgrxStoreModule {
}
