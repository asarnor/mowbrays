import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-form-modal',
  templateUrl: './add-form-modal.component.html',
})
export class AddFormModalComponent implements OnInit {
  public formMain: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(MAT_DIALOG_DATA) public dataAlt: any,
    private fb: FormBuilder,
  ) {}
  myControl = new FormControl();
  ngOnInit() {
    this.formMain = this.fb.group({
      notes: ['', []],
    });
  }
  public formTypes: object[] = [{ name: 'Job Briefing', id: 1 }, { name: 'Tree Removal', id: 2 }, { name: 'other', id: 3 }];

  /**
   * Submit the form
   */
  public submit() {
    this.dialogRef.close(this.dataAlt || this.data);
  }

  public setFormType(type: any) {
    console.log(type);
  }

  public userSubmit() {
    console.log('submit');
  }

  // form date, template, location (geo)
}
