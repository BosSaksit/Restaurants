import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ResApiService } from '../ResApi/res-api.service';
import { food } from '../Models/food';
import { order } from '../Models/order';
import { Form, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-order-receive',
  templateUrl: './order-receive.page.html',
  styleUrls: ['./order-receive.page.scss'],
})
export class OrderReceivePage implements OnInit {

  dataMenu2: food[] = [];
  dataMenu: food;
  foodToOrderList: food[] = [];
  statusoc: any;


  dataOrder: order;
  dataorder2: order;
  dataOrderFood: order;
  dataOrderToCashier: order;

  dataFood: food;
  dataFoodx: food;

  foodorder: any;

  totalMoneyOrder: number = 0;
  amoutFood: number = 0;
  amoutFood2: number[] = [];

  totalPrice: number = 0;

  btnStatus: any;

  constructor(public alertController: AlertController,
    public resApi: ResApiService,
    public router: Router) {

    // this.getDataFoodFilter();

    this.btnStatus = 1;

  }

  ngOnInit() {
    this.getDataMenu();
    this.getDataOrder();
  }

  addFoodToOrderList(m) {
    console.log(m.foodId);
    this.foodToOrderList.push(m);
    console.log(this.foodToOrderList);
    this.dataOrderToCashier.foodOrder.push(m);
    this.btnStatus = 1;

  }

  add(i) {
    // console.log(i);
    // console.log(this.foodorder[i].foodAmount);

    this.foodorder[i].foodAmount += 1;
    console.log(this.foodorder[i].foodAmount);
    this.foodorder[i].foodPriceTotal = this.foodorder[i].foodPrice * this.foodorder[i].foodAmount;
    console.log(this.foodorder[i].foodPriceTotal);
    this.btnStatus = 1;


  };

  orderPriceFood() {
    this.totalMoneyOrder = 0;
    for (let i = 0; i < this.foodToOrderList.length; i++) {
      this.totalMoneyOrder += parseInt(this.foodorder[i].foodPriceTotal);
      console.log(this.totalMoneyOrder);
      this.btnStatus = 2;
    }
  }

  minus(i) {
    if (this.foodorder[i].foodAmount == 0 || this.foodorder[i].foodAmount < 0) {
      this.foodorder[i].foodAmount = 0;
      this.foodorder[i].foodPrice = 0;
    } else {
      console.log(this.foodorder[i].foodAmount);
      this.foodorder[i].foodAmount -= 1;
      console.log(this.foodorder[i].foodAmount);
      this.foodorder[i].foodPrice = 0;

    }
  }

  async addOrderToCashier() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการส่งอาหาร',
      inputs: [{
        name: 'table',
        type: 'text',
        placeholder: 'กรุณาเลือกโตีะ',
      },
      {
        name: 'cus',
        type: 'text',
        placeholder: 'กรุณาใส่จำนวนคน',
      }

      ],

      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Cancel');
        }
      }, {
        text: 'Ok',
        handler: data => {
          this.dataOrderToCashier.tableNumber = data.table;
          this.dataOrderToCashier.amountCustomer = data.cus;
          this.dataOrderToCashier.totalMoneyOrder = this.totalMoneyOrder;
          this.resApi.addDataOrderToCashier(this.dataOrderToCashier).subscribe(it => {
            console.log(it);
            this.router.navigate(['/order-list'])
          })
        }
      }],

    });
    await alert.present();

  }

  getDataMenu() {
    this.resApi.getDataFood().subscribe(it => {
      this.dataMenu = it;
      console.log(this.dataMenu);

    });
  }

  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      console.log(this.dataOrder);
      this.dataOrderToCashier = this.dataOrder[0];
      console.log(this.dataOrderToCashier.foodOrder);
      this.foodorder = this.dataOrderToCashier.foodOrder;
      console.log(this.foodorder);
      // console.log(this.dataOrder[0].foodOrder[0].foodName);

    });
  }



  // getDataFoodFilter() {
  //   this.resApi.getDataFood().subscribe((it) => {
  //     this.dataMenu = it;
  //     for (var i in it) {
  //       this.dataMenu2[i] = this.dataMenu[i];
  //       console.log(this.dataMenu2);

  //     }
  //   });
  // }

  yourFunction() {
    this.dataMenu2 = this.dataMenu2.filter(it => it.foodType == this.statusoc);
    this.dataMenu2 = this.dataMenu2.filter(it => it.foodType != this.statusoc);
    console.log(this.dataMenu2);
    console.log(this.statusoc);
  }


}
