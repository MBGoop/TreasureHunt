// ═══════════════════════════════════════════════════════════════
//  SCHATTENJACHT GENT — CONFIG & STOPS
//  ✏️  Dit is het ENIGE bestand dat je hoeft aan te passen.
//  Wijzig locaties, weetjes, clues, quizvragen hier.
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  // ── Algemeen ──────────────────────────────────────────────
  title:    "Fun wandeling",
  subtitle: "Academiejaarafsluiter · Arteveldehogeschool",
  date:     "Woensdag 24 juni 2026",

  // ── Admin ─────────────────────────────────────────────────
  adminPassword: "1234",

  // ── Firebase ──────────────────────────────────────────────
  firebase: {
    apiKey:            "AIzaSyCVTgtbB_D1uzA5a6DJmsZM99GjtuY1OH0",
    authDomain:        "treasure-hunt-artevelde.firebaseapp.com",
    databaseURL:       "https://treasure-hunt-artevelde-default-rtdb.europe-west1.firebasedatabase.app",
    projectId:         "treasure-hunt-artevelde",
    storageBucket:     "treasure-hunt-artevelde.firebasestorage.app",
    messagingSenderId: "468273847640",
    appId:             "1:468273847640:web:ebcb5046a90e9de0a8192d"
  },

  // ── GPS ───────────────────────────────────────────────────
  unlockRadius:      10,   // meter — hoe dicht voor stop opengaat
  compassActiveFrom: 500,  // meter — vanaf wanneer kompas actief wordt

  // ── Punten ────────────────────────────────────────────────
  pointsStop: 2,   // punten voor een stop bereiken
  pointsQuiz: 3,   // punten voor correct quizantwoord
};

// ═══════════════════════════════════════════════════════════════
//  STOPS
// ═══════════════════════════════════════════════════════════════

const STOPS = [
  {
    id: 1, emoji: "⚓", name: "Graslei",
    lat: 51.05477, lng: 3.72075,
    weetje: "De Graslei was de economische hartader van Gent. De gildehuizen dateren van de 12e tot 17e eeuw — elk was eigendom van een ander gilde. Aan de overkant op de Korenlei staat het huis 'De Zwane' met twee zwanen op de gevel die met de RUG naar elkaar staan — een teken van onenigheid tussen de schippers die er vroeger handelden.",
    clue: "Je staat aan de mooiste kaai van Gent. Kijk naar de overkant van het water. Twee dieren staan op een gevel, maar ze kijken niet naar elkaar. Welk dier? Dat dier staat ook op een brugleuning vlakbij — loop naar die brug.",
    quiz: {
      vraag: "Waarom staan de zwanen op 'De Zwane' met de RUG naar elkaar?",
      opties: ["Twee rivaliserende schippersfamilies", "Teken van onenigheid tussen schippers die er handelden", "De architect vond het mooier", "Ze kijken naar de ingang"],
      correct: 1
    }
  },
  {
    id: 2, emoji: "🌉", name: "Sint-Michielsbrug",
    lat: 51.05388, lng: 3.72054,
    weetje: "De Sint-Michielsbrug werd gebouwd in 1905-1909 voor de wereldtentoonstelling van 1913. Vanop de brug heb je het iconische zicht op de DRIE GENTSE TORENS: Sint-Niklaaskerk, Belfort en Sint-Baafskathedraal. Vroeger stond hier een platte draaibrug die de tram constant ophield.",
    clue: "Je staat op de brug met het mooiste uitzicht van Gent. Drie torens op een rij. De MIDDELSTE toren heeft een dier bovenop als stadssymbool — welk dier? De straat die zijn naam draagt, ligt naast de oudste vleesmarkt van Gent.",
    quiz: {
      vraag: "Welk dier staat bovenop het Belfort van Gent?",
      opties: ["Een leeuw", "Een adelaar", "Een draak", "Een griffioen"],
      correct: 2
    }
  },
  {
    id: 3, emoji: "🥩", name: "Groot Vleeshuis",
    lat: 51.05593, lng: 3.72181,
    weetje: "Het Groot Vleeshuis dateert uit 1407. Alleen afstammelingen van vier families (Van Loo, Minne, Van Melle en Deynoodt) mochten er vlees verkopen — een privilege van Karel V. Ze werden 'Prinsenkinderen' genoemd. Vroeger voeren scheepjes ONDER het gebouw door via een kanaal.",
    clue: "Je staat voor het gebouw waar alleen 'Prinsenkinderen' vlees mochten verkopen. Scheepjes voeren vroeger ONDER dit gebouw door. Kijk aan de zijkant — tel het aantal bogen. Dat getal = het aantal letters van je volgende stop: een kasteel dat ook als katoenfabriek heeft gediend.",
    quiz: {
      vraag: "Hoe heetten de bevoorrechte families die als enige vlees mochten verkopen?",
      opties: ["De Gildebroeders", "De Prinsenkinderen", "De Koningszonen", "De Ambachtsmeesters"],
      correct: 1
    }
  },
  {
    id: 4, emoji: "🏰", name: "Gravensteen",
    lat: 51.05718, lng: 3.72072,
    weetje: "Het Gravensteen was burcht, gevangenis, folterplaats én katoenfabriek. Op het Sint-Veerleplein knipperen de lantaarnpalen telkens wanneer er een kind geboren wordt in Gent — een kunstwerk van de Italiaanse kunstenaar Alberto Garutti.",
    clue: "Dit kasteel was ooit een katoenfabriek. Op het plein voor het kasteel knipperen de lantaarnpalen bij elke geboorte in Gent. Tel het aantal lantaarnpalen. Dat getal min één = huisnummer van je volgende stop op de Kraanlei.",
    quiz: {
      vraag: "Wat gebeurt er op het Sint-Veerleplein bij elke geboorte in Gent?",
      opties: ["Er klinkt een klokgelui", "De lantaarnpalen knipperen", "Een vlag wordt gehesen", "Een fonteintje springt aan"],
      correct: 1
    }
  },
  {
    id: 5, emoji: "🦅", name: "Kraanlei",
    lat: 51.05695, lng: 3.72263,
    weetje: "De naam 'Kraanlei' komt van een houten kraanmachine die hier stond tot 1836 om wijnvaten te lossen. Het Huis van Alijn (nr. 65) werd gebouwd in 1363 als boetedoening nadat twee families een bloedige vete uitvochten op een bruiloft.",
    clue: "Zoek het gebouw op nr. 65 — gebouwd als boetedoening na een bloedige bruiloftsvete. Boven de ingang staat een woord. De eerste letter wijst je naar een steeg richting het Patershol, de wijk van de schoenmakers.",
    quiz: {
      vraag: "Waarom werd het Huis van Alijn gebouwd in 1363?",
      opties: ["Als woonst voor de burgemeester", "Als boetedoening na een bloedige bruiloftsvete", "Als opslagplaats voor wijn", "Als zetel van het schippersgilde"],
      correct: 1
    }
  },
  {
    id: 6, emoji: "👟", name: "Patershol",
    lat: 51.05770, lng: 3.72289,
    weetje: "'Corduwaniers' waren schoenmakers die werkten met leder uit het Spaanse Córdoba. Het Patershol was in de middeleeuwen géén arme buurt — hier woonden de rijkste magistraten en advocaten van Gent, verbonden aan de Raad van Vlaanderen in het Gravensteen.",
    clue: "Je staat in de straat van de schoenmakers met leder uit Spanje. Zoek de hoek waar twee straatnamen samenkomen waarvan één een KLEUR is. Die straat brengt je naar een plein met een kanon zo groot als een auto.",
    quiz: {
      vraag: "Welk soort leder gebruikten de 'corduwaniers'?",
      opties: ["Rundsleder uit Gent", "Schaapsleder uit Brugge", "Leder uit het Spaanse Córdoba", "Paardenleder uit Brussel"],
      correct: 2
    }
  },
  {
    id: 7, emoji: "💣", name: "Dulle Griet",
    lat: 51.05730, lng: 3.72415,
    weetje: "De Dulle Griet is een bombarde uit 1430-1448, 5,31m lang en bijna 17.000 kg zwaar. The Guardian verkoos café Dulle Griet als 'vermoedelijk beste bar ter wereld'. Je moet er je SCHOEN afgeven als onderpand voor een Kwak-glas.",
    clue: "Voor je staat een kanon van bijna 17.000 kg. Het café ernaast werd verkozen als beste bar ter wereld. Als je een Kwak bestelt, geef je iets af als onderpand. Wat is dat? Het aantal letters = het aantal minuten stappen naar het plein van de volksheld.",
    quiz: {
      vraag: "Wat geef je als onderpand voor een Kwak-bier bij café Dulle Griet?",
      opties: ["Je portemonnee", "Je identiteitskaart", "Je schoen", "Je sleutels"],
      correct: 2
    }
  },
  {
    id: 8, emoji: "🥂", name: "Vrijdagmarkt",
    lat: 51.05697, lng: 3.72564,
    cava: true,
    weetje: "De Vrijdagmarkt is marktplaats sinds 1199 — een van de oudste van Europa. Jacob van Artevelde wijst met zijn hand richting Engeland als symbool van het handelsverbond dat hij sloot. Het Toreken is het oudste gebouw van het plein (15e eeuw).",
    clue: "🥂 CAVA-STOP! MB en Kimberly staan klaar. Even bekomen. Na de cava: zoek het oudste en kleinste gebouw op het plein — een torentje met trapgevel. De straat achter dat gebouw brengt je naar een brouwerij met een middeleeuws geheim.",
    quiz: {
      vraag: "Hoe oud is de Vrijdagmarkt als marktplaats?",
      opties: ["Sinds de 14e eeuw", "Sinds 1199 — meer dan 825 jaar", "Sinds de Napoleontische tijd", "Sinds de Gentse Feesten"],
      correct: 1
    }
  },
  {
    id: 9, emoji: "🍺", name: "Gruut Stadsbrouwerij",
    lat: 51.05757, lng: 3.73023,
    weetje: "De Gruut Stadsbrouwerij brouwt bier zonder hop, op basis van een middeleeuws kruidenrecept: gagel, alsem en gember. Vóór de hoprevolutie in de 14e-15e eeuw was gruit de standaard smaakgever van bier in de Lage Landen.",
    clue: "Je staat bij de enige brouwerij in Gent zonder hop. Het huisnummer van je eindbestemming op de Huidevetterskaai is hetzelfde als de leeftijd van iemand die 'veertig' wordt. Dat is de finish!",
    quiz: {
      vraag: "Wat gebruikte Gruut in plaats van hop?",
      opties: ["Lavendel en rozemarijn", "Gruit — kruiden zoals gagel en alsem", "Jeneverbes en tijm", "Gewone mout"],
      correct: 1
    }
  },
  {
    id: 10, emoji: "🏁", name: "Multatuli",
    lat: 51.06106, lng: 3.72782,
    finish: true,
    weetje: "'Multatuli' betekent in het Latijn: ik heb veel gedragen. Het pseudoniem van schrijver Eduard Douwes Dekker (1820-1887), bekend om zijn aanklacht tegen het kolonialisme in Nederlands-Indië. Toepasselijk afsluiter voor een zwaar academiejaar!",
    clue: "🏁 FINISH! Jullie hebben de schattenjacht voltooid. Ga naar binnen en meld jullie aankomst!",
    quiz: {
      vraag: "Wat betekent 'Multatuli' in het Latijn?",
      opties: ["Ik heb veel gereisd", "Ik heb veel gedragen", "Ik heb veel geleerd", "Ik heb veel gezien"],
      correct: 1
    }
  }
];