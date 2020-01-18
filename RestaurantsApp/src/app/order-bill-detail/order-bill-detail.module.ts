import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderBillDetailPageRoutingModule } from './order-bill-detail-routing.module';

import { OrderBillDetailPage } from './order-bill-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderBillDetailPageRoutingModule
  ],
  declarations: [OrderBillDetailPage]
})
export class OrderBillDetailPageModule {}
