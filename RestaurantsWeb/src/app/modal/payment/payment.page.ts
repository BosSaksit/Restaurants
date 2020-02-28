import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { order } from 'src/app/Models/order';
import { summary } from 'src/app/Models/summary';
import { ResApiService } from 'src/app/ResApi/res-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  orderStatusPayment: any;
  discoutPersen: boolean;
  discoutBath: boolean;

  discoutPersenIp: number;
  discoutBathIp: number;

  totalDisPs: number;
  totalDisBth: number;
  discount: number;

  idbill: any;
  orderData: order;
  dataOrderToCashier: order;
  foodorder: any;
  foodPriceTotal: any;
  tableNumber: any;
  totalMoneyOrderx: number;

  totalMoneyOrder: any;
  moneyCommute: any;
  dataSummaryPayment: summary;

  moneyReceived: number;
  totalMoneyDiscoutPersen: number;
  totalMoneyDiscoutBath: number;

  discountPersenAnddiscountBath: number;

  id: any;

  dataOrderBeforeToCashier = {
    "billId": null,
    "orderId": null,
    "tableNumber": null,
    "foodOrder": [],
    "amountCustomer": 0,
    "totalMoneyOrder": 0,
    "moneyReceived": 0,
    "moneyCommute": 0,
    "discountPersen": 0,
    "discountBath": 0,
    "moneyDiscount": 0,
    "moneyDiscountTotal": 0,
    "orderDate": "",
    "billTime": "",
    "orderStatus": null,
    "orderStatusTotal": "",
    "orderStatusPayment": null,
    "orderStatusFood": null,
    "orderStatusDrink": null,
    "orderReceived": []
  };


  constructor(public modal: ModalController,
    public resApi: ResApiService,
    public navParams: NavParams,
    public alertController: AlertController,
    public router: Router) {

    this.discoutPersen = false;
    this.discoutBath = false;

    this.id = this.navParams.get('id')

    console.log(this.id);
    this.getOrderById();


  }

  ngOnInit() {
  }

  async close() {
    await this.modal.dismiss();
  }

  async persen() {
    const alert = await this.alertController.create({
      header: 'กรอกส่วนลด %',
      inputs: [{
        name: 'persen',
        type: 'text',
        placeholder: 'ส่วนลด %',
      },
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

          this.totalDisPs = (this.totalMoneyOrderx * data.persen) / 100;
          this.totalMoneyDiscoutPersen = this.totalMoneyOrderx - this.totalDisPs;
          this.discoutPersenIp = data.persen;
          this.totalMoneyOrderx = this.totalMoneyDiscoutPersen;
        }
      }],

    });
    await alert.present();

  }

  async bath() {
    const alert = await this.alertController.create({
      header: 'กรอกส่วนลดราคา',
      inputs: [{
        name: 'bath',
        type: 'text',
        placeholder: 'ส่วนลดราคา',
      },
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

          this.totalDisBth = this.totalMoneyOrderx - data.bath;
          this.totalMoneyDiscoutBath = this.totalMoneyOrderx - this.totalDisBth;
          console.log(this.totalMoneyDiscoutBath);

          this.discoutBathIp = data.bath;
          this.totalMoneyOrderx = this.totalDisBth;

        }
      }],

    });
    await alert.present();

  }


  payMent() {
    this.resApi.getDataOrderById(this.id).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData);
      console.log(this.orderData.foodOrder);
      this.tableNumber = this.orderData.tableNumber;

      for (let i = 0; i < this.orderData.foodOrder.length; i++) {
        // console.log(this.orderData.foodOrder[i].foodPriceTotal);
        this.foodPriceTotal = this.orderData.foodOrder[i].foodPriceTotal;
        // console.log(this.orderData.foodOrder[i]);
        this.foodorder = this.orderData.foodOrder;
        this.totalMoneyOrderx = this.orderData.totalMoneyOrder;

      }

      if (this.discoutPersen != false && this.discoutBath != false) {
        this.dataOrderBeforeToCashier.discountPersen = this.discoutPersenIp;
        this.dataOrderBeforeToCashier.discountBath = this.discoutBathIp;
        this.totalDisBth = this.totalMoneyOrderx - this.discoutBathIp;
        this.totalDisPs = (this.totalMoneyOrderx * this.discoutPersenIp) / 100;
        console.log(this.totalDisPs);

        this.discountPersenAnddiscountBath = this.totalDisBth - this.totalDisPs;
        this.dataOrderBeforeToCashier.moneyDiscountTotal = this.discountPersenAnddiscountBath;
        this.dataOrderBeforeToCashier.totalMoneyOrder = this.discountPersenAnddiscountBath;
        this.dataOrderBeforeToCashier.moneyReceived = this.moneyReceived;
        this.moneyCommute = this.moneyReceived - this.discountPersenAnddiscountBath;
        this.dataOrderBeforeToCashier.moneyCommute = this.moneyCommute;
        this.dataOrderBeforeToCashier.moneyDiscount = this.totalDisPs + this.totalMoneyDiscoutBath;
        this.disPersenAnddisBathAlert();


      }
      else if (this.discoutPersen == true) {
        this.dataOrderBeforeToCashier.discountPersen = this.discoutPersenIp;
        this.totalDisPs = (this.totalMoneyOrderx * this.discoutPersenIp) / 100;
        this.dataOrderBeforeToCashier.moneyReceived = this.moneyReceived;
        this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalMoneyOrderx - this.totalDisPs;
        this.dataOrderBeforeToCashier.moneyDiscount = this.totalDisPs;
        this.totalMoneyDiscoutPersen = this.totalMoneyOrderx - this.totalDisPs;
        this.dataOrderBeforeToCashier.moneyDiscountTotal = this.totalMoneyDiscoutPersen;
        this.moneyCommute = this.moneyReceived - this.totalMoneyDiscoutPersen;
        this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalMoneyDiscoutPersen;
        this.dataOrderBeforeToCashier.moneyCommute = this.moneyCommute;
        this.disPersenAlert();
      } else if (this.discoutBath == true) {
        this.totalDisBth = this.totalMoneyOrderx - this.discoutBathIp;
        this.dataOrderBeforeToCashier.discountBath = this.discoutBathIp;
        this.dataOrderBeforeToCashier.moneyReceived = this.moneyReceived;
        this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalDisBth;
        this.dataOrderBeforeToCashier.moneyDiscount = this.discoutBathIp;
        this.dataOrderBeforeToCashier.moneyDiscountTotal = this.totalDisBth
        this.moneyCommute = this.moneyReceived - this.totalDisBth
        this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalDisBth;
        this.dataOrderBeforeToCashier.moneyCommute = this.moneyCommute;
        this.disBathAlert();
      }
      else {
        this.dataOrderBeforeToCashier.moneyReceived = this.moneyReceived;
        this.moneyCommute = this.moneyReceived - this.totalMoneyOrderx;
        this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalMoneyOrderx;
        this.dataOrderBeforeToCashier.moneyCommute = this.moneyCommute;
        this.payMentAlert();
      }


      this.dataOrderBeforeToCashier.orderStatusPayment = this.orderStatusPayment;
      this.dataOrderToCashier = this.dataOrderBeforeToCashier;

      this.resApi.orderPayment(this.id, this.dataOrderToCashier).subscribe(it => {
        this.dataSummaryPayment = it;
        console.log(this.dataSummaryPayment);
        this.resApi.addDataSummary(this.dataSummaryPayment).subscribe(it => {
          console.log(it);

        });

      });
    });
    // this.router.navigate(['/bill-payment-detail', { idb: id }]);
  }


  getOrderById() {
    this.resApi.getDataOrderById(this.id).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData);
      console.log(this.orderData.foodOrder);
      this.tableNumber = this.orderData.tableNumber;

      for (let i = 0; i < this.orderData.foodOrder.length; i++) {
        // console.log(this.orderData.foodOrder[i].foodPriceTotal);
        this.foodPriceTotal = this.orderData.foodOrder[i].foodPriceTotal;
        // console.log(this.orderData.foodOrder[i]);
        this.foodorder = this.orderData.foodOrder;
        this.totalMoneyOrderx = this.orderData.totalMoneyOrder;
      }
    });
  }


  async disPersenAnddisBathAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือนการชำระเงิน',
      message: 'ยอดชำระ :' + this.totalMoneyOrderx + '<br>' +
        'เงินที่ได้รับ : ' + this.moneyReceived + '<br>' +
        'ส่วนลด % : ' + this.discoutPersenIp + '<br>' +
        'ส่วนลดราคา : ' + this.discoutBathIp + '<br>' +
        'ยอดสุทธิ : ' + this.discountPersenAnddiscountBath + '<br>' +
        'เงินทอน : ' + this.moneyCommute + '<br>',
      buttons: [{
        text: 'Ok',
        handler: data => {
          this.closex();

          this.router.navigate(['/cashier-order-table']);
        }
      }],
    });

    await alert.present();

  }

  async disPersenAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือนการชำระเงิน',
      message: 'ยอดชำระ :' + this.totalMoneyOrderx + '<br>' +
        'เงินที่ได้รับ : ' + this.moneyReceived + '<br>' +
        'ส่วนลด % : ' + this.discoutPersenIp + '<br>' +
        'ยอดสุทธิ : ' + this.totalMoneyDiscoutPersen + '<br>' +
        'เงินทอน : ' + this.moneyCommute + '<br>',
      buttons: [{
        text: 'Ok',
        handler: data => {
          this.closex();

          this.router.navigate(['/cashier-order-table']);
        }
      }],
    });

    await alert.present();

  }

  async disBathAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือนการชำระเงิน',
      message: 'ยอดชำระ :' + this.totalMoneyOrderx + "<br>" +
        'เงินที่ได้รับ : ' + this.moneyReceived + "<br>" +
        'ส่วนลดราคา : ' + this.discoutBathIp + "<br>" +
        'ยอดสุทธิ : ' + this.totalDisBth + "<br>" +
        'เงินทอน : ' + this.moneyCommute + "<br>"
      ,
      buttons: [{
        text: 'Ok',
        handler: data => {
          this.closex();

          this.router.navigate(['/cashier-order-table']);
        }
      }],
    });

    await alert.present();


  }

  async payMentAlert() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือนการชำระเงิน',
      message: 'ยอดชำระ : ' + this.totalMoneyOrderx + "<br>" +
        'เงินที่ได้รับ : ' + this.moneyReceived + "<br>" +
        'เงินทอน : ' + this.moneyCommute + "<br>"
      ,
      buttons: [{
        text: 'Ok',
        handler: data => {
          this.closex();
          this.router.navigate(['/cashier-order-table']);
        }
      }],
    });

    await alert.present();


  }

  async closex() {
    await this.modal.dismiss();
  }




}
