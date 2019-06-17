import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ModalsService } from '$modals';

export interface JobBriefSummary {
  address: string;
  date: string;
  foreman: string;
  signed: boolean;
  forms: string[];
}

const ELEMENT_DATA: JobBriefSummary[] = [
  { date: '1/14/2019', address: '7511 Columbia St. El Paso, TX 79930', foreman: 'Willie Gale', signed: true, forms: ['hazards'] },
  { date: '2/14/2019', address: '9395 Circle St. Tacoma, WA 98444', foreman: 'Christopher P. Harris', signed: true, forms: ['hazards'] },
  {
    date: '3/15/2019',
    address: '7348 North East Ave. Knoxville, TN 37918',
    foreman: 'Derek M. Westcott',
    signed: true,
    forms: ['hazards'],
  },
  {
    date: '3/22/2019',
    address: '7303 Winchester Drive Northbrook, IL 60062',
    foreman: 'Donald C. Archie',
    signed: true,
    forms: ['hazards'],
  },
  { date: '4/1/2019', address: '9676 Fairway Road Oak Forest, IL 60452', foreman: 'Douglas B. House', signed: false, forms: ['hazards'] },
  { date: '4/2/2019', address: '7579 Glendale Drive Billerica, MA 01821', foreman: 'Devin L. Leslie', signed: true, forms: ['hazards'] },
  { date: '4/12/2019', address: '821 Devonshire Dr. Loxahatchee, FL 33470', foreman: 'Sean K. Wilson', signed: true, forms: ['hazards'] },
  { date: '4/24/2019', address: '421 Bridle St. Royersford, PA 19468', foreman: 'Jordon G. Ibarra', signed: true, forms: ['hazards'] },
  { date: '6/21/2019', address: '515 E. Sage St. La Porte, IN 46350', foreman: 'Brian D. Wroblewski', signed: true, forms: ['hazards'] },
  {
    date: '6/24/2019',
    address: '8187 Plumb Branch Drive Garden City, NY 11530',
    foreman: 'Leslie A. Hazel',
    signed: false,
    forms: ['hazards'],
  },
];

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('crewExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SummaryTableComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['address', 'date', 'foreman', 'signed', 'modify', 'crew'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public expandedElement: JobBriefSummary | null;
  constructor(private modals: ModalsService) {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    // Open log out modal window
    // this.modals.open('AddFormModalComponent', false, 'lg', 60).afterClosed();
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public modifyForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('SignatureModalComponent', false, 'lg', 60).afterClosed();
  }

  public crewForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('AddCrewModalComponent', false, 'lg', 60).afterClosed();
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}
