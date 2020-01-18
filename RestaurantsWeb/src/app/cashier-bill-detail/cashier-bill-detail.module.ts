import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierBillDetailPageRoutingModule } from './cashier-bill-detail-routing.module';

import { CashierBillDetailPage } from './cashier-bill-detail.page';
import { ComponentsModule } from "../test/components.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierBillDetailPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CashierBillDetailPage]
})
export class CashierBillDetailPageModule {}
