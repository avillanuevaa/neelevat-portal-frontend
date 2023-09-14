import { Component } from '@angular/core';
import {EFontSize} from "@shared/components/button/enums/fontSize.enum";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";

@Component({
  selector: 'app-tab-shipment',
  templateUrl: './tab-shipment.component.html',
  styleUrls: ['./tab-shipment.component.scss']
})
export class TabShipmentComponent {

  public btnColor: typeof EButtonColor = EButtonColor;
  public btnPadding: typeof EButtonPadding = EButtonPadding;

}
