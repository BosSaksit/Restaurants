import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderEditPageRoutingModule } from './order-edit-routing.module';

import { OrderEditPage } from './order-edit.page';
import { ComponentsModule } from "../logout/components.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [OrderEditPage]
})
export class OrderEditPageModule {}
