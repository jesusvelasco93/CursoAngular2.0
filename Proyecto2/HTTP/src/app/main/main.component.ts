import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [RequestService]
})
export class MainComponent implements OnInit {

  result: any = [];
  urlNext: string = 'https://swapi.co/api/people?format=json';
  httpRequestInCurse = false;

  constructor(private service: RequestService) { 
    // window.onscroll = () => {
    //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //     // you're at the bottom of the page
    //     if (!this.httpRequestInCurse){
    //       this.httpRequestInCurse = true;
    //       this.searchBeers();
    //       // console.log('Scroll in the bottom');
    //     }
    //   }
    // }
  }

  ngOnInit() {
  }

  searchBeers() {
    (this.service.getRequest(this.urlNext)).subscribe(
      (result) => {
                    this.httpRequestInCurse = false;
                    this.result = this.result.concat(result.results);
                    this.urlNext = result.next;
                    console.log(result.results, this.result);
                  },
					(err) => console.error(err),
					() => console.log('Authentication Complete')
					);
  }
}
