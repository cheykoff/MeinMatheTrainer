import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckAnswerService {
  constructor() {}

  correctAnswer = '156';

  checkAnswer(givenAnswer: string): boolean {
    return givenAnswer === this.correctAnswer;
  }
}
