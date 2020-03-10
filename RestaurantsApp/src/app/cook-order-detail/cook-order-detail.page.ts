import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { ActivatedRoute } from '@angular/router';
import { order } from '../Models/order';
import { food } from '../Models/food';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cook-order-detail',
  templateUrl: './cook-order-detail.page.html',
  styleUrls: ['./cook-order-detail.page.scss'],
})
export class CookOrderDetailPage implements OnInit {

  idbill: any;
  idfood: any;
  orderData: order;
  dataOrderToCashier: order;
  foodorder: order[] = [];
  orderCook: any;
  orderCookx: food[];

  table:any;

  cookSendFoodx = {
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
    "orderStatusFood":null,
    "orderStatusDrink":null,
    "orderReceived": []
  };


  constructor(public resApi: ResApiService, 
    public activate: ActivatedRoute,
    public alertController:AlertController) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getOrderById();
    // this.checkStatusFood();
  }

  getOrderById() {
    this.resApi.getDataOrderById(this.idbill).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData.foodOrder);
      this.table = this.orderData.tableNumber;
      this.orderCook = this.orderData.foodOrder.filter(it => it.foodType == "อาหาร");
      console.log(this.orderCook);
    });
  }

  cookSendFood(i) {
    console.log(i);
    this.idfood = i.foodNumber;
    console.log(this.idfood);
    if (i.foodStatus == "") {
      console.log("yes");
      // this.dataOrderToCashier = this.cookSendFoodx.orderStatusFood;
      this.resApi.cookSendFood(this.idbill, this.idfood).subscribe(it => {
        console.log(it);
        this.getOrderById();
      });
    }

    else {
     this.alertFood();
    }

  }

  
  async alertFood() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือนการเสริฟอาหาร',

      buttons: [{
        text: 'Ok',
        handler: data => {

        }
      }],

    });
    await alert.present();

  }

  

}
