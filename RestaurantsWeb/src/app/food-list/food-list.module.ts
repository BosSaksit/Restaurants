import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FoodListPageRoutingModule } from './food-list-routing.module';

import { FoodListPage } from './food-list.page';
import { ComponentsModule } from "../test/components.module";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FoodListPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FoodListPage]
})
export class FoodListPageModule {}
