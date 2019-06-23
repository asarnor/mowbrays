import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-summary-viewer-modal',
  templateUrl: './summary-viewer-modal.component.html',
  styleUrls: ['./summary-viewer-modal.component.scss'],
})
export class SummaryViewerModalComponent {
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
