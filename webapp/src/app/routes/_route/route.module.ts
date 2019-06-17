import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from '$site'; // Site modules

// Routing
import { routing } from './routes';

// Components
import { RootComponent } from './routes/root/root.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { QuestionComponent } from './components/question/question.component';
import { QuestionSectionComponent } from './components/question-section/question-section.component';

// Route State Management
import { RouteUiStateQuery, RouteUiStateService, RouteUiStateStore } from './shared/state/ui';
import { RouteDomainStateService } from './shared/state/domain';

// Datepicker Provider
import { MatDatepickerModule } from '@angular/material/datepicker';

export const storeName = 'route-UIState'; // Change this property to be unique & route specific, IE 'route-UIState' => 'dashboard-UIState'

@NgModule({
  imports: [CommonModule, SiteModule, routing],
  declarations: [RootComponent, UserFormComponent, QuestionSectionComponent, QuestionComponent],
  providers: [RouteUiStateService, RouteUiStateStore, RouteUiStateQuery, RouteDomainStateService, MatDatepickerModule],
  exports: [],
  entryComponents: [],
})
export class RouteModule {}
