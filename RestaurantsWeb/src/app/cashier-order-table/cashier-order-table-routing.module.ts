import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierOrderTablePage } from './cashier-order-table.page';

const routes: Routes = [
  {
    path: '',
    component: CashierOrderTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierOrderTablePageRoutingModule {}
