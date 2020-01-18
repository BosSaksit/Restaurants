import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.page.html',
  styleUrls: ['./food-list.page.scss'],
})
export class FoodListPage implements OnInit {

  dataFood: any;
  buttonStatus: any;

  constructor(public resApi: ResApiService, public router: Router) { }

  ngOnInit() {
    this.getDataFood();
  }

  ionViewDidEnter() {
    this.getDataFood();
  }

  getDataFood() {
    this.resApi.getDataFood().subscribe(it => {
      this.dataFood = it;
      console.log(this.dataFood);

    });
  }

  public gotoDetailFood(id) {
    this.buttonStatus = "1";
    this.router.navigate(['/owner-edit-food', { idfood: id,btnstatus:this.buttonStatus}]);
  }

  public editDataFood(id) {
    this.buttonStatus = "2";
    this.router.navigate(['/owner-edit-food', { idfood: id,btnstatus:this.buttonStatus}]);  
  }

  deleteDataFood(id) {
    this.resApi.DeleteDataFood(id).subscribe(it => {
      console.log();
      this.getDataFood();
    })
  }



}
