import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
// import { untilDestroyed } from 'ngx-take-until-destroy';

// Global state
import { DomainService } from '$domain';
import { UiStateService } from '$ui';
import { SettingsService } from 'src/app/shared/state/settings';

// Route State
import { RouteUiStateService } from '../../shared/state/ui';
// import { RouteDomainStateService } from '../../shared/state/domain';
import { HAZARDS, WORK_PROCEDURES, EMERGENCY_PLAN, SIGNATURES } from '../../shared/services/questionaire';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RootComponent implements OnInit, OnDestroy {
  public users$ = this.domainState.users.users$;
  public user: Models.User;
  public hazards: any;
  public workProcedures: any;
  public emergencyProcedures: any;
  public signatures: any;
  public formMain: FormGroup;
  public spanish: boolean;

  // private uiState: UiStateService,
  constructor(
    private domainState: DomainService, // Global domain state
    public uiState: UiStateService, // Global UI state
    // private routeDomainState: RouteDomainStateService, // Route only domain state
    private routeUIState: RouteUiStateService, // Route only UI state
    private settings: SettingsService, // App settings/global properties
    private fb: FormBuilder,
  ) {
    this.hazards = HAZARDS;
    this.workProcedures = WORK_PROCEDURES;
    this.emergencyProcedures = EMERGENCY_PLAN;
    this.signatures = SIGNATURES;
    this.formMain = this.fb.group({
      hazards: new FormArray([], this.minSelectedCheckboxes(1)),
      workProcedures: new FormArray([], this.minSelectedCheckboxes(1)),
      emergencyProcedures: new FormArray([]),
    });

    this.addCheckboxes(this.hazards, 'hazards');
    this.addCheckboxes(this.workProcedures, 'workProcedures');
    this.addCheckboxes(this.emergencyProcedures, 'emergencyProcedures');
  }

  ngOnInit() {
    // Load users
    this.domainState.users.get().subscribe();
    // Get set prop from ROUTE UI store
    this.routeUIState.someProp$.subscribe(val => console.log('Someprop Val', val));
    this.routeUIState.updateRouteUIState('Test');

    // Get/set settings both sync and async
    this.settings.userName$.subscribe(userInfo => console.warn(userInfo));
    this.settings.token$.subscribe(token => console.warn(token));
    this.settings.token = 'Test';
    this.settings.userName = 'John';

    // Domain state from simple store
    this.domainState.simple.todos$.subscribe(val => console.log('Todos', val));
    this.domainState.simple.todos();
    this.spanish = false;
  }

  /**
   * Refresh users
   */
  public usersRefresh() {
    this.domainState.users.get(true).subscribe();
  }

  /**
   * Delete user
   * @param user
   */
  public userDelete(user: Models.User) {
    this.domainState.users.delete(user).subscribe();
  }

  private addCheckboxes(categoryData: any, categoryName: string) {
    categoryData.data.map((o: any, i: number) => {
      console.log(o, i);
      const control = new FormControl(); // if first item set to true, else false
      (this.formMain.controls[categoryName] as FormArray).push(control);
    });
  }

  public minSelectedCheckboxes(min = 1) {
    const validator: any = (formArray: FormArray) => {
      const totalSelected = formArray.controls
        // get a list of checkbox values (boolean)
        .map(control => control.value)
        // total up the number of checked checkboxes
        .reduce((prev, next) => (next ? prev + next : prev), 0);

      // if the total is not greater than the minimum, return the error message
      return totalSelected >= min ? null : { required: true };
    };

    return validator;
  }

  public userSubmit() {
    console.log('click');
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}
