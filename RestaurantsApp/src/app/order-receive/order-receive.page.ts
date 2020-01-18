import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ResApiService } from '../ResApi/res-api.service';
import { food } from '../Models/food';
import { order } from '../Models/order';
import { Form, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-order-receive',
  templateUrl: './order-receive.page.html',
  styleUrls: ['./order-receive.page.scss'],
})
export class OrderReceivePage implements OnInit {

  dataMenu2:food[]=[];
  dataMenu: food;
  statusoc: any;


  dataOrder: order;
  dataorder2: order;
  dataOrderFood: order;
  dataOrderToCashier: order;

  dataFood: food;
  dataFoodx: food;

  foodorder: any;

  totalMoneyOrder: number = 0;

  constructor(public alertController: AlertController,
    public resApi: ResApiService) {

      this.getDataFoodFilter();

  }

  ngOnInit() {
    this.getDataMenu();
    this.getDataOrder();
  }

  addFoodList(id) {
    console.log(id);
    console.log("Before push");
    console.log(this.dataOrderToCashier);
    this.dataOrderToCashier.foodOrder.push(id);
    console.log(this.dataOrderToCashier.foodOrder[0].foodPrice);

    this.totalMoneyOrder += this.dataOrderToCashier.foodOrder[0].foodPrice;
    console.log(this.totalMoneyOrder);

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
          this.resApi.addDataOrderToCashier(this.dataOrderToCashier).subscribe(it => {
          console.log(it);
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
      console.log(this.dataOrder[0].foodOrder[0].foodName);

    });
  }



  getDataFoodFilter() {
    this.resApi.getDataFood().subscribe((it) => {
      this.dataMenu = it;
      for (var i in it) {
        this.dataMenu2[i] = this.dataMenu[i];
        console.log(this.dataMenu2);

      }
    });
  }

  yourFunction() {
    this.dataMenu2 = this.dataMenu2.filter(it => it.foodType == this.statusoc);
    this.dataMenu2 = this.dataMenu2.filter(it => it.foodType != this.statusoc);
    console.log(this.dataMenu2);
    console.log(this.statusoc);
  }


}
