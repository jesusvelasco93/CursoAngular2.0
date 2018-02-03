import { Component, OnInit, OnChanges, Output, Input, EventEmitter} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
  animations: [
    trigger('crossfade', [
      state('show', style({ opacity: 1, transform: 'scale(1)'})),
      state('hide', style({ opacity: 0, transform: 'scale(0)' })),
      transition('hide => show', animate('0.75s ease-in')),
      transition('show => hide', animate('0.175s ease-out'))
    ])]
})
export class TarjetaComponent implements OnInit, OnChanges {
  @Input() data = null;
  @Input() numQuestion = 0;
  @Output() tarjetaResuelta = new EventEmitter<any>();
  @Output() siguienteTarjeta = new EventEmitter<any>();

  optionSelected = null;
  solucionado = false;

  category: string = '';
  type: string = '';
  difficulty: string = '';
  question: string = '';
  answers: Array<string> = [];
  correct_answer: string = '';
  incorrect_answers: Array<string> = [];

  public state = 'hide';

  constructor() { }

  ngOnInit() {}

  ngOnChanges() {
    this.optionSelected = null;
    this.solucionado = false;

    this.category = this.data.category;
    this.type = this.data.type;
    this.difficulty = this.data.difficulty;
    this.question = this.data.question;
    this.answers = this.data.answers;
    this.correct_answer = this.data.correct_answer;
    this.incorrect_answers = this.data.incorrect_answers;

    this.answers = this.shuffle(this.answers);

    let self = this;
    setTimeout(function () {
      self.state = 'show';
    }, 1000);
  }

  evaluar() {
    const correct = this.optionSelected === this.correct_answer;
    this.tarjetaResuelta.emit({ difficulty: this.difficulty, correct: correct });
    this.solucionado = true;
  }
  next() {
    this.state = 'hide';
    console.log(this.state);
    this.siguienteTarjeta.emit({});
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
}
