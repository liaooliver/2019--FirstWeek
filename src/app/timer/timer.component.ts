import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {

  public isActive = false;
  public isBreak = false;

  constructor(
    private _status: StatusService
  ) { }

  ngOnInit() {
    this._status.isStart.subscribe(res => {
      if(res === false){
        this.isActive = false
      }
    })
    this._status.isBreak.subscribe((res:boolean) => {
      this.isBreak = res
    })
  }

  start(){
    this.isActive = true;
    this._status.start();
  }

  pause(){
    this.isActive = false;
    this._status.pause();
  }

}
