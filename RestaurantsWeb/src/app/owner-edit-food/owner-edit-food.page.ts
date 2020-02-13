import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { food } from "../Models/food";

@Component({
  selector: 'app-owner-edit-food',
  templateUrl: './owner-edit-food.page.html',
  styleUrls: ['./owner-edit-food.page.scss'],
})
export class OwnerEditFoodPage implements OnInit {

  foodid: any;
  dataFood: FormGroup;
  dataFoddx: food;
  buttonStatus: any;
  isValid: boolean;
  isValidSL:boolean;

  constructor(public activate: ActivatedRoute,
    public resApi: ResApiService,
    public formBuilder: FormBuilder,
    public router: Router
  ) {
    this.foodid = this.activate.snapshot.paramMap.get('idfood');
    this.buttonStatus = this.activate.snapshot.paramMap.get('btnstatus');

    console.log(this.foodid);
    console.log(this.buttonStatus);

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

    this.resApi.getDataFoodById(this.foodid).subscribe(it => {
      console.log(it);
      this.dataFood.patchValue(it);
      console.log(this.dataFood);
    });

    if(this.buttonStatus == "1"){
      this.isValid = true;
      this.isValidSL = true;
    }else{
      this.isValid = false;
      this.isValidSL = false;

    }
  }

  ngOnInit() {
  }

  editDataFood() {
    this.dataFoddx = this.dataFood.value;
    console.log(this.dataFoddx);

    this.resApi.editDataFood(this.foodid, this.dataFoddx).subscribe(it => {
      console.log(it);
      this.router.navigate(['/food-list'])
    })
  }

  change() {
    if (this.buttonStatus == "1") {
      this.isValid = false;
      this.isValidSL = false;
      this.buttonStatus = "2";

    } else if (this.buttonStatus == "2") {
      this.isValid = true;
      this.isValidSL = true;
      this.buttonStatus = "1";

    }
    
    console.log(this.isValid);
    console.log(this.buttonStatus);

  }

}
