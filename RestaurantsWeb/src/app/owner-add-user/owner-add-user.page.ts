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
      'userId': ["", Validators.required],
      'userName': ["", Validators.required],
      'userType': ["", Validators.required],
      'usernameLog': ["", Validators.required],
      'userpassLog': ["", Validators.required],
    });
  }

  get f() { return this.dataUser.controls; }


  ngOnInit() {
  }

  addDataUser() {

    if (this.dataUser.value.userId != "" && this.dataUser.value.userName != "" && this.dataUser.value.userType != "" && this.dataUser.value.usernameLog != ""
      && this.dataUser.value.userpassLog != "") {
   
      console.log(this.dataUser.value);
      this.user = this.dataUser.value;
      this.resApi.addDataUser(this.user).subscribe(it => {
        console.log(it);
        this.router.navigate(['/user-list']);
      });
  
    }
    else {
        this.submit = true;
      alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    }
  }

}
