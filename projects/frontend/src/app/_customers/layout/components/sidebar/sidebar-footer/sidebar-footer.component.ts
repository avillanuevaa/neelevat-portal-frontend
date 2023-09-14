import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {SIDEBAR_FOOTER_ITEMS, SIDEBAR_OPTIONS} from '../constants/sidebar-footer.constant';
import { ISidebarFooterItem } from '../interfaces/sidebar-menu.interface';
import { AuthService } from '@services/auth.service';
import {SidebarService} from "../services/sidebar.service";
import {ISelect} from "@shared/components/title/interfaces/select.interface";
import {FormControl} from "@angular/forms";
import {NgbPopoverConfig} from "@ng-bootstrap/ng-bootstrap";
import {Subject, takeUntil} from "rxjs";
import {LayoutService} from "../../../core/layout.service";
import {LayoutType} from "../../../core/configs/config";

@Component({
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarFooterComponent implements OnInit{

  @Input() public toggleButtonClass: string = '';
  @Input() public toggleEnabled: boolean;
  @Input() public toggleType: string = '';
  @Input() public toggleState: string = '';

  public currentLayoutType: LayoutType | null;
  public toggleAttr: string;
  public sidebarFooterItems: ISidebarFooterItem[] = SIDEBAR_FOOTER_ITEMS;

  public sidebarOptions: ISelect[] = SIDEBAR_OPTIONS;

  public selectorControl: FormControl = new FormControl('');
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private authService: AuthService,
    private sidebarService: SidebarService,
    private config: NgbPopoverConfig,
    private layout: LayoutService,
    private cdr: ChangeDetectorRef,
  ) { config.animation = true;}

  public ngOnInit(): void {
    this.toggleAttr = `app-sidebar-${this.toggleType}`;
    this.layout.currentLayoutTypeSubject.asObservable().pipe(
      takeUntil(this.destroy$),
    ).subscribe((layout) => {
      this.currentLayoutType = layout;
      this.cdr.detectChanges();
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public logout(): void { // Add log out function here
    this.authService.logout();
  }

  onOptionSelected(option: string) {
    this.sidebarService.setOption(option);
  }
}
