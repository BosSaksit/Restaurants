import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierMoneyTablePage } from './cashier-money-table.page';

const routes: Routes = [
  {
    path: '',
    component: CashierMoneyTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierMoneyTablePageRoutingModule {}
