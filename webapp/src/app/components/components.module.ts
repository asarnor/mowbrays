import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorModule } from '../vendor.module';
import { SharedModule } from '$shared';

// Global modals
import { ConfirmationModalComponent } from './modals/confirmation/confirmation-modal.component';
import { LogoutModalComponent } from './modals/logout/logout-modal.component';
import { FeedbackComponent } from './modals/feedback/feedback.component';
import { AddCrewModalComponent } from './modals/add-crew/add-crew.component';
import { AddFormModalComponent } from './modals/add-form/add-form.component';
import { SignatureModalComponent } from './modals/signature-modal/signature-modal.component';
import { SummaryViewerModalComponent } from './modals/summary-viewer/summary-viewer-modal.component';

// Layout
import { FooterComponent } from './masterpage/footer/footer.component';
import { HeaderComponent } from './masterpage/header/header.component';
import { LayoutMainComponent } from './masterpage/main/layout-main.component';
import { LayoutSingleComponent } from './masterpage/single/layout-single.component';
import { NavComponent } from './masterpage/nav/nav.component';
import { NavSearchComponent } from './masterpage/nav/search/nav-search.component';

// Components
import { DomainStateComponent } from './domain-state/domain-state.component';
import { ErrorComponent } from './error/error.component';
import { CounterComponent } from './counter/counter.component';
import { SignatureComponent } from './signature/signature.component';

// Form Tools
import { UILibModule } from './ui-lib/ui-lib.module';

// Modals include
const APP_MODALS = [
  ConfirmationModalComponent,
  LogoutModalComponent,
  FeedbackComponent,
  AddCrewModalComponent,
  AddFormModalComponent,
  SignatureModalComponent,
  SummaryViewerModalComponent,
];

// Components to include
export const APP_COMPONENTS = [
  ...APP_MODALS,
  FooterComponent,
  HeaderComponent,
  LayoutMainComponent,
  LayoutSingleComponent,
  NavComponent,
  NavSearchComponent,
  ErrorComponent,
  CounterComponent,
  SignatureComponent,
  DomainStateComponent,
];

@NgModule({
  imports: [
    // Angular
    CommonModule,
    // Shared
    SharedModule,
    // Vendors
    VendorModule,
    UILibModule,
  ],
  providers: [],
  declarations: [APP_COMPONENTS],
  exports: [APP_COMPONENTS, UILibModule],
  entryComponents: [APP_MODALS],
})
export class ComponentsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentsModule,
      providers: [],
    };
  }
}
