import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CookOrderDetailPage } from './cook-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CookOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CookOrderDetailPageRoutingModule {}
