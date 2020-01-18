import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  idbill:any;

  constructor(public resApi:ResApiService,public activate:ActivatedRoute) { 
   this.idbill = this.activate.snapshot.paramMap.get('idbill');
   console.log(this.idbill);
   
  }

  ngOnInit() {
  }

}
