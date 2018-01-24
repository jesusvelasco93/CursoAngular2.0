import { Injectable } from '@angular/core';

@Injectable()
export class ResolveService {

  constructor() { }

  resolveOperation (firstFigure: number, secondFigure: number, operator: string): number {
    let result: number;
    if (operator === '+') {
      result = firstFigure + secondFigure;
    } else if (operator === '-') {
      result = firstFigure - secondFigure;
    } else if (operator === '*') {
      result = firstFigure * secondFigure;
    } else if (operator === '/') {
      result = firstFigure / secondFigure;
    }
    return result;
  }
}
