import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {
  COUNTRIES,
  MAIN_CONTACT_PERSON_SELECTOR
} from "@entities/organisation-form/constants/organisation-form.constant";
import {IOrganisation} from "@entities/organisation-form/interfaces/organisation.interface";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {IOrganisationBilling} from "@entities/organisation-form-billing/interface/organisation-billing.interface";

@Component({
  selector: 'app-organisation-form-billing',
  templateUrl: './organisation-form-billing.component.html',
  styleUrls: ['./organisation-form-billing.component.scss']
})
export class OrganisationFormBillingComponent implements OnInit{

  @Output() public save: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() public organisation: IOrganisationBilling;

  public organisationForm: FormGroup;
  public btnColor: typeof EButtonColor = EButtonColor;
  public mainContactPersonSelector: ISelect[] = MAIN_CONTACT_PERSON_SELECTOR;
  public countries: ISelect[] = COUNTRIES;

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
