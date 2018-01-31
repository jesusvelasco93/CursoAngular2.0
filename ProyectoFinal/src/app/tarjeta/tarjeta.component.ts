import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  providers: [RequestService],
})
export class TarjetaComponent implements OnInit {
  @Output() tarjetaResuelta = new EventEmitter<any>();
  // @Input('init') score = null;

  juegoEmpezado = false;
  juegoCargando = false;
  juegoTerminado = false;

  numberQuestions = 10;
  questions: Array<any> = [];
  numCurrentQuestion = -1;
  
  optionSelected = null;
  solucionado = false;

  category: string = '';
  type: string = '';
  difficulty: string = '';
  question: string = '';
  answers: Array<string> = [];
  correct_answer: string = '';
  incorrect_answers: Array<string> = [];

  constructor(private service: RequestService) { }

  ngOnInit() {}

  searchTarjets() {
    console.log(this.numberQuestions);
    (this.service.getRequest('https://opentdb.com/api.php?encode=url3986&amount=' + this.numberQuestions)).subscribe(
      (result) => {
        this.juegoCargando = false;
        this.juegoEmpezado = true;
        this.questions = result.results;
        console.log(this.questions);
        this.getNextTarget();
      },
      (err) => console.error(err),
      () => console.log('Request OK')
    );
  }
  getNextTarget() {
    this.numCurrentQuestion++;
    const currentQuestion = this.questions[this.numCurrentQuestion];
    console.log('LOAD QUESTION', currentQuestion, this.numCurrentQuestion);

    this.category = decodeURIComponent(currentQuestion.category);
    this.type = decodeURIComponent(currentQuestion.type);
    this.difficulty = decodeURIComponent(currentQuestion.difficulty);
    this.question = decodeURIComponent(currentQuestion.question);
    this.correct_answer = decodeURIComponent(currentQuestion.correct_answer);
    this.incorrect_answers = currentQuestion.incorrect_answers;

    this.answers = [];
    this.answers.push(this.correct_answer);
    for (let i = 0; i < this.incorrect_answers.length; i++) {
      this.answers.push(decodeURIComponent(this.incorrect_answers[i]));
    }
  }
  evaluar() {
    const correct = this.optionSelected === this.correct_answer;
    this.tarjetaResuelta.emit({ difficulty: this.difficulty, correct: correct });
    this.solucionado = true;
  }
  next() {
    if (this.numCurrentQuestion < this.numberQuestions) {
      this.optionSelected = null;
      this.solucionado = false;
      this.getNextTarget();
    } else {
      this.juegoTerminado = true;
    }
  }
  empezar() {
    this.juegoEmpezado = false;
    this.juegoCargando = true;
    this.searchTarjets();
  }
  reiniciar() {
    this.empezar();
  }
}
