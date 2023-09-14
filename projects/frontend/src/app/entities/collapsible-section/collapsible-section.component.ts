import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-collapsible-section',
  templateUrl: './collapsible-section.component.html',
  styleUrls: ['./collapsible-section.component.scss']
})
export class CollapsibleSectionComponent {

  @Input() public title: string;
  expanded = false;

  toggleSection() {
    this.expanded = !this.expanded;
  }

}
