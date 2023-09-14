import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinancialComponent } from './financial/financial.component';
import { InvoicesComponent } from './invoices/invoices.component';

export const routes: Routes = [
  {
    path: 'financial',
    component: FinancialComponent,
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountingRoutingModule { }
