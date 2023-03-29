export interface Topic {
  topic: string;
  subTopics?: string[];
}

export const topics: Topic[] = [
  {
    topic: 'Grundrechenarten',
    subTopics: ['Addition', 'Subtraktion', 'Multiplikation', 'Division'],
  },
  {
    topic: 'Bruchrechnen',
    subTopics: [
      'Addition',
      'Subtraktion',
      'Multiplikation',
      'Division von Brüchen',
    ],
  },
  {
    topic: 'Dezimalzahlen',
    subTopics: ['Grundlagen', 'Umwandlung zwischen Brüchen und Dezimalzahlen'],
  },
  {
    topic: 'Prozentrechnen',
    subTopics: ['Grundlagen', 'Berechnungen', 'Proportionalität'],
  },
  {
    topic: 'Geometrie',
    subTopics: [
      'Grundlagen',
      'Flächenberechnung',
      'Volumenberechnung',
      'Winkelfunktionen',
    ],
  },
  {
    topic: 'Algebra',
    subTopics: ['Grundlagen', 'Gleichungen', 'Ungleichungen', 'Funktionen'],
  },
  {
    topic: 'Analysis',
    subTopics: ['Differenzial- und Integralrechnung', 'Extremwertprobleme'],
  },
  {
    topic: 'Statistik',
    subTopics: ['Grundlagen', 'Datenanalyse', 'Wahrscheinlichkeitsrechnung'],
  },
  {
    topic: 'Finanzmathematik',
    subTopics: ['Zinsrechnung', 'Investitionsrechnung', 'Amortisation'],
  },
  {
    topic: 'Andere Themen',
  },
];
