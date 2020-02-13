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

  dataOrder:order;
  cookStatus:any;

  ngOnInit() {
    this.getDataOrder();

  }

  ionViewWillEnter(){
    this.getDataOrder();
    this.checkStatusFood();
  }


  gotoDetailOrder(id){
    this.router.navigate(['/drink-order-detail',{idbill:id}]);
  }

  
  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      console.log(this.dataOrder);
    });
  }

  checkStatusFood() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      console.log(this.dataOrder);
      for (let index = 0; index < Object.keys(this.dataOrder).length; index++) {
        if (this.dataOrder[index].foodOrder[index].foodStatus != "") {
          this.dataOrder[index].orderStatusFood = this.dataOrder[index].foodOrder[index].foodStatus;

        } else {
          console.log("data null");

        }
      }
    });

  }

}
