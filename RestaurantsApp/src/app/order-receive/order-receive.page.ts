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

  dataOrderToCashier: order;
  listDataOrder: order[];
  foodorder: any;
  totalMoneyOrder: number = 0;
  btnStatus: any;
  idUser: any;

  idBillEdit: any;
  btnStatusEdit: any;

  foodCost: number = 0;
  foodProfit: number = 0;

  food: any;
  drink: any;

  constructor(public alertController: AlertController,
    public resApi: ResApiService,
    public router: Router,
    public activate: ActivatedRoute) {

    this.resApi.getDataUserById(this.resApi.userLogin.userId).subscribe(it => {
      console.log(it);
      this.idUser = it;
    });
    this.btnStatus = 1;


    this.foodCost

  }

  ngOnInit() {
    this.getDataMenu();
    this.getDataFoodFilter();
    this.listDataOrder = [];
    this.dataOrderBeforeToCashier.foodOrder = [];
    // this.getDataOrder();
  }

  ionViewWillEnter() {
    this.getDataMenu();
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
  data: food[] = null
  check() {
    console.log(this.listDataOrder);

    for (let index = 0; index < this.dataOrderBeforeToCashier.foodOrder.length; index++) {
      this.data = this.dataOrderBeforeToCashier.foodOrder.filter(it => it.foodType == "เครื่องดื่ม");
    }
    console.log(this.data);
    if (Object.keys(this.data).length == 0) {
      console.log("ไม่มี");

    }


  }
  randomIDnumber: string = ""
  numberfood: number = 1

  addFoodToOrderList(m) {
    m.foodNumber = Math.random().toString(32).substr(2, 9);


    // this.as = this.numberfood++
    // console.log(this.as);
    // m.foodNumber = this.as.toString()
    // console.log(m.foodNumber);

    // console.log(this.textidnumber);
    // console.log(this.randomIDnumber);
    // for (let index = 0; index <5; index++) {
    //   this.randomIDnumber += Math.random().toString()
    //   console.log(this.randomIDnumber);
    // }


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

  cancelMenuInOrder(i) {
    console.log(i);

    this.dataOrderBeforeToCashier.foodOrder[i].pop;

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

    // console.log(this.foodCost);
    // console.log(this.foodProfit);
  }

  minus(i) {
    if (this.dataOrderBeforeToCashier.foodOrder[i].foodAmount == 0 || this.dataOrderBeforeToCashier.foodOrder[i].foodAmount < 1) {
      this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal = 0;
      this.dataOrderBeforeToCashier.foodOrder[i].pop();
      console.log(this.dataOrderBeforeToCashier.foodOrder[i].foodPriceTotal);
      console.log(this.dataOrderBeforeToCashier.foodOrder);


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
      this.btnStatus = 2;

      this.dataOrderBeforeToCashier.foodOrder[i].foodCostTotal = parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodAmount) * parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodCost);
      // this.dataOrderBeforeToCashier.foodOrder[i].foodCost = this.foodCost;
      this.dataOrderBeforeToCashier.foodOrder[i].foodProfitTotal = parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodAmount) * parseInt(this.dataOrderBeforeToCashier.foodOrder[i].foodProfit);
    }

    console.log(this.dataOrderBeforeToCashier);
    this.dataOrderBeforeToCashier.totalMoneyOrder = this.totalMoneyOrder;


  }

  dataorder: any = null
  testdata: any[] = []
  datachecktable: any
  datacheck: order = null
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
          this.dataorder = null
          this.datachecktable = []
          this.resApi.getDataOrderBydata(data.table).subscribe(it => {
            if (Object.keys(it).length == 0) {
              console.log("pass");
              this.dataOrderBeforeToCashier.tableNumber = data.table;
              this.dataOrderBeforeToCashier.amountCustomer = data.cus;
              console.log(this.dataOrderBeforeToCashier);
              this.dataOrderToCashier = this.dataOrderBeforeToCashier;
              for (let index = 0; index < this.dataOrderBeforeToCashier.foodOrder.length; index++) {
                this.data = this.dataOrderBeforeToCashier.foodOrder.filter(it => it.foodType == "เครื่องดื่ม");
              }
              console.log(this.data);
              if (Object.keys(this.data).length == 0) {
                this.dataOrderBeforeToCashier.orderFoodType = "ไม่มีเครื่องดื่ม"
              }
              else{
                this.dataOrderBeforeToCashier.orderFoodType = ""
              }
              console.log(this.dataOrderToCashier);
              console.log(this.dataOrderBeforeToCashier.orderFoodType);

              this.dataOrderBeforeToCashier.orderReceived.push(this.idUser);

              this.resApi.addDataOrderToCashier(this.dataOrderToCashier).subscribe(it => {
                console.log(it);
                this.router.navigate(['/order-list']);
              })
            }
            else {
              for (let index = 0; index < Object.keys(it).length; index++) {
                this.testdata[index] = it[index]
              }
              for (let index = 0; index < Object.keys(this.testdata).length; index++) {
                this.datachecktable = this.testdata.filter(it => it.orderStatus == null)
              }
              console.log(this.datachecktable);
              if (Object.keys(this.datachecktable).length == 0) {
                console.log("pass");
                this.dataOrderBeforeToCashier.tableNumber = data.table;
                this.dataOrderBeforeToCashier.amountCustomer = data.cus;
                console.log(this.dataOrderBeforeToCashier);
                for (let index = 0; index < this.dataOrderBeforeToCashier.foodOrder.length; index++) {
                  this.data = this.dataOrderBeforeToCashier.foodOrder.filter(it => it.foodType == "เครื่องดื่ม");
                }
                console.log(this.data);
                if (Object.keys(this.data).length == 0) {
                  this.dataOrderBeforeToCashier.orderFoodType = "ไม่มีเครื่องดื่ม"
                }
                else{
                  this.dataOrderBeforeToCashier.orderFoodType = ""
                }
                this.dataOrderToCashier = this.dataOrderBeforeToCashier;
                console.log(this.dataOrderToCashier);
                this.dataOrderBeforeToCashier.orderReceived.push(this.idUser);
                
                console.log(this.dataOrderBeforeToCashier.orderFoodType);
                this.resApi.addDataOrderToCashier(this.dataOrderToCashier).subscribe(it => {
                  console.log(it);
                  this.router.navigate(['/order-list']);
                })
              }
              else {

                this.alertConfirmCancelOrder()
                console.log("nopass");
              }
            }

            // else {
            //   this.datachecktable = ""
            //   this.dataorder = it
            //   console.log(this.dataorder);
            //   for (let index = 0; index < this.dataorder.length; index++) {
            //     this.testdata[index] = this.dataorder[index]
            //   }
            //   for (let index = 0; index < Object.keys(this.testdata).length; index++) {
            //     this.datachecktable = this.testdata.filter(it => it.orderStatus == null)

            //   }
            //   console.log(this.datachecktable);

            //   if (this.datachecktable == "") {



            //   }
            //   else {
            //   
            //     this.dataorder = null
            //     this.datachecktable = null

            //     console.log("nopass");

            //   }
            // }


            //   if (this.dataorder != null) {
            //     if (this.dataorder.orderStatus == "ชำระเงินแล้ว") {
            //       this.dataOrderBeforeToCashier.tableNumber = data.table;
            //       this.dataOrderBeforeToCashier.amountCustomer = data.cus;
            //       console.log(this.dataOrderBeforeToCashier);
            //       this.dataOrderToCashier = this.dataOrderBeforeToCashier;
            //       console.log(this.dataOrderToCashier);
            //       this.dataOrderBeforeToCashier.orderReceived.push(this.idUser);

            //       this.resApi.addDataOrderToCashier(this.dataOrderToCashier).subscribe(it => {
            //         console.log(it);
            //         this.router.navigate(['/order-list']);
            //       })
            //     }
            //     else {
            //       console.log("nopass");


            //     }
            //   }
            //   else {


            //   }
          })

        }
      }],

    });
    await alert.present();

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

  async alertConfirmCancelOrder() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือน',
      subHeader: 'โต๊ะนี้ยังไม่ได้ทำการชำระเงิน',
      buttons: [{
        text: 'Cancel',
        handler: () => {
          console.log('Cancel');
        }
      }]


    });
    await alert.present();

  }


}
