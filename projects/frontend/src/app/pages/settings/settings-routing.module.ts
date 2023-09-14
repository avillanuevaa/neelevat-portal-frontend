import {RouterModule, Routes} from "@angular/router";
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {NgModule} from "@angular/core";
import {ProfileComponent} from "./organization/pages/profile/profile.component";
import {CreateOrganizationComponent} from "./create-organization/create-organization.component";
import {OrganizationComponent} from "./organization/organization.component";

export const routes: Routes = [
  {
    path: 'user-profile',
    component: UserProfileComponent
  },
  {
    path: 'organization',
    component: OrganizationComponent
  },
  {
    path: 'create-organization',
    component: CreateOrganizationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule { }
