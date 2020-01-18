import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderReceivePageRoutingModule } from './order-receive-routing.module';

import { OrderReceivePage } from './order-receive.page';
import { ComponentsModule } from "../logout/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderReceivePageRoutingModule,
    ComponentsModule
  ],
  declarations: [OrderReceivePage]
})
export class OrderReceivePageModule {}
