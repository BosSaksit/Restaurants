import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';

@Component({
  selector: 'app-bill-payment-detail',
  templateUrl: './bill-payment-detail.page.html',
  styleUrls: ['./bill-payment-detail.page.scss'],
})
export class BillPaymentDetailPage implements OnInit {
  idbill: any;
  orderData: order;
  dataOrderToCashier: order;
  foodorder: any;
  totalMoneyOrderx: number;
  foodPriceTotal: any;
  tableNumber:any;
  orderStatusPayment:any;
  moneyReceived:any;
  moneyCommute:any;

  constructor(public router: Router,
    public resApi: ResApiService,
    public activate:ActivatedRoute) {
      this.idbill = this.activate.snapshot.paramMap.get('idb');
      console.log(this.idbill);
     }

  ngOnInit() {
    this.getOrderById();
  }

  ionViewWillEnter() {
  }


  getOrderById() {
    this.resApi.getDataOrderById(this.idbill).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData);
      this.moneyReceived = this.orderData.moneyReceived;
      this.moneyCommute = this.orderData.moneyCommute;
      console.log(this.orderData.foodOrder);
      this.tableNumber = this.orderData.tableNumber;

      for (let i = 0; i < this.orderData.foodOrder.length; i++) {
        // console.log(this.orderData.foodOrder[i].foodPriceTotal);
        this.foodPriceTotal = this.orderData.foodOrder[i].foodPriceTotal;
        // console.log(this.orderData.foodOrder[i]);
        this.foodorder = this.orderData.foodOrder;
        console.log(this.foodorder);
        
        this.totalMoneyOrderx = this.orderData.totalMoneyOrder;
      }
    });
  }



}
