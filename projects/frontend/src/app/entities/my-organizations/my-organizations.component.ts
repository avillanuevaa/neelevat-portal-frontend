import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter, Input,
  OnInit,
  Output,
  TemplateRef,
  ViewChild
} from '@angular/core';
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {
  LANGUAGES_USER, NAME_ORGANIZATIONS,
  TYPES_USER,
  USER_RIGHTS,
  USER_ROLES
} from "@entities/user-form/constants/user-form.constant";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {ToastrService} from "ngx-toastr";
import { TenantResponse } from '@interfaces/tenant-response';

@Component({
  selector: 'app-my-organizations',
  templateUrl: './my-organizations.component.html',
  styleUrls: ['./my-organizations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyOrganizationsComponent implements OnInit{

  @Input() public tenant: TenantResponse;

  @Output() public save: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();

  public userRights: ISelect[] = USER_RIGHTS;

  public organization: ISelect[] = NAME_ORGANIZATIONS;


  @ViewChild('organizationModal') organizationModal!: ElementRef;

  public organizationModalRef: BsModalRef;

  public userRoles: ISelect[] = USER_ROLES;
  public btnColor: typeof EButtonColor = EButtonColor;
  public organizationForm: FormGroup;
  public editingMode = false;
  public showTable: boolean = false;
  public organizationsData: any[] = [];
  public selectedRowIndex = -1;
  public deleteConfirmationModalRef: BsModalRef;
  public rowToDeleteIndex: number;

  constructor(private fb:FormBuilder,
              private toastr: ToastrService,
              private modalService: BsModalService) {
  }

  public ngOnInit(): void {
    this.initForm();
  }

  getuserRightsName(value: string): string {
    const userRights: ISelect | undefined = USER_RIGHTS.find((item) => item.value === value);
    return userRights ? userRights.name : '';
  }

  getOrganizationName(value: string): string {
    const organization: ISelect | undefined = NAME_ORGANIZATIONS.find((item) => item.value === value);
    return organization ? organization.name : '';
  }

  getRoleName(value: string): string {
    const role: ISelect | undefined = this.userRoles.find((item) => item.value === value);
    return role ? role.name : '';
  }

  onSubmit() {
    if (this.organizationForm.valid) {
      const formValue = this.organizationForm.value;
      if (formValue.roles) {
        formValue.roles = formValue.roles.filter((isChecked: boolean, index: number) =>
          isChecked ? this.userRoles[index].value : null
        );
      } else {
        formValue.roles = [];
      }
      this.organizationsData.push(formValue);
      this.organizationForm.reset();
      this.showTable = true;

      this.toastr.success('', 'Successfully added', {
        positionClass: 'toast-fixed-custom',
        closeButton: true,
        timeOut: 5000,
        progressBar: true,
        extendedTimeOut: 2000,
      });
    }
  }


  editRow(index: number, template: TemplateRef<any>) {
    this.editingMode = true;
    this.selectedRowIndex = index;
    this.organizationForm.patchValue(this.organizationsData[index]);

    this.organizationModalRef = this.modalService.show(template);
  }

  addOrganization(template: TemplateRef<any>) {
    this.editingMode = false;
    this.selectedRowIndex = -1;
    this.organizationForm.reset();

    this.organizationModalRef = this.modalService.show(template);
  }


  updateRow() {
    if (this.organizationForm.valid && this.selectedRowIndex !== -1) {
      this.organizationsData[this.selectedRowIndex] = this.organizationForm.value;
      this.organizationForm.reset();
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

  public deleteRow(rowIndex: number): void {

    this.organizationsData.splice(rowIndex, 1);
    this.selectedRowIndex = -1;

  }

  public openDeleteConfirmationModal(rowIndex: number, template: TemplateRef<any>) {
    this.rowToDeleteIndex = rowIndex;
    this.deleteConfirmationModalRef = this.modalService.show(template);
  }

  private initForm(): void {
    this.organizationForm = this.fb.group({
      roles: [''],
      userRights: ['',Validators.required],
      organization: ['',Validators.required],
    });
  }

}
