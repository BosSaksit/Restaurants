import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CookOrderTablePageRoutingModule } from './cook-order-table-routing.module';

import { CookOrderTablePage } from './cook-order-table.page';
import { ComponentsModule } from "../logout/components.module";
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CookOrderTablePageRoutingModule,
    ComponentsModule,
    NgxPaginationModule
  ],
  declarations: [CookOrderTablePage]
})
export class CookOrderTablePageModule {}
