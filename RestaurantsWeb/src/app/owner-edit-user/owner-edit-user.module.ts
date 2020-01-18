import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerEditUserPageRoutingModule } from './owner-edit-user-routing.module';

import { OwnerEditUserPage } from './owner-edit-user.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    OwnerEditUserPageRoutingModule
  ],
  declarations: [OwnerEditUserPage]
})
export class OwnerEditUserPageModule {}
