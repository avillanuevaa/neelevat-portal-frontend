import { Component } from '@angular/core';

@Component({
  selector: 'tab-selector',
  templateUrl: './tab-selector.component.html',
  styleUrls: ['./tab-selector.component.scss']
})
export class TabSelectorComponent {


  activeTab: 'customsRequired' | 'freeGoods' = 'customsRequired';

  setActiveTab(tab: 'customsRequired' | 'freeGoods') {
    this.activeTab = tab;
  }

}
