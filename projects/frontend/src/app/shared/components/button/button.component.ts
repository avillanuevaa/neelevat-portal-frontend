import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {EButtonColor} from './enums/button.enum';
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {EFontSize} from "@shared/components/button/enums/fontSize.enum";
import {ERightIcon} from "@shared/components/button/enums/rightIcon.enum";
import {ECircleColor} from "@shared/components/button/enums/circleColor.enum";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() public name: string;
  @Input() public link: string;
  @Input() public svg: string;
  @Input() public hoverText: string;
  @Input() public btnColor: EButtonColor = EButtonColor.default;
  @Input() public rightIcon: ERightIcon = ERightIcon.default;
  @Input() public btnPadding: EButtonPadding = EButtonPadding.default;
  @Input() public circleColor: ECircleColor = ECircleColor.default;
  @Input() public btnFontSizing: EFontSize = EFontSize.fourteen;
  @Input() public isFullWidth: boolean;
  @Input() disabled: boolean = false;
  @Input() public iconPosition: 'left' | 'right' = 'right';

  public btnColors: typeof EButtonColor = EButtonColor;
  public rightIcons: typeof ERightIcon = ERightIcon;

  public btnPaddings: typeof EButtonPadding = EButtonPadding;
  public circleColors: typeof ECircleColor = ECircleColor;

  public btnFontSize: typeof EFontSize = EFontSize;

  public get btnClass(): string {
    switch (this.btnColor) {
      case this.btnColors.default:
        return 'btn-whitebg';
      case this.btnColors.gray:
        return 'btn-graybg fs-6';
      case this.btnColors.blue:
        return 'btn-login-bluebg';
      case this.btnColors.white:
        return 'btn-login-whitebg';
      case this.btnColors.filterButton:
        return 'filter-button-bluebg';
      case this.btnColors.filterButtonWhiteBg:
        return 'filter-button-whitebg';
      case this.btnColors.graybgBluefont:
        return 'graybg-bluefont';
      case this.btnColors.whiteBorder:
        return 'btn-white-border';
      case this.btnColors.cancelForm:
        return 'btn-cancel-form';
      case this.btnColors.updateForm:
        return 'btn-update-form';
      case this.btnColors.homeFilter:
        return 'btn-home-filter';
    };
  }
  public get rightIconClass(): string {
    switch (this.rightIcon){
      case this.rightIcons.alignCenter:
        return 'd-flex align-items-center justify-content-center';
    }
  }

  public get btnPaddingClass(): string {
    switch (this.btnPadding){
      case this.btnPaddings.padding:
        return 'padding-top-bottom';
      case this.btnPaddings.paddingBorders:
        return 'padding-borders-0';
      case this.btnPaddings.paddingSubmitButton:
        return 'padding-submit-button';
    }
  }

  public get customColor(): string {
    switch (this.circleColor){
      case this.circleColors.gray:
        return 'gray';
      case this.circleColors.green:
        return 'green';
      case this.circleColors.blue:
        return 'blue';
    }
  }

  public get fontSizeClass(): string {
    switch (this.btnFontSizing){
      case this.btnFontSize.eleven:
        return 'fs-11px';
      case this.btnFontSize.twelve:
        return 'fs-12px';
      case this.btnFontSize.thirteen:
        return 'fs-13px';
      case this.btnFontSize.fourteen:
        return 'fs-14px';
      case this.btnFontSize.fifteen:
        return 'fs-15px';
      case this.btnFontSize.sixteen:
        return 'fs-16px';
      case this.btnFontSize.organizationSave:
        return 'fs-15px py-2 h-35px';
      case this.btnFontSize.titleButton:
        return 'title-button-style';
    }
  }
}
