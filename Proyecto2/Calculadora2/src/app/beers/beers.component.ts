import { Component, OnInit } from '@angular/core';
import { RequestService } from './../request.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  constructor(private service: RequestService) { }

  ngOnInit() {
  }

}
