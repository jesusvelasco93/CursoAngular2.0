import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService]
})
export class AppComponent implements OnInit {

  urlImg = '';
  constructor(private service: RequestService) {}

  ngOnInit() {
  }

  loadImage(name, date, other) {
    const dateFormat = date.value.getFullYear() + '-' + date.value.getMonth() + 1 + '-' + date.value.getDate();
    console.log(dateFormat);
    this.urlImg = 'https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo&date=' + dateFormat; /*2018-01-25*/
    (this.service.getRequest(this.urlImg)).subscribe(
      (result) => {
        this.urlImg = result.url;
        console.log(result);
      },
      (err) => console.error(err),
      () => console.log('Authentication Complete')
    );
  }
}
