import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { TableElementsModule } from '@entities/table-elements/table-elements.module';
import { OrganisationFormModule } from '@entities/organisation-form/organisation-form.module';
import { OrganisationsComponent } from './organisations/organisations.component';
import { OrganisationsAddComponent } from './organisations-add/organisations-add.component';
import { OrganisationsEditComponent } from './organisations-edit/organisations-edit.component';
import { OrganisationsRoutingModule } from './organisations-routing.module';

@NgModule({
  declarations: [
    OrganisationsComponent,
    OrganisationsAddComponent,
    OrganisationsEditComponent,
  ],
  imports: [
    CommonModule,
    OrganisationsRoutingModule,
    OrganisationFormModule,
    SharedModule,
    TableElementsModule,
  ],
})
export class OrganisationsModule { }
