import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerBillDetailPage } from './owner-bill-detail.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerBillDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerBillDetailPageRoutingModule {}
