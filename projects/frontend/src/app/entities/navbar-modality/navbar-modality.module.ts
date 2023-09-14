import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarModalityComponent } from './navbar-modality.component';
import {SharedModule} from "@shared/shared.module";
import {RouterLink, RouterLinkActive} from "@angular/router";



@NgModule({
  declarations: [
    NavbarModalityComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterLinkActive,
    RouterLink
  ],
  exports: [
    NavbarModalityComponent
  ]
})
export class NavbarModalityModule { }
