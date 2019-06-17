import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {SignatureComponent} from '../../../components/signature/signature.component';

@Component({
  selector: 'app-signature-modal',
  templateUrl: './signature-modal.component.html',
})
export class SignatureModalComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(MAT_DIALOG_DATA) public dataAlt: any,
  ) {}
  
  /**
   * Submit the form
   */
  public submit() {
    this.dialogRef.close(this.dataAlt || this.data);
  }
}
