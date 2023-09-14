import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-popover-filter',
  templateUrl: './popover-filter.component.html',
  styleUrls: ['./popover-filter.component.scss']
})
export class PopoverFilterComponent {
  @ViewChild('popover') private popover: NgbPopover;
  @Output() public openFilter: EventEmitter<void> = new EventEmitter<void>();
  @Output() public applyFilter: EventEmitter<{ value: string[], name: string }> = new EventEmitter<{ value: string[], name: string }>();
  @Input() public value: string[];
  @Input() public options: string[];
  @Input() public name: string;
  @Input() public valueName: string;
  @Input() public markForCheck: boolean;

  public resetSearch: Subject<string> = new Subject<string>();
  public startSearch: Subject<string> = new Subject<string>();

  public closePopover(): void {
    this.popover.close();
  }
}
