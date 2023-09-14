import {Component, Input} from '@angular/core';
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";
import {EContainerBar, ELiClass, ESizeBar} from "@entities/progress-bar/enums/progress-bar.enums";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {


  @Input() public steps: IStep[];

  @Input() public sizeBar: ESizeBar = ESizeBar.big;

  @Input() public containerBar: EContainerBar = EContainerBar.default;

  @Input() public liClassBar: ELiClass = ELiClass.default;

  public containerBarStyle: typeof EContainerBar = EContainerBar;

  public liClassStyle: typeof ELiClass = ELiClass;

  public barStyle: typeof ESizeBar = ESizeBar;

  public get barClass(): string {
    switch (this.sizeBar) {
      case this.barStyle.big:
        return 'class-big-bar';
      case this.barStyle.medium:
        return 'class-medium-bar';
      case this.barStyle.small:
        return 'class-medium-bar';
      case this.barStyle.fullBar:
        return 'class-full-bar'
    }
  }

  public get containerClass(): string {
    switch (this.containerBar) {
      case this.containerBarStyle.default:
        return '';
      case this.containerBarStyle.row:
        return 'container-progress-bar';
    }
  }

  public get liClass(): string {
    switch (this.liClassBar) {
      case this.liClassStyle.default:
        return '';
      case this.liClassStyle.column:
        return 'column-li-class';
    }
  }


}
