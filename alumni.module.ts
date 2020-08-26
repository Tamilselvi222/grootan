import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AlumniRoutingModule } from "./alumni-routing.module";
import { SearchAlumniComponent } from "./search-alumni/search-alumni.component";
import { ProfessionalDevServicesComponent } from "./professional-dev-services/professional-dev-services.component";
import { FundraisersComponent } from "./fundraisers/fundraisers.component";
import { RequestsComponent } from "./requests/requests.component";
import { AlumniComponent } from "./alumni.component";

import { ComponentImportModule } from "../alumni/shared/component.import.module";
import { MigrateComponent } from "./migrate/migrate.component";
import { MentoringComponent } from "./mentoring/mentoring.component";
import { JobOpeningsComponent } from "./job-openings/job-openings.component";
import { EmailReportsComponent } from "./email-reports/email-reports.component";
import { AddFundraisersComponent } from "./fundraisers/add-fundraisers/add-fundraisers.component";
import { AddClaimSubjectComponent } from './requests/add-claim-subject/add-claim-subject.component';
import { SearchByName } from './search-by-name-id-pipe';
import { EmailPopupComponent } from './email-reports/email-popup/email-popup.component';
import { SearchByNameUsn } from './search-by-name-USN-pipe';
import { ServicesComponent } from './services/services.component';
import { ProfessionalDevAddServicePopupComponent } from './professional-dev-services/professional-dev-add-service-popup/professional-dev-add-service-popup.component';
import { RequestToMeetAlumniComponent } from './search-alumni/request-to-meet-alumni/request-to-meet-alumni.component';
import { JobDescriptionComponent } from './job-openings/job-description/job-description.component';
import { MyRequestsComponent } from './my-requests/my-requests.component';
import { NostalgiaComponent } from './nostalgia/nostalgia.component';
import { ReunionsComponent } from './reunions/reunions.component';
import { PlacementInternshipComponent } from './placement-internship/placement-internship.component';
import { RequestAlumniComponent } from './request-alumni/request-alumni.component';
import { AddRequestComponent } from './my-requests/add-request/add-request.component';
import { AcceptOrRejectReunionRequestComponent } from './reunions/accept-or-reject-reunion-request/accept-or-reject-reunion-request.component';
import { JobDescriptionDetailsComponent } from './placement-internship/job-description-details/job-description-details.component';

import { NostalgiaAddEventComponent } from './nostalgia/nostalgia-add-event/nostalgia-add-event.component';

@NgModule({
  declarations: [
    SearchAlumniComponent,
    ProfessionalDevServicesComponent,
    FundraisersComponent,
    RequestsComponent,
    AlumniComponent,
    ProfessionalDevAddServicePopupComponent,
    MigrateComponent,
    MentoringComponent,
    JobOpeningsComponent,
    EmailReportsComponent,
    AddFundraisersComponent,
    AddClaimSubjectComponent,
    SearchByName,
    EmailPopupComponent,
    SearchByNameUsn,
    ServicesComponent,
    RequestToMeetAlumniComponent,
    JobDescriptionComponent,
    MyRequestsComponent,
    NostalgiaComponent,
    ReunionsComponent,
    PlacementInternshipComponent,
    RequestAlumniComponent,
    AddRequestComponent,
    NostalgiaAddEventComponent,
    AcceptOrRejectReunionRequestComponent,
    JobDescriptionDetailsComponent
  ],
  imports: [CommonModule, AlumniRoutingModule, ComponentImportModule],
})
export class AlumniModule {}
