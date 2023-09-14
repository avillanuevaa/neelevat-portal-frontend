import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsRoutingModule} from "./settings-routing.module";
import {UserProfileModule} from "./user-profile/user-profile.module";
import {OrganizationModule} from "./organization/organization.module";
import {CreateOrganizationModule} from "./create-organization/create-organization.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UserProfileModule,
    OrganizationModule,
    CreateOrganizationModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
