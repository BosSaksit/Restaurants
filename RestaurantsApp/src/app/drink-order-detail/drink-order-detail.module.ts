import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkOrderDetailPageRoutingModule } from './drink-order-detail-routing.module';

import { DrinkOrderDetailPage } from './drink-order-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkOrderDetailPageRoutingModule
  ],
  declarations: [DrinkOrderDetailPage]
})
export class DrinkOrderDetailPageModule {}
