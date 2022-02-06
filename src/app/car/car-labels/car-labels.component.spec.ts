import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLabelsComponent } from './car-labels.component';

describe('CarLabelsComponent', () => {
  let component: CarLabelsComponent;
  let fixture: ComponentFixture<CarLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
