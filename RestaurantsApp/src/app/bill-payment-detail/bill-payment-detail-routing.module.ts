import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BillPaymentDetailPage } from './bill-payment-detail.page';

const routes: Routes = [
  {
    path: '',
    component: BillPaymentDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BillPaymentDetailPageRoutingModule {}
