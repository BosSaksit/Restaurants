import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';

@Component({
  selector: 'app-drink-order-detail',
  templateUrl: './drink-order-detail.page.html',
  styleUrls: ['./drink-order-detail.page.scss'],
})
export class DrinkOrderDetailPage implements OnInit {

  idbill:any;
  orderData:order;
  dataOrderToCashier:order;
  foodorder:any;

  constructor(public activate:ActivatedRoute,public resApi:ResApiService) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
    this.getOrderById();
   }

  ngOnInit() {
  }

  getOrderById(){
    this.resApi.getDataOrderById(this.idbill).subscribe(it =>{
      this.orderData = it;
      console.log(this.orderData);
      this.dataOrderToCashier = this.orderData;
      console.log(this.dataOrderToCashier.foodOrder);
      this.foodorder = this.dataOrderToCashier.foodOrder;
      console.log(this.foodorder);
      
      // this.foodorder = this.dataOrderToCashier.foodOrder;
      // console.log(this.foodorder);
      // console.log(this.dataOrder[0].foodOrder[0].foodName);
      
    });
  }

}
