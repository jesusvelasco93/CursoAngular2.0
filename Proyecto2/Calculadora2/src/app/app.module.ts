import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResolveService } from './resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ResolveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
