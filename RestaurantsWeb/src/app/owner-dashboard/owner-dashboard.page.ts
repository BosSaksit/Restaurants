import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.page.html',
  styleUrls: ['./owner-dashboard.page.scss'],
})
export class OwnerDashboardPage implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

  gotoDetailDateBill(){
    this.router.navigate(['/owner-date-bill-detail']);
  }
}
