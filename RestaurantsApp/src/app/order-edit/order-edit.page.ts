import { Component, OnInit } from '@angular/core';
import { food } from '../Models/food';
import { order } from '../Models/order';
import { AlertController } from '@ionic/angular';
import { ResApiService } from '../ResApi/res-api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-edit',
  templateUrl: './order-edit.page.html',
  styleUrls: ['./order-edit.page.scss'],
})
export class OrderEditPage implements OnInit {

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
  listDataOrder: any[];
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
    this.idBillEdit = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idBillEdit);
    this.getDataEditOrder();
    this.btnStatus = 1;


  }

  ngOnInit() {
    this.getDataMenu();
  }

  getDataMenu() {
    this.resApi.getDataFood().subscribe(it => {
      this.dataMenu = it;
      console.log(this.dataMenu);

    });
  }

  editFoodToOrderList(m) {
    console.log(m.foodId);
    // this.foodToOrderList.push(m);
    this.dataOrderBeforeToCashier.foodOrder.push(m);
    console.log(this.dataOrderBeforeToCashier.foodOrder);
    this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;
    console.log(this.listDataOrder);

    this.btnStatus = 1;

  }

  getDataEditOrder() {
    this.resApi.getDataOrderById(this.idBillEdit).subscribe(it => {
      this.dataOrderBeforeToCashier = it;
      for (let index = 0; index < Object.keys(this.dataOrderBeforeToCashier.foodOrder).length; index++) {
        this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;
      }
      // console.log(this.listDataOrder);

    })
  }


  add(i) {
    this.dataOrderBeforeToCashier.foodOrder[i].foodAmount += 1;
    console.log(this.dataOrderBeforeToCashier.foodOrder);
    this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal = this.dataOrderBeforeToCashier.foodOrder[i].foodPrice * this.dataOrderBeforeToCashier.foodOrder[i].foodAmount;
    console.log(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
    this.btnStatus = 1;
  }

  minus(i) {
    if (this.dataOrderBeforeToCashier.foodOrder[i].foodAmount == 0 || this.dataOrderBeforeToCashier.foodOrder[i].foodAmount < 0) {
      this.dataOrderBeforeToCashier.foodOrder[i].foodAmount = 0;
      this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal = 0;
      this.dataOrderBeforeToCashier.foodOrder[i].pop();
      console.log(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
      this.btnStatus = 1;
    } else {
      this.dataOrderBeforeToCashier.foodOrder[i].foodAmount -= 1;
      this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal -= this.dataOrderBeforeToCashier.foodOrder[i].foodPrice;
      console.log(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
      this.btnStatus = 1;
    }
  }

  orderPriceFood() {
    this.totalMoneyOrder = 0;
    for (let i = 0; i < this.dataOrderBeforeToCashier.foodOrder.length; i++) {
      this.totalMoneyOrder += parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
      console.log(this.totalMoneyOrder);
    }
    this.btnStatus = 2;
    console.log(this.dataOrderBeforeToCashier);
    this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalMoneyOrder;
    this.dataOrderBeforeToCashier.orderReceived.push(this.idUser);

  }

  async editDataOrder() {
    const alert = await this.alertController.create({
      header: 'ยืนยันการแก้ไขการส่งอาหาร โต๊ะที่ ' + this.dataOrderBeforeToCashier.tableNumber,
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
          this.dataOrderBeforeToCashier.tableNumber = this.dataOrderBeforeToCashier.tableNumber;
          this.dataOrderBeforeToCashier.amountCustomer = this.dataOrderBeforeToCashier.amountCustomer;
          console.log(this.dataOrderBeforeToCashier);
          this.dataOrderToCashier = this.dataOrderBeforeToCashier;
          console.log(this.dataOrderToCashier);
          this.resApi.editDataOrder(this.idBillEdit, this.dataOrderToCashier).subscribe(it => {
            console.log(it);

          })

          this.router.navigate(['/order-list'])

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
