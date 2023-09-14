import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ORGANISATION_BILLING_MOCK} from "@entities/organisation-form-billing/constants/organisation-billing.constant";
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {LANGUAGES_USER, TYPES_USER} from "@entities/user-form/constants/user-form.constant";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ORGANISATION_MOCK} from "@entities/organisation-form/constants/organisation-form.constant";
import {EButtonColor} from "@shared/components/button/enums/button.enum";

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.scss']
})
export class BillingComponent implements OnInit{

  @ViewChild('languageModal') languageModal!: ElementRef;
  @ViewChild('deleteLanguageConfirmationModal') deleteLanguageConfirmationModal!: ElementRef;
  @ViewChild('locationModal') locationModal!: ElementRef;

  public organisation = ORGANISATION_BILLING_MOCK;

  public btnColor: typeof EButtonColor = EButtonColor;
  public editingMode = false;
  public selectedRowIndex = -1;
  public languageForm: FormGroup;
  public locationForm: FormGroup;
  public languageModalRef: BsModalRef;
  public locationModalRef: BsModalRef;
  locationsData: any[] = [];
  languagesData: any[] = [];
  public showLanguageTable: boolean = false;
  public type: ISelect[] = TYPES_USER;
  public languages: ISelect[] = LANGUAGES_USER;
  public rowToDeleteIndex: number;

  public deleteLocationConfirmationModalRef: BsModalRef;
  public deleteLanguageConfirmationModalRef: BsModalRef;
  public showLocationTable: boolean = false;


  constructor( private fb: FormBuilder,
               private toastr: ToastrService,
               private modalService: BsModalService) {
  }

  public ngOnInit(): void {
    this.languageFormInit();
    this.locationFormInit();
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
      language: ['', Validators.required], // Puedes agregar más validaciones aquí si es necesario.
      type: ['', Validators.required],
      alias: ['', Validators.required],
    });
  }

  locationFormInit(){
    this.locationForm = this.fb.group({
      location: ['', Validators.required], // Puedes agregar más validaciones aquí si es necesario.
      address: ['', Validators.required],
      phone: ['', Validators.required],
      tsmRefNo: ['', Validators.required],
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

}
