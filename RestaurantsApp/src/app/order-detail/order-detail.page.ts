import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { ActivatedRoute } from '@angular/router';
import { order } from '../Models/order';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  idbill:any;
  orderData:order;
  dataOrderToCashier:order;
  foodorder:any;


  constructor(public resApi:ResApiService,public activate:ActivatedRoute) { 
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
