import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { UserFormModule } from '@entities/user-form/user-form.module';
import { OrganisationFormModule } from '@entities/organisation-form/organisation-form.module';
import { FilesTableModule } from '@entities/files-table/files-table.module';
import { TabsModule } from '@entities/tabs/tabs.module';
import { DropzoneModule } from '../../../_customers/partials';
import { UserProfileComponent } from './user-profile.component';
import { UserProfileRoutingModule } from './user-profile-routing.module';
import {MyOrganizationsModule} from "@entities/my-organizations/my-organizations.module";

@NgModule({
  declarations: [
    UserProfileComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    OrganisationFormModule,
    UserFormModule,
    TabsModule,
    SharedModule,
    MyOrganizationsModule,
  ],
})
export class UserProfileModule { }
