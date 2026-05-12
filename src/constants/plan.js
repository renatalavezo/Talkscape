export const PLAN = {
  A1: [
    {
      week: 1, theme: { en: 'Alphabet, Sounds & Greetings', pt: 'Alfabeto, Sons & Cumprimentos' },
      tasks: [
        { id: 'a1w1t1', en: 'Learn all 26 letters and their sounds',          pt: 'Aprenda as 26 letras e seus sons',               cat: 'pronunciation' },
        { id: 'a1w1t2', en: 'Greetings: Hello, Good morning, Goodbye',        pt: 'Cumprimentos: Hello, Good morning, Goodbye',     cat: 'speaking'      },
        { id: 'a1w1t3', en: 'Numbers 1–20',                                   pt: 'Números 1–20',                                   cat: 'vocab'         },
        { id: 'a1w1t4', en: 'Colors in English (10 core colors)',              pt: 'Cores em inglês (10 principais)',                cat: 'vocab'         },
        { id: 'a1w1t5', en: 'Introduce yourself: My name is… I\'m from…',    pt: 'Apresentar-se: My name is… I\'m from…',          cat: 'speaking'      },
      ],
      extras: [
        { id: 'a1w1e1', en: 'Extra: Vowel sounds A E I O U practice',         pt: 'Extra: Prática das vogais A E I O U',            cat: 'pronunciation' },
        { id: 'a1w1e2', en: 'Extra: Write your name and country in English',   pt: 'Extra: Escreva seu nome e país em inglês',       cat: 'writing'       },
      ],
    },
    {
      week: 2, theme: { en: 'Personal Information & Verb To Be', pt: 'Informações Pessoais & Verbo To Be' },
      tasks: [
        { id: 'a1w2t1', en: 'Subject pronouns: I you he she it we they',      pt: 'Pronomes pessoais: I you he she it we they',     cat: 'grammar'  },
        { id: 'a1w2t2', en: "Verb 'to be': am / is / are",                   pt: "Verbo 'to be': am / is / are",                  cat: 'grammar'  },
        { id: 'a1w2t3', en: 'Countries & nationalities (Brazil → Brazilian)', pt: 'Países e nacionalidades',                       cat: 'vocab'    },
        { id: 'a1w2t4', en: 'Age: How old are you? I\'m __ years old.',      pt: 'Idade: How old are you?',                       cat: 'speaking' },
        { id: 'a1w2t5', en: 'Days of the week + months of the year',         pt: 'Dias da semana + meses do ano',                 cat: 'vocab'    },
      ],
      extras: [
        { id: 'a1w2e1', en: "Extra: to be negative (I'm not / She isn't)",    pt: 'Extra: to be negativo',                         cat: 'grammar'  },
        { id: 'a1w2e2', en: 'Extra: Ask 3 people their name, age and country',pt: 'Extra: Pergunte a 3 pessoas nome, idade e país', cat: 'speaking' },
      ],
    },
    {
      week: 3, theme: { en: 'Articles, Nouns & Objects', pt: 'Artigos, Substantivos & Objetos' },
      tasks: [
        { id: 'a1w3t1', en: 'Articles: a / an / the',                         pt: 'Artigos: a / an / the',                         cat: 'grammar' },
        { id: 'a1w3t2', en: 'Singular & plural nouns (-s / -es)',              pt: 'Singular e plural (-s / -es)',                  cat: 'grammar' },
        { id: 'a1w3t3', en: 'Classroom objects: pen, desk, chair, board…',    pt: 'Objetos da sala: pen, desk, chair…',            cat: 'vocab'   },
        { id: 'a1w3t4', en: 'There is / There are',                           pt: 'There is / There are',                          cat: 'grammar' },
        { id: 'a1w3t5', en: 'Possessive adjectives: my, your, his, her…',    pt: 'Adjetivos possessivos: my, your, his, her…',   cat: 'grammar' },
      ],
      extras: [
        { id: 'a1w3e1', en: 'Extra: 10 irregular plurals (child→children)',   pt: 'Extra: 10 plurais irregulares',                 cat: 'grammar' },
        { id: 'a1w3e2', en: 'Extra: Describe your room in English',           pt: 'Extra: Descreva seu quarto em inglês',          cat: 'writing' },
      ],
    },
    {
      week: 4, theme: { en: 'Simple Present & Daily Routine', pt: 'Simple Present & Rotina Diária' },
      tasks: [
        { id: 'a1w4t1', en: 'Simple Present: I eat / She eats',               pt: 'Simple Present: I eat / She eats',              cat: 'grammar'       },
        { id: 'a1w4t2', en: 'Third person -s: He works / She studies',        pt: 'Terceira pessoa -s: He works / She studies',    cat: 'grammar'       },
        { id: 'a1w4t3', en: '20 action verbs: eat, drink, sleep, work…',     pt: '20 verbos de ação',                             cat: 'vocab'         },
        { id: 'a1w4t4', en: 'Time expressions: in the morning, at night',     pt: 'Expressões de tempo',                           cat: 'vocab'         },
        { id: 'a1w4t5', en: 'Write 5 sentences about your daily routine',     pt: 'Escreva 5 frases sobre sua rotina diária',      cat: 'writing'       },
      ],
      extras: [
        { id: 'a1w4e1', en: 'Extra: Adverbs of frequency (always, usually, never)', pt: 'Extra: Advérbios de frequência',          cat: 'grammar'   },
        { id: 'a1w4e2', en: 'Extra: Watch a 3-min English routine video',     pt: 'Extra: Assista um vídeo de 3 min sobre rotina', cat: 'listening' },
      ],
    },
  ],
  A2: [
    {
      week: 1, theme: { en: 'Past Simple', pt: 'Simple Past' },
      tasks: [
        { id: 'a2w1t1', en: 'Regular verbs + -ed: worked, played, watched',   pt: 'Verbos regulares + -ed',                        cat: 'grammar'  },
        { id: 'a2w1t2', en: 'Top 30 irregular verbs: go→went, have→had…',    pt: '30 verbos irregulares',                         cat: 'grammar'  },
        { id: 'a2w1t3', en: "Negatives & questions: didn't / Did you…?",      pt: "Negativos e perguntas: didn't / Did you…?",     cat: 'grammar'  },
        { id: 'a2w1t4', en: 'Time markers: yesterday, last week, ago',        pt: 'Marcadores temporais',                          cat: 'vocab'    },
        { id: 'a2w1t5', en: 'Write a paragraph about last weekend',           pt: 'Escreva um parágrafo sobre o último fim de semana', cat: 'writing' },
      ],
      extras: [
        { id: 'a2w1e1', en: 'Extra: Spelling rules for -ed (stopped, tried)', pt: 'Extra: Regras de ortografia do -ed',            cat: 'grammar' },
        { id: 'a2w1e2', en: 'Extra: Irregular verbs quiz',                    pt: 'Extra: Quiz de verbos irregulares',             cat: 'grammar' },
      ],
    },
    {
      week: 2, theme: { en: 'Comparatives & Superlatives', pt: 'Comparativos & Superlativos' },
      tasks: [
        { id: 'a2w2t1', en: 'Adjectives: big, small, old, new, expensive…',  pt: 'Adjetivos',                                     cat: 'vocab'   },
        { id: 'a2w2t2', en: 'Comparatives: bigger than, more expensive than', pt: 'Comparativos',                                  cat: 'grammar' },
        { id: 'a2w2t3', en: 'Superlatives: the biggest, the most expensive',  pt: 'Superlativos',                                  cat: 'grammar' },
        { id: 'a2w2t4', en: 'Irregular: good→better→best / bad→worse→worst', pt: 'Irregular: good→better→best',                   cat: 'grammar' },
        { id: 'a2w2t5', en: 'Compare 2 cities in writing',                    pt: 'Compare 2 cidades por escrito',                 cat: 'writing' },
      ],
      extras: [
        { id: 'a2w2e1', en: 'Extra: As … as (She is as tall as her brother)', pt: 'Extra: As … as',                               cat: 'grammar' },
        { id: 'a2w2e2', en: 'Extra: Appearance & personality adjectives (20)', pt: 'Extra: Adjetivos de aparência e personalidade', cat: 'vocab'  },
      ],
    },
    {
      week: 3, theme: { en: 'Future: Going To & Will', pt: 'Futuro: Going To & Will' },
      tasks: [
        { id: 'a2w3t1', en: 'Going to + verb (plans & intentions)',           pt: 'Going to + verbo',                              cat: 'grammar'  },
        { id: 'a2w3t2', en: 'Will + verb (decisions, predictions, promises)', pt: 'Will + verbo',                                  cat: 'grammar'  },
        { id: 'a2w3t3', en: 'Present Continuous for future arrangements',     pt: 'Present Continuous para compromissos futuros',  cat: 'grammar'  },
        { id: 'a2w3t4', en: 'Future time words: tomorrow, next week, soon',   pt: 'Palavras de futuro',                            cat: 'vocab'    },
        { id: 'a2w3t5', en: 'Talk about your plans for next month',           pt: 'Fale sobre seus planos para o próximo mês',     cat: 'speaking' },
      ],
      extras: [
        { id: 'a2w3e1', en: 'Extra: going to vs will (10 practice sentences)', pt: 'Extra: going to vs will',                     cat: 'grammar' },
        { id: 'a2w3e2', en: 'Extra: Write predictions about the world in 10 years', pt: 'Extra: Previsões sobre o mundo em 10 anos', cat: 'writing' },
      ],
    },
    {
      week: 4, theme: { en: 'Modal Verbs & Everyday English', pt: 'Verbos Modais & Inglês Cotidiano' },
      tasks: [
        { id: 'a2w4t1', en: "Can / Can't — ability and permission",           pt: "Can / Can't — habilidade e permissão",          cat: 'grammar'  },
        { id: 'a2w4t2', en: "Must / Mustn't — obligation and prohibition",    pt: "Must / Mustn't — obrigação e proibição",        cat: 'grammar'  },
        { id: 'a2w4t3', en: "Should / Shouldn't — giving advice",             pt: "Should / Shouldn't — dar conselhos",            cat: 'grammar'  },
        { id: 'a2w4t4', en: 'False friends: actually, eventually, library',   pt: 'Falsos cognatos',                               cat: 'vocab'    },
        { id: 'a2w4t5', en: "Shopping dialogue: How much is…? I'd like…",    pt: 'Diálogo de compras',                            cat: 'speaking' },
      ],
      extras: [
        { id: 'a2w4e1', en: 'Extra: Prepositions of place (in, on, at, next to)', pt: 'Extra: Preposições de lugar',              cat: 'grammar' },
        { id: 'a2w4e2', en: 'Extra: Food & restaurant vocabulary (25 words)', pt: 'Extra: Vocabulário de comida e restaurante',    cat: 'vocab'   },
      ],
    },
  ],
  B1: [
    {
      week: 1, theme: { en: 'Present Perfect', pt: 'Present Perfect' },
      tasks: [
        { id: 'b1w1t1', en: 'Present Perfect: have/has + past participle',    pt: 'Present Perfect: have/has + particípio',        cat: 'grammar' },
        { id: 'b1w1t2', en: 'Ever / Never / Already / Yet / Just / Still',    pt: 'Ever / Never / Already / Yet / Just / Still',   cat: 'grammar' },
        { id: 'b1w1t3', en: 'Simple Past vs. Present Perfect',                pt: 'Simple Past vs. Present Perfect',               cat: 'grammar' },
        { id: 'b1w1t4', en: 'For and Since',                                  pt: 'For and Since',                                 cat: 'grammar' },
        { id: 'b1w1t5', en: 'Write about your life experiences (100 words)',  pt: 'Escreva sobre suas experiências',               cat: 'writing' },
      ],
      extras: [
        { id: 'b1w1e1', en: 'Extra: Present Perfect Continuous',              pt: 'Extra: Present Perfect Continuous',             cat: 'grammar' },
        { id: 'b1w1e2', en: 'Extra: 20 common past participles quiz',         pt: 'Extra: Quiz com 20 particípios',                cat: 'grammar' },
      ],
    },
    {
      week: 2, theme: { en: 'Conditionals', pt: 'Condicionais' },
      tasks: [
        { id: 'b1w2t1', en: 'Zero Conditional: If you heat ice, it melts.',   pt: 'Zero Conditional',                              cat: 'grammar'  },
        { id: 'b1w2t2', en: "First Conditional: If it rains, I'll stay home.", pt: 'First Conditional',                           cat: 'grammar'  },
        { id: 'b1w2t3', en: 'Second Conditional: If I had money, I would travel.', pt: 'Second Conditional',                      cat: 'grammar'  },
        { id: 'b1w2t4', en: 'I wish + past simple (present wishes)',          pt: 'I wish + past simple',                          cat: 'grammar'  },
        { id: 'b1w2t5', en: 'Discussion: What would you do if you won the lottery?', pt: 'Discussão: E se você ganhasse na loteria?', cat: 'speaking' },
      ],
      extras: [
        { id: 'b1w2e1', en: 'Extra: Unless, as long as, provided that',       pt: 'Extra: Unless, as long as, provided that',      cat: 'grammar' },
        { id: 'b1w2e2', en: 'Extra: 5 first + 5 second conditional sentences', pt: 'Extra: 5 first + 5 second conditional',       cat: 'writing' },
      ],
    },
    {
      week: 3, theme: { en: 'Passive Voice & Reported Speech', pt: 'Voz Passiva & Discurso Indireto' },
      tasks: [
        { id: 'b1w3t1', en: 'Passive: be + past participle (Present & Past)', pt: 'Passiva: be + particípio',                     cat: 'grammar'  },
        { id: 'b1w3t2', en: 'When to use passive vs. active voice',           pt: 'Passiva vs. ativa',                             cat: 'grammar'  },
        { id: 'b1w3t3', en: 'Reported Speech: She said she was tired.',       pt: 'Discurso Indireto',                             cat: 'grammar'  },
        { id: 'b1w3t4', en: 'Tense backshift in reported speech',             pt: 'Recuo de tempos no discurso indireto',          cat: 'grammar'  },
        { id: 'b1w3t5', en: 'Read an article & report the main ideas',        pt: 'Leia um artigo e relate as ideias principais',  cat: 'reading'  },
      ],
      extras: [
        { id: 'b1w3e1', en: 'Extra: Passive with modals (can be done)',       pt: 'Extra: Passiva com modais',                     cat: 'grammar' },
        { id: 'b1w3e2', en: 'Extra: Reporting verbs (asked, told, explained)', pt: 'Extra: Verbos de relato',                     cat: 'grammar' },
      ],
    },
    {
      week: 4, theme: { en: 'Gerunds, Infinitives & Linking Words', pt: 'Gerúndios, Infinitivos & Conectivos' },
      tasks: [
        { id: 'b1w4t1', en: 'Verbs + Gerund: enjoy, finish, avoid, suggest',  pt: 'Verbos + Gerúndio',                             cat: 'grammar' },
        { id: 'b1w4t2', en: 'Verbs + Infinitive: want, decide, plan, hope',   pt: 'Verbos + Infinitivo',                           cat: 'grammar' },
        { id: 'b1w4t3', en: 'Linking words: however, although, despite, therefore', pt: 'Conectivos',                             cat: 'grammar' },
        { id: 'b1w4t4', en: 'Essay structure: topic, body, conclusion',       pt: 'Estrutura de redação',                          cat: 'writing' },
        { id: 'b1w4t5', en: 'Write a 150-word opinion paragraph',             pt: 'Parágrafo de opinião (150 palavras)',           cat: 'writing' },
      ],
      extras: [
        { id: 'b1w4e1', en: 'Extra: stop/try/remember + gerund vs infinitive', pt: 'Extra: gerúndio vs infinitivo',               cat: 'grammar' },
        { id: 'b1w4e2', en: 'Extra: 5 sentences per linking word',            pt: 'Extra: 5 frases por conectivo',                 cat: 'writing' },
      ],
    },
  ],
  B2: [
    {
      week: 1, theme: { en: 'Advanced Conditionals', pt: 'Condicionais Avançados' },
      tasks: [
        { id: 'b2w1t1', en: 'Third Conditional: If I had studied, I would have passed.', pt: 'Third Conditional',                 cat: 'grammar' },
        { id: 'b2w1t2', en: 'Mixed Conditionals: past cause → present result', pt: 'Mixed Conditionals',                         cat: 'grammar' },
        { id: 'b2w1t3', en: 'I wish + past perfect (regrets)',                pt: 'I wish + past perfect',                         cat: 'grammar' },
        { id: 'b2w1t4', en: 'Would rather / Had better / It\'s time',        pt: "Would rather / Had better / It's time",         cat: 'grammar' },
        { id: 'b2w1t5', en: 'Write 3 hypothetical scenarios',                pt: 'Escreva 3 cenários hipotéticos',                cat: 'writing' },
      ],
      extras: [
        { id: 'b2w1e1', en: 'Extra: Inversion: Had I known… / Were I you…', pt: 'Extra: Inversão',                               cat: 'grammar'  },
        { id: 'b2w1e2', en: 'Extra: Debate – Regret or never try?',          pt: 'Extra: Debate',                                 cat: 'speaking' },
      ],
    },
    {
      week: 2, theme: { en: 'Advanced Passives & Causatives', pt: 'Passivas Avançadas & Causativas' },
      tasks: [
        { id: 'b2w2t1', en: 'Passive in all tenses: will be done, has been done…', pt: 'Passiva em todos os tempos',             cat: 'grammar' },
        { id: 'b2w2t2', en: 'Causative: have/get something done',             pt: 'Causativa: have/get something done',            cat: 'grammar' },
        { id: 'b2w2t3', en: 'Impersonal passive: It is said that…',          pt: 'Passiva impessoal',                             cat: 'grammar' },
        { id: 'b2w2t4', en: 'Academic vocabulary: analyze, evaluate, contrast', pt: 'Vocabulário acadêmico',                     cat: 'vocab'   },
        { id: 'b2w2t5', en: 'Write a news summary using 5+ passive structures', pt: 'Resumo com estruturas passivas',             cat: 'writing' },
      ],
      extras: [
        { id: 'b2w2e1', en: 'Extra: Need doing / want doing',                pt: 'Extra: Need doing / want doing',                cat: 'grammar' },
        { id: 'b2w2e2', en: 'Extra: Write a formal report (200 words)',       pt: 'Extra: Relatório formal (200 palavras)',         cat: 'writing' },
      ],
    },
    {
      week: 3, theme: { en: 'Emphasis & Cleft Sentences', pt: 'Ênfase & Frases Clivadas' },
      tasks: [
        { id: 'b2w3t1', en: 'Cleft sentences: It is English that I study…',  pt: 'Frases clivadas',                               cat: 'grammar'  },
        { id: 'b2w3t2', en: 'Fronting for emphasis: Only then did I understand.', pt: 'Fronting para ênfase',                     cat: 'grammar'  },
        { id: 'b2w3t3', en: 'Emphatic do/does/did: I do believe you!',        pt: 'Do/does/did enfático',                          cat: 'grammar'  },
        { id: 'b2w3t4', en: 'Idioms & collocations (30 phrases)',             pt: 'Expressões e colocações (30 frases)',            cat: 'vocab'    },
        { id: 'b2w3t5', en: 'Debate: argue for and against a topic',          pt: 'Debate: a favor e contra',                      cat: 'speaking' },
      ],
      extras: [
        { id: 'b2w3e1', en: 'Extra: Negative inversion: Rarely have I seen…', pt: 'Extra: Inversão negativa',                    cat: 'grammar' },
        { id: 'b2w3e2', en: 'Extra: Write a persuasive letter',               pt: 'Extra: Carta persuasiva',                       cat: 'writing' },
      ],
    },
    {
      week: 4, theme: { en: 'Register & Advanced Writing', pt: 'Registro & Escrita Avançada' },
      tasks: [
        { id: 'b2w4t1', en: 'Formal vs informal register',                    pt: 'Registro formal vs informal',                   cat: 'grammar' },
        { id: 'b2w4t2', en: 'Cohesive devices: reference, substitution, ellipsis', pt: 'Dispositivos coesivos',                  cat: 'grammar' },
        { id: 'b2w4t3', en: 'Advanced punctuation: semicolons, dashes, colons', pt: 'Pontuação avançada',                         cat: 'grammar' },
        { id: 'b2w4t4', en: 'Word families & collocations (30 sets)',         pt: 'Famílias de palavras (30 grupos)',               cat: 'vocab'   },
        { id: 'b2w4t5', en: 'Write a formal 250-word argumentative essay',    pt: 'Redação argumentativa formal (250 palavras)',    cat: 'writing' },
      ],
      extras: [
        { id: 'b2w4e1', en: 'Extra: Hedging: It seems that / It is likely that', pt: 'Extra: Atenuação',                         cat: 'grammar' },
        { id: 'b2w4e2', en: 'Extra: Formal and informal versions of the same email', pt: 'Extra: Versões formal e informal do mesmo e-mail', cat: 'writing' },
      ],
    },
  ],
  C1: [
    {
      week: 1, theme: { en: 'Advanced Grammar & Subjunctive', pt: 'Gramática Avançada & Subjuntivo' },
      tasks: [
        { id: 'c1w1t1', en: 'Subjunctive: I suggest he be… / It\'s vital she attend…', pt: 'Subjuntivo',                        cat: 'grammar'  },
        { id: 'c1w1t2', en: 'Nominalization: destroy→destruction, decide→decision', pt: 'Nominalização',                        cat: 'grammar'  },
        { id: 'c1w1t3', en: 'Advanced modals: may well, might have, should have', pt: 'Modais avançados',                       cat: 'grammar'  },
        { id: 'c1w1t4', en: 'Ellipsis & substitution in formal texts',        pt: 'Elipse e substituição',                         cat: 'grammar'  },
        { id: 'c1w1t5', en: 'Analyze a complex text for advanced grammar',    pt: 'Analisar texto complexo',                       cat: 'reading'  },
      ],
      extras: [
        { id: 'c1w1e1', en: "Extra: It's time / It's high time + past simple", pt: "Extra: It's high time",                    cat: 'grammar' },
        { id: 'c1w1e2', en: 'Extra: Paragraph using 5 nominalized structures', pt: 'Extra: Parágrafo com nominalizações',       cat: 'writing' },
      ],
    },
    {
      week: 2, theme: { en: 'Sophisticated Vocabulary & Style', pt: 'Vocabulário Sofisticado & Estilo' },
      tasks: [
        { id: 'c1w2t1', en: 'Academic Word List — 40 high-frequency words',  pt: 'Lista acadêmica — 40 palavras',                 cat: 'vocab'   },
        { id: 'c1w2t2', en: 'Euphemisms, understatement & hedging language',  pt: 'Eufemismos e atenuação',                        cat: 'vocab'   },
        { id: 'c1w2t3', en: 'Rhetorical devices: metaphor, alliteration, anaphora', pt: 'Recursos retóricos',                    cat: 'vocab'   },
        { id: 'c1w2t4', en: 'Connotation vs denotation in word choice',       pt: 'Conotação vs denotação',                        cat: 'vocab'   },
        { id: 'c1w2t5', en: 'Same paragraph in 3 styles: formal/neutral/informal', pt: 'Mesmo parágrafo em 3 estilos',           cat: 'writing' },
      ],
      extras: [
        { id: 'c1w2e1', en: 'Extra: 20 advanced phrasal verbs + formal equivalents', pt: 'Extra: 20 phrasal verbs avançados',   cat: 'vocab'    },
        { id: 'c1w2e2', en: 'Extra: Analyze a political speech for rhetoric',  pt: 'Extra: Analisar discurso político',           cat: 'reading'  },
      ],
    },
    {
      week: 3, theme: { en: 'Critical Listening & Fluency', pt: 'Escuta Crítica & Fluência' },
      tasks: [
        { id: 'c1w3t1', en: 'Listen to native-speed content & summarize',    pt: 'Ouvir conteúdo nativo e resumir',               cat: 'listening' },
        { id: 'c1w3t2', en: 'Identify implicit meaning, tone and attitude',   pt: 'Identificar significado implícito e tom',       cat: 'listening' },
        { id: 'c1w3t3', en: 'Understand irony, humour and cultural references', pt: 'Entender ironia e referências culturais',    cat: 'listening' },
        { id: 'c1w3t4', en: 'Extended discussion with natural turn-taking',   pt: 'Discussão longa com troca de turnos',           cat: 'speaking'  },
        { id: 'c1w3t5', en: '5-min talk on a complex topic (record yourself)', pt: 'Apresentação de 5 min sobre tema complexo',   cat: 'speaking'  },
      ],
      extras: [
        { id: 'c1w3e1', en: 'Extra: Watch a TED Talk & critique the arguments', pt: 'Extra: TED Talk e critique os argumentos', cat: 'listening' },
        { id: 'c1w3e2', en: 'Extra: Debate using podcast/documentary materials', pt: 'Extra: Debate com podcast/documentário',   cat: 'speaking'  },
      ],
    },
    {
      week: 4, theme: { en: 'C1 Mastery & Self-Assessment', pt: 'Domínio C1 & Autoavaliação' },
      tasks: [
        { id: 'c1w4t1', en: 'Write a 350-word argumentative essay (C1 standard)', pt: 'Redação argumentativa de 350 palavras (C1)', cat: 'writing'  },
        { id: 'c1w4t2', en: 'Advanced email & report writing conventions',    pt: 'E-mail avançado e relatório',                   cat: 'writing'  },
        { id: 'c1w4t3', en: 'Evaluate argument: evidence, bias, assumptions', pt: 'Avaliar argumento: evidências e viés',          cat: 'reading'  },
        { id: 'c1w4t4', en: 'Self-evaluation: identify remaining fluency gaps', pt: 'Autoavaliação: lacunas de fluência',          cat: 'speaking' },
        { id: 'c1w4t5', en: 'Create a personal learning plan towards C2',     pt: 'Plano de aprendizado pessoal rumo ao C2',      cat: 'writing'  },
      ],
      extras: [
        { id: 'c1w4e1', en: 'Extra: Portfolio review — collect your best written work', pt: 'Extra: Revisão de portfólio',       cat: 'writing' },
        { id: 'c1w4e2', en: 'Extra: Peer feedback — exchange and critique essays', pt: 'Extra: Feedback entre pares',            cat: 'writing' },
      ],
    },
  ],
}
