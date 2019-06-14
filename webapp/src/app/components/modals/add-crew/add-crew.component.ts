import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-crew-modal',
  templateUrl: './add-crew-modal.component.html',
})
export class AddCrewModalComponent {
  constructor(
    public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    @Inject(MAT_DIALOG_DATA) public dataAlt: any,
  ) {}
  myControl = new FormControl();
  public crewAvailable: object[] = [
    { name: 'jimmy', fulltime: true, id: 1 },
    { name: 'timmy', fulltime: true, id: 2 },
    { name: 'stan', fulltime: true, id: 3 },
  ];
  public crewSelected: object[] = [{ name: 'bob', fulltime: true, id: 4 }];

  /**
   * Submit the form
   */
  public submit() {
    this.dialogRef.close(this.dataAlt || this.data);
  }

  public deleteCrew(crewMember: any) {
    this.crewSelected.filter((member: any, i: number) => {        
      
      if (member.id === crewMember.id) {
        this.crewSelected.splice(i, 1);
      }
    });
    this.updateAvailable(crewMember);
    
  }

  public addCrewMember(crewMember: any) {
    const newSet = new Set(this.crewSelected);
    if (!newSet.has(crewMember)) {
      this.crewSelected.push(crewMember);
    }
  }

  public updateAvailable(crewMember: any) {
    const newSet = new Set(this.crewAvailable);
    if (!newSet.has(crewMember)) {
      this.crewAvailable.push(crewMember);
    }
  }
}
