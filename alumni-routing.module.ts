import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SearchAlumniComponent } from "./search-alumni/search-alumni.component";
import { ProfessionalDevServicesComponent } from "./professional-dev-services/professional-dev-services.component";
import { FundraisersComponent } from "./fundraisers/fundraisers.component";
import { RequestsComponent } from "./requests/requests.component";
import { AlumniComponent } from "./alumni.component";
import { MigrateComponent } from "./migrate/migrate.component";
import { EmailReportsComponent } from "./email-reports/email-reports.component";
import { JobOpeningsComponent } from "./job-openings/job-openings.component";
import { MentoringComponent } from "./mentoring/mentoring.component";
import { ServicesComponent } from "./services/services.component";
import { MyRequestsComponent } from "./my-requests/my-requests.component";
import { NostalgiaComponent } from "./nostalgia/nostalgia.component";
import { ReunionsComponent } from "./reunions/reunions.component";
import { PlacementInternshipComponent } from './placement-internship/placement-internship.component';

const routes: Routes = [
  {
    path: "",
    component: AlumniComponent,
  },

  // children:[
  {
    path: "search-alumni",
    component: SearchAlumniComponent,
  },
  {
    path: "professional-dev-services",
    component: ProfessionalDevServicesComponent,
  },
  {
    path: "fundraiasers",
    component: FundraisersComponent,
  },
  {
    path: "requests",
    component: RequestsComponent,
  },
  {
    path: "migrate",
    component: MigrateComponent,
  },
  {
    path: "email-reports",
    component: EmailReportsComponent,
  },
  {
    path: "job-openings",
    component: JobOpeningsComponent,
  },
  {
    path: "mentoring",
    component: MentoringComponent,
  },
  {
    path: "services",
    component: ServicesComponent,
  },
  {
    path: "my-requests",
    component: MyRequestsComponent,
  },
  {
    path: "nostalgia",
    component: NostalgiaComponent,
  },
  {
    path: "reunions",
    component: ReunionsComponent,
  },
  {
    path:'placement-internship',
    component:PlacementInternshipComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumniRoutingModule {}
