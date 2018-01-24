import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [RequestService]
})
export class MainComponent implements OnInit {

  result: any;

  constructor(private service: RequestService) { }

  ngOnInit() {
  }

  searchBeers() {
    (this.service.getRequest('https://api.punkapi.com/v2/beers')).subscribe(
					(result) => this.result = result,
					(err) => console.error(err),
					() => console.log('Authentication Complete')
					);
  }

}
