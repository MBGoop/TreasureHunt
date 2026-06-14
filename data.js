// ═══════════════════════════════════════════════════════════════
//  Wijzig locaties, weetjes, clues, quizvragen hier. RAW 1
// ═══════════════════════════════════════════════════════════════

const CONFIG = {
  // ── Algemeen ──────────────────────────────────────────────
  title:    "Overleef<br><em>de Teamnamiddag!</em>",
  subtitle: "Avontuur, Ambiance & (een beetje) Chaos",
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
  unlockRadius:      20,
  compassActiveFrom: 500,

  // ── Punten ────────────────────────────────────────────────
  pointsStop: 2,
  pointsQuiz: 3,
};

// ═══════════════════════════════════════════════════════════════
//  STOPS
//  LET OP: correct is 0-gebaseerd → eerste optie = 0, tweede = 1, derde = 2, vierde = 3 - anders blokkeerd de app. 
// ═══════════════════════════════════════════════════════════════

const STOPS = [
  {
    id: 1, emoji: "⚓", name: "Graslei",
    lat: 51.05477, lng: 3.72075,
    weetje: "De Graslei en de Korenlei vormen samen een van de bekendste stadsgezichten van Gent. In de middeleeuwen lag hier de belangrijkste binnenhaven: schepen losten hun lading aan de kades. De Graslei was de drukke handelszone, met goederen als graan, wol en wijn. De gevelrij van gilde- en handelshuizen toont in één straat verschillende bouwstijlen en werd later zorgvuldig gerestaureerd. De Korenlei was eerder residentieel en verwijst naar de graanhandel. Hier staat ‘De Zwane’, herkenbaar aan de twee zwanen op de gevel: een oud uithangteken dat duidelijk maakte welke herberg of zaak het was. Of niet…",
    clue: "In 1754 stond hier een houten draaibrug — schippers konden hem opzij draaien zodat masten konden passeren. De brug was een scharnierpunt tussen de Graslei (graan- en grasvrachten) en de Korenlei, richting het handelskwartier. Maar welke is het? Ga ernaartoe… ",
    quiz: {
      vraag: "Waarom staan de zwanen op 'De Zwane' nu met de RUG naar elkaar?",
      opties: ["Twee rivaliserende schippersfamilies", "De ene symboliseert vrouwen, de ander alcohol", "De architect vond het mooier in perfecte symmetrie.", "De stenhouwer maakte een fout"],
      correct: 1  // "De ene symboliseert vrouwen, de ander alcohol"
    }
  },
  {
    id: 2, emoji: "🌉", name: "Sint-Michielsbrug",
    lat: 51.05388, lng: 3.72054,
    weetje: "De vroegste vermelding van een brug op deze plek dateert al van 1322 — "up Sente Mechiels bricge". In 1754 werd een houten draaibrug gebouwd, die een stenen brug uit 1401 verving. Die draaibrug was onmisbaar voor de binnenvaart: schippers konden hem opzijdraaien zodat masten konden passeren. Maar het voortdurende oponthoud aan de draaibrug, zeker voor de tram, deed het stadsbestuur besluiten een vaste stenen brug te plaatsen — met het oog op de wereldtentoonstelling van 1913. De huidige Sint-Michielsbrug was afgewerkt in 1909, ontworpen door architect Louis Cloquet — dezelfde man die ook het Oude Postkantoor op de Korenmarkt en het Sint-Pietersstation ontwierp. Op de centrale lantaarn staat een bronzen beeld van Sint-Michael de Aartsengel. Sinds 1983 is de brug een beschermd monument.",
    clue: "Volg het water terug stroomopwaarts, tot je de geluiden van de markt hoort. Zoek het gebouw waar vroeger werd verhandeld door Van Loo, Minne, Van Melle en Deynoodt.",
    quiz: {
      vraag: "Welk dier ligt er aan de voeten bij Sint-Michael en staat staat natuurlijk op het Belfort van Gent?",
      opties: ["Een leeuw", "Een adelaar", "Een draak", "Een griffioen"],
      correct: 2  // "Een draak"
    }
  },
  {
    id: 3, emoji: "🥩", name: "Groot Vleeshuis",
    lat: 51.05593, lng: 3.72181,
    weetje: "Het Groot Vleeshuis dateert uit 1407 en was eeuwenlang het kloppende hart van de Gentse vleeshandel. Maar niet iedereen mocht hier zomaar aan de slag: dankzij een privilege van Karel V uit 1541 was de handel strikt voorbehouden aan afstammelingen van slechts vier families — Van Loo, Minne, Van Melle en Deynoodt. Wie niet tot één van deze geslachten behoorde, had hier niets te zoeken. Dit monopolie bleef in stand tot het einde van het Ancien Régime. Wat de meeste bezoekers niet weten: onder het gebouw liep vroeger een kanaal. Kleine scheepjes voeren er onderdoor om goederen rechtstreeks aan te voeren. Van dat water is vandaag niets meer te zien, maar de structuur van het gebouw verraadt nog steeds dat Gent ooit veel meer een waterstad was dan het nu lijkt",
    clue: "Je verlaat het gebouw waar het vlees werd verkocht. Maar naast die handel stond al eeuwenlang een klein kroegje met een veelzeggende naam — een naam die verwijst naar waar de veroordeelden eindigden. Diezelfde veroordeelden werden berecht in het gebouw dat je nu zoekt. Zoek de plek waar recht werd gesproken, gevangenen werden vastgehouden én waar de veroordeelden hun laatste ale dronken...",
    quiz: {
      vraag: "Hoe heetten de bevoorrechte families die als enige vlees mochten verkopen?",
      opties: ["De Gildebroeders", "De Prinsenkinderen", "De Koningszonen", "De Ambachtsmeesters"],
      correct: 1  // "De Prinsenkinderen"
    }
  },
  {
    id: 4, emoji: "🏰", name: "Gravensteen",
    lat: 51.05718, lng: 3.72072,
    weetje: "Het Gravensteen was burcht, gevangenis, folterplaats, rechtbank, muntdrukkerij én ... Op het Sint-Veerleplein knipperen de lantaarnpalen telkens wanneer er een kind geboren wordt in Gent — een kunstwerk van de Italiaanse kunstenaar Alberto Garutti.",
    clue: "In 1337 vloeide bloed tussen twee families in de Sint-Janskerk. Als boetedoening voor die moordpartij moesten ze een godshuis bouwen. Zoek dat gebouw...",
    quiz: {
      vraag: "Wat was het gravensteen ook al eens, naast burcht en gevangenis?",
      opties: ["Een klooster", "Een brouwerij", "Een graanopslagplaats", "Een katoenfabriek"],
      correct: 3  // "Een katoenfabriek"
    }
  },
  {
    id: 5, emoji: "🦅", name: "Het huis van Alijn",
    lat: 51.05695, lng: 3.72263,
    weetje: "De oorsprong van het Huis van Alijn is een liefdesverhaal met een bloedige afloop. De jonge volder Hendrik Alijn was verliefd op Godelieve, de dochter van een rijke wever. Haar vader weigerde het huwelijk — hij verkoos de rijke patriciër Simon Rijm als huwelijkspartner. Godelieve weigerde op de avances van Simon in te gaan. Gekwetst door haar afwijzing en opgehitst door de volders zon Simon op wraak. Vergezeld van zijn broer en enkele bendeleden drong hij de Sint-Janskerk binnen — vandaag de Sint-Baafskathedraal — en vermoordde er tijdens een kerkdienst zijn rivaal Hendrik Alijn, zijn broer Seger én een dienaar. Als straf en boetedoening moest de familie Rijm een godshuis stichten voor de armen. Dat werd het Huis van Alijn in 1363. Boven de ingangspoort lees je nog altijd: 'Kindren Halyns Hospital anno 1363'. Het is het enige volledig bewaarde godshuis van Gent — een complex met witgekalkte huisjes rond een binnentuin en een eigen kapel. Het bood gratis onderdak, verzorging en ondersteuning aan behoeftige ouderen, zieken en weduwen. Eeuwen later verloor het gebouw zijn functie als armenhuis. In 1932 kocht de stad Gent het vervallen godshuis op en restaureerde het. In 1962 opende het als Museum voor Volkskunde — met een focus op oude ambachten en folklore. Vanaf 2000 draagt het de historische naam Huis van Alijn terug en verschoof de focus naar het dagelijkse leven in de 20e en 21e eeuw — van keukengerief tot kinderspeelgoed, van mode tot muziek.",
    clue: "Vervolg je weg naar de volgende wijk waar straatnamen de oude ambachten verraden. Zoek de straat dat de maken heeft met een spaanse stad",
    quiz: {
      vraag: "Wat staat er gegraveerd boven de ingangspoort van het Huis van Alijn?",
      opties: ["In Nomine Pacis — pro animabus Henrici et Segeri", "Kindren Halyns Hospital anno 1363", "Poenitentia et Redemptio — gesticht by Simon Rijm anno 1363", "Hic Requiescunt Henricus et Segeirus Alijn — MCCCLXIII"],
      correct: 1  // "Kindren Halyns Hospital anno 1363"
    }
  },
  {
    id: 6, emoji: "👟", name: "Patershol",
    lat: 51.05770, lng: 3.72289,
    weetje: "'Corduwaniers' waren schoenmakers die werkten met leder uit een spaanse stad in de wijk. De naam 'Patershol' heeft een verrassende oorsprong. Toen de karmelieten hun klooster wilden uitbreiden, bouwden ze gewoon over de Plotersgracht heen — de enige waterbron van de buurt. Als compromis lieten ze een klein, laag poortje open in de muur. Via een steile trap daalde je af naar een overkluisde, donkere ruimte om toch nog bij het water te geraken. De Gentenaars noemden die duistere doorgang spottend 'het hol van de paters' — en zo kreeg de hele wijk haar naam.",
    clue: "Je staat nu in de wijk van de ambachtslieden. De smalle straatjes lopen allemaal uit op één plein — het marktplein van de gilden. Zoek de uitgang via de straat die verwijst naar geld. Op dat plein wacht een symbolische ijzeren vrouw met een grote mond — maar in de praktijk heeft ze nooit echt iets gezegd. Ze staat er al eeuwen te kijken. Zoek haar.",
    quiz: {
      vraag: "Maar welk soort leder gebruikten nu de 'corduwaniers'?",
      opties: ["Rundsleder uit het Spaanse Barcelona en Igualada", "Rundsleder uit het Spaanse Valladolid", "Leder uit het Spaanse Córdoba", "Paardenleder uit het Spaanse Ubrique"],
      correct: 2  // "Leder uit het Spaanse Córdoba"
    }
  },
  {
    id: 7, emoji: "💣", name: "Dulle Griet",
    lat: 51.05730, lng: 3.72415,
    weetje: "Het kanon heette oorspronkelijk de 'groten rooden duyvele' — naar zijn vuurrode smeedijzer. Toen het voor het eerst afgevuurd werd, maakte het zo'n oorverdovend lawaai en zulke rookwolken dat het leek alsof de hel was losgebroken. In de volksmond was een 'dulle griet' ook een bazige, kijvende vrouw die de baas wilde spelen. De Dulle Griet heeft wel een bewogen verleden. Keizer Karel strafte Gent door alle wapens in beslag te nemen… tot de Spanjaarden aan de deur klopten en de Gentenaars plots kanonnen nodig hadden. Oplossing: op zoek gaan naar alles wat schiet of ontploft. In Oudenaarde vonden ze een reusachtig rood kanon, achtergelaten door het Bourgondische leger. De Gentenaars namen het mee. Het ding woog oorspronkelijk 12.500 kg. Met man en macht gehisen in een boot, gevaren naar Gent, maar het kanon haalde zijn eindbestemming, het St. Pietersplein, nooit. Het bleef steken in de buurt van de Vrijdagmarkt. Het kanon is ondertussen in de loop van de jaren ongeveer 250 kilogram lichter geworden door het roest.",
    clue: "Je hebt de bazige vrouw gevonden. Maar op dit plein staat ook een man die Gent ooit redde met zijn mond in plaats van met een kanon. Hij sloot een slim verbond met een vreemde mogendheid en wees daarbij letterlijk de richting aan.",
    quiz: {
      vraag: "Herberg de Dulle Griet serveert de 'Max van 't Huis': een gigantisch glas van 1,2 liter Kwak in een houten standaard. Omdat het glas kostbaar is en tegen diefstal, moet je iets afgeven als borg. Wat is dat?",
      opties: ["Je portemonnee", "Je identiteitskaart", "Je schoen", "Je huissleutels"],
      correct: 2  // "Je schoen"
    }
  },
  {
    id: 8, emoji: "🥂", name: "Vrijdagmarkt",
    lat: 51.05697, lng: 3.72564,
    cava: true,
    weetje: "De Vrijdagmarkt is het bloedigste en meest dramatische plein van Gent. Hier werden vorsten plechtig ontvangen bij hun 'Blijde Inkomst', maar ook vetes beslecht en terechtstellingen voltrokken. Op 26 augustus 1796 viel voor het eerst het hoofd onder de guillotine op dit plein. De beroemdste figuur is natuurlijk Jacob van Artevelde — lakenkoopman, volksleider en de machtigste man van Gent, en natuurlijk ook de inspiratie voor onze hogeschool 😉. In 1340 riep hij hier de Engelse koning Eduard III uit tot koning van Frankrijk, waarmee hij tegelijk de graaf van Vlaanderen én de Franse koning tartte. Zijn vinger wijst nog steeds richting Engeland. Vijf jaar later sloeg het lot toe. Op 2 mei 1345 — de 'Kwade Maandag' — vochten wevers en volders een bloedige strijd uit op dit plein. Honderden doden vielen, de deken van de volders werd gedood. Deken Geraard Denys van de rijke wevers maakte korte metten met de tegenstanders én later met Van Artevelde zelf — die werd thuis vermoord aan de achterzijde van zijn woning in de Paddenhoek. Het enige overgebleven middeleeuwse gebouw is het 15e-eeuwse Toreken, het vroegere gildehuis van de huidevetters.",
    clue: "Je verlaat de man die Gent redde met een handdruk door het verbond met Engeland. Maar er is ook een held die Gent redde met een lied. Zoek de kerk van de pelgrim en het pleintje waar elk jaar iets opstijgt.",
    quiz: {
      vraag: "Kijk omhoog naar het dak van het Toreken. Daar staat een figuur die al eeuwen over het plein waakt. Ze heeft een naam die klinkt als een melodie. Wie is zij?",
      opties: ["Margriete — de Gentse volksheldin die de stad redde van de Spanjaarden", "Mammelokker — het vrouwelijk symbool van Gentse barmhartigheid", "Melusine — de zeemeermin, door de huidevetters meegebracht als oorlogsbuit na een veldslag", "Mélisande — de watergeest uit de Leie, als geschenk van de graaf van Vlaanderen"],
      correct: 2  // "Melusine"
    }
  },
  {
    id: 9, emoji: "🪁", name: "Walter De Buckplein",
    lat: 51.0561170, lng: 3.7274083,
    weetje: "Dit kleine pleintje bij de Sint-Jacobskerk was ooit het stilste en meest vergeten hoekje van Gent. De kerk draagt de naam van de beschermheilige van de pelgrims — reizigers die hier eeuwenlang halt hielden op weg naar Santiago de Compostela. In 1969 veranderde het pleintje voor altijd. Walter De Buck — beeldhouwer, volkszanger en anarchist — zette er een klein podium tegen de kerkgevel, hing wat gekleurde lichtjes op en organiseerde de eerste 'Gentse Fieste gelijk in den tijd'. Met een tweedehands muziekinstallatie en pannenkoeken als catering werd het stilste pleintje van Gent het kloppende hart van de vernieuwde Gentse Feesten. Zijn volkslied 't Vliegerke kennen alle Gentenaars van buiten. In 2017 kreeg het plein zijn naam.",
    clue: "Je verlaat het plein van de man die de oude Gentse liedjes nieuw leven gaf. Maar hij is niet de enige die in Gent iets oerouds deed herleven. Vlakbij is een vrouw die een middeleeuws geheim recept herontdekte — een recept dat eeuwenlang verloren was. Waar vertoeft ze zich nu...",
    quiz: {
      vraag: "Iedereen kent wel t'vliegerke, het volkslied van Walter De Buck. Maar hij vormde samen met twee andere artiesten 'de drie W's' van de Vlaamse folk en kleinkunst in dialect. Wie waren zijn kompanen?",
      opties: ["Warre Borgmans en Wim Opbrouck", "Wannes Van de Velde en Willem Vermandere", "Wouter Vandenabeele en Wim De Craene", "Ward Bogaert en Wannes Cappelle"],
      correct: 1  // "Wannes Van de Velde en Willem Vermandere"
    }
  },
  {
    id: 10, emoji: "🍺", name: "De Gruut Stadsbrouwerij",
    lat: 51.0575406, lng: 3.7302251,
    weetje: "De Gentse Stadsbrouwerij Gruut is een verhaal van een geheim dat eeuwenlang verloren was. In de middeleeuwen verdeelde de Leie de stad in twee: op de rechteroever brouwden biermakers onder Duits gezag met hop, op de linkeroever brouwden ze onder Frans bewind met een mysterieus kruidenmengsel — de 'gruut'. Alleen de landsheer kende het recept, en hij hief er belasting op. In de 16e eeuw verdween de gruut-traditie voorgoed toen hop het overnam. In 2009 besloot brouwingenieur Annick De Splenter het geheim te herontdekken. Samen met de UGent analyseerde ze middeleeuwse kruiden tot ze een recept vond dat werkte. Het resultaat: een bier zachter en ronder dan hopbier, waarbij de volle smaak pas echt tot zijn recht komt. En de naam? 'Gruut' verwijst niet alleen naar de kruiden — het is ook de Gentse naam voor de 'groot', een muntstuk dat onder Keizer Karel als betaalmiddel diende.",
    clue: "Je verlaat nu degene die een oud geheim herontdekte. Volg de zoete geur van het verleden — waar ooit suiker werd geraffineerd, zoek de straat die glanst...",
    quiz: {
      vraag: "Wat gebruikte Gruut in plaats van hop?",
      opties: ["Lavendel en Korianderzaad", "Gagel en Wilde Rozemarijn", "Jeneverbes en Tijm", "Kruidnagel en Kaneel"],
      correct: 1  // "Gagel en Wilde Rozemarijn"
    }
  },
  {
    id: 11, emoji: "🏫", name: "Artevelde Goudstraat",
    lat: 51.0569500, lng: 3.7290000,
    weetje: "De Goudstraat glinstert meer dan je denkt. In 1804 stond hier de suikerraffinaderij De Braecke — en suiker was toen inderdaad zo kostbaar als goud. Maar dat is niet het enige geheim. In datzelfde gebouw richtte een balboogschutterij haar feestzaal in: de zaal Nemrod. En alsof dat niet genoeg is: in dit huis woonde ooit Filips van Artevelde — de zoon van de volksheld die je eerder op de Vrijdagmarkt zag staan. Het bloed kruipt waar het niet gaan kan. Vandaag lopen er studenten rond waar ooit zijn voeten de vloer raakten — de suiker is verdwenen, maar de rijkdom van kennis bleef.",
    clue: "Je verlaat de straat die glanst als goud en de brug van de meermin. De rijkdom van dit verhaal loopt verder langs het water. Volg de Leie en zoek de kaai die vernoemd is naar het gilde dat je eerder al tegenkwam — op het plein van de volksheld, bovenop het oudste gebouw. Aan die kaai wacht je eindbestemming.",
    quiz: {
      vraag: "We keren even terug naar de Minnemeers. Zij dankt haar naam aan een volkslegende over een meermin. Wat deed de meermin toen een man haar wilde kussen?",
      opties: ["Ze zong hem in slaap en verdween onder water", "Ze gaf hem een fikse oorveeg en proestte het uit", "Ze trok hem mee de diepte in", "Ze verwenste hem zodat hij voorgoed in de Leie moest leven"],
      correct: 1  // "Ze gaf hem een fikse oorveeg"
    }
  },
  {
    id: 12, emoji: "🏁", name: "Multatuli",
    lat: 51.06106, lng: 3.72782,
    finish: true,
    weetje: "Proficiat — jullie hebben het gehaald! En de naam van deze plek is toepasselijker dan je denkt. 'Multatuli' betekent in het Latijn: ik heb veel gedragen. Het was het pseudoniem van Eduard Douwes Dekker (1820-1887), een Nederlandse schrijver die de wereld schudde met zijn aanklacht tegen het kolonialisme in Nederlands-Indië. Hij koos die naam bewust — als symbool voor alles wat hij had meegemaakt en gedragen. Na een namiddag vol raadsels, valstrikken en historische weetjes door Gent en het hele jaar jullie fantastische inspanningen voor onze opleidingen... klinkt dat wel een beetje bekend, niet? Smakelijk eten — jullie hebben het allemaal verdiend!",
    clue: "🏁 FINISH! Jullie hebben de ontdekkingswandeling voltooid. Ga naar binnen en meld jullie aankomst!",
    quiz: {
      vraag: "En als laatste... Eduard Douwes Dekker schreef zijn bekendste werk onder het pseudoniem Multatuli. Hoe heet dat boek?",
      opties: ["Het ABC in het onderwijs", "Max Havelaar", "Camera Obscura", "De Roos van Dekama"],
      correct: 1  // "Max Havelaar"
    }
  }
];