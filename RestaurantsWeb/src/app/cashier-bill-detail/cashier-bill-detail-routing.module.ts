import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierBillDetailPage } from './cashier-bill-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CashierBillDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierBillDetailPageRoutingModule {}
