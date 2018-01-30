import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  providers: [RequestService],
})
export class TarjetaComponent implements OnInit {

  category: string = '';
  type: string = '';
  difficulty: string = '';
  question: string = '';
  answers: Array<string> = [];
  correct_answer: string = '';
  incorrect_answers: Array<string> = [];

  constructor(private service: RequestService) { }

  ngOnInit() { }

  searchTarjets() {
    (this.service.getRequest('https://opentdb.com/api.php?amount=1')).subscribe(
      (result) => {
        console.log(result);
        this.category = result.category;
        this.type = result.type;
        this.difficulty = result.difficulty;
        this.question = result.question;
        this.correct_answer = result.correct_answer;
        this.incorrect_answers = result.incorrect_answers;

        this.answers = this.incorrect_answers;
        this.answers.push(this.correct_answer);
      },
      (err) => console.error(err),
      () => console.log('Request OK')
    );
  }

}
