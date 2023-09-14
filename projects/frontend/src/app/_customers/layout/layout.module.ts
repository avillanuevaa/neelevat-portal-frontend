import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '@shared/shared.module';
import { Routing } from '../../pages/routing';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarFooterComponent } from './components/sidebar/sidebar-footer/sidebar-footer.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';
import { SidebarLogoComponent } from './components/sidebar/sidebar-logo/sidebar-logo.component';
import { ScriptsInitComponent } from './components/scripts-init/scripts-init.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HeaderAuthComponent } from './components/header-auth/header-auth.component';
import { HeaderMenuComponent } from './components/header/header-menu/header-menu.component';
import { LayoutComponent } from './layout.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbPopover} from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: Routing,
  },
]

@NgModule({
  declarations: [
    LayoutComponent,
    SidebarComponent,
    SidebarFooterComponent,
    SidebarMenuComponent,
    SidebarLogoComponent,
    ScriptsInitComponent,
    ContentComponent,
    HeaderComponent,
    HeaderMenuComponent,
    NavbarComponent,
    HeaderAuthComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MatMenuModule,
        ReactiveFormsModule,
        NgbPopover,
    ],
  exports: [
    RouterModule,
    HeaderAuthComponent,
  ],
})
export class LayoutModule { }
