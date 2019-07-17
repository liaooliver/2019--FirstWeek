import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './sideBar/sideBar.component';
import { StatusComponent } from './status/status.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
   declarations: [
      AppComponent,
      SideBarComponent,
      StatusComponent,
      TimerComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
