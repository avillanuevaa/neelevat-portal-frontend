import { Component } from '@angular/core';
import {INavMenuItem} from "@entities/navbar-modality/interface/nav-menu-item.interface";
import {NAVBAR_MODALITY_ITEMS} from "@entities/navbar-modality/constants/navbar-modality.constant";

@Component({
  selector: 'app-navbar-modality',
  templateUrl: './navbar-modality.component.html',
  styleUrls: ['./navbar-modality.component.scss']
})
export class NavbarModalityComponent {

  public items: INavMenuItem[] = NAVBAR_MODALITY_ITEMS;

}
