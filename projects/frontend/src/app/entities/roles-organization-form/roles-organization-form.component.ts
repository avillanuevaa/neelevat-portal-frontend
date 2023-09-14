import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {ESwitchColor} from "@shared/components/form-elements/switch/enums/switch.enum";
import {
  COMPANY_ACTIVITIES, COMPANY_ROLES, ORGANIZATION_SELECT, PARENT_ORGANIZATION_SELECT, SUBSIDIARY_SELECT
} from "@entities/roles-organization-form/constants/roles-organization-form.constant";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EFontSize} from "@shared/components/button/enums/fontSize.enum";
import {IRolesOrganisation} from "@entities/roles-organization-form/interfaces/roles-organization-form.interface";

@Component({
  selector: 'app-roles-organization-form',
  templateUrl: './roles-organization-form.component.html',
  styleUrls: ['./roles-organization-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RolesOrganizationFormComponent {

  @Output() public save: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() public roles: IRolesOrganisation;

  @Input() public isSettings: boolean;


  public organisationForm: FormGroup;

  public bgColor: typeof ESwitchColor = ESwitchColor;

  public companyActivities: ISelect[] = COMPANY_ACTIVITIES;

  public companyRoles: ISelect[] = COMPANY_ROLES;

  public organizationIs: ISelect[] = ORGANIZATION_SELECT;

  public parentOrganization: ISelect[] = PARENT_ORGANIZATION_SELECT;
  public subsidiary: ISelect[] = SUBSIDIARY_SELECT;

  public btnColor: typeof EButtonColor = EButtonColor;

  public btnFontSize: EFontSize = EFontSize.organizationSave;
  constructor(private fb:FormBuilder) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.organisationForm = this.fb.group({
      roles: [''],
      userRights: [''],
      organization: [''],
      parentOrganization: [''],
      organizationABC: [''],
      subsidiary: ['']
    });
    if (this.roles) {
      this.organisationForm.patchValue(this.roles);
    }
  }

}
