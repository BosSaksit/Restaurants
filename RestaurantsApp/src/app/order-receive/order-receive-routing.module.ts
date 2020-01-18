import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderReceivePage } from './order-receive.page';

const routes: Routes = [
  {
    path: '',
    component: OrderReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderReceivePageRoutingModule {}
