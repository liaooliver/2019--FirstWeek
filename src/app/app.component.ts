import { Component, OnInit } from '@angular/core';
import { StatusService } from './status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  public isBreak = false;

  constructor(
    private _status: StatusService
  ){}

  ngOnInit(){
    this._status.isBreak.subscribe((res:boolean) => {
      this.isBreak = res
    })
  }
}
