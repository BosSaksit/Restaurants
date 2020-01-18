import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerEditFoodPage } from './owner-edit-food.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerEditFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerEditFoodPageRoutingModule {}
