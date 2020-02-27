import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { ActivatedRoute } from '@angular/router';
import { order } from '../Models/order';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  idbill: any;
  orderData: order;
  foodorder: any;
  totalMoneyOrderx: number;
  foodPriceTotal: number = 0;
  tableNumber: any;
  moneyReceived: any;
  moneyCommute: any;
  billTime: any;
  discountPersen: any;
  discountBath: any;
  moneyDiscountTotal: any;

  constructor(public resApi: ResApiService, public activate: ActivatedRoute) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
    this.getOrderById();
  }

  ngOnInit() {
    // this.checkStatusFood();
  }

  getOrderById() {
    this.resApi.getDataOrderById(this.idbill).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData);
      this.moneyReceived = this.orderData.moneyReceived;
      this.moneyCommute = this.orderData.moneyCommute;
      this.discountPersen = this.orderData.discountPersen;
      this.discountBath = this.orderData.discountBath;
      this.moneyDiscountTotal = this.orderData.moneyDiscountTotal;

      this.billTime = this.orderData.billTime;
      console.log(this.orderData.foodOrder);
      this.tableNumber = this.orderData.tableNumber;

      for (let i = 0; i < this.orderData.foodOrder.length; i++) {
        // console.log(this.orderData.foodOrder[i].foodPriceTotal);
        this.foodPriceTotal += this.orderData.foodOrder[i].foodPriceTotal;
        // console.log(this.foodPriceTotal);

        // console.log(this.orderData.foodOrder[i]);
        this.foodorder = this.orderData.foodOrder;
        // console.log(this.foodorder);

        this.totalMoneyOrderx = this.orderData.totalMoneyOrder;
      }
    });
  }


  



}
