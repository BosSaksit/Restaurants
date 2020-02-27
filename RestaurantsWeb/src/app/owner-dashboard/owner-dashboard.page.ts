import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';
import { summary } from '../Models/summary';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.page.html',
  styleUrls: ['./owner-dashboard.page.scss'],
})
export class OwnerDashboardPage implements OnInit {

  dataSummary: summary;
  dataSummary2: summary[] = [];
  foodCost: number = 0;
  foodPriceTotal: number = 0;
  foodProfit: number = 0;
  discount: number = 0;
  day: any;
  month: any;




  constructor(public router: Router,
    public resApi: ResApiService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.getDataSummary();
  }

  // ionViewWillEnter(day, month) {
  //   this.filterDataSummaryDate(day, month);
  // }
  gotoDetailDateBill() {
    this.router.navigate(['/owner-date-bill-detail']);
  }


  filterDataSummaryDate(day, month) {
    console.log(day);
    console.log(month);
    var xxx = day.substring(8, 10);
    console.log(xxx);

    var yyy = month.substring(5, 7);
    if (yyy == "01") {
      yyy = "1";
    } else if (yyy == "02") {
      yyy = "2";

    }
    else if (yyy == "03") {
      yyy = "3";

    }
    else if (yyy == "04") {
      yyy = "4";

    }
    else if (yyy == "05") {
      yyy = "6";

    }
    else if (yyy == "07") {
      yyy = "7";

    }
    else if (yyy == "08") {
      yyy = "8";

    }
    else if (yyy == "09") {
      yyy = "9";

    }

    console.log(yyy);
    this.resApi.getDataSummaryDay(xxx, yyy).subscribe(it => {
      this.dataSummary = it;
      console.log(this.dataSummary);
      for (let index = 0; index < Object.keys(this.dataSummary).length; index++) {
        console.log(this.dataSummary[index]);
        if (this.dataSummary[index].foodOrder[index].orderStatus != "") {
          this.foodPriceTotal += this.dataSummary[index].totalMoneyOrder;
          this.discount += this.dataSummary[index].moneyDiscount;

          this.dataSummary[index].foodOrder.forEach(order => {
            // console.log(order.food);

            this.foodCost += order.foodCostTotal;
            // console.log(this.foodCost);

            // console.log(this.foodPriceTotal);
            this.foodProfit = this.foodPriceTotal - this.foodCost;
            // console.log(this.foodProfit);

          });
        }


        // if(this.dataSummary[index].moneyDiscount != null){
        //   this.foodPriceTotal - this.dataSummary[index].moneyDiscount
        // }
      }


    });
  }

  getDataSummary() {
    this.resApi.getDataSummary().subscribe(it => {
      this.dataSummary = it;
      console.log(this.dataSummary);

      for (let index = 0; index < Object.keys(this.dataSummary).length; index++) {
        console.log(this.dataSummary[index]);
        if (this.dataSummary[index].foodOrder[index].orderStatus != "") {
          this.foodPriceTotal += this.dataSummary[index].totalMoneyOrder;
          this.discount += this.dataSummary[index].moneyDiscount;

          this.dataSummary[index].foodOrder.forEach(order => {
            // console.log(order.food);

            this.foodCost += order.foodCostTotal;
            // console.log(this.foodCost);

            // console.log(this.foodPriceTotal);
            this.foodProfit = this.foodPriceTotal - this.foodCost;
            // console.log(this.foodProfit);

          });
        }
        // if(this.dataSummary[index].moneyDiscount != null){
        //   this.foodPriceTotal - this.dataSummary[index].moneyDiscount
        // }
      }
    });
  }


  Clear() {
    this.resApi.clearOff().subscribe(it => {
      console.log(it);

    })
  }

  async alertClear() {
    const alert = await this.alertController.create({
      header: 'แจ้งเตือนการเคลียร์ยอด',

      buttons: [{
        text: 'Ok',
        handler: data => {
          this.Clear();
          this.router.navigate(['/owner-dashboard']);

        }
      }],

    });
    await alert.present();

  }


}
