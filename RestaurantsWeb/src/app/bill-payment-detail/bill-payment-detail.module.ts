import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BillPaymentDetailPageRoutingModule } from './bill-payment-detail-routing.module';

import { BillPaymentDetailPage } from './bill-payment-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BillPaymentDetailPageRoutingModule
  ],
  declarations: [BillPaymentDetailPage]
})
export class BillPaymentDetailPageModule {}
