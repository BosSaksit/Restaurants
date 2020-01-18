import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResApiService } from '../ResApi/res-api.service';
import { user } from '../Models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  constructor(public router:Router,public resApi:ResApiService) { }

  user: any = null;
  pass: any = null;
  datalogin:user;

  ngOnInit() {
  }

  goOrder(){
    this.router.navigate(['/order-receive']);
  }

  goLogin(){
    console.log(this.user);
    console.log(this.pass);
    
    this.resApi.login(this.user).subscribe(it => {
      this.datalogin = it;
      console.log(this.datalogin);

      this.resApi.userLogin.userId = this.datalogin.userId;
      this.resApi.userLogin.userName = this.datalogin.userName;
      this.resApi.userLogin.userType = this.datalogin.userType;
      this.resApi.userLogin.usernameLog = this.datalogin.usernameLog;
      this.resApi.userLogin.userpassLog = this.datalogin.userpassLog;

      console.log(this.resApi.userLogin);
      



      if (this.user == null) {
        alert("กรุณากรอก Username");
      } 
      else if (this.pass == null) {
        alert("กรุณากรอก Password");
      }  

      if (this.user == this.datalogin.usernameLog && this.pass == this.datalogin.userpassLog && this.datalogin.userType == "พนักงานเสริฟ") {
        this.router.navigate(['/order-receive']);
        this.resApi.statusLogin = this.datalogin.userType;
        console.log(this.resApi.statusLogin);
        
      } else if (this.user == this.datalogin.usernameLog && this.pass == this.datalogin.userpassLog && this.datalogin.userType == "บาร์น้ำ") {
        this.router.navigate(['/drink-order-table']);

      } else if (this.user == this.datalogin.usernameLog && this.pass == this.datalogin.userpassLog && this.datalogin.userType == "เชฟ") {
        this.router.navigate(['/cook-order-table']);
      }

    });
  }

}
