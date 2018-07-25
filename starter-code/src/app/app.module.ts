import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogFormComponentComponent } from './log-form-component/log-form-component.component';
import { AccessSControlLog } from './services/AccessControlLog';

@NgModule({
  declarations: [
    AppComponent,
    LogFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AccessSControlLog],
  bootstrap: [AppComponent]
})
export class AppModule { }
