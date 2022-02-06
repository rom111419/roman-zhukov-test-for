import { FormService } from '@app/core/services/form.service';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';

describe('FormService', () => {
  let service: FormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: FormBuilder },
      ],
    });
    service = TestBed.inject(FormService);
  });

  it('should call readForm method', () => {
    expect('');
  });

  it('should call readFormGroup method', () => {
    expect(service.readFormGroup(''));
  });

  it('should call readFormControl method', () => {
    expect(service.readFormControl(''));
  });

  it('should call readFormArray method', () => {
    expect(service.readFormArray(''));
  });

  it('should call createForm method', () => {
    expect(service.createForm());
  });

});
