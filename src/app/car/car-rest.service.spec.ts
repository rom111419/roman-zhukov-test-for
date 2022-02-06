import { TestBed } from '@angular/core/testing';

import { CarRestService } from './car-rest.service';
import {
  EntityActionFactory,
  EntityCollectionServiceElementsFactory, EntityDataModule, EntityDataService,
  EntityDefinitionService,
  EntityDispatcherFactory, EntitySelectors$Factory, EntitySelectorsFactory,
} from '@ngrx/data';
import { Store, StoreModule } from '@ngrx/store';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EffectsModule } from '@ngrx/effects';
import { entityMetadata, pluralNames } from '../ngrx-store/ngrx/ngrx-data.configs';

describe('CarRestService', () => {
  let service: CarRestService;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        EffectsModule.forRoot([]),
        StoreModule.forRoot({}),
        EntityDataModule.forRoot({ entityMetadata, pluralNames })
      ],
      providers: [
        CarRestService,
        {provide: EntityCollectionServiceElementsFactory, useValue: {
            create: jasmine.createSpy(''),
            dispatcher: jasmine.createSpy()
          }},
        EntityDataService,
        {provide: EntityDispatcherFactory, useValue: ''},
        {provide: EntityActionFactory, useValue: ''},
        {provide: EntitySelectors$Factory, useValue: ''},
        {provide: EntitySelectorsFactory, useValue: ''},
        {provide: EntityDefinitionService, useValue: ''},
      ]
    });
    service = TestBed.inject(CarRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
