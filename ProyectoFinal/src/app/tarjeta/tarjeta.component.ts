import { Component, OnInit, OnChanges, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css'],
})
export class TarjetaComponent implements OnInit, OnChanges {
  @Input() data = null;
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
  }

  evaluar() {
    const correct = this.optionSelected === this.correct_answer;
    this.tarjetaResuelta.emit({ difficulty: this.difficulty, correct: correct });
    this.solucionado = true;
  }
  next() {
    this.siguienteTarjeta.emit({});
  }
  // empezar() {
  //   this.juegoEmpezado = false;
  //   this.juegoCargando = true;
  //   this.searchTarjets();
  // }
  // reiniciar() {
  //   this.empezar();
  // }
}
