import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITab } from './interfaces/tabs.interfaces';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  @Output() public changeTab: EventEmitter<string> = new EventEmitter<string>();
  @Input() public tabs: ITab[];
  @Input() public activeTab: string;
  @Input() public width: string;
  @Input() public isPageTabs: boolean;
}
