import { Component } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myForm: FormGroup;
  exercise: FormGroup;

  title = 'MeinMatheTrainer';

  question = '';
  onQuestionCreated(event) {
    this.question = 'Bestimme die Lösung der Gleichung ? : 2 = 78.';
  }

  constructor() {}

  feedback = '';

  onAnswerChecked(result: boolean) {
    this.feedback = result ? 'Correct' : 'Incorrect';
  }
}
