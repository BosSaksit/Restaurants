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

  totalItem: number = 0;
  constructor(public router: Router,
    public resApi: ResApiService,
    public alertController: AlertController,
    public loadingController: LoadingController) {

  }

  ngOnInit() {
    this.getDataOrder();

  }

  ionViewWillEnter() {
    // this.checkStatusFood();
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

  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {

      for (let index = 0; index < Object.keys(it).length; index++) {
        this.dataOrder[index] = it[index];

        if (this.dataOrder[index].foodOrder[index].foodStatus != null) {
          this.dataOrder[index].orderStatusTotal = this.dataOrder[index].foodOrder[index].foodStatus;

        } else {
          console.log("data null");

        }
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

  // async alertConfirmCancelOrder() {
  //   const alert = await this.alertController.create({
  //     header: 'แจ้งเตือนการยกเลิกออเดอร์',
  //     subHeader: 'ต้องการยกเลิกหรือไม่ ?',
  //     buttons: [{
  //       text: 'Cancel',
  //       role: 'cancel',
  //       cssClass: 'secondary',
  //       handler: () => {
  //         console.log('Cancel');
  //       }
  //     }, {
  //       text: 'Ok',
  //       handler: data => {
  //         this.getDataOrder();
  //         this.presentLoading();

  //       }
  //     }],

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
