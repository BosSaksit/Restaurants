import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerBillDetailPageRoutingModule } from './owner-bill-detail-routing.module';

import { OwnerBillDetailPage } from './owner-bill-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OwnerBillDetailPageRoutingModule
  ],
  declarations: [OwnerBillDetailPage]
})
export class OwnerBillDetailPageModule {}
