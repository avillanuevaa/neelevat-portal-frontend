import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileComponent} from './pages/profile/profile.component';
import {RolesComponent} from './pages/roles/roles.component';
import {BillingComponent} from './pages/billing/billing.component';
import { OrganizationComponent } from './organization.component';
import {SharedModule} from "@shared/shared.module";
import {TabsModule} from "@entities/tabs/tabs.module";
import {OrganisationFormModule} from "@entities/organisation-form/organisation-form.module";
import {ReactiveFormsModule} from "@angular/forms";
import {RolesOrganizationFormModule} from "@entities/roles-organization-form/roles-organization-form.module";
import {ModalModule} from "ngx-bootstrap/modal";
import {TableElementsModule} from "@entities/table-elements/table-elements.module";
import {OrganisationFormBillingModule} from "@entities/organisation-form-billing/organisation-form-billing.module";


@NgModule({
  declarations: [

    ProfileComponent,
    RolesComponent,
    BillingComponent,
    OrganizationComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        TabsModule,
        OrganisationFormModule,
        ReactiveFormsModule,
        RolesOrganizationFormModule,
        ModalModule,
        TableElementsModule,
        OrganisationFormBillingModule
    ]
})
export class OrganizationModule {
}
