import { Component, OnInit } from '@angular/core';
import { user } from "../Models/user";
import { ResApiService } from '../ResApi/res-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {

  dataUser: any;
  buttonStatus:any;

  constructor(public resApi: ResApiService,public router:Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.getDataUser();
  }

  
  public gotoDetailUser(id) {
    this.buttonStatus = "1";
    this.router.navigate(['/owner-edit-user', { iduser: id,btnstatus:this.buttonStatus}]);
  }

  public gotoEditUser(id) {
    this.buttonStatus = "2";
    this.router.navigate(['/owner-edit-user', { iduser: id,btnstatus:this.buttonStatus}]);  
  }


  getDataUser() {
    this.resApi.getDataUser().subscribe(it => {
      this.dataUser = it;
      console.log(this.dataUser);
    })
  }

  deleteDataUser(id) {
    this.resApi.deleteDataUser(id).subscribe(it => {
      console.log();
      this.getDataUser();
    })
  }

}
