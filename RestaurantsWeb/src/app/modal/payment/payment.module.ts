import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentPageRoutingModule } from './payment-routing.module';

import { PaymentPage } from './payment.page';

@NgModule({
  imports: [
    PaymentPageRoutingModule,
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [PaymentPage],
  
})
export class PaymentPageModule {}
