import { Component } from '@angular/core';
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";

@Component({
  selector: 'app-tab-goods',
  templateUrl: './tab-goods.component.html',
  styleUrls: ['./tab-goods.component.scss']
})
export class TabGoodsComponent {

  public btnColor: typeof EButtonColor = EButtonColor;
  public btnPadding: typeof EButtonPadding = EButtonPadding;

}
