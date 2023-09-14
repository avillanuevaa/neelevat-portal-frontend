import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output, TemplateRef,
  ViewChild
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EButtonColor} from '@shared/components/button/enums/button.enum';
import {ISelect} from '@shared/components/title/interfaces/select.interface';
import {
  DEFAULT_AVATAR,
  LANGUAGES_USER,
  SALUTATIONS, TIME_ZONES, TYPES_USER,
  USER_ROLES,
  USER_ROLES_CHECKBOXES
} from './constants/user-form.constant';
import {ICheckbox} from './interfaces/checkbox.interface';
import {IUser} from './interfaces/user.interface';
import {ESwitchColor} from "@shared/components/form-elements/switch/enums/switch.enum";
import {ToastrService} from "ngx-toastr";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserFormComponent implements OnInit {
  @Output() public save: EventEmitter<void> = new EventEmitter<void>();
  @Output() public cancel: EventEmitter<void> = new EventEmitter<void>();
  @Input() public user: IUser;
  @Input() public description: string;
  @Input() public isManagement: boolean;

  public languageForm: FormGroup;
  public userForm: FormGroup;
  public btnColor: typeof EButtonColor = EButtonColor;
  public userRoles: ISelect[] = USER_ROLES;
  public salutations: ISelect[] = SALUTATIONS;
  public timeZones: ISelect[] = TIME_ZONES;

  public languages: ISelect[] = LANGUAGES_USER;

  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('deleteConfirmationModal') deleteConfirmationModal!: ElementRef;

  languagesData: any[] = [];
  public type: ISelect[] = TYPES_USER;
  public showTable: boolean = false;
  public editingMode = false;
  public deleteConfirmationModalRef: BsModalRef;
  public selectedRowIndex = -1;
  public rowToDeleteIndex: number;
  public modalRef: BsModalRef;
  public userRolesCheckboxes: ICheckbox[] = USER_ROLES_CHECKBOXES;
  public bgColor: typeof ESwitchColor = ESwitchColor;
  public defaultAvatar: string = DEFAULT_AVATAR;
  public isEditing: boolean = false;



  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modalService: BsModalService
  ) { }

  public ngOnInit(): void {
    this.buildForm();
    this.languageFormMethod();
  }

  onEditActive() {
    this.isEditing = true;
  }
  onEditInactive() {
    this.isEditing = false;
  }

  getLanguageName(value: string): string {
    const language: ISelect | undefined = LANGUAGES_USER.find((item) => item.value === value);
    return language ? language.name : '';
  }

  getTypeName(value: string): string {
    const type: ISelect | undefined = TYPES_USER.find((item) => item.value === value);
    return type ? type.name : '';
  }

  onSubmit() {
    if (this.languageForm.valid) {
      this.languagesData.push(this.languageForm.value);
      this.languageForm.reset();
      this.showTable = true;

      this.toastr.success('', 'Successfully added', {
        positionClass: 'toast-fixed-custom',
        closeButton: true,
        timeOut: 500000,
        progressBar: true,
        extendedTimeOut: 200000,
      });
    }
  }


  editRow(index: number, template: TemplateRef<any>) {
    this.editingMode = true;
    this.selectedRowIndex = index;
    this.languageForm.patchValue(this.languagesData[index]);

    this.modalRef = this.modalService.show(template);
  }

  addLanguage(template: TemplateRef<any>) {
    this.editingMode = false;
    this.selectedRowIndex = -1;
    this.languageForm.reset();

    this.modalRef = this.modalService.show(template);
  }


  updateRow() {
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


  public openDeleteConfirmationModal(rowIndex: number, template: TemplateRef<any>) {
    this.rowToDeleteIndex = rowIndex;
    this.deleteConfirmationModalRef = this.modalService.show(template);
  }

  public deleteRow(rowIndex: number): void {

      this.languagesData.splice(rowIndex, 1);
      this.selectedRowIndex = -1;

  }


  languageFormMethod(){
    this.languageForm = this.fb.group({
      language: ['', Validators.required], // Puedes agregar más validaciones aquí si es necesario.
      type: ['', Validators.required],
      alias: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    });
  }

   buildForm() {
    this.userForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      salutation: ['', Validators.required],
      jobTitle: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      mobilePhone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      workLocation: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
      linkedin: ['',],
      officePhone: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      emailAddress: ['',],
      createdOn: ['',],
      primaryUserID: ['',],
      secondaryUserID: ['',],
      aboutDescription: ['',],
      timeZone: ['',Validators.required],
      // roles: ['', Validators.required],
      birthday: ['', Validators.required],
      showBirthday: ['', Validators.required],
      fullName: ['', Validators.required],
      avatar: ['',],
      role: ['', Validators.required],
      // rolesCheckbox: ['', Validators.required],
    });

     if (this.user) {
       this.userForm.patchValue(this.user);
     }
  }

  private initForm(): void {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      salutation: [''],
      jobTitle: [''],
      mobilePhone: [''],
      officePhone: [''],
      email: [''],
      roles: [''],
      birthday: [''],
      showBirthday: [''],
      fullName: [''],
      avatar: [''],
      role: [''],
      rolesCheckbox: [''],
    });

    if (this.user) {
      this.userForm.patchValue(this.user);
    }
  }
}
