import { Component, OnInit } from '@angular/core';
import { RequestService } from './../request.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

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
