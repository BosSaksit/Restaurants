import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerEditFoodPageRoutingModule } from './owner-edit-food-routing.module';

import { OwnerEditFoodPage } from './owner-edit-food.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    OwnerEditFoodPageRoutingModule
  ],
  declarations: [OwnerEditFoodPage]
})
export class OwnerEditFoodPageModule {}
