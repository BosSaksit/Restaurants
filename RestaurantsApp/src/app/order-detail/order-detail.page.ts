import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { ActivatedRoute } from '@angular/router';
import { order } from '../Models/order';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { food } from '../Models/food';

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

  foodPriceTotalbill:number=0
  foodorder1: food[] = [];
  test1: any[]=[]
  testarray: food[] = []
  foodbill: food[] = []
  datacheckname
  datacheckmatch: food[] = []
  kk
  totalpriceinorder

  constructor(public resApi: ResApiService, public activate: ActivatedRoute) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
 
  }

  ngOnInit() {
    // this.getOrderById();

  }

  ionViewWillEnter() {
    this.getOrderById();
    

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
        this.test1 = this.foodorder
        this.totalMoneyOrderx = this.orderData.totalMoneyOrder;
      }
      this.test()
    });
  }


  test() {
    for (let index = 0; index < Object.keys(this.test1).length; index++) {
      this.testarray[index] = this.test1[index]
    }
    this.testarray.sort((x, y) => x.foodName > y.foodName ? 1 : -1);
    // console.log(this.testarray);


    for (let index = 0; index < this.testarray.length; index++) {

      if (this.datacheckname != this.testarray[index].foodName) {
        this.datacheckname = this.testarray[index].foodName
        this.datacheckmatch[index] = this.testarray[index]
        // console.log(this.datacheckname);
        // console.log(this.datacheckmatch);
      }
      else if (this.datacheckname == this.testarray[index].foodName) {

        // console.log(this.testarray[index].foodAmount);
        // console.log(this.datacheckmatch[index].foodAmount);
        this.kk = this.testarray[index - 1].foodAmount + this.testarray[index].foodAmount
        this.totalpriceinorder =  this.testarray[index - 1].foodPriceTotal + this.testarray[index].foodPriceTotal
        this.testarray[index].foodPriceTotal = this.totalpriceinorder
        this.testarray[index].foodAmount = this.kk
        this.datacheckmatch.pop()
        this.datacheckmatch[index - 1] = this.testarray[index]
        // console.log(this.kk);
        // console.log(this.testarray[index]);

      }
      for (let x = 0; x < this.datacheckmatch.length; x++) {
        this.foodorder1[x] = this.datacheckmatch[x]

      }

    }
    // console.log(this.foodorder1);
    for (let index = 0; index < this.foodorder1.length; index++) {
      if (this.foodorder1[index] != undefined) {

        this.foodbill.push(this.foodorder1[index])
        // console.log(this.foodbill);

      }

    }
    for (let index = 0; index < this.foodbill.length; index++) {
      this.foodPriceTotalbill = this.foodPriceTotalbill + this.foodbill[index].foodPriceTotal
      console.log(this.foodPriceTotalbill);
    }
    // console.log(this.datacheckmatch);


  }

  



}
