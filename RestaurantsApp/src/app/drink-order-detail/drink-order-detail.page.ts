import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';

@Component({
  selector: 'app-drink-order-detail',
  templateUrl: './drink-order-detail.page.html',
  styleUrls: ['./drink-order-detail.page.scss'],
})
export class DrinkOrderDetailPage implements OnInit {

  idbill: any;
  idfood: any;
  orderData: order;
  dataOrderToCashier: order;
  foodorder: any;
  orderCook: any;

  constructor(public activate: ActivatedRoute, public resApi: ResApiService) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
    this.getOrderById();
  }

  ngOnInit() {
  }

  // ionViewWillEnter() {
  //   this.getOrderById();
  // }

  getOrderById() {
    this.resApi.getDataOrderById(this.idbill).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData.tableNumber);

      for (let index = 0; index < Object.keys(this.orderData).length; index++) {
        this.orderCook = this.orderData.foodOrder.filter(it => it.foodType == "เครื่องดื่ม");
        // console.log(this.orderCook);
      }
    });
  }

  drinkSendFood(i) {
    console.log(i);
    this.idfood = i.foodId;
    console.log(this.idfood);
    if (i.foodStatus == "") {
      console.log("yes");

      this.resApi.drinkSendFood(this.idbill, this.idfood).subscribe(it => {
        console.log(it);
        this.getOrderById();

      });


    } else {
      alert("เสริฟอาหารแล้ว");
    }
  }

}
