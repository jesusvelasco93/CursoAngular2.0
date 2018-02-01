import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {
  public difficultyUserSelection = '';
  constructor(private http: Http) { }

  getRequest(req: string) {
    return this.http.get(req).map((response) => response.json());
  }
}
