import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierOrderDetailPageRoutingModule } from './cashier-order-detail-routing.module';

import { CashierOrderDetailPage } from './cashier-order-detail.page';
import { ComponentsModule } from "../test/components.module";
import { PaymentPage } from "../modal/payment/payment.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierOrderDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CashierOrderDetailPage,PaymentPage],
  entryComponents:[PaymentPage]
})
export class CashierOrderDetailPageModule {}
