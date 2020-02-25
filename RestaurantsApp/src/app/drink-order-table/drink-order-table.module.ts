import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DrinkOrderTablePageRoutingModule } from './drink-order-table-routing.module';

import { DrinkOrderTablePage } from './drink-order-table.page';
import { ComponentsModule } from "../logout/components.module";
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DrinkOrderTablePageRoutingModule,
    ComponentsModule,
    NgxPaginationModule
  ],
  declarations: [DrinkOrderTablePage]
})
export class DrinkOrderTablePageModule {}
