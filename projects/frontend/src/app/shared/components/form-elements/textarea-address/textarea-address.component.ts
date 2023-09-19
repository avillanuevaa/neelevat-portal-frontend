import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import {FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators} from "@angular/forms";
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";
import {EButtonColor} from "@shared/components/button/enums/button.enum";

@Component({
  selector: 'app-textarea-address',
  templateUrl: './textarea-address.component.html',
  styleUrls: ['./textarea-address.component.scss', '../form-elements.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextareaAddressComponent,
      multi: true
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class TextareaAddressComponent implements OnInit{

  @Input() public label: string;
  @Input() public disabled: boolean;
  @Input() public useBlackFont: boolean;
  @Input() public address: string = '';

  @Output() newValueEvent = new EventEmitter<string>();

  showPopover: boolean = false;
  public addressForm: FormGroup;
  public btnColor: typeof EButtonColor = EButtonColor;

  public modalRef: BsModalRef;

  addressBook: any[] = [
    { name: 'John Doe', address: '123 Main St' },
    { name: 'Jane Smith', address: '456 Elm St' },
    { name: 'Alice Johnson', address: '789 Oak St' },
    { name: 'Jane Smith', address: '456 Elm St' },
    { name: 'John Doe', address: '123 Main St' },
    { name: 'Alice Johnson', address: '789 Oak St' },
    // Add more persons as needed
  ];

  constructor(private fb: FormBuilder,
    private modalService: BsModalService
  ) { }

  public ngOnInit(): void {
    this.addressFormInit();
  }

  inputNewValue(event) {
    this.newValueEvent.emit(event.target.value);
  }

  // togglePopover(): void {
  //   this.showPopover = !this.showPopover;
  // }

  togglePopover(template: TemplateRef<any>) {

    const config = {
      class: '', // Clase para centrar el modal
      initialState: {},
      animated: true,
      keyboard: true,
      backdrop: true,
      ignoreBackdropClick: true,
      // Ajusta el ancho aquí:
      config: { width: '300px' } // Cambia '500px' al ancho que desees
    };


    this.modalRef = this.modalService.show(template,config);
  }

  selectAddress(person: any): void {
    this.address = person.address;
    this.showPopover = false;
  }

  closePopover() {
    this.showPopover = false;
  }

  addressFormInit(){
    this.addressForm = this.fb.group({
      receiver: ['', Validators.required], // Puedes agregar más validaciones aquí si es necesario.
      unloadingAddress: ['', Validators.required],
    });
  }

}
