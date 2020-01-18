import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';

@Component({
  selector: 'app-cashier-order-table',
  templateUrl: './cashier-order-table.page.html',
  styleUrls: ['./cashier-order-table.page.scss'],
})
export class CashierOrderTablePage implements OnInit {

  listDataOrder: any;
  constructor(public router: Router, public resApi: ResApiService) {

  }

  ngOnInit() {
    this.getDataOrder();
  }

  gotoDetailOrder() {
    this.router.navigate(['/cashier-order-detail']);
  }

  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.listDataOrder = it;
      console.log(this.listDataOrder);
      

    });

  }

}
