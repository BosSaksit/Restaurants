import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkOrderTablePage } from './drink-order-table.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkOrderTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkOrderTablePageRoutingModule {}
