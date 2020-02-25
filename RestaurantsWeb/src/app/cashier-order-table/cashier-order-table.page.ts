import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';

@Component({
  selector: 'app-cashier-order-table',
  templateUrl: './cashier-order-table.page.html',
  styleUrls: ['./cashier-order-table.page.scss'],
})
export class CashierOrderTablePage implements OnInit {

  listDataOrder: order;

  constructor(public router: Router, public resApi: ResApiService) {

  }

  ngOnInit() {
    this.getDataOrder();
  }

  ionViewWillEnter() {
    // this.checkStatusFood();
  }

  gotoDetailOrder(id) {
    this.router.navigate(['/cashier-order-detail', { idbill: id }]);
  }

  gotoDetailBill(id) {
    this.router.navigate(['/bill-payment-detail', { idb: id }]);
  }

  getDataOrder() {
    this.resApi.getStatusOrderPayment().subscribe(it => {
      this.listDataOrder = it;
      console.log(it);
      
    })


  }


}
