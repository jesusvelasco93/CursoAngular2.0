import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messages = [{from: 'from', subject: 'my subject'},{from: 'from', subject: 'my subject'}];
}
