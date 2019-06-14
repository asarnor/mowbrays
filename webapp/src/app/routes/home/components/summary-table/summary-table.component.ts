import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface JobBriefSummary {
  address: string;
  date: string;
  foreman: string;
  signed: boolean;
  crew: string[];
}

const ELEMENT_DATA: JobBriefSummary[] = [
  { date: '1/14/2019', address: '7511 Columbia St. El Paso, TX 79930', foreman: 'Willie Gale', signed: true, crew: ['billy joe'] },
  { date: '2/14/2019', address: '9395 Circle St. Tacoma, WA 98444', foreman: 'Christopher P. Harris', signed: true, crew: ['billy joe'] },
  {
    date: '3/15/2019',
    address: '7348 North East Ave. Knoxville, TN 37918',
    foreman: 'Derek M. Westcott',
    signed: true,
    crew: ['billy joe'],
  },
  {
    date: '3/22/2019',
    address: '7303 Winchester Drive Northbrook, IL 60062',
    foreman: 'Donald C. Archie',
    signed: true,
    crew: ['billy joe'],
  },
  { date: '4/1/2019', address: '9676 Fairway Road Oak Forest, IL 60452', foreman: 'Douglas B. House', signed: false, crew: ['billy joe'] },
  { date: '4/2/2019', address: '7579 Glendale Drive Billerica, MA 01821', foreman: 'Devin L. Leslie', signed: true, crew: ['billy joe'] },
  { date: '4/12/2019', address: '821 Devonshire Dr. Loxahatchee, FL 33470', foreman: 'Sean K. Wilson', signed: true, crew: ['billy joe'] },
  { date: '4/24/2019', address: '421 Bridle St. Royersford, PA 19468', foreman: 'Jordon G. Ibarra', signed: true, crew: ['billy joe'] },
  { date: '6/21/2019', address: '515 E. Sage St. La Porte, IN 46350', foreman: 'Brian D. Wroblewski', signed: true, crew: ['billy joe'] },
  {
    date: '6/24/2019',
    address: '8187 Plumb Branch Drive Garden City, NY 11530',
    foreman: 'Leslie A. Hazel',
    signed: false,
    crew: ['billy joe'],
  },
];

@Component({
  selector: 'app-summary-table',
  templateUrl: './summary-table.component.html',
  styleUrls: ['./summary-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('crewExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SummaryTableComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['address', 'date', 'foreman', 'signed'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public expandedElement: JobBriefSummary | null;
  constructor() {}

  ngOnInit() {}

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}
