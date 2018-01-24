import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PantallaComponent } from './pantalla/pantalla.component';
import { BotonesComponent } from './botones/botones.component';


@NgModule({
  declarations: [
    AppComponent,
    PantallaComponent,
    BotonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
