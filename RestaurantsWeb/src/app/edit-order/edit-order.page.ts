import { Component, OnInit } from '@angular/core';
import { food } from '../Models/food';
import { AlertController, LoadingController } from '@ionic/angular';
import { ResApiService } from '../ResApi/res-api.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute,Router } from '@angular/router';
import { order } from '../Models/order';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.page.html',
  styleUrls: ['./edit-order.page.scss'],
})
export class EditOrderPage implements OnInit {
  datanew: food[] = null
  dataMenu: food;
  dataMenu2: any[] = [];
  data: food[] = null
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
    "orderFoodType": null,
    "orderReceived": []
  };
  dataOrderBeforeToCashiertest = {
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
  check() {
    if (Object.keys(this.dataeditorderfood).length != 0) {
      for (let index = 0; index < Object.keys(this.dataeditorderfood).length; index++) {
        this.dataOrderBeforeToCashier.foodOrder.push(this.dataeditorderfood[index])
        console.log(this.dataOrderBeforeToCashier.foodOrder);
      }

      for (let index = 0; index < Object.keys(this.dataeditorderfood).length; index++) {
        this.orderfood = this.dataeditorderfood.filter(it => it.foodType == "อาหาร")
      }
      for (let index = 0; index < Object.keys(this.dataeditorderfood).length; index++) {
        this.orderwater = this.dataeditorderfood.filter(it => it.foodType == "เครื่องดื่ม")
      }
      console.log(this.orderfood);
      console.log(this.orderwater);
      if (Object.keys(this.orderfood).length != 0 && Object.keys(this.orderwater).length == 0) {
        this.resApi.EditDataOrdernoDrink(this.idBillEdit, this.dataOrderToCashier).subscribe(it => {
          console.log(it);
          this.dataeditorderfood = []
          this.dataEditOrderfood2 = []
          this.presentLoading();

        })
      }
      else if (Object.keys(this.orderfood).length == 0 && Object.keys(this.orderwater).length != 0) {
        this.resApi.editDataOrdernofood(this.idBillEdit, this.dataOrderToCashier).subscribe(it => {
          console.log(it);
          this.dataeditorderfood = []
          this.dataEditOrderfood2 = []
          this.presentLoading();

        })
      } else {
        this.resApi.editDataOrder(this.idBillEdit, this.dataOrderToCashier).subscribe(it => {
          console.log(it);
          this.dataeditorderfood = []
          this.dataEditOrderfood2 = []
          this.presentLoading();
        })
      }

    }
    else {
      console.log("press select food");
      alert("กรุณาเลือกรายการอาหาร")

    }


  }
  dataEditOrderfood2: any[];
  dataeditorderfood: food[] = [];
  editFoodToOrderList(m) {
    console.log(m);
    m.foodNumber = Math.random().toString(32).substr(2, 9);
    this.dataeditorderfood.push(m)
    this.dataEditOrderfood2 = this.dataeditorderfood
    console.log(this.dataeditorderfood);
    console.log(this.dataEditOrderfood2);
    console.log(m.foodId);
    this.idFoodEdit = m.foodId;
    // this.foodToOrderList.push(m);
    // this.dataOrderBeforeToCashier.foodOrder.push(m);
    console.log(this.dataOrderBeforeToCashier.foodOrder);
    this.listDataOrder = this.dataOrderBeforeToCashier.foodOrder;
    console.log(this.listDataOrder)
    this.btnStatus = 1;
  }

  getDataEditOrder() {
    this.resApi.getDataOrderById(this.idBillEdit).subscribe(it => {
      this.dataOrderBeforeToCashier = it
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

    this.dataeditorderfood[i].foodAmount += 1;
    // console.log(this.dataOrderBeforeToCashier.foodOrder);
    this.dataeditorderfood[i].foodPriceTotal = this.dataeditorderfood[i].foodPrice * this.dataeditorderfood[i].foodAmount;
    console.log(this.dataeditorderfood[i].foodPriceTotal);
    this.btnStatus = 1;
  }

  minus(i) {
    if (this.dataeditorderfood[i].foodAmount == 0 || this.dataeditorderfood[i].foodAmount < 0) {
      this.dataeditorderfood[i].foodAmount = 0;
      this.dataeditorderfood[i].foodPriceTotal = 0;

      // console.log(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
      this.btnStatus = 1;
    } else {
      this.dataeditorderfood[i].foodAmount -= 1;
      this.dataeditorderfood[i].foodPriceTotal -= this.dataeditorderfood[i].foodPrice;
      console.log(this.dataeditorderfood[i].foodPriceTotal);
      this.btnStatus = 1;
    }
  }
  neworderprice: number = 0
  checkprice() {
    this.neworderprice = 0
    for (let index = 0; index < this.dataeditorderfood.length; index++) {
      this.neworderprice += (this.dataeditorderfood[index].foodPriceTotal);

    }
    this.totalMoneyOrder = this.neworderprice + this.totalMoneyOrder
    console.log(this.neworderprice);
    console.log(this.totalMoneyOrder);
    this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalMoneyOrder;

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
    this.checkprice()

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
          for (let index = 0; index < this.dataOrderBeforeToCashier.foodOrder.length; index++) {
            this.data = this.dataOrderBeforeToCashier.foodOrder.filter(it => it.foodType == "เครื่องดื่ม");
          }
          for (let index = 0; index < this.dataeditorderfood.length; index++) {
            this.datanew = this.dataeditorderfood.filter(it => it.foodType == "เครื่องดื่ม");
          }
          // console.log(this.data);
          // console.log(this.datanew);
          if (Object.keys(this.data).length == 0 && Object.keys(this.datanew).length == 0) {
            this.dataOrderBeforeToCashier.orderFoodType = "ไม่มีเครื่องดื่ม"
            console.log(this.dataOrderBeforeToCashier.orderFoodType);

          }
          else {
            this.dataOrderBeforeToCashier.orderFoodType = ""
            console.log(this.dataOrderBeforeToCashier.orderFoodType);
            

          }
          this.dataOrderToCashier = this.dataOrderBeforeToCashier;
          console.log(this.dataOrderToCashier);
          this.check()




        }
      }],

    });
    await alert.present();

  }
  orderfood: food[]
  orderwater: food[]
  checktypefood() {
    for (let index = 0; index < Object.keys(this.dataeditorderfood).length; index++) {
      this.orderfood = this.dataeditorderfood.filter(it => it.foodType == "อาหาร")
    }
    for (let index = 0; index < Object.keys(this.dataeditorderfood).length; index++) {
      this.orderwater = this.dataeditorderfood.filter(it => it.foodType == "เครื่องดื่ม")
    }
    console.log(this.orderfood);
    console.log(this.orderwater);
    if (Object.keys(this.orderfood).length != 0 && Object.keys(this.orderwater).length == 0) {
      this.resApi.EditDataOrdernoDrink(this.idBillEdit, this.dataOrderToCashier).subscribe(it => {
        console.log(it);
      })
    }
    else if (Object.keys(this.orderfood).length == 0 && Object.keys(this.orderwater).length != 0) {
      this.resApi.editDataOrdernofood(this.idBillEdit, this.dataOrderToCashier).subscribe(it => {
        console.log(it);
      })
    } else {
      this.resApi.editDataOrder(this.idBillEdit, this.dataOrderToCashier).subscribe(it => {
        console.log(it);

      })
    }

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
    this.router.navigate(['/cashier-order-table']);
  }

}


