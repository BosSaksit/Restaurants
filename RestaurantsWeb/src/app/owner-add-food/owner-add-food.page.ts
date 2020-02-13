import { Component, OnInit } from '@angular/core';
import { food } from "../Models/food";
import { ResApiService } from '../ResApi/res-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-add-food',
  templateUrl: './owner-add-food.page.html',
  styleUrls: ['./owner-add-food.page.scss'],
})
export class OwnerAddFoodPage implements OnInit {

  dataFood: FormGroup;
  submit: boolean = false;
  food: food;

  constructor(public resApi: ResApiService,
    public formBuilder: FormBuilder,
    public router:Router,
    public activate:ActivatedRoute
  ) {
    this.dataFood = this.formBuilder.group({
      'foodId': [null, Validators.required],
      'foodName': [null, Validators.required],
      'foodAmount': [null, Validators.required],
      'foodCost': [null, Validators.required],
      'foodPrice': [null, Validators.required],
      'foodProfit': [null, Validators.required],
      'foodPriceTotal': [null, Validators.required],
      'foodType': [null, Validators.required],
      'foodStatus': [null, Validators.required],
    });
  }

  get f() { return this.dataFood.controls; }

  ngOnInit() {
  }

  addDataFood() {
    this.submit = true;
    console.log(this.dataFood.value);
    this.food = this.dataFood.value;
    this.resApi.addDataFood(this.food).subscribe(it => {
      console.log(it);
      this.router.navigate(['/food-list'])
    });
  }

}
