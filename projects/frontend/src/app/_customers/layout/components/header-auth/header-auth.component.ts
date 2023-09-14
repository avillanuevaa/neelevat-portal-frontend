import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { LayoutService } from '../../core/layout.service';
import { MenuComponent } from '../../../kt/components';
import { ILayout, LayoutType } from '../../core/configs/config';

@Component({
  selector: 'app-header-auth',
  templateUrl: './header-auth.component.html',
  styleUrls: ['./header-auth.component.scss'],
})
export class HeaderAuthComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>;
  // Public props
  currentLayoutType: LayoutType | null;

  appHeaderDisplay: boolean;
  appHeaderDefaultFixedDesktop: boolean;
  appHeaderDefaultFixedMobile: boolean;

  appHeaderDefaultContainer: 'fixed' | 'fluid';
  headerContainerCssClass: string = '';
  appHeaderDefaultContainerClass: string = '';

  appHeaderDefaultStacked: boolean;

  // view
  appSidebarDefaultCollapseDesktopEnabled: boolean;
  appSidebarDisplay: boolean;
  appHeaderDefaultContent: string = '';
  appHeaderDefaulMenuDisplay: boolean;
  appPageTitleDisplay: boolean;

  constructor(private layout: LayoutService, private router: Router) {
    this.routingChanges();
  }

  updateProps(config: ILayout) {
    this.appHeaderDisplay = this.layout.getProp(
      'app.header.display',
      config
    ) as boolean;
    // view
    this.appSidebarDefaultCollapseDesktopEnabled = this.layout.getProp(
      'app.sidebar.default.collapse.desktop.enabled',
      config
    ) as boolean;
    this.appSidebarDisplay = this.layout.getProp(
      'app.sidebar.display',
      config
    ) as boolean;
    this.appHeaderDefaultContent = this.layout.getProp(
      'app.header.default.content',
      config
    ) as string;
    this.appHeaderDefaulMenuDisplay = this.layout.getProp(
      'app.header.default.menu.display',
      config
    ) as boolean;
    this.appPageTitleDisplay = this.layout.getProp(
      'app.pageTitle.display',
      config
    ) as boolean;

    // body attrs and container css classes
    this.appHeaderDefaultFixedDesktop = this.layout.getProp(
      'app.header.default.fixed.desktop',
      config
    ) as boolean;
    if (this.appHeaderDefaultFixedDesktop) {
      document.body.setAttribute('data-kt-app-header-fixed', 'true');
    }

    this.appHeaderDefaultFixedMobile = this.layout.getProp(
      'app.header.default.fixed.mobile',
      config
    ) as boolean;
    if (this.appHeaderDefaultFixedMobile) {
      document.body.setAttribute('data-kt-app-header-fixed-mobile', 'true');
    }

    this.appHeaderDefaultContainer = this.layout.getProp(
      'appHeaderDefaultContainer',
      config
    ) as 'fixed' | 'fluid';
    this.headerContainerCssClass =
      this.appHeaderDefaultContainer === 'fixed'
        ? 'container-xxl'
        : 'container-fluid';

    this.appHeaderDefaultContainerClass = this.layout.getProp(
      'app.header.default.containerClass',
      config
    ) as string;
    if (this.appHeaderDefaultContainerClass) {
      this.headerContainerCssClass += ` ${this.appHeaderDefaultContainerClass}`;
    }

    this.appHeaderDefaultStacked = this.layout.getProp(
      'app.header.default.stacked',
      config
    ) as boolean;
    if (this.appHeaderDefaultStacked) {
      document.body.setAttribute('data-kt-app-header-stacked', 'true');
    }

    // Primary header
    // Secondary header
  }

  ngOnInit(): void {
    this.layout.layoutConfigSubject.asObservable().pipe(
      takeUntil(this.destroy$),
    ).subscribe((config: ILayout) => {
      this.updateProps(config);
    });

    this.layout.currentLayoutTypeSubject.asObservable().pipe(
      takeUntil(this.destroy$),
    ).subscribe((layout) => {
      this.currentLayoutType = layout;
    });
  }

  routingChanges() {
    this.router.events.pipe(
      takeUntil(this.destroy$),
    ).subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        MenuComponent.reinitialization();
      }
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
