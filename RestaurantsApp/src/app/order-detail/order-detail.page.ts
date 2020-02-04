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
  dataOrderToCashier: order;
  foodorder: any;
  totalMoneyOrderx: number;
  foodPriceTotal: any;
  xxx: any;


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
      console.log(this.orderData);
      console.log(this.orderData.totalMoneyOrder);
      console.log(this.orderData.foodOrder);

      for (let i = 0; i < this.orderData.foodOrder.length; i++) {
        console.log(this.orderData.foodOrder[i].foodPriceTotal);
        this.foodPriceTotal = this.orderData.foodOrder[i].foodPriceTotal;
        console.log(this.orderData.foodOrder[i]);
        this.foodorder = this.orderData.foodOrder;
        this.totalMoneyOrderx = this.orderData.totalMoneyOrder;
        console.log(this.totalMoneyOrderx);
        console.log(this.foodorder);

      }
    });
  }

}
