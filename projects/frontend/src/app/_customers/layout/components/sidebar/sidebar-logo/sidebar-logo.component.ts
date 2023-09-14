import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { IOrganisationOption } from '@interfaces/organisations.interface';
import { RootStoreService } from '@services/root-store.service';
import { RootSelectorsService } from '@services/root-selectors.service';
import { LayoutType } from '../../../core/configs/config';
import { LayoutService } from '../../../core/layout.service';
import { ORGANISATIONS_SWITCH_OPTIONS } from '../constants/sidebar-menu.constant';

@Component({
  selector: 'app-sidebar-logo',
  templateUrl: './sidebar-logo.component.html',
  styleUrls: ['./sidebar-logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarLogoComponent implements OnInit, OnDestroy {
  @Input() public toggleButtonClass: string = '';
  @Input() public toggleEnabled: boolean;
  @Input() public toggleType: string = '';
  @Input() public toggleState: string = '';

  public currentLayoutType: LayoutType | null;
  public toggleAttr: string;
  public organisations: IOrganisationOption[] = ORGANISATIONS_SWITCH_OPTIONS;
  public organisation$: Observable<IOrganisationOption> = this.rootSelectors.organisation$;
  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    private layout: LayoutService,
    private cdr: ChangeDetectorRef,
    private rootStore: RootStoreService,
    private rootSelectors: RootSelectorsService,
  ) { }

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

  public changeOrganisation(id: string): void {
    this.rootStore.updateOrganisation(id);
  }
}
