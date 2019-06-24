import { Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild } from '@angular/core';
import { CREW_SELECTED } from 'src/app/routes/_route/shared/services/questionaire';
import { ModalsService } from '$modals';
import { MatAccordion } from '@angular/material';

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
];

const ELEMENT_DATA2: JobBriefSummary[] = [
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
];

const ELEMENT_DATA3: JobBriefSummary[] = [
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
  selector: 'app-accordin',
  templateUrl: './accordin.component.html',
  styleUrls: ['./accordin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordinComponent implements OnInit, OnDestroy {
  public panelOpenState: Boolean = true;
  public dataSource = ELEMENT_DATA;
  public dataSource2 = ELEMENT_DATA2;
  public dataSource3 = ELEMENT_DATA3;
  public crewMembers = CREW_SELECTED;

  @ViewChild('accordion', { static: true }) Accordion: MatAccordion;

  constructor(private modals: ModalsService) {}

  public modifyForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('AddFormModalComponent', false, 'lg', 'Modify Form').afterClosed();
  }

  public addForm($event: Event) {
    $event.stopPropagation();
    this.modals
      .open('AddFormModalComponent', false, 'lg', false)
      .afterClosed()
      .subscribe(value => {
        console.log(`Dialog sent: ${value}`);
        if (value !== undefined) {
          this.modals.open('AddCrewModalComponent', false, 'lg', 60).afterClosed();
        }
      });
  }

  public signatureForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('SignatureModalComponent', false, 'lg', 60).afterClosed();
  }

  public crewForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('AddCrewModalComponent', false, 'lg', 60).afterClosed();
  }

  public summaryForm($event: Event) {
    $event.stopPropagation();
    this.modals.open('SummaryViewerModalComponent', false, 'xl', 60).afterClosed();
  }

  ngOnInit() {
    console.log('accordin');
    // this.Accordion.openAll();
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}
