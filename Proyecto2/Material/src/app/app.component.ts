import { Component, OnInit } from '@angular/core';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService]
})
export class AppComponent implements OnInit {

  imgUrl = '';
  constructor(private service: RequestService) {}

  ngOnInit() {
  }

  searchBeers() {
    // const url = this.myDatepicker;
    (this.service.getRequest('this.urlNext')).subscribe(
      (result) => {

        console.log(result);
      },
      (err) => console.error(err),
      () => console.log('Authentication Complete')
    );
  }
}
