import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookOrderDetailPageRoutingModule } from './cook-order-detail-routing.module';

import { CookOrderDetailPage } from './cook-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookOrderDetailPageRoutingModule
  ],
  declarations: [CookOrderDetailPage]
})
export class CookOrderDetailPageModule {}
