import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ModalsService } from '$modals';
import { CREW_SELECTED } from 'src/app/routes/_route/shared/services/questionaire';

export interface JobBriefSummary {
  Address: string;
  Date: string;
  Foreman: string;
  Signed: boolean;
  Forms: string[];
  View: string;
}

const ELEMENT_DATA: JobBriefSummary[] = [
  {
    Date: '1/14/2019',
    Address: '7511 Columbia St. El Paso, TX 79930',
    Foreman: 'Willie Gale',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '2/14/2019',
    Address: '9395 Circle St. Tacoma, WA 98444',
    Foreman: 'Christopher P. Harris',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '3/15/2019',
    Address: '7348 North East Ave. Knoxville, TN 37918',
    Foreman: 'Derek M. Westcott',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '3/22/2019',
    Address: '7303 Winchester Drive Northbrook, IL 60062',
    Foreman: 'Donald C. Archie',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '4/1/2019',
    Address: '9676 Fairway Road Oak Forest, IL 60452',
    Foreman: 'Douglas B. House',
    Signed: false,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '4/2/2019',
    Address: '7579 Glendale Drive Billerica, MA 01821',
    Foreman: 'Devin L. Leslie',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '4/12/2019',
    Address: '821 Devonshire Dr. Loxahatchee, FL 33470',
    Foreman: 'Sean K. Wilson',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '4/24/2019',
    Address: '421 Bridle St. Royersford, PA 19468',
    Foreman: 'Jordon G. Ibarra',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '6/21/2019',
    Address: '515 E. Sage St. La Porte, IN 46350',
    Foreman: 'Brian D. Wroblewski',
    Signed: true,
    Forms: ['hazards'],
    View: 'Job Briefing',
  },
  {
    Date: '6/24/2019',
    Address: '8187 Plumb Branch Drive Garden City, NY 11530',
    Foreman: 'Leslie A. Hazel',
    Signed: false,
    Forms: ['hazards'],
    View: 'Job Briefing',
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
  public displayedColumns: string[] = ['Address', 'Date', 'Foreman', 'Signed', 'Modify', 'View'];
  public dataSource = new MatTableDataSource(ELEMENT_DATA);
  public expandedElement: JobBriefSummary | null;
  public crewSelected: any = CREW_SELECTED;
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
    this.modals.open('AddFormModalComponent', false, 'lg', 60).afterClosed();
  }

  public signatureForm($event: Event) {
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
