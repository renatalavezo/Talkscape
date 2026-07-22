// Travel journey: one hand-picked video lesson per week (theme order matches the
// journey weeks in journeys.js). Curated from established teaching channels
// (Oxford Online English, engVid and well-known ESL channels) so each link is a
// single lesson that matches the week's topic.
const TRAVEL_VIDEO = {
  1:  {type:'video',label:'Inglês no aeroporto e check-in (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/airport-english'},
  2:  {type:'video',label:'Inglês no hotel (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/hotel-english'},
  3:  {type:'video',label:'Transporte e como se locomover (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/talk-about-transport-and-driving'},
  4:  {type:'video',label:'Pedir comida no restaurante (Travel English)',url:'https://www.youtube.com/watch?v=q3O2hlbExV4'},
  5:  {type:'video',label:'Fazer compras (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/going-shopping-in-english'},
  6:  {type:'video',label:'Pedir e dar direções (Everyday English Dialogues)',url:'https://www.youtube.com/watch?v=Lms1qBpfYIM'},
  7:  {type:'video',label:'Na farmácia: sintomas e remédios',url:'https://www.youtube.com/watch?v=ifPUfoGBaL8'},
  8:  {type:'video',label:'Turismo e passeios (Travel & Tourism)',url:'https://www.youtube.com/watch?v=QnxESeRB2j4'},
  9:  {type:'video',label:'Fazer uma reserva de hotel',url:'https://www.youtube.com/watch?v=6KpyzK6y8Oc'},
  10: {type:'video',label:'Etiqueta e boas maneiras (engVid)',url:'https://www.engvid.com/english-culture-manners/'},
  11: {type:'video',label:'Bagagem perdida e problemas de viagem',url:'https://www.youtube.com/watch?v=Hx29GChQogo'},
  12: {type:'video',label:'Small talk: conversar com locais',url:'https://www.youtube.com/watch?v=WGoIoDuf83o'},
}

export const JOURNEY_RESOURCES = {
  core: {
    beginner: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'}],
      2: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      3: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      4: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      5: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      6: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      7: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      8: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      9: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      10:[{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      11:[{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      12:[{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
    intermediate: {
      1: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'}],
      2: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      3: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      4: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'reading',label:'Breaking News English',url:'https://www.breakingnewsenglish.com'}],
      5: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      6: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      7: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'English Grammar AT',url:'https://www.english-grammar.at'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      8: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      9: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'reading',label:'Breaking News English',url:'https://www.breakingnewsenglish.com'}],
      10:[{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      11:[{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      12:[{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'Breaking News English',url:'https://www.breakingnewsenglish.com'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
    advanced: {
      1: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'}],
      2: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      3: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      4: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      5: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'}],
      6: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'}],
      7: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'}],
      8: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      9: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'}],
      10:[{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      11:[{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'}],
      12:[{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
  },
  business: {
    beginner: {
      1: [{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      2: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      3: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      4: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      5: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      6: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      7: [{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      8: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      9: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      10:[{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      11:[{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      12:[{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
    },
    intermediate: {
      1: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'}],
      2: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'}],
      3: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'}],
      4: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'}],
      5: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'}],
      6: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      7: [{type:'video',label:'English with Jennifer',url:'https://www.youtube.com/c/JenniferESL'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'}],
      8: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      9: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      10:[{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'}],
      11:[{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'}],
      12:[{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
    },
    advanced: {
      1: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      2: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'}],
      3: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      4: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      5: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      6: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      7: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      8: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      9: [{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'video',label:'EngVid – Business',url:'https://www.engvid.com/topic/business-english/'}],
      10:[{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      11:[{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      12:[{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'Business English Pod',url:'https://www.businessenglishpod.com'},{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'}],
    },
  },
  travel: {
    beginner: {
      1: [TRAVEL_VIDEO[1],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      2: [TRAVEL_VIDEO[2],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      3: [TRAVEL_VIDEO[3],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      4: [TRAVEL_VIDEO[4],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      5: [TRAVEL_VIDEO[5],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      6: [TRAVEL_VIDEO[6],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      7: [TRAVEL_VIDEO[7],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      8: [TRAVEL_VIDEO[8],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      9: [TRAVEL_VIDEO[9],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      10:[TRAVEL_VIDEO[10],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      11:[TRAVEL_VIDEO[11],{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      12:[TRAVEL_VIDEO[12],{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
    },
    intermediate: {
      1: [TRAVEL_VIDEO[1],{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      2: [TRAVEL_VIDEO[2],{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      3: [TRAVEL_VIDEO[3],{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      4: [TRAVEL_VIDEO[4],{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      5: [TRAVEL_VIDEO[5],{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      6: [TRAVEL_VIDEO[6],{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      7: [TRAVEL_VIDEO[7],{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      8: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},TRAVEL_VIDEO[8]],
      9: [{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'}],
      10:[{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      11:[TRAVEL_VIDEO[11],{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      12:[{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'}],
    },
    advanced: {
      1: [TRAVEL_VIDEO[1],{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'}],
      2: [TRAVEL_VIDEO[2],{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      3: [TRAVEL_VIDEO[3],{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      4: [{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      5: [TRAVEL_VIDEO[5],{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'}],
      6: [TRAVEL_VIDEO[6],{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'video',label:'Direções: prática de conversa',url:'https://www.youtube.com/watch?v=DPYJQSA-x50'}],
      7: [TRAVEL_VIDEO[7],{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      8: [{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},TRAVEL_VIDEO[8]],
      9: [TRAVEL_VIDEO[9],{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      10:[TRAVEL_VIDEO[10],{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      11:[{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'}],
      12:[{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
    },
  },
  conversation: {
    beginner: {
      1: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      2: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      3: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      4: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      5: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      6: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      7: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      8: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      9: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      10:[{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      11:[{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      12:[{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
    },
    intermediate: {
      1: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      2: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      3: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'}],
      4: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      5: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'ConversationExchange',url:'https://www.conversationexchange.com'}],
      6: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'}],
      7: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'}],
      8: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      9: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      10:[{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'reading',label:'Breaking News English',url:'https://www.breakingnewsenglish.com'}],
      11:[{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'ConversationExchange',url:'https://www.conversationexchange.com'}],
      12:[{type:'exercise',label:'ConversationExchange',url:'https://www.conversationexchange.com'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
    },
    advanced: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'}],
      2: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'}],
      3: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      4: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'}],
      5: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      6: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      7: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      8: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'}],
      9: [{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      10:[{type:'video',label:'English with Jennifer',url:'https://www.youtube.com/c/JenniferESL'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'}],
      11:[{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'exercise',label:'ConversationExchange',url:'https://www.conversationexchange.com'},{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'}],
      12:[{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
    },
  },
  grammar: {
    beginner: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'}],
      2: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      3: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'}],
      4: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      5: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'}],
      6: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      7: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'English Grammar AT',url:'https://www.english-grammar.at'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      8: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'English Grammar AT',url:'https://www.english-grammar.at'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      9: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      10:[{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'}],
      11:[{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar/a1-a2-grammar'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      12:[{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
    intermediate: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      2: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'}],
      3: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'}],
      4: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      5: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      6: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'English Grammar AT',url:'https://www.english-grammar.at'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'}],
      7: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      8: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      9: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      10:[{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'}],
      11:[{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'}],
      12:[{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
    advanced: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      2: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Media Lab',url:'https://www.englishmedialab.com/grammar.html'}],
      3: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'}],
      4: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'}],
      5: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      6: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      7: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'}],
      8: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'}],
      9: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'}],
      10:[{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Perfect English Grammar',url:'https://www.perfect-english-grammar.com'},{type:'exercise',label:'English Grammar AT',url:'https://www.english-grammar.at'}],
      11:[{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'},{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'}],
      12:[{type:'exercise',label:'EnglishGrammar.org',url:'https://www.englishgrammar.org/exercises/'},{type:'exercise',label:'British Council – Grammar',url:'https://learnenglish.britishcouncil.org/grammar'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
  },
  popculture: {
    beginner: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      2: [{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      3: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      4: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      5: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      6: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      7: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      8: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      9: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      10:[{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'video',label:'TED-Ed',url:'https://ed.ted.com'}],
      11:[{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      12:[{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
    },
    intermediate: {
      1: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'}],
      2: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      3: [{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      4: [{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      5: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      6: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'reading',label:'Breaking News English',url:'https://www.breakingnewsenglish.com'}],
      7: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'}],
      8: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'reading',label:'Breaking News English',url:'https://www.breakingnewsenglish.com'}],
      9: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'}],
      10:[{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      11:[{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'}],
      12:[{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'}],
    },
    advanced: {
      1: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      2: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      3: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      4: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      5: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      6: [{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      7: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      8: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      9: [{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'}],
      10:[{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'}],
      11:[{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      12:[{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
    },
  },
  academic: {
    beginner: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      2: [{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'reading',label:'Breaking News English',url:'https://www.breakingnewsenglish.com'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      3: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'}],
      4: [{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'},{type:'video',label:'TED-Ed',url:'https://ed.ted.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      5: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      6: [{type:'video',label:'TED-Ed',url:'https://ed.ted.com'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'}],
      7: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary/a1-a2-vocabulary'},{type:'exercise',label:'ESL Tower',url:'https://www.esltower.com/grammarquizzes.html'}],
      8: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      9: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'ESL Lounge',url:'https://www.esllounge.com/student/grammar-exercises.php'}],
      10:[{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'video',label:'TED-Ed',url:'https://ed.ted.com'}],
      11:[{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading/b1-reading'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'}],
      12:[{type:'video',label:'TED-Ed',url:'https://ed.ted.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
    },
    intermediate: {
      1: [{type:'reading',label:'FutureLearn – IELTS',url:'https://www.futurelearn.com/courses/ielts'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'edX – IELTS Prep',url:'https://www.edx.org/learn/test-prep/the-university-of-queensland-ielts-academic-test-preparation'}],
      2: [{type:'reading',label:'FutureLearn – IELTS',url:'https://www.futurelearn.com/courses/ielts'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'}],
      3: [{type:'reading',label:'FutureLearn – IELTS',url:'https://www.futurelearn.com/courses/ielts'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening'},{type:'exercise',label:'edX – IELTS Prep',url:'https://www.edx.org/learn/test-prep/the-university-of-queensland-ielts-academic-test-preparation'}],
      4: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'reading',label:'FutureLearn – Academic Writing',url:'https://www.futurelearn.com/courses/english-for-study'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'}],
      5: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'reading',label:'FutureLearn – Academic Writing',url:'https://www.futurelearn.com/courses/english-for-study'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'}],
      6: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'},{type:'reading',label:'VOA Learning English',url:'https://learningenglish.voanews.com'}],
      7: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      8: [{type:'reading',label:'FutureLearn – Academic Writing',url:'https://www.futurelearn.com/courses/english-for-study'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'video',label:'EngVid',url:'https://www.engvid.com'}],
      9: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'reading',label:'FutureLearn – IELTS Writing',url:'https://www.futurelearn.com/courses/how-to-pass-ielts-writing'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'}],
      10:[{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'},{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'}],
      11:[{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'}],
      12:[{type:'exercise',label:'edX – IELTS Prep',url:'https://www.edx.org/learn/test-prep/the-university-of-queensland-ielts-academic-test-preparation'},{type:'reading',label:'FutureLearn – IELTS',url:'https://www.futurelearn.com/courses/ielts'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
    advanced: {
      1: [{type:'reading',label:'FutureLearn – IELTS Writing',url:'https://www.futurelearn.com/courses/how-to-pass-ielts-writing'},{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Coursera – IELTS',url:'https://www.coursera.org/specializations/ielts-preparation'}],
      2: [{type:'reading',label:'FutureLearn – IELTS Writing',url:'https://www.futurelearn.com/courses/how-to-pass-ielts-writing'},{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Coursera – IELTS',url:'https://www.coursera.org/specializations/ielts-preparation'}],
      3: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'reading',label:'FutureLearn – IELTS',url:'https://www.futurelearn.com/courses/ielts'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      4: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'reading',label:'FutureLearn – IELTS',url:'https://www.futurelearn.com/courses/ielts'},{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'}],
      5: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      6: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'reading',label:'FutureLearn – Academic Writing',url:'https://www.futurelearn.com/courses/english-for-study'}],
      7: [{type:'reading',label:'FutureLearn – Academic Writing',url:'https://www.futurelearn.com/courses/english-for-study'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'video',label:'EngVid',url:'https://www.engvid.com'}],
      8: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'},{type:'reading',label:'British Council – Reading',url:'https://learnenglish.britishcouncil.org/skills/reading'}],
      9: [{type:'reading',label:'FutureLearn – Academic Writing',url:'https://www.futurelearn.com/courses/english-for-study'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'video',label:'EngVid',url:'https://www.engvid.com'}],
      10:[{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      11:[{type:'reading',label:'FutureLearn – Academic Writing',url:'https://www.futurelearn.com/courses/english-for-study'},{type:'exercise',label:'British Council – Writing',url:'https://learnenglish.britishcouncil.org/skills/writing'},{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'}],
      12:[{type:'exercise',label:'edX – IELTS Prep',url:'https://www.edx.org/learn/test-prep/the-university-of-queensland-ielts-academic-test-preparation'},{type:'exercise',label:'Coursera – IELTS',url:'https://www.coursera.org/specializations/ielts-preparation'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
  },
  speaking: {
    beginner: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'}],
      2: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      3: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      4: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      5: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      6: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      7: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'}],
      8: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      9: [{type:'video',label:'EnglishClass101',url:'https://www.youtube.com/c/EnglishClass101'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      10:[{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Listening',url:'https://learnenglish.britishcouncil.org/skills/listening/a1-listening'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      11:[{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      12:[{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
    intermediate: {
      1: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'}],
      2: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'}],
      3: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      4: [{type:'podcast',label:'VOA Learning English',url:'https://learningenglish.voanews.com'},{type:'video',label:'Go Natural English',url:'https://www.youtube.com/c/GoNaturalEnglish'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      5: [{type:'video',label:'Go Natural English',url:'https://www.youtube.com/c/GoNaturalEnglish'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
      6: [{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'}],
      7: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      8: [{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'ConversationExchange',url:'https://www.conversationexchange.com'}],
      9: [{type:'exercise',label:'ConversationExchange',url:'https://www.conversationexchange.com'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      10:[{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      11:[{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      12:[{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'British Council – Speaking',url:'https://learnenglish.britishcouncil.org/skills/speaking'}],
    },
    advanced: {
      1: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'}],
      2: [{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'video',label:'BBC Learning English',url:'https://www.youtube.com/c/bbclearningenglish'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      3: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'video',label:'Go Natural English',url:'https://www.youtube.com/c/GoNaturalEnglish'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      4: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'video',label:'English with Lucy',url:'https://www.youtube.com/c/EnglishwithLucy'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      5: [{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'},{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'}],
      6: [{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'video',label:'Learn English with TV Series',url:'https://www.youtube.com/c/LearnEnglishwithTVSeries'},{type:'podcast',label:'BBC 6 Minute English',url:'https://www.bbc.co.uk/learningenglish/english/features/6-minute-english'}],
      7: [{type:'video',label:'Go Natural English',url:'https://www.youtube.com/c/GoNaturalEnglish'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      8: [{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'video',label:'EngVid',url:'https://www.engvid.com'},{type:'vocab',label:'British Council – Vocabulary',url:'https://learnenglish.britishcouncil.org/vocabulary'}],
      9: [{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'},{type:'exercise',label:'ConversationExchange',url:'https://www.conversationexchange.com'}],
      10:[{type:'video',label:'TED Talks',url:'https://www.ted.com/talks'},{type:'podcast',label:'All Ears English',url:'https://www.allearsenglish.com'},{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'}],
      11:[{type:'exercise',label:'italki',url:'https://www.italki.com/en/community'},{type:'exercise',label:'ConversationExchange',url:'https://www.conversationexchange.com'},{type:'exercise',label:'Speaky',url:'https://www.speaky.com'}],
      12:[{type:'exercise',label:'Vocaroo',url:'https://vocaroo.com'},{type:'video',label:'Go Natural English',url:'https://www.youtube.com/c/GoNaturalEnglish'},{type:'exercise',label:'British Council – Level Test',url:'https://learnenglish.britishcouncil.org'}],
    },
  },
}

// ---------------------------------------------------------------------------
// Topic-matched, level-aware video links.
// Each journey's weekly "video" pointed to a generic channel homepage, so the
// link never matched the week's topic. Below we override every 'video' resource
// in these journeys with a YouTube search pre-filtered to the week's theme AND
// the student's level (básico/intermediário/avançado), so links always match
// the content, suit the level, and never break.
const LEVEL_Q = { beginner: 'for beginners', intermediate: 'intermediate', advanced: 'advanced' }
const ytSearch = (q) => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q).replace(/%20/g, '+')

// [PT label, EN search terms] per week, in the same theme order as journeys.js.
const THEME_VIDEOS = {
  core: {
    1:  ['inglês básico: saudações e apresentações', 'basic english greetings and introductions'],
    2:  ['vocabulário essencial: primeiras palavras', 'essential english vocabulary for beginners'],
    3:  ['entender o inglês falado', 'english listening comprehension practice'],
    4:  ['falar em voz alta: pronúncia', 'english speaking and pronunciation practice'],
    5:  ['leitura sem medo', 'english reading practice for learners'],
    6:  ['escrever seus primeiros textos', 'english writing simple sentences'],
    7:  ['falar sobre o passado', 'english past simple tense lesson'],
    8:  ['planos e o futuro', 'english future tense will and going to'],
    9:  ['situações do dia a dia', 'everyday english conversations daily situations'],
    10: ['descrever pessoas e coisas', 'english describing people and things adjectives'],
    11: ['falar com confiança', 'speak english with confidence'],
    12: ['juntando tudo: revisão', 'english conversation practice review'],
  },
  popculture: {
    1:  ['inglês com filmes e séries', 'learn english with movies and tv shows'],
    2:  ['inglês com música e letras', 'learn english with music and song lyrics'],
    3:  ['inglês nas redes sociais', 'english for social media slang'],
    4:  ['inglês com podcasts e YouTube', 'learn english with podcasts and youtube'],
    5:  ['inglês com livros e literatura', 'learn english with books and literature'],
    6:  ['inglês de esportes e jogos', 'english vocabulary sports and games'],
    7:  ['inglês com notícias e atualidades', 'learn english with news and current events'],
    8:  ['inglês da cultura gastronômica', 'english vocabulary food culture'],
    9:  ['inglês de moda e arte', 'english vocabulary fashion and art'],
    10: ['inglês de tecnologia', 'english vocabulary technology'],
    11: ['inglês de viagens e cultura', 'learn english travel and culture'],
    12: ['inglês no seu dia a dia', 'english in everyday daily life'],
  },
}

for (const [jid, themes] of Object.entries(THEME_VIDEOS)) {
  const journey = JOURNEY_RESOURCES[jid]
  if (!journey) continue
  for (const level of ['beginner', 'intermediate', 'advanced']) {
    const weeks = journey[level]
    if (!weeks) continue
    for (const wk of Object.keys(themes)) {
      const arr = weeks[wk]
      if (!Array.isArray(arr)) continue
      const [label, query] = themes[wk]
      const vid = { type: 'video', label: 'Vídeo: ' + label, url: ytSearch(query + ' ' + LEVEL_Q[level]) }
      let found = false
      arr.forEach((r, i) => { if (r.type === 'video') { arr[i] = vid; found = true } })
      // Weeks with no video get a matching one appended (kept last so existing
      // resource positions — and their fallback order — stay unchanged).
      if (!found) arr.push(vid)
    }
  }
}

// ---------------------------------------------------------------------------
// Curated video lessons: one hand-picked best video per week for Business
// (Travel is curated inline via TRAVEL_VIDEO above). Chosen from established
// teaching channels — Oxford Online English and engVid lesson pages plus
// well-known ESL channels — so each link is a single lesson on the week's topic.
const CURATED_VIDEO = {
  travel: TRAVEL_VIDEO,
  business: {
    1:  {type:'video',label:'Apresentações profissionais: quem você é e o que faz',url:'https://www.youtube.com/watch?v=yMLDiA6Hy-Y'},
    2:  {type:'video',label:'Escrever e-mails em inglês (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/write-emails-in-english'},
    3:  {type:'video',label:'Reuniões e videochamadas: frases essenciais',url:'https://www.youtube.com/watch?v=yxw77hO0Gmc'},
    4:  {type:'video',label:'Fazer apresentações (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/presentations-in-english'},
    5:  {type:'video',label:'Negociar em inglês (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/how-to-negotiate-in-business'},
    6:  {type:'video',label:'Descrever dados e tendências (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/describing-trends-business'},
    7:  {type:'video',label:'Expressões e idioms de negócios (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/business-english-phrases-idioms'},
    8:  {type:'video',label:'Entrevista de emprego em inglês (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/english-job-interview'},
    9:  {type:'video',label:'Networking: fazer contatos (engVid)',url:'https://www.engvid.com/business-english-how-to-network-successfully/'},
    10: {type:'video',label:'Discutir problemas e encontrar soluções',url:'https://www.youtube.com/watch?v=3E7_nzeP2dk'},
    11: {type:'video',label:'Comunicação intercultural nos negócios',url:'https://www.youtube.com/watch?v=QjEDxlzZnIo'},
    12: {type:'video',label:'Linguagem diplomática: comunicação avançada',url:'https://www.youtube.com/watch?v=-f4Gpx071UQ'},
  },
  grammar: {
    1:  {type:'video',label:'Artigos: a, an, the (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/5-levels-english-grammar-articles'},
    2:  {type:'video',label:'Preposições: at, on, in (engVid)',url:'https://www.engvid.com/prepositions-of-place-at-on-in-grammar/'},
    3:  {type:'video',label:'Presente: simple x continuous (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/5-levels-present-simple-present-continuous'},
    4:  {type:'video',label:'Falar sobre o passado (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/talk-about-the-past-in-english'},
    5:  {type:'video',label:'Falar sobre o futuro (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/talk-about-future'},
    6:  {type:'video',label:'Verbos modais (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/english-modal-verbs-introduction'},
    7:  {type:'video',label:'Condicionais: do zero ao terceiro (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/5-levels-conditional-sentences'},
    8:  {type:'video',label:'Voz passiva (Oxford Online English)',url:'https://www.oxfordonlineenglish.com/passive-voice'},
    9:  {type:'video',label:'Orações relativas (British Council)',url:'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/relative-clauses-defining-relative-clauses'},
    10: {type:'video',label:'Erros comuns de gramática (engVid)',url:'https://www.engvid.com/8-common-grammar-mistakes-in-english/'},
    11: {type:'video',label:'Gerúndio e infinitivo',url:'https://www.youtube.com/watch?v=KQWvKIBiuS0'},
    12: {type:'video',label:'Estruturas avançadas: inversão e cleft',url:'https://www.youtube.com/watch?v=MzFdq4aKPh4'},
  },
}

for (const [jid, map] of Object.entries(CURATED_VIDEO)) {
  const journey = JOURNEY_RESOURCES[jid]
  if (!journey) continue
  for (const level of ['beginner', 'intermediate', 'advanced']) {
    const weeks = journey[level]
    if (!weeks) continue
    for (const wk of Object.keys(map)) {
      const arr = weeks[wk]
      if (!Array.isArray(arr)) continue
      let found = false
      arr.forEach((r, i) => { if (r.type === 'video') { arr[i] = map[wk]; found = true } })
      if (!found) arr.push(map[wk])
    }
  }
}

export const TYPE_ICON = { video:'video', podcast:'listening', reading:'reading', exercise:'pen', vocab:'bookOpen' }

// Preferred resource type(s) for each activity category
const CAT_TO_TYPES = {
  pronunciation: ['video', 'podcast'],
  grammar:       ['exercise'],
  vocab:         ['vocab'],
  listening:     ['podcast', 'video'],
  writing:       ['reading', 'exercise'],
  speaking:      ['video', 'podcast'],
  reading:       ['reading'],
}

// Pick the resource that best matches an activity's category.
// Falls back to the resource at the same position so links still spread out.
export function pickResource(resArr, cat, index) {
  if (!resArr || !resArr.length) return null
  const prefs = CAT_TO_TYPES[cat] || []
  for (const ty of prefs) {
    const match = resArr.find(r => r.type === ty)
    if (match) return match
  }
  return resArr[index] || null
}

// Automatic difficulty hint shown when a task has no level-specific variation.
// Adapts to the student's level and the activity category.
const LEVEL_HINT = {
  beginner: {
    speaking:      { pt: 'Fale devagar e com frases curtas — use um roteiro escrito se precisar.', en: 'Speak slowly with short phrases — use a written script if you need to.' },
    writing:       { pt: 'Escreva poucas frases simples — pode usar um modelo pronto como base.', en: 'Write a few simple sentences — you can use a ready-made template as a base.' },
    listening:     { pt: 'Ouça com legendas e repita quantas vezes precisar.', en: 'Listen with subtitles and repeat as many times as you need.' },
    reading:       { pt: 'Leia com calma e use o dicionário para as palavras novas.', en: 'Read slowly and use a dictionary for new words.' },
    vocab:         { pt: 'Comece pelas palavras mais essenciais e revise aos poucos.', en: 'Start with the most essential words and review little by little.' },
    grammar:       { pt: 'Faça os exemplos mais básicos com calma, um de cada vez.', en: 'Do the most basic examples calmly, one at a time.' },
    pronunciation: { pt: 'Repita devagar, imitando o áudio som por som.', en: 'Repeat slowly, imitating the audio sound by sound.' },
    _:             { pt: 'Faça a versão simplificada no seu ritmo.', en: 'Do the simplified version at your own pace.' },
  },
  advanced: {
    speaking:      { pt: 'Fale sem roteiro, com fluidez, opiniões próprias e vocabulário avançado.', en: 'Speak without a script, fluently, with your own opinions and advanced vocabulary.' },
    writing:       { pt: 'Escreva mais, sem modelos, variando estruturas e registro.', en: 'Write more, without templates, varying structures and register.' },
    listening:     { pt: 'Ouça sem legendas e resuma o conteúdo com suas palavras.', en: 'Listen without subtitles and summarize the content in your own words.' },
    reading:       { pt: 'Leia textos mais longos e interprete também as entrelinhas.', en: 'Read longer texts and interpret what is implied between the lines too.' },
    vocab:         { pt: 'Vá além do básico: sinônimos, collocations e nuances de uso.', en: 'Go beyond the basics: synonyms, collocations and nuances of use.' },
    grammar:       { pt: 'Use estruturas mais complexas e explore os casos de exceção.', en: 'Use more complex structures and explore the exceptions.' },
    pronunciation: { pt: 'Trabalhe entonação, ritmo e os sons mais difíceis.', en: 'Work on intonation, rhythm and the trickiest sounds.' },
    _:             { pt: 'Aprofunde a tarefa, sem apoios e com mais detalhe.', en: 'Take the task further, without support and in more detail.' },
  },
}

// Returns a short auto difficulty hint for a level + category, or null.
export function levelHint(level, cat, lang) {
  const map = LEVEL_HINT[level]
  if (!map) return null
  const h = map[cat] || map._
  return (lang === 'pt' ? h.pt : h.en)
}
