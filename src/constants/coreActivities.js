// Leveled activities for the "Core English" (ge) journey.
//
// Two design rules drive this file:
//   1. The activity TYPE matches the topic's purpose (grammar → build/choose forms,
//      vocab → categorize / choose / match, reading → comprehension, writing → written answer).
//   2. Every activity is adapted to three difficulty levels so it is neither too easy
//      for an advanced student nor too hard for a beginner.
//
// Each activity carries a `levels` object; utils.resolveActs(acts, level) flattens the
// right variant onto the activity before it reaches the modal. Speaking / listening /
// pronunciation topics get no interactive activity (empty acts) — they rely on their
// external resource links instead.

// a(id, type, beginner, intermediate, advanced) — the three variants share one type.
const a = (id, type, beginner, intermediate, advanced) => ({ id, type, levels: { beginner, intermediate, advanced } })

// topics with no auto-correctable activity — removes the old mismatched exercises
const NO_ACTS = ['ge9', 'ge11', 'ge12', 'ge13', 'ge14', 'ge15', 'ge16', 'ge17', 'ge18', 'ge19', 'ge20', 'ge34', 'ge39', 'ge40', 'ge41', 'ge42', 'ge44', 'ge45', 'ge49', 'ge51', 'ge52', 'ge53', 'ge54', 'ge55', 'ge58', 'ge59']

export const CORE_GE = {}
for (const id of NO_ACTS) CORE_GE[id] = { acts: [] }

Object.assign(CORE_GE, {
  // ─── GRAMMAR ───────────────────────────────────────────────
  ge1: {
    context: "O Present Simple descreve hábitos, rotinas e fatos gerais. Com he/she/it adicionamos -s ou -es ao verbo (I work → she works).",
    acts: [
      a('ge1_a1', 'gapdrop',
        { prompt: "She ___ coffee every morning.", options: ["drink", "drinks", "drinking", "drank"], answerIdx: 1, hint: "Com she, o verbo leva -s." },
        { prompt: "My brother usually ___ TV after dinner.", options: ["watch", "watches", "watchs", "is watch"], answerIdx: 1, hint: "Verbos terminados em -ch levam -es." },
        { prompt: "Neither of my parents ___ English at home.", options: ["speak", "speaks", "speaking", "are speak"], answerIdx: 1, hint: "'Neither of...' pede o verbo no singular (he/she/it)." }),
      a('ge1_a2', 'order',
        { prompt: "Ordene para formar uma frase no Present Simple.", tokens: ["I", "live", "in", "Brazil"], hint: "Sujeito + verbo + complemento." },
        { prompt: "Ordene para formar uma frase negativa.", tokens: ["She", "does", "not", "like", "spicy", "food"], hint: "Negativa: does not + verbo na base." },
        { prompt: "Ordene para formar uma pergunta.", tokens: ["How", "often", "does", "he", "go", "running"], hint: "Perguntas: (wh-) + does + sujeito + verbo base." }),
      a('ge1_a3', 'mc',
        { prompt: "Which sentence is correct?", options: ["He go to school.", "He goes to school.", "He going to school.", "He gone to school."], answerIdx: 1, hint: "he/she/it + verbo com -s." },
        { prompt: "Which sentence is correct?", options: ["She don't likes coffee.", "She doesn't likes coffee.", "She doesn't like coffee.", "She not like coffee."], answerIdx: 2, hint: "Depois de doesn't, o verbo fica na base." },
        { prompt: "Choose the correct sentence:", options: ["Does your sister works here?", "Do your sister work here?", "Does your sister work here?", "Is your sister work here?"], answerIdx: 2, hint: "Does + sujeito + verbo base." }),
    ],
  },
  ge2: {
    context: "Pratique o Present Simple nas formas afirmativa, negativa e interrogativa. Lembre-se do do/does nas perguntas e negativas.",
    acts: [
      a('ge2_a1', 'gapdrop',
        { prompt: "___ you like pizza?", options: ["Do", "Does", "Are", "Is"], answerIdx: 0, hint: "Com 'you' usamos Do." },
        { prompt: "___ your teacher give a lot of homework?", options: ["Do", "Does", "Is", "Are"], answerIdx: 1, hint: "Com he/she/it usamos Does." },
        { prompt: "Where ___ she usually spend her holidays?", options: ["do", "does", "is", "has"], answerIdx: 1, hint: "Perguntas wh- com 'she' usam does." }),
      a('ge2_a2', 'order',
        { prompt: "Monte a frase negativa.", tokens: ["We", "do", "not", "work", "on", "Sundays"], hint: "do not + verbo base." },
        { prompt: "Monte a pergunta.", tokens: ["Does", "he", "play", "the", "guitar"], hint: "Does + sujeito + verbo base + complemento." },
        { prompt: "Monte a frase com advérbio de frequência.", tokens: ["My", "sister", "hardly", "ever", "eats", "meat"], hint: "O advérbio de frequência vem antes do verbo principal." }),
      a('ge2_a3', 'fill',
        { prompt: "They ___ (not / like) horror films.", answer: "do not like", keywords: ["do not like", "don't like"], hint: "Plural: do not + verbo base." },
        { prompt: "___ your parents ___ (live) near you?", answer: "Do live", keywords: ["do live"], hint: "Do + sujeito + verbo base." },
        { prompt: "Rarely ___ he ___ (admit) that he is wrong.", answer: "does admit", keywords: ["does admit"], hint: "Após advérbio negativo no início, invertemos: does + sujeito + verbo." }),
    ],
  },
  ge3: {
    context: "Usamos 'a' antes de som de consoante, 'an' antes de som de vogal, e 'the' para algo específico ou já conhecido.",
    acts: [
      a('ge3_a1', 'gapdrop',
        { prompt: "I have ___ apple and ___ banana.", options: ["a / a", "an / a", "a / an", "the / the"], answerIdx: 1, hint: "'apple' começa com som de vogal → an." },
        { prompt: "She is ___ honest person with ___ great heart.", options: ["a / a", "an / a", "an / the", "a / an"], answerIdx: 1, hint: "'honest' tem 'h' mudo → som de vogal → an." },
        { prompt: "He plays ___ guitar and works as ___ university lecturer.", options: ["the / an", "a / an", "the / a", "a / the"], answerIdx: 2, hint: "Instrumentos levam 'the'; 'university' soa como 'yu' (consoante) → a." }),
      a('ge3_a2', 'sort',
        { prompt: "Categorize cada palavra pelo artigo indefinido correto.", groups: ["a", "an"], items: [{ t: "car", g: "a" }, { t: "egg", g: "an" }, { t: "dog", g: "a" }, { t: "orange", g: "an" }], hint: "Som de vogal (a, e, i, o, u) → an." },
        { prompt: "Categorize pelo artigo indefinido correto.", groups: ["a", "an"], items: [{ t: "hour", g: "an" }, { t: "house", g: "a" }, { t: "idea", g: "an" }, { t: "uniform", g: "a" }, { t: "umbrella", g: "an" }], hint: "Vale o SOM: 'hour' tem h mudo, 'uniform' soa 'yu'." },
        { prompt: "Categorize pelo artigo indefinido correto.", groups: ["a", "an"], items: [{ t: "honour", g: "an" }, { t: "European", g: "a" }, { t: "MBA", g: "an" }, { t: "one-way ticket", g: "a" }, { t: "X-ray", g: "an" }], hint: "Leia em voz alta: 'MBA' começa com som 'em'; 'one' soa 'wan'." }),
      a('ge3_a3', 'mc',
        { prompt: "Which is correct?", options: ["I see a sun.", "I see the sun.", "I see an sun.", "I see sun."], answerIdx: 1, hint: "Coisas únicas (o sol) levam 'the'." },
        { prompt: "Choose the correct sentence:", options: ["She is best student in class.", "She is a best student in class.", "She is the best student in class.", "She is an best student in class."], answerIdx: 2, hint: "Superlativos levam 'the'." },
        { prompt: "Choose the correct sentence:", options: ["Life is beautiful.", "The life is beautiful.", "A life is beautiful.", "An life is beautiful."], answerIdx: 0, hint: "Conceitos gerais (life, love, music) não levam artigo." }),
    ],
  },
  ge4: {
    context: "Preposições de tempo e lugar: 'in' (meses, anos, lugares grandes), 'on' (dias, datas, superfícies), 'at' (horas, lugares específicos).",
    acts: [
      a('ge4_a1', 'gapdrop',
        { prompt: "The party is ___ Saturday.", options: ["in", "on", "at", "to"], answerIdx: 1, hint: "Dias da semana levam 'on'." },
        { prompt: "I usually wake up ___ 7 o'clock ___ the morning.", options: ["on / in", "at / in", "in / at", "at / on"], answerIdx: 1, hint: "Horas → at; partes do dia → in the morning." },
        { prompt: "We'll meet ___ the corner ___ noon ___ New Year's Eve.", options: ["at / at / on", "in / on / at", "on / at / in", "at / in / on"], answerIdx: 0, hint: "Ponto específico → at the corner; 'noon' → at; datas → on." }),
      a('ge4_a2', 'sort',
        { prompt: "Categorize cada expressão pela preposição correta.", groups: ["in", "on", "at"], items: [{ t: "July", g: "in" }, { t: "Monday", g: "on" }, { t: "night", g: "at" }, { t: "2010", g: "in" }], hint: "Meses/anos → in; dias → on; 'night' → at." },
        { prompt: "Categorize pela preposição correta.", groups: ["in", "on", "at"], items: [{ t: "the weekend", g: "at" }, { t: "summer", g: "in" }, { t: "my birthday", g: "on" }, { t: "midnight", g: "at" }, { t: "the 1990s", g: "in" }], hint: "Estações → in; 'the weekend' (UK) → at; horas exatas → at." },
        { prompt: "Categorize pela preposição de lugar correta.", groups: ["in", "on", "at"], items: [{ t: "the bus stop", g: "at" }, { t: "the wall", g: "on" }, { t: "London", g: "in" }, { t: "the second floor", g: "on" }, { t: "the airport", g: "at" }], hint: "Ponto de referência → at; superfície → on; área/cidade → in." }),
      a('ge4_a3', 'mc',
        { prompt: "Which is correct?", options: ["I live at Brazil.", "I live on Brazil.", "I live in Brazil.", "I live to Brazil."], answerIdx: 2, hint: "Países e cidades → in." },
        { prompt: "Choose the correct sentence:", options: ["The keys are in the table.", "The keys are on the table.", "The keys are at the table.", "The keys are to the table."], answerIdx: 1, hint: "Sobre uma superfície → on." },
        { prompt: "Choose the correct sentence:", options: ["She arrived in the station in time.", "She arrived at the station on time.", "She arrived on the station at time.", "She arrived to the station in time."], answerIdx: 1, hint: "'arrive at' um lugar específico; 'on time' = pontual." }),
    ],
  },
  ge31: {
    context: "O Simple Past fala de ações concluídas no passado. Verbos regulares recebem -ed; irregulares têm formas próprias (go → went, eat → ate).",
    acts: [
      a('ge31_a1', 'gapdrop',
        { prompt: "Yesterday I ___ to the park.", options: ["go", "goes", "went", "gone"], answerIdx: 2, hint: "'go' é irregular: go → went." },
        { prompt: "She ___ her homework before dinner last night.", options: ["do", "did", "done", "does"], answerIdx: 1, hint: "do → did no passado." },
        { prompt: "They ___ the train because they ___ up late.", options: ["missed / woke", "missed / waked", "miss / woke", "missing / woken"], answerIdx: 0, hint: "miss → missed (regular); wake → woke (irregular)." }),
      a('ge31_a2', 'sort',
        { prompt: "Categorize os verbos em regular ou irregular.", groups: ["Regular", "Irregular"], items: [{ t: "play", g: "Regular" }, { t: "go", g: "Irregular" }, { t: "work", g: "Regular" }, { t: "eat", g: "Irregular" }], hint: "Regular faz -ed; irregular muda a forma." },
        { prompt: "Categorize os verbos em regular ou irregular.", groups: ["Regular", "Irregular"], items: [{ t: "watch", g: "Regular" }, { t: "buy", g: "Irregular" }, { t: "study", g: "Regular" }, { t: "take", g: "Irregular" }, { t: "dance", g: "Regular" }], hint: "buy → bought e take → took são irregulares." },
        { prompt: "Categorize os verbos em regular ou irregular.", groups: ["Regular", "Irregular"], items: [{ t: "arrive", g: "Regular" }, { t: "catch", g: "Irregular" }, { t: "decide", g: "Regular" }, { t: "seek", g: "Irregular" }, { t: "rise", g: "Irregular" }, { t: "prefer", g: "Regular" }], hint: "catch → caught, seek → sought, rise → rose." }),
      a('ge31_a3', 'order',
        { prompt: "Monte a frase no passado.", tokens: ["We", "watched", "a", "film", "yesterday"], hint: "Sujeito + verbo no passado + complemento." },
        { prompt: "Monte a pergunta no passado.", tokens: ["Did", "you", "see", "the", "game"], hint: "Did + sujeito + verbo base." },
        { prompt: "Monte a frase negativa no passado.", tokens: ["He", "did", "not", "understand", "the", "instructions"], hint: "did not + verbo na base." }),
    ],
  },
  ge32: {
    context: "Pratique o Simple Past. Nas perguntas e negativas usamos did/didn't + verbo na forma base (sem -ed).",
    acts: [
      a('ge32_a1', 'gapdrop',
        { prompt: "___ you have a good weekend?", options: ["Do", "Did", "Was", "Were"], answerIdx: 1, hint: "Pergunta no passado → Did." },
        { prompt: "I ___ (not) call you because I ___ your number.", options: ["didn't / lost", "don't / lost", "didn't / losed", "wasn't / lost"], answerIdx: 0, hint: "didn't + base; lose → lost (irregular)." },
        { prompt: "Where ___ they go after the concert ___?", options: ["did / finished", "did / finish", "were / finished", "was / finish"], answerIdx: 1, hint: "'did' já marca o passado, então 'finish' fica na base." }),
      a('ge32_a2', 'fill',
        { prompt: "She ___ (buy) a new phone last week.", answer: "bought", keywords: ["bought"], hint: "buy → bought." },
        { prompt: "We ___ (not / go) out because it ___ (rain).", answer: "did not go / rained", keywords: ["didn't go", "did not go", "rained"], hint: "didn't go; rain → rained." },
        { prompt: "By the time we arrived, the show ___ (already / begin).", answer: "had already begun", keywords: ["had already begun"], hint: "Ação anterior a outra no passado → Past Perfect (had + particípio)." }),
      a('ge32_a3', 'mc',
        { prompt: "Which is correct?", options: ["Did you went home?", "Did you go home?", "Do you went home?", "Did you gone home?"], answerIdx: 1, hint: "Após 'did', o verbo fica na base." },
        { prompt: "Choose the correct sentence:", options: ["She didn't saw the message.", "She don't see the message.", "She didn't see the message.", "She not saw the message."], answerIdx: 2, hint: "didn't + verbo base." },
        { prompt: "Choose the correct sentence:", options: ["I wish I studied harder yesterday.", "Hardly had I sat down when the phone rang.", "Hardly I had sat down when the phone rang.", "Hardly did I sat down when the phone rang."], answerIdx: 1, hint: "Inversão com 'Hardly...': Hardly + had + sujeito + particípio." }),
    ],
  },
  ge37: {
    context: "Para o futuro usamos 'will' (decisões do momento, previsões) e 'be going to' (planos e intenções já decididas).",
    acts: [
      a('ge37_a1', 'gapdrop',
        { prompt: "Look at those clouds! It ___ rain.", options: ["will", "is going to", "goes to", "wills"], answerIdx: 1, hint: "Previsão com evidência agora → be going to." },
        { prompt: "\"The phone is ringing!\" — \"OK, I ___ answer it.\"", options: ["am going to", "will", "go to", "am will"], answerIdx: 1, hint: "Decisão tomada na hora → will." },
        { prompt: "This time next year we ___ in our new house.", options: ["will live", "are going to living", "will be living", "will living"], answerIdx: 2, hint: "Ação em progresso num momento futuro → will be + -ing." }),
      a('ge37_a2', 'order',
        { prompt: "Monte a frase de futuro.", tokens: ["I", "will", "call", "you", "later"], hint: "Sujeito + will + verbo base." },
        { prompt: "Monte a frase de plano futuro.", tokens: ["We", "are", "going", "to", "travel", "in", "July"], hint: "be + going to + verbo base." },
        { prompt: "Monte a pergunta de futuro.", tokens: ["What", "time", "will", "the", "meeting", "start"], hint: "Wh- + will + sujeito + verbo base." }),
      a('ge37_a3', 'mc',
        { prompt: "Which is correct?", options: ["I will to help you.", "I will help you.", "I will helping you.", "I will helps you."], answerIdx: 1, hint: "will + verbo base (sem 'to')." },
        { prompt: "Which is the best answer to 'Why did you buy eggs?'", options: ["I will make a cake.", "I'm going to make a cake.", "I make a cake.", "I made a cake."], answerIdx: 1, hint: "Plano já decidido → be going to." },
        { prompt: "Choose the most natural sentence:", options: ["The train leaves at 6 tomorrow.", "The train will leave at 6 tomorrow, maybe.", "The train is leaving at 6, I decide now.", "The train going to leave at 6."], answerIdx: 0, hint: "Horários fixos usam o Present Simple para o futuro." }),
    ],
  },
  ge47: {
    context: "Comparativos comparam duas coisas (bigger, more expensive) e superlativos indicam o extremo (the biggest, the most expensive). Adjetivos curtos: -er/-est; longos: more/most.",
    acts: [
      a('ge47_a1', 'gapdrop',
        { prompt: "An elephant is ___ than a cat.", options: ["big", "bigger", "biggest", "more big"], answerIdx: 1, hint: "Adjetivo curto + -er (dobra o g)." },
        { prompt: "This is ___ film I have ever seen.", options: ["the most boring", "the boringest", "more boring", "most boring"], answerIdx: 0, hint: "Adjetivo longo: the most + adjetivo." },
        { prompt: "The more you practise, ___ you become.", options: ["the confident", "more confident", "the more confident", "the most confident"], answerIdx: 2, hint: "Estrutura 'the more..., the more...'." }),
      a('ge47_a2', 'sort',
        { prompt: "Categorize os adjetivos pela forma comparativa.", groups: ["-er", "more"], items: [{ t: "tall", g: "-er" }, { t: "expensive", g: "more" }, { t: "fast", g: "-er" }, { t: "beautiful", g: "more" }], hint: "1 sílaba → -er; 3+ sílabas → more." },
        { prompt: "Categorize pela forma comparativa.", groups: ["-er", "more"], items: [{ t: "happy", g: "-er" }, { t: "modern", g: "more" }, { t: "easy", g: "-er" }, { t: "careful", g: "more" }, { t: "clever", g: "-er" }], hint: "Adjetivos em -y viram -ier (happy → happier)." },
        { prompt: "Categorize pela forma comparativa.", groups: ["-er", "more", "irregular"], items: [{ t: "good", g: "irregular" }, { t: "narrow", g: "-er" }, { t: "far", g: "irregular" }, { t: "relevant", g: "more" }, { t: "bad", g: "irregular" }], hint: "good → better, bad → worse, far → further são irregulares." }),
      a('ge47_a3', 'mc',
        { prompt: "Which is correct?", options: ["She is more tall than me.", "She is taller than me.", "She is tallest than me.", "She is more taller than me."], answerIdx: 1, hint: "Adjetivo curto usa -er, nunca 'more'." },
        { prompt: "Choose the correct sentence:", options: ["It's the more interesting book here.", "It's the interestingest book here.", "It's the most interesting book here.", "It's most interesting book here."], answerIdx: 2, hint: "Superlativo de adjetivo longo: the most + adjetivo." },
        { prompt: "Choose the correct sentence:", options: ["Today is worse than yesterday.", "Today is worser than yesterday.", "Today is more bad than yesterday.", "Today is the worse than yesterday."], answerIdx: 0, hint: "bad → worse (comparativo irregular)." }),
    ],
  },
  ge48: {
    context: "Pratique comparativos e superlativos. Use 'than' após o comparativo e 'the' antes do superlativo.",
    acts: [
      a('ge48_a1', 'order',
        { prompt: "Monte a frase comparativa.", tokens: ["Summer", "is", "hotter", "than", "winter"], hint: "adjetivo + -er + than." },
        { prompt: "Monte a frase superlativa.", tokens: ["It", "is", "the", "most", "popular", "app"], hint: "the most + adjetivo + substantivo." },
        { prompt: "Monte a frase com 'as...as'.", tokens: ["He", "is", "not", "as", "tall", "as", "his", "brother"], hint: "as + adjetivo + as (igualdade)." }),
      a('ge48_a2', 'fill',
        { prompt: "My bag is ___ (heavy) than yours.", answer: "heavier", keywords: ["heavier"], hint: "heavy → heavier (y → ier)." },
        { prompt: "This is ___ (good) restaurant in town.", answer: "the best", keywords: ["the best"], hint: "good → the best (superlativo irregular)." },
        { prompt: "The film was far ___ (interesting) than I expected.", answer: "more interesting", keywords: ["more interesting"], hint: "Adjetivo longo: more + adjetivo; 'far' intensifica." }),
      a('ge48_a3', 'gapdrop',
        { prompt: "A car is ___ than a bike.", options: ["fast", "faster", "fastest", "more fast"], answerIdx: 1, hint: "fast → faster." },
        { prompt: "Winter is ___ season of the year.", options: ["cold", "colder", "the coldest", "most cold"], answerIdx: 2, hint: "Superlativo curto: the + adjetivo + -est." },
        { prompt: "Her English is getting ___ every day.", options: ["good and good", "better and better", "the best", "more good"], answerIdx: 1, hint: "Progressão: comparativo + and + comparativo." }),
    ],
  },
  ge56: {
    context: "Revisão geral das Semanas 1–11: presente, passado, futuro, artigos, preposições e comparativos. Reveja o que estiver menos firme.",
    acts: [
      a('ge56_a1', 'gapdrop',
        { prompt: "Right now she ___ a letter.", options: ["writes", "is writing", "wrote", "write"], answerIdx: 1, hint: "'Right now' → Present Continuous." },
        { prompt: "If it rains tomorrow, we ___ at home.", options: ["stay", "stayed", "will stay", "staying"], answerIdx: 2, hint: "Condicional tipo 1: if + presente, will + base." },
        { prompt: "By next year she ___ here for a decade.", options: ["works", "will work", "will have worked", "worked"], answerIdx: 2, hint: "Ação concluída antes de um ponto futuro → Future Perfect." }),
      a('ge56_a2', 'order',
        { prompt: "Monte a pergunta no presente.", tokens: ["Where", "do", "you", "live"], hint: "Wh- + do + sujeito + verbo." },
        { prompt: "Monte a frase no passado.", tokens: ["They", "did", "not", "come", "to", "the", "party"], hint: "did not + verbo base." },
        { prompt: "Monte a frase no Present Perfect.", tokens: ["I", "have", "never", "been", "to", "Japan"], hint: "have + advérbio + particípio." }),
      a('ge56_a3', 'mc',
        { prompt: "Which sentence is correct?", options: ["She have two cats.", "She has two cats.", "She haves two cats.", "She having two cats."], answerIdx: 1, hint: "he/she/it → has." },
        { prompt: "Choose the correct sentence:", options: ["I am living here since 2015.", "I live here since 2015.", "I have lived here since 2015.", "I lived here since 2015."], answerIdx: 2, hint: "'since' + ação que continua → Present Perfect." },
        { prompt: "Choose the correct sentence:", options: ["If I was you, I will accept.", "If I were you, I would accept.", "If I am you, I accept.", "If I were you, I will accept."], answerIdx: 1, hint: "Condicional tipo 2: if + were, would + base." }),
    ],
  },

  // ─── VOCAB ─────────────────────────────────────────────────
  ge6: {
    context: "As palavras mais comuns do inglês (the, and, is, have...) aparecem em quase toda frase. Dominá-las acelera muito a leitura e a fala.",
    acts: [
      a('ge6_a1', 'sort',
        { prompt: "Categorize cada palavra pela sua classe.", groups: ["Pronoun", "Verb"], items: [{ t: "she", g: "Pronoun" }, { t: "have", g: "Verb" }, { t: "they", g: "Pronoun" }, { t: "go", g: "Verb" }], hint: "Pronomes substituem nomes; verbos indicam ação." },
        { prompt: "Categorize cada palavra comum pela sua classe.", groups: ["Pronoun", "Verb", "Preposition"], items: [{ t: "it", g: "Pronoun" }, { t: "make", g: "Verb" }, { t: "with", g: "Preposition" }, { t: "we", g: "Pronoun" }, { t: "under", g: "Preposition" }], hint: "Preposições ligam palavras (with, under, about)." },
        { prompt: "Categorize cada palavra pela sua classe.", groups: ["Conjunction", "Determiner", "Adverb"], items: [{ t: "because", g: "Conjunction" }, { t: "these", g: "Determiner" }, { t: "quickly", g: "Adverb" }, { t: "although", g: "Conjunction" }, { t: "several", g: "Determiner" }], hint: "Conjunções conectam orações; determinantes acompanham substantivos." }),
      a('ge6_a2', 'gapdrop',
        { prompt: "___ name is Ana.", options: ["I", "My", "Me", "Mine"], answerIdx: 1, hint: "Possessivo antes do substantivo → My." },
        { prompt: "There ___ many people at the party.", options: ["was", "were", "is", "be"], answerIdx: 1, hint: "'people' é plural → were." },
        { prompt: "I'd rather stay in ___ go out tonight.", options: ["than", "then", "that", "as"], answerIdx: 0, hint: "'would rather X than Y'." }),
    ],
  },
  ge7: {
    context: "Falsos cognatos são palavras parecidas com o português, mas com sentido diferente. Ex.: 'actually' = na verdade (não 'atualmente').",
    acts: [
      a('ge7_a1', 'mc',
        { prompt: "The English word 'actually' means:", options: ["atualmente", "na verdade", "atualizar", "atual"], answerIdx: 1, hint: "'Actually' = na verdade." },
        { prompt: "The verb 'to pretend' means:", options: ["pretender", "fingir", "planejar", "prender"], answerIdx: 1, hint: "'Pretend' = fingir." },
        { prompt: "The word 'eventually' means:", options: ["eventualmente", "no fim / por fim", "possivelmente", "de vez em quando"], answerIdx: 1, hint: "'Eventually' = no fim, finalmente." }),
      a('ge7_a2', 'sort',
        { prompt: "Categorize: a tradução dada está certa ou é uma armadilha (falso cognato)?", groups: ["Tradução certa", "Falso cognato"], items: [{ t: "hospital = hospital", g: "Tradução certa" }, { t: "push = puxar", g: "Falso cognato" }, { t: "animal = animal", g: "Tradução certa" }, { t: "parents = parentes", g: "Falso cognato" }], hint: "'push' = empurrar; 'parents' = pais." },
        { prompt: "Categorize: tradução certa ou falso cognato?", groups: ["Tradução certa", "Falso cognato"], items: [{ t: "library = livraria", g: "Falso cognato" }, { t: "college = faculdade", g: "Tradução certa" }, { t: "fabric = fábrica", g: "Falso cognato" }, { t: "idea = ideia", g: "Tradução certa" }, { t: "costume = costume", g: "Falso cognato" }], hint: "'library' = biblioteca; 'fabric' = tecido; 'costume' = fantasia." },
        { prompt: "Categorize: tradução certa ou falso cognato?", groups: ["Tradução certa", "Falso cognato"], items: [{ t: "comprehensive = compreensivo", g: "Falso cognato" }, { t: "notice = notícia", g: "Falso cognato" }, { t: "realise = perceber", g: "Tradução certa" }, { t: "resume = resumir", g: "Falso cognato" }, { t: "support = apoiar", g: "Tradução certa" }], hint: "'comprehensive' = abrangente; 'notice' = aviso/perceber; 'resume' = recomeçar." }),
    ],
  },
  ge8: {
    context: "Vocabulário do dia a dia agrupado por temas (casa, comida, trabalho) fica mais fácil de lembrar.",
    acts: [
      a('ge8_a1', 'sort',
        { prompt: "Categorize cada palavra pelo tema.", groups: ["Food", "Clothes"], items: [{ t: "bread", g: "Food" }, { t: "shirt", g: "Clothes" }, { t: "apple", g: "Food" }, { t: "shoes", g: "Clothes" }], hint: "Comida x roupa." },
        { prompt: "Categorize cada palavra pelo cômodo da casa.", groups: ["Kitchen", "Bathroom", "Bedroom"], items: [{ t: "fridge", g: "Kitchen" }, { t: "towel", g: "Bathroom" }, { t: "pillow", g: "Bedroom" }, { t: "oven", g: "Kitchen" }, { t: "mirror", g: "Bathroom" }], hint: "Onde você usaria cada objeto?" },
        { prompt: "Categorize cada palavra pelo campo semântico.", groups: ["Weather", "Emotions", "Workplace"], items: [{ t: "drizzle", g: "Weather" }, { t: "anxious", g: "Emotions" }, { t: "deadline", g: "Workplace" }, { t: "overcast", g: "Weather" }, { t: "thrilled", g: "Emotions" }, { t: "colleague", g: "Workplace" }], hint: "'drizzle' = chuvisco; 'overcast' = nublado." }),
      a('ge8_a2', 'match',
        { prompt: "Relacione cada objeto com o lugar onde ele é usado.", pairs: [{ left: "toothbrush", right: "bathroom" }, { left: "sofa", right: "living room" }, { left: "pan", right: "kitchen" }], hint: "Pense na função de cada item." },
        { prompt: "Relacione a palavra com seu sinônimo.", pairs: [{ left: "big", right: "large" }, { left: "happy", right: "glad" }, { left: "fast", right: "quick" }, { left: "start", right: "begin" }], hint: "Sinônimos têm o mesmo sentido." },
        { prompt: "Relacione o verbo com sua colocação (collocation) mais comum.", pairs: [{ left: "make", right: "a decision" }, { left: "do", right: "the dishes" }, { left: "take", right: "a break" }, { left: "pay", right: "attention" }], hint: "Collocations: 'make a decision', 'do the dishes'." }),
    ],
  },
  ge33: {
    context: "Os verbos irregulares mais comuns não seguem a regra do -ed. Vale memorizar as três formas: base, passado e particípio (go / went / gone).",
    acts: [
      a('ge33_a1', 'match',
        { prompt: "Relacione o verbo com seu passado simples.", pairs: [{ left: "go", right: "went" }, { left: "eat", right: "ate" }, { left: "see", right: "saw" }], hint: "Formas de passado irregulares." },
        { prompt: "Relacione o verbo com seu passado simples.", pairs: [{ left: "buy", right: "bought" }, { left: "think", right: "thought" }, { left: "take", right: "took" }, { left: "come", right: "came" }], hint: "Alguns terminam em -ought." },
        { prompt: "Relacione o verbo com seu PARTICÍPIO passado.", pairs: [{ left: "write", right: "written" }, { left: "break", right: "broken" }, { left: "choose", right: "chosen" }, { left: "swim", right: "swum" }], hint: "Particípios costumam terminar em -en." }),
      a('ge33_a2', 'gapdrop',
        { prompt: "I ___ my keys this morning.", options: ["lost", "losed", "lose", "loosed"], answerIdx: 0, hint: "lose → lost." },
        { prompt: "She has ___ that film three times.", options: ["saw", "seen", "seed", "see"], answerIdx: 1, hint: "Particípio de see → seen." },
        { prompt: "By noon they had ___ the whole cake.", options: ["ate", "eaten", "eated", "eat"], answerIdx: 1, hint: "Particípio de eat → eaten." }),
    ],
  },
  ge38: {
    context: "Expressões de tempo situam a ação: 'yesterday', 'tomorrow', 'next week', 'soon', 'in two days'. Cada uma combina com certos tempos verbais.",
    acts: [
      a('ge38_a1', 'sort',
        { prompt: "Categorize cada expressão em passado ou futuro.", groups: ["Past", "Future"], items: [{ t: "yesterday", g: "Past" }, { t: "tomorrow", g: "Future" }, { t: "last night", g: "Past" }, { t: "next week", g: "Future" }], hint: "'last' → passado; 'next' → futuro." },
        { prompt: "Categorize cada expressão de tempo.", groups: ["Past", "Future"], items: [{ t: "two days ago", g: "Past" }, { t: "soon", g: "Future" }, { t: "the day before", g: "Past" }, { t: "in an hour", g: "Future" }, { t: "later", g: "Future" }], hint: "'ago' → passado; 'in + tempo' → futuro." },
        { prompt: "Categorize cada expressão pelo tempo a que se refere.", groups: ["Past", "Future"], items: [{ t: "the other day", g: "Past" }, { t: "shortly", g: "Future" }, { t: "by then", g: "Future" }, { t: "back in 2010", g: "Past" }, { t: "in due course", g: "Future" }, { t: "a while back", g: "Past" }], hint: "'the other day' / 'a while back' = passado recente; 'shortly' / 'in due course' = futuro." }),
      a('ge38_a2', 'gapdrop',
        { prompt: "I'll see you ___.", options: ["yesterday", "tomorrow", "last week", "ago"], answerIdx: 1, hint: "'I'll' é futuro → tomorrow." },
        { prompt: "They moved here two years ___.", options: ["ago", "later", "next", "since"], answerIdx: 0, hint: "'ago' = atrás." },
        { prompt: "The report is due ___ Friday, so finish it ___.", options: ["in / lately", "on / soon", "at / ago", "by / later on"], answerIdx: 1, hint: "Dias levam 'on'; 'soon' = em breve." }),
    ],
  },
  ge43: {
    context: "Vocabulário de restaurante: menu, starter, main course, dessert, order, bill. Frases úteis para pedir e pagar.",
    acts: [
      a('ge43_a1', 'match',
        { prompt: "Relacione a palavra com sua tradução.", pairs: [{ left: "menu", right: "cardápio" }, { left: "bill", right: "conta" }, { left: "waiter", right: "garçom" }], hint: "Palavras do restaurante." },
        { prompt: "Relacione o prato com a etapa da refeição.", pairs: [{ left: "soup", right: "starter" }, { left: "steak", right: "main course" }, { left: "ice cream", right: "dessert" }, { left: "coffee", right: "after dinner" }], hint: "starter → main → dessert." },
        { prompt: "Relacione a frase com sua função.", pairs: [{ left: "Could I see the menu?", right: "asking to order" }, { left: "Could we get the bill?", right: "paying" }, { left: "I'm allergic to nuts.", right: "dietary need" }, { left: "It's on me.", right: "offering to pay" }], hint: "'It's on me' = eu pago." }),
      a('ge43_a2', 'gapdrop',
        { prompt: "Waiter: \"Are you ready to ___?\"", options: ["order", "pay", "cook", "eat"], answerIdx: 0, hint: "Pedir a comida → order." },
        { prompt: "\"Could we have the ___, please?\" (you want to pay)", options: ["menu", "bill", "starter", "tip"], answerIdx: 1, hint: "Conta → bill." },
        { prompt: "\"I'll have the salmon ___ chips, please.\"", options: ["with", "of", "for", "at"], answerIdx: 0, hint: "'salmon with chips' = com fritas." }),
    ],
  },
  ge46: {
    context: "Adjetivos de aparência (tall, slim, curly) e de personalidade (kind, shy, outgoing) ajudam a descrever pessoas.",
    acts: [
      a('ge46_a1', 'sort',
        { prompt: "Categorize cada adjetivo em aparência ou personalidade.", groups: ["Appearance", "Personality"], items: [{ t: "tall", g: "Appearance" }, { t: "kind", g: "Personality" }, { t: "blonde", g: "Appearance" }, { t: "shy", g: "Personality" }], hint: "Aparência = como a pessoa parece; personalidade = como ela é." },
        { prompt: "Categorize cada adjetivo.", groups: ["Appearance", "Personality"], items: [{ t: "slim", g: "Appearance" }, { t: "generous", g: "Personality" }, { t: "curly", g: "Appearance" }, { t: "outgoing", g: "Personality" }, { t: "bald", g: "Appearance" }], hint: "'curly' = cacheado; 'outgoing' = extrovertido." },
        { prompt: "Categorize cada adjetivo pela conotação.", groups: ["Positive", "Negative"], items: [{ t: "reliable", g: "Positive" }, { t: "arrogant", g: "Negative" }, { t: "considerate", g: "Positive" }, { t: "stubborn", g: "Negative" }, { t: "easy-going", g: "Positive" }, { t: "moody", g: "Negative" }], hint: "'reliable' = confiável; 'stubborn' = teimoso." }),
      a('ge46_a2', 'match',
        { prompt: "Relacione o adjetivo com seu oposto.", pairs: [{ left: "tall", right: "short" }, { left: "shy", right: "outgoing" }, { left: "kind", right: "mean" }], hint: "Antônimos." },
        { prompt: "Relacione o adjetivo com sua tradução.", pairs: [{ left: "friendly", right: "amigável" }, { left: "hard-working", right: "trabalhador" }, { left: "funny", right: "engraçado" }, { left: "polite", right: "educado" }], hint: "Adjetivos de personalidade." },
        { prompt: "Relacione o adjetivo com uma definição.", pairs: [{ left: "ambitious", right: "wants to succeed" }, { left: "patient", right: "stays calm waiting" }, { left: "generous", right: "likes to give" }, { left: "sensible", right: "makes good decisions" }], hint: "'sensible' = sensato (não 'sensível')." }),
    ],
  },

  // ─── READING ───────────────────────────────────────────────
  ge21: {
    context: "Leia com atenção e responda. Não precisa entender cada palavra — foque no sentido geral.",
    acts: [
      a('ge21_a1', 'mc',
        { instruction: "Tom is a nurse. He works at night and sleeps in the morning. He has a small dog named Max.", prompt: "When does Tom work?", options: ["In the morning", "At night", "In the afternoon", "On weekends"], answerIdx: 1, hint: "Procure 'He works at night'." },
        { instruction: "Lucy moved to Lisbon last year. At first she felt lonely, but now she has many friends and loves the city's beaches.", prompt: "How does Lucy feel about Lisbon now?", options: ["Still lonely", "She wants to leave", "She loves it", "She is bored"], answerIdx: 2, hint: "'now she... loves the city'." },
        { instruction: "Despite the heavy rain, the festival went ahead. Organisers had prepared covered areas, so the crowd barely noticed the downpour and the bands played until midnight.", prompt: "What can we infer about the festival?", options: ["It was cancelled", "It was poorly organised", "It continued successfully in spite of the weather", "The bands stopped early"], answerIdx: 2, hint: "'went ahead' + 'played until midnight'." }),
      a('ge21_a2', 'gapdrop',
        { instruction: "Anna has a cat. The cat is black and very ___.", prompt: "Choose the word that best fits.", options: ["table", "friendly", "quickly", "under"], answerIdx: 1, hint: "Precisamos de um adjetivo para o gato." },
        { instruction: "The shop was closed, ___ we went home.", prompt: "Choose the connector that fits.", options: ["because", "so", "but", "although"], answerIdx: 1, hint: "Causa → consequência: so." },
        { instruction: "The results were disappointing; ___, the team refused to give up.", prompt: "Choose the connector that fits the contrast.", options: ["therefore", "nevertheless", "because", "so"], answerIdx: 1, hint: "Contraste formal → nevertheless." }),
    ],
  },
  ge22: {
    context: "Skimming é passar os olhos rapidamente para captar a IDEIA PRINCIPAL, sem ler tudo. Olhe título, primeira frase de cada parágrafo e palavras repetidas.",
    acts: [
      a('ge22_a1', 'mc',
        { instruction: "Recycling helps the planet. It saves energy, reduces rubbish, and protects animals. Everyone can recycle at home.", prompt: "What is the main idea?", options: ["Animals are dangerous", "Recycling is good for the planet", "Energy is expensive", "Homes are small"], answerIdx: 1, hint: "Qual frase resume todo o texto?" },
        { instruction: "Working from home has clear benefits: no commute, flexible hours, and more time with family. However, some people miss the social side of an office.", prompt: "The main idea of the text is that working from home...", options: ["is impossible", "has benefits but also a downside", "is only about money", "requires a big house"], answerIdx: 1, hint: "Note o 'However'." },
        { instruction: "While electric cars are often praised as a clean solution, critics point out that the batteries require rare metals, mined in ways that can harm both people and ecosystems.", prompt: "The passage mainly argues that electric cars...", options: ["are completely clean", "are not as simple a solution as they seem", "should be banned", "are cheaper than petrol cars"], answerIdx: 1, hint: "'While... critics point out' sinaliza uma ressalva." }),
      a('ge22_a2', 'gapdrop',
        { instruction: "Title: 'How to Save Water at Home'", prompt: "This text is probably about...", options: ["cooking recipes", "saving water", "buying a car", "playing music"], answerIdx: 1, hint: "O título já indica o tema." },
        { instruction: "A text with the headings: 'Symptoms', 'Causes', 'Treatment'", prompt: "This text is most likely about...", options: ["a holiday", "a health condition", "a football match", "a recipe"], answerIdx: 1, hint: "Sintomas + causas + tratamento = tema de saúde." },
        { instruction: "An article opening: 'In the wake of the merger, shareholders are demanding transparency...'", prompt: "The article most likely concerns...", options: ["a wedding", "corporate business news", "gardening tips", "a film review"], answerIdx: 1, hint: "'merger' e 'shareholders' são termos de negócios." }),
    ],
  },
  ge23: {
    context: "Notícias simples usam frases curtas e diretas. Identifique quem, o quê, onde e quando.",
    acts: [
      a('ge23_a1', 'mc',
        { instruction: "A cat in Brazil walked 200 km back home after getting lost on a family trip. It arrived after three weeks.", prompt: "What is the news about?", options: ["A lost phone", "A cat that found its way home", "A family holiday", "A long road"], answerIdx: 1, hint: "Quem é o protagonista da notícia?" },
        { instruction: "City Council announced free bus rides every Sunday starting next month, hoping to reduce traffic and pollution downtown.", prompt: "Why is the council making buses free on Sundays?", options: ["To make money", "To reduce traffic and pollution", "Because buses are old", "To close the roads"], answerIdx: 1, hint: "'hoping to reduce traffic and pollution'." },
        { instruction: "Researchers unveiled a device that turns humid air into drinking water, a breakthrough that could aid regions where wells run dry for months each year.", prompt: "The report suggests the device could be most valuable for...", options: ["cold, wet countries", "areas facing water shortages", "the technology industry", "space travel"], answerIdx: 1, hint: "'where wells run dry' aponta para regiões com falta de água." }),
      a('ge23_a2', 'gapdrop',
        { instruction: "The team ___ the championship for the first time in 20 years.", prompt: "Choose the correct verb form.", options: ["win", "won", "winning", "wins"], answerIdx: 1, hint: "Notícia de algo concluído → passado." },
        { instruction: "Prices ___ risen sharply since the start of the year.", prompt: "Choose the word that fits.", options: ["has", "have", "having", "is"], answerIdx: 1, hint: "'Prices' é plural → have." },
        { instruction: "The policy, ___ was introduced last spring, has already cut waste by 30%.", prompt: "Choose the relative pronoun that fits.", options: ["who", "which", "where", "whose"], answerIdx: 1, hint: "Para coisas usamos 'which'." }),
    ],
  },
  ge24: {
    context: "Ao encontrar uma palavra nova, use o CONTEXTO (as outras palavras da frase) para adivinhar o sentido, antes de correr ao dicionário.",
    acts: [
      a('ge24_a1', 'mc',
        { instruction: "The soup was so bland that I added lots of salt and pepper.", prompt: "'Bland' probably means:", options: ["too spicy", "without much flavour", "very hot", "expensive"], answerIdx: 1, hint: "Se precisou de sal e pimenta, faltava sabor." },
        { instruction: "After the long hike, we were famished and ate everything on the table.", prompt: "'Famished' probably means:", options: ["very tired", "very hungry", "very happy", "very cold"], answerIdx: 1, hint: "'ate everything' sugere muita fome." },
        { instruction: "Her explanation was so convoluted that even the experts in the room looked confused.", prompt: "'Convoluted' probably means:", options: ["clear and simple", "complicated and hard to follow", "short", "funny"], answerIdx: 1, hint: "Se até especialistas ficaram confusos, era complicada." }),
      a('ge24_a2', 'gapdrop',
        { instruction: "It was freezing, so she put on a warm ___.", prompt: "Guess the missing word from context.", options: ["ice cream", "coat", "window", "song"], answerIdx: 1, hint: "Frio → roupa quente." },
        { instruction: "He whispered so no one else could ___ him.", prompt: "Guess the missing word from context.", options: ["hear", "eat", "drive", "paint"], answerIdx: 0, hint: "Sussurrar tem a ver com ouvir." },
        { instruction: "The evidence was flimsy, so the case eventually ___.", prompt: "Guess the missing word from context.", options: ["collapsed", "celebrated", "cooked", "arrived"], answerIdx: 0, hint: "Prova fraca → o caso desmoronou." }),
    ],
  },
  ge57: {
    context: "Um teste de nível cobre um pouco de tudo. Leia cada frase com calma e escolha a opção mais natural.",
    acts: [
      a('ge57_a1', 'gapdrop',
        { prompt: "How ___ are you?", options: ["old", "much", "many", "long"], answerIdx: 0, hint: "Perguntar idade → How old." },
        { prompt: "There isn't ___ milk left.", options: ["many", "much", "some", "a few"], answerIdx: 1, hint: "'milk' é incontável → much." },
        { prompt: "I'm not used to ___ up so early.", options: ["get", "getting", "got", "gets"], answerIdx: 1, hint: "'be used to' + verbo -ing." }),
      a('ge57_a2', 'mc',
        { prompt: "Choose the correct question:", options: ["What you do like?", "What do you like?", "What does you like?", "What you like?"], answerIdx: 1, hint: "Wh- + do + sujeito + verbo." },
        { prompt: "Choose the correct sentence:", options: ["She's more taller than him.", "She's taller than him.", "She's the taller than him.", "She's tall than him."], answerIdx: 1, hint: "Comparativo curto: taller than." },
        { prompt: "Choose the most natural sentence:", options: ["If I would have known, I would have come.", "If I had known, I would have come.", "If I knew, I would have come.", "If I have known, I will come."], answerIdx: 1, hint: "Condicional tipo 3: if + had + particípio, would have + particípio." }),
    ],
  },

  // ─── WRITING (written answer, scaled by level) ─────────────
  ge5: {
    context: "Pratique escrever frases verdadeiras sobre você no Present Simple. Foque em frases completas: sujeito + verbo + complemento.",
    acts: [
      a('ge5_a1', 'text',
        { prompt: "Write 5 simple true sentences about yourself using the Present Simple (e.g. 'I live in...', 'I like...').", keywords: ["I", "live", "like", "have", "work", "study", "am", "every"], hint: "Comece cada frase com 'I' + verbo na base." },
        { prompt: "Write 6 sentences about your routine and tastes. Include at least one negative ('I don't...') and one third-person sentence ('My mother works...').", keywords: ["I", "don't", "works", "likes", "usually", "always", "every", "my"], hint: "Misture afirmativas, negativas e he/she com -s." },
        { prompt: "Write a short paragraph (7–8 sentences) about your habits and personality, using a range of frequency adverbs (rarely, tend to, hardly ever) and both affirmative and negative present-simple forms.", keywords: ["tend to", "rarely", "hardly ever", "whenever", "don't", "usually", "seldom"], hint: "Varie os advérbios de frequência e conecte as ideias." }),
    ],
  },
  ge10: {
    context: "Use as palavras novas da semana em frases suas — assim elas ficam na memória de longo prazo.",
    acts: [
      a('ge10_a1', 'text',
        { prompt: "Write 5 sentences using new words you learned this week. Use a dictionary if you need to.", keywords: ["because", "and", "I", "like", "have", "new"], hint: "Uma palavra nova por frase já é ótimo." },
        { prompt: "Write 8 sentences connecting the new words to your own life, using linkers like 'and', 'but', 'because'.", keywords: ["because", "but", "and", "so", "however", "which"], hint: "Conecte as frases para formar um pequeno texto." },
        { prompt: "Write a coherent paragraph that weaves at least 8 new words together into one situation or story, using varied sentence structures.", keywords: ["although", "whereas", "which", "in addition", "as a result", "despite"], hint: "Crie uma mini-história que use as palavras naturalmente." }),
    ],
  },
  ge25: {
    context: "Escreva sobre o que você leu. Resumir com suas próprias palavras fixa o vocabulário e treina a produção.",
    acts: [
      a('ge25_a1', 'text',
        { prompt: "Write 3 sentences about something you read this week. What was it about?", keywords: ["read", "about", "was", "it", "story", "text", "learned"], hint: "Diga o tema e uma coisa que você aprendeu." },
        { prompt: "Write 5 sentences summarising what you read and giving your opinion about it.", keywords: ["read", "about", "think", "opinion", "because", "interesting", "learned"], hint: "Resumo + sua opinião com 'because'." },
        { prompt: "Write a short review (6–8 sentences) of something you read: summarise the main point, react to it critically, and say who might enjoy it.", keywords: ["argues", "however", "overall", "recommend", "whereas", "insightful", "audience"], hint: "Resumo, análise crítica e recomendação." }),
    ],
  },
  ge26: {
    context: "Um bom parágrafo tem: (1) frase-tópico com a ideia principal, (2) frases de desenvolvimento com detalhes/exemplos, (3) frase de conclusão. Ordene as partes para ver a estrutura.",
    acts: [
      a('ge26_a1', 'order',
        { prompt: "Coloque as frases na ordem de um bom parágrafo.", tokens: ["My city is a great place to live.", "It has many parks and friendly people.", "For example, the central park has a lake.", "That is why I love living here."], hint: "Ideia principal → detalhes/exemplo → conclusão." },
        { prompt: "Ordene as partes do parágrafo.", tokens: ["Learning a language takes patience.", "Progress can feel slow at first.", "However, small daily practice adds up.", "In the end, consistency beats intensity."], hint: "Tópico → problema → solução → conclusão." },
        { prompt: "Ordene as partes deste parágrafo argumentativo.", tokens: ["Remote work is reshaping modern cities.", "Fewer commuters mean quieter, cleaner centres.", "Nevertheless, local shops that relied on office crowds are struggling.", "The challenge, then, is to balance these competing effects."], hint: "Tese → argumento a favor → contra-argumento → síntese." }),
      a('ge26_a2', 'text',
        { prompt: "Write a short paragraph (4 sentences) about your favourite place. Start with a topic sentence.", keywords: ["favourite", "because", "for example", "place", "love", "it"], hint: "Comece com a ideia principal, depois dê um exemplo." },
        { prompt: "Write a 5–6 sentence paragraph with a clear topic sentence, two supporting details and a concluding sentence.", keywords: ["firstly", "for example", "in addition", "therefore", "because", "overall"], hint: "Use linkers para separar ideia principal, detalhes e conclusão." },
        { prompt: "Write a well-structured paragraph (7–8 sentences) that opens with an arguable topic sentence, develops it with evidence and a counter-point, and closes with a synthesising conclusion.", keywords: ["arguably", "moreover", "on the other hand", "consequently", "in short", "whereas"], hint: "Tese defensável, desenvolvimento com contraponto e conclusão." }),
    ],
  },
  ge27: {
    context: "Palavras de conexão (linkers) ligam ideias: 'and' (adição), 'but' (contraste), 'because' (causa), 'so' (consequência).",
    acts: [
      a('ge27_a1', 'gapdrop',
        { prompt: "I was tired, ___ I went to bed early.", options: ["but", "so", "because", "and"], answerIdx: 1, hint: "Causa → consequência: so." },
        { prompt: "She studied hard, ___ she still felt nervous before the exam.", options: ["so", "because", "but", "and"], answerIdx: 2, hint: "Contraste → but." },
        { prompt: "The flight was delayed; ___, we missed our connection.", options: ["nevertheless", "as a result", "although", "whereas"], answerIdx: 1, hint: "Consequência formal → as a result." }),
      a('ge27_a2', 'text',
        { prompt: "Write 3 sentences, each using a different linker: and, but, because.", keywords: ["and", "but", "because"], hint: "Uma frase para cada conector." },
        { prompt: "Write 4 sentences using: however, so, although, in addition.", keywords: ["however", "so", "although", "in addition"], hint: "Varie contraste, causa e adição." },
        { prompt: "Write a short paragraph using at least four advanced linkers (e.g. nevertheless, consequently, whereas, moreover) correctly.", keywords: ["nevertheless", "consequently", "whereas", "moreover", "despite", "thereby"], hint: "Encaixe os conectores de forma que façam sentido lógico." }),
    ],
  },
  ge28: {
    context: "Escreva sobre sua rotina diária num parágrafo. Use o Present Simple e advérbios de frequência (always, usually, sometimes).",
    acts: [
      a('ge28_a1', 'text',
        { prompt: "Write about your daily routine in about 40 words. Use 'I' + present simple verbs.", keywords: ["I", "wake up", "usually", "then", "in the morning", "every day", "have"], hint: "Siga a ordem do dia: manhã, tarde, noite." },
        { prompt: "Write a paragraph (about 80 words) about your daily routine, using frequency adverbs and time linkers (then, after that, before).", keywords: ["usually", "always", "then", "after that", "before", "in the evening", "sometimes"], hint: "Conecte os momentos do dia com 'then', 'after that'." },
        { prompt: "Write a lively 100-word description of a typical day, varying sentence openings and using at least three frequency adverbs and two dependent clauses ('As soon as...', 'Once I've...').", keywords: ["as soon as", "once", "tend to", "whenever", "before", "by the time", "rarely"], hint: "Comece as frases de formas diferentes e use orações subordinadas." }),
    ],
  },
  ge29: {
    context: "Uma mensagem informal para um amigo usa linguagem simples, contrações (I'm, we'll) e um tom próximo (Hi! / See you!).",
    acts: [
      a('ge29_a1', 'text',
        { prompt: "Write a short informal message (about 30 words) to a friend about your week. Start with 'Hi' and end with 'See you!'.", keywords: ["hi", "how are you", "this week", "see you", "I", "was"], hint: "Cumprimento + notícia + despedida." },
        { prompt: "Write an informal message (about 60 words) telling a friend about your week and asking about theirs.", keywords: ["hey", "guess what", "how about you", "let me know", "can't wait", "?"], hint: "Conte algo e faça uma pergunta ao amigo." },
        { prompt: "Write a natural, friendly message (about 80 words) that updates a friend on your week, reacts to their news and suggests meeting up — using informal connectors and idiomatic phrases.", keywords: ["by the way", "anyway", "fancy", "up for", "catch up", "let's", "no worries"], hint: "Use expressões idiomáticas informais e proponha um encontro." }),
    ],
  },
  ge30: {
    context: "Ortografia: erros comuns incluem dobrar consoantes (running), o -y que vira -ies (studies) e palavras confundidas (their/there).",
    acts: [
      a('ge30_a1', 'mc',
        { prompt: "Which spelling is correct?", options: ["recieve", "receive", "receve", "receeve"], answerIdx: 1, hint: "'i before e, except after c' → receive." },
        { prompt: "Which spelling is correct?", options: ["begining", "beggining", "beginning", "begginning"], answerIdx: 2, hint: "begin → beginning (dobra o n)." },
        { prompt: "Which spelling is correct?", options: ["neccessary", "necessary", "necesary", "neccesary"], answerIdx: 1, hint: "necessary: um c, dois s." }),
      a('ge30_a2', 'gapdrop',
        { prompt: "They forgot ___ umbrella.", options: ["there", "their", "they're", "theyr"], answerIdx: 1, hint: "Posse → their." },
        { prompt: "He ___ to the gym twice a week.", options: ["goes", "gos", "goeses", "going"], answerIdx: 0, hint: "go → goes (terceira pessoa)." },
        { prompt: "The committee has ___ its decision.", options: ["anounced", "announced", "annonced", "announsed"], answerIdx: 1, hint: "announce: dois n, um c, -ced." }),
    ],
  },
  ge35: {
    context: "Escreva sobre o último fim de semana usando o Simple Past (went, saw, played) e expressões como 'last Saturday', 'in the evening'.",
    acts: [
      a('ge35_a1', 'text',
        { prompt: "Write 4 sentences about what you did last weekend. Use past verbs (went, watched, ate).", keywords: ["went", "watched", "ate", "played", "last", "weekend", "saw", "visited"], hint: "Cada frase = uma coisa que você fez." },
        { prompt: "Write a paragraph (about 70 words) about last weekend, in order, using past verbs and time linkers (first, then, later).", keywords: ["first", "then", "later", "after that", "went", "had", "in the evening", "because"], hint: "Conte em ordem cronológica." },
        { prompt: "Write a vivid 90-word account of last weekend, mixing Simple Past and Past Continuous ('While I was..., I...') and adding how you felt about it.", keywords: ["while", "was", "were", "before", "afterwards", "felt", "which was", "eventually"], hint: "Use 'while I was...' para pano de fundo e comente suas emoções." }),
    ],
  },
  ge50: {
    context: "Descreva uma pessoa que você admira. Use adjetivos de personalidade e o verbo 'to be' + present simple.",
    acts: [
      a('ge50_a1', 'text',
        { prompt: "Describe someone you admire in about 40 words. Say who they are and 2–3 qualities.", keywords: ["admire", "is", "kind", "because", "she", "he", "very"], hint: "Quem é + duas ou três qualidades." },
        { prompt: "Write about 60 words describing someone you admire: appearance, personality and one reason with an example.", keywords: ["admire", "because", "for example", "always", "hard-working", "kind", "who"], hint: "Aparência + personalidade + um exemplo concreto." },
        { prompt: "Write a rich 80-word portrait of someone you admire, using relative clauses ('who has...'), a range of personality adjectives and a specific anecdote that illustrates why.", keywords: ["who", "whose", "not only", "genuinely", "resilient", "for instance", "which is why"], hint: "Use orações relativas e uma pequena anedota ilustrativa." }),
    ],
  },
  ge60: {
    context: "Reflita por escrito sobre sua jornada no inglês até aqui: onde começou, o que aprendeu e seus próximos objetivos.",
    acts: [
      a('ge60_a1', 'text',
        { prompt: "Write about 40 words about your English journey: how you started and one thing you can do now.", keywords: ["started", "now", "can", "I", "learned", "English", "better"], hint: "Antes x agora: o que mudou?" },
        { prompt: "Write about 70 words reflecting on your progress: where you began, what improved, and your next goal.", keywords: ["at first", "now", "have learned", "improved", "goal", "want to", "because"], hint: "Início → progresso → próximo objetivo." },
        { prompt: "Write a reflective 90-word text on your language journey using the Present Perfect ('I have learned...'), comparatives ('more confident than before') and a forward-looking goal expressed with future forms.", keywords: ["have learned", "have become", "more confident", "than before", "from now on", "aim to", "will"], hint: "Combine Present Perfect, comparativos e uma meta futura." }),
    ],
  },
})
