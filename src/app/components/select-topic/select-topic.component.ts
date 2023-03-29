import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { FederalState, federalStates } from './federal-states';
import { SchoolType, schoolTypes } from './schoolTypes';
import { ClassLevel, classLevels } from './class-levels';
import { Topic, topics } from './topics';

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

  federalStates: FederalState[] = federalStates;

  schoolTypes: SchoolType[] = schoolTypes;
  classLevels: ClassLevel[] = classLevels;

  topics: Topic[] = topics;

  createExercise() {
    // Handle form submission here
  }
}
