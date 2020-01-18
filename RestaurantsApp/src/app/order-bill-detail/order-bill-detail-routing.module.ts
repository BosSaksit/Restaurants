import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderBillDetailPage } from './order-bill-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OrderBillDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderBillDetailPageRoutingModule {}
