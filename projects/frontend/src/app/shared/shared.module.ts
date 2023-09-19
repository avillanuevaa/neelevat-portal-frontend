import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { TranslateModule } from '@ngx-translate/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { ButtonComponent } from './components/button/button.component';
import { TitleComponent } from './components/title/title.component';
import { DatepickerComponent } from './components/form-elements/datepicker/datepicker.component';
import { SwitchComponent } from './components/form-elements/switch/switch.component';
import { CheckboxComponent } from './components/form-elements/checkbox/checkbox.component';
import { MultiselectComponent } from './components/form-elements/multiselect/multiselect.component';
import { SelectComponent } from './components/form-elements/select/select.component';
import { InputComponent } from './components/form-elements/input/input.component';
import { ProgressBarModule } from "@entities/progress-bar/progress-bar.module";
import { TextareaComponent } from './components/form-elements/textarea/textarea.component';
import { TimepickerComponent } from './components/form-elements/timepicker/timepicker.component';
import { MatInputModule } from "@angular/material/input";
import { NgxMaterialTimepickerModule } from "ngx-material-timepicker";
import { MatIconModule } from "@angular/material/icon";
import { TextareaAddressComponent } from './components/form-elements/textarea-address/textarea-address.component';
import { ModalModule } from "ngx-bootstrap/modal";

const MODULES = [
  TranslateModule,
  InlineSVGModule,
];

const COMPONENTS = [
  ButtonComponent,
  TitleComponent,
  InputComponent,
  SelectComponent,
  MultiselectComponent,
  CheckboxComponent,
  SwitchComponent,
  DatepickerComponent,
  TextareaComponent,
  TimepickerComponent,
  TextareaAddressComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ...MODULES,
    ProgressBarModule,
    MatInputModule,
    NgxMaterialTimepickerModule,
    MatIconModule,
    ModalModule.forRoot(),
  ],
  exports: [
    ...MODULES,
    ...COMPONENTS,
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
  ],
})
export class SharedModule { }
