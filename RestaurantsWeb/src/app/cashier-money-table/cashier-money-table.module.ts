import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashierMoneyTablePageRoutingModule } from './cashier-money-table-routing.module';

import { CashierMoneyTablePage } from './cashier-money-table.page';
import { ComponentsModule } from "../test/components.module";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashierMoneyTablePageRoutingModule,
    ComponentsModule
  ],
  declarations: [CashierMoneyTablePage,]
})
export class CashierMoneyTablePageModule {}
