import { Component, OnInit } from '@angular/core';
import { user } from "../Models/user";
import { ResApiService } from '../ResApi/res-api.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-add-user',
  templateUrl: './owner-add-user.page.html',
  styleUrls: ['./owner-add-user.page.scss'],
})
export class OwnerAddUserPage implements OnInit {

  dataUser: FormGroup;
  submit: boolean = false;
  user: user;


  constructor(public resApi: ResApiService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activate: ActivatedRoute
    ) {

    this.dataUser = this.formBuilder.group({
      'userId': [null, Validators.required],
      'userName': [null, Validators.required],
      'userType': [null, Validators.required],
      'usernameLog': [null, Validators.required],
      'userpassLog': [null, Validators.required],
    });
  }

  get f() { return this.dataUser.controls; }


  ngOnInit() {
  }

  addDataUser() {
    this.submit = true;
    console.log(this.dataUser.value);
    this.user = this.dataUser.value;
    this.resApi.addDataUser(this.user).subscribe(it => {
      console.log(it);
      this.router.navigate(['/user-list']);
    });
  }

}
