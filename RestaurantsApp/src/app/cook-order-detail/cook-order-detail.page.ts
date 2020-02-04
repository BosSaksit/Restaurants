import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { ActivatedRoute } from '@angular/router';
import { order } from '../Models/order';
import { food } from '../Models/food';

@Component({
  selector: 'app-cook-order-detail',
  templateUrl: './cook-order-detail.page.html',
  styleUrls: ['./cook-order-detail.page.scss'],
})
export class CookOrderDetailPage implements OnInit {

  idbill: any;
  orderData: order;
  dataOrderToCashier: order;
  foodorder: order[] = [];
  orderCook: any;
  orderCookx: food;


  constructor(public resApi: ResApiService, public activate: ActivatedRoute) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
    this.getOrderById();

  }

  ngOnInit() {
  }

  getOrderById() {
    this.resApi.getDataOrderById(this.idbill).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData.foodOrder);

      for (let index = 0; index < Object.keys(this.orderData).length; index++) {

      }
      this.orderCook = this.orderData.foodOrder.filter(it => it.foodType == "อาหาร");
      console.log(this.orderCook);
    });
  }

  cookSendFood(i) {
    this.orderCookx = i;
    for (let index = 0; index < Object.keys(this.orderCookx).length; index++) {
      if (this.orderCookx[index].foodStatus == null) {
        this.orderCookx[index].foodStatus = "เสริฟแล้ว";
      }
    }
    console.log(this.orderCookx.foodStatus);






  }

}
