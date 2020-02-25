import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'loginpage', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'cashier-order-table',
    loadChildren: () => import('./cashier-order-table/cashier-order-table.module').then( m => m.CashierOrderTablePageModule)
  },
  {
    path: 'cashier-order-detail',
    loadChildren: () => import('./cashier-order-detail/cashier-order-detail.module').then( m => m.CashierOrderDetailPageModule)
  },
  {
    path: 'cashier-money-table',
    loadChildren: () => import('./cashier-money-table/cashier-money-table.module').then( m => m.CashierMoneyTablePageModule)
  },
  {
    path: 'cashier-bill-detail',
    loadChildren: () => import('./cashier-bill-detail/cashier-bill-detail.module').then( m => m.CashierBillDetailPageModule)
  },
  {
    path: 'loginpage',
    loadChildren: () => import('./loginpage/loginpage.module').then( m => m.LoginpagePageModule)
  },
  {
    path: 'owner-dashboard',
    loadChildren: () => import('./owner-dashboard/owner-dashboard.module').then( m => m.OwnerDashboardPageModule)
  },
  {
    path: 'owner-bill-detail',
    loadChildren: () => import('./owner-bill-detail/owner-bill-detail.module').then( m => m.OwnerBillDetailPageModule)
  },
  {
    path: 'food-list',
    loadChildren: () => import('./food-list/food-list.module').then( m => m.FoodListPageModule)
  },
  {
    path: 'user-list',
    loadChildren: () => import('./user-list/user-list.module').then( m => m.UserListPageModule)
  },
  {
    path: 'owner-add-food',
    loadChildren: () => import('./owner-add-food/owner-add-food.module').then( m => m.OwnerAddFoodPageModule)
  },
  {
    path: 'owner-add-user',
    loadChildren: () => import('./owner-add-user/owner-add-user.module').then( m => m.OwnerAddUserPageModule)
  },
  {
    path: 'owner-date-bill-detail',
    loadChildren: () => import('./owner-date-bill-detail/owner-date-bill-detail.module').then( m => m.OwnerDateBillDetailPageModule)
  },
  {
    path: 'owner-edit-food',
    loadChildren: () => import('./owner-edit-food/owner-edit-food.module').then( m => m.OwnerEditFoodPageModule)
  },
  {
    path: 'owner-edit-user',
    loadChildren: () => import('./owner-edit-user/owner-edit-user.module').then( m => m.OwnerEditUserPageModule)
  },
  {
    path: 'bill-payment-detail',
    loadChildren: () => import('./bill-payment-detail/bill-payment-detail.module').then( m => m.BillPaymentDetailPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./modal/payment/payment.module').then( m => m.PaymentPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
