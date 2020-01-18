import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerEditUserPage } from './owner-edit-user.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerEditUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerEditUserPageRoutingModule {}
