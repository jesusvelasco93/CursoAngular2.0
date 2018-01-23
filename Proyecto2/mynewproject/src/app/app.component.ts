import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<h1>Bienvenido a {{title}}</h1>
  //             <h2>{{msg}}</h2>`,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // private task: string = null;
  title = 'la clase';
  msg = 'Este es un texto de bienvenida';
  items: any[] = [{ title: 'Hacer la cama', realizada: false },
                  { title: 'Programar', realizada: false },
                  { title: 'Limpiar ordenador', realizada: false }];

  public Realizar (i) {
    this.items[i].realizada = true;
  }
  public Borrar(i) {
    this.items.splice(i, 1);
  }
}
