import {
  ChangeDetectionStrategy,
  Component, ElementRef,
  EventEmitter, HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output, Renderer2,
  ViewChild
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {IBreadcrumb} from './interfaces/breadcrumb.interface';
import {ISelect} from './interfaces/select.interface';
import {ITitleButton} from './interfaces/title-button.interface';
import {ITitleSearch} from './interfaces/title-search.interface';
import {ITitleInput} from "@shared/components/title/interfaces/title-input.interface";
import {IStep} from "@entities/progress-bar/interfaces/progress-bar.interface";
import {ESizeBar} from "@entities/progress-bar/enums/progress-bar.enums";
import {EFontSize} from "@shared/components/button/enums/fontSize.enum";
import {IReturnButton} from "@shared/components/title/interfaces/return-button.interface";
import {EButtonColor} from "@shared/components/button/enums/button.enum";
import {EButtonPadding} from "@shared/components/button/enums/buttonPadding.enum";
import {ERightIcon} from "@shared/components/button/enums/rightIcon.enum";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  // Somehow it is making a conflict with the progress bar change detection
})
export class TitleComponent implements OnInit, OnDestroy {
  @Output() public onChangeSelector: EventEmitter<string[]> = new EventEmitter<string[]>();
  @Input() public title: string;
  @Input() public breadcrumbs: IBreadcrumb[];
  @Input() public filterOptions: ISelect[] | Set<string>;
  @Input() public titleButton: ITitleButton[];
  @Input() public titleSearch: ITitleSearch;
  @Input() public returnButton: IReturnButton;
  public barSize: typeof ESizeBar = ESizeBar;
  public btnColor: typeof EButtonColor = EButtonColor;
  public btnPadding: typeof EButtonPadding = EButtonPadding;
  public rightIcons: typeof ERightIcon = ERightIcon;
  @Input() public titleInput: ITitleInput
  @Input() public steps: IStep[];
  @Input() public markForCheck: boolean;
  @Input() public placeholder: string;
  @Input() public activeSelectValue: string[];
  public isSticky = false;
  @ViewChild('header', { static: true }) header: ElementRef;

  public btnFontSize: EFontSize = EFontSize.titleButton;


  public selectorControl: FormControl = new FormControl('');
  private destroy$: Subject<void> = new Subject<void>();
  public useBlackFont: boolean = true;

  constructor(private renderer: Renderer2) {}

  public ngOnInit(): void {
    this.selectorControl.valueChanges.pipe(
      takeUntil(this.destroy$)
    ).subscribe((value) => {
      this.onChangeSelector.emit(value);
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const yOffset = window.pageYOffset || document.documentElement.scrollTop;
    this.isSticky = yOffset <= 104;

    if (this.isSticky) {
      this.renderer.setStyle(this.header.nativeElement, 'position', 'sticky');
      this.renderer.setStyle(this.header.nativeElement, 'top', '0');
    } else {
      this.renderer.removeStyle(this.header.nativeElement, 'position');
      this.renderer.removeStyle(this.header.nativeElement, 'top');
    }
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
