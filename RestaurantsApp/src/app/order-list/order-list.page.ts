import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';
import { food } from '../Models/food';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {

  dataOrder: order[] = [];
  dataorder2: any[] = [];
  foodorder: food[] = [];
  xx: any[] = [];
  yy: any[] = [];
  statusEdit: any;
  p: number = 1;
  showDatabtn: any
  totalItem: number = 0;
  dataOrderPaid: any
  dataOrdernoPaid: any
  constructor(public router: Router,
    public resApi: ResApiService,
    public alertController: AlertController,
    public loadingController: LoadingController) {
    this.showDatabtn = "2"
  }

  ngOnInit() {
    this.getDataOrder();

  }

  ionViewWillEnter() {
    // this.checkStatusFood();
    this.getDataOrder();
  }

  gotoDetailOrder() {
    this.router.navigate(['/order-detail']);

  }

  gotoBillDetail(id) {
    console.log(id);
    // this.router.navigate(['/order-bill-detail',{idbill:id}]);

  }

  gotoEditOrder(id) {
    console.log(id);
    // this.statusEdit = "1";
    this.router.navigate(['/order-edit', { idbill: id }]);
  }
  test: food[] = []
  testorder: order[] = []
  testorder2
  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      console.log(it);

      for (let index = 0; index < Object.keys(it).length; index++) {
        this.dataOrder[index] = it[index];

        for (let index = 0; index < Object.keys(this.dataOrder).length; index++) {
          this.dataOrderPaid = this.dataOrder.filter(it => it.orderStatus == "ชำระเงินแล้ว")
        }

        for (let index = 0; index < Object.keys(this.dataOrder).length; index++) {
          this.dataOrdernoPaid = this.dataOrder.filter(it => it.orderStatus != "ชำระเงินแล้ว")
        }

        this.dataOrder.forEach(foodorder => {
          foodorder.foodOrder.forEach(it => {

            if (it.foodStatus == "") {
              foodorder.orderStatusTotal = ""
              console.log("data null");
              
            }
          })

        });

      }
      // this.dataorder2 = this.xx.sort((a, b) => a.tableNumber.localeCompare(b.tableNumber));
      // console.log(this.dataorder2);

    });
  }

  getDataOrderById(id) {
    this.router.navigate(['/order-detail', { idbill: id }]);

  }

  cancelOrder(id) {
    this.resApi.cancelOrder(id).subscribe(it => {
      console.log(it);
      this.getDataOrder();
      // this.alertConfirmCancelOrder();


    });
  }

  showData() {
    this.showDatabtn = "1";
    if (this.showDatabtn = "1") {
      this.getDataOrder();
    } else {

    }
  }
  showData2() {
    this.showDatabtn = "2";
  }

  // async alertConfirmCancelOrder() {
  //   const alert = await this.alertController.create({
  //     header: 'แจ้งเตือน',
  //     subHeader: 'โต๊ะนี้ยังไม่ได้ทำการชำระเงิน',
  //     buttons: [{
  //       text: 'Cancel',
  //       handler: () => {
  //         console.log('Cancel');
  //       }
  //     }]


  //   });
  //   await alert.present();

  // }

  // async presentLoading() {
  //   const loading = await this.loadingController.create({
  //     message: 'Please wait...',
  //     duration: 2000
  //   });
  //   await loading.present();

  //   const { role, data } = await loading.onDidDismiss();
  //   this.router.navigate(['/order-receive']);
  // }

}
