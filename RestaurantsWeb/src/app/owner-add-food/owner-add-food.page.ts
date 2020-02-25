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
      'foodAmount': [1, Validators.required],
      'foodCost': [null, Validators.required],
      'foodPrice': [null, Validators.required],
      'foodProfit': [null, Validators.required],
      'foodPriceTotal': [0, Validators.required],
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
    console.log(this.dataFood.value.foodPrice);
    
    this.dataFood.value.foodProfit = this.dataFood.value.foodPrice - this.dataFood.value.foodCost;
    this.dataFood.value.foodPriceTotal = this.dataFood.value.foodPrice;
    console.log(this.dataFood.value.foodPriceTotal);
    
    this.food = this.dataFood.value;
    console.log(food);
    
    this.resApi.addDataFood(this.food).subscribe(it => {
      console.log(it);
      this.router.navigate(['/food-list'])
    });
  }

}
