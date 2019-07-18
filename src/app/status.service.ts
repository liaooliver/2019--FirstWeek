import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  public isStart = new Subject();
  public isBreak = new Subject();
  public counter = new Subject();

  constructor() { }

  start(){
    this.isStart.next(true)
  }

  pause(){
    this.isStart.next(false)
  }

  active(){
    this.isBreak.next(false)
  }

  break(){
    this.isBreak.next(true)
  }

}
