import type { QuestionType } from "../types";

const questions: QuestionType[] = [
  {
    question: {
      de: "In Deutschland dürfen Menschen offen etwas gegen die Regierung sagen, weil ...",
      en: "In Germany, people are allowed to speak openly against the government because ...",
    },
    options: [
      {
        de: "hier Religionsfreiheit gilt.",
        en: "religious freedom applies here.",
        id: "0-0",
      },
      {
        de: "die Menschen Steuern zahlen.",
        en: "people pay taxes.",
        id: "0-1",
      },
      {
        de: "die Menschen das Wahlrecht haben.",
        en: "people have the right to vote.",
        id: "0-2",
      },
      {
        de: "hier Meinungsfreiheit gilt.",
        en: "freedom of expression applies here.",
        id: "0-3",
      },
    ],
    answer: "hier Meinungsfreiheit gilt.",
    id: "0",
  },
  {
    question: {
      de: "In Deutschland können Eltern bis zum 14. Lebensjahr ihres Kindes entscheiden, ob es in der Schule am",
      en: "In Germany, parents can decide until their child's 14th birthday whether the child attends school for",
    },
    options: [
      {
        de: "Geschichtsunterricht teilnimmt.",
        en: "history lessons.",
        id: "1-0",
      },
      {
        de: "Religionsunterricht teilnimmt.",
        en: "religious education.",
        id: "1-1",
      },
      {
        de: "Politikunterricht teilnimmt.",
        en: "politics lessons.",
        id: "1-2",
      },
      {
        de: "Sprachunterricht teilnimmt.",
        en: "language lessons.",
        id: "1-3",
      },
    ],
    answer: "Religionsunterricht teilnimmt.",
    id: "1",
  },
  {
    question: {
      de: "Deutschland ist ein Rechtsstaat. Was ist damit gemeint?",
      en: "Germany is a constitutional state. What does that mean?",
    },
    options: [
      {
        de: "Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.",
        en: "All residents and the state must abide by the laws.",
        id: "2-0",
      },
      {
        de: "Der Staat muss sich nicht an die Gesetze halten.",
        en: "The state does not have to abide by the laws.",
        id: "2-1",
      },
      {
        de: "Nur Deutsche müssen die Gesetze befolgen.",
        en: "Only Germans must obey the laws.",
        id: "2-2",
      },
      {
        de: "Die Gerichte machen die Gesetze.",
        en: "The courts make the laws.",
        id: "2-3",
      },
    ],
    answer:
      "Alle Einwohnerinnen/Einwohner und der Staat müssen sich an die Gesetze halten.",
    id: "2",
  },
  {
    question: {
      de: "Welches Recht gehört zu den Grundrechten in Deutschland?",
      en: "Which right is among the fundamental rights in Germany?",
    },
    options: [
      {
        de: "Waffenbesitz",
        en: "Gun ownership",
        id: "3-0",
      },
      {
        de: "Faustrecht",
        en: "Law of the fist",
        id: "3-1",
      },
      {
        de: "Meinungsfreiheit",
        en: "Freedom of expression",
        id: "3-2",
      },
      {
        de: "Selbstjustiz",
        en: "Vigilantism",
        id: "3-3",
      },
    ],
    answer: "Meinungsfreiheit",
    id: "3",
  },
  {
    question: {
      de: "Wahlen in Deutschland sind frei. Was bedeutet das?",
      en: "Elections in Germany are free. What does that mean?",
    },
    options: [
      {
        de: "Man darf Geld annehmen, wenn man dafür eine bestimmte Kandidatin/einen bestimmten Kandidaten wählt.",
        en: "You are allowed to accept money if you vote for a certain candidate.",
        id: "4-0",
      },
      {
        de: "Nur Personen, die noch nie im Gefängnis waren, dürfen wählen.",
        en: "Only people who have never been to prison are allowed to vote.",
        id: "4-1",
      },
      {
        de: "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
        en: "The voter may neither be influenced nor forced to cast a specific vote and must not suffer any disadvantages due to the election.",
        id: "4-2",
      },
      {
        de: "Alle wahlberechtigten Personen müssen wählen.",
        en: "All eligible voters must vote.",
        id: "4-3",
      },
    ],
    answer:
      "Die Wählerin/der Wähler darf bei der Wahl weder beeinflusst noch zu einer bestimmten Stimmabgabe gezwungen werden und keine Nachteile durch die Wahl haben.",
    id: "4",
  },
  {
    question: {
      de: "Wie heißt die deutsche Verfassung?",
      en: "What is the name of the German constitution?",
    },
    options: [
      {
        de: "Volksgesetz",
        en: "People's Law",
        id: "5-0",
      },
      {
        de: "Bundesgesetz",
        en: "Federal Law",
        id: "5-1",
      },
      {
        de: "Deutsches Gesetz",
        en: "German Law",
        id: "5-2",
      },
      {
        de: "Grundgesetz",
        en: "Basic Law",
        id: "5-3",
      },
    ],
    answer: "Grundgesetz",
    id: "5",
  },
  {
    question: {
      de: "Welches Recht gehört zu den Grundrechten, die nach der deutschen Verfassung garantiert werden? Das Recht auf",
      en: "Which right is among the fundamental rights guaranteed by the German constitution? The right to",
    },
    options: [
      {
        de: "Glaubens- und Gewissensfreiheit",
        en: "freedom of belief and conscience",
        id: "6-0",
      },
      {
        de: "Unterhaltung",
        en: "entertainment",
        id: "6-1",
      },
      {
        de: "Arbeit",
        en: "work",
        id: "6-2",
      },
      {
        de: "Wohnung",
        en: "housing",
        id: "6-3",
      },
    ],
    answer: "Glaubens- und Gewissensfreiheit",
    id: "6",
  },
  {
    question: {
      de: "Was steht nicht im Grundgesetz von Deutschland?",
      en: "What is not stated in the Basic Law of Germany?",
    },
    options: [
      {
        de: "Die Würde des Menschen ist unantastbar.",
        en: "Human dignity is inviolable.",
        id: "7-0",
      },
      {
        de: "Alle sollen gleich viel Geld haben.",
        en: "Everyone should have the same amount of money.",
        id: "7-1",
      },
      {
        de: "Jeder Mensch darf seine Meinung sagen.",
        en: "Every person may express their opinion.",
        id: "7-2",
      },
      {
        de: "Alle sind vor dem Gesetz gleich.",
        en: "All are equal before the law.",
        id: "7-3",
      },
    ],
    answer: "Alle sollen gleich viel Geld haben.",
    id: "7",
  },
  {
    question: {
      de: "Welches Grundrecht gilt in Deutschland nur für Ausländerinnen/Ausländer? Das Grundrecht auf ...",
      en: "Which fundamental right in Germany applies only to foreigners? The fundamental right to ...",
    },
    options: [
      {
        de: "Schutz der Familie",
        en: "protection of the family",
        id: "8-0",
      },
      {
        de: "Menschenwürde",
        en: "human dignity",
        id: "8-1",
      },
      {
        de: "Asyl",
        en: "asylum",
        id: "8-2",
      },
      {
        de: "Meinungsfreiheit",
        en: "freedom of expression",
        id: "8-3",
      },
    ],
    answer: "Asyl",
    id: "8",
  },
  {
    question: {
      de: "Was ist mit dem deutschen Grundgesetz vereinbar?",
      en: "What is compatible with the German Basic Law?",
    },
    options: [
      {
        de: "die Prügelstrafe",
        en: "corporal punishment",
        id: "9-0",
      },
      {
        de: "die Folter",
        en: "torture",
        id: "9-1",
      },
      {
        de: "die Todesstrafe",
        en: "the death penalty",
        id: "9-2",
      },
      {
        de: "die Geldstrafe",
        en: "the fine",
        id: "9-3",
      },
    ],
    answer: "die Geldstrafe",
    id: "9",
  },
  {
    question: {
      de: "Wie wird die Verfassung der Bundesrepublik Deutschland genannt?",
      en: "What is the constitution of the Federal Republic of Germany called?",
    },
    options: [
      {
        de: "Grundgesetz",
        en: "Basic Law",
        id: "10-0",
      },
      {
        de: "Bundesverfassung",
        en: "Federal Constitution",
        id: "10-1",
      },
      {
        de: "Gesetzbuch",
        en: "Law Book",
        id: "10-2",
      },
      {
        de: "Verfassungsvertrag",
        en: "Constitutional Treaty",
        id: "10-3",
      },
    ],
    answer: "Grundgesetz",
    id: "10",
  },
  {
    question: {
      de: "Eine Partei im Deutschen Bundestag will die Pressefreiheit abschaffen. Ist das möglich?",
      en: "A party in the German Bundestag wants to abolish freedom of the press. Is that possible?",
    },
    options: [
      {
        de: "Ja, wenn mehr als die Hälfte der Abgeordneten im Bundestag dafür sind.",
        en: "Yes, if more than half of the members of the Bundestag are in favour.",
        id: "11-0",
      },
      {
        de: "Ja, aber dazu müssen zwei Drittel der Abgeordneten im Bundestag dafür sein.",
        en: "Yes, but two-thirds of the members of the Bundestag must be in favour.",
        id: "11-1",
      },
      {
        de: "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
        en: "No, because freedom of the press is a fundamental right. It cannot be abolished.",
        id: "11-2",
      },
      {
        de: "Nein, denn nur der Bundesrat kann die Pressefreiheit abschaffen.",
        en: "No, because only the Bundesrat can abolish freedom of the press.",
        id: "11-3",
      },
    ],
    answer:
      "Nein, denn die Pressefreiheit ist ein Grundrecht. Sie kann nicht abgeschafft werden.",
    id: "11",
  },
  {
    question: {
      de: 'Im Parlament steht der Begriff "Opposition" für ...',
      en: 'In parliament, the term "opposition" stands for ...',
    },
    options: [
      {
        de: "die regierenden Parteien.",
        en: "the ruling parties.",
        id: "12-0",
      },
      {
        de: "die Fraktion mit den meisten Abgeordneten.",
        en: "the parliamentary group with the most members.",
        id: "12-1",
      },
      {
        de: "alle Parteien, die bei der letzten Wahl die 5%-Hürde erreichen konnten.",
        en: "all parties that managed to clear the 5% hurdle in the last election.",
        id: "12-2",
      },
      {
        de: "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.",
        en: "all members of parliament who do not belong to the ruling party/parties.",
        id: "12-3",
      },
    ],
    answer:
      "alle Abgeordneten, die nicht zu der Regierungspartei/den Regierungsparteien gehören.",
    id: "12",
  },
  {
    question: {
      de: "Meinungsfreiheit in Deutschland heißt, dass ich ...",
      en: "Freedom of expression in Germany means that I ...",
    },
    options: [
      {
        de: "Passanten auf der Straße beschimpfen darf.",
        en: "may insult passers-by on the street.",
        id: "13-0",
      },
      {
        de: "meine Meinung im Internet äußern kann.",
        en: "can express my opinion on the internet.",
        id: "13-1",
      },
      {
        de: "Nazi-, Hamas- oder Islamischer Staat-Symbole öffentlich tragen darf.",
        en: "may publicly wear Nazi, Hamas or Islamic State symbols.",
        id: "13-2",
      },
      {
        de: "meine Meinung nur dann äußern darf, solange ich der Regierung nicht widerspreche.",
        en: "may only express my opinion as long as I do not contradict the government.",
        id: "13-3",
      },
    ],
    answer: "meine Meinung im Internet äußern kann.",
    id: "13",
  },
  {
    question: {
      de: "Was verbietet das deutsche Grundgesetz?",
      en: "What does the German Basic Law prohibit?",
    },
    options: [
      {
        de: "Militärdienst",
        en: "Military service",
        id: "14-0",
      },
      {
        de: "Zwangsarbeit",
        en: "Forced labor",
        id: "14-1",
      },
      {
        de: "freie Berufswahl",
        en: "Free choice of profession",
        id: "14-2",
      },
      {
        de: "Arbeit im Ausland",
        en: "Work abroad",
        id: "14-3",
      },
    ],
    answer: "Zwangsarbeit",
    id: "14",
  },
  {
    question: {
      de: "Wann ist die Meinungsfreiheit in Deutschland eingeschränkt?",
      en: "When is freedom of expression restricted in Germany?",
    },
    options: [
      {
        de: "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen",
        en: "when publicly spreading false statements about individuals",
        id: "15-0",
      },
      {
        de: "bei Meinungsäußerungen über die Bundesregierung",
        en: "when expressing opinions about the federal government",
        id: "15-1",
      },
      {
        de: "bei Diskussionen über Religionen",
        en: "during discussions about religions",
        id: "15-2",
      },
      {
        de: "bei Kritik am Staat",
        en: "when criticizing the state",
        id: "15-3",
      },
    ],
    answer:
      "bei der öffentlichen Verbreitung falscher Behauptungen über einzelne Personen",
    id: "15",
  },
  {
    question: {
      de: "Die deutschen Gesetze verbieten...",
      en: "German laws prohibit...",
    },
    options: [
      {
        de: "Meinungsfreiheit der Einwohnerinnen und Einwohner.",
        en: "freedom of expression for residents.",
        id: "16-0",
      },
      {
        de: "Petitionen der Bürgerinnen und Bürger.",
        en: "petitions by citizens.",
        id: "16-1",
      },
      {
        de: "Versammlungsfreiheit der Einwohnerinnen und Einwohner.",
        en: "freedom of assembly for residents.",
        id: "16-2",
      },
      {
        de: "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat.",
        en: "unequal treatment of citizens by the state.",
        id: "16-3",
      },
    ],
    answer: "Ungleichbehandlung der Bürgerinnen und Bürger durch den Staat.",
    id: "16",
  },
  {
    question: {
      de: "Welches Grundrecht ist in Artikel 1 des Grundgesetzes der Bundesrepublik Deutschland garantiert?",
      en: "Which fundamental right is guaranteed in Article 1 of the Basic Law of the Federal Republic of Germany?",
    },
    options: [
      {
        de: "die Unantastbarkeit der Menschenwürde",
        en: "the inviolability of human dignity",
        id: "17-0",
      },
      {
        de: "das Recht auf Leben",
        en: "the right to life",
        id: "17-1",
      },
      {
        de: "Religionsfreiheit",
        en: "freedom of religion",
        id: "17-2",
      },
      {
        de: "Meinungsfreiheit",
        en: "freedom of expression",
        id: "17-3",
      },
    ],
    answer: "die Unantastbarkeit der Menschenwürde",
    id: "17",
  },
  {
    question: {
      de: 'Was versteht man unter dem Recht der "Freizügigkeit" in Deutschland?',
      en: 'What is understood by the right of "freedom of movement" in Germany?',
    },
    options: [
      {
        de: "Man darf sich seinen Wohnort selbst aussuchen.",
        en: "You can choose your place of residence yourself.",
        id: "18-0",
      },
      {
        de: "Man kann seinen Beruf wechseln.",
        en: "You can change your profession.",
        id: "18-1",
      },
      {
        de: "Man darf sich für eine andere Religion entscheiden.",
        en: "You can choose a different religion.",
        id: "18-2",
      },
      {
        de: "Man darf sich in der Öffentlichkeit nur leicht bekleidet bewegen.",
        en: "You are only allowed to move around in public lightly dressed.",
        id: "18-3",
      },
    ],
    answer: "Man darf sich seinen Wohnort selbst aussuchen.",
    id: "18",
  },
  {
    question: {
      de: "Eine Partei in Deutschland verfolgt das Ziel, eine Diktatur zu errichten. Sie ist dann ...",
      en: "A party in Germany pursues the goal of establishing a dictatorship. It is then ...",
    },
    options: [
      {
        de: "tolerant.",
        en: "tolerant.",
        id: "19-0",
      },
      {
        de: "rechtsstaatlich orientiert.",
        en: "oriented towards the rule of law.",
        id: "19-1",
      },
      {
        de: "gesetzestreu.",
        en: "law-abiding.",
        id: "19-2",
      },
      {
        de: "verfassungswidrig.",
        en: "unconstitutional.",
        id: "19-3",
      },
    ],
    answer: "verfassungswidrig.",
    id: "19",
  },
  {
    question: {
      de: "Welches ist das Wappen der Bundesrepublik Deutschland?",
      en: "Which is the coat of arms of the Federal Republic of Germany?",
      image: "aufgabe_21_209.jpg",
    },
    options: [
      {
        de: "Bild 1",
        en: "Image 1",
        id: "20-0",
      },
      {
        de: "Bild 2",
        en: "Image 2",
        id: "20-1",
      },
      {
        de: "Bild 3",
        en: "Image 3",
        id: "20-2",
      },
      {
        de: "Bild 4",
        en: "Image 4",
        id: "20-3",
      },
    ],
    answer: "Bild 1",
    id: "20",
  },
  {
    question: {
      de: "Was für eine Staatsform hat Deutschland?",
      en: "What form of government does Germany have?",
    },
    options: [
      {
        de: "Monarchie",
        en: "Monarchy",
        id: "21-0",
      },
      {
        de: "Diktatur",
        en: "Dictatorship",
        id: "21-1",
      },
      {
        de: "Republik",
        en: "Republic",
        id: "21-2",
      },
      {
        de: "Fürstentum",
        en: "Principality",
        id: "21-3",
      },
    ],
    answer: "Republik",
    id: "21",
  },
  {
    question: {
      de: "In Deutschland sind die meisten Erwerbstätigen ...",
      en: "In Germany, most employed persons are ...",
    },
    options: [
      {
        de: "in kleinen Familienunternehmen beschäftigt.",
        en: "employed in small family businesses.",
        id: "22-0",
      },
      {
        de: "ehrenamtlich für ein Bundesland tätig.",
        en: "working voluntarily for a federal state.",
        id: "22-1",
      },
      {
        de: "selbstständig mit einer eigenen Firma tätig.",
        en: "self-employed with their own company.",
        id: "22-2",
      },
      {
        de: "bei einer Firma oder Behörde beschäftigt.",
        en: "employed by a company or public authority.",
        id: "22-3",
      },
    ],
    answer: "bei einer Firma oder Behörde beschäftigt.",
    id: "22",
  },
  {
    question: {
      de: "Wie viele Bundesländer hat die Bundesrepublik Deutschland?",
      en: "How many federal states does the Federal Republic of Germany have?",
    },
    options: [
      {
        de: "14",
        en: "14",
        id: "23-0",
      },
      {
        de: "15",
        en: "15",
        id: "23-1",
      },
      {
        de: "16",
        en: "16",
        id: "23-2",
      },
      {
        de: "17",
        en: "17",
        id: "23-3",
      },
    ],
    answer: "16",
    id: "23",
  },
  {
    question: {
      de: "Was ist kein Bundesland der Bundesrepublik Deutschland?",
      en: "Which is not a federal state of the Federal Republic of Germany?",
    },
    options: [
      {
        de: "Elsass-Lothringen",
        en: "Alsace-Lorraine",
        id: "24-0",
      },
      {
        de: "Nordrhein-Westfalen",
        en: "North Rhine-Westphalia",
        id: "24-1",
      },
      {
        de: "Mecklenburg-Vorpommern",
        en: "Mecklenburg-Western Pomerania",
        id: "24-2",
      },
      {
        de: "Sachsen-Anhalt",
        en: "Saxony-Anhalt",
        id: "24-3",
      },
    ],
    answer: "Elsass-Lothringen",
    id: "24",
  },
  {
    question: {
      de: "Deutschland ist …",
      en: "Germany is ...",
    },
    options: [
      {
        de: "eine kommunistische Republik.",
        en: "a communist republic.",
        id: "25-0",
      },
      {
        de: "ein demokratischer und sozialer Bundesstaat.",
        en: "a democratic and social federal state.",
        id: "25-1",
      },
      {
        de: "eine kapitalistische und soziale Monarchie.",
        en: "a capitalist and social monarchy.",
        id: "25-2",
      },
      {
        de: "ein sozialer und sozialistischer Bundesstaat.",
        en: "a social and socialist federal state.",
        id: "25-3",
      },
    ],
    answer: "ein demokratischer und sozialer Bundesstaat.",
    id: "25",
  },
  {
    question: {
      de: "Deutschland ist …",
      en: "Germany is ...",
    },
    options: [
      {
        de: "ein sozialistischer Staat.",
        en: "a socialist state.",
        id: "26-0",
      },
      {
        de: "ein Bundesstaat.",
        en: "a federal state.",
        id: "26-1",
      },
      {
        de: "eine Diktatur.",
        en: "a dictatorship.",
        id: "26-2",
      },
      {
        de: "eine Monarchie.",
        en: "a monarchy.",
        id: "26-3",
      },
    ],
    answer: "ein Bundesstaat.",
    id: "26",
  },
  {
    question: {
      de: "Wer wählt in Deutschland die Abgeordneten zum Bundestag?",
      en: "Who elects the members of the Bundestag in Germany?",
    },
    options: [
      {
        de: "das Militär",
        en: "the military",
        id: "27-0",
      },
      {
        de: "die Wirtschaft",
        en: "the economy",
        id: "27-1",
      },
      {
        de: "das wahlberechtigte Volk",
        en: "the electorate",
        id: "27-2",
      },
      {
        de: "die Verwaltung",
        en: "the administration",
        id: "27-3",
      },
    ],
    answer: "das wahlberechtigte Volk",
    id: "27",
  },
  {
    question: {
      de: "Welches Tier ist das Wappentier der Bundesrepublik Deutschland?",
      en: "Which animal is the heraldic animal of the Federal Republic of Germany?",
    },
    options: [
      {
        de: "Löwe",
        en: "Lion",
        id: "28-0",
      },
      {
        de: "Adler",
        en: "Eagle",
        id: "28-1",
      },
      {
        de: "Bär",
        en: "Bear",
        id: "28-2",
      },
      {
        de: "Pferd",
        en: "Horse",
        id: "28-3",
      },
    ],
    answer: "Adler",
    id: "28",
  },
  {
    question: {
      de: "Was ist kein Merkmal unserer Demokratie?",
      en: "What is not a characteristic of our democracy?",
    },
    options: [
      {
        de: "regelmäßige Wahlen",
        en: "regular elections",
        id: "29-0",
      },
      {
        de: "Pressezensur",
        en: "press censorship",
        id: "29-1",
      },
      {
        de: "Meinungsfreiheit",
        en: "freedom of expression",
        id: "29-2",
      },
      {
        de: "verschiedene Parteien",
        en: "various parties",
        id: "29-3",
      },
    ],
    answer: "Pressezensur",
    id: "29",
  },
  {
    question: {
      de: "Die Zusammenarbeit von Parteien zur Bildung einer Regierung nennt man in Deutschland …",
      en: "The cooperation of parties to form a government is called in Germany ...",
    },
    options: [
      {
        de: "Einheit.",
        en: "Unity.",
        id: "30-0",
      },
      {
        de: "Koalition.",
        en: "Coalition.",
        id: "30-1",
      },
      {
        de: "Ministerium.",
        en: "Ministry.",
        id: "30-2",
      },
      {
        de: "Fraktion.",
        en: "Parliamentary group.",
        id: "30-3",
      },
    ],
    answer: "Koalition.",
    id: "30",
  },
  {
    question: {
      de: "Was ist keine staatliche Gewalt in Deutschland?",
      en: "What is not a state power in Germany?",
    },
    options: [
      {
        de: "Gesetzgebung",
        en: "Legislation",
        id: "31-0",
      },
      {
        de: "Regierung",
        en: "Government",
        id: "31-1",
      },
      {
        de: "Presse",
        en: "Press",
        id: "31-2",
      },
      {
        de: "Rechtsprechung",
        en: "Judiciary",
        id: "31-3",
      },
    ],
    answer: "Presse",
    id: "31",
  },
  {
    question: {
      de: "Welche Aussage ist richtig? In Deutschland …",
      en: "Which statement is correct? In Germany ...",
    },
    options: [
      {
        de: "sind Staat und Religionsgemeinschaften voneinander getrennt.",
        en: "state and religious communities are separated from each other.",
        id: "32-0",
      },
      {
        de: "bilden die Religionsgemeinschaften den Staat.",
        en: "religious communities form the state.",
        id: "32-1",
      },
      {
        de: "ist der Staat abhängig von den Religionsgemeinschaften.",
        en: "the state is dependent on religious communities.",
        id: "32-2",
      },
      {
        de: "bilden Staat und Religionsgemeinschaften eine Einheit.",
        en: "state and religious communities form a unity.",
        id: "32-3",
      },
    ],
    answer: "sind Staat und Religionsgemeinschaften voneinander getrennt.",
    id: "32",
  },
  {
    question: {
      de: "Was ist Deutschland nicht?",
      en: "What is Germany not?",
    },
    options: [
      {
        de: "eine Demokratie",
        en: "a democracy",
        id: "33-0",
      },
      {
        de: "ein Rechtsstaat",
        en: "a constitutional state",
        id: "33-1",
      },
      {
        de: "eine Monarchie",
        en: "a monarchy",
        id: "33-2",
      },
      {
        de: "ein Sozialstaat",
        en: "a social state",
        id: "33-3",
      },
    ],
    answer: "eine Monarchie",
    id: "33",
  },
  {
    question: {
      de: "Womit finanziert der deutsche Staat die Sozialversicherung?",
      en: "How does the German state finance social security?",
    },
    options: [
      {
        de: "Kirchensteuer",
        en: "Church tax",
        id: "34-0",
      },
      {
        de: "Sozialabgaben",
        en: "Social contributions",
        id: "34-1",
      },
      {
        de: "Spendengeldern",
        en: "Donations",
        id: "34-2",
      },
      {
        de: "Vereinsbeiträgen",
        en: "Membership fees",
        id: "34-3",
      },
    ],
    answer: "Sozialabgaben",
    id: "34",
  },
  {
    question: {
      de: "Welche Maßnahme schafft in Deutschland soziale Sicherheit?",
      en: "Which measure creates social security in Germany?",
    },
    options: [
      {
        de: "die Krankenversicherung",
        en: "health insurance",
        id: "35-0",
      },
      {
        de: "die Autoversicherung",
        en: "car insurance",
        id: "35-1",
      },
      {
        de: "die Gebäudeversicherung",
        en: "building insurance",
        id: "35-2",
      },
      {
        de: "die Haftpflichtversicherung",
        en: "liability insurance",
        id: "35-3",
      },
    ],
    answer: "die Krankenversicherung",
    id: "35",
  },
  {
    question: {
      de: "Wie werden die Regierungschefinnen/Regierungschefs der meisten Bundesländer in Deutschland genannt?",
      en: "What are the heads of government of most federal states in Germany called?",
    },
    options: [
      {
        de: "Erste Ministerin/Erster Minister",
        en: "First Minister",
        id: "36-0",
      },
      {
        de: "Premierministerin/Premierminister",
        en: "Prime Minister",
        id: "36-1",
      },
      {
        de: "Senatorin/Senator",
        en: "Senator",
        id: "36-2",
      },
      {
        de: "Ministerpräsidentin/Ministerpräsident",
        en: "Minister-President",
        id: "36-3",
      },
    ],
    answer: "Ministerpräsidentin/Ministerpräsident",
    id: "36",
  },
  {
    question: {
      de: "Die Bundesrepublik Deutschland ist ein demokratischer und sozialer …",
      en: "The Federal Republic of Germany is a democratic and social ...",
    },
    options: [
      {
        de: "Staatenverbund.",
        en: "federation of states.",
        id: "37-0",
      },
      {
        de: "Bundesstaat.",
        en: "federal state.",
        id: "37-1",
      },
      {
        de: "Staatenbund.",
        en: "confederation of states.",
        id: "37-2",
      },
      {
        de: "Zentralstaat.",
        en: "central state.",
        id: "37-3",
      },
    ],
    answer: "Bundesstaat.",
    id: "37",
  },
  {
    question: {
      de: "Was hat jedes deutsche Bundesland?",
      en: "What does every German federal state have?",
    },
    options: [
      {
        de: "eine eigene Außenministerin/einen eigenen Außenminister",
        en: "its own foreign minister",
        id: "38-0",
      },
      {
        de: "eine eigene Währung",
        en: "its own currency",
        id: "38-1",
      },
      {
        de: "eine eigene Armee",
        en: "its own army",
        id: "38-2",
      },
      {
        de: "eine eigene Regierung",
        en: "its own government",
        id: "38-3",
      },
    ],
    answer: "eine eigene Regierung",
    id: "38",
  },
  {
    question: {
      de: "Mit welchen Worten beginnt die deutsche Nationalhymne?",
      en: "With which words does the German national anthem begin?",
    },
    options: [
      {
        de: "Völker, hört die Signale …",
        en: "Peoples, hear the signals…",
        id: "39-0",
      },
      {
        de: "Einigkeit und Recht und Freiheit …",
        en: "Unity and Justice and Freedom…",
        id: "39-1",
      },
      {
        de: "Freude schöner Götterfunken …",
        en: "Joy, beautiful spark of gods…",
        id: "39-2",
      },
      {
        de: "Deutschland einig Vaterland …",
        en: "Germany, united fatherland…",
        id: "39-3",
      },
    ],
    answer: "Einigkeit und Recht und Freiheit …",
    id: "39",
  },
  {
    question: {
      de: "Warum gibt es in einer Demokratie mehr als eine Partei?",
      en: "Why are there more than one party in a democracy?",
    },
    options: [
      {
        de: "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden",
        en: "because this represents the different opinions of the citizens",
        id: "40-0",
      },
      {
        de: "damit Bestechung in der Politik begrenzt wird",
        en: "to limit corruption in politics",
        id: "40-1",
      },
      {
        de: "um politische Demonstrationen zu verhindern",
        en: "to prevent political demonstrations",
        id: "40-2",
      },
      {
        de: "um wirtschaftlichen Wettbewerb anzuregen",
        en: "to stimulate economic competition",
        id: "40-3",
      },
    ],
    answer:
      "weil dadurch die unterschiedlichen Meinungen der Bürgerinnen und Bürger vertreten werden",
    id: "40",
  },
  {
    question: {
      de: "Wer beschließt in Deutschland ein neues Gesetz?",
      en: "Who passes a new law in Germany?",
    },
    options: [
      {
        de: "die Regierung",
        en: "the government",
        id: "41-0",
      },
      {
        de: "das Parlament",
        en: "the parliament",
        id: "41-1",
      },
      {
        de: "die Gerichte",
        en: "the courts",
        id: "41-2",
      },
      {
        de: "die Polizei",
        en: "the police",
        id: "41-3",
      },
    ],
    answer: "das Parlament",
    id: "41",
  },
  {
    question: {
      de: "Wann kann in Deutschland eine Partei verboten werden?",
      en: "When can a political party be banned in Germany?",
    },
    options: [
      {
        de: "wenn ihr Wahlkampf zu teuer ist",
        en: "if their election campaign is too expensive",
        id: "42-0",
      },
      {
        de: "wenn sie gegen die Verfassung kämpft",
        en: "if it fights against the constitution",
        id: "42-1",
      },
      {
        de: "wenn sie Kritik am Staatsoberhaupt äußert",
        en: "if it criticizes the head of state",
        id: "42-2",
      },
      {
        de: "wenn ihr Programm eine neue Richtung vorschlägt",
        en: "if its program proposes a new direction",
        id: "42-3",
      },
    ],
    answer: "wenn sie gegen die Verfassung kämpft",
    id: "42",
  },
  {
    question: {
      de: "Wen kann man als Bürgerin/Bürger in Deutschland nicht direkt wählen?",
      en: "Who can you not directly elect as a citizen in Germany?",
    },
    options: [
      {
        de: "Abgeordnete des EU-Parlaments",
        en: "Members of the EU Parliament",
        id: "43-0",
      },
      {
        de: "Die Bundespräsidentin/den Bundespräsidenten",
        en: "The Federal President",
        id: "43-1",
      },
      {
        de: "Landtagsabgeordnete",
        en: "State Parliament members",
        id: "43-2",
      },
      {
        de: "Bundestagsabgeordnete",
        en: "Bundestag members",
        id: "43-3",
      },
    ],
    answer: "Die Bundespräsidentin/den Bundespräsidenten",
    id: "43",
  },
  {
    question: {
      de: "Zu welcher Versicherung gehört die Pflegeversicherung?",
      en: "To which insurance does long-term care insurance belong?",
    },
    options: [
      {
        de: "Sozialversicherung",
        en: "Social insurance",
        id: "44-0",
      },
      {
        de: "Unfallversicherung",
        en: "Accident insurance",
        id: "44-1",
      },
      {
        de: "Hausratsversicherung",
        en: "Household insurance",
        id: "44-2",
      },
      {
        de: "Haftpflicht- und Feuerversicherung",
        en: "Liability and fire insurance",
        id: "44-3",
      },
    ],
    answer: "Sozialversicherung",
    id: "44",
  },
  {
    question: {
      de: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört dazu?",
      en: "The German state has many tasks. Which task belongs to it?",
    },
    options: [
      {
        de: "Er baut Straßen und Schulen.",
        en: "It builds roads and schools.",
        id: "45-0",
      },
      {
        de: "Er verkauft Lebensmittel und Kleidung.",
        en: "It sells food and clothing.",
        id: "45-1",
      },
      {
        de: "Er versorgt alle Einwohnerinnen und Einwohner kostenlos mit Zeitungen.",
        en: "It provides all residents with free newspapers.",
        id: "45-2",
      },
      {
        de: "Er produziert Autos und Busse.",
        en: "It produces cars and buses.",
        id: "45-3",
      },
    ],
    answer: "Er baut Straßen und Schulen.",
    id: "45",
  },
  {
    question: {
      de: "Der deutsche Staat hat viele Aufgaben. Welche Aufgabe gehört nicht dazu?",
      en: "The German state has many tasks. Which task does not belong to it?",
    },
    options: [
      {
        de: "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.",
        en: "It pays for holiday trips for all citizens.",
        id: "46-0",
      },
      {
        de: "Er zahlt Kindergeld.",
        en: "It pays child benefits.",
        id: "46-1",
      },
      {
        de: "Er unterstützt Museen.",
        en: "It supports museums.",
        id: "46-2",
      },
      {
        de: "Er fördert Sportlerinnen und Sportler.",
        en: "It promotes athletes.",
        id: "46-3",
      },
    ],
    answer: "Er bezahlt für alle Staatsangehörigen Urlaubsreisen.",
    id: "46",
  },
  {
    question: {
      de: "Welches Organ gehört nicht zu den Verfassungsorganen Deutschlands?",
      en: "Which body does not belong to the constitutional organs of Germany?",
    },
    options: [
      {
        de: "der Bundesrat",
        en: "the Federal Council",
        id: "47-0",
      },
      {
        de: "die Bundespräsidentin/der Bundespräsident",
        en: "the Federal President",
        id: "47-1",
      },
      {
        de: "die Bürgerversammlung",
        en: "the citizens' assembly",
        id: "47-2",
      },
      {
        de: "die Regierung",
        en: "the government",
        id: "47-3",
      },
    ],
    answer: "die Bürgerversammlung",
    id: "47",
  },
  {
    question: {
      de: "Wer bestimmt in Deutschland die Schulpolitik?",
      en: "Who determines education policy in Germany?",
    },
    options: [
      {
        de: "die Lehrer und Lehrerinnen",
        en: "the teachers",
        id: "48-0",
      },
      {
        de: "die Bundesländer",
        en: "the federal states",
        id: "48-1",
      },
      {
        de: "das Familienministerium",
        en: "the Ministry of Family Affairs",
        id: "48-2",
      },
      {
        de: "die Universitäten",
        en: "the universities",
        id: "48-3",
      },
    ],
    answer: "die Bundesländer",
    id: "48",
  },
  {
    question: {
      de: "Die Wirtschaftsform in Deutschland nennt man …",
      en: "The economic system in Germany is called ...",
    },
    options: [
      {
        de: "freie Zentralwirtschaft.",
        en: "free central economy.",
        id: "49-0",
      },
      {
        de: "soziale Marktwirtschaft.",
        en: "social market economy.",
        id: "49-1",
      },
      {
        de: "gelenkte Zentralwirtschaft.",
        en: "controlled central economy.",
        id: "49-2",
      },
      {
        de: "Planwirtschaft.",
        en: "planned economy.",
        id: "49-3",
      },
    ],
    answer: "soziale Marktwirtschaft.",
    id: "49",
  },
  {
    question: {
      de: "Zu einem demokratischen Rechtsstaat gehört es nicht, dass …",
      en: "It is not part of a democratic constitutional state that ...",
    },
    options: [
      {
        de: "Menschen sich kritisch über die Regierung äußern können.",
        en: "people can express critical opinions about the government.",
        id: "50-0",
      },
      {
        de: "Bürger friedlich demonstrieren gehen dürfen.",
        en: "citizens are allowed to demonstrate peacefully.",
        id: "50-1",
      },
      {
        de: "Menschen von einer Privatpolizei ohne Grund verhaftet werden.",
        en: "people are arrested by a private police force without reason.",
        id: "50-2",
      },
      {
        de: "jemand ein Verbrechen begeht und deshalb verhaftet wird.",
        en: "someone commits a crime and is arrested for it.",
        id: "50-3",
      },
    ],
    answer: "Menschen von einer Privatpolizei ohne Grund verhaftet werden.",
    id: "50",
  },
  {
    question: {
      de: 'Was bedeutet "Volkssouveränität"? Alle Staatsgewalt geht vom ...',
      en: 'What does "popular sovereignty" mean? All state power originates from the ...',
    },
    options: [
      {
        de: "Volke aus.",
        en: "people.",
        id: "51-0",
      },
      {
        de: "Bundestag aus.",
        en: "Bundestag.",
        id: "51-1",
      },
      {
        de: "preußischen König aus.",
        en: "Prussian King.",
        id: "51-2",
      },
      {
        de: "Bundesverfassungsgericht aus.",
        en: "Federal Constitutional Court.",
        id: "51-3",
      },
    ],
    answer: "Volke aus.",
    id: "51",
  },
  {
    question: {
      de: 'Was bedeutet "Rechtsstaat" in Deutschland?',
      en: 'What does "rule of law" mean in Germany?',
    },
    options: [
      {
        de: "Der Staat hat Recht.",
        en: "The state is right.",
        id: "52-0",
      },
      {
        de: "Es gibt nur rechte Parteien.",
        en: "There are only right-wing parties.",
        id: "52-1",
      },
      {
        de: "Die Bürgerinnen und Bürger entscheiden über Gesetze.",
        en: "The citizens decide on laws.",
        id: "52-2",
      },
      {
        de: "Der Staat muss die Gesetze einhalten.",
        en: "The state must comply with the laws.",
        id: "52-3",
      },
    ],
    answer: "Der Staat muss die Gesetze einhalten.",
    id: "52",
  },
  {
    question: {
      de: "Was ist keine staatliche Gewalt in Deutschland?",
      en: "What is not a state power in Germany?",
    },
    options: [
      {
        de: "Legislative",
        en: "Legislative",
        id: "53-0",
      },
      {
        de: "Judikative",
        en: "Judiciary",
        id: "53-1",
      },
      {
        de: "Exekutive",
        en: "Executive",
        id: "53-2",
      },
      {
        de: "Direktive",
        en: "Directive",
        id: "53-3",
      },
    ],
    answer: "Direktive",
    id: "53",
  },
  {
    question: {
      de: "Was zeigt dieses Bild?",
      en: "What does this picture show?",
      image: "aufgabe_55.jpg",
    },
    options: [
      {
        de: "den Bundestagssitz in Berlin",
        en: "the Bundestag seat in Berlin",
        id: "54-0",
      },
      {
        de: "das Bundesverfassungsgericht in Karlsruhe",
        en: "the Federal Constitutional Court in Karlsruhe",
        id: "54-1",
      },
      {
        de: "das Bundesratsgebäude in Berlin",
        en: "the Bundesrat building in Berlin",
        id: "54-2",
      },
      {
        de: "das Bundeskanzleramt in Berlin",
        en: "the Federal Chancellery in Berlin",
        id: "54-3",
      },
    ],
    answer: "den Bundestagssitz in Berlin",
    id: "54",
  },
  {
    question: {
      de: "Welches Amt gehört in Deutschland zur Gemeindeverwaltung?",
      en: "Which office in Germany belongs to the municipal administration?",
    },
    options: [
      {
        de: "Pfarramt",
        en: "Parish office",
        id: "55-0",
      },
      {
        de: "Ordnungsamt",
        en: "Public order office",
        id: "55-1",
      },
      {
        de: "Finanzamt",
        en: "Tax office",
        id: "55-2",
      },
      {
        de: "Auswärtiges Amt",
        en: "Foreign Office",
        id: "55-3",
      },
    ],
    answer: "Ordnungsamt",
    id: "55",
  },
  {
    question: {
      de: "Wer wird meistens zur Präsidentin/zum Präsidenten des Deutschen Bundestages gewählt?",
      en: "Who is usually elected President of the German Bundestag?",
    },
    options: [
      {
        de: "die/der älteste Abgeordnete im Parlament",
        en: "the oldest member of parliament",
        id: "56-0",
      },
      {
        de: "die Ministerpräsidentin/der Ministerpräsident des größten Bundeslandes",
        en: "the Minister-President of the largest federal state",
        id: "56-1",
      },
      {
        de: "eine ehemalige Bundeskanzlerin/ein ehemaliger Bundeskanzler",
        en: "a former Chancellor",
        id: "56-2",
      },
      {
        de: "eine Abgeordnete/ein Abgeordneter der stärksten Fraktion",
        en: "a member of parliament from the strongest parliamentary group",
        id: "56-3",
      },
    ],
    answer: "eine Abgeordnete/ein Abgeordneter der stärksten Fraktion",
    id: "56",
  },
  {
    question: {
      de: "Wer ernennt in Deutschland die Ministerinnen/die Minister der Bundesregierung?",
      en: "Who appoints the ministers of the federal government in Germany?",
    },
    options: [
      {
        de: "die Präsidentin/der Präsident des Bundesverfassungsgerichtes",
        en: "the President of the Federal Constitutional Court",
        id: "57-0",
      },
      {
        de: "die Bundespräsidentin/der Bundespräsident",
        en: "the Federal President",
        id: "57-1",
      },
      {
        de: "die Bundesratspräsidentin/der Bundesratspräsident",
        en: "the President of the Bundesrat",
        id: "57-2",
      },
      {
        de: "die Bundestagspräsidentin/der Bundestagspräsident",
        en: "the President of the Bundestag",
        id: "57-3",
      },
    ],
    answer: "die Bundespräsidentin/der Bundespräsident",
    id: "57",
  },
  {
    question: {
      de: "Vor wie vielen Jahren gab es erstmals eine jüdische Gemeinde auf dem Gebiet des heutigen Deutschlands?",
      en: "How many years ago was there a Jewish community for the first time in the territory of present-day Germany?",
    },
    options: [
      {
        de: "vor etwa 300 Jahren",
        en: "about 300 years ago",
        id: "58-0",
      },
      {
        de: "vor etwa 700 Jahren",
        en: "about 700 years ago",
        id: "58-1",
      },
      {
        de: "vor etwa 1150 Jahren",
        en: "about 1150 years ago",
        id: "58-2",
      },
      {
        de: "vor etwa 1700 Jahren",
        en: "about 1700 years ago",
        id: "58-3",
      },
    ],
    answer: "vor etwa 1700 Jahren",
    id: "58",
  },
  {
    question: {
      de: "In Deutschland gehören der Bundestag und der Bundesrat zur …",
      en: "In Germany, the Bundestag and the Bundesrat belong to the ...",
    },
    options: [
      {
        de: "Exekutive.",
        en: "Executive.",
        id: "59-0",
      },
      {
        de: "Legislative.",
        en: "Legislative.",
        id: "59-1",
      },
      {
        de: "Direktive.",
        en: "Directive.",
        id: "59-2",
      },
      {
        de: "Judikative.",
        en: "Judiciary.",
        id: "59-3",
      },
    ],
    answer: "Legislative.",
    id: "59",
  },
  {
    question: {
      de: 'Was bedeutet "Volkssouveränität"?',
      en: 'What does "popular sovereignty" mean?',
    },
    options: [
      {
        de: "Die Königin/der König herrscht über das Volk.",
        en: "The queen/king rules over the people.",
        id: "60-0",
      },
      {
        de: "Das Bundesverfassungsgericht steht über der Verfassung.",
        en: "The Federal Constitutional Court is above the constitution.",
        id: "60-1",
      },
      {
        de: "Die Interessenverbände üben die Souveränität zusammen mit der Regierung aus.",
        en: "The interest groups exercise sovereignty together with the government.",
        id: "60-2",
      },
      {
        de: "Die Staatsgewalt geht vom Volke aus.",
        en: "State power emanates from the people.",
        id: "60-3",
      },
    ],
    answer: "Die Staatsgewalt geht vom Volke aus.",
    id: "60",
  },
  {
    question: {
      de: "Wenn das Parlament eines deutschen Bundeslandes gewählt wird, nennt man das …",
      en: "When the parliament of a German federal state is elected, it is called ...",
    },
    options: [
      {
        de: "Kommunalwahl",
        en: "local election",
        id: "61-0",
      },
      {
        de: "Landtagswahl",
        en: "state election",
        id: "61-1",
      },
      {
        de: "Europawahl",
        en: "European election",
        id: "61-2",
      },
      {
        de: "Bundestagswahl",
        en: "federal election",
        id: "61-3",
      },
    ],
    answer: "Landtagswahl",
    id: "61",
  },
  {
    question: {
      de: "Was gehört in Deutschland nicht zur Exekutive?",
      en: "What does not belong to the executive branch in Germany?",
    },
    options: [
      {
        de: "die Polizei",
        en: "the police",
        id: "62-0",
      },
      {
        de: "die Gerichte",
        en: "the courts",
        id: "62-1",
      },
      {
        de: "das Finanzamt",
        en: "the tax office",
        id: "62-2",
      },
      {
        de: "die Ministerien",
        en: "the ministries",
        id: "62-3",
      },
    ],
    answer: "die Gerichte",
    id: "62",
  },
  {
    question: {
      de: "Die Bundesrepublik Deutschland ist heute gegliedert in …",
      en: "The Federal Republic of Germany is today divided into ...",
    },
    options: [
      {
        de: "vier Besatzungszonen.",
        en: "four occupation zones.",
        id: "63-0",
      },
      {
        de: "einen Oststaat und einen Weststaat.",
        en: "an East state and a West state.",
        id: "63-1",
      },
      {
        de: "16 Kantone.",
        en: "16 cantons.",
        id: "63-2",
      },
      {
        de: "Bund, Länder und Kommunen.",
        en: "Federation, states and municipalities.",
        id: "63-3",
      },
    ],
    answer: "Bund, Länder und Kommunen.",
    id: "63",
  },
  {
    question: {
      de: "Es gehört nicht zu den Aufgaben des Deutschen Bundestages, …",
      en: "It is not one of the tasks of the German Bundestag to ...",
    },
    options: [
      {
        de: "Gesetze zu entwerfen.",
        en: "draft laws.",
        id: "64-0",
      },
      {
        de: "die Bundesregierung zu kontrollieren.",
        en: "control the federal government.",
        id: "64-1",
      },
      {
        de: "die Bundeskanzlerin/den Bundeskanzler zu wählen.",
        en: "elect the Chancellor.",
        id: "64-2",
      },
      {
        de: "das Bundeskabinett zu bilden.",
        en: "form the federal cabinet.",
        id: "64-3",
      },
    ],
    answer: "das Bundeskabinett zu bilden.",
    id: "64",
  },
  {
    question: {
      de: "Welche Städte haben die größten jüdischen Gemeinden in Deutschland?",
      en: "Which cities have the largest Jewish communities in Germany?",
    },
    options: [
      {
        de: "Berlin und München",
        en: "Berlin and Munich",
        id: "65-0",
      },
      {
        de: "Hamburg und Essen",
        en: "Hamburg and Essen",
        id: "65-1",
      },
      {
        de: "Nürnberg und Stuttgart",
        en: "Nuremberg and Stuttgart",
        id: "65-2",
      },
      {
        de: "Worms und Speyer",
        en: "Worms and Speyer",
        id: "65-3",
      },
    ],
    answer: "Berlin und München",
    id: "65",
  },
  {
    question: {
      de: "Was ist in Deutschland vor allem eine Aufgabe der Bundesländer?",
      en: "What is primarily a task of the federal states in Germany?",
    },
    options: [
      {
        de: "Verteidigungspolitik",
        en: "Defense policy",
        id: "66-0",
      },
      {
        de: "Außenpolitik",
        en: "Foreign policy",
        id: "66-1",
      },
      {
        de: "Wirtschaftspolitik",
        en: "Economic policy",
        id: "66-2",
      },
      {
        de: "Schulpolitik",
        en: "Education policy",
        id: "66-3",
      },
    ],
    answer: "Schulpolitik",
    id: "66",
  },
  {
    question: {
      de: "Warum kontrolliert der Staat in Deutschland das Schulwesen?",
      en: "Why does the state control the school system in Germany?",
    },
    options: [
      {
        de: "weil es in Deutschland nur staatliche Schulen gibt",
        en: "because there are only state schools in Germany",
        id: "67-0",
      },
      {
        de: "weil alle Schülerinnen und Schüler einen Schulabschluss haben müssen",
        en: "because all students must have a school leaving certificate",
        id: "67-1",
      },
      {
        de: "weil es in den Bundesländern verschiedene Schulen gibt",
        en: "because there are different schools in the federal states",
        id: "67-2",
      },
      {
        de: "weil es nach dem Grundgesetz seine Aufgabe ist",
        en: "because it is its task according to the Basic Law",
        id: "67-3",
      },
    ],
    answer: "weil es nach dem Grundgesetz seine Aufgabe ist",
    id: "67",
  },
  {
    question: {
      de: "Die Bundesrepublik Deutschland hat einen dreistufigen Verwaltungsaufbau. Wie heißt die unterste politische Stufe?",
      en: "The Federal Republic of Germany has a three-tiered administrative structure. What is the lowest political level called?",
    },
    options: [
      {
        de: "Stadträte",
        en: "City councils",
        id: "68-0",
      },
      {
        de: "Landräte",
        en: "District administrators",
        id: "68-1",
      },
      {
        de: "Gemeinden",
        en: "Municipalities",
        id: "68-2",
      },
      {
        de: "Bezirksämter",
        en: "District offices",
        id: "68-3",
      },
    ],
    answer: "Gemeinden",
    id: "68",
  },
  {
    question: {
      de: "Der deutsche Bundespräsident Gustav Heinemann gibt Helmut Schmidt 1974 die Ernennungsurkunde zum deutschen Bundeskanzler. Was gehört zu den Aufgaben der deutschen Bundespräsidentin/des deutschen Bundespräsidenten?",
      en: "German Federal President Gustav Heinemann presents Helmut Schmidt with the letter of appointment as German Chancellor in 1974. What are the duties of the German Federal President?",
      image: "aufgabe_70.jpg",
    },
    options: [
      {
        de: "Sie/Er führt die Regierungsgeschäfte.",
        en: "He/She conducts government business.",
        id: "69-0",
      },
      {
        de: "Sie/Er kontrolliert die Regierungspartei.",
        en: "He/She controls the ruling party.",
        id: "69-1",
      },
      {
        de: "Sie/Er wählt die Ministerinnen/Minister aus.",
        en: "He/She selects the ministers.",
        id: "69-2",
      },
      {
        de: "Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor.",
        en: "He/She proposes the Chancellor for election.",
        id: "69-3",
      },
    ],
    answer: "Sie/Er schlägt die Kanzlerin/den Kanzler zur Wahl vor.",
    id: "69",
  },
  {
    question: {
      de: "Wo hält sich die deutsche Bundeskanzlerin/der deutsche Bundeskanzler am häufigsten auf? Am häufigsten ist sie/er …",
      en: "Where does the German Chancellor spend most of his/her time? Most frequently he/she is in ...",
    },
    options: [
      {
        de: "in Bonn, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
        en: "Bonn, because the Federal Chancellery and the Bundestag are located there.",
        id: "70-0",
      },
      {
        de: "auf Schloss Meseberg, dem Gästehaus der Bundesregierung, um Staatsgäste zu empfangen.",
        en: "Meseberg Palace, the government's guesthouse, to receive state guests.",
        id: "70-1",
      },
      {
        de: "auf Schloss Bellevue, dem Amtssitz der Bundespräsidentin/des Bundespräsidenten, um Staatsgäste zu empfangen.",
        en: "Bellevue Palace, the official residence of the Federal President, to receive state guests.",
        id: "70-2",
      },
      {
        de: "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
        en: "Berlin, because the Federal Chancellery and the Bundestag are located there.",
        id: "70-3",
      },
    ],
    answer:
      "in Berlin, weil sich dort das Bundeskanzleramt und der Bundestag befinden.",
    id: "70",
  },
  {
    question: {
      de: "Wie heißt die jetzige Bundeskanzlerin/der jetzige Bundeskanzler von Deutschland?",
      en: "What is the name of the current Chancellor of Germany?",
    },
    options: [
      {
        de: "Gerhard Schröder",
        en: "Gerhard Schröder",
        id: "71-0",
      },
      {
        de: "Angela Merkel",
        en: "Angela Merkel",
        id: "71-1",
      },
      {
        de: "Ursula von der Leyen",
        en: "Ursula von der Leyen",
        id: "71-2",
      },
      {
        de: "Friedrich Merz",
        en: "Friedrich Merz",
        id: "71-3",
      },
    ],
    answer: "Friedrich Merz",
    id: "71",
  },
  {
    question: {
      de: "Die beiden größten Fraktionen im Deutschen Bundestag heißen zurzeit …",
      en: "The two largest parliamentary groups in the German Bundestag are currently called ...",
    },
    options: [
      {
        de: "CDU/CSU und AfD.",
        en: "CDU/CSU and AfD.",
        id: "72-0",
      },
      {
        de: "Die Linke und Bündnis 90/Die Grünen.",
        en: "Die Linke and Alliance 90/The Greens.",
        id: "72-1",
      },
      {
        de: "Bündnis 90/Die Grünen und SPD.",
        en: "Alliance 90/The Greens and SPD.",
        id: "72-2",
      },
      {
        de: "Die Linke und CDU/CSU.",
        en: "Die Linke and CDU/CSU.",
        id: "72-3",
      },
    ],
    answer: "CDU/CSU und AfD.",
    id: "72",
  },
  {
    question: {
      de: "Wie heißt das Parlament für ganz Deutschland?",
      en: "What is the name of the parliament for all of Germany?",
    },
    options: [
      {
        de: "Bundesversammlung",
        en: "Federal Convention",
        id: "73-0",
      },
      {
        de: "Volkskammer",
        en: "People's Chamber",
        id: "73-1",
      },
      {
        de: "Bundestag",
        en: "Bundestag",
        id: "73-2",
      },
      {
        de: "Bundesgerichtshof",
        en: "Federal Court of Justice",
        id: "73-3",
      },
    ],
    answer: "Bundestag",
    id: "73",
  },
  {
    question: {
      de: "Wie heißt Deutschlands heutiges Staatsoberhaupt?",
      en: "What is the name of Germany's current head of state?",
    },
    options: [
      {
        de: "Frank-Walter Steinmeier",
        en: "Frank-Walter Steinmeier",
        id: "74-0",
      },
      {
        de: "Bärbel Bas",
        en: "Bärbel Bas",
        id: "74-1",
      },
      {
        de: "Bodo Ramelow",
        en: "Bodo Ramelow",
        id: "74-2",
      },
      {
        de: "Joachim Gauck",
        en: "Joachim Gauck",
        id: "74-3",
      },
    ],
    answer: "Frank-Walter Steinmeier",
    id: "74",
  },
  {
    question: {
      de: "Was bedeutet die Abkürzung CDU in Deutschland?",
      en: "What does the abbreviation CDU stand for in Germany?",
    },
    options: [
      {
        de: "Christliche Deutsche Union",
        en: "Christian German Union",
        id: "75-0",
      },
      {
        de: "Club Deutscher Unternehmer",
        en: "Club of German Entrepreneurs",
        id: "75-1",
      },
      {
        de: "Christlicher Deutscher Umweltschutz",
        en: "Christian German Environmental Protection",
        id: "75-2",
      },
      {
        de: "Christlich Demokratische Union",
        en: "Christian Democratic Union",
        id: "75-3",
      },
    ],
    answer: "Christlich Demokratische Union",
    id: "75",
  },
  {
    question: {
      de: "Was ist die Bundeswehr?",
      en: "What is the Bundeswehr?",
    },
    options: [
      {
        de: "die deutsche Polizei",
        en: "the German police",
        id: "76-0",
      },
      {
        de: "ein deutscher Hafen",
        en: "a German port",
        id: "76-1",
      },
      {
        de: "eine deutsche Bürgerinitiative",
        en: "a German citizens' initiative",
        id: "76-2",
      },
      {
        de: "die deutsche Armee",
        en: "the German army",
        id: "76-3",
      },
    ],
    answer: "die deutsche Armee",
    id: "76",
  },
  {
    question: {
      de: "Was bedeutet die Abkürzung SPD?",
      en: "What does the abbreviation SPD stand for?",
    },
    options: [
      {
        de: "Sozialistische Partei Deutschlands",
        en: "Socialist Party of Germany",
        id: "77-0",
      },
      {
        de: "Sozialpolitische Partei Deutschlands",
        en: "Social Policy Party of Germany",
        id: "77-1",
      },
      {
        de: "Sozialdemokratische Partei Deutschlands",
        en: "Social Democratic Party of Germany",
        id: "77-2",
      },
      {
        de: "Sozialgerechte Partei Deutschlands",
        en: "Social Justice Party of Germany",
        id: "77-3",
      },
    ],
    answer: "Sozialdemokratische Partei Deutschlands",
    id: "77",
  },
  {
    question: {
      de: "Was bedeutet die Abkürzung FDP in Deutschland?",
      en: "What does the abbreviation FDP stand for in Germany?",
    },
    options: [
      {
        de: "Friedliche Demonstrative Partei",
        en: "Peaceful Demonstrative Party",
        id: "78-0",
      },
      {
        de: "Freie Deutschland Partei",
        en: "Free Germany Party",
        id: "78-1",
      },
      {
        de: "Führende Demokratische Partei",
        en: "Leading Democratic Party",
        id: "78-2",
      },
      {
        de: "Freie Demokratische Partei",
        en: "Free Democratic Party",
        id: "78-3",
      },
    ],
    answer: "Freie Demokratische Partei",
    id: "78",
  },
  {
    question: {
      de: "Welches Gericht in Deutschland ist zuständig für die Auslegung des Grundgesetzes?",
      en: "Which court in Germany is responsible for interpreting the Basic Law?",
    },
    options: [
      {
        de: "Oberlandesgericht",
        en: "Higher Regional Court",
        id: "79-0",
      },
      {
        de: "Amtsgericht",
        en: "Local Court",
        id: "79-1",
      },
      {
        de: "Bundesverfassungsgericht",
        en: "Federal Constitutional Court",
        id: "79-2",
      },
      {
        de: "Verwaltungsgericht",
        en: "Administrative Court",
        id: "79-3",
      },
    ],
    answer: "Bundesverfassungsgericht",
    id: "79",
  },
  {
    question: {
      de: "Wer wählt die Bundeskanzlerin/den Bundeskanzler in Deutschland?",
      en: "Who elects the Chancellor in Germany?",
    },
    options: [
      {
        de: "der Bundesrat",
        en: "the Federal Council",
        id: "80-0",
      },
      {
        de: "die Bundesversammlung",
        en: "the Federal Convention",
        id: "80-1",
      },
      {
        de: "das Volk",
        en: "the people",
        id: "80-2",
      },
      {
        de: "der Bundestag",
        en: "the Bundestag",
        id: "80-3",
      },
    ],
    answer: "der Bundestag",
    id: "80",
  },
  {
    question: {
      de: "Wer leitet das deutsche Bundeskabinett?",
      en: "Who heads the German federal cabinet?",
    },
    options: [
      {
        de: "die Bundestagspräsidentin/der Bundestagspräsident",
        en: "the President of the Bundestag",
        id: "81-0",
      },
      {
        de: "die Bundespräsidentin/der Bundespräsident",
        en: "the Federal President",
        id: "81-1",
      },
      {
        de: "die Bundesratspräsidentin/der Bundesratspräsident",
        en: "the President of the Bundesrat",
        id: "81-2",
      },
      {
        de: "die Bundeskanzlerin/der Bundeskanzler",
        en: "the Chancellor",
        id: "81-3",
      },
    ],
    answer: "die Bundeskanzlerin/der Bundeskanzler",
    id: "81",
  },
  {
    question: {
      de: "Wer wählt die deutsche Bundeskanzlerin/den deutschen Bundeskanzler?",
      en: "Who elects the German Chancellor?",
    },
    options: [
      {
        de: "das Volk",
        en: "the people",
        id: "82-0",
      },
      {
        de: "die Bundesversammlung",
        en: "the Federal Convention",
        id: "82-1",
      },
      {
        de: "der Bundestag",
        en: "the Bundestag",
        id: "82-2",
      },
      {
        de: "die Bundesregierung",
        en: "the federal government",
        id: "82-3",
      },
    ],
    answer: "der Bundestag",
    id: "82",
  },
  {
    question: {
      de: "Welche Hauptaufgabe hat die deutsche Bundespräsidentin/der deutsche Bundespräsident? Sie/Er …",
      en: "What is the main task of the German Federal President? He/She ...",
    },
    options: [
      {
        de: "regiert das Land.",
        en: "governs the country.",
        id: "83-0",
      },
      {
        de: "entwirft die Gesetze.",
        en: "drafts the laws.",
        id: "83-1",
      },
      {
        de: "repräsentiert das Land.",
        en: "represents the country.",
        id: "83-2",
      },
      {
        de: "überwacht die Einhaltung der Gesetze.",
        en: "monitors compliance with laws.",
        id: "83-3",
      },
    ],
    answer: "repräsentiert das Land.",
    id: "83",
  },
  {
    question: {
      de: "Wer bildet den deutschen Bundesrat?",
      en: "Who forms the German Federal Council (Bundesrat)?",
    },
    options: [
      {
        de: "die Abgeordneten des Bundestages",
        en: "the members of the Bundestag",
        id: "84-0",
      },
      {
        de: "die Ministerinnen und Minister der Bundesregierung",
        en: "the ministers of the federal government",
        id: "84-1",
      },
      {
        de: "die Regierungsvertreter der Bundesländer",
        en: "the government representatives of the federal states",
        id: "84-2",
      },
      {
        de: "die Parteimitglieder",
        en: "the party members",
        id: "84-3",
      },
    ],
    answer: "die Regierungsvertreter der Bundesländer",
    id: "84",
  },
  {
    question: {
      de: "Wer wählt in Deutschland die Bundespräsidentin/den Bundespräsidenten?",
      en: "Who elects the Federal President in Germany?",
    },
    options: [
      {
        de: "die Bundesversammlung",
        en: "the Federal Convention",
        id: "85-0",
      },
      {
        de: "der Bundesrat",
        en: "the Federal Council",
        id: "85-1",
      },
      {
        de: "das Bundesparlament",
        en: "the Federal Parliament",
        id: "85-2",
      },
      {
        de: "das Bundesverfassungsgericht",
        en: "the Federal Constitutional Court",
        id: "85-3",
      },
    ],
    answer: "die Bundesversammlung",
    id: "85",
  },
  {
    question: {
      de: "Wer ist das Staatsoberhaupt der Bundesrepublik Deutschland?",
      en: "Who is the head of state of the Federal Republic of Germany?",
    },
    options: [
      {
        de: "die Bundeskanzlerin/der Bundeskanzler",
        en: "the Chancellor",
        id: "86-0",
      },
      {
        de: "die Bundespräsidentin/der Bundespräsident",
        en: "the Federal President",
        id: "86-1",
      },
      {
        de: "die Bundesratspräsidentin/der Bundesratspräsident",
        en: "the President of the Bundesrat",
        id: "86-2",
      },
      {
        de: "die Bundestagspräsidentin/der Bundestagspräsident",
        en: "the President of the Bundestag",
        id: "86-3",
      },
    ],
    answer: "die Bundespräsidentin/der Bundespräsident",
    id: "86",
  },
  {
    question: {
      de: "Die parlamentarische Opposition im Deutschen Bundestag …",
      en: "The parliamentary opposition in the German Bundestag ...",
    },
    options: [
      {
        de: "kontrolliert die Regierung.",
        en: "controls the government.",
        id: "87-0",
      },
      {
        de: "entscheidet, wer Bundesministerin/Bundesminister wird.",
        en: "decides who becomes a federal minister.",
        id: "87-1",
      },
      {
        de: "bestimmt, wer im Bundesrat sitzt.",
        en: "determines who sits in the Bundesrat.",
        id: "87-2",
      },
      {
        de: "schlägt die Regierungschefinnen/Regierungschefs der Länder vor.",
        en: "proposes the heads of government of the states.",
        id: "87-3",
      },
    ],
    answer: "kontrolliert die Regierung.",
    id: "87",
  },
  {
    question: {
      de: "Wie nennt man in Deutschland die Vereinigung von Abgeordneten einer Partei im Parlament?",
      en: "What is the association of members of parliament from one party called in Germany?",
    },
    options: [
      {
        de: "Verband",
        en: "Association",
        id: "88-0",
      },
      {
        de: "Ältestenrat",
        en: "Council of Elders",
        id: "88-1",
      },
      {
        de: "Fraktion",
        en: "Parliamentary group",
        id: "88-2",
      },
      {
        de: "Opposition",
        en: "Opposition",
        id: "88-3",
      },
    ],
    answer: "Fraktion",
    id: "88",
  },
  {
    question: {
      de: "Die deutschen Bundesländer wirken an der Gesetzgebung des Bundes mit durch …",
      en: "The German federal states participate in federal legislation through ...",
    },
    options: [
      {
        de: "den Bundesrat.",
        en: "the Bundesrat.",
        id: "89-0",
      },
      {
        de: "die Bundesversammlung.",
        en: "the Federal Convention.",
        id: "89-1",
      },
      {
        de: "den Bundestag.",
        en: "the Bundestag.",
        id: "89-2",
      },
      {
        de: "die Bundesregierung.",
        en: "the Federal Government.",
        id: "89-3",
      },
    ],
    answer: "den Bundesrat.",
    id: "89",
  },
  {
    question: {
      de: "In Deutschland kann ein Regierungswechsel in einem Bundesland Auswirkungen auf die Bundespolitik haben. Das Regieren wird …",
      en: "In Germany, a change of government in a federal state can have an impact on federal politics. Governing becomes ...",
    },
    options: [
      {
        de: "schwieriger, wenn sich dadurch die Mehrheit im Bundestag ändert.",
        en: "more difficult if the majority in the Bundestag changes as a result.",
        id: "90-0",
      },
      {
        de: "leichter, wenn dadurch neue Parteien in den Bundesrat kommen.",
        en: "easier if new parties enter the Bundesrat as a result.",
        id: "90-1",
      },
      {
        de: "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.",
        en: "more difficult if the majority in the Bundesrat changes as a result.",
        id: "90-2",
      },
      {
        de: "leichter, wenn es sich um ein reiches Bundesland handelt.",
        en: "easier if it is a wealthy federal state.",
        id: "90-3",
      },
    ],
    answer:
      "schwieriger, wenn dadurch die Mehrheit im Bundesrat verändert wird.",
    id: "90",
  },
  {
    question: {
      de: "Was bedeutet die Abkürzung CSU in Deutschland?",
      en: "What does the abbreviation CSU stand for in Germany?",
    },
    options: [
      {
        de: "Christlich Sichere Union",
        en: "Christian Secure Union",
        id: "91-0",
      },
      {
        de: "Christlich Süddeutsche Union",
        en: "Christian South German Union",
        id: "91-1",
      },
      {
        de: "Christlich Sozialer Unternehmerverband",
        en: "Christian Social Entrepreneurs' Association",
        id: "91-2",
      },
      {
        de: "Christlich Soziale Union",
        en: "Christian Social Union",
        id: "91-3",
      },
    ],
    answer: "Christlich Soziale Union",
    id: "91",
  },
  {
    question: {
      de: 'Je mehr "Zweitstimmen" eine Partei bei einer Bundestagswahl bekommt, desto …',
      en: 'The more "second votes" a party receives in a Bundestag election, the more ...',
    },
    options: [
      {
        de: "weniger Erststimmen kann sie haben.",
        en: "first votes it can have.",
        id: "92-0",
      },
      {
        de: "mehr Direktkandidaten der Partei ziehen ins Parlament ein.",
        en: "direct candidates of the party enter parliament.",
        id: "92-1",
      },
      {
        de: "größer ist das Risiko, eine Koalition bilden zu müssen.",
        en: "the greater the risk of having to form a coalition.",
        id: "92-2",
      },
      {
        de: "mehr Sitze erhält die Partei im Parlament.",
        en: "seats the party receives in parliament.",
        id: "92-3",
      },
    ],
    answer: "mehr Sitze erhält die Partei im Parlament.",
    id: "92",
  },
  {
    question: {
      de: "Ab welchem Alter darf man in Deutschland an der Wahl zum Deutschen Bundestag teilnehmen?",
      en: "From what age can one participate in the election to the German Bundestag in Germany?",
    },
    options: [
      {
        de: "16",
        en: "16",
        id: "93-0",
      },
      {
        de: "18",
        en: "18",
        id: "93-1",
      },
      {
        de: "21",
        en: "21",
        id: "93-2",
      },
      {
        de: "23",
        en: "23",
        id: "93-3",
      },
    ],
    answer: "18",
    id: "93",
  },
  {
    question: {
      de: "Was gilt für die meisten Kinder in Deutschland?",
      en: "What applies to most children in Germany?",
    },
    options: [
      {
        de: "Wahlpflicht",
        en: "Compulsory voting",
        id: "94-0",
      },
      {
        de: "Schulpflicht",
        en: "Compulsory schooling",
        id: "94-1",
      },
      {
        de: "Schweigepflicht",
        en: "Duty of confidentiality",
        id: "94-2",
      },
      {
        de: "Religionspflicht",
        en: "Religious duty",
        id: "94-3",
      },
    ],
    answer: "Schulpflicht",
    id: "94",
  },
  {
    question: {
      de: "Wie kann jemand, der den Holocaust leugnet, bestraft werden?",
      en: "How can someone who denies the Holocaust be punished?",
    },
    options: [
      {
        de: "Kürzung sozialer Leistungen",
        en: "Reduction of social benefits",
        id: "95-0",
      },
      {
        de: "bis zu 100 Sozialstunden",
        en: "up to 100 hours of community service",
        id: "95-1",
      },
      {
        de: "gar nicht, Holocaustleugnung ist erlaubt",
        en: "not at all, Holocaust denial is permitted",
        id: "95-2",
      },
      {
        de: "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe",
        en: "with imprisonment for up to five years or with a fine",
        id: "95-3",
      },
    ],
    answer: "mit Freiheitsstrafe bis zu fünf Jahren oder mit Geldstrafe",
    id: "95",
  },
  {
    question: {
      de: "Was bezahlt man in Deutschland automatisch, wenn man fest angestellt ist?",
      en: "What do you automatically pay in Germany if you are permanently employed?",
    },
    options: [
      {
        de: "Sozialversicherung",
        en: "Social insurance",
        id: "96-0",
      },
      {
        de: "Sozialhilfe",
        en: "Social welfare",
        id: "96-1",
      },
      {
        de: "Kindergeld",
        en: "Child benefit",
        id: "96-2",
      },
      {
        de: "Wohngeld",
        en: "Housing benefit",
        id: "96-3",
      },
    ],
    answer: "Sozialversicherung",
    id: "96",
  },
  {
    question: {
      de: "Wenn Abgeordnete im Deutschen Bundestag ihre Fraktion wechseln, …",
      en: "If members of the German Bundestag change their parliamentary group, ...",
    },
    options: [
      {
        de: "dürfen sie nicht mehr an den Sitzungen des Parlaments teilnehmen.",
        en: "they are no longer allowed to attend parliamentary sessions.",
        id: "97-0",
      },
      {
        de: "kann die Regierung ihre Mehrheit verlieren.",
        en: "the government can lose its majority.",
        id: "97-1",
      },
      {
        de: "muss die Bundespräsidentin/der Bundespräsident zuvor ihr/sein Einverständnis geben.",
        en: "the Federal President must first give his/her consent.",
        id: "97-2",
      },
      {
        de: "dürfen die Wählerinnen/Wähler dieser Abgeordneten noch einmal wählen.",
        en: "the voters of these members of parliament may vote again.",
        id: "97-3",
      },
    ],
    answer: "kann die Regierung ihre Mehrheit verlieren.",
    id: "97",
  },
  {
    question: {
      de: "Wer bezahlt in Deutschland die Sozialversicherungen?",
      en: "Who pays for social insurance in Germany?",
    },
    options: [
      {
        de: "Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer",
        en: "Employers and employees",
        id: "98-0",
      },
      {
        de: "nur Arbeitnehmerinnen/Arbeitnehmer",
        en: "only employees",
        id: "98-1",
      },
      {
        de: "alle Staatsangehörigen",
        en: "all citizens",
        id: "98-2",
      },
      {
        de: "nur Arbeitgeberinnen/Arbeitgeber",
        en: "only employers",
        id: "98-3",
      },
    ],
    answer: "Arbeitgeberinnen/Arbeitgeber und Arbeitnehmerinnen/Arbeitnehmer",
    id: "98",
  },
  {
    question: {
      de: "Was gehört nicht zur gesetzlichen Sozialversicherung?",
      en: "What is not part of statutory social insurance?",
    },
    options: [
      {
        de: "die Lebensversicherung",
        en: "life insurance",
        id: "99-0",
      },
      {
        de: "die gesetzliche Rentenversicherung",
        en: "statutory pension insurance",
        id: "99-1",
      },
      {
        de: "die Arbeitslosenversicherung",
        en: "unemployment insurance",
        id: "99-2",
      },
      {
        de: "die Pflegeversicherung",
        en: "long-term care insurance",
        id: "99-3",
      },
    ],
    answer: "die Lebensversicherung",
    id: "99",
  },
  {
    question: {
      de: "Gewerkschaften sind Interessenverbände der …",
      en: "Trade unions are interest groups of the ...",
    },
    options: [
      {
        de: "Jugendlichen.",
        en: "young people.",
        id: "100-0",
      },
      {
        de: "Arbeitnehmerinnen und Arbeitnehmer.",
        en: "employees.",
        id: "100-1",
      },
      {
        de: "Rentnerinnen und Rentner.",
        en: "pensioners.",
        id: "100-2",
      },
      {
        de: "Arbeitgeberinnen und Arbeitgeber.",
        en: "employers.",
        id: "100-3",
      },
    ],
    answer: "Arbeitnehmerinnen und Arbeitnehmer.",
    id: "100",
  },
  {
    question: {
      de: "Womit kann man in der Bundesrepublik Deutschland geehrt werden, wenn man auf politischem, wirtschaftlichem, kulturellem, geistigem oder sozialem Gebiet eine besondere Leistung erbracht hat? Mit dem …",
      en: "What can you be honored with in the Federal Republic of Germany if you have rendered a special achievement in the political, economic, cultural, intellectual or social field? With the ...",
    },
    options: [
      {
        de: "Bundesverdienstkreuz",
        en: "Federal Cross of Merit",
        id: "101-0",
      },
      {
        de: "Bundesadler",
        en: "Federal Eagle",
        id: "101-1",
      },
      {
        de: "Vaterländischen Verdienstorden",
        en: "Order of Patriotic Merit",
        id: "101-2",
      },
      {
        de: 'Ehrentitel "Held der Deutschen Demokratischen Republik"',
        en: 'Honorary title "Hero of the German Democratic Republic"',
        id: "101-3",
      },
    ],
    answer: "Bundesverdienstkreuz",
    id: "101",
  },
  {
    question: {
      de: 'Was wird in Deutschland als "Ampelkoalition" bezeichnet? Die Zusammenarbeit …',
      en: 'What is referred to as the "traffic light coalition" in Germany? The cooperation ...',
    },
    options: [
      {
        de: "der Bundestagsfraktionen von CDU und CSU",
        en: "of the Bundestag parliamentary groups of CDU and CSU",
        id: "102-0",
      },
      {
        de: "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung",
        en: "of SPD, FDP and Alliance 90/The Greens in a government",
        id: "102-1",
      },
      {
        de: "von CSU, Die LINKE und Bündnis 90/Die Grünen in einer Regierung",
        en: "of CSU, The Left and Alliance 90/The Greens in a government",
        id: "102-2",
      },
      {
        de: "der Bundestagsfraktionen von CDU und SPD",
        en: "of the Bundestag parliamentary groups of CDU and SPD",
        id: "102-3",
      },
    ],
    answer: "von SPD, FDP und Bündnis 90/Die Grünen in einer Regierung",
    id: "102",
  },
  {
    question: {
      de: "Eine Frau in Deutschland verliert ihre Arbeit. Was darf nicht der Grund für diese Entlassung sein?",
      en: "A woman in Germany loses her job. What must not be the reason for this dismissal?",
    },
    options: [
      {
        de: "Die Frau ist lange krank und arbeitsunfähig.",
        en: "The woman is ill for a long time and unable to work.",
        id: "103-0",
      },
      {
        de: "Die Frau kam oft zu spät zur Arbeit.",
        en: "The woman often came late to work.",
        id: "103-1",
      },
      {
        de: "Die Frau erledigt private Sachen während der Arbeitszeit.",
        en: "The woman takes care of private matters during working hours.",
        id: "103-2",
      },
      {
        de: "Die Frau bekommt ein Kind und ihr Chef weiß das.",
        en: "The woman is having a baby and her boss knows about it.",
        id: "103-3",
      },
    ],
    answer: "Die Frau bekommt ein Kind und ihr Chef weiß das.",
    id: "103",
  },
  {
    question: {
      de: "Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern in Deutschland?",
      en: "What is a task of election assistants in Germany?",
    },
    options: [
      {
        de: "Sie helfen alten Menschen bei der Stimmabgabe in der Wahlkabine.",
        en: "They help elderly people to cast their votes in the polling booth.",
        id: "104-0",
      },
      {
        de: "Sie schreiben die Wahlbenachrichtigungen vor der Wahl.",
        en: "They write the election notifications before the election.",
        id: "104-1",
      },
      {
        de: "Sie geben Zwischenergebnisse an die Medien weiter.",
        en: "They pass on interim results to the media.",
        id: "104-2",
      },
      {
        de: "Sie zählen die Stimmen nach dem Ende der Wahl.",
        en: "They count the votes after the election ends.",
        id: "104-3",
      },
    ],
    answer: "Sie zählen die Stimmen nach dem Ende der Wahl.",
    id: "104",
  },
  {
    question: {
      de: "In Deutschland helfen ehrenamtliche Wahlhelferinnen und Wahlhelfer bei den Wahlen. Was ist eine Aufgabe von Wahlhelferinnen/Wahlhelfern?",
      en: "In Germany, volunteer election assistants help with elections. What is a task of election assistants?",
    },
    options: [
      {
        de: "Sie helfen Kindern und alten Menschen beim Wählen.",
        en: "They help children and elderly people to vote.",
        id: "105-0",
      },
      {
        de: "Sie schreiben Karten und Briefe mit der Angabe des Wahllokals.",
        en: "They write cards and letters indicating the polling station.",
        id: "105-1",
      },
      {
        de: "Sie geben Zwischenergebnisse an Journalisten weiter.",
        en: "They pass on interim results to journalists.",
        id: "105-2",
      },
      {
        de: "Sie zählen die Stimmen nach dem Ende der Wahl.",
        en: "They count the votes after the election ends.",
        id: "105-3",
      },
    ],
    answer: "Sie zählen die Stimmen nach dem Ende der Wahl.",
    id: "105",
  },
  {
    question: {
      de: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
      en: "For how many years is the Bundestag elected in Germany?",
    },
    options: [
      {
        de: "2 Jahre",
        en: "2 years",
        id: "106-0",
      },
      {
        de: "4 Jahre",
        en: "4 years",
        id: "106-1",
      },
      {
        de: "6 Jahre",
        en: "6 years",
        id: "106-2",
      },
      {
        de: "8 Jahre",
        en: "8 years",
        id: "106-3",
      },
    ],
    answer: "4 Jahre",
    id: "106",
  },
  {
    question: {
      de: "Bei einer Bundestagswahl in Deutschland darf jede/jeder wählen, die/der …",
      en: "In a federal election in Germany, anyone may vote who ...",
    },
    options: [
      {
        de: "in der Bundesrepublik Deutschland wohnt und wählen möchte.",
        en: "lives in the Federal Republic of Germany and wants to vote.",
        id: "107-0",
      },
      {
        de: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.",
        en: "is a citizen of the Federal Republic of Germany and is at least 18 years old.",
        id: "107-1",
      },
      {
        de: "seit mindestens 3 Jahren in der Bundesrepublik Deutschland lebt.",
        en: "has lived in the Federal Republic of Germany for at least 3 years.",
        id: "107-2",
      },
      {
        de: "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 21 Jahre alt ist.",
        en: "is a citizen of the Federal Republic of Germany and is at least 21 years old.",
        id: "107-3",
      },
    ],
    answer:
      "Bürgerin/Bürger der Bundesrepublik Deutschland ist und mindestens 18 Jahre alt ist.",
    id: "107",
  },
  {
    question: {
      de: "Wie oft gibt es normalerweise Bundestagswahlen in Deutschland?",
      en: "How often are federal elections normally held in Germany?",
    },
    options: [
      {
        de: "alle drei Jahre",
        en: "every three years",
        id: "108-0",
      },
      {
        de: "alle vier Jahre",
        en: "every four years",
        id: "108-1",
      },
      {
        de: "alle fünf Jahre",
        en: "every five years",
        id: "108-2",
      },
      {
        de: "alle sechs Jahre",
        en: "every six years",
        id: "108-3",
      },
    ],
    answer: "alle vier Jahre",
    id: "108",
  },
  {
    question: {
      de: "Für wie viele Jahre wird der Bundestag in Deutschland gewählt?",
      en: "For how many years is the Bundestag elected in Germany?",
    },
    options: [
      {
        de: "2 Jahre",
        en: "2 years",
        id: "109-0",
      },
      {
        de: "3 Jahre",
        en: "3 years",
        id: "109-1",
      },
      {
        de: "4 Jahre",
        en: "4 years",
        id: "109-2",
      },
      {
        de: "5 Jahre",
        en: "5 years",
        id: "109-3",
      },
    ],
    answer: "4 Jahre",
    id: "109",
  },
  {
    question: {
      de: "Welche Handlungen mit Bezug auf den Staat Israel sind in Deutschland verboten?",
      en: "Which actions concerning the State of Israel are forbidden in Germany?",
    },
    options: [
      {
        de: "die Politik Israels öffentlich kritisieren",
        en: "publicly criticize the policies of Israel",
        id: "110-0",
      },
      {
        de: "das Aufhängen einer israelischen Flagge auf dem Privatgrundstück",
        en: "hanging an Israeli flag on private property",
        id: "110-1",
      },
      {
        de: "eine Diskussion über die Politik Israels",
        en: "a discussion about the policies of Israel",
        id: "110-2",
      },
      {
        de: "der öffentliche Aufruf zur Vernichtung Israels",
        en: "public calls for the destruction of Israel",
        id: "110-3",
      },
    ],
    answer: "der öffentliche Aufruf zur Vernichtung Israels",
    id: "110",
  },
  {
    question: {
      de: "Die Wahlen in Deutschland sind …",
      en: "Elections in Germany are ...",
    },
    options: [
      {
        de: "speziell.",
        en: "special.",
        id: "111-0",
      },
      {
        de: "geheim.",
        en: "secret.",
        id: "111-1",
      },
      {
        de: "berufsbezogen.",
        en: "job-related.",
        id: "111-2",
      },
      {
        de: "geschlechtsabhängig.",
        en: "gender-dependent.",
        id: "111-3",
      },
    ],
    answer: "geheim.",
    id: "111",
  },
  {
    question: {
      de: "Wahlen in Deutschland gewinnt die Partei, die …",
      en: "Elections in Germany are won by the party that ...",
    },
    options: [
      {
        de: "die meisten Stimmen bekommt.",
        en: "gets the most votes.",
        id: "112-0",
      },
      {
        de: "die meisten Männer mehrheitlich gewählt haben.",
        en: "most men have voted for predominantly.",
        id: "112-1",
      },
      {
        de: "die meisten Stimmen bei den Arbeiterinnen/Arbeitern bekommen hat.",
        en: "has received the most votes from workers.",
        id: "112-2",
      },
      {
        de: "die meisten Erststimmen für ihre Kanzlerkandidatin/ihren Kanzlerkandidaten erhalten hat.",
        en: "has received the most first votes for its chancellor candidate.",
        id: "112-3",
      },
    ],
    answer: "die meisten Stimmen bekommt.",
    id: "112",
  },
  {
    question: {
      de: "An demokratischen Wahlen in Deutschland teilzunehmen ist …",
      en: "Participating in democratic elections in Germany is ...",
    },
    options: [
      {
        de: "eine Pflicht.",
        en: "a duty.",
        id: "113-0",
      },
      {
        de: "ein Recht.",
        en: "a right.",
        id: "113-1",
      },
      {
        de: "ein Zwang.",
        en: "a compulsion.",
        id: "113-2",
      },
      {
        de: "eine Last.",
        en: "a burden.",
        id: "113-3",
      },
    ],
    answer: "ein Recht.",
    id: "113",
  },
  {
    question: {
      de: 'Was bedeutet "aktives Wahlrecht" in Deutschland?',
      en: 'What does "active right to vote" mean in Germany?',
    },
    options: [
      {
        de: "Man kann gewählt werden.",
        en: "One can be elected.",
        id: "114-0",
      },
      {
        de: "Man muss wählen gehen.",
        en: "One must go to vote.",
        id: "114-1",
      },
      {
        de: "Man kann wählen.",
        en: "One can vote.",
        id: "114-2",
      },
      {
        de: "Man muss zur Auszählung der Stimmen gehen.",
        en: "One must go to the vote counting.",
        id: "114-3",
      },
    ],
    answer: "Man kann wählen.",
    id: "114",
  },
  {
    question: {
      de: "Wenn Sie bei einer Bundestagswahl in Deutschland wählen dürfen, heißt das …",
      en: "If you are allowed to vote in a federal election in Germany, that means ...",
    },
    options: [
      {
        de: "aktive Wahlkampagne.",
        en: "active election campaign.",
        id: "115-0",
      },
      {
        de: "aktives Wahlverfahren.",
        en: "active electoral process.",
        id: "115-1",
      },
      {
        de: "aktiver Wahlkampf.",
        en: "active election campaign.",
        id: "115-2",
      },
      {
        de: "aktives Wahlrecht.",
        en: "active right to vote.",
        id: "115-3",
      },
    ],
    answer: "aktives Wahlrecht.",
    id: "115",
  },
  {
    question: {
      de: "Wie viel Prozent der Zweitstimmen müssen Parteien mindestens bekommen, um in den Deutschen Bundestag gewählt zu werden?",
      en: "What percentage of second votes must parties receive at least to be elected to the German Bundestag?",
    },
    options: [
      {
        de: "3%",
        en: "3%",
        id: "116-0",
      },
      {
        de: "4%",
        en: "4%",
        id: "116-1",
      },
      {
        de: "5%",
        en: "5%",
        id: "116-2",
      },
      {
        de: "6%",
        en: "6%",
        id: "116-3",
      },
    ],
    answer: "5%",
    id: "116",
  },
  {
    question: {
      de: "Wer darf bei den rund 40 jüdischen Makkabi-Sportvereinen Mitglied werden?",
      en: "Who can become a member of the approximately 40 Jewish Maccabi sports clubs?",
    },
    options: [
      {
        de: "nur Deutsche",
        en: "only Germans",
        id: "117-0",
      },
      {
        de: "nur Israelis",
        en: "only Israelis",
        id: "117-1",
      },
      {
        de: "nur religiöse Menschen",
        en: "only religious people",
        id: "117-2",
      },
      {
        de: "alle Menschen",
        en: "all people",
        id: "117-3",
      },
    ],
    answer: "alle Menschen",
    id: "117",
  },
  {
    question: {
      de: "Wahlen in Deutschland sind frei. Was bedeutet das?",
      en: "Elections in Germany are free. What does that mean?",
    },
    options: [
      {
        de: "Alle verurteilten Straftäterinnen/Straftäter dürfen nicht wählen.",
        en: "All convicted criminals are not allowed to vote.",
        id: "118-0",
      },
      {
        de: "Wenn ich wählen gehen möchte, muss meine Arbeitgeberin/mein Arbeitgeber mir frei geben.",
        en: "If I want to go vote, my employer must give me time off.",
        id: "118-1",
      },
      {
        de: "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.",
        en: "Every person can decide without coercion whether they want to vote and whom they want to vote for.",
        id: "118-2",
      },
      {
        de: "Ich kann frei entscheiden, wo ich wählen gehen möchte.",
        en: "I am free to decide where I want to vote.",
        id: "118-3",
      },
    ],
    answer:
      "Jede Person kann ohne Zwang entscheiden, ob sie wählen möchte und wen sie wählen möchte.",
    id: "118",
  },
  {
    question: {
      de: "Das Wahlsystem in Deutschland ist ein …",
      en: "The electoral system in Germany is a ...",
    },
    options: [
      {
        de: "Zensuswahlrecht.",
        en: "census suffrage.",
        id: "119-0",
      },
      {
        de: "Dreiklassenwahlrecht.",
        en: "three-class electoral system.",
        id: "119-1",
      },
      {
        de: "Mehrheits- und Verhältniswahlrecht.",
        en: "majority and proportional representation system.",
        id: "119-2",
      },
      {
        de: "allgemeines Männerwahlrecht.",
        en: "general male suffrage.",
        id: "119-3",
      },
    ],
    answer: "Mehrheits- und Verhältniswahlrecht.",
    id: "119",
  },
  {
    question: {
      de: "Eine Partei möchte in den Deutschen Bundestag. Sie muss aber einen Mindestanteil an Wählerstimmen haben. Das heißt …",
      en: "A party wants to enter the German Bundestag. However, it must have a minimum share of votes. That means ...",
    },
    options: [
      {
        de: "5%-Hürde.",
        en: "5% hurdle.",
        id: "120-0",
      },
      {
        de: "Zulassungsgrenze.",
        en: "admission limit.",
        id: "120-1",
      },
      {
        de: "Basiswert.",
        en: "base value.",
        id: "120-2",
      },
      {
        de: "Richtlinie.",
        en: "guideline.",
        id: "120-3",
      },
    ],
    answer: "5%-Hürde.",
    id: "120",
  },
  {
    question: {
      de: "Welchem Grundsatz unterliegen Wahlen in Deutschland? Wahlen in Deutschland sind …",
      en: "Which principle do elections in Germany adhere to? Elections in Germany are ...",
    },
    options: [
      {
        de: "frei, gleich, geheim.",
        en: "free, equal, secret.",
        id: "121-0",
      },
      {
        de: "offen, sicher, frei.",
        en: "open, secure, free.",
        id: "121-1",
      },
      {
        de: "geschlossen, gleich, sicher.",
        en: "closed, equal, secure.",
        id: "121-2",
      },
      {
        de: "sicher, offen, freiwillig.",
        en: "secure, open, voluntary.",
        id: "121-3",
      },
    ],
    answer: "frei, gleich, geheim.",
    id: "121",
  },
  {
    question: {
      de: 'Was ist in Deutschland die "5%-Hürde"?',
      en: 'What is the "5% hurdle" in Germany?',
    },
    options: [
      {
        de: "Abstimmungsregelung im Bundestag für kleine Parteien",
        en: "Voting rule in the Bundestag for small parties",
        id: "122-0",
      },
      {
        de: "Anwesenheitskontrolle im Bundestag für Abstimmungen",
        en: "Attendance check in the Bundestag for votes",
        id: "122-1",
      },
      {
        de: "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen",
        en: "Minimum share of votes to enter parliament",
        id: "122-2",
      },
      {
        de: "Anwesenheitskontrolle im Bundesrat für Abstimmungen",
        en: "Attendance check in the Bundesrat for votes",
        id: "122-3",
      },
    ],
    answer: "Mindestanteil an Wählerstimmen, um ins Parlament zu kommen",
    id: "122",
  },
  {
    question: {
      de: "Die Bundestagswahl in Deutschland ist die Wahl …",
      en: "The federal election in Germany is the election of the ...",
    },
    options: [
      {
        de: "der Bundeskanzlerin/des Bundeskanzlers.",
        en: "Chancellor.",
        id: "123-0",
      },
      {
        de: "der Parlamente der Länder.",
        en: "parliaments of the states.",
        id: "123-1",
      },
      {
        de: "des Parlaments für Deutschland.",
        en: "parliament for Germany.",
        id: "123-2",
      },
      {
        de: "der Bundespräsidentin/des Bundespräsidenten.",
        en: "Federal President.",
        id: "123-3",
      },
    ],
    answer: "des Parlaments für Deutschland.",
    id: "123",
  },
  {
    question: {
      de: "In einer Demokratie ist eine Funktion von regelmäßigen Wahlen, …",
      en: "In a democracy, one function of regular elections is to ...",
    },
    options: [
      {
        de: "die Bürgerinnen und Bürger zu zwingen, ihre Stimme abzugeben.",
        en: "force citizens to cast their vote.",
        id: "124-0",
      },
      {
        de: "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.",
        en: "enable a change of government according to the will of the majority of voters.",
        id: "124-1",
      },
      {
        de: "im Land bestehende Gesetze beizubehalten.",
        en: "maintain existing laws in the country.",
        id: "124-2",
      },
      {
        de: "den Armen mehr Macht zu geben.",
        en: "give more power to the poor.",
        id: "124-3",
      },
    ],
    answer:
      "nach dem Willen der Wählermehrheit den Wechsel der Regierung zu ermöglichen.",
    id: "124",
  },
  {
    question: {
      de: "Was bekommen wahlberechtigte Bürgerinnen und Bürger in Deutschland vor einer Wahl?",
      en: "What do eligible citizens in Germany receive before an election?",
    },
    options: [
      {
        de: "eine Wahlbenachrichtigung von der Gemeinde",
        en: "an election notification from the municipality",
        id: "125-0",
      },
      {
        de: "eine Wahlerlaubnis von der Bundespräsidentin/von dem Bundespräsidenten",
        en: "an election permit from the Federal President",
        id: "125-1",
      },
      {
        de: "eine Benachrichtigung von der Bundesversammlung",
        en: "a notification from the Federal Convention",
        id: "125-2",
      },
      {
        de: "eine Benachrichtigung vom Pfarramt",
        en: "a notification from the parish office",
        id: "125-3",
      },
    ],
    answer: "eine Wahlbenachrichtigung von der Gemeinde",
    id: "125",
  },
  {
    question: {
      de: "Warum gibt es die 5%-Hürde im Wahlgesetz der Bundesrepublik Deutschland? Es gibt sie, weil …",
      en: "Why is there a 5% hurdle in the electoral law of the Federal Republic of Germany? It exists because ...",
    },
    options: [
      {
        de: "die Programme von vielen kleinen Parteien viele Gemeinsamkeiten haben.",
        en: "the programs of many small parties have many commonalities.",
        id: "126-0",
      },
      {
        de: "die Bürgerinnen und Bürger bei vielen kleinen Parteien die Orientierung verlieren können.",
        en: "citizens can lose orientation with many small parties.",
        id: "126-1",
      },
      {
        de: "viele kleine Parteien die Regierungsbildung erschweren.",
        en: "many small parties make government formation more difficult.",
        id: "126-2",
      },
      {
        de: "die kleinen Parteien nicht so viel Geld haben, um die Politikerinnen und Politiker zu bezahlen.",
        en: "the small parties do not have enough money to pay the politicians.",
        id: "126-3",
      },
    ],
    answer: "viele kleine Parteien die Regierungsbildung erschweren.",
    id: "126",
  },
  {
    question: {
      de: "Parlamentsmitglieder, die von den Bürgerinnen und Bürgern gewählt werden, nennt man …",
      en: "Members of parliament who are elected by the citizens are called ...",
    },
    options: [
      {
        de: "Abgeordnete.",
        en: "Members of Parliament.",
        id: "127-0",
      },
      {
        de: "Kanzlerinnen/Kanzler.",
        en: "Chancellors.",
        id: "127-1",
      },
      {
        de: "Botschafterinnen/Botschafter.",
        en: "Ambassadors.",
        id: "127-2",
      },
      {
        de: "Ministerpräsidentinnen/Ministerpräsidenten.",
        en: "Minister-Presidents.",
        id: "127-3",
      },
    ],
    answer: "Abgeordnete.",
    id: "127",
  },
  {
    question: {
      de: "Vom Volk gewählt wird in Deutschland …",
      en: "In Germany, the people elect ...",
    },
    options: [
      {
        de: "die Bundeskanzlerin/der Bundeskanzler.",
        en: "the Chancellor.",
        id: "128-0",
      },
      {
        de: "die Ministerpräsidentin/der Ministerpräsident eines Bundeslandes.",
        en: "the Minister-President of a federal state.",
        id: "128-1",
      },
      {
        de: "der Bundestag.",
        en: "the Bundestag.",
        id: "128-2",
      },
      {
        de: "die Bundespräsidentin/der Bundespräsident.",
        en: "the Federal President.",
        id: "128-3",
      },
    ],
    answer: "der Bundestag.",
    id: "128",
  },
  {
    question: {
      de: "Welcher Stimmzettel wäre bei einer Bundestagswahl gültig?",
      en: "Which ballot paper would be valid in a federal election?",
      image: "aufgabe_130.jpg",
    },
    options: [
      {
        de: "1",
        en: "1",
        id: "129-0",
      },
      {
        de: "2",
        en: "2",
        id: "129-1",
      },
      {
        de: "3",
        en: "3",
        id: "129-2",
      },
      {
        de: "4",
        en: "4",
        id: "129-3",
      },
    ],
    answer: "1",
    id: "129",
  },
  {
    question: {
      de: "In Deutschland ist eine Bürgermeisterin/ein Bürgermeister …",
      en: "In Germany, a mayor is ...",
    },
    options: [
      {
        de: "die Leiterin/der Leiter einer Schule.",
        en: "the head of a school.",
        id: "130-0",
      },
      {
        de: "die Chefin/der Chef einer Bank.",
        en: "the head of a bank.",
        id: "130-1",
      },
      {
        de: "das Oberhaupt einer Gemeinde.",
        en: "the head of a municipality.",
        id: "130-2",
      },
      {
        de: "die/der Vorsitzende einer Partei.",
        en: "the chairperson of a political party.",
        id: "130-3",
      },
    ],
    answer: "das Oberhaupt einer Gemeinde.",
    id: "130",
  },
  {
    question: {
      de: "Viele Menschen in Deutschland arbeiten in ihrer Freizeit ehrenamtlich. Was bedeutet das?",
      en: "Many people in Germany volunteer in their free time. What does that mean?",
    },
    options: [
      {
        de: "Sie arbeiten als Soldatinnen/Soldaten.",
        en: "They work as soldiers.",
        id: "131-0",
      },
      {
        de: "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.",
        en: "They work voluntarily and unpaid in associations and organizations.",
        id: "131-1",
      },
      {
        de: "Sie arbeiten in der Bundesregierung.",
        en: "They work in the federal government.",
        id: "131-2",
      },
      {
        de: "Sie arbeiten in einem Krankenhaus und verdienen dabei Geld.",
        en: "They work in a hospital and earn money doing so.",
        id: "131-3",
      },
    ],
    answer: "Sie arbeiten freiwillig und unbezahlt in Vereinen und Verbänden.",
    id: "131",
  },
  {
    question: {
      de: "Was ist bei Bundestags- und Landtagswahlen in Deutschland erlaubt?",
      en: "What is allowed in federal and state elections in Germany?",
    },
    options: [
      {
        de: "Der Ehemann wählt für seine Frau mit.",
        en: "The husband votes for his wife.",
        id: "132-0",
      },
      {
        de: "Man kann durch Briefwahl seine Stimme abgeben.",
        en: "You can cast your vote by postal ballot.",
        id: "132-1",
      },
      {
        de: "Man kann am Wahltag telefonisch seine Stimme abgeben.",
        en: "You can cast your vote by phone on election day.",
        id: "132-2",
      },
      {
        de: "Kinder ab dem Alter von 14 Jahren dürfen wählen.",
        en: "Children aged 14 and over are allowed to vote.",
        id: "132-3",
      },
    ],
    answer: "Man kann durch Briefwahl seine Stimme abgeben.",
    id: "132",
  },
  {
    question: {
      de: "Man will die Buslinie abschaffen, mit der Sie immer zur Arbeit fahren. Was können Sie machen, um die Buslinie zu erhalten?",
      en: "They want to discontinue the bus line you always take to work. What can you do to keep the bus line?",
    },
    options: [
      {
        de: "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.",
        en: "I participate in a citizens' initiative for the preservation of the bus line or start an initiative myself.",
        id: "133-0",
      },
      {
        de: "Ich werde Mitglied in einem Sportverein und trainiere Radfahren.",
        en: "I become a member of a sports club and train cycling.",
        id: "133-1",
      },
      {
        de: "Ich wende mich an das Finanzamt, weil ich als Steuerzahlerin/Steuerzahler ein Recht auf die Buslinie habe.",
        en: "I contact the tax office because as a taxpayer I have a right to the bus line.",
        id: "133-2",
      },
      {
        de: "Ich schreibe einen Brief an das Forstamt der Gemeinde.",
        en: "I write a letter to the municipal forestry office.",
        id: "133-3",
      },
    ],
    answer:
      "Ich beteilige mich an einer Bürgerinitiative für die Erhaltung der Buslinie oder gründe selber eine Initiative.",
    id: "133",
  },
  {
    question: {
      de: "Wen vertreten die Gewerkschaften in Deutschland?",
      en: "Who do trade unions represent in Germany?",
    },
    options: [
      {
        de: "große Unternehmen",
        en: "large companies",
        id: "134-0",
      },
      {
        de: "kleine Unternehmen",
        en: "small companies",
        id: "134-1",
      },
      {
        de: "Selbstständige",
        en: "self-employed",
        id: "134-2",
      },
      {
        de: "Arbeitnehmerinnen und Arbeitnehmer",
        en: "employees",
        id: "134-3",
      },
    ],
    answer: "Arbeitnehmerinnen und Arbeitnehmer",
    id: "134",
  },
  {
    question: {
      de: "Sie gehen in Deutschland zum Arbeitsgericht bei …",
      en: "You go to the labor court in Germany for ...",
    },
    options: [
      {
        de: "falscher Nebenkostenabrechnung.",
        en: "incorrect utility bill.",
        id: "135-0",
      },
      {
        de: "ungerechtfertigter Kündigung durch Ihre Chefin/Ihren Chef.",
        en: "unjustified dismissal by your boss.",
        id: "135-1",
      },
      {
        de: "Problemen mit den Nachbarinnen/Nachbarn.",
        en: "problems with neighbors.",
        id: "135-2",
      },
      {
        de: "Schwierigkeiten nach einem Verkehrsunfall.",
        en: "difficulties after a traffic accident.",
        id: "135-3",
      },
    ],
    answer: "ungerechtfertigter Kündigung durch Ihre Chefin/Ihren Chef.",
    id: "135",
  },
  {
    question: {
      de: "Welches Gericht ist in Deutschland bei Konflikten in der Arbeitswelt zuständig?",
      en: "Which court is responsible for conflicts in the workplace in Germany?",
    },
    options: [
      {
        de: "das Familiengericht",
        en: "the family court",
        id: "136-0",
      },
      {
        de: "das Strafgericht",
        en: "the criminal court",
        id: "136-1",
      },
      {
        de: "das Arbeitsgericht",
        en: "the labor court",
        id: "136-2",
      },
      {
        de: "das Amtsgericht",
        en: "the local court",
        id: "136-3",
      },
    ],
    answer: "das Arbeitsgericht",
    id: "136",
  },
  {
    question: {
      de: "Was kann ich in Deutschland machen, wenn mir meine Arbeitgeberin/mein Arbeitgeber zu Unrecht gekündigt hat?",
      en: "What can I do in Germany if my employer has unfairly dismissed me?",
    },
    options: [
      {
        de: "weiterarbeiten und freundlich zur Chefin/zum Chef sein",
        en: "continue working and be friendly to the boss",
        id: "137-0",
      },
      {
        de: "ein Mahnverfahren gegen die Arbeitgeberin/den Arbeitgeber führen",
        en: "initiate a dunning procedure against the employer",
        id: "137-1",
      },
      {
        de: "Kündigungsschutzklage erheben",
        en: "file a wrongful dismissal lawsuit",
        id: "137-2",
      },
      {
        de: "die Arbeitgeberin/den Arbeitgeber bei der Polizei anzeigen",
        en: "report the employer to the police",
        id: "137-3",
      },
    ],
    answer: "Kündigungsschutzklage erheben",
    id: "137",
  },
  {
    question: {
      de: "Wann kommt es in Deutschland zu einem Prozess vor Gericht? Wenn jemand …",
      en: "When does a court case occur in Germany? When someone ...",
    },
    options: [
      {
        de: "zu einer anderen Religion übertritt.",
        en: "converts to another religion.",
        id: "138-0",
      },
      {
        de: "eine Straftat begangen hat und angeklagt wird.",
        en: "has committed a crime and is indicted.",
        id: "138-1",
      },
      {
        de: "eine andere Meinung als die der Regierung vertritt.",
        en: "holds a different opinion than that of the government.",
        id: "138-2",
      },
      {
        de: "sein Auto falsch geparkt hat und es abgeschleppt wird.",
        en: "has parked their car incorrectly and it is towed away.",
        id: "138-3",
      },
    ],
    answer: "eine Straftat begangen hat und angeklagt wird.",
    id: "138",
  },
  {
    question: {
      de: "Was macht eine Schöffin/ein Schöffe in Deutschland? Sie/Er …",
      en: "What does a lay judge do in Germany? He/She ...",
    },
    options: [
      {
        de: "entscheidet mit Richterinnen/Richtern über Schuld und Strafe.",
        en: "decides with judges on guilt and punishment.",
        id: "139-0",
      },
      {
        de: "gibt Bürgerinnen/Bürgern rechtlichen Rat.",
        en: "gives legal advice to citizens.",
        id: "139-1",
      },
      {
        de: "stellt Urkunden aus.",
        en: "issues documents.",
        id: "139-2",
      },
      {
        de: "verteidigt die Angeklagte/den Angeklagten.",
        en: "defends the accused.",
        id: "139-3",
      },
    ],
    answer: "entscheidet mit Richterinnen/Richtern über Schuld und Strafe.",
    id: "139",
  },
  {
    question: {
      de: "Wer berät in Deutschland Personen bei Rechtsfragen und vertritt sie vor Gericht?",
      en: "Who advises people on legal matters and represents them in court in Germany?",
    },
    options: [
      {
        de: "eine Rechtsanwältin/ein Rechtsanwalt",
        en: "a lawyer",
        id: "140-0",
      },
      {
        de: "eine Richterin/ein Richter",
        en: "a judge",
        id: "140-1",
      },
      {
        de: "eine Schöffin/ein Schöffe",
        en: "a lay judge",
        id: "140-2",
      },
      {
        de: "eine Staatsanwältin/ein Staatsanwalt",
        en: "a public prosecutor",
        id: "140-3",
      },
    ],
    answer: "eine Rechtsanwältin/ein Rechtsanwalt",
    id: "140",
  },
  {
    question: {
      de: "Was ist die Hauptaufgabe einer Richterin/eines Richters in Deutschland? Eine Richterin/ein Richter …",
      en: "What is the main task of a judge in Germany? A judge ...",
    },
    options: [
      {
        de: "vertritt Bürgerinnen und Bürger vor einem Gericht.",
        en: "represents citizens before a court.",
        id: "141-0",
      },
      {
        de: "arbeitet an einem Gericht und spricht Urteile.",
        en: "works at a court and pronounces judgments.",
        id: "141-1",
      },
      {
        de: "ändert Gesetze.",
        en: "changes laws.",
        id: "141-2",
      },
      {
        de: "betreut Jugendliche vor Gericht.",
        en: "supervises young people in court.",
        id: "141-3",
      },
    ],
    answer: "arbeitet an einem Gericht und spricht Urteile.",
    id: "141",
  },
  {
    question: {
      de: "Eine Richterin/ein Richter in Deutschland gehört zur …",
      en: "A judge in Germany belongs to the ...",
    },
    options: [
      {
        de: "Judikative.",
        en: "Judiciary.",
        id: "142-0",
      },
      {
        de: "Exekutive.",
        en: "Executive.",
        id: "142-1",
      },
      {
        de: "Operative.",
        en: "Operative.",
        id: "142-2",
      },
      {
        de: "Legislative.",
        en: "Legislative.",
        id: "142-3",
      },
    ],
    answer: "Judikative.",
    id: "142",
  },
  {
    question: {
      de: "Eine Richterin/ein Richter gehört in Deutschland zur …",
      en: "A judge in Germany belongs to the ...",
    },
    options: [
      {
        de: "vollziehenden Gewalt.",
        en: "executive power.",
        id: "143-0",
      },
      {
        de: "rechtsprechenden Gewalt.",
        en: "judicial power.",
        id: "143-1",
      },
      {
        de: "planenden Gewalt.",
        en: "planning power.",
        id: "143-2",
      },
      {
        de: "gesetzgebenden Gewalt.",
        en: "legislative power.",
        id: "143-3",
      },
    ],
    answer: "rechtsprechenden Gewalt.",
    id: "143",
  },
  {
    question: {
      de: "In Deutschland wird die Staatsgewalt geteilt. Für welche Staatsgewalt arbeitet eine Richterin/ein Richter? Für die …",
      en: "In Germany, state power is divided. For which branch of state power does a judge work? For the ...",
    },
    options: [
      {
        de: "Judikative",
        en: "Judiciary",
        id: "144-0",
      },
      {
        de: "Exekutive",
        en: "Executive",
        id: "144-1",
      },
      {
        de: "Presse",
        en: "Press",
        id: "144-2",
      },
      {
        de: "Legislative",
        en: "Legislative",
        id: "144-3",
      },
    ],
    answer: "Judikative",
    id: "144",
  },
  {
    question: {
      de: "Wie nennt man in Deutschland ein Verfahren vor einem Gericht?",
      en: "What is a procedure before a court called in Germany?",
    },
    options: [
      {
        de: "Programm",
        en: "Program",
        id: "145-0",
      },
      {
        de: "Prozedur",
        en: "Procedure",
        id: "145-1",
      },
      {
        de: "Protokoll",
        en: "Protocol",
        id: "145-2",
      },
      {
        de: "Prozess",
        en: "Process/Trial",
        id: "145-3",
      },
    ],
    answer: "Prozess",
    id: "145",
  },
  {
    question: {
      de: "Was ist die Arbeit einer Richterin/eines Richters in Deutschland?",
      en: "What is the work of a judge in Germany?",
    },
    options: [
      {
        de: "Deutschland regieren",
        en: "To govern Germany",
        id: "146-0",
      },
      {
        de: "Recht sprechen",
        en: "To administer justice",
        id: "146-1",
      },
      {
        de: "Pläne erstellen",
        en: "To draw up plans",
        id: "146-2",
      },
      {
        de: "Gesetze erlassen",
        en: "To enact laws",
        id: "146-3",
      },
    ],
    answer: "Recht sprechen",
    id: "146",
  },
  {
    question: {
      de: "Was ist eine Aufgabe der Polizei in Deutschland?",
      en: "What is a task of the police in Germany?",
    },
    options: [
      {
        de: "das Land zu verteidigen",
        en: "to defend the country",
        id: "147-0",
      },
      {
        de: "die Bürgerinnen und Bürger abzuhören",
        en: "to eavesdrop on citizens",
        id: "147-1",
      },
      {
        de: "die Gesetze zu beschließen",
        en: "to pass laws",
        id: "147-2",
      },
      {
        de: "die Einhaltung von Gesetzen zu überwachen",
        en: "to monitor compliance with laws",
        id: "147-3",
      },
    ],
    answer: "die Einhaltung von Gesetzen zu überwachen",
    id: "147",
  },
  {
    question: {
      de: "Was ist ein Beispiel für antisemitisches Verhalten?",
      en: "What is an example of anti-Semitic behavior?",
    },
    options: [
      {
        de: "ein jüdisches Fest besuchen",
        en: "to attend a Jewish festival",
        id: "148-0",
      },
      {
        de: "die israelische Regierung kritisieren",
        en: "to criticize the Israeli government",
        id: "148-1",
      },
      {
        de: "den Holocaust leugnen",
        en: "to deny the Holocaust",
        id: "148-2",
      },
      {
        de: "gegen Juden Fußball spielen.",
        en: "to play football against Jews.",
        id: "148-3",
      },
    ],
    answer: "den Holocaust leugnen",
    id: "148",
  },
  {
    question: {
      de: "Eine Gerichtsschöffin/ein Gerichtsschöffe in Deutschland ist …",
      en: "A lay judge in Germany is ...",
    },
    options: [
      {
        de: "die Stellvertreterin/der Stellvertreter des Stadtoberhaupts.",
        en: "the deputy of the head of the city.",
        id: "149-0",
      },
      {
        de: "eine ehrenamtliche Richterin/ein ehrenamtlicher Richter.",
        en: "an honorary judge.",
        id: "149-1",
      },
      {
        de: "ein Mitglied eines Gemeinderats.",
        en: "a member of a municipal council.",
        id: "149-2",
      },
      {
        de: "eine Person, die Jura studiert hat.",
        en: "a person who has studied law.",
        id: "149-3",
      },
    ],
    answer: "eine ehrenamtliche Richterin/ein ehrenamtlicher Richter.",
    id: "149",
  },
  {
    question: {
      de: "Wer baute die Mauer in Berlin?",
      en: "Who built the Wall in Berlin?",
    },
    options: [
      {
        de: "Großbritannien",
        en: "Great Britain",
        id: "150-0",
      },
      {
        de: "die DDR",
        en: "the GDR",
        id: "150-1",
      },
      {
        de: "die Bundesrepublik Deutschland",
        en: "the Federal Republic of Germany",
        id: "150-2",
      },
      {
        de: "die USA",
        en: "the USA",
        id: "150-3",
      },
    ],
    answer: "die DDR",
    id: "150",
  },
  {
    question: {
      de: "Wann waren die Nationalsozialisten mit Adolf Hitler in Deutschland an der Macht?",
      en: "When were the National Socialists with Adolf Hitler in power in Germany?",
    },
    options: [
      {
        de: "1918 bis 1923",
        en: "1918 to 1923",
        id: "151-0",
      },
      {
        de: "1932 bis 1950",
        en: "1932 to 1950",
        id: "151-1",
      },
      {
        de: "1933 bis 1945",
        en: "1933 to 1945",
        id: "151-2",
      },
      {
        de: "1945 bis 1989",
        en: "1945 to 1989",
        id: "151-3",
      },
    ],
    answer: "1933 bis 1945",
    id: "151",
  },
  {
    question: {
      de: "Was war am 8. Mai 1945?",
      en: "What happened on May 8, 1945?",
    },
    options: [
      {
        de: "Tod Adolf Hitlers",
        en: "Death of Adolf Hitler",
        id: "152-0",
      },
      {
        de: "Beginn des Berliner Mauerbaus",
        en: "Beginning of the Berlin Wall construction",
        id: "152-1",
      },
      {
        de: "Wahl von Konrad Adenauer zum Bundeskanzler",
        en: "Election of Konrad Adenauer as Chancellor",
        id: "152-2",
      },
      {
        de: "Ende des Zweiten Weltkriegs in Europa",
        en: "End of World War II in Europe",
        id: "152-3",
      },
    ],
    answer: "Ende des Zweiten Weltkriegs in Europa",
    id: "152",
  },
  {
    question: {
      de: "Wann war der Zweite Weltkrieg zu Ende?",
      en: "When did World War II end?",
    },
    options: [
      {
        de: "1933",
        en: "1933",
        id: "153-0",
      },
      {
        de: "1945",
        en: "1945",
        id: "153-1",
      },
      {
        de: "1949",
        en: "1949",
        id: "153-2",
      },
      {
        de: "1961",
        en: "1961",
        id: "153-3",
      },
    ],
    answer: "1945",
    id: "153",
  },
  {
    question: {
      de: "Wann waren die Nationalsozialisten in Deutschland an der Macht?",
      en: "When were the National Socialists in power in Germany?",
    },
    options: [
      {
        de: "1888 bis 1918",
        en: "1888 to 1918",
        id: "154-0",
      },
      {
        de: "1921 bis 1934",
        en: "1921 to 1934",
        id: "154-1",
      },
      {
        de: "1933 bis 1945",
        en: "1933 to 1945",
        id: "154-2",
      },
      {
        de: "1949 bis 1963",
        en: "1949 to 1963",
        id: "154-3",
      },
    ],
    answer: "1933 bis 1945",
    id: "154",
  },
  {
    question: {
      de: "In welchem Jahr wurde Hitler Reichskanzler?",
      en: "In what year did Hitler become Reich Chancellor?",
    },
    options: [
      {
        de: "1923",
        en: "1923",
        id: "155-0",
      },
      {
        de: "1927",
        en: "1927",
        id: "155-1",
      },
      {
        de: "1933",
        en: "1933",
        id: "155-2",
      },
      {
        de: "1936",
        en: "1936",
        id: "155-3",
      },
    ],
    answer: "1933",
    id: "155",
  },
  {
    question: {
      de: "Die Nationalsozialisten mit Adolf Hitler errichteten 1933 in Deutschland …",
      en: "The National Socialists with Adolf Hitler established in Germany in 1933 ...",
    },
    options: [
      {
        de: "eine Diktatur.",
        en: "a dictatorship.",
        id: "156-0",
      },
      {
        de: "einen demokratischen Staat.",
        en: "a democratic state.",
        id: "156-1",
      },
      {
        de: "eine Monarchie.",
        en: "a monarchy.",
        id: "156-2",
      },
      {
        de: "ein Fürstentum.",
        en: "a principality.",
        id: "156-3",
      },
    ],
    answer: "eine Diktatur.",
    id: "156",
  },
  {
    question: {
      de: 'Das "Dritte Reich" war eine …',
      en: 'The "Third Reich" was a ...',
    },
    options: [
      {
        de: "Diktatur.",
        en: "dictatorship.",
        id: "157-0",
      },
      {
        de: "Demokratie.",
        en: "democracy.",
        id: "157-1",
      },
      {
        de: "Monarchie.",
        en: "monarchy.",
        id: "157-2",
      },
      {
        de: "Räterepublik.",
        en: "soviet republic.",
        id: "157-3",
      },
    ],
    answer: "Diktatur.",
    id: "157",
  },
  {
    question: {
      de: "Was gab es in Deutschland nicht während der Zeit des Nationalsozialismus?",
      en: "What did not exist in Germany during the time of National Socialism?",
    },
    options: [
      {
        de: "freie Wahlen",
        en: "free elections",
        id: "158-0",
      },
      {
        de: "Pressezensur",
        en: "press censorship",
        id: "158-1",
      },
      {
        de: "willkürliche Verhaftungen",
        en: "arbitrary arrests",
        id: "158-2",
      },
      {
        de: "Verfolgung von Juden",
        en: "persecution of Jews",
        id: "158-3",
      },
    ],
    answer: "freie Wahlen",
    id: "158",
  },
  {
    question: {
      de: "Welcher Krieg dauerte von 1939 bis 1945?",
      en: "Which war lasted from 1939 to 1945?",
    },
    options: [
      {
        de: "der Erste Weltkrieg",
        en: "World War I",
        id: "159-0",
      },
      {
        de: "der Zweite Weltkrieg",
        en: "World War II",
        id: "159-1",
      },
      {
        de: "der Vietnamkrieg",
        en: "the Vietnam War",
        id: "159-2",
      },
      {
        de: "der Golfkrieg",
        en: "the Gulf War",
        id: "159-3",
      },
    ],
    answer: "der Zweite Weltkrieg",
    id: "159",
  },
  {
    question: {
      de: "Was kennzeichnete den NS-Staat? Eine Politik …",
      en: "What characterized the Nazi state? A policy of ...",
    },
    options: [
      {
        de: "des staatlichen Rassismus",
        en: "state racism",
        id: "160-0",
      },
      {
        de: "der Meinungsfreiheit",
        en: "freedom of expression",
        id: "160-1",
      },
      {
        de: "der allgemeinen Religionsfreiheit",
        en: "general religious freedom",
        id: "160-2",
      },
      {
        de: "der Entwicklung der Demokratie",
        en: "the development of democracy",
        id: "160-3",
      },
    ],
    answer: "des staatlichen Rassismus",
    id: "160",
  },
  {
    question: {
      de: "Claus Schenk Graf von Stauffenberg wurde bekannt durch …",
      en: "Claus Schenk Graf von Stauffenberg became known through ...",
    },
    options: [
      {
        de: "eine Goldmedaille bei den Olympischen Spielen 1936.",
        en: "a gold medal at the 1936 Olympic Games.",
        id: "161-0",
      },
      {
        de: "den Bau des Reichstagsgebäudes.",
        en: "the construction of the Reichstag building.",
        id: "161-1",
      },
      {
        de: "den Aufbau der Wehrmacht.",
        en: "the establishment of the Wehrmacht.",
        id: "161-2",
      },
      {
        de: "das Attentat auf Hitler am 20. Juli 1944.",
        en: "the assassination attempt on Hitler on July 20, 1944.",
        id: "161-3",
      },
    ],
    answer: "das Attentat auf Hitler am 20. Juli 1944.",
    id: "161",
  },
  {
    question: {
      de: "In welchem Jahr zerstörten die Nationalsozialisten Synagogen und jüdische Geschäfte in Deutschland?",
      en: "In what year did the National Socialists destroy synagogues and Jewish businesses in Germany?",
    },
    options: [
      {
        de: "1925",
        en: "1925",
        id: "162-0",
      },
      {
        de: "1930",
        en: "1930",
        id: "162-1",
      },
      {
        de: "1938",
        en: "1938",
        id: "162-2",
      },
      {
        de: "1945",
        en: "1945",
        id: "162-3",
      },
    ],
    answer: "1938",
    id: "162",
  },
  {
    question: {
      de: "Was passierte am 9. November 1938 in Deutschland?",
      en: "What happened on November 9, 1938, in Germany?",
    },
    options: [
      {
        de: "Mit dem Angriff auf Polen beginnt der Zweite Weltkrieg.",
        en: "World War II begins with the attack on Poland.",
        id: "163-0",
      },
      {
        de: "Die Nationalsozialisten verlieren eine Wahl und lösen den Reichstag auf.",
        en: "The National Socialists lose an election and dissolve the Reichstag.",
        id: "163-1",
      },
      {
        de: "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.",
        en: "Jewish businesses and synagogues are destroyed by National Socialists and their supporters.",
        id: "163-2",
      },
      {
        de: "Hitler wird Reichspräsident und lässt alle Parteien verbieten.",
        en: "Hitler becomes Reich President and has all parties banned.",
        id: "163-3",
      },
    ],
    answer:
      "Jüdische Geschäfte und Synagogen werden durch Nationalsozialisten und ihre Anhänger zerstört.",
    id: "163",
  },
  {
    question: {
      de: "Wie hieß der erste Bundeskanzler der Bundesrepublik Deutschland?",
      en: "What was the name of the first Chancellor of the Federal Republic of Germany?",
    },
    options: [
      {
        de: "Konrad Adenauer",
        en: "Konrad Adenauer",
        id: "164-0",
      },
      {
        de: "Kurt Georg Kiesinger",
        en: "Kurt Georg Kiesinger",
        id: "164-1",
      },
      {
        de: "Helmut Schmidt",
        en: "Helmut Schmidt",
        id: "164-2",
      },
      {
        de: "Willy Brandt",
        en: "Willy Brandt",
        id: "164-3",
      },
    ],
    answer: "Konrad Adenauer",
    id: "164",
  },
  {
    question: {
      de: 'Bei welchen Demonstrationen in Deutschland riefen die Menschen "Wir sind das Volk"?',
      en: 'At which demonstrations in Germany did people shout "We are the people"?',
    },
    options: [
      {
        de: "beim Arbeiteraufstand 1953 in der DDR",
        en: "during the workers' uprising in 1953 in the GDR",
        id: "165-0",
      },
      {
        de: "bei den Demonstrationen 1968 in der Bundesrepublik Deutschland",
        en: "during the 1968 demonstrations in the Federal Republic of Germany",
        id: "165-1",
      },
      {
        de: "bei den Anti-Atomkraft-Demonstrationen 1985 in der Bundesrepublik Deutschland",
        en: "during the anti-nuclear demonstrations in 1985 in the Federal Republic of Germany",
        id: "165-2",
      },
      {
        de: "bei den Montagsdemonstrationen 1989 in der DDR",
        en: "during the Monday demonstrations in 1989 in the GDR",
        id: "165-3",
      },
    ],
    answer: "bei den Montagsdemonstrationen 1989 in der DDR",
    id: "165",
  },
  {
    question: {
      de: 'Welche Länder wurden nach dem Zweiten Weltkrieg in Deutschland als "Alliierte Besatzungsmächte" bezeichnet?',
      en: 'Which countries were referred to as "Allied occupying powers" in Germany after World War II?',
    },
    options: [
      {
        de: "Sowjetunion, Großbritannien, Polen, Schweden",
        en: "Soviet Union, Great Britain, Poland, Sweden",
        id: "166-0",
      },
      {
        de: "Frankreich, Sowjetunion, Italien, Japan",
        en: "France, Soviet Union, Italy, Japan",
        id: "166-1",
      },
      {
        de: "USA, Sowjetunion, Spanien, Portugal",
        en: "USA, Soviet Union, Spain, Portugal",
        id: "166-2",
      },
      {
        de: "USA, Sowjetunion, Großbritannien, Frankreich",
        en: "USA, Soviet Union, Great Britain, France",
        id: "166-3",
      },
    ],
    answer: "USA, Sowjetunion, Großbritannien, Frankreich",
    id: "166",
  },
  {
    question: {
      de: 'Welches Land war keine "Alliierte Besatzungsmacht" in Deutschland?',
      en: 'Which country was not an "Allied occupying power" in Germany?',
    },
    options: [
      {
        de: "USA",
        en: "USA",
        id: "167-0",
      },
      {
        de: "Sowjetunion",
        en: "Soviet Union",
        id: "167-1",
      },
      {
        de: "Frankreich",
        en: "France",
        id: "167-2",
      },
      {
        de: "Japan",
        en: "Japan",
        id: "167-3",
      },
    ],
    answer: "Japan",
    id: "167",
  },
  {
    question: {
      de: "Wann wurde die Bundesrepublik Deutschland gegründet?",
      en: "When was the Federal Republic of Germany founded?",
    },
    options: [
      {
        de: "1939",
        en: "1939",
        id: "168-0",
      },
      {
        de: "1945",
        en: "1945",
        id: "168-1",
      },
      {
        de: "1949",
        en: "1949",
        id: "168-2",
      },
      {
        de: "1951",
        en: "1951",
        id: "168-3",
      },
    ],
    answer: "1949",
    id: "168",
  },
  {
    question: {
      de: "Was gab es während der Zeit des Nationalsozialismus in Deutschland?",
      en: "What existed in Germany during the period of National Socialism?",
    },
    options: [
      {
        de: "das Verbot von Parteien",
        en: "the ban on political parties",
        id: "169-0",
      },
      {
        de: "das Recht zur freien Entfaltung der Persönlichkeit",
        en: "the right to free development of personality",
        id: "169-1",
      },
      {
        de: "Pressefreiheit",
        en: "freedom of the press",
        id: "169-2",
      },
      {
        de: "den Schutz der Menschenwürde",
        en: "the protection of human dignity",
        id: "169-3",
      },
    ],
    answer: "das Verbot von Parteien",
    id: "169",
  },
  {
    question: {
      de: "Soziale Marktwirtschaft bedeutet, die Wirtschaft …",
      en: "Social market economy means the economy ...",
    },
    options: [
      {
        de: "steuert sich allein nach Angebot und Nachfrage.",
        en: "is controlled solely by supply and demand.",
        id: "170-0",
      },
      {
        de: "wird vom Staat geplant und gesteuert, Angebot und Nachfrage werden nicht berücksichtigt.",
        en: "is planned and controlled by the state; supply and demand are not considered.",
        id: "170-1",
      },
      {
        de: "richtet sich nach der Nachfrage im Ausland.",
        en: "is oriented towards foreign demand.",
        id: "170-2",
      },
      {
        de: "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich.",
        en: "is based on supply and demand, but the state ensures social balance.",
        id: "170-3",
      },
    ],
    answer:
      "richtet sich nach Angebot und Nachfrage, aber der Staat sorgt für einen sozialen Ausgleich.",
    id: "170",
  },
  {
    question: {
      de: "In welcher Besatzungszone wurde die DDR gegründet? In der …",
      en: "In which occupation zone was the GDR founded? In the ...",
    },
    options: [
      {
        de: "amerikanischen Besatzungszone",
        en: "American occupation zone",
        id: "171-0",
      },
      {
        de: "französischen Besatzungszone",
        en: "French occupation zone",
        id: "171-1",
      },
      {
        de: "britischen Besatzungszone",
        en: "British occupation zone",
        id: "171-2",
      },
      {
        de: "sowjetischen Besatzungszone",
        en: "Soviet occupation zone",
        id: "171-3",
      },
    ],
    answer: "sowjetischen Besatzungszone",
    id: "171",
  },
  {
    question: {
      de: "Die Bundesrepublik Deutschland ist ein Gründungsmitglied …",
      en: "The Federal Republic of Germany is a founding member of ...",
    },
    options: [
      {
        de: "des Nordatlantikpakts (NATO).",
        en: "the North Atlantic Treaty Organization (NATO).",
        id: "172-0",
      },
      {
        de: "der Vereinten Nationen (VN).",
        en: "the United Nations (UN).",
        id: "172-1",
      },
      {
        de: "der Europäischen Union (EU).",
        en: "the European Union (EU).",
        id: "172-2",
      },
      {
        de: "des Warschauer Pakts.",
        en: "the Warsaw Pact.",
        id: "172-3",
      },
    ],
    answer: "der Europäischen Union (EU).",
    id: "172",
  },
  {
    question: {
      de: "Wann wurde die DDR gegründet?",
      en: "When was the GDR founded?",
    },
    options: [
      {
        de: "1947",
        en: "1947",
        id: "173-0",
      },
      {
        de: "1949",
        en: "1949",
        id: "173-1",
      },
      {
        de: "1953",
        en: "1953",
        id: "173-2",
      },
      {
        de: "1956",
        en: "1956",
        id: "173-3",
      },
    ],
    answer: "1949",
    id: "173",
  },
  {
    question: {
      de: "Wie viele Besatzungszonen gab es in Deutschland nach dem Zweiten Weltkrieg?",
      en: "How many occupation zones were there in Germany after World War II?",
    },
    options: [
      {
        de: "3",
        en: "3",
        id: "174-0",
      },
      {
        de: "4",
        en: "4",
        id: "174-1",
      },
      {
        de: "5",
        en: "5",
        id: "174-2",
      },
      {
        de: "6",
        en: "6",
        id: "174-3",
      },
    ],
    answer: "4",
    id: "174",
  },
  {
    question: {
      de: "Wie waren die Besatzungszonen Deutschlands nach 1945 verteilt?",
      en: "How were the occupation zones of Germany distributed after 1945?",
      image: "aufgabe_176.jpg",
    },
    options: [
      {
        de: "1=Großbritannien, 2=Sowjetunion, 3=Frankreich, 4=USA",
        en: "1=Great Britain, 2=Soviet Union, 3=France, 4=USA",
        id: "175-0",
      },
      {
        de: "1=Sowjetunion, 2=Großbritannien, 3=USA, 4=Frankreich",
        en: "1=Soviet Union, 2=Great Britain, 3=USA, 4=France",
        id: "175-1",
      },
      {
        de: "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich",
        en: "1=Great Britain, 2=Soviet Union, 3=USA, 4=France",
        id: "175-2",
      },
      {
        de: "1=Großbritannien, 2=USA, 3=Sowjetunion, 4=Frankreich",
        en: "1=Great Britain, 2=USA, 3=Soviet Union, 4=France",
        id: "175-3",
      },
    ],
    answer: "1=Großbritannien, 2=Sowjetunion, 3=USA, 4=Frankreich",
    id: "175",
  },
  {
    question: {
      de: "Welche deutsche Stadt wurde nach dem Zweiten Weltkrieg in vier Sektoren aufgeteilt?",
      en: "Which German city was divided into four sectors after World War II?",
    },
    options: [
      {
        de: "München",
        en: "Munich",
        id: "176-0",
      },
      {
        de: "Berlin",
        en: "Berlin",
        id: "176-1",
      },
      {
        de: "Dresden",
        en: "Dresden",
        id: "176-2",
      },
      {
        de: "Frankfurt/Oder",
        en: "Frankfurt/Oder",
        id: "176-3",
      },
    ],
    answer: "Berlin",
    id: "176",
  },
  {
    question: {
      de: "Vom Juni 1948 bis zum Mai 1949 wurden die Bürgerinnen und Bürger von West-Berlin durch eine Luftbrücke versorgt. Welcher Umstand war dafür verantwortlich?",
      en: "From June 1948 to May 1949, the citizens of West Berlin were supplied by an airlift. What circumstance was responsible for this?",
    },
    options: [
      {
        de: "Für Frankreich war eine Versorgung der West-Berliner Bevölkerung mit dem Flugzeug kostengünstiger.",
        en: "For France, supplying the West Berlin population by plane was more cost-effective.",
        id: "177-0",
      },
      {
        de: "Die amerikanischen Soldatinnen und Soldaten hatten beim Landtransport Angst vor Überfällen.",
        en: "American soldiers were afraid of attacks during land transport.",
        id: "177-1",
      },
      {
        de: "Für Großbritannien war die Versorgung über die Luftbrücke schneller.",
        en: "For Great Britain, supply via the airlift was faster.",
        id: "177-2",
      },
      {
        de: "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege.",
        en: "The Soviet Union interrupted all land traffic.",
        id: "177-3",
      },
    ],
    answer: "Die Sowjetunion unterbrach den gesamten Verkehr auf dem Landwege.",
    id: "177",
  },
  {
    question: {
      de: "Wie endete der Zweite Weltkrieg in Europa offiziell?",
      en: "How did World War II officially end in Europe?",
    },
    options: [
      {
        de: "mit dem Tod Adolf Hitlers",
        en: "with the death of Adolf Hitler",
        id: "178-0",
      },
      {
        de: "durch die bedingungslose Kapitulation Deutschlands",
        en: "through Germany's unconditional surrender",
        id: "178-1",
      },
      {
        de: "mit dem Rückzug der Deutschen aus den besetzten Gebieten",
        en: "with the withdrawal of the Germans from the occupied territories",
        id: "178-2",
      },
      {
        de: "durch eine Revolution in Deutschland",
        en: "through a revolution in Germany",
        id: "178-3",
      },
    ],
    answer: "durch die bedingungslose Kapitulation Deutschlands",
    id: "178",
  },
  {
    question: {
      de: "Der erste Bundeskanzler der Bundesrepublik Deutschland war …",
      en: "The first Chancellor of the Federal Republic of Germany was ...",
    },
    options: [
      {
        de: "Ludwig Erhard.",
        en: "Ludwig Erhard.",
        id: "179-0",
      },
      {
        de: "Willy Brandt.",
        en: "Willy Brandt.",
        id: "179-1",
      },
      {
        de: "Konrad Adenauer.",
        en: "Konrad Adenauer.",
        id: "179-2",
      },
      {
        de: "Gerhard Schröder.",
        en: "Gerhard Schröder.",
        id: "179-3",
      },
    ],
    answer: "Konrad Adenauer.",
    id: "179",
  },
  {
    question: {
      de: "Was wollte Willy Brandt mit seinem Kniefall 1970 im ehemaligen jüdischen Ghetto in Warschau ausdrücken?",
      en: "What did Willy Brandt want to express with his genuflection in 1970 in the former Jewish ghetto in Warsaw?",
      image: "aufgabe_181.jpg",
    },
    options: [
      {
        de: "Er hat sich den ehemaligen Alliierten unterworfen.",
        en: "He submitted to the former Allies.",
        id: "180-0",
      },
      {
        de: "Er bat Polen und die polnischen Juden um Vergebung.",
        en: "He asked Poland and Polish Jews for forgiveness.",
        id: "180-1",
      },
      {
        de: "Er zeigte seine Demut vor dem Warschauer Pakt.",
        en: "He showed his humility before the Warsaw Pact.",
        id: "180-2",
      },
      {
        de: "Er sprach ein Gebet am Grab des Unbekannten Soldaten.",
        en: "He said a prayer at the Tomb of the Unknown Soldier.",
        id: "180-3",
      },
    ],
    answer: "Er bat Polen und die polnischen Juden um Vergebung.",
    id: "180",
  },
  {
    question: {
      de: "Wie heißt das jüdische Gebetshaus?",
      en: "What is the name of the Jewish house of prayer?",
    },
    options: [
      {
        de: "Basilika",
        en: "Basilica",
        id: "181-0",
      },
      {
        de: "Moschee",
        en: "Mosque",
        id: "181-1",
      },
      {
        de: "Synagoge",
        en: "Synagogue",
        id: "181-2",
      },
      {
        de: "Kirche",
        en: "Church",
        id: "181-3",
      },
    ],
    answer: "Synagoge",
    id: "181",
  },
  {
    question: {
      de: 'Wann war in der Bundesrepublik Deutschland das "Wirtschaftswunder"?',
      en: 'When was the "economic miracle" in the Federal Republic of Germany?',
    },
    options: [
      {
        de: "40er Jahre",
        en: "1940s",
        id: "182-0",
      },
      {
        de: "50er Jahre",
        en: "1950s",
        id: "182-1",
      },
      {
        de: "70er Jahre",
        en: "1970s",
        id: "182-2",
      },
      {
        de: "80er Jahre",
        en: "1980s",
        id: "182-3",
      },
    ],
    answer: "50er Jahre",
    id: "182",
  },
  {
    question: {
      de: "Auf welcher rechtlichen Grundlage wurde der Staat Israel gegründet?",
      en: "On what legal basis was the State of Israel founded?",
    },
    options: [
      {
        de: "eine Resolution der Vereinten Nationen",
        en: "a United Nations resolution",
        id: "183-0",
      },
      {
        de: "ein Beschluss des Zionistenkongresses",
        en: "a resolution of the Zionist Congress",
        id: "183-1",
      },
      {
        de: "ein Vorschlag der Bundesregierung",
        en: "a proposal by the federal government",
        id: "183-2",
      },
      {
        de: "ein Vorschlag der UdSSR",
        en: "a proposal by the USSR",
        id: "183-3",
      },
    ],
    answer: "eine Resolution der Vereinten Nationen",
    id: "183",
  },
  {
    question: {
      de: 'Wofür stand der Ausdruck "Eiserner Vorhang"? Für die Abschottung …',
      en: 'What did the term "Iron Curtain" stand for? For the isolation of ...',
    },
    options: [
      {
        de: "des Warschauer Pakts gegen den Westen",
        en: "the Warsaw Pact against the West",
        id: "184-0",
      },
      {
        de: "Norddeutschlands gegen Süddeutschland",
        en: "North Germany against South Germany",
        id: "184-1",
      },
      {
        de: "Nazi-Deutschlands gegen die Alliierten",
        en: "Nazi Germany against the Allies",
        id: "184-2",
      },
      {
        de: "Europas gegen die USA",
        en: "Europe against the USA",
        id: "184-3",
      },
    ],
    answer: "des Warschauer Pakts gegen den Westen",
    id: "184",
  },
  {
    question: {
      de: "Im Jahr 1953 gab es in der DDR einen Aufstand, an den lange Zeit in der Bundesrepublik Deutschland ein Feiertag erinnerte. Wann war das?",
      en: "In 1953, there was an uprising in the GDR, which was long commemorated as a public holiday in the Federal Republic of Germany. When was that?",
    },
    options: [
      {
        de: "1. Mai",
        en: "May 1st",
        id: "185-0",
      },
      {
        de: "17. Juni",
        en: "June 17th",
        id: "185-1",
      },
      {
        de: "20. Juli",
        en: "July 20th",
        id: "185-2",
      },
      {
        de: "9. November",
        en: "November 9th",
        id: "185-3",
      },
    ],
    answer: "17. Juni",
    id: "185",
  },
  {
    question: {
      de: "Welcher deutsche Staat hatte eine schwarz-rot-goldene Flagge mit Hammer, Zirkel und Ährenkranz?",
      en: "Which German state had a black, red, and gold flag with a hammer, compass, and wreath of ears?",
      image: "aufgabe_187.jpg",
    },
    options: [
      {
        de: "Preußen",
        en: "Prussia",
        id: "186-0",
      },
      {
        de: "Bundesrepublik Deutschland",
        en: "Federal Republic of Germany",
        id: "186-1",
      },
      {
        de: '"Drittes Reich"',
        en: '"Third Reich"',
        id: "186-2",
      },
      {
        de: "DDR",
        en: "GDR",
        id: "186-3",
      },
    ],
    answer: "DDR",
    id: "186",
  },
  {
    question: {
      de: "In welchem Jahr wurde die Mauer in Berlin gebaut?",
      en: "In what year was the Berlin Wall built?",
    },
    options: [
      {
        de: "1953",
        en: "1953",
        id: "187-0",
      },
      {
        de: "1956",
        en: "1956",
        id: "187-1",
      },
      {
        de: "1959",
        en: "1959",
        id: "187-2",
      },
      {
        de: "1961",
        en: "1961",
        id: "187-3",
      },
    ],
    answer: "1961",
    id: "187",
  },
  {
    question: {
      de: "Wann baute die DDR die Mauer in Berlin?",
      en: "When did the GDR build the Berlin Wall?",
    },
    options: [
      {
        de: "1919",
        en: "1919",
        id: "188-0",
      },
      {
        de: "1933",
        en: "1933",
        id: "188-1",
      },
      {
        de: "1961",
        en: "1961",
        id: "188-2",
      },
      {
        de: "1990",
        en: "1990",
        id: "188-3",
      },
    ],
    answer: "1961",
    id: "188",
  },
  {
    question: {
      de: "Was bedeutet die Abkürzung DDR?",
      en: "What does the abbreviation GDR stand for?",
    },
    options: [
      {
        de: "Dritter Deutscher Rundfunk",
        en: "Third German Broadcasting",
        id: "189-0",
      },
      {
        de: "Die Deutsche Republik",
        en: "The German Republic",
        id: "189-1",
      },
      {
        de: "Dritte Deutsche Republik",
        en: "Third German Republic",
        id: "189-2",
      },
      {
        de: "Deutsche Demokratische Republik",
        en: "German Democratic Republic",
        id: "189-3",
      },
    ],
    answer: "Deutsche Demokratische Republik",
    id: "189",
  },
  {
    question: {
      de: "Wann wurde die Mauer in Berlin für alle geöffnet?",
      en: "When was the Berlin Wall opened for everyone?",
    },
    options: [
      {
        de: "1987",
        en: "1987",
        id: "190-0",
      },
      {
        de: "1989",
        en: "1989",
        id: "190-1",
      },
      {
        de: "1992",
        en: "1992",
        id: "190-2",
      },
      {
        de: "1995",
        en: "1995",
        id: "190-3",
      },
    ],
    answer: "1989",
    id: "190",
  },
  {
    question: {
      de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      en: "Which of today's German federal states formerly belonged to the territory of the GDR?",
    },
    options: [
      {
        de: "Brandenburg",
        en: "Brandenburg",
        id: "191-0",
      },
      {
        de: "Bayern",
        en: "Bavaria",
        id: "191-1",
      },
      {
        de: "Saarland",
        en: "Saarland",
        id: "191-2",
      },
      {
        de: "Hessen",
        en: "Hesse",
        id: "191-3",
      },
    ],
    answer: "Brandenburg",
    id: "191",
  },
  {
    question: {
      de: "Von 1961 bis 1989 war Berlin …",
      en: "From 1961 to 1989, Berlin was ...",
    },
    options: [
      {
        de: "ohne Bürgermeister.",
        en: "without a mayor.",
        id: "192-0",
      },
      {
        de: "ein eigener Staat.",
        en: "a separate state.",
        id: "192-1",
      },
      {
        de: "durch eine Mauer geteilt.",
        en: "divided by a wall.",
        id: "192-2",
      },
      {
        de: "nur mit dem Flugzeug erreichbar.",
        en: "only accessible by plane.",
        id: "192-3",
      },
    ],
    answer: "durch eine Mauer geteilt.",
    id: "192",
  },
  {
    question: {
      de: "Am 3. Oktober feiert man in Deutschland den Tag der Deutschen …",
      en: "On October 3rd, Germany celebrates the Day of German ...",
    },
    options: [
      {
        de: "Einheit.",
        en: "Unity.",
        id: "193-0",
      },
      {
        de: "Nation.",
        en: "Nation.",
        id: "193-1",
      },
      {
        de: "Bundesländer.",
        en: "Federal States.",
        id: "193-2",
      },
      {
        de: "Städte.",
        en: "Cities.",
        id: "193-3",
      },
    ],
    answer: "Einheit.",
    id: "193",
  },
  {
    question: {
      de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      en: "Which of today's German federal states formerly belonged to the territory of the GDR?",
    },
    options: [
      {
        de: "Hessen",
        en: "Hesse",
        id: "194-0",
      },
      {
        de: "Sachsen-Anhalt",
        en: "Saxony-Anhalt",
        id: "194-1",
      },
      {
        de: "Nordrhein-Westfalen",
        en: "North Rhine-Westphalia",
        id: "194-2",
      },
      {
        de: "Saarland",
        en: "Saarland",
        id: "194-3",
      },
    ],
    answer: "Sachsen-Anhalt",
    id: "194",
  },
  {
    question: {
      de: 'Warum nennt man die Zeit im Herbst 1989 in der DDR "Die Wende"? In dieser Zeit veränderte sich die DDR politisch …',
      en: 'Why is the period in autumn 1989 in the GDR called "The Turnaround"? During this time, the GDR changed politically ...',
    },
    options: [
      {
        de: "von einer Diktatur zur Demokratie.",
        en: "from a dictatorship to a democracy.",
        id: "195-0",
      },
      {
        de: "von einer liberalen Marktwirtschaft zum Sozialismus.",
        en: "from a liberal market economy to socialism.",
        id: "195-1",
      },
      {
        de: "von einer Monarchie zur Sozialdemokratie.",
        en: "from a monarchy to social democracy.",
        id: "195-2",
      },
      {
        de: "von einem religiösen Staat zu einem kommunistischen Staat.",
        en: "from a religious state to a communist state.",
        id: "195-3",
      },
    ],
    answer: "von einer Diktatur zur Demokratie.",
    id: "195",
  },
  {
    question: {
      de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      en: "Which of today's German federal states formerly belonged to the territory of the GDR?",
    },
    options: [
      {
        de: "Thüringen",
        en: "Thuringia",
        id: "196-0",
      },
      {
        de: "Hessen",
        en: "Hesse",
        id: "196-1",
      },
      {
        de: "Bayern",
        en: "Bavaria",
        id: "196-2",
      },
      {
        de: "Bremen",
        en: "Bremen",
        id: "196-3",
      },
    ],
    answer: "Thüringen",
    id: "196",
  },
  {
    question: {
      de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      en: "Which of today's German federal states formerly belonged to the territory of the GDR?",
    },
    options: [
      {
        de: "Bayern",
        en: "Bavaria",
        id: "197-0",
      },
      {
        de: "Niedersachsen",
        en: "Lower Saxony",
        id: "197-1",
      },
      {
        de: "Sachsen",
        en: "Saxony",
        id: "197-2",
      },
      {
        de: "Baden-Württemberg",
        en: "Baden-Württemberg",
        id: "197-3",
      },
    ],
    answer: "Sachsen",
    id: "197",
  },
  {
    question: {
      de: 'Mit der Abkürzung "Stasi" meinte man in der DDR …',
      en: 'In the GDR, the abbreviation "Stasi" referred to ...',
    },
    options: [
      {
        de: "das Parlament.",
        en: "the parliament.",
        id: "198-0",
      },
      {
        de: "das Ministerium für Staatssicherheit.",
        en: "the Ministry for State Security.",
        id: "198-1",
      },
      {
        de: "eine regierende Partei.",
        en: "a ruling party.",
        id: "198-2",
      },
      {
        de: "das Ministerium für Volksbildung.",
        en: "the Ministry of Public Education.",
        id: "198-3",
      },
    ],
    answer: "das Ministerium für Staatssicherheit.",
    id: "198",
  },
  {
    question: {
      de: "Welches heutige deutsche Bundesland gehörte früher zum Gebiet der DDR?",
      en: "Which of today's German federal states formerly belonged to the territory of the GDR?",
    },
    options: [
      {
        de: "Hessen",
        en: "Hesse",
        id: "199-0",
      },
      {
        de: "Schleswig-Holstein",
        en: "Schleswig-Holstein",
        id: "199-1",
      },
      {
        de: "Mecklenburg-Vorpommern",
        en: "Mecklenburg-Western Pomerania",
        id: "199-2",
      },
      {
        de: "Saarland",
        en: "Saarland",
        id: "199-3",
      },
    ],
    answer: "Mecklenburg-Vorpommern",
    id: "199",
  },
  {
    question: {
      de: "Welche der folgenden Auflistungen enthält nur Bundesländer, die zum Gebiet der früheren DDR gehörten?",
      en: "Which of the following lists contains only federal states that belonged to the territory of the former GDR?",
    },
    options: [
      {
        de: "Niedersachsen, Nordrhein-Westfalen, Hessen, Schleswig-Holstein, Brandenburg",
        en: "Lower Saxony, North Rhine-Westphalia, Hesse, Schleswig-Holstein, Brandenburg",
        id: "200-0",
      },
      {
        de: "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen",
        en: "Mecklenburg-Western Pomerania, Brandenburg, Saxony, Saxony-Anhalt, Thuringia",
        id: "200-1",
      },
      {
        de: "Bayern, Baden-Württemberg, Rheinland-Pfalz, Thüringen, Sachsen",
        en: "Bavaria, Baden-Württemberg, Rhineland-Palatinate, Thuringia, Saxony",
        id: "200-2",
      },
      {
        de: "Sachsen, Thüringen, Hessen, Niedersachen, Brandenburg",
        en: "Saxony, Thuringia, Hesse, Lower Saxony, Brandenburg",
        id: "200-3",
      },
    ],
    answer:
      "Mecklenburg-Vorpommern, Brandenburg, Sachsen, Sachsen-Anhalt, Thüringen",
    id: "200",
  },
  {
    question: {
      de: 'Zu wem gehörte die DDR im "Kalten Krieg"?',
      en: 'To whom did the GDR belong in the "Cold War"?',
    },
    options: [
      {
        de: "zu den Westmächten",
        en: "to the Western powers",
        id: "201-0",
      },
      {
        de: "zum Warschauer Pakt",
        en: "to the Warsaw Pact",
        id: "201-1",
      },
      {
        de: "zur NATO",
        en: "to NATO",
        id: "201-2",
      },
      {
        de: "zu den blockfreien Staaten",
        en: "to the non-aligned states",
        id: "201-3",
      },
    ],
    answer: "zum Warschauer Pakt",
    id: "201",
  },
  {
    question: {
      de: "Wie hieß das Wirtschaftssystem der DDR?",
      en: "What was the economic system of the GDR called?",
    },
    options: [
      {
        de: "Marktwirtschaft",
        en: "Market economy",
        id: "202-0",
      },
      {
        de: "Planwirtschaft",
        en: "Planned economy",
        id: "202-1",
      },
      {
        de: "Angebot und Nachfrage",
        en: "Supply and demand",
        id: "202-2",
      },
      {
        de: "Kapitalismus",
        en: "Capitalism",
        id: "202-3",
      },
    ],
    answer: "Planwirtschaft",
    id: "202",
  },
  {
    question: {
      de: "Wie wurden die Bundesrepublik Deutschland und die DDR zu einem Staat?",
      en: "How did the Federal Republic of Germany and the GDR become one state?",
    },
    options: [
      {
        de: "Die Bundesrepublik hat die DDR besetzt.",
        en: "The Federal Republic occupied the GDR.",
        id: "203-0",
      },
      {
        de: "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.",
        en: "Today's five eastern federal states joined the Federal Republic of Germany.",
        id: "203-1",
      },
      {
        de: "Die westlichen Bundesländer sind der DDR beigetreten.",
        en: "The western federal states joined the GDR.",
        id: "203-2",
      },
      {
        de: "Die DDR hat die Bundesrepublik Deutschland besetzt.",
        en: "The GDR occupied the Federal Republic of Germany.",
        id: "203-3",
      },
    ],
    answer:
      "Die heutigen fünf östlichen Bundesländer sind der Bundesrepublik Deutschland beigetreten.",
    id: "203",
  },
  {
    question: {
      de: "Mit dem Beitritt der DDR zur Bundesrepublik Deutschland gehören die neuen Bundesländer nun auch …",
      en: "With the accession of the GDR to the Federal Republic of Germany, the new federal states now also belong to ...",
    },
    options: [
      {
        de: "zur Europäischen Union.",
        en: "the European Union.",
        id: "204-0",
      },
      {
        de: "zum Warschauer Pakt.",
        en: "the Warsaw Pact.",
        id: "204-1",
      },
      {
        de: "zur OPEC.",
        en: "OPEC.",
        id: "204-2",
      },
      {
        de: "zur Europäischen Verteidigungsgemeinschaft.",
        en: "the European Defense Community.",
        id: "204-3",
      },
    ],
    answer: "zur Europäischen Union.",
    id: "204",
  },
  {
    question: {
      de: "Woran erinnern die sogenannten „Stolpersteine“ in Deutschland?",
      en: 'What do the so-called "Stolpersteine" (stumbling blocks) commemorate in Germany?',
    },
    options: [
      {
        de: "an berühmte deutsche Politikerinnen und Politiker",
        en: "famous German politicians",
        id: "205-0",
      },
      {
        de: "an die Opfer des Nationalsozialismus",
        en: "the victims of National Socialism",
        id: "205-1",
      },
      {
        de: "an Verkehrstote",
        en: "traffic fatalities",
        id: "205-2",
      },
      {
        de: "an bekannte jüdische Musiker",
        en: "well-known Jewish musicians",
        id: "205-3",
      },
    ],
    answer: "an die Opfer des Nationalsozialismus",
    id: "205",
  },
  {
    question: {
      de: "In welchem Militärbündnis war die DDR Mitglied?",
      en: "In which military alliance was the GDR a member?",
    },
    options: [
      {
        de: "in der NATO",
        en: "in NATO",
        id: "206-0",
      },
      {
        de: "im Rheinbund",
        en: "in the Confederation of the Rhine",
        id: "206-1",
      },
      {
        de: "im Warschauer Pakt",
        en: "in the Warsaw Pact",
        id: "206-2",
      },
      {
        de: "im Europabündnis",
        en: "in the European Alliance",
        id: "206-3",
      },
    ],
    answer: "im Warschauer Pakt",
    id: "206",
  },
  {
    question: {
      de: 'Was war die "Stasi"?',
      en: 'What was the "Stasi"?',
    },
    options: [
      {
        de: 'der Geheimdienst im "Dritten Reich"',
        en: 'the secret service in the "Third Reich"',
        id: "207-0",
      },
      {
        de: "eine berühmte deutsche Gedenkstätte",
        en: "a famous German memorial site",
        id: "207-1",
      },
      {
        de: "der Geheimdienst der DDR",
        en: "the secret service of the GDR",
        id: "207-2",
      },
      {
        de: "ein deutscher Sportverein während des Zweiten Weltkrieges",
        en: "a German sports club during World War II",
        id: "207-3",
      },
    ],
    answer: "der Geheimdienst der DDR",
    id: "207",
  },
  {
    question: {
      de: "Welches war das Wappen der Deutschen Demokratischen Republik?",
      en: "Which was the coat of arms of the German Democratic Republic?",
      image: "aufgabe_21_209.jpg",
    },
    options: [
      {
        de: "Bild 1",
        en: "Image 1",
        id: "208-0",
      },
      {
        de: "Bild 2",
        en: "Image 2",
        id: "208-1",
      },
      {
        de: "Bild 3",
        en: "Image 3",
        id: "208-2",
      },
      {
        de: "Bild 4",
        en: "Image 4",
        id: "208-3",
      },
    ],
    answer: "Bild 4",
    id: "208",
  },
  {
    question: {
      de: "Was ereignete sich am 17. Juni 1953 in der DDR?",
      en: "What happened on June 17, 1953, in the GDR?",
    },
    options: [
      {
        de: "der feierliche Beitritt zum Warschauer Pakt",
        en: "the solemn accession to the Warsaw Pact",
        id: "209-0",
      },
      {
        de: "landesweite Streiks und ein Volksaufstand",
        en: "nationwide strikes and a popular uprising",
        id: "209-1",
      },
      {
        de: "der 1. SED-Parteitag",
        en: "the 1st SED party congress",
        id: "209-2",
      },
      {
        de: "der erste Besuch Fidel Castros",
        en: "the first visit of Fidel Castro",
        id: "209-3",
      },
    ],
    answer: "landesweite Streiks und ein Volksaufstand",
    id: "209",
  },
  {
    question: {
      de: 'Welcher Politiker steht für die "Ostverträge"?',
      en: 'Which politician stands for the "Ostverträge" (Eastern Treaties)?',
    },
    options: [
      {
        de: "Helmut Kohl",
        en: "Helmut Kohl",
        id: "210-0",
      },
      {
        de: "Willy Brandt",
        en: "Willy Brandt",
        id: "210-1",
      },
      {
        de: "Michail Gorbatschow",
        en: "Mikhail Gorbachev",
        id: "210-2",
      },
      {
        de: "Ludwig Erhard",
        en: "Ludwig Erhard",
        id: "210-3",
      },
    ],
    answer: "Willy Brandt",
    id: "210",
  },
  {
    question: {
      de: "Wie heißt Deutschland mit vollem Namen?",
      en: "What is Germany's full name?",
    },
    options: [
      {
        de: "Bundesstaat Deutschland",
        en: "Federal State Germany",
        id: "211-0",
      },
      {
        de: "Bundesländer Deutschland",
        en: "Federal States Germany",
        id: "211-1",
      },
      {
        de: "Bundesrepublik Deutschland",
        en: "Federal Republic of Germany",
        id: "211-2",
      },
      {
        de: "Bundesbezirk Deutschland",
        en: "Federal District Germany",
        id: "211-3",
      },
    ],
    answer: "Bundesrepublik Deutschland",
    id: "211",
  },
  {
    question: {
      de: "Wie viele Einwohner hat Deutschland?",
      en: "How many inhabitants does Germany have?",
    },
    options: [
      {
        de: "70 Millionen",
        en: "70 million",
        id: "212-0",
      },
      {
        de: "78 Millionen",
        en: "78 million",
        id: "212-1",
      },
      {
        de: "84 Millionen",
        en: "84 million",
        id: "212-2",
      },
      {
        de: "90 Millionen",
        en: "90 million",
        id: "212-3",
      },
    ],
    answer: "84 Millionen",
    id: "212",
  },
  {
    question: {
      de: "Welche Farben hat die deutsche Flagge?",
      en: "What colors does the German flag have?",
    },
    options: [
      {
        de: "schwarz-rot-gold",
        en: "black-red-gold",
        id: "213-0",
      },
      {
        de: "rot-weiß-schwarz",
        en: "red-white-black",
        id: "213-1",
      },
      {
        de: "schwarz-rot-grün",
        en: "black-red-green",
        id: "213-2",
      },
      {
        de: "schwarz-gelb-rot",
        en: "black-yellow-red",
        id: "213-3",
      },
    ],
    answer: "schwarz-rot-gold",
    id: "213",
  },
  {
    question: {
      de: 'Wer wird als "Kanzler der Deutschen Einheit" bezeichnet?',
      en: 'Who is referred to as the "Chancellor of German Unity"?',
    },
    options: [
      {
        de: "Gerhard Schröder",
        en: "Gerhard Schröder",
        id: "214-0",
      },
      {
        de: "Helmut Kohl",
        en: "Helmut Kohl",
        id: "214-1",
      },
      {
        de: "Konrad Adenauer",
        en: "Konrad Adenauer",
        id: "214-2",
      },
      {
        de: "Helmut Schmidt",
        en: "Helmut Schmidt",
        id: "214-3",
      },
    ],
    answer: "Helmut Kohl",
    id: "214",
  },
  {
    question: {
      de: "Welches Symbol ist im Plenarsaal des Deutschen Bundestages zu sehen?",
      en: "Which symbol can be seen in the plenary hall of the German Bundestag?",
      image: "aufgabe_216.jpg",
    },
    options: [
      {
        de: "der Bundesadler",
        en: "the Federal Eagle",
        id: "215-0",
      },
      {
        de: "die Fahne der Stadt Berlin",
        en: "the flag of the city of Berlin",
        id: "215-1",
      },
      {
        de: "der Reichsadler",
        en: "the Imperial Eagle",
        id: "215-2",
      },
      {
        de: "die Reichskrone",
        en: "the Imperial Crown",
        id: "215-3",
      },
    ],
    answer: "der Bundesadler",
    id: "215",
  },
  {
    question: {
      de: "In welchem Zeitraum gab es die Deutsche Demokratische Republik (DDR)?",
      en: "In what period did the German Democratic Republic (GDR) exist?",
    },
    options: [
      {
        de: "1919 bis 1927",
        en: "1919 to 1927",
        id: "216-0",
      },
      {
        de: "1933 bis 1945",
        en: "1933 to 1945",
        id: "216-1",
      },
      {
        de: "1945 bis 1961",
        en: "1945 to 1961",
        id: "216-2",
      },
      {
        de: "1949 bis 1990",
        en: "1949 to 1990",
        id: "216-3",
      },
    ],
    answer: "1949 bis 1990",
    id: "216",
  },
  {
    question: {
      de: "Wie viele Bundesländer kamen bei der Wiedervereinigung 1990 zur Bundesrepublik Deutschland hinzu?",
      en: "How many federal states were added to the Federal Republic of Germany during reunification in 1990?",
    },
    options: [
      {
        de: "4",
        en: "4",
        id: "217-0",
      },
      {
        de: "5",
        en: "5",
        id: "217-1",
      },
      {
        de: "6",
        en: "6",
        id: "217-2",
      },
      {
        de: "7",
        en: "7",
        id: "217-3",
      },
    ],
    answer: "5",
    id: "217",
  },
  {
    question: {
      de: "Die Bundesrepublik Deutschland hat die Grenzen von heute seit …",
      en: "The Federal Republic of Germany has had its current borders since ...",
    },
    options: [
      {
        de: "1933",
        en: "1933",
        id: "218-0",
      },
      {
        de: "1949",
        en: "1949",
        id: "218-1",
      },
      {
        de: "1971",
        en: "1971",
        id: "218-2",
      },
      {
        de: "1990",
        en: "1990",
        id: "218-3",
      },
    ],
    answer: "1990",
    id: "218",
  },
  {
    question: {
      de: "Der 27. Januar ist in Deutschland ein offizieller Gedenktag. Woran erinnert dieser Tag?",
      en: "January 27th is an official day of remembrance in Germany. What does this day commemorate?",
    },
    options: [
      {
        de: "an das Ende des Zweiten Weltkrieges",
        en: "the end of World War II",
        id: "219-0",
      },
      {
        de: "an die Verabschiedung des Grundgesetzes",
        en: "the adoption of the Basic Law",
        id: "219-1",
      },
      {
        de: "an die Wiedervereinigung Deutschlands",
        en: "the reunification of Germany",
        id: "219-2",
      },
      {
        de: "an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)",
        en: "the victims of National Socialism (Day of the Liberation of Auschwitz Extermination Camp)",
        id: "219-3",
      },
    ],
    answer:
      "an die Opfer des Nationalsozialismus (Tag der Befreiung des Vernichtungslagers Auschwitz)",
    id: "219",
  },
  {
    question: {
      de: "Deutschland ist Mitglied des Schengener Abkommens. Was bedeutet das?",
      en: "Germany is a member of the Schengen Agreement. What does that mean?",
    },
    options: [
      {
        de: "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.",
        en: "Germans can travel to many European countries without passport control.",
        id: "220-0",
      },
      {
        de: "Alle Menschen können ohne Personenkontrolle in Deutschland einreisen.",
        en: "All people can enter Germany without personal checks.",
        id: "220-1",
      },
      {
        de: "Deutsche können ohne Passkontrolle in jedes Land reisen.",
        en: "Germans can travel to any country without passport control.",
        id: "220-2",
      },
      {
        de: "Deutsche können in jedem Land mit dem Euro bezahlen.",
        en: "Germans can pay with the Euro in any country.",
        id: "220-3",
      },
    ],
    answer:
      "Deutsche können in viele Länder Europas ohne Passkontrolle reisen.",
    id: "220",
  },
  {
    question: {
      de: "Welches Land ist ein Nachbarland von Deutschland?",
      en: "Which country is a neighboring country of Germany?",
    },
    options: [
      {
        de: "Ungarn",
        en: "Hungary",
        id: "221-0",
      },
      {
        de: "Portugal",
        en: "Portugal",
        id: "221-1",
      },
      {
        de: "Spanien",
        en: "Spain",
        id: "221-2",
      },
      {
        de: "Schweiz",
        en: "Switzerland",
        id: "221-3",
      },
    ],
    answer: "Schweiz",
    id: "221",
  },
  {
    question: {
      de: "Welches Land ist ein Nachbarland von Deutschland?",
      en: "Which country is a neighboring country of Germany?",
    },
    options: [
      {
        de: "Rumänien",
        en: "Romania",
        id: "222-0",
      },
      {
        de: "Bulgarien",
        en: "Bulgaria",
        id: "222-1",
      },
      {
        de: "Polen",
        en: "Poland",
        id: "222-2",
      },
      {
        de: "Griechenland",
        en: "Greece",
        id: "222-3",
      },
    ],
    answer: "Polen",
    id: "222",
  },
  {
    question: {
      de: "Was bedeutet die Abkürzung EU?",
      en: "What does the abbreviation EU stand for?",
    },
    options: [
      {
        de: "Europäische Unternehmen",
        en: "European Enterprises",
        id: "223-0",
      },
      {
        de: "Europäische Union",
        en: "European Union",
        id: "223-1",
      },
      {
        de: "Einheitliche Union",
        en: "Unified Union",
        id: "223-2",
      },
      {
        de: "Euro Union",
        en: "Euro Union",
        id: "223-3",
      },
    ],
    answer: "Europäische Union",
    id: "223",
  },
  {
    question: {
      de: "In welchem anderen Land gibt es eine große deutschsprachige Bevölkerung?",
      en: "In which other country is there a large German-speaking population?",
    },
    options: [
      {
        de: "Tschechien",
        en: "Czech Republic",
        id: "224-0",
      },
      {
        de: "Norwegen",
        en: "Norway",
        id: "224-1",
      },
      {
        de: "Spanien",
        en: "Spain",
        id: "224-2",
      },
      {
        de: "Österreich",
        en: "Austria",
        id: "224-3",
      },
    ],
    answer: "Österreich",
    id: "224",
  },
  {
    question: {
      de: "Welche ist die Flagge der Europäischen Union?",
      en: "Which is the flag of the European Union?",
      image: "aufgabe_226.jpg",
    },
    options: [
      {
        de: "Bild 1",
        en: "Image 1",
        id: "225-0",
      },
      {
        de: "Bild 2",
        en: "Image 2",
        id: "225-1",
      },
      {
        de: "Bild 3",
        en: "Image 3",
        id: "225-2",
      },
      {
        de: "Bild 4",
        en: "Image 4",
        id: "225-3",
      },
    ],
    answer: "Bild 2",
    id: "225",
  },
  {
    question: {
      de: "Welches Land ist ein Nachbarland von Deutschland?",
      en: "Which country is a neighboring country of Germany?",
    },
    options: [
      {
        de: "Finnland",
        en: "Finland",
        id: "226-0",
      },
      {
        de: "Dänemark",
        en: "Denmark",
        id: "226-1",
      },
      {
        de: "Norwegen",
        en: "Norway",
        id: "226-2",
      },
      {
        de: "Schweden",
        en: "Sweden",
        id: "226-3",
      },
    ],
    answer: "Dänemark",
    id: "226",
  },
  {
    question: {
      de: "Wie wird der Beitritt der DDR zur Bundesrepublik Deutschland im Jahr 1990 allgemein genannt?",
      en: "What is the accession of the GDR to the Federal Republic of Germany in 1990 generally called?",
    },
    options: [
      {
        de: "NATO-Osterweiterung",
        en: "NATO Eastern Enlargement",
        id: "227-0",
      },
      {
        de: "EU-Osterweiterung",
        en: "EU Eastern Enlargement",
        id: "227-1",
      },
      {
        de: "Deutsche Wiedervereinigung",
        en: "German Reunification",
        id: "227-2",
      },
      {
        de: "Europäische Gemeinschaft",
        en: "European Community",
        id: "227-3",
      },
    ],
    answer: "Deutsche Wiedervereinigung",
    id: "227",
  },
  {
    question: {
      de: "Welches Land ist ein Nachbarland von Deutschland?",
      en: "Which country is a neighboring country of Germany?",
    },
    options: [
      {
        de: "Spanien",
        en: "Spain",
        id: "228-0",
      },
      {
        de: "Bulgarien",
        en: "Bulgaria",
        id: "228-1",
      },
      {
        de: "Norwegen",
        en: "Norway",
        id: "228-2",
      },
      {
        de: "Luxemburg",
        en: "Luxembourg",
        id: "228-3",
      },
    ],
    answer: "Luxemburg",
    id: "228",
  },
  {
    question: {
      de: "Das Europäische Parlament wird regelmäßig gewählt, nämlich alle …",
      en: "The European Parliament is elected regularly, namely every ...",
    },
    options: [
      {
        de: "5 Jahre.",
        en: "5 years.",
        id: "229-0",
      },
      {
        de: "6 Jahre.",
        en: "6 years.",
        id: "229-1",
      },
      {
        de: "7 Jahre.",
        en: "7 years.",
        id: "229-2",
      },
      {
        de: "8 Jahre.",
        en: "8 years.",
        id: "229-3",
      },
    ],
    answer: "5 Jahre.",
    id: "229",
  },
  {
    question: {
      de: 'Was bedeutet der Begriff "europäische Integration"?',
      en: 'What does the term "European integration" mean?',
    },
    options: [
      {
        de: "Damit sind amerikanische Einwanderinnen und Einwanderer in Europa gemeint.",
        en: "It refers to American immigrants in Europe.",
        id: "230-0",
      },
      {
        de: "Der Begriff meint den Einwanderungsstopp nach Europa.",
        en: "The term refers to the immigration stop to Europe.",
        id: "230-1",
      },
      {
        de: "Damit sind europäische Auswanderinnen und Auswanderer in den USA gemeint.",
        en: "It refers to European emigrants in the USA.",
        id: "230-2",
      },
      {
        de: "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU.",
        en: "The term refers to the merger of European states to form the EU.",
        id: "230-3",
      },
    ],
    answer:
      "Der Begriff meint den Zusammenschluss europäischer Staaten zur EU.",
    id: "230",
  },
  {
    question: {
      de: "Wer wird bei der Europawahl gewählt?",
      en: "Who is elected in the European elections?",
    },
    options: [
      {
        de: "die Europäische Kommission",
        en: "the European Commission",
        id: "231-0",
      },
      {
        de: "die Länder, die in die EU eintreten dürfen",
        en: "the countries allowed to join the EU",
        id: "231-1",
      },
      {
        de: "die Abgeordneten des Europäischen Parlaments",
        en: "the members of the European Parliament",
        id: "231-2",
      },
      {
        de: "die europäische Verfassung",
        en: "the European Constitution",
        id: "231-3",
      },
    ],
    answer: "die Abgeordneten des Europäischen Parlaments",
    id: "231",
  },
  {
    question: {
      de: "Welches Land ist ein Nachbarland von Deutschland?",
      en: "Which country is a neighboring country of Germany?",
    },
    options: [
      {
        de: "Tschechien",
        en: "Czech Republic",
        id: "232-0",
      },
      {
        de: "Bulgarien",
        en: "Bulgaria",
        id: "232-1",
      },
      {
        de: "Griechenland",
        en: "Greece",
        id: "232-2",
      },
      {
        de: "Portugal",
        en: "Portugal",
        id: "232-3",
      },
    ],
    answer: "Tschechien",
    id: "232",
  },
  {
    question: {
      de: "Wo ist ein Sitz des Europäischen Parlaments?",
      en: "Where is a seat of the European Parliament?",
    },
    options: [
      {
        de: "London",
        en: "London",
        id: "233-0",
      },
      {
        de: "Paris",
        en: "Paris",
        id: "233-1",
      },
      {
        de: "Berlin",
        en: "Berlin",
        id: "233-2",
      },
      {
        de: "Straßburg",
        en: "Strasbourg",
        id: "233-3",
      },
    ],
    answer: "Straßburg",
    id: "233",
  },
  {
    question: {
      de: "Der damalige französische Staatspräsident François Mitterrand und der damalige deutsche Bundeskanzler Helmut Kohl gedenken in Verdun gemeinsam der Toten beider Weltkriege. Welches Ziel der Europäischen Union wird bei diesem Treffen deutlich?",
      en: "The then French President François Mitterrand and the then German Chancellor Helmut Kohl jointly commemorate the dead of both World Wars in Verdun. Which objective of the European Union is evident at this meeting?",
      image: "aufgabe_235.jpg",
    },
    options: [
      {
        de: "Freundschaft zwischen England und Deutschland",
        en: "Friendship between England and Germany",
        id: "234-0",
      },
      {
        de: "Reisefreiheit in alle Länder der EU",
        en: "Freedom to travel to all EU countries",
        id: "234-1",
      },
      {
        de: "Frieden und Sicherheit in den Ländern der EU",
        en: "Peace and security in the EU countries",
        id: "234-2",
      },
      {
        de: "einheitliche Feiertage in den Ländern der EU",
        en: "Uniform public holidays in the EU countries",
        id: "234-3",
      },
    ],
    answer: "Frieden und Sicherheit in den Ländern der EU",
    id: "234",
  },
  {
    question: {
      de: "Wie viele Mitgliedstaaten hat die EU heute?",
      en: "How many member states does the EU have today?",
    },
    options: [
      {
        de: "21",
        en: "21",
        id: "235-0",
      },
      {
        de: "23",
        en: "23",
        id: "235-1",
      },
      {
        de: "25",
        en: "25",
        id: "235-2",
      },
      {
        de: "27",
        en: "27",
        id: "235-3",
      },
    ],
    answer: "27",
    id: "235",
  },
  {
    question: {
      de: '2007 wurde das 50-jährige Jubiläum der "Römischen Verträge" gefeiert. Was war der Inhalt der Verträge?',
      en: "In 2007, the 50th anniversary of the 'Treaties of Rome' was celebrated. What was the content of these treaties?",
    },
    options: [
      {
        de: "Beitritt Deutschlands zur NATO",
        en: "Germany's accession to NATO",
        id: "236-0",
      },
      {
        de: "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)",
        en: "Founding of the European Economic Community (EEC)",
        id: "236-1",
      },
      {
        de: "Verpflichtung Deutschlands zu Reparationsleistungen",
        en: "Germany's obligation to pay reparations",
        id: "236-2",
      },
      {
        de: "Festlegung der Oder-Neiße-Linie als Ostgrenze",
        en: "Definition of the Oder-Neisse line as the eastern border",
        id: "236-3",
      },
    ],
    answer: "Gründung der Europäischen Wirtschaftsgemeinschaft (EWG)",
    id: "236",
  },
  {
    question: {
      de: "An welchen Orten arbeitet das Europäische Parlament?",
      en: "In which cities does the European Parliament work?",
    },
    options: [
      {
        de: "Paris, London und Den Haag",
        en: "Paris, London and The Hague",
        id: "237-0",
      },
      {
        de: "Straßburg, Luxemburg und Brüssel",
        en: "Strasbourg, Luxembourg and Brussels",
        id: "237-1",
      },
      {
        de: "Rom, Bern und Wien",
        en: "Rome, Bern and Vienna",
        id: "237-2",
      },
      {
        de: "Bonn, Zürich und Mailand",
        en: "Bonn, Zurich and Milan",
        id: "237-3",
      },
    ],
    answer: "Straßburg, Luxemburg und Brüssel",
    id: "237",
  },
  {
    question: {
      de: "Durch welche Verträge schloss sich die Bundesrepublik Deutschland mit anderen Staaten zur Europäischen Wirtschaftsgemeinschaft zusammen?",
      en: "Through which treaties did the Federal Republic of Germany join other states to form the European Economic Community?",
    },
    options: [
      {
        de: 'durch die "Hamburger Verträge"',
        en: 'through the "Hamburg Treaties"',
        id: "238-0",
      },
      {
        de: 'durch die "Römischen Verträge"',
        en: 'through the "Treaties of Rome"',
        id: "238-1",
      },
      {
        de: 'durch die "Pariser Verträge"',
        en: 'through the "Paris Treaties"',
        id: "238-2",
      },
      {
        de: 'durch die "Londoner Verträge"',
        en: 'through the "London Treaties"',
        id: "238-3",
      },
    ],
    answer: 'durch die "Römischen Verträge"',
    id: "238",
  },
  {
    question: {
      de: "Seit wann bezahlt man in Deutschland mit dem Euro in bar?",
      en: "Since when has one paid with cash euros in Germany?",
    },
    options: [
      {
        de: "1995",
        en: "1995",
        id: "239-0",
      },
      {
        de: "1998",
        en: "1998",
        id: "239-1",
      },
      {
        de: "2002",
        en: "2002",
        id: "239-2",
      },
      {
        de: "2005",
        en: "2005",
        id: "239-3",
      },
    ],
    answer: "2002",
    id: "239",
  },
  {
    question: {
      de: "Frau Seger bekommt ein Kind. Was muss sie tun, um Elterngeld zu erhalten?",
      en: "Ms. Seger is having a child. What must she do to receive parental allowance?",
    },
    options: [
      {
        de: "Sie muss an ihre Krankenkasse schreiben.",
        en: "She must write to her health insurance company.",
        id: "240-0",
      },
      {
        de: "Sie muss einen Antrag bei der Elterngeldstelle stellen.",
        en: "She must submit an application to the parental allowance office.",
        id: "240-1",
      },
      {
        de: "Sie muss nichts tun, denn sie bekommt automatisch Elterngeld.",
        en: "She doesn't have to do anything, because she automatically receives parental allowance.",
        id: "240-2",
      },
      {
        de: "Sie muss das Arbeitsamt um Erlaubnis bitten.",
        en: "She must ask the employment office for permission.",
        id: "240-3",
      },
    ],
    answer: "Sie muss einen Antrag bei der Elterngeldstelle stellen.",
    id: "240",
  },
  {
    question: {
      de: "Wer entscheidet, ob ein Kind in Deutschland in den Kindergarten geht?",
      en: "Who decides whether a child goes to kindergarten in Germany?",
    },
    options: [
      {
        de: "der Staat",
        en: "the state",
        id: "241-0",
      },
      {
        de: "die Bundesländer",
        en: "the federal states",
        id: "241-1",
      },
      {
        de: "die Eltern/die Erziehungsberechtigten",
        en: "the parents/guardians",
        id: "241-2",
      },
      {
        de: "die Schulen",
        en: "the schools",
        id: "241-3",
      },
    ],
    answer: "die Eltern/die Erziehungsberechtigten",
    id: "241",
  },
  {
    question: {
      de: "Maik und Sybille wollen mit Freunden an ihrem deutschen Wohnort eine Demonstration auf der Straße abhalten. Was müssen sie vorher tun?",
      en: "Maik and Sybille want to hold a demonstration with friends in their German hometown. What must they do beforehand?",
    },
    options: [
      {
        de: "Sie müssen die Demonstration anmelden.",
        en: "They must register the demonstration.",
        id: "242-0",
      },
      {
        de: "Sie müssen nichts tun. Man darf in Deutschland jederzeit überall demonstrieren.",
        en: "They don't have to do anything. One is allowed to demonstrate anywhere in Germany at any time.",
        id: "242-1",
      },
      {
        de: "Sie können gar nichts tun, denn Demonstrationen sind in Deutschland grundsätzlich verboten.",
        en: "They cannot do anything, because demonstrations are fundamentally forbidden in Germany.",
        id: "242-2",
      },
      {
        de: "Maik und Sybille müssen einen neuen Verein gründen, weil nur Vereine demonstrieren dürfen.",
        en: "Maik and Sybille must found a new association, because only associations are allowed to demonstrate.",
        id: "242-3",
      },
    ],
    answer: "Sie müssen die Demonstration anmelden.",
    id: "242",
  },
  {
    question: {
      de: "Welchen Schulabschluss braucht man normalerweise, um an einer Universität in Deutschland ein Studium zu beginnen?",
      en: "Which school leaving certificate do you normally need to start studying at a university in Germany?",
    },
    options: [
      {
        de: "das Abitur",
        en: "the Abitur (higher education entrance qualification)",
        id: "243-0",
      },
      {
        de: "ein Diplom",
        en: "a diploma",
        id: "243-1",
      },
      {
        de: "die Prokura",
        en: "the power of attorney",
        id: "243-2",
      },
      {
        de: "eine Gesellenprüfung",
        en: "a journeyman's examination",
        id: "243-3",
      },
    ],
    answer: "das Abitur",
    id: "243",
  },
  {
    question: {
      de: "Wer darf in Deutschland nicht als Paar zusammenleben?",
      en: "Who is not allowed to live together as a couple in Germany?",
    },
    options: [
      {
        de: "Hans (20 Jahre) und Marie (19 Jahre)",
        en: "Hans (20 years old) and Marie (19 years old)",
        id: "244-0",
      },
      {
        de: "Tom (20 Jahre) und Klaus (45 Jahre)",
        en: "Tom (20 years old) and Klaus (45 years old)",
        id: "244-1",
      },
      {
        de: "Sofie (35 Jahre) und Lisa (40 Jahre)",
        en: "Sofie (35 years old) and Lisa (40 years old)",
        id: "244-2",
      },
      {
        de: "Anne (13 Jahre) und Tim (25 Jahre)",
        en: "Anne (13 years old) and Tim (25 years old)",
        id: "244-3",
      },
    ],
    answer: "Anne (13 Jahre) und Tim (25 Jahre)",
    id: "244",
  },
  {
    question: {
      de: "Ab welchem Alter ist man in Deutschland volljährig?",
      en: "At what age are you considered an adult in Germany?",
    },
    options: [
      {
        de: "16",
        en: "16",
        id: "245-0",
      },
      {
        de: "18",
        en: "18",
        id: "245-1",
      },
      {
        de: "19",
        en: "19",
        id: "245-2",
      },
      {
        de: "21",
        en: "21",
        id: "245-3",
      },
    ],
    answer: "18",
    id: "245",
  },
  {
    question: {
      de: "Eine Frau ist schwanger. Sie ist kurz vor und nach der Geburt ihres Kindes vom Gesetz besonders beschützt. Wie heißt dieser Schutz?",
      en: "A woman is pregnant. She is specially protected by law shortly before and after the birth of her child. What is this protection called?",
    },
    options: [
      {
        de: "Elternzeit",
        en: "Parental leave",
        id: "246-0",
      },
      {
        de: "Mutterschutz",
        en: "Maternity protection",
        id: "246-1",
      },
      {
        de: "Geburtsvorbereitung",
        en: "Childbirth preparation",
        id: "246-2",
      },
      {
        de: "Wochenbett",
        en: "Puerperium (postpartum period)",
        id: "246-3",
      },
    ],
    answer: "Mutterschutz",
    id: "246",
  },
  {
    question: {
      de: "Die Erziehung der Kinder ist in Deutschland ist vor allem Aufgabe …",
      en: "The upbringing of children in Germany is primarily the responsibility of…",
    },
    options: [
      {
        de: "des Staates.",
        en: "the state.",
        id: "247-0",
      },
      {
        de: "der Eltern.",
        en: "the parents.",
        id: "247-1",
      },
      {
        de: "der Großeltern.",
        en: "the grandparents.",
        id: "247-2",
      },
      {
        de: "der Schulen.",
        en: "the schools.",
        id: "247-3",
      },
    ],
    answer: "der Eltern.",
    id: "247",
  },
  {
    question: {
      de: "Wer ist in Deutschland hauptsächlich verantwortlich für die Kindererziehung?",
      en: "Who is primarily responsible for child-rearing in Germany?",
    },
    options: [
      {
        de: "der Staat",
        en: "the state",
        id: "248-0",
      },
      {
        de: "die Eltern",
        en: "the parents",
        id: "248-1",
      },
      {
        de: "die Verwandten",
        en: "the relatives",
        id: "248-2",
      },
      {
        de: "die Schulen",
        en: "the schools",
        id: "248-3",
      },
    ],
    answer: "die Eltern",
    id: "248",
  },
  {
    question: {
      de: "In Deutschland hat man die besten Chancen auf einen gut bezahlten Arbeitsplatz, wenn man …",
      en: "In Germany, you have the best chances for a well-paid job if you are…",
    },
    options: [
      {
        de: "katholisch ist.",
        en: "Catholic.",
        id: "249-0",
      },
      {
        de: "gut ausgebildet ist.",
        en: "well-educated.",
        id: "249-1",
      },
      {
        de: "eine Frau ist.",
        en: "a woman.",
        id: "249-2",
      },
      {
        de: "Mitglied einer Partei ist.",
        en: "a member of a party.",
        id: "249-3",
      },
    ],
    answer: "gut ausgebildet ist.",
    id: "249",
  },
  {
    question: {
      de: "Wenn man in Deutschland ein Kind schlägt, …",
      en: "If you hit a child in Germany…",
    },
    options: [
      {
        de: "geht das niemanden etwas an.",
        en: "that's nobody's business.",
        id: "250-0",
      },
      {
        de: "geht das nur die Familie etwas an.",
        en: "that's only the family's business.",
        id: "250-1",
      },
      {
        de: "kann man dafür nicht bestraft werden.",
        en: "you cannot be punished for it.",
        id: "250-2",
      },
      {
        de: "kann man dafür bestraft werden.",
        en: "you can be punished for it.",
        id: "250-3",
      },
    ],
    answer: "kann man dafür bestraft werden.",
    id: "250",
  },
  {
    question: {
      de: "In Deutschland …",
      en: "In Germany…",
    },
    options: [
      {
        de: "darf man zur gleichen Zeit nur mit einer Partnerin/einem Partner verheiratet sein.",
        en: "you may only be married to one partner at a time.",
        id: "251-0",
      },
      {
        de: "kann man mehrere Ehepartnerinnen/Ehepartner gleichzeitig haben.",
        en: "you can have multiple spouses at the same time.",
        id: "251-1",
      },
      {
        de: "darf man nicht wieder heiraten, wenn man einmal verheiratet war.",
        en: "you may not remarry if you have been married once.",
        id: "251-2",
      },
      {
        de: "darf eine Frau nicht wieder heiraten, wenn ihr Mann gestorben ist.",
        en: "a woman may not remarry if her husband has died.",
        id: "251-3",
      },
    ],
    answer:
      "darf man zur gleichen Zeit nur mit einer Partnerin/einem Partner verheiratet sein.",
    id: "251",
  },
  {
    question: {
      de: "Wo müssen Sie sich anmelden, wenn Sie in Deutschland umziehen?",
      en: "Where do you have to register if you move in Germany?",
    },
    options: [
      {
        de: "beim Einwohnermeldeamt",
        en: "at the registration office",
        id: "252-0",
      },
      {
        de: "beim Standesamt",
        en: "at the registry office",
        id: "252-1",
      },
      {
        de: "beim Ordnungsamt",
        en: "at the public order office",
        id: "252-2",
      },
      {
        de: "beim Gewerbeamt",
        en: "at the trade office",
        id: "252-3",
      },
    ],
    answer: "beim Einwohnermeldeamt",
    id: "252",
  },
  {
    question: {
      de: 'In Deutschland dürfen Ehepaare sich scheiden lassen. Meistens müssen sie dazu das "Trennungsjahr" einhalten. Was bedeutet das?',
      en: "In Germany, married couples are allowed to divorce. Usually, they have to observe the 'year of separation'. What does that mean?",
    },
    options: [
      {
        de: "Der Scheidungsprozess dauert ein Jahr.",
        en: "The divorce process takes one year.",
        id: "253-0",
      },
      {
        de: "Die Ehegatten sind ein Jahr verheiratet, dann ist die Scheidung möglich.",
        en: "The spouses have been married for one year, then divorce is possible.",
        id: "253-1",
      },
      {
        de: "Das Besuchsrecht für die Kinder gilt ein Jahr.",
        en: "The right to visit the children applies for one year.",
        id: "253-2",
      },
      {
        de: "Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.",
        en: "The spouses live their own separate lives for at least one year. After that, divorce is possible.",
        id: "253-3",
      },
    ],
    answer:
      "Die Ehegatten führen mindestens ein Jahr getrennt ihr eigenes Leben. Danach ist die Scheidung möglich.",
    id: "253",
  },
  {
    question: {
      de: "Bei Erziehungsproblemen können Eltern in Deutschland Hilfe erhalten vom …",
      en: "In Germany, parents can receive help with parenting problems from the…",
    },
    options: [
      {
        de: "Ordnungsamt.",
        en: "public order office.",
        id: "254-0",
      },
      {
        de: "Schulamt.",
        en: "school authority.",
        id: "254-1",
      },
      {
        de: "Jugendamt.",
        en: "youth welfare office.",
        id: "254-2",
      },
      {
        de: "Gesundheitsamt.",
        en: "health department.",
        id: "254-3",
      },
    ],
    answer: "Jugendamt.",
    id: "254",
  },
  {
    question: {
      de: "Ein Ehepaar möchte in Deutschland ein Restaurant eröffnen. Was braucht es dazu unbedingt?",
      en: "A married couple wants to open a restaurant in Germany. What do they absolutely need for this?",
    },
    options: [
      {
        de: "eine Erlaubnis der Polizei",
        en: "permission from the police",
        id: "255-0",
      },
      {
        de: "eine Genehmigung einer Partei",
        en: "permission from a political party",
        id: "255-1",
      },
      {
        de: "eine Genehmigung des Einwohnermeldeamts",
        en: "permission from the registration office",
        id: "255-2",
      },
      {
        de: "eine Gaststättenerlaubnis von der zuständigen Behörde",
        en: "a restaurant license from the competent authority",
        id: "255-3",
      },
    ],
    answer: "eine Gaststättenerlaubnis von der zuständigen Behörde",
    id: "255",
  },
  {
    question: {
      de: "Eine erwachsene Frau möchte in Deutschland das Abitur nachholen. Das kann sie an …",
      en: "An adult woman wants to catch up on her Abitur in Germany. She can do this at…",
    },
    options: [
      {
        de: "einer Hochschule.",
        en: "a university.",
        id: "256-0",
      },
      {
        de: "einem Abendgymnasium.",
        en: "an evening high school.",
        id: "256-1",
      },
      {
        de: "einer Hauptschule.",
        en: "a secondary modern school.",
        id: "256-2",
      },
      {
        de: "einer Privatuniversität.",
        en: "a private university.",
        id: "256-3",
      },
    ],
    answer: "einem Abendgymnasium.",
    id: "256",
  },
  {
    question: {
      de: "Was darf das Jugendamt in Deutschland?",
      en: "What is the youth welfare office in Germany allowed to do?",
    },
    options: [
      {
        de: "Es entscheidet, welche Schule das Kind besucht.",
        en: "It decides which school the child attends.",
        id: "257-0",
      },
      {
        de: "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.",
        en: "It can remove a child who is being beaten or starving from the family.",
        id: "257-1",
      },
      {
        de: "Es bezahlt das Kindergeld an die Eltern.",
        en: "It pays child benefits to the parents.",
        id: "257-2",
      },
      {
        de: "Es kontrolliert, ob das Kind einen Kindergarten besucht.",
        en: "It controls whether the child attends kindergarten.",
        id: "257-3",
      },
    ],
    answer:
      "Es kann ein Kind, das geschlagen wird oder hungern muss, aus der Familie nehmen.",
    id: "257",
  },
  {
    question: {
      de: "Das Berufsinformationszentrum BIZ bei der Bundesagentur für Arbeit in Deutschland hilft bei der …",
      en: "The Vocational Information Center (BIZ) at the Federal Employment Agency in Germany helps with…",
    },
    options: [
      {
        de: "Rentenberechnung.",
        en: "pension calculation.",
        id: "258-0",
      },
      {
        de: "Lehrstellensuche.",
        en: "apprenticeship search.",
        id: "258-1",
      },
      {
        de: "Steuererklärung.",
        en: "tax return.",
        id: "258-2",
      },
      {
        de: "Krankenversicherung.",
        en: "health insurance.",
        id: "258-3",
      },
    ],
    answer: "Lehrstellensuche.",
    id: "258",
  },
  {
    question: {
      de: "In Deutschland hat ein Kind in der Schule …",
      en: "In Germany, a child in school has…",
    },
    options: [
      {
        de: "Recht auf unbegrenzte Freizeit.",
        en: "the right to unlimited free time.",
        id: "259-0",
      },
      {
        de: "Wahlfreiheit für alle Fächer.",
        en: "freedom of choice for all subjects.",
        id: "259-1",
      },
      {
        de: "Anspruch auf Schulgeld.",
        en: "the right to school fees.",
        id: "259-2",
      },
      {
        de: "Anwesenheitspflicht.",
        en: "compulsory attendance.",
        id: "259-3",
      },
    ],
    answer: "Anwesenheitspflicht.",
    id: "259",
  },
  {
    question: {
      de: "Ein Mann möchte mit 30 Jahren in Deutschland sein Abitur nachholen. Wo kann er das tun? An …",
      en: "A man wants to catch up on his Abitur in Germany at the age of 30. Where can he do that? At…",
    },
    options: [
      {
        de: "einer Hochschule.",
        en: "a university.",
        id: "260-0",
      },
      {
        de: "einem Abendgymnasium.",
        en: "an evening high school.",
        id: "260-1",
      },
      {
        de: "einer Hauptschule.",
        en: "a secondary modern school.",
        id: "260-2",
      },
      {
        de: "einer Privatuniversität.",
        en: "a private university.",
        id: "260-3",
      },
    ],
    answer: "einem Abendgymnasium.",
    id: "260",
  },
  {
    question: {
      de: "Was bedeutet in Deutschland der Grundsatz der Gleichbehandlung?",
      en: "What does the principle of equal treatment mean in Germany?",
    },
    options: [
      {
        de: "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.",
        en: "No one may be disadvantaged, e.g., due to a disability.",
        id: "261-0",
      },
      {
        de: "Man darf andere Personen benachteiligen, wenn ausreichende persönliche Gründe hierfür vorliegen.",
        en: "You may disadvantage other people if there are sufficient personal reasons for it.",
        id: "261-1",
      },
      {
        de: "Niemand darf gegen Personen klagen, wenn sie benachteiligt wurden.",
        en: "No one may sue people if they have been disadvantaged.",
        id: "261-2",
      },
      {
        de: "Es ist für alle Gesetz, benachteiligten Gruppen jährlich Geld zu spenden.",
        en: "It is a law for everyone to donate money annually to disadvantaged groups.",
        id: "261-3",
      },
    ],
    answer: "Niemand darf z.B. wegen einer Behinderung benachteiligt werden.",
    id: "261",
  },
  {
    question: {
      de: "In Deutschland sind Jugendliche ab 14 Jahren strafmündig. Das bedeutet: Jugendliche, die 14 Jahre und älter sind und gegen Strafgesetze verstoßen, …",
      en: "In Germany, young people aged 14 and over are criminally responsible. This means: Young people who are 14 years or older and violate criminal laws…",
    },
    options: [
      {
        de: "werden bestraft.",
        en: "will be punished.",
        id: "262-0",
      },
      {
        de: "werden wie Erwachsene behandelt.",
        en: "are treated like adults.",
        id: "262-1",
      },
      {
        de: "teilen die Strafe mit ihren Eltern.",
        en: "share the punishment with their parents.",
        id: "262-2",
      },
      {
        de: "werden nicht bestraft.",
        en: "are not punished.",
        id: "262-3",
      },
    ],
    answer: "werden bestraft.",
    id: "262",
  },
  {
    question: {
      de: "Zu welchem Fest tragen Menschen in Deutschland bunte Kostüme und Masken?",
      en: "For which festival do people in Germany wear colorful costumes and masks?",
    },
    options: [
      {
        de: "am Rosenmontag",
        en: "on Rose Monday (Carnival)",
        id: "263-0",
      },
      {
        de: "am Maifeiertag",
        en: "on May Day",
        id: "263-1",
      },
      {
        de: "beim Oktoberfest",
        en: "at Oktoberfest",
        id: "263-2",
      },
      {
        de: "an Pfingsten",
        en: "on Pentecost",
        id: "263-3",
      },
    ],
    answer: "am Rosenmontag",
    id: "263",
  },
  {
    question: {
      de: "Wohin muss man in Deutschland zuerst gehen, wenn man heiraten möchte?",
      en: "Where do you have to go first in Germany if you want to get married?",
    },
    options: [
      {
        de: "zum Einwohnermeldeamt",
        en: "to the registration office",
        id: "264-0",
      },
      {
        de: "zum Ordnungsamt",
        en: "to the public order office",
        id: "264-1",
      },
      {
        de: "zur Agentur für Arbeit",
        en: "to the employment agency",
        id: "264-2",
      },
      {
        de: "zum Standesamt",
        en: "to the registry office",
        id: "264-3",
      },
    ],
    answer: "zum Standesamt",
    id: "264",
  },
  {
    question: {
      de: "Wann beginnt die gesetzliche Nachtruhe in Deutschland?",
      en: "When does the legal night rest begin in Germany?",
    },
    options: [
      {
        de: "wenn die Sonne untergeht",
        en: "when the sun sets",
        id: "265-0",
      },
      {
        de: "wenn die Nachbarn schlafen gehen",
        en: "when the neighbors go to sleep",
        id: "265-1",
      },
      {
        de: "um 0 Uhr, Mitternacht",
        en: "at 0 o'clock, midnight",
        id: "265-2",
      },
      {
        de: "um 22 Uhr",
        en: "at 10 PM",
        id: "265-3",
      },
    ],
    answer: "um 22 Uhr",
    id: "265",
  },
  {
    question: {
      de: "Eine junge Frau in Deutschland, 22 Jahre alt, lebt mit ihrem Freund zusammen. Die Eltern der Frau finden das nicht gut, weil ihnen der Freund nicht gefällt. Was können die Eltern tun?",
      en: "A young woman in Germany, 22 years old, lives with her boyfriend. The woman's parents don't like it because they don't like the boyfriend. What can the parents do?",
    },
    options: [
      {
        de: "Sie müssen die Entscheidung der volljährigen Tochter respektieren.",
        en: "They must respect the adult daughter's decision.",
        id: "266-0",
      },
      {
        de: "Sie haben das Recht, die Tochter in die elterliche Wohnung zurückzuholen.",
        en: "They have the right to bring their daughter back to the parental home.",
        id: "266-1",
      },
      {
        de: "Sie können zur Polizei gehen und die Tochter anzeigen.",
        en: "They can go to the police and report their daughter.",
        id: "266-2",
      },
      {
        de: "Sie suchen einen anderen Mann für die Tochter.",
        en: "They look for another man for their daughter.",
        id: "266-3",
      },
    ],
    answer:
      "Sie müssen die Entscheidung der volljährigen Tochter respektieren.",
    id: "266",
  },
  {
    question: {
      de: "Eine junge Frau will den Führerschein machen. Sie hat Angst vor der Prüfung, weil ihre Muttersprache nicht Deutsch ist. Was ist richtig?",
      en: "A young woman wants to get her driver's license. She is afraid of the exam because her native language is not German. What is correct?",
    },
    options: [
      {
        de: "Sie muss mindestens zehn Jahre in Deutschland leben, bevor sie den Führerschein machen kann.",
        en: "She must live in Germany for at least ten years before she can get a driver's license.",
        id: "267-0",
      },
      {
        de: "Wenn sie kein Deutsch kann, darf sie keinen Führerschein haben.",
        en: "If she doesn't speak German, she can't have a driver's license.",
        id: "267-1",
      },
      {
        de: "Sie muss den Führerschein in dem Land machen, in dem man ihre Sprache spricht.",
        en: "She must get her driver's license in the country where her language is spoken.",
        id: "267-2",
      },
      {
        de: "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.",
        en: "She can perhaps take the theoretical exam in her native language. There are more than ten languages to choose from.",
        id: "267-3",
      },
    ],
    answer:
      "Sie kann die Theorie-Prüfung vielleicht in ihrer Muttersprache machen. Es gibt mehr als zehn Sprachen zur Auswahl.",
    id: "267",
  },
  {
    question: {
      de: "In Deutschland haben Kinder ab dem Alter von drei Jahren bis zur Ersteinschulung einen Anspruch auf …",
      en: "In Germany, children from the age of three until their first enrollment in school have a right to…",
    },
    options: [
      {
        de: "monatliches Taschengeld.",
        en: "monthly pocket money.",
        id: "268-0",
      },
      {
        de: "einen Platz in einem Sportverein.",
        en: "a place in a sports club.",
        id: "268-1",
      },
      {
        de: "einen Kindergartenplatz.",
        en: "a kindergarten place.",
        id: "268-2",
      },
      {
        de: "einen Ferienpass.",
        en: "a holiday pass.",
        id: "268-3",
      },
    ],
    answer: "einen Kindergartenplatz.",
    id: "268",
  },
  {
    question: {
      de: "Die Volkshochschule in Deutschland ist eine Einrichtung …",
      en: "The adult education center (Volkshochschule) in Germany is an institution…",
    },
    options: [
      {
        de: "für den Religionsunterricht.",
        en: "for religious instruction.",
        id: "269-0",
      },
      {
        de: "nur für Jugendliche.",
        en: "only for young people.",
        id: "269-1",
      },
      {
        de: "zur Weiterbildung.",
        en: " for further education.",
        id: "269-2",
      },
      {
        de: "nur für Rentnerinnen und Rentner.",
        en: "only for retirees.",
        id: "269-3",
      },
    ],
    answer: "zur Weiterbildung.",
    id: "269",
  },
  {
    question: {
      de: "Was ist in Deutschland ein Brauch zu Weihnachten?",
      en: "What is a custom in Germany at Christmas?",
    },
    options: [
      {
        de: "bunte Eier verstecken",
        en: "hide colorful eggs",
        id: "270-0",
      },
      {
        de: "einen Tannenbaum schmücken",
        en: "decorate a Christmas tree",
        id: "270-1",
      },
      {
        de: "sich mit Masken und Kostümen verkleiden",
        en: "dress up with masks and costumes",
        id: "270-2",
      },
      {
        de: "Kürbisse vor die Tür stellen",
        en: "put pumpkins in front of the door",
        id: "270-3",
      },
    ],
    answer: "einen Tannenbaum schmücken",
    id: "270",
  },
  {
    question: {
      de: "Welche Lebensform ist in Deutschland nicht erlaubt?",
      en: "Which form of living together is not allowed in Germany?",
    },
    options: [
      {
        de: "Mann und Frau sind geschieden und leben mit neuen Partnern zusammen.",
        en: "Man and woman are divorced and live with new partners.",
        id: "271-0",
      },
      {
        de: "Zwei Frauen leben zusammen.",
        en: "Two women live together.",
        id: "271-1",
      },
      {
        de: "Ein alleinerziehender Vater lebt mit seinen zwei Kindern zusammen.",
        en: "A single father lives with his two children.",
        id: "271-2",
      },
      {
        de: "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet.",
        en: "A man is married to two women at the same time.",
        id: "271-3",
      },
    ],
    answer: "Ein Mann ist mit zwei Frauen zur selben Zeit verheiratet.",
    id: "271",
  },
  {
    question: {
      de: "Bei Erziehungsproblemen gehen Sie in Deutschland …",
      en: "For parenting problems in Germany, you go to…",
    },
    options: [
      {
        de: "zur Ärztin/zum Arzt.",
        en: "the doctor.",
        id: "272-0",
      },
      {
        de: "zum Gesundheitsamt.",
        en: "the health department.",
        id: "272-1",
      },
      {
        de: "zum Einwohnermeldeamt.",
        en: "the registration office.",
        id: "272-2",
      },
      {
        de: "zum Jugendamt.",
        en: "the youth welfare office.",
        id: "272-3",
      },
    ],
    answer: "zum Jugendamt.",
    id: "272",
  },
  {
    question: {
      de: "Sie haben in Deutschland absichtlich einen Brief geöffnet, der an eine andere Person adressiert ist. Was haben Sie nicht beachtet?",
      en: "You have intentionally opened a letter in Germany that was addressed to another person. What did you not observe?",
    },
    options: [
      {
        de: "das Schweigerecht",
        en: "the right to remain silent",
        id: "273-0",
      },
      {
        de: "das Briefgeheimnis",
        en: "the secrecy of correspondence",
        id: "273-1",
      },
      {
        de: "die Schweigepflicht",
        en: "the duty of confidentiality",
        id: "273-2",
      },
      {
        de: "die Meinungsfreiheit",
        en: "freedom of expression",
        id: "273-3",
      },
    ],
    answer: "das Briefgeheimnis",
    id: "273",
  },
  {
    question: {
      de: "Was braucht man in Deutschland für eine Ehescheidung?",
      en: "What do you need for a divorce in Germany?",
    },
    options: [
      {
        de: "die Einwilligung der Eltern",
        en: "the consent of the parents",
        id: "274-0",
      },
      {
        de: "ein Attest einer Ärztin/eines Arztes",
        en: "a medical certificate from a doctor",
        id: "274-1",
      },
      {
        de: "die Einwilligung der Kinder",
        en: "the consent of the children",
        id: "274-2",
      },
      {
        de: "die Unterstützung einer Anwältin/eines Anwalts",
        en: "the support of a lawyer",
        id: "274-3",
      },
    ],
    answer: "die Unterstützung einer Anwältin/eines Anwalts",
    id: "274",
  },
  {
    question: {
      de: "Was sollten Sie tun, wenn Sie von Ihrer Ansprechpartnerin/Ihrem Ansprechpartner in einer deutschen Behörde schlecht behandelt werden?",
      en: "What should you do if you are treated poorly by your contact person at a German authority?",
    },
    options: [
      {
        de: "Ich kann nichts tun.",
        en: "I can't do anything.",
        id: "275-0",
      },
      {
        de: "Ich muss mir diese Behandlung gefallen lassen.",
        en: "I have to put up with this treatment.",
        id: "275-1",
      },
      {
        de: "Ich drohe der Person.",
        en: "I threaten the person.",
        id: "275-2",
      },
      {
        de: "Ich kann mich bei der Behördenleiterin/beim Behördenleiter beschweren.",
        en: "I can complain to the head of the authority.",
        id: "275-3",
      },
    ],
    answer:
      "Ich kann mich bei der Behördenleiterin/beim Behördenleiter beschweren.",
    id: "275",
  },
  {
    question: {
      de: "Eine Frau, die ein zweijähriges Kind hat, bewirbt sich in Deutschland um eine Stelle. Was ist ein Beispiel für Diskriminierung? Sie bekommt die Stelle nur deshalb nicht, weil sie …",
      en: "A woman with a two-year-old child applies for a job in Germany. What is an example of discrimination? She doesn't get the job only because she…",
    },
    options: [
      {
        de: "kein Englisch spricht.",
        en: "doesn't speak English.",
        id: "276-0",
      },
      {
        de: "zu hohe Gehaltsvorstellungen hat.",
        en: "has too high salary expectations.",
        id: "276-1",
      },
      {
        de: "keine Erfahrungen in diesem Beruf hat.",
        en: "has no experience in this profession.",
        id: "276-2",
      },
      {
        de: "Mutter ist.",
        en: "is a mother.",
        id: "276-3",
      },
    ],
    answer: "Mutter ist.",
    id: "276",
  },
  {
    question: {
      de: "Ein Mann im Rollstuhl hat sich auf eine Stelle als Buchhalter beworben. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil er …",
      en: "A man in a wheelchair applied for a job as an accountant. What is an example of discrimination? He doesn't get the job only because he…",
    },
    options: [
      {
        de: "im Rollstuhl sitzt.",
        en: "is in a wheelchair.",
        id: "277-0",
      },
      {
        de: "keine Erfahrung hat.",
        en: "has no experience.",
        id: "277-1",
      },
      {
        de: "zu hohe Gehaltsvorstellungen hat.",
        en: "has too high salary expectations.",
        id: "277-2",
      },
      {
        de: "kein Englisch spricht.",
        en: "doesn't speak English.",
        id: "277-3",
      },
    ],
    answer: "im Rollstuhl sitzt.",
    id: "277",
  },
  {
    question: {
      de: 'In den meisten Mietshäusern in Deutschland gibt es eine "Hausordnung". Was steht in einer solchen "Hausordnung"? Sie nennt …',
      en: 'In most apartment buildings in Germany, there is a "house rules" (Hausordnung). What is stated in such "house rules"? It specifies…',
    },
    options: [
      {
        de: "Regeln für die Benutzung öffentlicher Verkehrsmittel.",
        en: "rules for using public transport.",
        id: "278-0",
      },
      {
        de: "alle Mieterinnen und Mieter im Haus.",
        en: "all tenants in the house.",
        id: "278-1",
      },
      {
        de: "Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.",
        en: "rules that all residents must adhere to.",
        id: "278-2",
      },
      {
        de: "die Adresse des nächsten Ordnungsamtes.",
        en: "the address of the nearest public order office.",
        id: "278-3",
      },
    ],
    answer:
      "Regeln, an die sich alle Bewohnerinnen und Bewohner halten müssen.",
    id: "278",
  },
  {
    question: {
      de: "Wenn Sie sich in Deutschland gegen einen falschen Steuerbescheid wehren wollen, müssen Sie …",
      en: "If you want to object to an incorrect tax assessment in Germany, you must…",
    },
    options: [
      {
        de: "nichts machen.",
        en: "do nothing.",
        id: "279-0",
      },
      {
        de: "den Bescheid wegwerfen.",
        en: "throw away the notice.",
        id: "279-1",
      },
      {
        de: "Einspruch einlegen.",
        en: "lodge an objection.",
        id: "279-2",
      },
      {
        de: "warten, bis ein anderer Bescheid kommt.",
        en: "wait until another notice arrives.",
        id: "279-3",
      },
    ],
    answer: "Einspruch einlegen.",
    id: "279",
  },
  {
    question: {
      de: "Zwei Freunde wollen in ein öffentliches Schwimmbad in Deutschland. Beide haben eine dunkle Hautfarbe und werden deshalb nicht hineingelassen. Welches Recht wird in dieser Situation verletzt? Das Recht auf …",
      en: "Two friends want to go to a public swimming pool in Germany. Both have dark skin color and are therefore not allowed in. Which right is violated in this situation? The right to…",
    },
    options: [
      {
        de: "Meinungsfreiheit",
        en: "freedom of expression",
        id: "280-0",
      },
      {
        de: "Gleichbehandlung",
        en: "equal treatment",
        id: "280-1",
      },
      {
        de: "Versammlungsfreiheit",
        en: "freedom of assembly",
        id: "280-2",
      },
      {
        de: "Freizügigkeit",
        en: "freedom of movement",
        id: "280-3",
      },
    ],
    answer: "Gleichbehandlung",
    id: "280",
  },
  {
    question: {
      de: "Welches Ehrenamt müssen deutsche Staatsbürgerinnen und Staatsbürger übernehmen, wenn sie dazu aufgefordert werden?",
      en: "Which honorary office must German citizens take on if they are asked to?",
    },
    options: [
      {
        de: "Vereinstrainerin/Vereinstrainer",
        en: "club coach",
        id: "281-0",
      },
      {
        de: "Wahlhelferin/Wahlhelfer",
        en: "election assistant",
        id: "281-1",
      },
      {
        de: "Bibliotheksaufsicht",
        en: "library supervisor",
        id: "281-2",
      },
      {
        de: "Lehrerin/Lehrer",
        en: "teacher",
        id: "281-3",
      },
    ],
    answer: "Wahlhelferin/Wahlhelfer",
    id: "281",
  },
  {
    question: {
      de: "Was tun Sie, wenn Sie eine falsche Rechnung von einer deutschen Behörde bekommen?",
      en: "What do you do if you receive an incorrect invoice from a German authority?",
    },
    options: [
      {
        de: "Ich lasse die Rechnung liegen.",
        en: "I leave the invoice untouched.",
        id: "282-0",
      },
      {
        de: "Ich lege Widerspruch bei der Behörde ein.",
        en: "I lodge an objection with the authority.",
        id: "282-1",
      },
      {
        de: "Ich schicke die Rechnung an die Behörde zurück.",
        en: "I send the invoice back to the authority.",
        id: "282-2",
      },
      {
        de: "Ich gehe mit der Rechnung zum Finanzamt.",
        en: "I take the invoice to the tax office.",
        id: "282-3",
      },
    ],
    answer: "Ich lege Widerspruch bei der Behörde ein.",
    id: "282",
  },
  {
    question: {
      de: "Was man für die Arbeit können muss, ändert sich in Zukunft sehr schnell. Was kann man tun?",
      en: "What you need to be able to do for work changes very quickly in the future. What can you do?",
    },
    options: [
      {
        de: "Es ist egal, was man lernt.",
        en: "It doesn't matter what you learn.",
        id: "283-0",
      },
      {
        de: "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.",
        en: "Adults must continue to learn even after their training.",
        id: "283-1",
      },
      {
        de: "Kinder lernen in der Schule alles, was im Beruf wichtig ist. Nach der Schule muss man nicht weiter lernen.",
        en: "Children learn everything important for a profession in school. After school, you don't have to keep learning.",
        id: "283-2",
      },
      {
        de: "Alle müssen früher aufhören zu arbeiten, weil sich alles ändert.",
        en: "Everyone has to stop working earlier because everything is changing.",
        id: "283-3",
      },
    ],
    answer: "Erwachsene müssen auch nach der Ausbildung immer weiter lernen.",
    id: "283",
  },
  {
    question: {
      de: "Frau Frost arbeitet als fest angestellte Mitarbeiterin in einem Büro. Was muss sie nicht von ihrem Gehalt bezahlen?",
      en: "Ms. Frost works as a permanent employee in an office. What does she not have to pay from her salary?",
    },
    options: [
      {
        de: "Lohnsteuer",
        en: "income tax",
        id: "284-0",
      },
      {
        de: "Beiträge zur Arbeitslosenversicherung",
        en: "unemployment insurance contributions",
        id: "284-1",
      },
      {
        de: "Beiträge zur Renten- und Krankenversicherung",
        en: "pension and health insurance contributions",
        id: "284-2",
      },
      {
        de: "Umsatzsteuer",
        en: "sales tax",
        id: "284-3",
      },
    ],
    answer: "Umsatzsteuer",
    id: "284",
  },
  {
    question: {
      de: "Welche Organisation in einer Firma hilft den Arbeitnehmerinnen und Arbeitnehmern bei Problemen mit der Arbeitgeberin/dem Arbeitgeber?",
      en: "Which organization in a company helps employees with problems with the employer?",
    },
    options: [
      {
        de: "der Betriebsrat",
        en: "the works council",
        id: "285-0",
      },
      {
        de: "die Betriebsprüferin/der Betriebsprüfer",
        en: "the company auditor",
        id: "285-1",
      },
      {
        de: "die Betriebsgruppe",
        en: "the works group",
        id: "285-2",
      },
      {
        de: "das Betriebsmanagement",
        en: "the operations management",
        id: "285-3",
      },
    ],
    answer: "der Betriebsrat",
    id: "285",
  },
  {
    question: {
      de: "Sie möchten bei einer Firma in Deutschland ihr Arbeitsverhältnis beenden. Was müssen Sie beachten?",
      en: "You want to terminate your employment with a company in Germany. What do you need to consider?",
    },
    options: [
      {
        de: "die Gehaltszahlungen",
        en: "salary payments",
        id: "286-0",
      },
      {
        de: "die Arbeitszeit",
        en: "working hours",
        id: "286-1",
      },
      {
        de: "die Kündigungsfrist",
        en: "the notice period",
        id: "286-2",
      },
      {
        de: "die Versicherungspflicht",
        en: "the insurance obligation",
        id: "286-3",
      },
    ],
    answer: "die Kündigungsfrist",
    id: "286",
  },
  {
    question: {
      de: "Woraus begründet sich Deutschlands besondere Verantwortung für Israel?",
      en: "What is the basis for Germany's special responsibility for Israel?",
    },
    options: [
      {
        de: "aus der Mitgliedschaft in der Europäischen Union (EU)",
        en: "from membership in the European Union (EU)",
        id: "287-0",
      },
      {
        de: "aus den nationalsozialistischen Verbrechen gegen Juden",
        en: "from the Nazi crimes against Jews",
        id: "287-1",
      },
      {
        de: "aus dem Grundgesetz der Bundesrepublik Deutschland",
        en: "from the Basic Law of the Federal Republic of Germany",
        id: "287-2",
      },
      {
        de: "aus der christlichen Tradition",
        en: "from Christian tradition",
        id: "287-3",
      },
    ],
    answer: "aus den nationalsozialistischen Verbrechen gegen Juden",
    id: "287",
  },
  {
    question: {
      de: "Ein Mann mit dunkler Hautfarbe bewirbt sich um eine Stelle als Kellner in einem Restaurant in Deutschland. Was ist ein Beispiel für Diskriminierung? Er bekommt die Stelle nur deshalb nicht, weil …",
      en: "A man with dark skin applies for a job as a waiter in a restaurant in Germany. What is an example of discrimination? He doesn't get the job only because…",
    },
    options: [
      {
        de: "seine Deutschkenntnisse zu gering sind.",
        en: "his German language skills are insufficient.",
        id: "288-0",
      },
      {
        de: "er zu hohe Gehaltsvorstellungen hat.",
        en: "he has too high salary expectations.",
        id: "288-1",
      },
      {
        de: "er eine dunkle Haut hat.",
        en: "he has dark skin.",
        id: "288-2",
      },
      {
        de: "er keine Erfahrungen im Beruf hat.",
        en: "he has no professional experience.",
        id: "288-3",
      },
    ],
    answer: "er eine dunkle Haut hat.",
    id: "288",
  },
  {
    question: {
      de: "Sie haben in Deutschland einen Fernseher gekauft. Zu Hause packen Sie den Fernseher aus, doch er funktioniert nicht. Der Fernseher ist kaputt. Was können Sie machen?",
      en: "You bought a TV in Germany. At home, you unpack the TV, but it doesn't work. The TV is broken. What can you do?",
    },
    options: [
      {
        de: "eine Anzeige schreiben",
        en: "write a complaint",
        id: "289-0",
      },
      {
        de: "den Fernseher reklamieren",
        en: "complain about the TV",
        id: "289-1",
      },
      {
        de: "das Gerät ungefragt austauschen",
        en: "exchange the device without asking",
        id: "289-2",
      },
      {
        de: "die Garantie verlängern",
        en: "extend the warranty",
        id: "289-3",
      },
    ],
    answer: "den Fernseher reklamieren",
    id: "289",
  },
  {
    question: {
      de: "Warum muss man in Deutschland bei der Steuererklärung aufschreiben, ob man zu einer Kirche gehört oder nicht? Weil …",
      en: "Why do you have to write down whether you belong to a church or not on your tax return in Germany? Because…",
    },
    options: [
      {
        de: "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.",
        en: "there is a church tax linked to income and wage tax.",
        id: "290-0",
      },
      {
        de: "das für die Statistik in Deutschland wichtig ist.",
        en: "that is important for statistics in Germany.",
        id: "290-1",
      },
      {
        de: "man mehr Steuern zahlen muss, wenn man nicht zu einer Kirche gehört.",
        en: "you have to pay more taxes if you don't belong to a church.",
        id: "290-2",
      },
      {
        de: "die Kirche für die Steuererklärung verantwortlich ist.",
        en: "the church is responsible for the tax return.",
        id: "290-3",
      },
    ],
    answer:
      "es eine Kirchensteuer gibt, die an die Einkommen- und Lohnsteuer geknüpft ist.",
    id: "290",
  },
  {
    question: {
      de: "Die Menschen in Deutschland leben nach dem Grundsatz der religiösen Toleranz. Was bedeutet das?",
      en: "People in Germany live according to the principle of religious tolerance. What does that mean?",
    },
    options: [
      {
        de: "Es dürfen keine Moscheen gebaut werden.",
        en: "No mosques may be built.",
        id: "291-0",
      },
      {
        de: "Alle Menschen glauben an Gott.",
        en: "All people believe in God.",
        id: "291-1",
      },
      {
        de: "Jeder kann glauben, was er möchte.",
        en: "Everyone can believe what they want.",
        id: "291-2",
      },
      {
        de: "Der Staat entscheidet, an welchen Gott die Menschen glauben.",
        en: "The state decides which God people believe in.",
        id: "291-3",
      },
    ],
    answer: "Jeder kann glauben, was er möchte.",
    id: "291",
  },
  {
    question: {
      de: "Was ist in Deutschland ein Brauch zu Ostern?",
      en: "What is a custom in Germany at Easter?",
    },
    options: [
      {
        de: "Kürbisse vor die Tür stellen",
        en: "Put pumpkins in front of the door",
        id: "292-0",
      },
      {
        de: "einen Tannenbaum schmücken",
        en: "Decorate a Christmas tree",
        id: "292-1",
      },
      {
        de: "Eier bemalen",
        en: "Paint eggs",
        id: "292-2",
      },
      {
        de: "Raketen in die Luft schießen",
        en: "Shoot rockets into the air",
        id: "292-3",
      },
    ],
    answer: "Eier bemalen",
    id: "292",
  },
  {
    question: {
      de: "Pfingsten ist ein …",
      en: "Pentecost is a…",
    },
    options: [
      {
        de: "christlicher Feiertag.",
        en: "Christian holiday.",
        id: "293-0",
      },
      {
        de: "deutscher Gedenktag.",
        en: "German day of remembrance.",
        id: "293-1",
      },
      {
        de: "internationaler Trauertag.",
        en: "international day of mourning.",
        id: "293-2",
      },
      {
        de: "bayerischer Brauch.",
        en: "Bavarian custom.",
        id: "293-3",
      },
    ],
    answer: "christlicher Feiertag.",
    id: "293",
  },
  {
    question: {
      de: "Welche Religion hat die europäische und deutsche Kultur geprägt?",
      en: "Which religion has shaped European and German culture?",
    },
    options: [
      {
        de: "der Hinduismus",
        en: "Hinduism",
        id: "294-0",
      },
      {
        de: "das Christentum",
        en: "Christianity",
        id: "294-1",
      },
      {
        de: "der Buddhismus",
        en: "Buddhism",
        id: "294-2",
      },
      {
        de: "der Islam",
        en: "Islam",
        id: "294-3",
      },
    ],
    answer: "das Christentum",
    id: "294",
  },
  {
    question: {
      de: "In Deutschland nennt man die letzten vier Wochen vor Weihnachten …",
      en: "In Germany, the last four weeks before Christmas are called…",
    },
    options: [
      {
        de: "den Buß- und Bettag.",
        en: "Repentance and Prayer Day.",
        id: "295-0",
      },
      {
        de: "das Erntedankfest.",
        en: "Thanksgiving.",
        id: "295-1",
      },
      {
        de: "die Adventszeit.",
        en: "Advent season.",
        id: "295-2",
      },
      {
        de: "Allerheiligen.",
        en: "All Saints' Day.",
        id: "295-3",
      },
    ],
    answer: "die Adventszeit.",
    id: "295",
  },
  {
    question: {
      de: "Aus welchem Land sind die meisten Migrantinnen und Migranten nach Deutschland gekommen?",
      en: "From which country have most migrants come to Germany?",
    },
    options: [
      {
        de: "Italien",
        en: "Italy",
        id: "296-0",
      },
      {
        de: "Polen",
        en: "Poland",
        id: "296-1",
      },
      {
        de: "Marokko",
        en: "Morocco",
        id: "296-2",
      },
      {
        de: "Türkei",
        en: "Turkey",
        id: "296-3",
      },
    ],
    answer: "Türkei",
    id: "296",
  },
  {
    question: {
      de: "In der DDR lebten vor allem Migrantinnen und Migranten aus …",
      en: "In the GDR, migrants primarily lived from…",
    },
    options: [
      {
        de: "Vietnam, Polen, Mosambik.",
        en: "Vietnam, Poland, Mozambique.",
        id: "297-0",
      },
      {
        de: "Frankreich, Rumänien, Somalia.",
        en: "France, Romania, Somalia.",
        id: "297-1",
      },
      {
        de: "Chile, Ungarn, Simbabwe.",
        en: "Chile, Hungary, Zimbabwe.",
        id: "297-2",
      },
      {
        de: "Nordkorea, Mexiko, Ägypten.",
        en: "North Korea, Mexico, Egypt.",
        id: "297-3",
      },
    ],
    answer: "Vietnam, Polen, Mosambik.",
    id: "297",
  },
  {
    question: {
      de: "Ausländische Arbeitnehmerinnen und Arbeitnehmer, die in den 50er und 60er Jahren von der Bundesrepublik Deutschland angeworben wurden, nannte man …",
      en: "Foreign workers who were recruited by the Federal Republic of Germany in the 1950s and 1960s were called…",
    },
    options: [
      {
        de: "Schwarzarbeiterinnen/Schwarzarbeiter.",
        en: "undeclared workers.",
        id: "298-0",
      },
      {
        de: "Gastarbeiterinnen/Gastarbeiter.",
        en: "guest workers.",
        id: "298-1",
      },
      {
        de: "Zeitarbeiterinnen/Zeitarbeiter.",
        en: "temporary workers.",
        id: "298-2",
      },
      {
        de: "Schichtarbeiterinnen/Schichtarbeiter.",
        en: "shift workers.",
        id: "298-3",
      },
    ],
    answer: "Gastarbeiterinnen/Gastarbeiter.",
    id: "298",
  },
  {
    question: {
      de: "Aus welchem Land kamen die ersten Gastarbeiterinnen und Gastarbeiter in die Bundesrepublik Deutschland?",
      en: "From which country did the first guest workers come to the Federal Republic of Germany?",
    },
    options: [
      {
        de: "Italien",
        en: "Italy",
        id: "299-0",
      },
      {
        de: "Spanien",
        en: "Spain",
        id: "299-1",
      },
      {
        de: "Portugal",
        en: "Portugal",
        id: "299-2",
      },
      {
        de: "Türkei",
        en: "Turkey",
        id: "299-3",
      },
    ],
    answer: "Italien",
    id: "299",
  },
];

export default questions;
