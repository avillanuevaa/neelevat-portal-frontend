import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EButtonColor } from '@shared/components/button/enums/button.enum';
import { ISelect } from '@shared/components/title/interfaces/select.interface';
import {COUNTRIES, MAIN_CONTACT_PERSON_SELECTOR, ORGANISATION_ROLES} from './constants/organisation-form.constant';
import { IOrganisation } from './interfaces/organisation.interface';
import {USER_ROLES} from "@entities/user-form/constants/user-form.constant";

@Component({
  selector: 'app-organisation-form',
  templateUrl: './organisation-form.component.html',
  styleUrls: ['./organisation-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganisationFormComponent implements OnInit {
  @Output() public save: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() public organisation: IOrganisation;
  @Input() public description: string;
  @Input() public isManagement: boolean;

  public organisationForm: FormGroup;
  public userRoles: ISelect[] = USER_ROLES;
  public btnColor: typeof EButtonColor = EButtonColor;
  public countries: ISelect[] = COUNTRIES;
  public mainContactPersonSelector: ISelect[] = MAIN_CONTACT_PERSON_SELECTOR;
  public organisationRoles: ISelect[] = ORGANISATION_ROLES

  constructor(
    private fb: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.organisationForm = this.fb.group({
      organisationName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      organisationLegalEntity: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      mainContactPerson: [''],
      contactEmail: ['', [Validators.required, Validators.email]],
      organisationAddress: ['', Validators.required],
      street: ['', Validators.required],
      buildingName: [''],
      zipCode: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      city: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      region: [''],
      country: [''],
      fullOrganisationName: [''],
      role: [''],
      roles: [''],
      avatar: [''],
    });

    if (this.organisation) {
      this.organisationForm.patchValue(this.organisation);
    }
  }
}
