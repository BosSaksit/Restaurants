import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OwnerAddUserPage } from './owner-add-user.page';

const routes: Routes = [
  {
    path: '',
    component: OwnerAddUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OwnerAddUserPageRoutingModule {}
