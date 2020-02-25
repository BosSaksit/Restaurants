import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';
import { summary } from '../Models/summary';

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
  day: any;
  month: any;




  constructor(public router: Router,
    public resApi: ResApiService) { }

  ngOnInit() {
    this.getDataSummary();
  }

  gotoDetailDateBill() {
    this.router.navigate(['/owner-date-bill-detail']);
  }

  getDataSummary() {
    this.resApi.getDataSummary().subscribe(it => {
      this.dataSummary = it;
      console.log(this.dataSummary);

      for (let index = 0; index < Object.keys(this.dataSummary).length; index++) {
        console.log(this.dataSummary[index]);
        if (this.dataSummary[index].foodOrder[index].orderStatus != "") {
          this.dataSummary[index].foodOrder.forEach(order => {
            // console.log(order.food);
            
            this.foodCost += order.foodCostTotal;
            // console.log(this.foodCost);
            this.foodPriceTotal += order.foodPriceTotal;
            // console.log(this.foodPriceTotal);
            this.foodProfit += order.foodProfitTotal;
            // console.log(this.foodProfit);

          });
        }
      }
    });
  }

  filterDataSummaryDate(day, month) {
    console.log(day);
    console.log(month);


    var xxx = day.substring(8, 10);
    console.log(xxx);

    var yyy = month.substring(5, 7);
    if (yyy == "02") {
      yyy = "2";

    }
    console.log(yyy);



    this.resApi.getDataSummaryDay(xxx, yyy).subscribe(it => {
      console.log(it);

    })

  }
}
