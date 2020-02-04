import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { order } from '../Models/order';
import { food } from '../Models/food';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {

  dataOrder: order;
  dataorder2: order;
  foodorder: food[] = [];
  constructor(public router: Router, public resApi: ResApiService) {

   }

  ngOnInit() {
    this.getDataOrder();

  }

  gotoDetailOrder() {
    this.router.navigate(['/order-detail']);

  }

  gotoBillDetail(id) {
    console.log(id);
    // this.router.navigate(['/order-bill-detail',{idbill:id}]);

  }

  gotoEditOrder() {
    this.router.navigate(['/order-receive']);

  }

  getDataOrder() {
    this.resApi.getDataOrder().subscribe(it => {
      this.dataOrder = it;
      console.log(this.dataOrder);
      this.dataorder2 = this.dataOrder[0];
      console.log(this.dataorder2.foodOrder);
      this.foodorder = this.dataorder2.foodOrder;
      console.log(this.foodorder);
      // console.log(this.dataOrder[0].foodOrder[0].foodName);

    });
  }

  getDataOrderById(id) {
    this.router.navigate(['/order-detail', { idbill: id }]);

  }

  cancelOrder(id){    
    this.resApi.cancelOrder(id).subscribe(it =>{
      console.log(it);
      this.getDataOrder();

    });
  }

}
