import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RequestService {

  constructor(private http: Http) { }

  getBeers () {
    // http.get();
  }
}
