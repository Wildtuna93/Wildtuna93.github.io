(function () {
  var STORAGE_KEY = "uk-lang";

  var copy = {
    en: {
      metaTitle: "Uladzislau Krasko — Mobile games and apps",
      nameFirst: "Uladzislau",
      nameLast: "Krasko",
      nameFull: "Uladzislau Krasko",
      metaDesc: "Game producer and game designer. Mobile games and apps since 2019. 200+ projects with developers and 100+ solo with AI.",
      skip: "Skip to content",
      langGroup: "Language",
      spine: "Portfolio · 2026",
      navAbout: "About",
      navWork: "Experience",
      navProjects: "Projects",
      navSkills: "Skills",
      navContact: "Contact",
      heroKicker: "Who I am",
      place: "I live in Warsaw and work remotely",
      role1: "Game producer",
      role2: "Game designer",
      role3: "Creator",
      statTeam: "games and apps with a team of developers",
      statTeamWhen: "2019–2025",
      statSolo: "games and apps, just me and AI",
      statSoloWhen: "since 2025",
      cta: "Write to me",
      marquee: "Puzzles  ·  Card games  ·  Word games  ·  Sports games  ·  Casual games  ·  Brain teasers  ·  Arcade  ·  Action  ·  Runners  ·  Match-3  ·  Quizzes  ·  Simulators  ·  Idle games  ·  Utilities  ·  Trackers  ·  Board games  ·  Educational games  ·  Hyper-casual  ·  ",
      aboutLabel: "About me",
      aboutHello: "Hello",
      aboutP1: "I make mobile games and apps. Since 2019 I take a product from the idea through to release: concept, mechanics, specification, schedule and quality.",
      aboutP2: "For the last year I have worked solo, AI-first. Cursor and Claude Code cover development and design, so a game reaches release without a separate team.",
      workLabel: "Work experience",
      workTitle: "With a team and with AI",
      eraTeamWhen: "November 2019 — 2025 · MakeApp",
      eraTeamTitle: "With a team",
      eraTeamP: "I came up with concepts for small games and apps: puzzles, brain teasers, card and word games, sports, arcade, utilities, trackers and other genres. I wrote the specs, found contractors on Upwork, ran external and in-house developers, and kept schedule and quality. I communicated with contractors in English.",
      eraSoloWhen: "2025 — now · MakeApp",
      eraSoloTitle: "Me and AI",
      eraSoloP: "Now I walk the same path from idea to release on my own. AI writes the code and draws the graphics; I set the direction, write the specs and check every build. My tools are Cursor, Claude Code and ChatGPT.",
      skillsLabel: "What I can do",
      skill1t: "Game design",
      skill1p: "Core loop, mechanics, progression and levels. I can make games in almost any genre.",
      skill2t: "Producing",
      skill2p: "From concept to release. Schedule, quality, plans and reports at the level a team actually needs.",
      skill3t: "Solo building",
      skill3p: "Cursor, Claude Code and ChatGPT. A prototype quickly becomes a finished app — no hand-written code and no development team costs.",
      skill4t: "People",
      skill4p: "Finding and leading Upwork freelancers and in-house teams. Strong communicator: clear briefs, smooth negotiations, everyone kept in the loop. Languages: Russian, English, Polish.",
      skill5t: "Idea and prompt library",
      skill5p: "Over the years I took apart a great many mechanics of mobile games and apps — my own, colleagues’ and ones from the market. Out of that I keep a catalog of ideas, prompts, skills and building blocks for new games. With it, AI builds games faster and better, and spends far fewer tokens on the way.",
      toolsLabel: "I can work with these",
      tools: "Cursor  ·  Claude Code  ·  ChatGPT  ·  Jira  ·  Confluence  ·  Figma  ·  Illustrator  ·  Google Sheets  ·  Slack  ·  Trello  ·  Unity  ·\u00A0\u00A0",
      projectsLabel: "Work examples with AI",
      projectsLead: "Every game here is made from start to finish by me together with AI: idea, specs, code, graphics and store assets.",
      projectsTitle: "Games and apps",
      projectsNote: "Cook Crusade is the first. The other frames are waiting for the next games.",
      g1slogan: "Match ingredients, defeat chefs!",
      g1desc: "A match-3 roguelike set in a cooking show. A young cook challenges nine master chefs: climb each chef's pantry row by row, open covered dishes (a battle, a basket of rewards or a burnt-pan trap) and grow stronger before the final duel.",
      g1f1: "9 chefs, each with a signature ability",
      g1f2: "Turn-based match-3 battles against AI",
      g1f3: "Roguelike map with rewards and traps",
      g1f4: "Master Mode: play with any chef's ability",
      factGenre: "Genre",
      factPlatform: "Platform",
      factMade: "Made",
      factRole: "My role",
      g1genre: "Match-3 roguelike",
      g2slogan: "Roll, dodge, score!",
      g2desc: "A 3D obstacle course in the spirit of American Ninja Warrior, starring a football. Roll the ball past windmills, sliding walls, pits, cannons and swinging hammers while a red laser wall chases you, then cross the finish line and watch it fly into the goal.",
      g2genre: "3D obstacle course",
      g3slogan: "Keep the ball. Beat the defense.",
      g3desc: "An endless pixel-art football runner full of speed and skill. Jump over cones and obstacles, slide under them, fake out defenders, pick the perfect moment to attack and finish with a goal — then do it again, faster and with style.",
      g3genre: "Endless football runner",
      g4slogan: "Stop every wave!",
      g4desc: "A comedy tower defense on sports arenas. Grumpy beach balls, crazy ping-pong balls, a disco ball and a giant wrecking ball roll toward the goal, and you stop them with sports towers: football, tennis, basketball and many more. 50 levels, tower upgrades and a training center.",
      g4genre: "Sports tower defense",
      g5slogan: "Find any country on the map",
      g5desc: "A geography quiz with an interactive world map. The game gives you a country name or a flag, and your task is to find it on the map. Countries, flags and mixed quizzes, every region of the world, lives and time modes.",
      g5genre: "Geography quiz",
      g6slogan: "Who was alone with the Baron?",
      g6desc: "A cozy murder-mystery logic puzzle. Read the suspects' statements, place everyone in the house so each row and column holds exactly one person, and the culprit is the only suspect left in the room with the sleepy Baron. 50 cases, notes, hints and a comic reveal of every motive.",
      g6genre: "Murder-mystery logic puzzle",
      g7slogan: "Learn to type fast while you play",
      g7desc: "A game and a typing trainer in one: useful and fun at the same time. Several game modes, from falling words to races and laser battles, a daily challenge, five languages and juicy neon animations. Achievements, ranks and customization keep players coming back for one more round.",
      g7genre: "Typing arcade",
      g1made: "Solo with AI",
      g1role: "Idea, game design, spec, art direction, AI build",
      reelPrev: "Previous game",
      reelNext: "Next game",
      zoomHint: "Tap to enlarge",
      zoomOpen: "Enlarge",
      zoomClose: "Close",
      shotPrev: "Previous screenshot",
      shotNext: "Next screenshot",
      g1: "Puzzle",
      g2: "Word",
      g3: "Card",
      g4: "Sports",
      g5: "Casual",
      g6: "Tracker",
      soon: "Soon",
      shot: "Screenshot goes here",
      contactLabel: "Contact",
      contactTitle: "Get in touch",
      contactLead: "",
      footer: "Mobile games and apps · Warsaw"
    },
    ru: {
      metaTitle: "Владислав Красько — мобильные игры и приложения",
      nameFirst: "Владислав",
      nameLast: "Красько",
      nameFull: "Владислав Красько",
      metaDesc: "Гейм-продюсер и гейм-дизайнер. Мобильные игры и приложения с 2019 года. 200+ проектов с разработчиками и 100+ соло с AI.",
      skip: "К содержанию",
      langGroup: "Язык",
      spine: "Портфолио · 2026",
      navAbout: "Обо мне",
      navWork: "Опыт",
      navProjects: "Проекты",
      navSkills: "Что я умею",
      navContact: "Контакт",
      heroKicker: "Кто я",
      place: "Живу в Варшаве, работаю удалённо",
      role1: "Гейм-продюсер",
      role2: "Гейм-дизайнер",
      role3: "Креатор",
      statTeam: "игр и приложений с командой разработчиков",
      statTeamWhen: "2019–2025",
      statSolo: "игр и приложений, только я и AI",
      statSoloWhen: "с 2025",
      cta: "Написать",
      marquee: "Пазлы  ·  Карточные игры  ·  Словесные игры  ·  Спортивные игры  ·  Казуальные игры  ·  Головоломки  ·  Аркады  ·  Экшен  ·  Раннеры  ·  Матч-3  ·  Викторины  ·  Симуляторы  ·  Кликеры  ·  Утилиты  ·  Трекеры  ·  Настольные игры  ·  Обучающие игры  ·  Гиперказуал  ·  ",
      aboutLabel: "Обо мне",
      aboutHello: "Привет",
      aboutP1: "Я делаю мобильные игры и приложения с 2019 года. Веду продукт от идеи до релиза: концепт, механика, техническое задание, сроки и качество.",
      aboutP2: "Последний год работаю один, в модели AI-first. Cursor и Claude Code закрывают разработку и дизайн, поэтому игра доходит до релиза без отдельной команды.",
      workLabel: "Опыт работы",
      workTitle: "С командой и с AI",
      eraTeamWhen: "Ноябрь 2019 — 2025 · MakeApp",
      eraTeamTitle: "С командой",
      eraTeamP: "Придумывал концепты небольших игр и приложений: пазлы, головоломки, карточные и словесные игры, спорт, аркады, утилиты, трекеры и другие жанры. Писал ТЗ, находил исполнителей на Upwork, вёл внешних и внутренних разработчиков, держал сроки и качество. С подрядчиками коммуницировал на английском языке.",
      eraSoloWhen: "2025 — сейчас · MakeApp",
      eraSoloTitle: "Я и AI",
      eraSoloP: "Теперь тот же путь от идеи до релиза я прохожу сам. Код и графику делает AI, а я задаю направление, пишу ТЗ и проверяю каждую сборку. Мои инструменты — Cursor, Claude Code и ChatGPT.",
      skillsLabel: "Что я умею",
      skill1t: "Геймдизайн",
      skill1p: "Core loop, механики, прогрессия и уровни. Делаю игры практически любых жанров.",
      skill2t: "Продюсирование",
      skill2p: "От концепта до релиза. Сроки, качество, планы и отчётность в том объёме, который нужен команде.",
      skill3t: "Соло-сборка",
      skill3p: "Cursor, Claude Code и ChatGPT. Прототип быстро становится готовым приложением — без ручного кода и без затрат на команду разработки.",
      skill4t: "Люди",
      skill4p: "Поиск и ведение фрилансеров на Upwork и внутренних команд. Сильные навыки коммуникации: понятные задачи, лёгкие договорённости, все в курсе дела. Языки: русский, английский, польский.",
      skill5t: "Библиотека механик и промптов",
      skill5p: "За годы работы разобрал множество механик мобильных игр и приложений — своих, коллег и с рынка. Из этого собрался каталог идей, промптов, скиллов и заготовок, из которых собираются новые игры. С ним AI делает игры быстрее и качественнее и тратит заметно меньше токенов.",
      toolsLabel: "Умею работать с этим",
      tools: "Cursor  ·  Claude Code  ·  ChatGPT  ·  Jira  ·  Confluence  ·  Figma  ·  Illustrator  ·  Google Sheets  ·  Slack  ·  Trello  ·  Unity  ·\u00A0\u00A0",
      projectsLabel: "Примеры работ с AI",
      projectsLead: "Каждая игра здесь сделана от начала до конца мной вместе с AI: идея, ТЗ, код, графика и материалы для стора.",
      projectsTitle: "Игры и приложения",
      projectsNote: "Первая — Cook Crusade. Остальные рамки ждут следующие игры.",
      g1slogan: "Соединяй ингредиенты, побеждай шефов!",
      g1desc: "Match-3 roguelike в стиле кулинарного шоу. Молодой повар бросает вызов девяти великим шефам: поднимается по кладовой шефа ряд за рядом, открывает закрытые блюда (бой, корзина с наградой или ловушка-подгоревшая сковорода) и становится сильнее перед финальной дуэлью.",
      g1f1: "9 шефов, у каждого своя способность",
      g1f2: "Пошаговые бои Match-3 против ИИ",
      g1f3: "Карта-roguelike с наградами и ловушками",
      g1f4: "Master Mode: играй со способностью любого шефа",
      factGenre: "Жанр",
      factPlatform: "Платформа",
      factMade: "Сделано",
      factRole: "Моя роль",
      g1genre: "Match-3 roguelike",
      g2slogan: "Катись, уворачивайся, забивай!",
      g2desc: "3D-полоса препятствий в духе шоу «Американский ниндзя», только главный герой — футбольный мяч. Катишь мяч мимо мельниц, движущихся стен, ям, пушек и молотов, а сзади догоняет красная лазерная стена. Пересёк финиш — и мяч сам влетает в ворота.",
      g2genre: "3D-полоса препятствий",
      g3slogan: "Держи мяч. Обыгрывай защиту.",
      g3desc: "Бесконечный футбольный раннер в пиксель-арте — про скорость и технику. Перепрыгивай конусы и препятствия, скользи под ними, обманывай защитников, выбирай идеальный момент для атаки и забивай голы — и снова в путь, ещё быстрее и красивее.",
      g3genre: "Бесконечный футбольный раннер",
      g4slogan: "Останови каждую волну!",
      g4desc: "Комедийный tower defense на спортивных аренах. К воротам катятся ворчливые пляжные мячи, психованные шарики для пинг-понга, диско-шар и гигантское ядро для сноса, а ты останавливаешь их спортивными башнями: футбольными, теннисными, баскетбольными и многими другими. 50 уровней, прокачка башен и тренировочный центр.",
      g4genre: "Спортивный tower defense",
      g5slogan: "Найди любую страну на карте",
      g5desc: "Географический квиз с интерактивной картой мира. Игра даёт задание — название страны или её флаг, а твоя задача — найти эту страну на карте. Квизы по странам, флагам и смешанные, все регионы мира, режимы на жизни и на время.",
      g5genre: "Географический квиз",
      g6slogan: "Кто остался наедине с бароном?",
      g6desc: "Уютная детективная головоломка. Читаешь показания подозреваемых и расставляешь всех по дому так, чтобы в каждой строке и столбце был ровно один человек. Убийца — единственный, кто оказался в одной комнате с сонным бароном. 50 дел, заметки, подсказки и смешное раскрытие мотива.",
      g6genre: "Детективная логическая головоломка",
      g7slogan: "Учись печатать быстро — играючи",
      g7desc: "Игра и тренажёр печати в одном: полезно и весело одновременно. Несколько игровых режимов — от падающих слов до гонок и лазерных сражений, ежедневный челлендж, пять языков и сочные неоновые анимации. Ачивки, ранги и кастомизация мотивируют сыграть ещё один раунд.",
      g7genre: "Аркада-тренажёр печати",
      g1made: "Соло с AI",
      g1role: "Идея, геймдизайн, ТЗ, арт-дирекшн, сборка с AI",
      reelPrev: "Предыдущая игра",
      reelNext: "Следующая игра",
      zoomHint: "Нажми, чтобы увеличить",
      zoomOpen: "Увеличить",
      zoomClose: "Закрыть",
      shotPrev: "Предыдущий скриншот",
      shotNext: "Следующий скриншот",
      g1: "Пазл",
      g2: "Слова",
      g3: "Карты",
      g4: "Спорт",
      g5: "Казуал",
      g6: "Трекер",
      soon: "Скоро",
      shot: "Здесь будет скрин",
      contactLabel: "Контакт",
      contactTitle: "Свяжитесь со мной",
      contactLead: "",
      footer: "Мобильные игры и приложения · Варшава"
    },
    pl: {
      metaTitle: "Uladzislau Krasko — gry i aplikacje mobilne",
      nameFirst: "Uladzislau",
      nameLast: "Krasko",
      nameFull: "Uladzislau Krasko",
      metaDesc: "Producent i projektant gier. Gry i aplikacje mobilne od 2019 roku. 200+ projektów z deweloperami i 100+ solo z AI.",
      skip: "Przejdź do treści",
      langGroup: "Język",
      spine: "Portfolio · 2026",
      navAbout: "O mnie",
      navWork: "Doświadczenie",
      navProjects: "Projekty",
      navSkills: "Umiejętności",
      navContact: "Kontakt",
      heroKicker: "Kim jestem",
      place: "Mieszkam w Warszawie, pracuję zdalnie",
      role1: "Game producer",
      role2: "Game designer",
      role3: "Creator",
      statTeam: "gier i aplikacji z zespołem deweloperów",
      statTeamWhen: "2019–2025",
      statSolo: "gier i aplikacji, tylko ja i AI",
      statSoloWhen: "od 2025",
      cta: "Napisz",
      marquee: "Puzzle  ·  Gry karciane  ·  Gry słowne  ·  Gry sportowe  ·  Gry casualowe  ·  Łamigłówki  ·  Arcade  ·  Akcja  ·  Runnery  ·  Match-3  ·  Quizy  ·  Symulatory  ·  Idle  ·  Narzędzia  ·  Trackery  ·  Gry planszowe  ·  Gry edukacyjne  ·  Hyper-casual  ·  ",
      aboutLabel: "O mnie",
      aboutHello: "Cześć",
      aboutP1: "Robię gry i aplikacje mobilne. Od 2019 roku prowadzę produkt od pomysłu do wydania: koncept, mechanika, specyfikacja, terminy i jakość.",
      aboutP2: "Od zeszłego roku pracuję sam, w modelu AI-first. Cursor i Claude Code biorą na siebie programowanie i design, więc gra dochodzi do wydania bez osobnego zespołu.",
      workLabel: "Doświadczenie",
      workTitle: "Z zespołem i z AI",
      eraTeamWhen: "Listopad 2019 — 2025 · MakeApp",
      eraTeamTitle: "Z zespołem",
      eraTeamP: "Wymyślałem koncepty niewielkich gier i aplikacji: puzzle, łamigłówki, gry karciane i słowne, sport, arcade, narzędzia, trackery i inne gatunki. Pisałem specyfikacje, znajdowałem wykonawców na Upworku, prowadziłem zewnętrznych i wewnętrznych deweloperów, pilnowałem terminów i jakości. Z wykonawcami komunikowałem się po angielsku.",
      eraSoloWhen: "2025 — teraz · MakeApp",
      eraSoloTitle: "Ja i AI",
      eraSoloP: "Teraz tę samą drogę od pomysłu do wydania przechodzę sam. Kod i grafikę robi AI, a ja wyznaczam kierunek, piszę specyfikacje i sprawdzam każdy build. Moje narzędzia to Cursor, Claude Code i ChatGPT.",
      skillsLabel: "Co potrafię",
      skill1t: "Projektowanie gier",
      skill1p: "Core loop, mechaniki, progresja i poziomy. Tworzę gry niemal w każdym gatunku.",
      skill2t: "Produkcja",
      skill2p: "Od konceptu do wydania. Terminy, jakość, plany i raporty w takim zakresie, jakiego potrzebuje zespół.",
      skill3t: "Budowanie solo",
      skill3p: "Cursor, Claude Code i ChatGPT. Prototyp szybko staje się gotową aplikacją — bez ręcznego kodu i bez kosztów zespołu deweloperskiego.",
      skill4t: "Ludzie",
      skill4p: "Szukam i prowadzę freelancerów z Upworka oraz zespoły wewnętrzne. Mocne umiejętności komunikacyjne: jasne zadania, sprawne ustalenia, wszyscy na bieżąco. Języki: rosyjski, angielski, polski.",
      skill5t: "Biblioteka mechanik i promptów",
      skill5p: "Przez lata rozkładałem na części mnóstwo mechanik gier i aplikacji mobilnych — własnych, kolegów i z rynku. Z tego powstał katalog pomysłów, promptów, skilli i klocków, z których składają się nowe gry. Dzięki niemu AI tworzy gry szybciej i lepiej, zużywając przy tym dużo mniej tokenów.",
      toolsLabel: "Umiem z tym pracować",
      tools: "Cursor  ·  Claude Code  ·  ChatGPT  ·  Jira  ·  Confluence  ·  Figma  ·  Illustrator  ·  Google Sheets  ·  Slack  ·  Trello  ·  Unity  ·\u00A0\u00A0",
      projectsLabel: "Przykłady prac z AI",
      projectsLead: "Każda gra tutaj powstała od początku do końca dzięki mnie i AI: pomysł, specyfikacja, kod, grafika i materiały do sklepu.",
      projectsTitle: "Gry i aplikacje",
      projectsNote: "Pierwsza to Cook Crusade. Pozostałe ramki czekają na kolejne gry.",
      g1slogan: "Łącz składniki, pokonuj szefów kuchni!",
      g1desc: "Roguelike match-3 w klimacie kulinarnego show. Młody kucharz rzuca wyzwanie dziewięciu mistrzom kuchni: wspina się rząd po rzędzie przez spiżarnię szefa, odkrywa zakryte dania (walka, kosz z nagrodą albo pułapka z przypaloną patelnią) i rośnie w siłę przed finałowym pojedynkiem.",
      g1f1: "9 szefów kuchni, każdy z własną umiejętnością",
      g1f2: "Turowe walki match-3 z AI",
      g1f3: "Mapa roguelike z nagrodami i pułapkami",
      g1f4: "Master Mode: graj umiejętnością dowolnego szefa",
      factGenre: "Gatunek",
      factPlatform: "Platforma",
      factMade: "Jak powstała",
      factRole: "Moja rola",
      g1genre: "Roguelike match-3",
      g2slogan: "Tocz się, unikaj, strzelaj!",
      g2desc: "Tor przeszkód 3D w duchu American Ninja Warrior, a głównym bohaterem jest piłka. Prowadzisz ją obok wiatraków, ruchomych ścian, dziur, armat i wahadłowych młotów, a z tyłu goni cię czerwona ściana lasera. Za linią mety piłka sama wpada do bramki.",
      g2genre: "Tor przeszkód 3D",
      g3slogan: "Trzymaj piłkę. Ograj obronę.",
      g3desc: "Niekończący się piłkarski runner w stylu pixel art — o szybkości i technice. Przeskakuj pachołki i przeszkody, wślizguj się pod nimi, kiwaj obrońców, wybieraj idealny moment ataku i strzelaj gole — a potem jeszcze raz, szybciej i efektowniej.",
      g3genre: "Niekończący się runner piłkarski",
      g4slogan: "Zatrzymaj każdą falę!",
      g4desc: "Komediowy tower defense na sportowych arenach. W stronę bramki toczą się marudne piłki plażowe, szalone piłeczki do ping-ponga, kula disco i gigantyczna kula burząca, a ty zatrzymujesz je sportowymi wieżami: piłkarskimi, tenisowymi, koszykarskimi i wieloma innymi. 50 poziomów, ulepszanie wież i centrum treningowe.",
      g4genre: "Sportowy tower defense",
      g5slogan: "Znajdź każdy kraj na mapie",
      g5desc: "Quiz geograficzny z interaktywną mapą świata. Gra podaje nazwę kraju albo pokazuje jego flagę, a twoim zadaniem jest znaleźć go na mapie. Quizy z krajów, flag i mieszane, wszystkie regiony świata, tryb na życia i na czas.",
      g5genre: "Quiz geograficzny",
      g6slogan: "Kto został sam na sam z baronem?",
      g6desc: "Przytulna detektywistyczna łamigłówka logiczna. Czytasz zeznania podejrzanych i rozstawiasz wszystkich po domu tak, by w każdym wierszu i kolumnie była dokładnie jedna osoba. Zabójca to jedyny podejrzany w pokoju ze śpiącym baronem. 50 spraw, notatki, podpowiedzi i zabawne ujawnienie motywu.",
      g6genre: "Detektywistyczna łamigłówka logiczna",
      g7slogan: "Ucz się szybko pisać, grając",
      g7desc: "Gra i trener pisania w jednym: pożytecznie i zabawnie jednocześnie. Kilka trybów gry — od spadających słów po wyścigi i laserowe bitwy, codzienne wyzwanie, pięć języków i soczyste neonowe animacje. Osiągnięcia, rangi i personalizacja sprawiają, że chce się zagrać jeszcze jedną rundę.",
      g7genre: "Arcade do nauki pisania",
      g1made: "Solo z AI",
      g1role: "Pomysł, game design, specyfikacja, kierunek artystyczny, budowa z AI",
      reelPrev: "Poprzednia gra",
      reelNext: "Następna gra",
      zoomHint: "Kliknij, aby powiększyć",
      zoomOpen: "Powiększ",
      zoomClose: "Zamknij",
      shotPrev: "Poprzedni zrzut",
      shotNext: "Następny zrzut",
      g1: "Puzzle",
      g2: "Słowa",
      g3: "Karty",
      g4: "Sport",
      g5: "Casual",
      g6: "Tracker",
      soon: "Wkrótce",
      shot: "Tu będzie zrzut ekranu",
      contactLabel: "Kontakt",
      contactTitle: "Skontaktuj się",
      contactLead: "",
      footer: "Gry i aplikacje mobilne · Warszawa"
    }
  };

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  var locales = { en: "en_US", ru: "ru_RU", pl: "pl_PL" };

  function readLang() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "ru" || saved === "pl") return saved;
    } catch (e) {}
    return null;
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
  }

  function detectLang() {
    var saved = readLang();
    if (saved) return saved;
    var n = (navigator.language || "en").toLowerCase();
    if (n.indexOf("pl") === 0) return "pl";
    if (n.indexOf("ru") === 0 || n.indexOf("be") === 0) return "ru";
    return "en";
  }

  function setMeta(selector, value) {
    var node = document.querySelector(selector);
    if (node && value != null) node.setAttribute("content", value);
  }

  function apply(lang) {
    var dict = copy[lang];
    if (!dict) return;
    document.documentElement.lang = lang;
    document.title = dict.metaTitle;
    setMeta('meta[name="description"]', dict.metaDesc);
    setMeta('meta[property="og:title"]', dict.metaTitle);
    setMeta('meta[property="og:description"]', dict.metaDesc);
    setMeta('meta[property="og:locale"]', locales[lang]);
    setMeta('meta[name="twitter:title"]', dict.metaTitle);
    setMeta('meta[name="twitter:description"]', dict.metaDesc);
    try {
      var image = new URL("og.png", window.location.href).href;
      var page = new URL(window.location.pathname, window.location.href).href;
      setMeta('meta[property="og:image"]', image);
      setMeta('meta[property="og:url"]', page);
      setMeta('meta[name="twitter:image"]', image);
    } catch (e) {}

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (dict[key] != null) node.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-alt");
      if (dict[key] != null) node.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-aria");
      if (dict[key] != null) node.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll(".lang-switch button").forEach(function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-lang") === lang ? "true" : "false");
    });

    document.documentElement.classList.remove("i18n-pending");
  }

  document.querySelectorAll(".lang-switch button").forEach(function (button) {
    button.addEventListener("click", function () {
      var lang = button.getAttribute("data-lang");
      saveLang(lang);
      apply(lang);
    });
  });

  var motionStarted = false;

  function startMotion() {
    if (motionStarted) return;
    motionStarted = true;

    var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.querySelectorAll(".game-video").forEach(function (video) {
        video.removeAttribute("autoplay");
        video.pause();
      });
    }
    var counters = document.querySelectorAll("[data-count]");

    function setCount(node, value) {
      node.textContent = String(value);
    }

    function runCount(node) {
      if (node.dataset.running === "1") return;
      var target = Number(node.getAttribute("data-count")) || 0;
      if (reduce) {
        setCount(node, target);
        return;
      }
      node.dataset.running = "1";
      var start = performance.now();
      var duration = 2600;
      setCount(node, 0);
      function frame(now) {
        var t = Math.min(1, (now - start) / duration);
        var eased = t * t * (3 - 2 * t);
        setCount(node, Math.round(target * eased));
        if (t < 1) requestAnimationFrame(frame);
        else node.dataset.running = "0";
      }
      requestAnimationFrame(frame);
    }

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (node) {
        node.classList.add("is-in");
      });
      counters.forEach(runCount);
      return;
    }

    var seen = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        seen.unobserve(entry.target);
      });
    }, { threshold: 0.18 });

    document.querySelectorAll(".reveal").forEach(function (node) {
      seen.observe(node);
    });

    var visibleCounts = new Set();
    var countObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          visibleCounts.add(entry.target);
          runCount(entry.target);
        } else {
          visibleCounts.delete(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(function (node) {
      countObserver.observe(node);
    });

    if (!reduce) {
      setInterval(function () {
        visibleCounts.forEach(function (node) { runCount(node); });
      }, 8000);
    }

    var sections = ["top", "work", "projects", "practice", "contact"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    var links = document.querySelectorAll(".nav-links a");

    var navBox = document.querySelector(".nav-links");
    var lastCurrent = null;
    function setCurrent(id) {
      links.forEach(function (link) {
        if (id && link.getAttribute("href") === "#" + id) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
      if (id !== lastCurrent && navBox && navBox.scrollWidth > navBox.clientWidth + 2) {
        var active = navBox.querySelector("a[aria-current]");
        if (active) navBox.scrollTo({ left: Math.max(0, active.offsetLeft - navBox.offsetLeft - 16), behavior: reduce ? "auto" : "smooth" });
      }
      lastCurrent = id;
    }

    function updateNav() {
      var line = window.innerHeight * 0.4;
      var current = null;
      sections.forEach(function (section) {
        if (section.getBoundingClientRect().top <= line) current = section.id;
      });
      var atEnd = window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4;
      if (atEnd && sections.length) current = sections[sections.length - 1].id;
      setCurrent(current);
    }

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);

    var reel = document.querySelector(".reel");
    if (reel) {
      var track = reel.querySelector(".reel-track");
      var slides = track.querySelectorAll(".reel-slide");
      var reelIndex = 0;
      var reelPrevBtns = document.querySelectorAll("[data-reel='prev']");
      var reelNextBtns = document.querySelectorAll("[data-reel='next']");
      var reelCounts = document.querySelectorAll(".reel-count");

      function showSlide(nextIndex) {
        var total = slides.length;
        if (!total) return;
        reelIndex = (nextIndex + total) % total;
        track.style.transform = "translateX(" + (-reelIndex * 100) + "%)";
        reelCounts.forEach(function (c) { c.textContent = (reelIndex + 1) + " / " + total; });
        var single = total < 2;
        reelPrevBtns.forEach(function (b) { b.setAttribute("aria-disabled", single ? "true" : "false"); b.hidden = single; });
        reelNextBtns.forEach(function (b) { b.setAttribute("aria-disabled", single ? "true" : "false"); b.hidden = single; });
        slides.forEach(function (slide, i) {
          var active = i === reelIndex;
          slide.setAttribute("aria-hidden", active ? "false" : "true");
          slide.inert = !active;
          var video = slide.querySelector("video");
          if (!video) return;
          if (active && !reduce) {
            var play = video.play();
            if (play && play.catch) play.catch(function () {});
          } else {
            video.pause();
          }
        });
      }

      function step(dir) {
        if (slides.length < 2) return;
        showSlide(reelIndex + dir);
      }

      reelPrevBtns.forEach(function (b) { b.addEventListener("click", function () { step(-1); }); });
      reelNextBtns.forEach(function (b) { b.addEventListener("click", function () { step(1); }); });
      document.addEventListener("keydown", function (event) {
        if (lightbox && !lightbox.hidden) return;
        var rect = reel.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;
        if (event.key === "ArrowLeft") step(-1);
        if (event.key === "ArrowRight") step(1);
      });
      showSlide(0);
    }

    var lightbox = document.querySelector(".lightbox");
    var lightboxStage = lightbox ? lightbox.querySelector(".lightbox-stage") : null;
    var zoomOpener = null;

    function closeZoom() {
      if (!lightbox || lightbox.hidden) return;
      lightbox.hidden = true;
      document.body.classList.remove("lightbox-open");
      if (lightboxStage) lightboxStage.replaceChildren();
      if (zoomOpener) zoomOpener.focus();
    }

    function openZoom(button) {
      if (!lightbox || !lightboxStage) return;
      zoomOpener = button;
      lightboxStage.replaceChildren();
      if (button.getAttribute("data-zoom") === "video") {
        var src = button.querySelector("video");
        var video = document.createElement("video");
        video.className = "lightbox-video";
        var source = src ? src.querySelector("source") : null;
        video.poster = src ? src.getAttribute("poster") : "";
        video.src = source ? source.getAttribute("src") : "";
        video.muted = true;
        video.loop = true;
        video.autoplay = true;
        video.playsInline = true;
        video.setAttribute("aria-label", src ? (src.getAttribute("aria-label") || "") : "");
        lightboxStage.appendChild(video);
        if (!reduce) {
          var play = video.play();
          if (play && play.catch) play.catch(function () {});
        }
      } else {
        var image = document.createElement("img");
        image.src = button.getAttribute("data-zoom");
        var shotImg = button.querySelector("img");
        image.alt = shotImg ? shotImg.alt : "";
        lightboxStage.appendChild(image);
      }
      lightbox.hidden = false;
      document.body.classList.add("lightbox-open");
      var closeBtn = lightbox.querySelector(".lightbox-close");
      if (closeBtn) closeBtn.focus();
    }

    document.querySelectorAll(".shot-btn").forEach(function (button) {
      button.addEventListener("click", function () { openZoom(button); });
    });
    if (lightbox) {
      lightbox.addEventListener("click", function (event) {
        if (event.target === lightbox) closeZoom();
      });
      var closeBtn = lightbox.querySelector(".lightbox-close");
      if (closeBtn) closeBtn.addEventListener("click", closeZoom);
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") closeZoom();
      });
    }

    document.querySelectorAll(".game-gallery").forEach(function (gallery) {
    var shotStage = gallery.querySelector(".reel-stage");
    var shotPrev = gallery.querySelector("[data-shots='prev']");
    var shotNext = gallery.querySelector("[data-shots='next']");
    var shotDots = gallery.querySelector(".shot-dots");
    if (shotStage && shotPrev && shotNext) {
      var shotItems = shotStage.querySelectorAll(".shot-btn");
      var shotIndex = 0;
      function shotPositions() {
        var base = shotItems.length ? shotItems[0].offsetLeft : 0;
        return Array.prototype.map.call(shotItems, function (item) { return item.offsetLeft - base; });
      }
      function shotMax() {
        var pos = shotPositions();
        var limit = shotStage.scrollWidth - shotStage.clientWidth;
        for (var i = 0; i < pos.length; i++) if (pos[i] >= limit - 2) return i;
        return Math.max(0, pos.length - 1);
      }
      function renderDots() {
        if (!shotDots) return;
        var count = shotMax() + 1;
        if (shotDots.children.length !== count) {
          shotDots.innerHTML = "";
          for (var d = 0; d < count; d++) shotDots.appendChild(document.createElement("span"));
        }
        Array.prototype.forEach.call(shotDots.children, function (dot, i) {
          dot.classList.toggle("is-on", i === shotIndex);
        });
      }
      function setArrows(max) {
        shotPrev.setAttribute("aria-disabled", shotIndex <= 0 ? "true" : "false");
        shotNext.setAttribute("aria-disabled", shotIndex >= max ? "true" : "false");
      }
      function updateShots() {
        var pos = shotPositions();
        var max = shotMax();
        var left = shotStage.scrollLeft;
        var limit = shotStage.scrollWidth - shotStage.clientWidth;
        var best = 0;
        if (left >= limit - 2) best = max;
        else pos.forEach(function (p, i) { if (Math.abs(p - left) < Math.abs(pos[best] - left)) best = i; });
        shotIndex = Math.min(max, best);
        setArrows(max);
        renderDots();
      }
      function goShot(index) {
        var max = shotMax();
        shotIndex = Math.min(max, Math.max(0, index));
        var pos = shotPositions();
        shotStage.scrollTo({ left: pos[shotIndex] || 0, behavior: reduce ? "auto" : "smooth" });
        setArrows(max);
        renderDots();
      }
      shotPrev.addEventListener("click", function () { if (shotPrev.getAttribute("aria-disabled") !== "true") goShot(shotIndex - 1); });
      shotNext.addEventListener("click", function () { if (shotNext.getAttribute("aria-disabled") !== "true") goShot(shotIndex + 1); });
      var shotTimer = null;
      shotStage.addEventListener("scroll", function () {
        clearTimeout(shotTimer);
        shotTimer = setTimeout(updateShots, 80);
      }, { passive: true });
      window.addEventListener("resize", function () { goShot(shotIndex); });
      updateShots();
    }
    });

    if (document.querySelectorAll(".reel-slide").length < 2) {
      document.querySelectorAll(".reel-games").forEach(function (el) { el.hidden = true; });
    }

    var shines = document.querySelectorAll(".tools-shine");
    var shineBox = document.querySelector(".tools-marquee");
    if (shines.length && shineBox && !reduce) {
      var SHINE_CYCLE = 12000;
      var SHINE_IDLE = 0.28;
      var shineStart = performance.now();
      function easeInOut(t) { return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2; }
      function shineFrame(now) {
        var box = shineBox.getBoundingClientRect();
        var band = Math.max(260, box.width * 0.35);
        var phase = ((now - shineStart) % SHINE_CYCLE) / SHINE_CYCLE;
        var t = phase < SHINE_IDLE ? 0 : easeInOut((phase - SHINE_IDLE) / (1 - SHINE_IDLE));
        var x = -band + t * (box.width + 2 * band);
        shines.forEach(function (el) {
          var r = el.getBoundingClientRect();
          el.style.backgroundSize = band + "px 100%";
          el.style.backgroundPosition = (box.left + x - band / 2 - r.left) + "px 0";
        });
        requestAnimationFrame(shineFrame);
      }
      shines.forEach(function (el) { el.classList.add("shine-js"); });
      requestAnimationFrame(shineFrame);
    }
  }

  var fromUrl = null;
  try {
    fromUrl = new URLSearchParams(window.location.search).get("lang");
  } catch (e) {}

  var initial = (fromUrl === "en" || fromUrl === "ru" || fromUrl === "pl") ? fromUrl : detectLang();
  if (fromUrl === "en" || fromUrl === "ru" || fromUrl === "pl") saveLang(fromUrl);
  apply(initial);
  startMotion();
  var reloaded = false;
  try {
    var navEntry = performance.getEntriesByType("navigation")[0];
    reloaded = !!(navEntry && navEntry.type === "reload");
  } catch (e) {}
  if (reloaded) {
    window.scrollTo(0, 0);
  } else if (window.location.hash) {
    var hash = window.location.hash;
    requestAnimationFrame(function () {
      var target = document.querySelector(hash);
      if (target && !target.hidden && target.scrollIntoView) target.scrollIntoView();
    });
  }
})();
