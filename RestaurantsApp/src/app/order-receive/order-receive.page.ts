import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ResApiService } from '../ResApi/res-api.service';
import { food } from '../Models/food';
import { order } from '../Models/order';
import { Form, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../Models/user';


@Component({
  selector: 'app-order-receive',
  templateUrl: './order-receive.page.html',
  styleUrls: ['./order-receive.page.scss'],
})
export class OrderReceivePage implements OnInit {

  dataMenu: food;
  dataMenu2: any[] = [];
  foodToOrderList: food[] = [];

  dataOrderBeforeToCashier = {
    "billId": null,
    "orderId": null,
    "tableNumber": null,
    "foodOrder": [],
    "amountCustomer": 0,
    "totalMoneyOrder": 0,
    "moneyReceived": 0,
    "moneyCommute": 0,
    "orderDate": "",
    "orderStatus": null,
    "orderStatusPayment": null,
    "orderStatusFood":null,
    "orderReceived": []
  };

  dataOrderToCashier: order;
  listDataOrder: order[];
  foodorder: any;
  totalMoneyOrder: number = 0;
  btnStatus: any;
  idUser: any;

  idBillEdit: any;
  btnStatusEdit: any;

  constructor(public alertController: AlertController,
    public resApi: ResApiService,
    public router: Router,
    public activate: ActivatedRoute) {

    this.resApi.getDataUserById(this.resApi.userLogin.userId).subscribe(it => {
      console.log(it);
      this.idUser = it;
    });
    this.btnStatus = 1;

  }

  ngOnInit() {
    this.getDataMenu();
    this.getDataFoodFilter();
    this.listDataOrder = [];
    this.dataOrderBeforeToCashier.foodOrder = [];
    // this.getDataOrder();
  }

  ionViewWillEnter() {
    this.listDataOrder = [];
    this.dataOrderBeforeToCashier.foodOrder = [];
    this.totalMoneyOrder = 0;
    this.btnStatus = 1;

  }

  getDataMenu() {
    this.resApi.getDataFood().subscribe(it => {
      this.dataMenu = it;
      console.log(this.dataMenu);

    });
  }


  addFoodToOrderList(m) {
    console.log(m.foodId);
    m.foodAmount = 1;
    console.log(m.foodAmount);
    this.dataOrderBeforeToCashier.foodOrder.push(m);
    console.log(this.dataOrderBeforeToCashier.foodOrder);
    this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;
    // var get = this.dataOrderBeforeToCashier.foodOrder.filter(it => it.foodId == m.foodId);
    // console.log(get);
    // if (this.dataOrderBeforeToCashier.foodOrder.length == 0) {
    //   console.log("array empty");
    //   this.dataOrderBeforeToCashier.foodOrder.push(m);
    //   this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;
    //   console.log(this.dataOrderBeforeToCashier.foodOrder);
    //   console.log(this.listDataOrder);

    // } else if (this.dataOrderBeforeToCashier.foodOrder.length > 0) {
    //   var getdata = this.dataOrderBeforeToCashier.foodOrder.filter(it => it.foodId == m.foodId);
    //   console.log(getdata);
    //   if (getdata.length == 0) {
    //     console.log("array null");
    //     // this.dataOrderBeforeToCashier.foodOrder.push(m);
    //     // this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;
    //     console.log(this.dataOrderBeforeToCashier.foodOrder);
    //     console.log(this.listDataOrder);
    //   } else {

    //     for (let index = 0; index < this.dataOrderBeforeToCashier.foodOrder.length; index++) {
    //       if (this.dataOrderBeforeToCashier.foodOrder[index].foodId == m.foodId) {
    //         console.log("array +1");
    //         this.dataOrderBeforeToCashier.foodOrder[index].foodAmount += 1;
    //         this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;
    //       }

    //     }
    //   }
    //   this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;
    // }


    // if (this.dataOrderBeforeToCashier.foodOrder[].foodId == this.dataOrderBeforeToCashier.foodOrder[m].foodId) {
    //   this.dataOrderBeforeToCashier.foodOrder[m].foodAmount += 1;
    // }

    this.btnStatus = 1;

  }


  gotoMarket() {
    this.router.navigate(['/order-list']);
  }

  add(i) {
    this.dataOrderBeforeToCashier.foodOrder[i].foodAmount += 1;
    console.log(this.dataOrderBeforeToCashier.foodOrder);
    this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal = this.dataOrderBeforeToCashier.foodOrder[i].foodPrice * this.dataOrderBeforeToCashier.foodOrder[i].foodAmount;
    console.log(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
    this.btnStatus = 1;
  }

  minus(i) {
    if (this.dataOrderBeforeToCashier.foodOrder[i].foodAmount == 0 || this.dataOrderBeforeToCashier.foodOrder[i].foodAmount < 1) {
      this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal = 0;
      this.dataOrderBeforeToCashier.foodOrder[i].pop();
      console.log(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
      console.log(this.dataOrderBeforeToCashier.foodOrder);
      console.log("aaaaa");


      this.btnStatus = 1;
    } else {
      this.dataOrderBeforeToCashier.foodOrder[i].foodAmount -= 1;
      this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal -= this.dataOrderBeforeToCashier.foodOrder[i].foodPrice;
      console.log(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
      this.btnStatus = 1;
      console.log("bbbbb");

    }
  }

  orderPriceFood() {
    this.totalMoneyOrder = 0;
    for (let i = 0; i < this.dataOrderBeforeToCashier.foodOrder.length; i++) {
      this.totalMoneyOrder += parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
      console.log(this.totalMoneyOrder);
      this.btnStatus = 2;
    }
    console.log(this.dataOrderBeforeToCashier);
    this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalMoneyOrder;


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
          this.dataOrderBeforeToCashier.tableNumber = data.table ;
          this.dataOrderBeforeToCashier.amountCustomer = data.cus;
          console.log(this.dataOrderBeforeToCashier);
          this.dataOrderToCashier = this.dataOrderBeforeToCashier;
          console.log(this.dataOrderToCashier);
          this.dataOrderBeforeToCashier.orderReceived.push(this.idUser);

          this.resApi.addDataOrderToCashier(this.dataOrderToCashier).subscribe(it => {
            console.log(it);
            this.router.navigate(['/order-list']);
          })
        }
      }],

    });
    await alert.present();

  }

  getDataFoodFilter() {
    this.resApi.getDataFood().subscribe((it) => {
      this.dataMenu = it;
      for (var i in it) {
        this.dataMenu2[i] = this.dataMenu[i];
        // console.log(this.dataMenu2);

      }
    });
  }

  foodFilter() {
    this.dataMenu2 = this.dataMenu2.filter(it => it.foodType == "อาหาร");
    console.log(this.dataMenu2);
  }

  drinkFilter() {
    this.dataMenu2 = this.dataMenu2.filter(it => it.foodType == "เครื่องดื่ม");
    console.log(this.dataMenu2);


  }


}
