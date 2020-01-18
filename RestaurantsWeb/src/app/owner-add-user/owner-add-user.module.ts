import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerAddUserPageRoutingModule } from './owner-add-user-routing.module';

import { OwnerAddUserPage } from './owner-add-user.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    OwnerAddUserPageRoutingModule
  ],
  declarations: [OwnerAddUserPage]
})
export class OwnerAddUserPageModule {}
