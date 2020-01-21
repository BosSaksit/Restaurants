import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';

@Component({
  selector: 'app-drink-order-table',
  templateUrl: './drink-order-table.page.html',
  styleUrls: ['./drink-order-table.page.scss'],
})
export class DrinkOrderTablePage implements OnInit {

  constructor(public router:Router,public resApi:ResApiService) { }

  dataOrder:order

  ngOnInit() {
    this.getDataOrder();

  }

  gotoDetailOrder(id){
    this.router.navigate(['/drink-order-detail',{idbill:id}]);
  }

  
  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      console.log(this.dataOrder);
      // this.dataorder2 = this.dataOrder[0];
      // console.log(this.dataorder2.foodOrder);
      // this.foodorder = this.dataorder2.foodOrder;
      // console.log(this.foodorder);
      // console.log(this.dataOrder[0].foodOrder[0].foodName);

    });
  }

}
