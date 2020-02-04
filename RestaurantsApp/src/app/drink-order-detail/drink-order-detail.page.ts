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

  idbill: any;
  orderData: order;
  dataOrderToCashier: order;
  foodorder: any;
  orderCook: any;

  constructor(public activate: ActivatedRoute, public resApi: ResApiService) {
    this.idbill = this.activate.snapshot.paramMap.get('idbill');
    console.log(this.idbill);
    this.getOrderById();
  }

  ngOnInit() {
  }

  getOrderById() {
    this.resApi.getDataOrderById(this.idbill).subscribe(it => {
      this.orderData = it;
      console.log(this.orderData.tableNumber);

      for (let index = 0; index < Object.keys(this.orderData).length; index++) {
        this.orderCook = this.orderData.foodOrder.filter(it => it.foodType == "เครื่องดื่ม");
        console.log(this.orderCook);
      }
    });
  }

}
