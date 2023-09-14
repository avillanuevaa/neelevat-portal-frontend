import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { FinancialComponent } from './financial/financial.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AccountingRoutingModule } from './accounting-routing.module';

@NgModule({
	declarations: [
		FinancialComponent,
		InvoicesComponent
	],
	imports: [
		CommonModule,
		AccountingRoutingModule,
		ReactiveFormsModule,
		SharedModule,
	],
})
export class AccountingModule { }
