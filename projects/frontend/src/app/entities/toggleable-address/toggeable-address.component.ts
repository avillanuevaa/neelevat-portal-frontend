import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-toggleable-address',
  templateUrl: './toggeable-address.component.html',
  styleUrls: ['./toggeable-address.component.scss']
})
export class ToggeableAddressComponent {

  @Input() public title: string;
  @Input() public addressLines: string[] = [];
  public displayAddress = false;

  public toggleAddress() {
    this.displayAddress = !this.displayAddress;
  }

}
