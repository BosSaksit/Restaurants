import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {}

  logout(){
    this.router.navigate(['/loginpage']);
  }
}
