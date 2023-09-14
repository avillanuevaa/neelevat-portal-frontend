import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent {
  @Input() public set status(value: string) {
    this.name = value;
    this.setProperty(value);
  }

  public name: string;
  public classes: string;

  public setProperty(status: string): void {
    switch (status) {
      case 'confirmed':
      case 'complete':
      case 'active':
        this.classes = 'badge-light-success';
        break;
      case 'draft':
        this.classes = 'badge-light-warning';
        break;
      case 'received':
        this.classes = 'badge-danger';
        break;
      case 'deleted':
        this.classes = 'badge-light-danger';
        break;
      default:
        this.classes = 'badge-light-secondary text-gray-400';
        break;
    };
  }
}