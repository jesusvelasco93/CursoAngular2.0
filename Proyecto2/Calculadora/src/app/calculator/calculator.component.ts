import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  display = '';
  numberMemory = '';
  simbol = '';
  registro = '';
  constructor() { }

  ngOnInit() {
  }

  numberPressed(input: number) {
    this.registro = this.registro + input;
    this.display = this.display + input;
  }

  symbolPressed(symbol: string) {
    if (symbol === '=') {
      const numResult: string = this.doCalculate();
      this.registro = numResult;
      this.display = numResult;
    } else {
      if (this.numberMemory !== '') {
        this.numberMemory = this.doCalculate();
      } else {
        this.numberMemory = this.display;
      }
      this.simbol = symbol;
      this.registro = this.registro + symbol;
      this.display = '';
    }
  }

  doCalculate(): string {
    let number = 0;
    if (this.simbol === '+') {
      number = Number(this.numberMemory) + Number(this.display);
    } else if (this.simbol === '-') {
      number = Number(this.numberMemory) - Number(this.display);
    } else if (this.simbol === '*') {
      number = Number(this.numberMemory) * Number(this.display);
    } else if (this.simbol === '/') {
      number = Number(this.numberMemory) / Number(this.display);
    }
    return number.toString();
  }

  reset() {
    this.display = '';
    this.numberMemory = '';
    this.simbol = '';
    this.registro = '';
  }
}
