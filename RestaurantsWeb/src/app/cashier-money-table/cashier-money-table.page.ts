import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';
import { food } from '../Models/food';

@Component({
  selector: 'app-cashier-money-table',
  templateUrl: './cashier-money-table.page.html',
  styleUrls: ['./cashier-money-table.page.scss'],
})
export class CashierMoneyTablePage implements OnInit {

  dataOrder: order;
  dataorder2: order;
  foodorder: food[] = [];

  statusEdit: any;
  constructor(public router: Router,
    public resApi: ResApiService) { }

  ngOnInit() {
    this.getDataOrder();

  }

  ionViewWillEnter() {
    this.checkStatusFood();
  }

  gotoBillDetail() {
    this.router.navigate(['/cashier-bill-detail']);
  }

  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      console.log(this.dataOrder);
    });
  }

  checkStatusFood() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      console.log(this.dataOrder);
      for (let index = 0; index < Object.keys(this.dataOrder).length; index++) {
        if (this.dataOrder[index].foodOrder[index].foodStatus != "") {
          this.dataOrder[index].orderStatusFood = this.dataOrder[index].foodOrder[index].foodStatus;

        } else {
          console.log("data null");

        }
      }
    });

  }
}
