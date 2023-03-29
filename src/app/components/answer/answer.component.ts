import { Component, Output, EventEmitter } from '@angular/core';

import { CheckAnswerService } from '../../services/check-answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],
})
export class AnswerComponent {
  givenAnswer = '';
  @Output() answerChecked = new EventEmitter<boolean>();

  constructor(private _checkAnswerService: CheckAnswerService) {}

  checkAnswer() {
    this.answerChecked.emit(
      this._checkAnswerService.checkAnswer(this.givenAnswer)
    );
  }
}
