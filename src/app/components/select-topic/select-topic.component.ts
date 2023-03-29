import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-topic',
  templateUrl: './select-topic.component.html',
  styleUrls: ['./select-topic.component.scss'],
})
export class SelectTopicComponent {
  selectedFederalState: string;
  selectedSchoolType: string;
  selectedClassLevel: string;
  selectedTopic: string;

  disableSelect = new FormControl(false);

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

  createExercise() {
    // Handle form submission here
  }
}
