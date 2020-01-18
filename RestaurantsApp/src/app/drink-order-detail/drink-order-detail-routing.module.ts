import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkOrderDetailPage } from './drink-order-detail.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkOrderDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkOrderDetailPageRoutingModule {}
