import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderListPageRoutingModule } from './order-list-routing.module';

import { OrderListPage } from './order-list.page';
import { ComponentsModule } from "../logout/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OrderListPage]
})
export class OrderListPageModule {}
