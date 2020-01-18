import { Component, OnInit } from '@angular/core';
import { ResApiService } from '../ResApi/res-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { user } from '../Models/user';

@Component({
  selector: 'app-owner-edit-user',
  templateUrl: './owner-edit-user.page.html',
  styleUrls: ['./owner-edit-user.page.scss'],
})
export class OwnerEditUserPage implements OnInit {

  dataUser: FormGroup;
  submit: boolean = false;
  userx: user;
  userid: any;
  buttonStatus: any;
  isValid: boolean;
  isValidSL:boolean;

  constructor(public resApi: ResApiService,
    public formBuilder: FormBuilder,
    public router: Router,
    public activate: ActivatedRoute
  ) {

    this.userid = this.activate.snapshot.paramMap.get('iduser');
    this.buttonStatus = this.activate.snapshot.paramMap.get('btnstatus');
    console.log(this.buttonStatus);
    

    this.dataUser = this.formBuilder.group({
      'userId': [null, Validators.required],
      'userName': [null, Validators.required],
      'userType': [null, Validators.required],
      'usernameLog': [null, Validators.required],
      'userpassLog': [null, Validators.required],
    });

    this.resApi.getDataUserById(this.userid).subscribe(it => {
      console.log(it);
      this.dataUser.patchValue(it);
      console.log(this.dataUser);
    });

    
    if(this.buttonStatus == "1"){
      this.isValid = true;
      this.isValidSL = true;
    }else{
      this.isValid = false;
      this.isValidSL = false;

    }
  }

  get f() { return this.dataUser.controls; }

  ngOnInit() {
  }

  editDataUser() {
    this.userx = this.dataUser.value;
    console.log(this.userx);

    this.resApi.EditDataUser(this.userid, this.userx).subscribe(it => {
      console.log(it);
      this.router.navigate(['/user-list'])
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
