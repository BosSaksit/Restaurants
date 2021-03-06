import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { CashierOrderTablePageRoutingModule } from './cashier-order-table-routing.module';

import { CashierOrderTablePage } from './cashier-order-table.page';
import { ComponentsModule } from "../test/components.module";
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierOrderTablePageRoutingModule,
    ComponentsModule,
    NgxPaginationModule
  ],
  declarations: [CashierOrderTablePage]
})
export class CashierOrderTablePageModule {}
