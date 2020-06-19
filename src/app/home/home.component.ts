import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  noOfHearts: Number = 0;

  constructor() { }

  ngOnInit() {
  }

  alpha(ev){
    this.noOfHearts = ev;
  }

}
