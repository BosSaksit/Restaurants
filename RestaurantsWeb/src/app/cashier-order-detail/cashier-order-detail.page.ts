import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cashier-order-detail',
  templateUrl: './cashier-order-detail.page.html',
  styleUrls: ['./cashier-order-detail.page.scss'],
})
export class CashierOrderDetailPage implements OnInit {
  idbill: any;
  orderData: order;
  dataOrderToCashier: order;
  foodorder: any;
  totalMoneyOrderx: number;
  foodPriceTotal: any;
  tableNumber: any;
  orderStatusPayment: any;
  totalMoneyOrder:any;
  moneyCommute:any;

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

  constructor(public resApi: ResApiService,
    public activate: ActivatedRoute,
    public alertController: AlertController,
    public router: Router) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
    this.getOrderById();
    console.log(this.orderStatusPayment);

  }

  ngOnInit() {
  }


  async Payment(id) {
    console.log(id);
    console.log(this.orderStatusPayment);
    
    const alert = await this.alertController.create({
      header: 'ชำระเงิน โต๊ะ : ' + this.tableNumber,
      subHeader: 'ยอดสุทธิ : ' + this.totalMoneyOrderx+" บาท",
      inputs: [{
        name: 'money',
        type: 'text',
        placeholder: 'เงินที่ได้รับ',
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
          this.moneyCommute = data.money - this.totalMoneyOrderx;
          console.log(this.moneyCommute);
          
          console.log(id);
          this.dataOrderBeforeToCashier.orderStatusPayment = this.orderStatusPayment;
          this.dataOrderBeforeToCashier.moneyReceived = data.money;
          this.dataOrderBeforeToCashier.moneyCommute = this.moneyCommute;
          this.dataOrderToCashier = this.dataOrderBeforeToCashier
          console.log(this.dataOrderToCashier);
          
          
          this.resApi.orderPayment(this.idbill,this.dataOrderToCashier).subscribe(it =>{
            console.log(it);
            
          })
          this.router.navigate(['/bill-payment-detail', { idb: id }]);
        }
      }],

    });
    await alert.present();

  }



  getOrderById() {
    this.resApi.getDataOrderById(this.idbill).subscribe(it => {
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
}
