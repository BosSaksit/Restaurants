import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';

@Component({
  selector: 'app-drink-order-table',
  templateUrl: './drink-order-table.page.html',
  styleUrls: ['./drink-order-table.page.scss'],
})
export class DrinkOrderTablePage implements OnInit {
  showDatabtn: any;
  constructor(public router: Router, public resApi: ResApiService) {
    this.showDatabtn = "2"
  }
  dataOrdertest: order[] = []
  dataOrder: order;
  cookStatus: any;
  p: number = 1;
  dataOrderserved: any
  dataOrderNoserved: any
  ngOnInit() {
    this.getDataOrder();

  }

  ionViewWillEnter() {
    this.getDataOrder();
    this.checkStatusFood();
  }


  gotoDetailOrder(id) {
    this.router.navigate(['/drink-order-detail', { idbill: id }]);
  }

  dataOrderfoodtype: order[]
  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      if (Object.keys( this.dataOrder).length != 0){
        console.log(this.dataOrder);
        for (let index = 0; index < Object.keys(this.dataOrder).length; index++) {
          this.dataOrdertest[index] = this.dataOrder[index]
        }
        for (let index = 0; index < Object.keys(this.dataOrder).length; index++) {
          this.dataOrderfoodtype = this.dataOrdertest.filter(it => it.orderFoodType != "ไม่มีเครื่องดื่ม")
        }

        for (let index = 0; index < this.dataOrderfoodtype.length; index++) {
          this.dataOrderserved = this.dataOrderfoodtype.filter(it => it.orderStatusDrink == "เสริฟแล้ว")
        }

        for (let index = 0; index < Object.keys(this.dataOrder).length; index++) {
          this.dataOrderNoserved = this.dataOrderfoodtype.filter(it => it.orderStatusDrink != "เสริฟแล้ว")
        }
        console.log(this.dataOrderfoodtype);

        console.log(this.dataOrderserved);
        console.log(this.dataOrderNoserved);
      }
    }
    );
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

  showData() {
    this.showDatabtn = "1";
    if (this.showDatabtn = "1") {
      this.getDataOrder();
    } else {

    }
  }
  showData2() {
    this.showDatabtn = "2";
  }


}
