import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cook-order-table',
  templateUrl: './cook-order-table.page.html',
  styleUrls: ['./cook-order-table.page.scss'],
})
export class CookOrderTablePage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoDetailOrder(){
    this.router.navigate(['/cook-order-detail']);
  }

}
