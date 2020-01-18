import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerDateBillDetailPage } from './owner-date-bill-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerDateBillDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerDateBillDetailPageRoutingModule {}
