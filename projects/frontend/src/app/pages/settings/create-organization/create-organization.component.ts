import {ChangeDetectionStrategy, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ESwitchColor} from "@shared/components/form-elements/switch/enums/switch.enum";
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {
  COUNTRIES, CURRENCY,
  MAIN_CONTACT_PERSON_SELECTOR,
  ORGANISATION_MOCK
} from "@entities/organisation-form/constants/organisation-form.constant";
import {IBreadcrumb} from "@shared/components/title/interfaces/breadcrumb.interface";
import {CREATE_ORGANIZATION_BREADCRUMBS, CREATE_ORGANIZATION_MOCKUP} from "./constants/create-organization.constant";
import {
  COMPANY_ACTIVITIES,
  COMPANY_ROLES
} from "@entities/roles-organization-form/constants/roles-organization-form.constant";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {
  AUTHORISATION,
  LANGUAGES_USER,
  ROLE_TEMPLATE,
  TYPES_USER
} from "@entities/user-form/constants/user-form.constant";
import {ToastrService} from "ngx-toastr";
import {USERS_MOCK} from "@shared/components/form-elements/select/constants/select.constant";
import {ICreateOrganisation} from "./interface/create-organization.interface";

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class CreateOrganizationComponent implements OnInit{

  public create_organisation: ICreateOrganisation = CREATE_ORGANIZATION_MOCKUP;

  public breadcrumbs: IBreadcrumb[] = CREATE_ORGANIZATION_BREADCRUMBS;
  public bgColor: typeof ESwitchColor = ESwitchColor;
  public countries: ISelect[] = COUNTRIES;
  public currency: ISelect[] = CURRENCY;
  public mainContactPersonSelector: ISelect[] = MAIN_CONTACT_PERSON_SELECTOR;
  public organisationForm: FormGroup;
  public companyActivities: ISelect[] = COMPANY_ACTIVITIES;
  public companyRoles: ISelect[] = COMPANY_ROLES;

  @ViewChild('languageModal') languageModal!: ElementRef;
  @ViewChild('userModal') userModal!: ElementRef;
  // @ViewChild('deleteLanguageConfirmationModal') deleteLanguageConfirmationModal!: ElementRef;
  @ViewChild('locationModal') locationModal!: ElementRef;

  public organisation = ORGANISATION_MOCK;

  public btnColor: typeof EButtonColor = EButtonColor;
  public editingMode = false;
  public selectedRowIndex = -1;
  public languageForm: FormGroup;
  public locationForm: FormGroup;
  public userForm: FormGroup;
  public languageModalRef: BsModalRef;
  public locationModalRef: BsModalRef;
  public userModalRef: BsModalRef;
  locationsData: any[] = [];
  languagesData: any[] = [];
  usersData: any[] = [];
  public showLanguageTable: boolean = false;
  public showLocationTable: boolean = false;
  public showUserTable: boolean = false;
  public type: ISelect[] = TYPES_USER;
  public languages: ISelect[] = LANGUAGES_USER;
  public selectUser: ISelect[] = USERS_MOCK;
  public authorisation: ISelect[] = AUTHORISATION;
  public roleTemplate: ISelect[] = ROLE_TEMPLATE;
  public rowToDeleteIndex: number;

  public deleteLocationConfirmationModalRef: BsModalRef;
  public deleteLanguageConfirmationModalRef: BsModalRef;
  public deleteUserConfirmationModalRef: BsModalRef;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) {
  }

  public ngOnInit(): void {
    this.languageFormInit();
    this.locationFormInit();
    this.userFormInit();
    this.initForm();
  }

  getLanguageName(value: string): string {
    const language: ISelect | undefined = LANGUAGES_USER.find((item) => item.value === value);
    return language ? language.name : '';
  }

  getTypeName(value: string): string {
    const type: ISelect | undefined = TYPES_USER.find((item) => item.value === value);
    return type ? type.name : '';
  }

  addLanguage(template: TemplateRef<any>) {
    this.editingMode = false;
    this.selectedRowIndex = -1;
    this.languageForm.reset();

    this.languageModalRef = this.modalService.show(template);
  }

  languageFormInit(){
    this.languageForm = this.fb.group({
      language: ['', Validators.required],
      type: ['', Validators.required],
      alias: ['', Validators.required],
    });
  }

  locationFormInit(){
    this.locationForm = this.fb.group({
      location: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      tsmRefNo: ['', Validators.required],
    });
  }

  userFormInit(){
    this.userForm = this.fb.group({
      selectUser: ['', Validators.required],
      authorisation: ['', Validators.required],
      roleTemplate: ['', Validators.required],
    });
  }

  onSubmitLanguage() {
    if (this.languageForm.valid) {
      this.languagesData.push(this.languageForm.value);
      this.languageForm.reset();
      this.showLanguageTable = true;

      this.toastr.success('', 'Successfully added', {
        positionClass: 'toast-fixed-custom',
        closeButton: true,
        timeOut: 5000,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  updateLanguageRow() {
    if (this.languageForm.valid && this.selectedRowIndex !== -1) {
      this.languagesData[this.selectedRowIndex] = this.languageForm.value;
      this.languageForm.reset();
      this.selectedRowIndex = -1;

      // Mostrar notificación Toastr después de la actualización exitosa
      this.toastr.success('', 'Successfully updated', {
        positionClass: 'toast-fixed-custom',
        closeButton: true,
        timeOut: 5000,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  editLanguageRow(index: number, template: TemplateRef<any>) {
    this.editingMode = true;
    this.selectedRowIndex = index;
    this.languageForm.patchValue(this.languagesData[index]);

    this.languageModalRef = this.modalService.show(template);
  }

  public openDeleteLanguageConfirmationModal(rowIndex: number, template: TemplateRef<any>) {
    this.rowToDeleteIndex = rowIndex;
    this.deleteLanguageConfirmationModalRef = this.modalService.show(template);
  }

  public openDeleteLocationConfirmationModal(rowIndex: number, template: TemplateRef<any>) {
    this.rowToDeleteIndex = rowIndex;
    this.deleteLocationConfirmationModalRef = this.modalService.show(template);
  }

  public openDeleteUserConfirmationModal(rowIndex: number, template: TemplateRef<any>) {
    this.rowToDeleteIndex = rowIndex;
    this.deleteUserConfirmationModalRef = this.modalService.show(template);
  }

  public deleteLanguageRow(rowIndex: number): void {

    this.languagesData.splice(rowIndex, 1);
    this.selectedRowIndex = -1;

  }

  onSubmitLocation() {
    if (this.locationForm.valid) {
      this.locationsData.push(this.locationForm.value);
      this.locationForm.reset();
      this.showLocationTable = true;

      this.toastr.success('', 'Successfully added', {
        positionClass: 'toast-fixed-custom',
        closeButton: true,
        timeOut: 5000,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  addLocation(template: TemplateRef<any>) {
    this.editingMode = false;
    this.selectedRowIndex = -1;
    this.locationForm.reset();

    this.locationModalRef = this.modalService.show(template);
  }

  updateLocationRow() {
    if (this.locationForm.valid && this.selectedRowIndex !== -1) {
      this.locationsData[this.selectedRowIndex] = this.locationForm.value;
      this.locationForm.reset();
      this.selectedRowIndex = -1;

      // Mostrar notificación Toastr después de la actualización exitosa
      this.toastr.success('', 'Successfully updated', {
        positionClass: 'toast-fixed-custom',
        closeButton: true,
        timeOut: 5000,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  editLocationRow(index: number, template: TemplateRef<any>) {
    this.editingMode = true;
    this.selectedRowIndex = index;
    this.locationForm.patchValue(this.locationsData[index]);

    this.locationModalRef = this.modalService.show(template);
  }

  public deleteLocationRow(rowIndex: number): void {

    this.locationsData.splice(rowIndex, 1);
    this.selectedRowIndex = -1;

  }

  getSelectUserName(value: string): string {
    const selectUser: ISelect | undefined = LANGUAGES_USER.find((item) => item.value === value);
    return selectUser ? selectUser.name : '';
  }

  getAuthorisationName(value: string): string {
    const authorisation: ISelect | undefined = TYPES_USER.find((item) => item.value === value);
    return authorisation ? authorisation.name : '';
  }

  getRoleTemplateName(value: string): string {
    const roleTemplate: ISelect | undefined = TYPES_USER.find((item) => item.value === value);
    return roleTemplate ? roleTemplate.name : '';
  }

  onSubmitUser() {
    if (this.userForm.valid) {
      this.usersData.push(this.userForm.value);
      this.userForm.reset();
      this.showUserTable = true;

      this.toastr.success('', 'Successfully added', {
        positionClass: 'toast-fixed-custom',
        closeButton: true,
        timeOut: 5000,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  addUser(template: TemplateRef<any>) {
    this.editingMode = false;
    this.selectedRowIndex = -1;
    this.userForm.reset();

    this.userModalRef = this.modalService.show(template);
  }

  updateUserRow() {
    if (this.userForm.valid && this.selectedRowIndex !== -1) {
      this.usersData[this.selectedRowIndex] = this.userForm.value;
      this.userForm.reset();
      this.selectedRowIndex = -1;

      // Mostrar notificación Toastr después de la actualización exitosa
      this.toastr.success('', 'Successfully updated', {
        positionClass: 'toast-fixed-custom',
        closeButton: true,
        timeOut: 5000,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }

  editUserRow(index: number, template: TemplateRef<any>) {
    this.editingMode = true;
    this.selectedRowIndex = index;
    this.userForm.patchValue(this.usersData[index]);

    this.userModalRef = this.modalService.show(template);
  }

  public deleteUserRow(rowIndex: number): void {

    this.usersData.splice(rowIndex, 1);
    this.selectedRowIndex = -1;

  }

  private initForm(): void {
    this.organisationForm = this.fb.group({
      organisationName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      organisationLegalName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      parentOrganisation: [''],
      organizationABC: [''],
      mainContactPerson: [''],
      aboutDescription: [''],
      billingInstructions: [''],
      contactEmail: ['', [Validators.required, Validators.email]],
      organisationAddress: ['', Validators.required],
      streetBilling: ['', Validators.required],
      streetAddress: ['', Validators.required],
      currency: [''],
      buildingNameBilling: [''],
      buildingNameAddress: [''],
      zipCodeAddress: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      zipCodeBilling: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      cityAddress: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      cityBilling: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      regionAddress: [''],
      regionBilling: [''],
      countryAddress: [''],
      countryBilling: [''],
      fullOrganisationName: [''],
      role: [''],
      roles: [''],
      avatar: [''],
    });

    if (this.create_organisation) {
      this.organisationForm.patchValue(this.create_organisation);
    }
  }

}
