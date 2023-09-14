import {Component, EventEmitter} from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {EButtonColor} from "@shared/components/button/enums/button.enum";

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  message: string;
  public btnColor: typeof EButtonColor = EButtonColor;
  onClose: EventEmitter<string> = new EventEmitter();

  constructor(public bsModalRef: BsModalRef) {}

  confirm() {
    this.onClose.emit('confirm');
    this.bsModalRef.hide();
  }

  cancel() {
    this.onClose.emit('cancel');
    this.bsModalRef.hide();
  }

}
