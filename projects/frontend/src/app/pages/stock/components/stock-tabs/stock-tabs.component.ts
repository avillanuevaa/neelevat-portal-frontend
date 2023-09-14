import { Component, Input } from '@angular/core';
import { ITab } from './interfaces/tabs.interface';

@Component({
  selector: 'app-stock-tabs',
  templateUrl: './stock-tabs.component.html',
  styleUrls: ['./stock-tabs.component.scss']
})
export class StockTabsComponent {
  @Input() public tabs: ITab[];
}
