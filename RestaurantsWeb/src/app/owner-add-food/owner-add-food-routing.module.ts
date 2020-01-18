import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerAddFoodPage } from './owner-add-food.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerAddFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerAddFoodPageRoutingModule {}
