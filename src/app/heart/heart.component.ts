import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hearts',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartsComponent implements OnInit {

  heartsCount = 0;
  @Output() heartsCountEmitter = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  increaseCount() {
    this.heartsCount += 1;
    this.heartsCountEmitter.emit(this.heartsCount);
  }

  decreaseCount(){
    this.heartsCount -= 1;
    this.heartsCountEmitter.emit(this.heartsCount);
  }

  resetCount() {
    this.heartsCount = 0;
    this.heartsCountEmitter.emit(this.heartsCount);
  }

}

