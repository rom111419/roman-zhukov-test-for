import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root',
})
export class FormService {
  private form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  public readForm(): FormGroup {
    return this.form;
  }

  public readFormGroup(path: string | (string | number)[]): FormGroup {
    return this.form.get(path) as FormGroup;
  }

  public readFormControl(path: string | (string | number)[]): FormControl {
    return this.form.get(path) as FormControl;
  }

  public readFormArray(path: string | (string | number)[]): FormArray {
    return this.form.get(path) as FormArray;
  }


}
