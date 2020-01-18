import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashierOrderDetailPage } from './cashier-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CashierOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashierOrderDetailPageRoutingModule {}
