import {Component, EventEmitter, Input, Output} from '@angular/core';
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {IButtonInterface} from "@entities/buttons-filter/interfaces/button-interface";

@Component({
  selector: 'buttons-filter',
  templateUrl: './buttons-filter.component.html',
  styleUrls: ['./buttons-filter.component.scss']
})
export class ButtonsFilterComponent {


  @Input() public buttonsFilterItems: IButtonInterface[];
  @Output() applyFilter = new EventEmitter<string>();
  public btnColor: typeof EButtonColor = EButtonColor;

  activeFilter: string | null = null;


  applyFilterAndSetActive(filterType: string): void {
    this.activeFilter = filterType;
    this.applyFilter.emit(filterType);
  }



  getButtonColor(btn: any): EButtonColor {
    return btn.display ? EButtonColor.blue : EButtonColor.white;
  }

  onButtonClicked(btn: any) {
    btn.display = !btn.display;
  }
}
