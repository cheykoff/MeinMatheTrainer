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

  federalStates: string[] = [
    'Bayern',
    'Baden-Württemberg',
    'Berlin',
    'Brandenburg',
    'Bremen',
    'Hamburg',
    'Hessen',
    'Mecklenburg-Vorpommern',
    'Niedersachsen',
    'Nordrhein-Westfalen',
    'Rheinland-Pfalz',
    'Saarland',
    'Sachsen',
    'Sachsen-Anhalt',
    'Schleswig-Holstein',
    'Thüringen',
  ];

  schoolTypes: string[] = [
    'Grundschule',
    'Gymnasium',
    'Realschule',
    'Hauptschule',
    'Gesamtschule',
    'Förderschule',
    'Berufsschule',
    'Andere Schule',
  ];

  classLevels: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ];

  topics: string[] = [
    'Natürliche und ganze Zahlen',
    'Addition und Subtraktion ganzer Zahlen',
    'Geometrische Figuren und Lagebeziehungen',
    'Multiplikation und Division ganzer Zahlen',
    'Größen',
    'Flächen',
  ];

  title = 'dynamic-question-demo';

  constructor() {
    this.myForm = new FormGroup({
      federalStates: new FormControl('', [Validators.required]),
      schoolTypes: new FormControl('', [Validators.required]),
      classLevels: new FormControl('', [Validators.required]),
      topics: new FormControl('', [Validators.required]),
    });

    this.exercise = new FormGroup({
      givenAnswer: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    this.createExercise();
  }

  question = '';
  correctAnswer = '';

  createExercise() {
    this.question = 'Bestimme die Lösung der Gleichung ? : 2 = 78.';
    this.correctAnswer = '156';
  }

  feedback = '';

  checkAnswer() {
    if (this.correctAnswer === this.exercise.value.givenAnswer.toString()) {
      this.feedback = 'Richtig!';
    } else {
      this.feedback = 'Falsch!';
    }
  }
}
