import { Component, OnInit, Output } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta.component';
import { RequestService } from './request.service';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [RequestService],
  animations: [
    trigger('changeMode', [
      state('show', style({ opacity: 1, display: 'inline-block', transform: 'scale(1) translateY(0)'})),
      state('hide', style({ opacity: 0, display: 'none', transform: 'scale(0.5) translateY(-130%)'})),
      transition('hide => show', animate('0.75s cubic-bezier(.2,-0.35,.53,1.37)')),
      transition('show => hide', animate('0.25s cubic-bezier(.2,-0.35,.53,1.37)')),
      transition('hide => loading', animate('0.25s')),
      transition('loading => hide', animate('0.25s')),
    ]),
  ]
})
export class AppComponent implements OnInit {
  tarjet: TarjetaComponent = new TarjetaComponent();
  score = 0;

  startGame = false;

  zonaInicio = 'hide';
  zonaLoading = 'hide';
  zonaTarjetas = 'hide';
  zonaFinJuego = 'hide';

  questions: Array<any> = [];
  numCurrentQuestion = -1;

  constructor(private service: RequestService) { }
  ngOnInit() {
    this.service.getCategories();
    const self = this;
    setTimeout(function () {
      self.startGame = true;
      self.zonaInicio = 'show';
    }, 1000);
  }

  empezar() {
    this.zonaInicio = 'hide';
    const self = this;
    setTimeout(function () {
      self.zonaLoading = 'loading';
    }, 1000);
    this.searchTarjets();
  }

  reiniciar() {
    this.score = 0;
    this.zonaFinJuego = 'hide';
    const self = this;
    setTimeout(function () {
      self.zonaInicio = 'show';
    }, 1000);
    this.numCurrentQuestion = -1;
  }
  searchTarjets() {
    const self = this;
    let url = 'https://opentdb.com/api.php?encode=url3986';
    url = url + '&amount=' + this.service.numberOfQuestionsSelection;
    url = url + '&difficulty=' + this.service.difficultyUserSelection;
    url = url + '&type=' + this.service.typeQuestionsUserSelection;
    url = url + '&category=' + this.service.categoryQuestionsUserSelection;
    console.log(this.service.numberOfQuestionsSelection);
    (this.service.getRequest(url)).subscribe(
      (result) => {
        setTimeout(function () {
          self.zonaLoading = 'hide';
          self.zonaTarjetas = 'show';
        }, 1000);
        this.questions = result.results;
        console.log(this.questions);
        this.getNextTarget();
      },
      (err) => { console.error(err); this.searchTarjets(); },
      () => { console.log('Request OK'); }
    );
  }

  nextTarget() {
    console.log(this.numCurrentQuestion, this.service.numberOfQuestionsSelection);
    if (this.numCurrentQuestion < this.service.numberOfQuestionsSelection - 1) {
      this.getNextTarget();
    } else {
      this.zonaTarjetas = 'hide';
      const self = this;
      setTimeout(function () {
        self.zonaFinJuego = 'show';
      }, 1000);
    }
  }
  
  getNextTarget() {
    // this.tarjet = new TarjetaComponent();
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
