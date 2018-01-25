import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [RequestService]
})
export class MainComponent implements OnInit {

  result: any = null;
  mode = false;

  constructor(private service: RequestService) { }

  ngOnInit() {
  }

  searchBeers() {
    (this.service.getRequest('https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')).subscribe(
					(result) => this.result = result,
					(err) => console.error(err),
					() => console.log('Authentication Complete')
					);
  }
  changeMode() {
    this.mode ? this.mode = false : this.mode = true;
  }
}
