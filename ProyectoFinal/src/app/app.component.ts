import { Component, OnInit, Output } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { RequestService } from './request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService],
})
export class AppComponent implements OnInit {
  tarjet: TarjetaComponent = new TarjetaComponent();
  score = 0;
  juegoEmpezado = false;
  juegoCargando = false;
  juegoTerminado = false;

  numberQuestions = 10;
  questions: Array<any> = [];
  numCurrentQuestion = -1;

  constructor(private service: RequestService) { }
  ngOnInit() {
    // this.juegoCargando = true;
    // this.searchTarjets();
  }

  empezar() {
    this.juegoEmpezado = false;
    this.juegoCargando = true;
    this.searchTarjets();
  }

  reiniciar() {
    this.score = 0;
    this.juegoEmpezado = false;
    this.juegoTerminado = false;
    this.juegoCargando = true;
    this.searchTarjets();
  }
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
      (err) => { console.error(err); this.searchTarjets(); },
      () => { console.log('Request OK'); }
    );
  }

  nextTarget() {
    if (this.numCurrentQuestion < this.numberQuestions) {
      this.getNextTarget();
    } else {
      this.juegoTerminado = true;
    }
  }
  
  getNextTarget() {
    this.tarjet = new TarjetaComponent();
    this.numCurrentQuestion++;
    const currentQuestion = this.questions[this.numCurrentQuestion];
    console.log('LOAD QUESTION', currentQuestion, this.numCurrentQuestion);

    this.tarjet.category = decodeURIComponent(currentQuestion.category);
    this.tarjet.type = decodeURIComponent(currentQuestion.type);
    this.tarjet.difficulty = decodeURIComponent(currentQuestion.difficulty);
    this.tarjet.question = decodeURIComponent(currentQuestion.question);
    this.tarjet.correct_answer = decodeURIComponent(currentQuestion.correct_answer);
    this.tarjet.incorrect_answers = currentQuestion.incorrect_answers;

    this.tarjet.answers = [];
    this.tarjet.answers.push(this.tarjet.correct_answer);
    for (let i = 0; i < this.tarjet.incorrect_answers.length; i++) {
      this.tarjet.answers.push(decodeURIComponent(this.tarjet.incorrect_answers[i]));
    }

    console.log(this.tarjet);
  }

  public changeScore(data: any) {
    const difficultyValue = this.calculateValueDifficulty(data.difficulty);
    if (data.correct) {
      this.score = this.score + 10 * difficultyValue;
    } else {
      this.score = this.score + -5 * difficultyValue;
    }
  }
  calculateValueDifficulty(difficulty): number {
    let difficultyValue = 0;
    switch (difficulty) {
      case 'easy': {
        difficultyValue = 1;
        break;
      }
      case 'medium': {
        difficultyValue = 2;
        break;
      }
      case 'hard': {
        difficultyValue = 3;
        break;
      }
    }
    return difficultyValue;
  }
}
