import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
})
export class StatusComponent implements OnInit {

  public isBreak = false;
  public totalTime: number = 1500;
  public type = "active";
  public showTime = "25:00";
  public count;
  public interval;


  constructor(
    private _status: StatusService
  ) { }

  ngOnInit() {
    this._status.isStart.subscribe(res => {
      if(res === true){
        this.interval = setInterval(()=>{
          this.activeTimer()
        },50)
      }else{
        this.pasue();
      }
    })
    this._status.isBreak.subscribe((res:boolean)=>{
      this.isBreak = res;
    })
  }

  pasue(){
    clearInterval(this.interval);
  }

  activeTimer(){

    this.totalTime = this.totalTime - 1;
    let min = Math.floor(this.totalTime / 60);
    let sec = this.totalTime % 60;
    this.showTime = `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;

    if (this.type === 'active'){
      let total = 1500;
      let percent = (total - this.totalTime) / total;
      this._status.counter.next(percent);
    }

    if (this.type === 'break') {
      let total = 300;
      let percent = (total - this.totalTime) / total;
      this._status.counter.next(percent);
    }

    if (this.totalTime === 0){

      if (this.type === 'active'){
        clearInterval(this.interval);
        this._status.pause();
        this.totalTime = 300;
        this.showTime = "05:00";
        this.type = 'break';
        this._status.break();
        return;
      }

      if(this.type === 'break'){
        clearInterval(this.interval);
        this._status.pause();
        this.totalTime = 1500;
        this.showTime = "25:00";
        this.type = 'active';
        this._status.active();
        return;
      }
    }
  }
}
