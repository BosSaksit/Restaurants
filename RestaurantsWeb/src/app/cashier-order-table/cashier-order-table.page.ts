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

  ionViewWillEnter() {
    this.checkStatusFood();
  }

  gotoDetailOrder(id) {
    this.router.navigate(['/cashier-order-detail',{idbill:id}]);
  }

  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.listDataOrder = it;
      console.log(this.listDataOrder);
      

    });

  }

  checkStatusFood() {
    this.resApi.getDataOrder().subscribe(it => {
      this.listDataOrder = it;
      console.log(this.listDataOrder);
      for (let index = 0; index < Object.keys(this.listDataOrder).length; index++) {
        if (this.listDataOrder[index].foodOrder[index].foodStatus != "") {
          this.listDataOrder[index].orderStatusFood = this.listDataOrder[index].foodOrder[index].foodStatus;

        } else {
          console.log("data null");

        }
      }
    });

  }

}
