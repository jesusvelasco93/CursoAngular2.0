import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule, JsonpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResolveService } from './resolve.service';
import { BeersComponent } from './beers/beers.component';
import { RequestService } from './request.service';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    BeersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
  ],
  providers: [ResolveService, RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
