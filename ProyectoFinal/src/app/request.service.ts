import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RequestService {
  public difficultyUserSelection = '';
  public numberOfQuestionsSelection = 10;
  public typeQuestionsUserSelection = '';
  public categoryQuestionsUserSelection = '';
  public typeCategories: Array <any> = [];
  constructor(private http: Http) { }

  getRequest(req: string) {
    return this.http.get(req).map((response) => response.json());
  }
  getCategories() {
    console.log('ASDAS');
    (this.getRequest('https://opentdb.com/api_category.php')).subscribe(
      (result) => {
        this.typeCategories = result.trivia_categories;
        console.log(result);
      },
      (err) => { console.log('Request Categories KO'); },
      () => { console.log('Request OK'); });
  }
}
