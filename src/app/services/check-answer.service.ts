import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckAnswerService {
  constructor() {}

  correctAnswer = '156';

  checkAnswer(givenAnswer: string): boolean {
    console.log('givenAnswer: ', givenAnswer);
    console.log('this.correctAnswer: ', this.correctAnswer);
    return givenAnswer === this.correctAnswer;
  }
}
