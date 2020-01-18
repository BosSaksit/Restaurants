import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerAddFoodPageRoutingModule } from './owner-add-food-routing.module';

import { OwnerAddFoodPage } from './owner-add-food.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    OwnerAddFoodPageRoutingModule
  ],
  declarations: [OwnerAddFoodPage]
})
export class OwnerAddFoodPageModule {}
