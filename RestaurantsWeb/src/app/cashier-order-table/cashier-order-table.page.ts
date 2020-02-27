import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';
import { summary } from '../Models/summary';

@Component({
  selector: 'app-cashier-order-table',
  templateUrl: './cashier-order-table.page.html',
  styleUrls: ['./cashier-order-table.page.scss'],
})
export class CashierOrderTablePage implements OnInit {

  listDataOrder: order;
  dataSummary: summary;

  showDatabtn: any;

  constructor(public router: Router,
    public resApi: ResApiService) {
    this.showDatabtn = "2";

  }

  ngOnInit() {
    this.getDataOrder();
  }

  ionViewWillEnter() {
    this.getDataOrder();
    this.getDataSummary();
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
    });
  }


  getDataSummary() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataSummary = it;
      console.log(this.dataSummary);
    }
    );
  }

  showData() {
    this.showDatabtn = "1";
    if (this.showDatabtn = "1") {
      this.getDataSummary();
    } else {

    }
  }


  showData2() {
    this.showDatabtn = "2";
  }



}
