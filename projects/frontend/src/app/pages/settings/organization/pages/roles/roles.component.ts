import { Component } from '@angular/core';
import {ORGANISATION_ROLES_MOCK} from "@entities/roles-organization-form/constants/roles-organization-form.constant";

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent {
  public roles = ORGANISATION_ROLES_MOCK;

}
