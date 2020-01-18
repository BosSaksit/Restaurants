import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cashier-money-table',
  templateUrl: './cashier-money-table.page.html',
  styleUrls: ['./cashier-money-table.page.scss'],
})
export class CashierMoneyTablePage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }

  gotoBillDetail(){
    this.router.navigate(['/cashier-bill-detail']);
  }
}
