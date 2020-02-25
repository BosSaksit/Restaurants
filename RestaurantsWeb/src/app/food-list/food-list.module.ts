import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodListPageRoutingModule } from './food-list-routing.module';

import { FoodListPage } from './food-list.page';
import { ComponentsModule } from "../test/components.module";
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodListPageRoutingModule,
    ComponentsModule,
    NgxPaginationModule
  ],
  declarations: [FoodListPage]
})
export class FoodListPageModule {}
