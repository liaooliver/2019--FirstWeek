import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
})
export class TimerComponent implements OnInit {

  public isActive = false;
  public isBreak = false;
  public cx = 270;
  public cy = 270;
  public radius = 258;
  public circumference = this.radius * 2 * Math.PI;
  public Dasharray = [this.circumference, this.circumference];
  public Dashoffset = this.circumference;
  public stroke = '#FF4384';
  

  constructor(
    private _status: StatusService
  ) { }

  ngOnInit() {
    this._status.isStart.subscribe(res => {
      console.log(res, this.isActive)
      if(res === false){
        this.isActive = false
      }
    })
    this._status.isBreak.subscribe((res:boolean) => {
      this.isBreak = res
    })
    this._status.counter.subscribe(res=>{
      this.setProgress(res)
    })
  }

  setProgress(percent) {
    console.log(percent)
    const offset = this.circumference - percent * this.circumference;
    this.Dashoffset = offset;
    this.isBreak ? this.stroke = '#00A7FF' : this.stroke = '#FF4384';
    if (percent === 1) this.Dashoffset = this.circumference
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
