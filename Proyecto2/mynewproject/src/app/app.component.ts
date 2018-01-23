import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>Bienvenido a {{title}}</h1>
  //             <h2>{{msg}}</h2>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'la clase';
  msg = 'Este es un texto de bienvenida';
}
