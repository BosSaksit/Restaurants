import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerDateBillDetailPageRoutingModule } from './owner-date-bill-detail-routing.module';

import { OwnerDateBillDetailPage } from './owner-date-bill-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerDateBillDetailPageRoutingModule
  ],
  declarations: [OwnerDateBillDetailPage]
})
export class OwnerDateBillDetailPageModule {}
