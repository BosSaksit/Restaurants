import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink-order-table',
  templateUrl: './drink-order-table.page.html',
  styleUrls: ['./drink-order-table.page.scss'],
})
export class DrinkOrderTablePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoDetailOrder(){
    this.router.navigate(['/drink-order-detail']);
  }

}
