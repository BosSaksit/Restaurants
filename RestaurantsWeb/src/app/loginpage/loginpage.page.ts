import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { user } from '../Models/user';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {

  user: any = null;
  pass: any = null;
  dataUser: user;

  datalogin: user;

  constructor(public router: Router, public resApi: ResApiService) { }

  ngOnInit() {
    
  }

  login() {
    // this.router.navigate(['/owner-dashboard']);
    this.resApi.login(this.user).subscribe(it => {
      this.datalogin = it;
      console.log(this.datalogin);

      if (this.user == null) {
        alert("กรุณากรอก Username");
      } 
      else if (this.pass == null) {
        alert("กรุณากรอก Password");
      }  

      if (this.user == this.datalogin.usernameLog && this.pass == this.datalogin.userpassLog && this.datalogin.userType == "ผู้จัดการร้าน") {
        this.router.navigate(['/owner-dashboard']);
        this.resApi.statusLogin = this.datalogin.userType;
        console.log(this.resApi.statusLogin);
        
      } else if (this.user == this.datalogin.usernameLog && this.pass == this.datalogin.userpassLog && this.datalogin.userType == "แคชเชียร์") {
        this.router.navigate(['/cashier-order-table']);
      }

    })
  }



}
