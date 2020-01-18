import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'login-page',
    loadChildren: () => import('./login-page/login-page.module').then( m => m.LoginPagePageModule)
  },
  {
    path: 'order-receive',
    loadChildren: () => import('./order-receive/order-receive.module').then( m => m.OrderReceivePageModule)
  },
  {
    path: 'order-list',
    loadChildren: () => import('./order-list/order-list.module').then( m => m.OrderListPageModule)
  },
  {
    path: 'order-bill-detail',
    loadChildren: () => import('./order-bill-detail/order-bill-detail.module').then( m => m.OrderBillDetailPageModule)
  },
  {
    path: 'order-detail',
    loadChildren: () => import('./order-detail/order-detail.module').then( m => m.OrderDetailPageModule)
  },
  {
    path: 'drink-order-table',
    loadChildren: () => import('./drink-order-table/drink-order-table.module').then( m => m.DrinkOrderTablePageModule)
  },
  {
    path: 'drink-order-detail',
    loadChildren: () => import('./drink-order-detail/drink-order-detail.module').then( m => m.DrinkOrderDetailPageModule)
  },  {
    path: 'cook-order-table',
    loadChildren: () => import('./cook-order-table/cook-order-table.module').then( m => m.CookOrderTablePageModule)
  },
  {
    path: 'cook-order-detail',
    loadChildren: () => import('./cook-order-detail/cook-order-detail.module').then( m => m.CookOrderDetailPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
