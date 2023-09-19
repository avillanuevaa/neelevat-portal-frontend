import { Component } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap/modal";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {Router} from "@angular/router";

@Component({
  selector: 'app-success-modal',
  templateUrl: './success-modal.component.html',
  styleUrls: ['./success-modal.component.scss']
})
export class SuccessModalComponent {
  public btnColor: typeof EButtonColor = EButtonColor;

  message: string;
  public btnPadding: typeof EButtonPadding = EButtonPadding;

  constructor(public bsModalRef: BsModalRef,
              private router: Router) {
  }

  redirectToShipments() {
    // Usa el servicio Router para navegar a la ruta '/shipments'
    this.router.navigate(['/shipments']);
    this.bsModalRef.hide();
  }

  close() {
    this.bsModalRef.hide();
  }

}
