import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OwnerDashboardPageRoutingModule } from './owner-dashboard-routing.module';

import { OwnerDashboardPage } from './owner-dashboard.page';
import { ComponentsModule } from "../test/components.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    OwnerDashboardPageRoutingModule
  ],
  declarations: [OwnerDashboardPage]
})
export class OwnerDashboardPageModule {}
