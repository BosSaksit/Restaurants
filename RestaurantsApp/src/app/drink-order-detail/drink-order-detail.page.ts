import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';
import { AlertController } from '@ionic/angular';

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

  table: any;

  constructor(public activate: ActivatedRoute,
    public resApi: ResApiService,
    public alertController: AlertController) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
    this.getOrderById();
  }

  ngOnInit() {
    this.getOrderById();
  }

  ionViewWillEnter() {
    this.getOrderById();
  }

  getOrderById() {
    this.resApi.getDataOrderById(this.idbill).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData);

      console.log(this.orderData.tableNumber);
      this.table = this.orderData.tableNumber;

      for (let index = 0; index < Object.keys(this.orderData).length; index++) {
        this.orderCook = this.orderData.foodOrder.filter(it => it.foodType == "เครื่องดื่ม");
        // console.log(this.orderCook);
      }
    });
  }

  drinkSendFood(i) {
    console.log(i);
    this.idfood = i.foodNumber;
    console.log(this.idfood);
    if (i.foodStatus == "") {
      console.log("yes");

      this.resApi.drinkSendFood(this.idbill, this.idfood).subscribe(it => {
        console.log(it);
        this.getOrderById();

      });


    } else {
      this.alertFood();
    }
  }

  async alertFood() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือนการเสริฟอาหาร',
      subHeader: 'เสริฟอาหารแล้ว',
      buttons: [{
        text: 'Ok',
        handler: data => {

        }
      }],

    });
    await alert.present();

  }
}
