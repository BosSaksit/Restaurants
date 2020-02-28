import { Component, OnInit } from '@angular/core';
import { food } from '../Models/food';
import { order } from '../Models/order';
import { AlertController, LoadingController } from '@ionic/angular';
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

  dataOrderToCashier: order;
  listDataOrder: any[];
  foodorder: any;
  totalMoneyOrder: number = 0;
  btnStatus: any;
  idUser: any;

  idBillEdit: any;
  idFoodEdit: any;
  btnStatusEdit: any;

  table: any;
  food: any;
  drink: any;

  constructor(public alertController: AlertController,
    public resApi: ResApiService,
    public router: Router,
    public activate: ActivatedRoute,
    public loadingController: LoadingController) {
    this.idBillEdit = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idBillEdit);

    this.btnStatus = 1;


  }

  ngOnInit() {
    this.getDataMenu();
    this.getDataEditOrder();
  }

  ionViewWillEnter() {
    this.btnStatus = 1;
    // this.getDataEditOrder();

  }

  getDataMenu() {
    this.resApi.getDataFood().subscribe(it => {
      this.dataMenu = it;
      console.log(this.dataMenu);

    });
  }

  editFoodToOrderList(m) {
    console.log(m.foodId);
    this.idFoodEdit = m.foodId;
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
      console.log(this.dataOrderBeforeToCashier.tableNumber);
      this.table = this.dataOrderBeforeToCashier.tableNumber;
      for (let index = 0; index < Object.keys(this.dataOrderBeforeToCashier.foodOrder).length; index++) {
        this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;

      }


      // console.log(this.listDataOrder);

    })
  }


  add(i) {
    console.log(i);

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

      this.dataOrderBeforeToCashier.foodOrder[i].foodCostTotal = parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodAmount) * parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodCost);
      // this.dataOrderBeforeToCashier.foodOrder[i].foodCost = this.foodCost;
      this.dataOrderBeforeToCashier.foodOrder[i].foodProfitTotal = parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodAmount) * parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodProfit);
    }
    this.btnStatus = 2;
    console.log(this.dataOrderBeforeToCashier);
    this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalMoneyOrder;
    // this.dataOrderBeforeToCashier.orderReceived.push(this.idUser);

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
          this.presentLoading();

        }
      }],

    });
    await alert.present();

  }

  cancelMenuInOrder(id) {
    console.log(id);

    this.resApi.cancelMenuList(this.idBillEdit, id).subscribe(it => {
      console.log(it);
      this.getDataEditOrder();
      this.btnStatus = 1;


    })
  }

  getDataFoodFilter() {
    this.resApi.getDataFood().subscribe((it) => {
      this.dataMenu = it;
    });
  }

  foodFilter() {
    this.food = "อาหาร";
    console.log(this.food);
    this.resApi.filterTypeMenu(this.food).subscribe(it => {
      this.dataMenu = it;
      console.log(it);

    });


    // this.dataMenu2 = this.dataMenu2.filter(it => it.foodType == "อาหาร");
    // console.log(this.dataMenu2);
  }

  drinkFilter() {
    this.drink = "เครื่องดื่ม";
    console.log(this.drink);
    this.resApi.filterTypeMenu(this.drink).subscribe(it => {
      this.dataMenu = it;
      console.log(it);

    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.router.navigate(['/order-receive']);
  }

}
