import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';

@Component({
  selector: 'app-cook-order-table',
  templateUrl: './cook-order-table.page.html',
  styleUrls: ['./cook-order-table.page.scss'],
})
export class CookOrderTablePage implements OnInit {

  constructor(public router: Router, public resApi: ResApiService) { }

  dataOrder: order;
  cookOrder: order[] = [];

  ngOnInit() {
    this.getDataOrder();
  }

  gotoDetailOrder(id) {
    this.router.navigate(['/cook-order-detail', { idbill: id }]);
  }

  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      console.log(this.dataOrder);
    });
  }

  // getDataFoodFilter() {
  //   this.resApi.getDataFood().subscribe((it) => {
  //     this.dataMenu = it;
  //     for (var i in it) {
  //       this.dataMenu2[i] = this.dataMenu[i];
  //       console.log(this.dataMenu2);

  //     }
  //   });
  // }

  // yourFunction() {
  //   this.dataMenu2 = this.dataMenu2.filter(it => it.foodType == this.statusoc);
  //   console.log(this.dataMenu2);
  //   console.log(this.statusoc);
  // }

}
