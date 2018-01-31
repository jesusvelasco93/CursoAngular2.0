import { Component, Output } from '@angular/core';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  score = 0;
  // juegoEmpezado = false;
  // juegoTerminado = false;

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
