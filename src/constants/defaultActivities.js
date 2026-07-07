export const DEFAULT_ACTIVITIES = {
  ge1: {
    context: "O Present Simple é usado para falar sobre hábitos, rotinas e fatos gerais. Adicionamos '-s' ou '-es' ao verbo quando o sujeito é he, she ou it. Este tempo verbal é muito comum no cotidiano.",
    acts: [
      {"id":"ge1_a1","type":"tf","prompt":"We add '-s' to the verb in Present Simple when the subject is 'he', 'she', or 'it'.","answer":true,"hint":"Pense na conjugação da terceira pessoa do singular."},
      {"id":"ge1_a2","type":"mc","prompt":"Which sentence is in the correct Present Simple form?","options":["She go to school every day.","She goes to school every day.","She going to school every day.","She goed to school every day."],"answerIdx":1,"hint":"Lembre-se de adicionar '-es' para he/she/it com o verbo 'go'."},
      {"id":"ge1_a3","type":"fill","prompt":"He ___ (watch) TV every evening.","answer":"watches","keywords":["watches"],"hint":"Adicione '-es' aos verbos terminados em '-ch' na terceira pessoa."},
      {"id":"ge1_a4","type":"text","prompt":"Write 3 sentences about your daily routine using Present Simple verbs.","keywords":["wake","eat","go","work","study","drink","sleep","every","always","usually","often"],"hint":"Use verbos no Present Simple para descrever o que você faz todos os dias."}
    ]
  },
  ge2: {
    context: "O Present Continuous é usado para falar sobre ações que estão acontecendo agora, neste momento. Ele é formado com o verbo 'to be' (am/is/are) mais o verbo principal com '-ing'. Também pode indicar planos futuros já confirmados.",
    acts: [
      {"id":"ge2_a1","type":"tf","prompt":"The sentence 'She is cooking dinner right now' uses the Present Continuous correctly.","answer":true,"hint":"Verifique se o verbo 'to be' está correto e se o verbo principal tem '-ing'."},
      {"id":"ge2_a2","type":"mc","prompt":"Which sentence correctly uses Present Continuous?","options":["They is playing football.","They are play football.","They are playing football.","They playing football."],"answerIdx":2,"hint":"Lembre-se: sujeito + am/is/are + verbo-ing."},
      {"id":"ge2_a3","type":"fill","prompt":"Listen! The birds ___ (sing) outside.","answer":"are singing","keywords":["are singing"],"hint":"Use 'are' porque o sujeito é plural, e adicione '-ing' ao verbo."},
      {"id":"ge2_a4","type":"text","prompt":"Look around you or imagine a busy street. Write 3 sentences about what people are doing right now.","keywords":["is","are","ing","talking","walking","eating","drinking","reading","running","sitting"],"hint":"Use am/is/are + verbo-ing para descrever ações acontecendo agora."}
    ]
  },
  ge3: {
    context: "O Simple Past é usado para falar sobre ações que foram completadas no passado. Verbos regulares recebem '-ed' no final, enquanto verbos irregulares têm formas próprias que precisam ser memorizadas. Expressões como 'yesterday', 'last week' e 'ago' são comuns com este tempo verbal.",
    acts: [
      {"id":"ge3_a1","type":"tf","prompt":"The verb 'go' in Simple Past is 'goed'.","answer":false,"hint":"'Go' é um verbo irregular. Qual é sua forma no passado?"},
      {"id":"ge3_a2","type":"mc","prompt":"Which is the correct Simple Past form of 'study'?","options":["studyed","studed","studied","studid"],"answerIdx":2,"hint":"Verbos terminados em consoante + 'y' trocam o 'y' por 'ied'."},
      {"id":"ge3_a3","type":"fill","prompt":"We ___ (visit) our grandparents last Sunday.","answer":"visited","keywords":["visited"],"hint":"'Visit' é um verbo regular — adicione '-ed'."},
      {"id":"ge3_a4","type":"text","prompt":"Write about what you did last weekend. Use at least 3 Simple Past verbs.","keywords":["went","visited","watched","played","cooked","cleaned","talked","ate","slept","read","yesterday","weekend","last"],"hint":"Pense nas ações que você completou no fim de semana passado."}
    ]
  },
  ge4: {
    context: "O Past Continuous descreve ações que estavam em andamento em um momento específico do passado. É formado com 'was/were' mais o verbo com '-ing'. Frequentemente é usado junto com o Simple Past para mostrar que uma ação foi interrompida por outra.",
    acts: [
      {"id":"ge4_a1","type":"tf","prompt":"'I was sleeping when the phone rang' uses Past Continuous correctly for the interrupted action.","answer":true,"hint":"A ação em progresso (was sleeping) foi interrompida pela ação no Simple Past (rang)."},
      {"id":"ge4_a2","type":"mc","prompt":"Choose the correct Past Continuous sentence:","options":["She were reading a book at 8pm.","She was read a book at 8pm.","She was reading a book at 8pm.","She is reading a book at 8pm."],"answerIdx":2,"hint":"Use 'was' com he/she/it e adicione '-ing' ao verbo principal."},
      {"id":"ge4_a3","type":"fill","prompt":"They ___ (play) chess when the lights went out.","answer":"were playing","keywords":["were playing"],"hint":"Use 'were' com sujeitos plurais + verbo-ing."},
      {"id":"ge4_a4","type":"text","prompt":"Describe what you were doing at 8 o'clock last night. Include at least one action that was interrupted.","keywords":["was","were","ing","when","while","watching","eating","sleeping","reading","studying","cooking"],"hint":"Use was/were + verbo-ing para descrever o que estava acontecendo naquele momento."}
    ]
  },
  ge5: {
    context: "O Present Perfect é usado para falar sobre experiências de vida sem especificar quando aconteceram, ou sobre ações passadas com resultado no presente. É formado com 'have/has' mais o particípio passado do verbo. Palavras como 'ever', 'never', 'already' e 'yet' são muito comuns com este tempo verbal.",
    acts: [
      {"id":"ge5_a1","type":"tf","prompt":"'Have you ever been to Paris?' is a correct Present Perfect question about life experiences.","answer":true,"hint":"'Ever' é usado com Present Perfect para perguntar sobre experiências de vida."},
      {"id":"ge5_a2","type":"mc","prompt":"Which sentence is in Present Perfect?","options":["She has went to Japan.","She have gone to Japan.","She has gone to Japan.","She gone to Japan."],"answerIdx":2,"hint":"Use 'has' com he/she/it e o particípio passado do verbo (gone, não went)."},
      {"id":"ge5_a3","type":"fill","prompt":"I have never ___ (try) sushi before.","answer":"tried","keywords":["tried"],"hint":"O particípio passado de 'try' é 'tried' (y → ied)."},
      {"id":"ge5_a4","type":"text","prompt":"Write about 3 things you have done in your life that were interesting or unusual. Use 'have/has + past participle'.","keywords":["have","has","been","seen","tried","eaten","visited","met","done","experienced","never","already","ever"],"hint":"Pense em experiências únicas da sua vida e use o Present Perfect para descrevê-las."}
    ]
  },
  ge6: {
    context: "O Present Perfect Continuous enfatiza a duração de uma ação que começou no passado e continua até o presente. É formado com 'have/has been' mais o verbo com '-ing'. Palavras como 'for' (por quanto tempo) e 'since' (desde quando) são frequentemente usadas com este tempo.",
    acts: [
      {"id":"ge6_a1","type":"tf","prompt":"'She has been working here since 2020' means she started in 2020 and still works here now.","answer":true,"hint":"'Since' indica o ponto de início de uma ação que continua até o presente."},
      {"id":"ge6_a2","type":"mc","prompt":"Which sentence correctly uses Present Perfect Continuous?","options":["I have been study English for two years.","I has been studying English for two years.","I have been studying English for two years.","I been studying English for two years."],"answerIdx":2,"hint":"A estrutura correta é: have/has + been + verbo-ing."},
      {"id":"ge6_a3","type":"fill","prompt":"They ___ (wait) for the bus for 30 minutes.","answer":"have been waiting","keywords":["have been waiting"],"hint":"Use 'have been' com sujeitos plurais + verbo-ing."},
      {"id":"ge6_a4","type":"text","prompt":"Write 2 sentences about activities you have been doing lately. Use 'for' or 'since' in each sentence.","keywords":["have been","has been","for","since","studying","working","living","learning","practicing","playing"],"hint":"Pense em algo que você começou no passado e ainda está fazendo. Use 'for' para duração e 'since' para o ponto de início."}
    ]
  },
  ge7: {
    context: "O Simple Future com 'will' é usado para fazer previsões, promessas espontâneas e decisões tomadas no momento da fala. A estrutura é: sujeito + will + verbo no infinitivo (sem 'to'). A forma negativa é 'will not' ou 'won't'.",
    acts: [
      {"id":"ge7_a1","type":"tf","prompt":"'I will call you tomorrow' is an example of a spontaneous decision made at the moment of speaking.","answer":true,"hint":"Quando tomamos uma decisão no momento em que falamos, usamos 'will'."},
      {"id":"ge7_a2","type":"mc","prompt":"Which is the correct future with 'will'?","options":["She will goes to the party.","She will go to the party.","She wills go to the party.","She will going to the party."],"answerIdx":1,"hint":"Após 'will', o verbo fica sempre no infinitivo sem 'to'."},
      {"id":"ge7_a3","type":"fill","prompt":"Don't worry, I ___ (help) you with your homework.","answer":"will help","keywords":["will help"],"hint":"Use 'will' + verbo no infinitivo para fazer uma promessa espontânea."},
      {"id":"ge7_a4","type":"text","prompt":"Make 3 predictions about the world in 50 years. Use 'will' or 'won't'.","keywords":["will","won't","people","technology","world","future","robots","cars","cities","climate","live","work","travel"],"hint":"Use 'will' para previsões positivas e 'won't' para previsões negativas sobre o futuro."}
    ]
  },
  ge8: {
    context: "A estrutura 'going to' é usada para falar sobre planos e intenções já decididas antes do momento da fala, ou para fazer previsões baseadas em evidências presentes. A estrutura é: sujeito + am/is/are + going to + verbo no infinitivo.",
    acts: [
      {"id":"ge8_a1","type":"tf","prompt":"'Look at those dark clouds — it's going to rain' is a prediction based on present evidence.","answer":true,"hint":"Quando há evidências visíveis agora, usamos 'going to' para previsões."},
      {"id":"ge8_a2","type":"mc","prompt":"Which sentence shows a planned intention with 'going to'?","options":["I am going to visit my aunt next week.","I will decide to visit my aunt next week.","I going to visit my aunt next week.","I am go to visit my aunt next week."],"answerIdx":0,"hint":"A estrutura correta é: am/is/are + going to + verbo no infinitivo."},
      {"id":"ge8_a3","type":"fill","prompt":"We ___ (move) to a new apartment next month. We already signed the contract.","answer":"are going to move","keywords":["are going to move"],"hint":"É um plano já decidido — use 'are going to' + verbo no infinitivo."},
      {"id":"ge8_a4","type":"text","prompt":"Write about 3 plans you have for the next month. Use 'going to' to express your intentions.","keywords":["going to","am going","is going","are going","visit","travel","study","buy","start","finish","meet","plan"],"hint":"Pense em planos concretos que você já decidiu — viagens, compras, eventos."}
    ]
  },
  ge9: {
    context: "O Future Continuous descreve ações que estarão em progresso em um momento específico no futuro. É formado com 'will be' mais o verbo com '-ing'. É útil para falar sobre eventos que estarão ocorrendo simultaneamente ou em determinado ponto do futuro.",
    acts: [
      {"id":"ge9_a1","type":"tf","prompt":"'At 10pm tonight, I will be sleeping' means the action of sleeping will be in progress at that future time.","answer":true,"hint":"O Future Continuous indica uma ação que estará em andamento num momento específico do futuro."},
      {"id":"ge9_a2","type":"mc","prompt":"Which sentence correctly uses Future Continuous?","options":["She will be work at this time tomorrow.","She will working at this time tomorrow.","She will be working at this time tomorrow.","She is be working at this time tomorrow."],"answerIdx":2,"hint":"A estrutura é: will be + verbo-ing."},
      {"id":"ge9_a3","type":"fill","prompt":"This time next week, they ___ (travel) through Europe.","answer":"will be traveling","keywords":["will be traveling","will be travelling"],"hint":"Use 'will be' + verbo-ing para ações em progresso num momento futuro específico."},
      {"id":"ge9_a4","type":"text","prompt":"Write 3 sentences about what you will be doing at different times tomorrow. Specify the time for each.","keywords":["will be","working","studying","eating","sleeping","traveling","meeting","watching","reading","at","o'clock","tomorrow"],"hint":"Pense no que você estará fazendo em momentos específicos amanhã e use will be + -ing."}
    ]
  },
  ge10: {
    context: "O Future Perfect é usado para indicar que uma ação terá sido completada antes de um momento específico no futuro. É formado com 'will have' mais o particípio passado do verbo. Expressões como 'by', 'by the time' e 'before' são comuns com este tempo verbal.",
    acts: [
      {"id":"ge10_a1","type":"tf","prompt":"'By next year, she will have graduated' means her graduation will be complete before next year ends.","answer":true,"hint":"'By' + tempo futuro indica que a ação será completada antes daquele momento."},
      {"id":"ge10_a2","type":"mc","prompt":"Which sentence uses Future Perfect correctly?","options":["I will have finish the report by Monday.","I will finished the report by Monday.","I have will finished the report by Monday.","I will have finished the report by Monday."],"answerIdx":3,"hint":"A estrutura correta é: will have + particípio passado."},
      {"id":"ge10_a3","type":"fill","prompt":"By the time you arrive, I ___ (cook) dinner already.","answer":"will have cooked","keywords":["will have cooked"],"hint":"Use 'will have' + particípio passado para uma ação que será completada antes de outra ação futura."},
      {"id":"ge10_a4","type":"text","prompt":"Write 2 sentences about things you will have achieved or completed by the end of this year.","keywords":["will have","finished","completed","learned","saved","read","visited","studied","worked","by","before","end"],"hint":"Pense em objetivos que você quer completar este ano e use 'will have + particípio passado'."}
    ]
  },
  ge11: {
    context: "O Condicional Tipo 0 é usado para expressar fatos científicos, verdades universais e situações que sempre acontecem quando uma condição é cumprida. A estrutura usa o Present Simple tanto na cláusula 'if' quanto na cláusula principal. 'If' e 'when' são intercambiáveis neste tipo.",
    acts: [
      {"id":"ge11_a1","type":"tf","prompt":"In a Type 0 conditional, both clauses use the Present Simple tense.","answer":true,"hint":"No Condicional Tipo 0, usamos o Present Simple nas duas partes da frase."},
      {"id":"ge11_a2","type":"mc","prompt":"Which is a correct Type 0 conditional sentence?","options":["If you heat ice, it will melt.","If you heat ice, it melts.","If you will heat ice, it melts.","If you heated ice, it melts."],"answerIdx":1,"hint":"No Tipo 0, a condição e o resultado estão ambos no Present Simple."},
      {"id":"ge11_a3","type":"fill","prompt":"If you ___ (mix) blue and yellow, you get green.","answer":"mix","keywords":["mix"],"hint":"Use o Present Simple na cláusula 'if' para fatos que são sempre verdadeiros."},
      {"id":"ge11_a4","type":"text","prompt":"Write 3 Type 0 conditional sentences about facts from science or everyday life.","keywords":["if","when","heat","freeze","mix","boil","plants","sun","water","temperature","always","becomes","turns","gets"],"hint":"Pense em fatos científicos ou regras naturais que são sempre verdadeiros."}
    ]
  },
  ge12: {
    context: "O Condicional Tipo 1 é usado para situações reais e possíveis no presente ou futuro. A cláusula 'if' usa o Present Simple, enquanto a cláusula principal usa 'will' + infinitivo. Este tipo expressa consequências prováveis de condições que podem realmente acontecer.",
    acts: [
      {"id":"ge12_a1","type":"tf","prompt":"'If it rains tomorrow, I will stay home' is a Type 1 conditional because the situation is possible.","answer":true,"hint":"No Tipo 1, a situação é possível e a consequência é provável."},
      {"id":"ge12_a2","type":"mc","prompt":"Choose the correct Type 1 conditional:","options":["If she studies hard, she passes the exam.","If she will study hard, she will pass the exam.","If she studies hard, she will pass the exam.","If she studied hard, she would pass the exam."],"answerIdx":2,"hint":"Tipo 1: If + Present Simple, will + infinitivo."},
      {"id":"ge12_a3","type":"fill","prompt":"If you don't hurry, we ___ (miss) the train.","answer":"will miss","keywords":["will miss"],"hint":"Use 'will' + infinitivo na cláusula principal do Tipo 1."},
      {"id":"ge12_a4","type":"text","prompt":"Write 3 Type 1 conditional sentences about things that might happen in your life this week or month.","keywords":["if","will","study","pass","work","earn","rain","stay","call","come","eat","feel","exercise","get"],"hint":"Pense em condições reais e possíveis e suas consequências prováveis."}
    ]
  },
  ge13: {
    context: "O Condicional Tipo 2 é usado para situações hipotéticas ou improváveis no presente ou futuro. A cláusula 'if' usa o Simple Past, e a cláusula principal usa 'would/could/might' + infinitivo. É importante notar que 'were' é usado para todas as pessoas (I were, she were) em linguagem formal.",
    acts: [
      {"id":"ge13_a1","type":"tf","prompt":"'If I had a million dollars, I would travel the world' is a Type 2 conditional about an imaginary situation.","answer":true,"hint":"O Tipo 2 fala de situações hipotéticas ou improváveis no presente/futuro."},
      {"id":"ge13_a2","type":"mc","prompt":"Which sentence is a correct Type 2 conditional?","options":["If I know the answer, I will tell you.","If I knew the answer, I would tell you.","If I knew the answer, I will tell you.","If I know the answer, I would tell you."],"answerIdx":1,"hint":"Tipo 2: If + Simple Past, would + infinitivo."},
      {"id":"ge13_a3","type":"fill","prompt":"If she ___ (be) taller, she could become a basketball player.","answer":"were","keywords":["were","was"],"hint":"No Condicional Tipo 2, usamos 'were' para todas as pessoas (especialmente em contexto formal)."},
      {"id":"ge13_a4","type":"text","prompt":"Write 3 Type 2 conditional sentences about imaginary situations. Start with 'If I were...' or 'If I had...'","keywords":["if","would","could","were","had","knew","lived","spoke","worked","could","might","travel","buy","help","speak"],"hint":"Imagine situações hipotéticas — coisas que não são verdadeiras agora mas que você gostaria que fossem."}
    ]
  },
  ge14: {
    context: "O Condicional Tipo 3 é usado para falar sobre situações hipotéticas no passado — coisas que não aconteceram, mas poderiam ter acontecido. A estrutura usa 'if + had + particípio passado' na cláusula condicional e 'would have + particípio passado' na cláusula principal. Este tipo expressa arrependimento ou especulação sobre o passado.",
    acts: [
      {"id":"ge14_a1","type":"tf","prompt":"'If I had studied harder, I would have passed the exam' implies that the speaker did not study hard and did not pass.","answer":true,"hint":"O Tipo 3 fala sobre o que PODERIA ter acontecido no passado, mas não aconteceu."},
      {"id":"ge14_a2","type":"mc","prompt":"Which is a correct Type 3 conditional?","options":["If she had left earlier, she would catch the bus.","If she left earlier, she would have caught the bus.","If she had left earlier, she would have caught the bus.","If she has left earlier, she would have caught the bus."],"answerIdx":2,"hint":"Tipo 3: If + had + particípio passado, would have + particípio passado."},
      {"id":"ge14_a3","type":"fill","prompt":"If they ___ (arrive) on time, they would have seen the beginning of the show.","answer":"had arrived","keywords":["had arrived"],"hint":"Use 'had + particípio passado' na cláusula 'if' do Tipo 3."},
      {"id":"ge14_a4","type":"text","prompt":"Think about a decision or event in your past. Write 2 Type 3 conditional sentences expressing what might have been different.","keywords":["had","would have","studied","chosen","taken","gone","said","met","worked","tried","could have","might have"],"hint":"Reflita sobre o passado — o que teria acontecido de diferente se você tivesse feito uma escolha diferente?"}
    ]
  },
  ge15: {
    context: "Os modais 'can' e 'could' expressam habilidade, possibilidade e permissão. 'Can' é usado para o presente, enquanto 'could' é para o passado ou para pedidos mais formais. Após verbos modais, o verbo principal sempre fica no infinitivo sem 'to'.",
    acts: [
      {"id":"ge15_a1","type":"tf","prompt":"'Could you please open the window?' is a polite request using the modal 'could'.","answer":true,"hint":"'Could' é usado para fazer pedidos de forma mais educada e formal do que 'can'."},
      {"id":"ge15_a2","type":"mc","prompt":"Which sentence uses 'can' or 'could' correctly?","options":["She can to swim very fast.","She cans swim very fast.","She could swam when she was five.","She can swim very fast."],"answerIdx":3,"hint":"Após 'can' ou 'could', use o verbo no infinitivo sem 'to'."},
      {"id":"ge15_a3","type":"fill","prompt":"When I was a child, I ___ (speak) three languages.","answer":"could speak","keywords":["could speak"],"hint":"Use 'could' para habilidades que existiam no passado."},
      {"id":"ge15_a4","type":"text","prompt":"Write 3 sentences using 'can' or 'could' — one about your current ability, one about a past ability, and one polite request.","keywords":["can","could","speak","play","swim","cook","drive","run","read","write","would you","please","able to"],"hint":"Pense no que você consegue fazer agora, o que conseguia fazer antes e como pedir algo educadamente."}
    ]
  },
  ge16: {
    context: "Os modais 'must' e 'have to' expressam obrigação e necessidade. 'Must' geralmente indica uma obrigação imposta pelo falante ou uma regra pessoal, enquanto 'have to' indica uma obrigação externa. 'Must not' (mustn't) indica proibição, diferente de 'don't have to' que indica ausência de obrigação.",
    acts: [
      {"id":"ge16_a1","type":"tf","prompt":"'You mustn't smoke here' and 'You don't have to smoke here' have the same meaning.","answer":false,"hint":"'Mustn't' = proibição. 'Don't have to' = não é necessário (mas pode se quiser)."},
      {"id":"ge16_a2","type":"mc","prompt":"Which sentence expresses an external obligation?","options":["I must go to the gym more often.","I have to wear a uniform at work.","I must eat more vegetables.","I must call my mother."],"answerIdx":1,"hint":"'Have to' geralmente indica uma obrigação imposta por outros ou por regras externas."},
      {"id":"ge16_a3","type":"fill","prompt":"Students ___ (must/have to) submit their assignments by Friday — it's the school rule.","answer":"have to","keywords":["have to","must"],"hint":"Como é uma regra da escola (obrigação externa), 'have to' é mais adequado."},
      {"id":"ge16_a4","type":"text","prompt":"Write 3 sentences about rules or obligations in your life. Use 'must', 'have to', 'mustn't', or 'don't have to'.","keywords":["must","have to","mustn't","don't have to","wear","follow","attend","submit","pay","arrive","leave","work","study"],"hint":"Pense em obrigações do seu trabalho, escola ou vida diária."}
    ]
  },
  ge17: {
    context: "Os modais 'should' e 'ought to' são usados para dar conselhos, fazer recomendações e falar sobre o que é considerado correto ou esperado. Ambos têm significado semelhante, mas 'should' é mais comum na linguagem falada. 'Shouldn't' indica que algo não é recomendável.",
    acts: [
      {"id":"ge17_a1","type":"tf","prompt":"'You should eat more vegetables' is giving advice about healthy eating.","answer":true,"hint":"'Should' é frequentemente usado para dar conselhos e recomendações."},
      {"id":"ge17_a2","type":"mc","prompt":"Which sentence gives advice using 'should' correctly?","options":["You should to see a doctor about that cough.","You should see a doctor about that cough.","You should sees a doctor about that cough.","You shoulds see a doctor about that cough."],"answerIdx":1,"hint":"Após 'should', use o verbo no infinitivo sem 'to'."},
      {"id":"ge17_a3","type":"fill","prompt":"You look tired. You ___ (should/ought to) get some rest.","answer":"should","keywords":["should","ought to"],"hint":"Use 'should' ou 'ought to' para dar um conselho amigável."},
      {"id":"ge17_a4","type":"text","prompt":"Give advice to a friend who wants to learn English faster. Write 3 sentences using 'should' or 'ought to'.","keywords":["should","ought to","practice","study","watch","listen","read","speak","write","every day","regularly","vocabulary","grammar"],"hint":"Que conselhos você daria para alguém aprender inglês mais rápido? Use 'should' ou 'ought to'."}
    ]
  },
  ge18: {
    context: "Os modais 'may' e 'might' expressam possibilidade ou permissão formal. 'May' indica uma possibilidade um pouco mais alta, enquanto 'might' indica algo menos certo. Ambos são seguidos pelo infinitivo sem 'to'. 'May' também é usado para pedir permissão de forma educada.",
    acts: [
      {"id":"ge18_a1","type":"tf","prompt":"'It might rain later' suggests that rain is certain to happen.","answer":false,"hint":"'Might' indica possibilidade, não certeza. Existe a chance de chover, mas não é garantido."},
      {"id":"ge18_a2","type":"mc","prompt":"Which sentence correctly uses 'may' or 'might'?","options":["She may to arrive late.","She might arrives late.","She might arrive late.","She mights arrive late."],"answerIdx":2,"hint":"Após 'may' ou 'might', use o verbo no infinitivo sem 'to'."},
      {"id":"ge18_a3","type":"fill","prompt":"I'm not sure about my plans. I ___ (may/might) go to the beach this weekend.","answer":"might","keywords":["might","may"],"hint":"Use 'might' ou 'may' para expressar que algo é possível mas incerto."},
      {"id":"ge18_a4","type":"text","prompt":"Write 3 sentences about things that might happen in the future — things you're not sure about. Use 'may' or 'might'.","keywords":["may","might","could","possibly","perhaps","move","change","travel","study","work","get","find","meet","happen"],"hint":"Pense em possibilidades incertas do seu futuro próximo ou distante."}
    ]
  },
  ge19: {
    context: "A Voz Passiva no Present Simple é usada quando o foco está na ação ou no objeto da ação, e não em quem a realiza. A estrutura é: sujeito + am/is/are + particípio passado. O agente (quem realiza a ação) pode ser omitido ou introduzido pela preposição 'by'.",
    acts: [
      {"id":"ge19_a1","type":"tf","prompt":"'The windows are cleaned every week' is in the Present Simple Passive voice.","answer":true,"hint":"A estrutura am/is/are + particípio passado é a Voz Passiva no Present Simple."},
      {"id":"ge19_a2","type":"mc","prompt":"Convert to passive: 'They make this cheese in France.'","options":["This cheese makes in France.","This cheese is made in France.","This cheese are made in France.","This cheese is making in France."],"answerIdx":1,"hint":"Use 'is made' porque 'cheese' é singular e o verbo fica no particípio passado."},
      {"id":"ge19_a3","type":"fill","prompt":"Coffee ___ (grow) in many tropical countries.","answer":"is grown","keywords":["is grown"],"hint":"Use 'is + particípio passado' para a voz passiva com sujeito singular."},
      {"id":"ge19_a4","type":"text","prompt":"Write 3 sentences in the Present Simple Passive about things that are done in your country or city.","keywords":["is made","are produced","is grown","are sold","is spoken","are built","is used","are exported","is celebrated","is taught"],"hint":"Pense em produtos, tradições ou práticas do seu país e descreva-os na voz passiva."}
    ]
  },
  ge20: {
    context: "A Voz Passiva no Simple Past é formada com 'was/were' mais o particípio passado do verbo. Usamos 'was' com sujeitos singulares e 'were' com sujeitos plurais. Assim como na voz ativa, o agente pode ser incluído com 'by' ou omitido quando não é importante.",
    acts: [
      {"id":"ge20_a1","type":"tf","prompt":"'The Eiffel Tower was built in 1889' correctly uses the Past Simple Passive.","answer":true,"hint":"'Was built' = was + particípio passado, correto para sujeito singular no passado."},
      {"id":"ge20_a2","type":"mc","prompt":"Which sentence correctly uses Past Simple Passive?","options":["The letters were sent yesterday.","The letters was sent yesterday.","The letters were send yesterday.","The letters are sent yesterday."],"answerIdx":0,"hint":"Use 'were' com sujeito plural + particípio passado."},
      {"id":"ge20_a3","type":"fill","prompt":"The new hospital ___ (open) last year by the mayor.","answer":"was opened","keywords":["was opened"],"hint":"'Hospital' é singular, então use 'was' + particípio passado."},
      {"id":"ge20_a4","type":"text","prompt":"Write 3 sentences in the Past Simple Passive about historical events or famous inventions.","keywords":["was invented","was discovered","were built","was written","was painted","was founded","were sent","was introduced","was created","by"],"hint":"Pense em eventos históricos importantes e descreva-os usando a voz passiva no passado."}
    ]
  },
  ge21: {
    context: "A Voz Passiva no Future é formada com 'will be' mais o particípio passado do verbo. Ela é usada quando queremos falar sobre ações futuras sem especificar quem as realizará, ou quando o agente não é importante. Também pode ser formada com 'going to be + particípio passado'.",
    acts: [
      {"id":"ge21_a1","type":"tf","prompt":"'The new bridge will be completed next year' uses the Future Passive correctly.","answer":true,"hint":"'Will be + particípio passado' é a estrutura correta da Voz Passiva no Futuro."},
      {"id":"ge21_a2","type":"mc","prompt":"Which sentence uses Future Passive correctly?","options":["The package will delivered tomorrow.","The package will be deliver tomorrow.","The package will be delivered tomorrow.","The package is will be delivered tomorrow."],"answerIdx":2,"hint":"A estrutura é: will be + particípio passado."},
      {"id":"ge21_a3","type":"fill","prompt":"All participants ___ (inform) about the changes next week.","answer":"will be informed","keywords":["will be informed"],"hint":"Use 'will be + particípio passado' para a voz passiva no futuro."},
      {"id":"ge21_a4","type":"text","prompt":"Write 3 sentences in the Future Passive about changes or events that will happen in your city or country in the future.","keywords":["will be","built","opened","launched","announced","completed","introduced","installed","created","organized","updated"],"hint":"Pense em projetos futuros ou eventos planejados e descreva-os na voz passiva."}
    ]
  },
  ge22: {
    context: "O Discurso Indireto (Reported Speech) para afirmações é usado para relatar o que alguém disse sem usar as palavras exatas. Os verbos geralmente recuam um tempo verbal (backshift): Present Simple → Past Simple, Present Continuous → Past Continuous, etc. Pronomes e expressões de tempo também mudam.",
    acts: [
      {"id":"ge22_a1","type":"tf","prompt":"Direct: 'I am tired.' Reported: 'She said she was tired.' This is correct reported speech.","answer":true,"hint":"'Am' (Present Simple) muda para 'was' (Past Simple) no discurso indireto."},
      {"id":"ge22_a2","type":"mc","prompt":"Change to reported speech: He said, 'I will help you.'","options":["He said he will help me.","He said he would help me.","He said I will help you.","He said he would help you."],"answerIdx":1,"hint":"'Will' muda para 'would' no discurso indireto, e 'you' muda para 'me'."},
      {"id":"ge22_a3","type":"fill","prompt":"She said, 'I work in a hospital.' → She said she ___ in a hospital.","answer":"worked","keywords":["worked"],"hint":"'Work' (Present Simple) muda para 'worked' (Past Simple) no discurso indireto."},
      {"id":"ge22_a4","type":"text","prompt":"Report what 3 different people told you recently. Use 'said' or 'told' and make the necessary changes.","keywords":["said","told","that","was","were","would","had","could","worked","lived","liked","needed","wanted","thought"],"hint":"Pense em conversas recentes e relate o que foi dito, mudando os verbos e pronomes adequadamente."}
    ]
  },
  ge23: {
    context: "No Discurso Indireto para perguntas, a ordem das palavras muda para a ordem normal de uma afirmação (sem inversão). Perguntas com palavras interrogativas (who, what, where, etc.) usam a mesma palavra interrogativa. Perguntas de sim/não usam 'if' ou 'whether'. O tempo verbal também recua.",
    acts: [
      {"id":"ge23_a1","type":"tf","prompt":"Direct: 'Where do you live?' Reported: 'She asked me where did I live.' This is correct reported speech for questions.","answer":false,"hint":"No discurso indireto, não há inversão do sujeito e do auxiliar. O correto é 'where I lived'."},
      {"id":"ge23_a2","type":"mc","prompt":"Change to reported speech: 'Are you coming to the party?'","options":["She asked if I was coming to the party.","She asked if was I coming to the party.","She asked whether I am coming to the party.","She asked if I came to the party."],"answerIdx":0,"hint":"Perguntas de sim/não usam 'if/whether' e a ordem é sujeito + verbo (sem inversão)."},
      {"id":"ge23_a3","type":"fill","prompt":"'What time does the meeting start?' → He asked me what time the meeting ___.","answer":"started","keywords":["started"],"hint":"O Present Simple 'starts' muda para 'started' no discurso indireto."},
      {"id":"ge23_a4","type":"text","prompt":"Write 3 reported questions based on an imaginary interview. Use question words (what, where, why, how) and 'if/whether'.","keywords":["asked","wanted to know","where","what","when","why","how","if","whether","was","were","had","worked","lived","spoke"],"hint":"Imagine que você está relatando perguntas de uma entrevista. Lembre-se de mudar a ordem das palavras e os tempos verbais."}
    ]
  },
  ge24: {
    context: "O Discurso Indireto para comandos e pedidos usa verbos como 'tell', 'ask', 'order', 'warn' seguidos de um objeto e o infinitivo com 'to'. A forma negativa usa 'not + to' antes do verbo. O imperativo direto é transformado em uma estrutura com infinitivo.",
    acts: [
      {"id":"ge24_a1","type":"tf","prompt":"Direct: 'Close the door.' Reported: 'She told me to close the door.' This is correct reported speech for commands.","answer":true,"hint":"Comandos no discurso indireto usam: tell/ask + objeto + to + infinitivo."},
      {"id":"ge24_a2","type":"mc","prompt":"Report this command: The teacher said, 'Don't talk in class.'","options":["The teacher said me not talk in class.","The teacher told us not to talk in class.","The teacher told us to not talking in class.","The teacher said to us don't talk in class."],"answerIdx":1,"hint":"Comandos negativos: told + objeto + not to + infinitivo."},
      {"id":"ge24_a3","type":"fill","prompt":"'Please sit down,' she said to us. → She asked us ___ down.","answer":"to sit","keywords":["to sit"],"hint":"Use 'asked + objeto + to + infinitivo' para pedidos no discurso indireto."},
      {"id":"ge24_a4","type":"text","prompt":"Report 3 instructions or commands you received recently (from a teacher, boss, parent, etc.). Use tell/ask/order + object + (not) to.","keywords":["told","asked","ordered","warned","advised","reminded","to","not to","finish","arrive","call","check","turn off","submit","bring","wear"],"hint":"Pense em ordens ou pedidos que você recebeu e relate-os no discurso indireto."}
    ]
  },
  ge25: {
    context: "Os artigos em inglês são 'a', 'an' e 'the'. Usamos 'a' antes de sons consonantais e 'an' antes de sons vocálicos. 'The' é o artigo definido e é usado quando nos referimos a algo específico ou já mencionado anteriormente. Alguns contextos não usam artigo (zero article), como com substantivos no plural em sentido geral.",
    acts: [
      {"id":"ge25_a1","type":"tf","prompt":"We use 'an' before the word 'university' because it starts with a vowel letter.","answer":false,"hint":"'University' começa com o som /j/ (consoante), então usamos 'a university'."},
      {"id":"ge25_a2","type":"mc","prompt":"Choose the correct article: '___ sun rises in the east.'","options":["A sun","An sun","The sun","— (no article)"],"answerIdx":2,"hint":"Usamos 'the' com coisas únicas no mundo, como o sol, a lua, o mar."},
      {"id":"ge25_a3","type":"fill","prompt":"I saw ___ elephant at the zoo. ___ elephant was very big.","answer":"an; The","keywords":["an","the"],"hint":"Primeira menção = 'an' (novo). Segunda menção = 'the' (já conhecido)."},
      {"id":"ge25_a4","type":"text","prompt":"Write a short paragraph (3-4 sentences) describing a place you visited. Use 'a', 'an', and 'the' correctly.","keywords":["a","an","the","there","visited","saw","was","were","beautiful","interesting","old","large","small","amazing"],"hint":"Ao descrever um lugar, use 'a/an' na primeira menção e 'the' nas referências seguintes."}
    ]
  },
  ge26: {
    context: "Substantivos contáveis (countable nouns) podem ser contados e têm formas singular e plural, como 'apple/apples' ou 'book/books'. Substantivos incontáveis (uncountable nouns) não podem ser contados diretamente e não têm forma plural, como 'water', 'information' e 'advice'. Cada tipo requer diferentes quantificadores.",
    acts: [
      {"id":"ge26_a1","type":"tf","prompt":"'Furniture' is a countable noun and can be used as 'furnitures'.","answer":false,"hint":"'Furniture' é um substantivo incontável em inglês e não tem forma plural."},
      {"id":"ge26_a2","type":"mc","prompt":"Which of these is an uncountable noun?","options":["book","chair","music","car"],"answerIdx":2,"hint":"'Music' é incontável — não podemos dizer 'one music, two musics'."},
      {"id":"ge26_a3","type":"fill","prompt":"Can I have some ___ (advice/advices)? I have a difficult decision to make.","answer":"advice","keywords":["advice"],"hint":"'Advice' é incontável em inglês — não tem plural e não pode ser precedido por 'a'."},
      {"id":"ge26_a4","type":"text","prompt":"Write 4 sentences: 2 using countable nouns and 2 using uncountable nouns. Include quantities or amounts.","keywords":["some","any","much","many","a few","a little","several","lots of","pieces of","glasses of","cups of","bottles of"],"hint":"Lembre-se: substantivos contáveis podem ser pluralizados; incontáveis precisam de expressões como 'a piece of', 'a glass of'."}
    ]
  },
  ge27: {
    context: "Os quantificadores 'some', 'any', 'much' e 'many' são usados para indicar quantidades. 'Some' é usado em afirmações e ofertas; 'any' em negações e perguntas. 'Much' é usado com substantivos incontáveis e 'many' com substantivos contáveis. 'A lot of' pode ser usado com ambos os tipos.",
    acts: [
      {"id":"ge27_a1","type":"tf","prompt":"'I don't have some money' is the correct way to express absence of money in a negative sentence.","answer":false,"hint":"Em frases negativas, usamos 'any', não 'some'. O correto é 'I don't have any money'."},
      {"id":"ge27_a2","type":"mc","prompt":"Choose the correct quantifier: 'How ___ sugar do you need?'","options":["many","some","any","much"],"answerIdx":3,"hint":"'Sugar' é incontável, então usamos 'much' em perguntas."},
      {"id":"ge27_a3","type":"fill","prompt":"There aren't ___ buses on Sundays. Maybe we should take a taxi.","answer":"many","keywords":["many"],"hint":"'Buses' é contável e plural, então usamos 'many' em frases negativas."},
      {"id":"ge27_a4","type":"text","prompt":"Write a shopping list scenario with 4 sentences using some, any, much, and many correctly.","keywords":["some","any","much","many","a lot of","a few","a little","milk","bread","eggs","water","apples","money","time","need","have","buy"],"hint":"Imagine que você está planejando uma compra e use os quantificadores corretos para cada tipo de substantivo."}
    ]
  },
  ge28: {
    context: "Os adjetivos comparativos são usados para comparar duas pessoas, coisas ou situações. Adjetivos curtos (uma sílaba) geralmente recebem '-er': tall → taller. Adjetivos longos (duas ou mais sílabas) usam 'more': beautiful → more beautiful. Sempre usamos 'than' após o comparativo.",
    acts: [
      {"id":"ge28_a1","type":"tf","prompt":"The comparative form of 'intelligent' is 'intelligenter'.","answer":false,"hint":"Adjetivos longos usam 'more' + adjetivo. O correto é 'more intelligent'."},
      {"id":"ge28_a2","type":"mc","prompt":"Which sentence uses the comparative correctly?","options":["My sister is more tall than me.","My sister is taller than me.","My sister is tallest than me.","My sister is more taller than me."],"answerIdx":1,"hint":"'Tall' é um adjetivo curto (uma sílaba), então adicione '-er' e use 'than'."},
      {"id":"ge28_a3","type":"fill","prompt":"This exam was ___ (difficult) than the last one.","answer":"more difficult","keywords":["more difficult"],"hint":"'Difficult' é um adjetivo longo — use 'more' antes dele."},
      {"id":"ge28_a4","type":"text","prompt":"Compare two things you know well (two cities, two jobs, two movies). Write 3 sentences using comparative adjectives.","keywords":["more","than","bigger","smaller","faster","slower","better","worse","cheaper","expensive","interesting","crowded","peaceful","modern","old"],"hint":"Escolha dois lugares ou coisas e compare-os usando adjetivos comparativos."}
    ]
  },
  ge29: {
    context: "Os superlativos são usados para comparar uma pessoa ou coisa com todas as outras de um grupo. Adjetivos curtos recebem '-est' e usam 'the': tall → the tallest. Adjetivos longos usam 'the most': beautiful → the most beautiful. Existem formas irregulares como good → the best e bad → the worst.",
    acts: [
      {"id":"ge29_a1","type":"tf","prompt":"'Mount Everest is the most high mountain in the world' is grammatically correct.","answer":false,"hint":"'High' é um adjetivo curto e seu superlativo é 'the highest', não 'the most high'."},
      {"id":"ge29_a2","type":"mc","prompt":"What is the superlative of 'bad'?","options":["the baddest","the most bad","the worst","the most worst"],"answerIdx":2,"hint":"'Bad' é irregular: bad → worse → the worst."},
      {"id":"ge29_a3","type":"fill","prompt":"This is ___ (expensive) restaurant in the city, but the food is amazing.","answer":"the most expensive","keywords":["the most expensive"],"hint":"'Expensive' é longo — use 'the most' para o superlativo."},
      {"id":"ge29_a4","type":"text","prompt":"Write 3 superlative sentences about records or extremes in the world or in your life.","keywords":["the most","the best","the worst","the tallest","the longest","the biggest","the smallest","the fastest","the oldest","the youngest","in the world","I've ever","ever seen"],"hint":"Pense em recordes mundiais ou nas coisas mais extremas da sua vida e use superlativos."}
    ]
  },
  ge30: {
    context: "Os advérbios de frequência indicam com que frequência algo acontece. Os mais comuns são: always (sempre), usually (geralmente), often (frequentemente), sometimes (às vezes), rarely/seldom (raramente) e never (nunca). Eles geralmente ficam antes do verbo principal, mas depois do verbo 'to be'.",
    acts: [
      {"id":"ge30_a1","type":"tf","prompt":"In the sentence 'She is always late', the adverb 'always' is placed correctly after the verb 'to be'.","answer":true,"hint":"Com o verbo 'to be', o advérbio de frequência vem DEPOIS do verbo."},
      {"id":"ge30_a2","type":"mc","prompt":"Where does 'usually' go in this sentence: 'I ___ have coffee in the morning.'","options":["After 'coffee'","Before 'I'","In the position shown (before 'have')","After 'morning'"],"answerIdx":2,"hint":"Advérbios de frequência ficam antes do verbo principal (exceto o verbo 'to be')."},
      {"id":"ge30_a3","type":"fill","prompt":"She ___ eats breakfast — maybe once or twice a week. (rarely/always)","answer":"rarely","keywords":["rarely","seldom"],"hint":"'Once or twice a week' indica baixa frequência, então use 'rarely' ou 'seldom'."},
      {"id":"ge30_a4","type":"text","prompt":"Describe your weekly habits using at least 4 different adverbs of frequency.","keywords":["always","usually","often","sometimes","rarely","never","seldom","occasionally","frequently","wake up","exercise","cook","watch","read","go","meet","check"],"hint":"Use vários advérbios de frequência para descrever diferentes hábitos da sua semana."}
    ]
  },
  ge31: {
    context: "Os advérbios de modo descrevem como uma ação é realizada. A maioria é formada adicionando '-ly' ao adjetivo: slow → slowly, careful → carefully. Alguns são irregulares: good → well, fast → fast, hard → hard. Os advérbios de modo geralmente ficam após o verbo ou objeto.",
    acts: [
      {"id":"ge31_a1","type":"tf","prompt":"The adverb of manner for 'good' is 'goodly'.","answer":false,"hint":"'Good' é irregular — seu advérbio de modo é 'well'."},
      {"id":"ge31_a2","type":"mc","prompt":"Which sentence uses an adverb of manner correctly?","options":["She sings beautiful.","She sings beautifully.","She beautifully sings.","She is sings beautifully."],"answerIdx":1,"hint":"Advérbios de modo geralmente ficam após o verbo ou objeto."},
      {"id":"ge31_a3","type":"fill","prompt":"He speaks English very ___ (fluent). I can understand everything he says.","answer":"fluently","keywords":["fluently"],"hint":"O advérbio de modo de 'fluent' é 'fluently' (adicione '-ly')."},
      {"id":"ge31_a4","type":"text","prompt":"Write 3 sentences describing how you or someone you know does things. Use adverbs of manner.","keywords":["quickly","slowly","carefully","loudly","quietly","fluently","well","hard","fast","happily","seriously","politely","badly","perfectly","easily"],"hint":"Pense em como você ou outras pessoas realizam diferentes atividades e use advérbios de modo."}
    ]
  },
  ge32: {
    context: "As preposições de lugar indicam onde algo ou alguém está. As mais comuns são: in (dentro), on (em cima/sobre), at (em/no), under (embaixo), next to/beside (ao lado), between (entre dois), among (entre vários), in front of (na frente de) e behind (atrás de).",
    acts: [
      {"id":"ge32_a1","type":"tf","prompt":"'The cat is in the box' means the cat is inside the box.","answer":true,"hint":"'In' indica que algo está dentro ou no interior de algo."},
      {"id":"ge32_a2","type":"mc","prompt":"Choose the correct preposition: 'She is waiting ___ the bus stop.'","options":["in","on","at","under"],"answerIdx":2,"hint":"Usamos 'at' para pontos específicos de referência, como paradas de ônibus."},
      {"id":"ge32_a3","type":"fill","prompt":"The keys are ___ the table — I can see them from here.","answer":"on","keywords":["on"],"hint":"'On' indica que algo está sobre uma superfície."},
      {"id":"ge32_a4","type":"text","prompt":"Describe the room you are in right now. Where are different objects? Write 3-4 sentences using prepositions of place.","keywords":["in","on","at","under","next to","beside","between","behind","in front of","above","below","near","against","the wall","the floor","the table","the window"],"hint":"Olhe ao redor e descreva a posição dos objetos usando preposições de lugar."}
    ]
  },
  ge33: {
    context: "As preposições de tempo mais comuns em inglês são 'in', 'on' e 'at'. Usamos 'at' para horas específicas e momentos (at 3pm, at night), 'on' para dias e datas (on Monday, on 5th June) e 'in' para períodos mais longos como meses, anos, estações e partes do dia (in January, in 2020, in the morning).",
    acts: [
      {"id":"ge33_a1","type":"tf","prompt":"We use 'on' before months, like 'on January'.","answer":false,"hint":"Com meses, usamos 'in' — por exemplo, 'in January'."},
      {"id":"ge33_a2","type":"mc","prompt":"Choose the correct preposition: 'The meeting is ___ Friday ___ 10am.'","options":["in / at","on / at","at / on","in / in"],"answerIdx":1,"hint":"'On' para dias da semana, 'at' para horas específicas."},
      {"id":"ge33_a3","type":"fill","prompt":"My birthday is ___ the 15th ___ March.","answer":"on; in","keywords":["on","in"],"hint":"'On' para datas específicas, 'in' para meses."},
      {"id":"ge33_a4","type":"text","prompt":"Write about your weekly schedule using 'in', 'on', and 'at' with different time expressions.","keywords":["at","on","in","morning","afternoon","evening","night","Monday","weekend","January","summer","noon","midnight","o'clock","the","this","next","last"],"hint":"Descreva sua rotina semanal usando as preposições de tempo corretas para horas, dias e meses."}
    ]
  },
  ge34: {
    context: "As preposições de movimento descrevem o deslocamento de um lugar para outro. As mais comuns incluem: to (para/em direção a), into (para dentro de), out of (para fora de), onto (sobre/em cima de), off (de cima de/saindo), through (através de), across (do outro lado de), along (ao longo de) e up/down (para cima/baixo).",
    acts: [
      {"id":"ge34_a1","type":"tf","prompt":"'She walked into the room' means she entered the room by walking.","answer":true,"hint":"'Into' indica movimento para o interior de um espaço."},
      {"id":"ge34_a2","type":"mc","prompt":"Choose the correct preposition: 'The children ran ___ the street to get to the park.'","options":["along","into","off","out of"],"answerIdx":0,"hint":"'Along' indica movimento em paralelo a algo (como uma rua, praia ou corredor)."},
      {"id":"ge34_a3","type":"fill","prompt":"He jumped ___ the swimming pool and started swimming.","answer":"into","keywords":["into"],"hint":"'Into' indica movimento em direção ao interior de algo."},
      {"id":"ge34_a4","type":"text","prompt":"Describe a journey or trip you took recently. Use at least 4 different prepositions of movement.","keywords":["walked","drove","ran","climbed","went","traveled","turned","crossed","passed","through","across","along","into","out of","up","down","towards","past"],"hint":"Descreva o caminho que você percorreu usando diferentes preposições de movimento."}
    ]
  },
  ge35: {
    context: "As conjunções coordenativas 'and', 'but', 'or' e 'so' são usadas para unir palavras, frases ou orações de igual importância. 'And' adiciona informação, 'but' indica contraste, 'or' apresenta alternativa e 'so' indica resultado ou consequência. Elas geralmente aparecem entre as partes que conectam.",
    acts: [
      {"id":"ge35_a1","type":"tf","prompt":"In 'I was tired, so I went to bed early', the word 'so' shows a result or consequence.","answer":true,"hint":"'So' indica causa e efeito — o cansaço resultou em ir dormir cedo."},
      {"id":"ge35_a2","type":"mc","prompt":"Choose the correct conjunction: 'She is smart ___ hardworking.'","options":["but","or","so","and"],"answerIdx":3,"hint":"'And' é usado para adicionar informação positiva — ela é inteligente E trabalhadora."},
      {"id":"ge35_a3","type":"fill","prompt":"I wanted to go to the party, ___ I was feeling sick, so I stayed home.","answer":"but","keywords":["but"],"hint":"'But' indica contraste entre querer ir à festa e estar doente."},
      {"id":"ge35_a4","type":"text","prompt":"Write 4 sentences about your preferences or choices, using 'and', 'but', 'or', and 'so' — one of each.","keywords":["and","but","or","so","like","love","hate","enjoy","prefer","can","want","need","go","stay","eat","watch","work","study"],"hint":"Use cada conjunção em uma frase diferente para mostrar adição, contraste, alternativa e resultado."}
    ]
  },
  ge36: {
    context: "As conjunções subordinativas 'because', 'although' e 'however' são usadas para conectar ideias de forma mais complexa. 'Because' explica a razão de algo, 'although' introduz um contraste inesperado dentro da mesma frase, e 'however' (mais formal) conecta duas frases separadas indicando contraste.",
    acts: [
      {"id":"ge36_a1","type":"tf","prompt":"'Although it was raining, we went for a walk' shows an unexpected contrast between the weather and the action.","answer":true,"hint":"'Although' indica que algo aconteceu apesar de uma condição contrária."},
      {"id":"ge36_a2","type":"mc","prompt":"Choose the correct conjunction: 'I failed the test ___ I had studied all night.'","options":["although","because","so","and"],"answerIdx":0,"hint":"A situação é contrária ao esperado — estudar a noite toda e mesmo assim reprovar."},
      {"id":"ge36_a3","type":"fill","prompt":"She didn't get the job ___ she had excellent qualifications.","answer":"although","keywords":["although","even though","despite the fact that"],"hint":"Há um contraste inesperado — qualificações excelentes, mas não conseguiu o emprego."},
      {"id":"ge36_a4","type":"text","prompt":"Write 3 sentences using 'because', 'although', and 'however' — one each. Express contrasts and reasons.","keywords":["because","although","however","even though","despite","reason","contrast","but","still","yet","nevertheless","due to","as a result"],"hint":"Use 'because' para razões, 'although' para contrastes na mesma frase e 'however' para contrastes em frases separadas."}
    ]
  },
  ge37: {
    context: "As orações relativas com 'who', 'which' e 'that' são usadas para dar informações adicionais sobre pessoas ou coisas. 'Who' é usado para pessoas, 'which' para coisas e animais, e 'that' pode ser usado para ambos em orações restritivas. Orações relativas restritivas identificam o substantivo; explicativas (entre vírgulas) adicionam informação extra.",
    acts: [
      {"id":"ge37_a1","type":"tf","prompt":"In 'The book which I bought yesterday is very interesting', 'which' refers to the book.","answer":true,"hint":"'Which' é usado para se referir a coisas, e aqui ele se refere ao livro."},
      {"id":"ge37_a2","type":"mc","prompt":"Choose the correct relative pronoun: 'The woman ___ called you is my teacher.'","options":["which","whose","that","whom"],"answerIdx":2,"hint":"'That' pode ser usado para pessoas em orações relativas restritivas."},
      {"id":"ge37_a3","type":"fill","prompt":"The movie ___ we watched last night was amazing.","answer":"that","keywords":["that","which"],"hint":"'That' ou 'which' são usados para se referir a coisas."},
      {"id":"ge37_a4","type":"text","prompt":"Write 3 sentences using relative clauses with 'who', 'which', and 'that' to describe people or things you know.","keywords":["who","which","that","person","man","woman","book","film","place","teacher","friend","car","food","works","lives","made","created","wrote","saw"],"hint":"Use orações relativas para dar mais informações sobre pessoas e coisas sem criar frases separadas."}
    ]
  },
  ge38: {
    context: "As orações relativas com 'where', 'when' e 'whose' acrescentam informações sobre lugar, tempo e posse. 'Where' se refere a lugares, 'when' a momentos ou períodos de tempo, e 'whose' indica posse (de quem). Essas formas tornam as frases mais ricas e conectadas.",
    acts: [
      {"id":"ge38_a1","type":"tf","prompt":"'That's the school where I studied for ten years' correctly uses 'where' to refer to a place.","answer":true,"hint":"'Where' é usado em orações relativas para se referir a um lugar."},
      {"id":"ge38_a2","type":"mc","prompt":"Choose the correct relative pronoun: 'I remember the day ___ we first met.'","options":["where","whose","which","when"],"answerIdx":3,"hint":"'When' é usado em orações relativas para se referir a um momento ou período de tempo."},
      {"id":"ge38_a3","type":"fill","prompt":"The woman ___ car was stolen is filing a police report.","answer":"whose","keywords":["whose"],"hint":"'Whose' indica posse — de quem é o carro que foi roubado."},
      {"id":"ge38_a4","type":"text","prompt":"Write 3 sentences using 'where', 'when', and 'whose' in relative clauses.","keywords":["where","when","whose","place","time","year","moment","person","friend","colleague","house","car","born","grew up","remember","lived","happened","started","graduated"],"hint":"Crie frases descrevendo lugares especiais, momentos memoráveis e pessoas que você conhece."}
    ]
  },
  ge39: {
    context: "Alguns verbos em inglês são seguidos por gerúndio (verbo + -ing), outros por infinitivo (to + verbo) e alguns por ambos. Verbos como 'enjoy', 'avoid', 'finish', 'suggest' e 'mind' são seguidos por gerúndio. Verbos como 'want', 'decide', 'hope', 'plan' e 'need' são seguidos por infinitivo. 'Like', 'love', 'hate' e 'start' podem ser seguidos por ambos.",
    acts: [
      {"id":"ge39_a1","type":"tf","prompt":"'I enjoy to swim in the sea' is grammatically correct.","answer":false,"hint":"'Enjoy' é sempre seguido por gerúndio (-ing). O correto é 'I enjoy swimming'."},
      {"id":"ge39_a2","type":"mc","prompt":"Which sentence is grammatically correct?","options":["She decided going to Italy.","She decided to go to Italy.","She decided go to Italy.","She decided to going to Italy."],"answerIdx":1,"hint":"'Decide' é seguido por infinitivo (to + verbo base)."},
      {"id":"ge39_a3","type":"fill","prompt":"Have you finished ___ (write) the report yet?","answer":"writing","keywords":["writing"],"hint":"'Finish' é sempre seguido por gerúndio (-ing)."},
      {"id":"ge39_a4","type":"text","prompt":"Write 4 sentences about your hobbies and plans, using verbs followed by gerunds and infinitives (use at least 2 of each).","keywords":["enjoy","avoid","finish","mind","suggest","want","decide","hope","plan","need","love","hate","like","stop","try","swimming","reading","cooking","going","studying","working","learning"],"hint":"Pense em coisas que você gosta de fazer, evita e planeja, e use gerúndio ou infinitivo conforme o verbo."}
    ]
  },
  ge40: {
    context: "O infinitivo de propósito (to + verbo) é usado para explicar a razão ou o objetivo de uma ação — responde à pergunta 'para quê?'. É uma forma muito natural de conectar duas ações em inglês. A frase 'in order to' é uma versão mais formal e enfática de 'to' de propósito.",
    acts: [
      {"id":"ge40_a1","type":"tf","prompt":"'She went to the store to buy milk' uses an infinitive of purpose to explain why she went.","answer":true,"hint":"'To buy milk' responde à pergunta 'por que ela foi à loja?' — é o propósito da ação."},
      {"id":"ge40_a2","type":"mc","prompt":"Choose the correct way to express purpose: 'I study hard ___ get good grades.'","options":["for","so that","to","because"],"answerIdx":2,"hint":"O infinitivo de propósito usa 'to' + verbo para expressar a finalidade de uma ação."},
      {"id":"ge40_a3","type":"fill","prompt":"He woke up early ___ (catch) the first train.","answer":"to catch","keywords":["to catch","in order to catch"],"hint":"Use 'to + infinitivo' para expressar o propósito de acordar cedo."},
      {"id":"ge40_a4","type":"text","prompt":"Write 3 sentences explaining why you do certain things in your daily life. Use infinitives of purpose.","keywords":["to","in order to","study","learn","save","buy","exercise","stay","eat","sleep","work","improve","practice","develop","achieve"],"hint":"Explique o propósito de suas ações cotidianas usando 'to + verbo'."}
    ]
  },
  ge41: {
    context: "As question tags (perguntas tag) são pequenas perguntas adicionadas ao final de uma afirmação para confirmar informação ou pedir concordância. A regra geral é: afirmação positiva → tag negativa; afirmação negativa → tag positiva. O auxiliar da tag deve corresponder ao tempo verbal da frase principal.",
    acts: [
      {"id":"ge41_a1","type":"tf","prompt":"'She is coming to the party, isn't she?' is a correct question tag.","answer":true,"hint":"Frase positiva (is coming) → tag negativa (isn't she). O sujeito pronome corresponde ao sujeito da frase."},
      {"id":"ge41_a2","type":"mc","prompt":"Complete the question tag: 'They don't like spicy food, ___?'","options":["don't they","do they","aren't they","didn't they"],"answerIdx":1,"hint":"Frase negativa (don't like) → tag positiva (do they)."},
      {"id":"ge41_a3","type":"fill","prompt":"You've met my brother before, ___ you?","answer":"haven't","keywords":["haven't"],"hint":"'You've met' usa 'have' como auxiliar; a tag negativa é 'haven't'."},
      {"id":"ge41_a4","type":"text","prompt":"Write 4 sentences with question tags — 2 with positive statements and 2 with negative statements.","keywords":["isn't it","aren't they","doesn't she","haven't you","is it","are they","does he","have you","can't he","will she","won't they","did you"],"hint":"Lembre-se: positivo → tag negativa; negativo → tag positiva. Use o mesmo auxiliar da frase principal."}
    ]
  },
  ge42: {
    context: "As perguntas indiretas são usadas para fazer perguntas de forma mais educada e formal. Elas seguem a ordem normal das afirmações (sujeito + verbo), não a ordem invertida das perguntas diretas. São introduzidas por expressões como 'Could you tell me...', 'Do you know...', 'I wonder...' e 'I'd like to know...'.",
    acts: [
      {"id":"ge42_a1","type":"tf","prompt":"'Could you tell me where is the nearest bank?' is a correct indirect question.","answer":false,"hint":"Em perguntas indiretas, não há inversão sujeito-verbo. O correto é 'where the nearest bank is'."},
      {"id":"ge42_a2","type":"mc","prompt":"Which is the correct indirect question?","options":["Do you know what time does the museum open?","Do you know what time the museum opens?","Do you know what time opens the museum?","Do you know what time is the museum opening?"],"answerIdx":1,"hint":"Em perguntas indiretas, a ordem é sujeito + verbo, sem inversão."},
      {"id":"ge42_a3","type":"fill","prompt":"Could you tell me where ___ the post office? (is/does is)","answer":"the post office is","keywords":["the post office is"],"hint":"Em perguntas indiretas, use a ordem afirmativa: where + sujeito + verbo."},
      {"id":"ge42_a4","type":"text","prompt":"Write 3 polite indirect questions you might ask in a hotel or tourist information center.","keywords":["Could you tell me","Do you know","I'd like to know","I wonder","where","when","how","what","if","whether","the nearest","the best","how to","how long","how much"],"hint":"Imagine que você está em um hotel ou centro de informações turísticas e precisa perguntar de forma educada."}
    ]
  },
  ge43: {
    context: "As estruturas enfáticas com 'do', 'does' e 'did' são usadas para dar ênfase a uma afirmação, expressar contraste ou insistência. Elas são usadas em frases afirmativas quando queremos destacar algo. Por exemplo, 'I do love you', 'She does work hard' ou 'I did send the email' (mas alguém duvida).",
    acts: [
      {"id":"ge43_a1","type":"tf","prompt":"'I do agree with you' uses emphatic 'do' to express strong agreement.","answer":true,"hint":"'Do' enfático em frases afirmativas reforça a verdade ou a intensidade do que está sendo dito."},
      {"id":"ge43_a2","type":"mc","prompt":"Which sentence uses emphatic 'do/does/did' correctly?","options":["She does likes cooking.","She did liked cooking as a child.","She does like cooking.","She do like cooking."],"answerIdx":2,"hint":"Com 'does' enfático, o verbo principal fica no infinitivo sem '-s': 'does like'."},
      {"id":"ge43_a3","type":"fill","prompt":"I ___ (did/does) call you yesterday! Check your phone — you must have missed it.","answer":"did","keywords":["did"],"hint":"'Did' enfático no passado insiste que a ação realmente aconteceu."},
      {"id":"ge43_a4","type":"text","prompt":"Write 3 sentences using emphatic do/does/did to insist or contradict something. Imagine someone doubts you.","keywords":["do","does","did","I do","she does","we did","really","honestly","promise","insist","believe","know","love","work","study","call","send","try","come"],"hint":"Imagine que alguém não acredita em você — use 'do/does/did' para enfatizar que você está falando a verdade."}
    ]
  },
  ge44: {
    context: "As cleft sentences (orações clivadas) com 'It is/was' são usadas para enfatizar um elemento específico da frase. A estrutura é: 'It is/was + elemento enfatizado + that/who + resto da frase'. Esta estrutura é muito útil quando queremos destacar quem, quando, onde ou por que algo aconteceu.",
    acts: [
      {"id":"ge44_a1","type":"tf","prompt":"'It was Mary who called you, not John' uses a cleft sentence to emphasize who made the call.","answer":true,"hint":"A oração clivada 'It was Mary who...' coloca ênfase em 'Mary' como a pessoa que ligou."},
      {"id":"ge44_a2","type":"mc","prompt":"Rewrite with a cleft sentence to emphasize 'yesterday': 'John called me yesterday.'","options":["It was John that called me yesterday.","It was yesterday that John called me.","It is yesterday when John called me.","It was yesterday which John called me."],"answerIdx":1,"hint":"Para enfatizar 'yesterday', coloque-o logo após 'It was': 'It was yesterday that...'"},
      {"id":"ge44_a3","type":"fill","prompt":"___ the noise that woke me up, not the light.","answer":"It was","keywords":["It was"],"hint":"A estrutura de oração clivada começa com 'It is/was'."},
      {"id":"ge44_a4","type":"text","prompt":"Write 3 cleft sentences to emphasize different elements (person, time, reason). Start with 'It is/was...'","keywords":["It is","It was","who","that","which","when","where","why","the reason","the person","the place","the time","because","in order to"],"hint":"Use 'It is/was + elemento + that/who' para colocar ênfase em diferentes partes da sua mensagem."}
    ]
  },
  ge45: {
    context: "As estruturas 'There is' e 'There are' são usadas para indicar a existência de algo em um lugar. Usamos 'There is' (ou 'There's') com substantivos singulares e incontáveis, e 'There are' com substantivos plurais. As formas negativas são 'There isn't' e 'There aren't', e as interrogativas invertem a ordem.",
    acts: [
      {"id":"ge45_a1","type":"tf","prompt":"'There are a lot of people at the concert' is a correct sentence using 'there are'.","answer":true,"hint":"'People' é plural, então usamos 'there are'."},
      {"id":"ge45_a2","type":"mc","prompt":"Choose the correct form: '___ a beautiful park near my house.'","options":["There are","There is","There were","There has"],"answerIdx":1,"hint":"'A park' é singular, então usamos 'There is'."},
      {"id":"ge45_a3","type":"fill","prompt":"___ many students in the library today. It's exam week.","answer":"There are","keywords":["There are"],"hint":"'Students' é plural — use 'There are'."},
      {"id":"ge45_a4","type":"text","prompt":"Describe your neighborhood using 'there is/are', 'there isn't/aren't'. Write 4 sentences about what exists or doesn't exist nearby.","keywords":["there is","there are","there isn't","there aren't","a park","a school","some shops","a hospital","restaurants","trees","cafes","a library","a gym","traffic","noise"],"hint":"Descreva o que existe e o que não existe no seu bairro usando 'there is/are'."}
    ]
  },
  ge46: {
    context: "A concordância sujeito-verbo (Subject-Verb Agreement) exige que o verbo concorde com o sujeito em número. Sujeitos singulares pedem verbos singulares, e sujeitos plurais pedem verbos plurais. Atenção especial para casos especiais: coletivos, indefinidos como 'everyone' (singular), e frases com 'neither...nor' e 'either...or'.",
    acts: [
      {"id":"ge46_a1","type":"tf","prompt":"'Everyone in the class are ready for the exam' is grammatically correct.","answer":false,"hint":"'Everyone' é considerado singular em inglês, então o verbo deve ser 'is', não 'are'."},
      {"id":"ge46_a2","type":"mc","prompt":"Which sentence has correct subject-verb agreement?","options":["The news are shocking.","The team are playing well.","Mathematics is my favourite subject.","My family are very large."],"answerIdx":2,"hint":"'Mathematics' é um substantivo que termina em '-s' mas é tratado como singular."},
      {"id":"ge46_a3","type":"fill","prompt":"Neither the teacher nor the students ___ (was/were) happy with the results.","answer":"were","keywords":["were"],"hint":"Quando 'neither...nor' conecta sujeitos, o verbo concorda com o sujeito mais próximo ('students' = plural)."},
      {"id":"ge46_a4","type":"text","prompt":"Write 4 sentences with tricky subject-verb agreement situations (e.g., collective nouns, indefinite pronouns, compound subjects).","keywords":["everyone","nobody","the team","the news","either","neither","nor","or","mathematics","physics","each","every","along with","together with","as well as"],"hint":"Preste atenção especial a sujeitos coletivos, pronomes indefinidos e conectivos como 'either...or'."}
    ]
  },
  ge47: {
    context: "Os pronomes em inglês incluem pronomes pessoais (I, you, he, she, it, we, they), possessivos (my/mine, your/yours, his, her/hers, its, our/ours, their/theirs) e reflexivos (myself, yourself, himself, herself, itself, ourselves, yourselves, themselves). Cada tipo tem um uso específico na frase.",
    acts: [
      {"id":"ge47_a1","type":"tf","prompt":"'The book is her's' is the correct way to write the possessive pronoun.","answer":false,"hint":"Pronomes possessivos não usam apóstrofo. O correto é 'the book is hers'."},
      {"id":"ge47_a2","type":"mc","prompt":"Choose the correct pronoun: 'She hurt ___ while cooking.'","options":["her","herself","hers","she"],"answerIdx":1,"hint":"Quando o sujeito e o objeto são a mesma pessoa, usamos o pronome reflexivo."},
      {"id":"ge47_a3","type":"fill","prompt":"That's not my umbrella — ___ is blue and that one is red.","answer":"mine","keywords":["mine"],"hint":"'Mine' é o pronome possessivo que substitui 'my umbrella'."},
      {"id":"ge47_a4","type":"text","prompt":"Write 4 sentences using different types of pronouns: one personal, one possessive adjective, one possessive pronoun, and one reflexive.","keywords":["I","you","he","she","we","they","my","your","his","her","our","their","mine","yours","his","hers","ours","theirs","myself","yourself","himself","herself","themselves"],"hint":"Use os quatro tipos de pronomes em frases diferentes para praticar cada uso."}
    ]
  },
  ge48: {
    context: "Os determinantes demonstrativos 'this', 'that', 'these' e 'those' são usados para indicar a posição de objetos em relação ao falante. 'This' e 'these' referem-se a coisas próximas (singular e plural), enquanto 'that' e 'those' referem-se a coisas distantes (singular e plural). Eles também podem ser usados como pronomes.",
    acts: [
      {"id":"ge48_a1","type":"tf","prompt":"'Those books over there are mine' uses 'those' correctly to refer to distant plural objects.","answer":true,"hint":"'Those' é usado para objetos plurais que estão distantes do falante."},
      {"id":"ge48_a2","type":"mc","prompt":"You are showing someone a photo in your hand. Which is correct?","options":["That is my family.","Those is my family.","This is my family.","These is my family."],"answerIdx":2,"hint":"Para algo próximo e singular (a foto em sua mão), use 'This'."},
      {"id":"ge48_a3","type":"fill","prompt":"___ shoes I'm wearing right now are new, but ___ ones on the shelf are old.","answer":"These; those","keywords":["These","those"],"hint":"Sapatos no seu pé = próximos (These); sapatos na prateleira = distantes (those)."},
      {"id":"ge48_a4","type":"text","prompt":"Write 4 sentences using this, that, these, and those — one each. Describe objects near and far from you.","keywords":["this","that","these","those","here","there","near","far","close","the one","the ones","book","chair","picture","person","building","car","phone","bag"],"hint":"Pense em objetos próximos e distantes de você e use os determinantes demonstrativos corretos."}
    ]
  },
  ge49: {
    context: "Os números cardinais (one, two, three...) indicam quantidade, enquanto os números ordinais (first, second, third...) indicam ordem ou posição. Os ordinais são formados geralmente adicionando '-th' ao cardinal, com exceções para first, second, third, e algumas adaptações ortográficas. Ordinais são usados com datas, aniversários, posições em listas, andares de prédios, etc.",
    acts: [
      {"id":"ge49_a1","type":"tf","prompt":"The ordinal number for 21 is 'twenty-oneth'.","answer":false,"hint":"Números compostos seguem o padrão do último número: 21st (twenty-first)."},
      {"id":"ge49_a2","type":"mc","prompt":"How do you say the date 05/03 in English?","options":["The five of March","March the fifth","The fifth of March or March fifth","March five"],"answerIdx":2,"hint":"Datas usam números ordinais: 'the fifth of March' ou 'March fifth' são ambas corretas."},
      {"id":"ge49_a3","type":"fill","prompt":"She finished in ___ (3rd) place in the competition.","answer":"third","keywords":["third"],"hint":"'3rd' em inglês é 'third' — uma das formas irregulares dos ordinais."},
      {"id":"ge49_a4","type":"text","prompt":"Write 4 sentences using ordinal and cardinal numbers — about dates, floors of a building, positions in a race, and quantities.","keywords":["first","second","third","fourth","fifth","tenth","twentieth","one","two","three","floor","place","January","birthday","anniversary","position","finished","born","live","won"],"hint":"Use números ordinais para posições e datas, e cardinais para quantidades."}
    ]
  },
  ge50: {
    context: "As expressões de tempo 'ago', 'last', 'for' e 'since' são muito usadas em inglês mas têm regras específicas. 'Ago' e 'last' referem-se ao passado (Simple Past). 'For' indica duração e pode ser usado com vários tempos verbais. 'Since' indica o ponto de início de uma ação e geralmente é usado com o Present Perfect.",
    acts: [
      {"id":"ge50_a1","type":"tf","prompt":"'She has lived here since three years' is a correct use of 'since'.","answer":false,"hint":"'Since' indica o ponto de início (since 2020, since Monday), não duração. Para duração, use 'for three years'."},
      {"id":"ge50_a2","type":"mc","prompt":"Which sentence is correct?","options":["I met her since two years ago.","I met her two years ago.","I have met her two years ago.","I met her for two years ago."],"answerIdx":1,"hint":"'Ago' é usado com o Simple Past. 'Two years ago' indica quando a ação aconteceu."},
      {"id":"ge50_a3","type":"fill","prompt":"I haven't seen my cousin ___ last Christmas.","answer":"since","keywords":["since"],"hint":"'Since' + ponto específico no tempo é usado com o Present Perfect."},
      {"id":"ge50_a4","type":"text","prompt":"Write 4 sentences about your past and recent activities. Use 'ago', 'last', 'for', and 'since' — one each.","keywords":["ago","last","for","since","week","month","year","Monday","summer","2020","years","hours","days","long","time","visited","worked","studied","lived","known","moved"],"hint":"Pense em eventos passados e atividades em andamento para usar cada expressão de tempo corretamente."}
    ]
  },
  ge51: {
    context: "As expressões de causa e efeito conectam uma razão a uma consequência. 'Because' introduz a causa e conecta diretamente duas orações. 'So' e 'therefore' introduzem a consequência. 'Due to' e 'as a result of' são seguidos por substantivos ou gerúndios e são mais formais.",
    acts: [
      {"id":"ge51_a1","type":"tf","prompt":"'I was late because I missed the bus' correctly uses 'because' to introduce the cause.","answer":true,"hint":"'Because' introduz a razão ou causa de um evento. Aqui, perder o ônibus é a causa do atraso."},
      {"id":"ge51_a2","type":"mc","prompt":"Choose the correct word: 'The roads were icy; ___, many accidents occurred.'","options":["because","although","therefore","despite"],"answerIdx":2,"hint":"'Therefore' é usado no início da segunda oração para introduzir a consequência."},
      {"id":"ge51_a3","type":"fill","prompt":"___ the heavy rain, the football match was cancelled.","answer":"Due to","keywords":["Due to","Because of","As a result of"],"hint":"'Due to' + substantivo expressa a causa de forma mais formal."},
      {"id":"ge51_a4","type":"text","prompt":"Write 3 sentences about cause and effect situations (weather, health, work, etc.). Use 'because', 'so', 'therefore', and/or 'due to'.","keywords":["because","so","therefore","due to","as a result","consequently","for this reason","caused","led to","resulted in","rain","stress","traffic","illness","hard work"],"hint":"Conecte causas e efeitos do mundo real usando as expressões adequadas."}
    ]
  },
  ge52: {
    context: "As expressões de contraste mostram diferenças ou situações inesperadas. 'But' e 'although/even though' conectam duas partes contrastantes dentro de uma relação de concessão. 'Despite' e 'in spite of' são seguidos por um substantivo ou gerúndio e indicam que algo aconteceu apesar de uma dificuldade.",
    acts: [
      {"id":"ge52_a1","type":"tf","prompt":"'Despite of the rain, we had a great time' is grammatically correct.","answer":false,"hint":"'Despite' não é seguido por 'of'. O correto é 'Despite the rain' ou 'In spite of the rain'."},
      {"id":"ge52_a2","type":"mc","prompt":"Which sentence correctly uses contrast?","options":["Although the film was long, but I enjoyed it.","Despite being tired, she finished the race.","In spite of she was tired, she finished.","Although she was tired. She finished the race."],"answerIdx":1,"hint":"'Despite + gerúndio' é uma estrutura correta para expressar contraste."},
      {"id":"ge52_a3","type":"fill","prompt":"___ working very hard, he didn't get promoted.","answer":"Despite","keywords":["Despite","In spite of"],"hint":"'Despite' + gerúndio indica que algo aconteceu apesar do esforço."},
      {"id":"ge52_a4","type":"text","prompt":"Write 3 sentences expressing contrast using 'but', 'although', 'despite', and 'in spite of' (use at least 2 different ones).","keywords":["but","although","even though","despite","in spite of","however","whereas","while","nevertheless","contrast","unexpected","surprising","difficult","hard","tired","busy","expensive"],"hint":"Pense em situações onde algo aconteceu de forma inesperada ou contrária ao que seria esperado."}
    ]
  },
  ge53: {
    context: "As expressões de adição são usadas para acrescentar informações a uma ideia já expressa. 'And' é a mais simples; 'also' e 'too' (no final) são usadas em afirmações; 'as well' aparece no final da frase; 'in addition' e 'furthermore' são mais formais e introduzem informações novas em textos escritos.",
    acts: [
      {"id":"ge53_a1","type":"tf","prompt":"'She speaks French. Also, she speaks Japanese too' is correct — using both 'also' and 'too' together is fine.","answer":false,"hint":"Usar 'also' e 'too' na mesma frase é redundante. Use um ou outro."},
      {"id":"ge53_a2","type":"mc","prompt":"Which sentence correctly adds information?","options":["She is smart. In addition, she is kind.","She is smart. In addition of that, she is kind.","She is smart. In addition she is kind also.","She is smart. Also in addition she is kind."],"answerIdx":0,"hint":"'In addition,' (seguido de vírgula) é usado no início de uma nova frase para acrescentar informação."},
      {"id":"ge53_a3","type":"fill","prompt":"He is a great cook, and he's an excellent singer ___.","answer":"as well","keywords":["as well","too"],"hint":"'As well' e 'too' aparecem no final da frase para adicionar informação."},
      {"id":"ge53_a4","type":"text","prompt":"Write a short paragraph (4 sentences) about the advantages of learning English. Use 'also', 'too', 'as well', and 'in addition'.","keywords":["also","too","as well","in addition","furthermore","moreover","besides","and","helps","improves","allows","enables","opportunities","travel","career","communication","culture","confidence"],"hint":"Liste as vantagens de aprender inglês usando diferentes expressões de adição."}
    ]
  },
  ge54: {
    context: "As expressões de sequência são usadas para organizar ideias e ações em ordem cronológica ou lógica. As mais comuns são: 'first' ou 'firstly' (primeiro), 'then' ou 'next' (depois/em seguida), 'after that' (depois disso) e 'finally' ou 'lastly' (por fim). São essenciais para narrar processos, instruções e histórias.",
    acts: [
      {"id":"ge54_a1","type":"tf","prompt":"'Finally' is used to introduce the last step or event in a sequence.","answer":true,"hint":"'Finally' é usado para apresentar o último item ou evento de uma sequência."},
      {"id":"ge54_a2","type":"mc","prompt":"Put in the correct sequence connector: 'Boil the water. ___, add the pasta.'","options":["Firstly","Finally","Then","Previously"],"answerIdx":2,"hint":"'Then' é usado para indicar o próximo passo em uma sequência de ações."},
      {"id":"ge54_a3","type":"fill","prompt":"___, preheat the oven. Next, mix the ingredients. ___, bake for 30 minutes.","answer":"First; Finally","keywords":["First","Finally"],"hint":"Use 'First' para o primeiro passo e 'Finally' para o último passo de uma sequência."},
      {"id":"ge54_a4","type":"text","prompt":"Write instructions for making your favourite dish or doing a simple task. Use first, then, next, after that, and finally.","keywords":["first","firstly","then","next","after that","after","subsequently","finally","lastly","add","mix","cook","prepare","wash","cut","heat","serve","wait","bake","stir"],"hint":"Escreva um processo passo a passo usando expressões de sequência para organizar as instruções."}
    ]
  },
  ge55: {
    context: "As expressões de opinião são usadas para apresentar pontos de vista pessoais de forma clara. As mais comuns incluem: 'I think', 'I believe', 'I feel', 'In my opinion', 'In my view', 'As far as I'm concerned' e 'It seems to me that'. Estas expressões sinalizam que você está compartilhando uma perspectiva pessoal, não um fato.",
    acts: [
      {"id":"ge55_a1","type":"tf","prompt":"'In my opinion, I think' is a common phrase used to introduce opinions in formal writing.","answer":false,"hint":"Usar 'In my opinion' e 'I think' juntos é redundante. Use apenas um."},
      {"id":"ge55_a2","type":"mc","prompt":"Which is the most formal way to express an opinion?","options":["I think technology is useful.","I reckon technology is useful.","In my view, technology is beneficial.","I feel like technology is useful."],"answerIdx":2,"hint":"'In my view' é mais formal e adequado para textos acadêmicos ou profissionais."},
      {"id":"ge55_a3","type":"fill","prompt":"___ my opinion, social media has both advantages and disadvantages.","answer":"In","keywords":["In"],"hint":"A expressão completa é 'In my opinion'."},
      {"id":"ge55_a4","type":"text","prompt":"Write your opinion about a current topic (technology, environment, education). Use at least 3 different opinion expressions.","keywords":["I think","I believe","I feel","In my opinion","In my view","as far as I'm concerned","it seems to me","personally","I consider","I would say","important","necessary","beneficial","harmful","essential"],"hint":"Escolha um tema atual e expresse sua opinião usando diferentes expressões para variar o discurso."}
    ]
  },
  ge56: {
    context: "Em inglês, há várias maneiras de expressar concordância e discordância. Para concordar: 'I agree', 'Exactly', 'That's true', 'You're right', 'I couldn't agree more'. Para discordar de forma educada: 'I disagree', 'I'm not sure about that', 'I see your point, but...', 'With all due respect...'. É importante saber discordar de forma cortês.",
    acts: [
      {"id":"ge56_a1","type":"tf","prompt":"'I couldn't agree more' means the speaker strongly disagrees.","answer":false,"hint":"'I couldn't agree more' é uma expressão de concordância forte — significa que concorda completamente."},
      {"id":"ge56_a2","type":"mc","prompt":"Which is a polite way to disagree?","options":["You're completely wrong.","I see your point, but I think differently.","That's a terrible idea.","No, that's not true at all."],"answerIdx":1,"hint":"'I see your point, but...' reconhece a perspectiva do outro antes de apresentar a discordância."},
      {"id":"ge56_a3","type":"fill","prompt":"A: 'I think everyone should learn a second language.' B: '___! It opens so many doors.'","answer":"I agree","keywords":["I agree","Exactly","Absolutely","I couldn't agree more","That's true"],"hint":"A resposta expressa concordância com a afirmação sobre aprender um segundo idioma."},
      {"id":"ge56_a4","type":"text","prompt":"Write a short dialogue (4-6 lines) where two people discuss whether social media is good or bad. Use agreement and disagreement expressions.","keywords":["I agree","I disagree","I see your point","I think","but","however","exactly","you're right","I'm not sure","with respect","on the other hand","although","personally","actually"],"hint":"Crie um diálogo onde uma pessoa concorda e a outra discorda, usando expressões adequadas para cada posição."}
    ]
  },
  ge57: {
    context: "Em inglês, há várias formas de fazer sugestões. 'Let's...' é informal e inclui o falante. 'Why don't we/you...' sugere uma ação de forma amigável. 'How about...' e 'What about...' são seguidos por gerúndio ou substantivo. 'You should...' e 'We could...' também são usados para sugestões menos diretas.",
    acts: [
      {"id":"ge57_a1","type":"tf","prompt":"'How about to go to the cinema tonight?' is a grammatically correct suggestion.","answer":false,"hint":"'How about' é seguido por gerúndio (-ing), não infinitivo. O correto é 'How about going to the cinema?'"},
      {"id":"ge57_a2","type":"mc","prompt":"Which is a correct way to make a suggestion?","options":["Why don't we to try that new restaurant?","Let's trying that new restaurant.","What about trying that new restaurant?","How about we try that new restaurant?"],"answerIdx":2,"hint":"'What about + gerúndio' é uma forma correta de fazer sugestões."},
      {"id":"ge57_a3","type":"fill","prompt":"___ take a break? We've been working for three hours.","answer":"Why don't we","keywords":["Why don't we","Let's","How about","What about"],"hint":"'Why don't we + infinitivo' é uma forma comum de sugerir algo para um grupo."},
      {"id":"ge57_a4","type":"text","prompt":"Write 4 suggestions for a group of friends deciding what to do on the weekend. Use different suggestion structures.","keywords":["Let's","Why don't we","How about","What about","We could","You should","suggest","idea","maybe","perhaps","go","visit","try","watch","play","cook","have","meet","explore"],"hint":"Use diferentes formas de fazer sugestões para planejar um fim de semana com amigos."}
    ]
  },
  ge58: {
    context: "Saber se desculpar e perdoar em inglês é essencial para interações sociais. Para se desculpar: 'I'm sorry', 'I apologize', 'I'm so sorry', 'Please forgive me', 'I'm terribly sorry'. Para aceitar o pedido de desculpas: 'That's okay', 'No problem', 'Don't worry about it', 'I forgive you', 'It's alright'. O tom e o contexto determinam qual expressão é mais adequada.",
    acts: [
      {"id":"ge58_a1","type":"tf","prompt":"'Excuse me' and 'I'm sorry' can both be used to apologize, but 'Excuse me' is typically for minor, immediate situations.","answer":true,"hint":"'Excuse me' é para situações simples (passar na frente, interromper), enquanto 'I'm sorry' é para erros ou situações mais sérias."},
      {"id":"ge58_a2","type":"mc","prompt":"Someone spilled coffee on your laptop. What's their best response?","options":["It's okay.","Excuse me.","I'm so sorry! I'll pay for the damage.","No problem."],"answerIdx":2,"hint":"Para uma situação séria (estragar algo de outra pessoa), um pedido de desculpas mais formal e uma oferta de compensação são apropriados."},
      {"id":"ge58_a3","type":"fill","prompt":"A: 'I'm really sorry I missed your birthday party.' B: '___ about it — we can celebrate later!'","answer":"Don't worry","keywords":["Don't worry","That's okay","No problem","It's alright","Never mind"],"hint":"A pessoa B está aceitando o pedido de desculpas de forma amigável e positiva."},
      {"id":"ge58_a4","type":"text","prompt":"Write a short dialogue (4-6 lines) where someone apologizes for being late to an important meeting and the other person responds. Use appropriate apology and forgiveness expressions.","keywords":["I'm sorry","I apologize","I'm so sorry","please forgive","excuse me","that's okay","no problem","don't worry","it's alright","never mind","I forgive","it happens","next time","late","forgot","missed","traffic"],"hint":"Crie um diálogo realista de pedido de desculpas e perdão, adequado para um contexto profissional ou pessoal."}
    ]
  },
  ge59: {
    context: "Em inglês, pedidos podem ser feitos de diversas formas com diferentes níveis de formalidade. 'Can you...' é informal, 'Could you...' é mais educado e formal, e 'Would you mind + gerúndio' é ainda mais educado. 'I was wondering if you could...' é uma forma muito cortês usada em situações formais. A escolha da forma depende do relacionamento e do contexto.",
    acts: [
      {"id":"ge59_a1","type":"tf","prompt":"'Would you mind to open the window?' is a grammatically correct polite request.","answer":false,"hint":"'Would you mind' é seguido por gerúndio, não infinitivo. O correto é 'Would you mind opening the window?'"},
      {"id":"ge59_a2","type":"mc","prompt":"Which is the most formal way to make a request?","options":["Can you send me the report?","Could you send me the report?","Send me the report.","I was wondering if you could send me the report."],"answerIdx":3,"hint":"'I was wondering if you could...' é a forma mais formal e indireta de fazer um pedido."},
      {"id":"ge59_a3","type":"fill","prompt":"___ you mind helping me with these bags? They're quite heavy.","answer":"Would","keywords":["Would"],"hint":"'Would you mind + gerúndio' é uma forma muito educada de pedir ajuda."},
      {"id":"ge59_a4","type":"text","prompt":"Write 3 requests at different formality levels: one to a close friend, one to a colleague, and one to your boss or a formal situation.","keywords":["can you","could you","would you mind","I was wondering","would it be possible","I'd like","please","help","send","bring","lend","call","check","review","prepare","book","arrange"],"hint":"Adapte o nível de formalidade do seu pedido ao relacionamento e ao contexto de cada situação."}
    ]
  },
  ge60: {
    context: "Em inglês, há várias formas de expressar preferência. 'Prefer' pode ser usado com gerúndio ou substantivo. 'Would rather' (I'd rather) é seguido pelo verbo no infinitivo sem 'to' e expressa uma preferência no momento da fala. 'Would prefer' é seguido por infinitivo com 'to'. Comparações de preferência usam 'prefer...to...' ou 'would rather...than...'.",
    acts: [
      {"id":"ge60_a1","type":"tf","prompt":"'I'd rather staying home than going out tonight' is a grammatically correct preference expression.","answer":false,"hint":"'Would rather' é seguido pelo verbo no infinitivo sem 'to', não gerúndio. O correto é 'I'd rather stay home'."},
      {"id":"ge60_a2","type":"mc","prompt":"Which sentence correctly expresses preference?","options":["I prefer to swimming to running.","I prefer swimming than running.","I prefer swimming to running.","I prefer swim to run."],"answerIdx":2,"hint":"'Prefer + gerúndio + to + gerúndio' é a estrutura correta para comparar preferências."},
      {"id":"ge60_a3","type":"fill","prompt":"I ___ (would rather) have tea than coffee, if you don't mind.","answer":"would rather","keywords":["would rather","'d rather"],"hint":"'Would rather + infinitivo sem 'to'' expressa uma preferência no momento."},
      {"id":"ge60_a4","type":"text","prompt":"Write 3 sentences expressing your preferences about food, activities, and travel. Use 'prefer', 'would rather', and 'I'd rather...than...'","keywords":["prefer","would rather","I'd rather","than","to","rather than","swimming","reading","cooking","traveling","city","countryside","tea","coffee","summer","winter","working","relaxing","outdoors","indoors"],"hint":"Expresse suas preferências pessoais em diferentes áreas usando as três estruturas ensinadas."}
    ]
  },
  bj1: {
    context: "Em ambientes profissionais, é essencial saber se apresentar de forma clara e confiante. Uma boa introdução inclui nome, cargo e empresa. Expressões como 'Nice to meet you' e 'I work for...' são fundamentais.",
    acts: [
      {"id":"bj1_a1","type":"tf","prompt":"'How do you do?' is a formal greeting used in professional introductions.","answer":true,"hint":"Pense em expressões formais usadas em contextos corporativos."},
      {"id":"bj1_a2","type":"mc","prompt":"Which is the most appropriate way to introduce yourself in a business setting?","options":["Hey, I'm John!","My name is John Smith, and I'm the Sales Director at ABC Corp.","Call me John.","You can know me as John."],"answerIdx":1,"hint":"Em contextos formais, use nome completo e cargo."},
      {"id":"bj1_a3","type":"fill","prompt":"Complete: 'Allow me to ___ myself. My name is Sarah Lee.'","answer":"introduce","keywords":["introduce","present"],"hint":"O verbo significa 'apresentar' em inglês."},
      {"id":"bj1_a4","type":"text","prompt":"Write a short professional introduction of yourself (3-4 sentences) including your name, position, company, and a polite closing line.","keywords":["name","work","position","pleased","meet"],"hint":"Use: 'My name is...', 'I work for...', 'I am responsible for...', 'Pleased to meet you.'"}
    ]
  },
  bj2: {
    context: "Conhecer cargos e departamentos em inglês é essencial no ambiente corporativo. Termos como CEO, CFO, HR e R&D são amplamente usados. Saber identificar hierarquias ajuda na comunicação profissional.",
    acts: [
      {"id":"bj2_a1","type":"tf","prompt":"CFO stands for Chief Financial Officer.","answer":true,"hint":"Pense nas siglas de cargos executivos em inglês."},
      {"id":"bj2_a2","type":"mc","prompt":"Which department handles employee recruitment and benefits?","options":["R&D","IT","HR","PR"],"answerIdx":2,"hint":"HR é a sigla para o departamento que cuida dos funcionários."},
      {"id":"bj2_a3","type":"fill","prompt":"Complete: 'She works in the ___ department and manages our company's online presence.'","answer":"Marketing","keywords":["Marketing","Communications","PR"],"hint":"Este departamento cuida da imagem e promoção da empresa."},
      {"id":"bj2_a4","type":"text","prompt":"Describe the role of a Chief Executive Officer (CEO) in a company using at least 3 sentences.","keywords":["responsible","leads","strategy","decisions","company"],"hint":"Use: 'The CEO is responsible for...', 'He/She leads...', 'The role involves...'"}
    ]
  },
  bj3: {
    context: "A estrutura de uma empresa define como as decisões são tomadas e como os departamentos se relacionam. Termos como 'flat structure', 'hierarchy' e 'chain of command' são comuns nesse contexto. Empresas podem ser organizadas de forma vertical ou horizontal.",
    acts: [
      {"id":"bj3_a1","type":"tf","prompt":"In a flat organizational structure, there are many levels of management between staff and executives.","answer":false,"hint":"Uma estrutura plana tem poucos níveis hierárquicos."},
      {"id":"bj3_a2","type":"mc","prompt":"What does 'chain of command' refer to?","options":["A list of company products","The order of authority in an organization","A type of business contract","A marketing strategy"],"answerIdx":1,"hint":"Pense em hierarquia e quem reporta para quem."},
      {"id":"bj3_a3","type":"fill","prompt":"Complete: 'Our company has a ___ structure, with the CEO at the top and various departments below.'","answer":"hierarchical","keywords":["hierarchical","vertical","top-down"],"hint":"Este adjetivo descreve uma estrutura com vários níveis de autoridade."},
      {"id":"bj3_a4","type":"text","prompt":"Describe the organizational structure of a company you know or imagine, mentioning at least two departments and their roles.","keywords":["department","reports","structure","responsible","team"],"hint":"Use: 'The company has...', 'The ___ department reports to...', 'Each team is responsible for...'"}
    ]
  },
  bj4: {
    context: "Reuniões de negócios têm vocabulário específico que facilita a comunicação eficiente. Palavras como 'agenda', 'minutes', 'quorum' e 'action items' são frequentemente usadas. Dominar esse vocabulário demonstra profissionalismo.",
    acts: [
      {"id":"bj4_a1","type":"tf","prompt":"'Minutes' in a business meeting context refers to the unit of time.","answer":false,"hint":"'Minutes' em reuniões tem um significado diferente do usual."},
      {"id":"bj4_a2","type":"mc","prompt":"What is an 'action item' in a business meeting?","options":["A product to be sold","A task assigned to someone after the meeting","A type of agenda","A vote taken during the meeting"],"answerIdx":1,"hint":"São as tarefas que precisam ser realizadas após a reunião."},
      {"id":"bj4_a3","type":"fill","prompt":"Complete: 'We need a ___ of at least five members to make the vote valid.'","answer":"quorum","keywords":["quorum"],"hint":"É o número mínimo de participantes necessário para uma reunião ser válida."},
      {"id":"bj4_a4","type":"text","prompt":"Write 3-4 sentences explaining what happens during a typical business meeting, using appropriate vocabulary.","keywords":["agenda","discuss","decision","minutes","participants"],"hint":"Use: 'The meeting starts with...', 'Participants discuss...', 'At the end...'"}
    ]
  },
  bj5: {
    context: "Saber abrir e encerrar reuniões de forma profissional é uma habilidade importante. Frases como 'Let's get started', 'I'd like to call this meeting to order' e 'Let's wrap up' são essenciais. Um encerramento claro garante que todos saibam os próximos passos.",
    acts: [
      {"id":"bj5_a1","type":"tf","prompt":"'Let's call it a day' is a phrase used to open a business meeting.","answer":false,"hint":"Essa expressão indica o fim de algo, não o início."},
      {"id":"bj5_a2","type":"mc","prompt":"Which phrase is most appropriate for opening a formal business meeting?","options":["Okay guys, let's chat!","I'd like to call this meeting to order.","So, what's up?","Let's get this over with."],"answerIdx":1,"hint":"Escolha a opção mais formal e profissional."},
      {"id":"bj5_a3","type":"fill","prompt":"Complete: 'Before we ___, let me summarize the key points we discussed today.'","answer":"adjourn","keywords":["adjourn","close","finish","wrap up"],"hint":"Este verbo significa encerrar formalmente uma reunião."},
      {"id":"bj5_a4","type":"text","prompt":"Write the opening statement for a business meeting, including welcoming attendees, stating the purpose, and mentioning the agenda.","keywords":["welcome","purpose","agenda","today","discuss"],"hint":"Use: 'Welcome everyone...', 'The purpose of today's meeting is...', 'Our agenda includes...'"}
    ]
  },
  bj6: {
    context: "A pauta (agenda) e a ata (minutes) são documentos essenciais em reuniões de negócios. A agenda lista os tópicos a serem discutidos, enquanto a ata registra o que foi decidido. Esses documentos garantem clareza e responsabilidade.",
    acts: [
      {"id":"bj6_a1","type":"tf","prompt":"Meeting minutes are written before the meeting takes place.","answer":false,"hint":"A ata registra o que aconteceu, então é escrita durante ou após a reunião."},
      {"id":"bj6_a2","type":"mc","prompt":"What should a meeting agenda typically include?","options":["A list of topics to be discussed and time allocations","The personal opinions of the chair","A summary of the previous year's results","Detailed financial reports"],"answerIdx":0,"hint":"A agenda prepara os participantes para o que será discutido."},
      {"id":"bj6_a3","type":"fill","prompt":"Complete: 'The first ___ item on today's agenda is the quarterly budget review.'","answer":"agenda","keywords":["agenda"],"hint":"A palavra descreve o item da pauta da reunião."},
      {"id":"bj6_a4","type":"text","prompt":"Write a brief meeting agenda for a project status update meeting with at least 3 agenda items.","keywords":["agenda","item","update","review","discuss"],"hint":"Use: '1. Welcome and introductions', '2. Project status update', '3. Next steps and action items'"}
    ]
  },
  bj7: {
    context: "Fazer propostas em reuniões requer linguagem específica para sugerir ideias de forma profissional. Expressões como 'I'd like to propose...', 'What if we...?' e 'I suggest that...' são muito usadas. A linguagem deve ser clara e persuasiva.",
    acts: [
      {"id":"bj7_a1","type":"tf","prompt":"'I move that we approve the budget' is an example of making a formal proposal.","answer":true,"hint":"'I move that...' é uma expressão formal usada para fazer propostas."},
      {"id":"bj7_a2","type":"mc","prompt":"Which phrase is best for making a suggestion in a meeting?","options":["You must do this.","What if we considered a different approach?","That's wrong.","Do it my way."],"answerIdx":1,"hint":"Propostas devem ser feitas de forma educada e aberta à discussão."},
      {"id":"bj7_a3","type":"fill","prompt":"Complete: 'I'd like to ___ that we extend the project deadline by two weeks.'","answer":"propose","keywords":["propose","suggest","recommend","move"],"hint":"Este verbo é usado para apresentar uma ideia ou sugestão formal."},
      {"id":"bj7_a4","type":"text","prompt":"Write a short proposal for a new company initiative (e.g., flexible working hours, team-building event), using appropriate business language.","keywords":["propose","suggest","benefit","consider","implement"],"hint":"Use: 'I would like to propose...', 'This initiative would...', 'I believe the benefits include...'"}
    ]
  },
  bj8: {
    context: "Discutir dados e estatísticas é comum em apresentações e reuniões de negócios. Expressões como 'The data shows...', 'According to the figures...' e 'There was a significant increase of...' ajudam a comunicar informações numéricas com clareza.",
    acts: [
      {"id":"bj8_a1","type":"tf","prompt":"'The sales figures rose sharply' means that sales decreased significantly.","answer":false,"hint":"'Rose' indica aumento, não diminuição."},
      {"id":"bj8_a2","type":"mc","prompt":"Which phrase correctly describes a 50% decrease?","options":["Sales doubled","Sales fell by half","Sales remained stable","Sales increased slightly"],"answerIdx":1,"hint":"Uma queda de 50% significa que os valores caíram pela metade."},
      {"id":"bj8_a3","type":"fill","prompt":"Complete: 'According to the latest ___, our market share has grown by 15% this quarter.'","answer":"data","keywords":["data","figures","statistics","report"],"hint":"Esta palavra refere-se a informações numéricas coletadas."},
      {"id":"bj8_a4","type":"text","prompt":"Describe a trend using fictional data. For example, explain how a company's revenue changed over three years.","keywords":["increased","decreased","compared","percent","showed"],"hint":"Use: 'In [year], revenue was...', 'This represents an increase/decrease of...', 'Compared to...'"}
    ]
  },
  bj9: {
    context: "A abertura de uma apresentação de negócios define o tom e prende a atenção do público. Frases como 'Good morning, ladies and gentlemen', 'Today I'm going to talk about...' e 'By the end of this presentation, you will...' são essenciais para um início profissional.",
    acts: [
      {"id":"bj9_a1","type":"tf","prompt":"Starting a presentation with a rhetorical question is an effective way to engage the audience.","answer":true,"hint":"Perguntas retóricas estimulam o pensamento e engajam o público."},
      {"id":"bj9_a2","type":"mc","prompt":"Which is the best opening line for a business presentation?","options":["Um... I'm not sure where to start.","Good afternoon. Today I'll be presenting our Q3 sales results.","Can everyone hear me? Anyway...","Let me just quickly go through some stuff."],"answerIdx":1,"hint":"Escolha a opção mais clara, confiante e profissional."},
      {"id":"bj9_a3","type":"fill","prompt":"Complete: 'By the end of this presentation, you will have a clear ___ of our new product strategy.'","answer":"understanding","keywords":["understanding","overview","picture","idea"],"hint":"Esta palavra indica o objetivo do que o público vai aprender."},
      {"id":"bj9_a4","type":"text","prompt":"Write the opening of a business presentation about a new marketing campaign, including a greeting, the topic, and what the audience will learn.","keywords":["today","present","discuss","overview","by the end"],"hint":"Use: 'Good morning everyone...', 'Today I will present...', 'By the end, you will understand...'"}
    ]
  },
  bj10: {
    context: "Transições eficazes mantêm o fluxo de uma apresentação e ajudam o público a acompanhar o raciocínio. Expressões como 'Moving on to...', 'Let's turn to...', 'As I mentioned earlier...' e 'This brings me to my next point...' são muito úteis.",
    acts: [
      {"id":"bj10_a1","type":"tf","prompt":"Transition phrases help the audience follow the structure of a presentation.","answer":true,"hint":"Transições funcionam como sinalizadores que guiam o público."},
      {"id":"bj10_a2","type":"mc","prompt":"Which phrase is best used to transition to the next topic in a presentation?","options":["Anyway, whatever.","Now, let's move on to our financial projections.","I forgot what I was saying.","The end."],"answerIdx":1,"hint":"Escolha uma transição clara e profissional."},
      {"id":"bj10_a3","type":"fill","prompt":"Complete: 'This ___ me to my next point, which is customer retention.'","answer":"brings","keywords":["brings","leads","takes"],"hint":"Expressão comum para conectar ideias em apresentações."},
      {"id":"bj10_a4","type":"text","prompt":"Write 3 different transition sentences you could use in a business presentation to move between sections.","keywords":["moving on","now let's","this brings","turning to","next"],"hint":"Use: 'Moving on to...', 'Now let's turn to...', 'This brings me to...'"}
    ]
  },
  bj11: {
    context: "Encerrar uma apresentação de forma eficaz é tão importante quanto começá-la bem. Frases como 'To summarize...', 'In conclusion...' e 'I'd be happy to take any questions' são essenciais. Um bom encerramento reforça a mensagem principal.",
    acts: [
      {"id":"bj11_a1","type":"tf","prompt":"'Are there any questions?' is typically said at the beginning of a presentation.","answer":false,"hint":"Perguntas são geralmente aceitas no final da apresentação."},
      {"id":"bj11_a2","type":"mc","prompt":"Which is the most appropriate closing statement for a business presentation?","options":["That's all I've got. Bye!","In conclusion, I'd like to thank you for your attention and I'm happy to answer any questions.","I think I've said enough.","You can go now."],"answerIdx":1,"hint":"O encerramento deve ser profissional e convidativo."},
      {"id":"bj11_a3","type":"fill","prompt":"Complete: 'To ___, the key takeaways from today's presentation are efficiency, cost reduction, and growth.'","answer":"summarize","keywords":["summarize","conclude","recap","sum up"],"hint":"Este verbo significa resumir os pontos principais."},
      {"id":"bj11_a4","type":"text","prompt":"Write a closing statement for a business presentation about a new product launch, including a summary and an invitation for questions.","keywords":["conclude","summary","takeaway","questions","thank"],"hint":"Use: 'In conclusion...', 'The main points were...', 'I'd be happy to answer any questions.'"}
    ]
  },
  bj12: {
    context: "E-mails de negócios começam com saudações adequadas ao contexto e ao destinatário. 'Dear Mr. Smith' é formal, enquanto 'Hi John' é mais informal. Escolher a saudação certa demonstra respeito e profissionalismo.",
    acts: [
      {"id":"bj12_a1","type":"tf","prompt":"'To Whom It May Concern' is used when you don't know the recipient's name.","answer":true,"hint":"Essa expressão é usada em e-mails ou cartas formais sem destinatário específico."},
      {"id":"bj12_a2","type":"mc","prompt":"Which greeting is most appropriate for a formal business email to someone you've never met?","options":["Hey there!","Yo, what's up?","Dear Ms. Johnson,","Hiya,"],"answerIdx":2,"hint":"E-mails formais usam 'Dear' seguido do título e sobrenome."},
      {"id":"bj12_a3","type":"fill","prompt":"Complete: 'Dear ___ Williams, I am writing to inquire about the position advertised on your website.'","answer":"Mr.","keywords":["Mr.","Ms.","Dr.","Prof."],"hint":"Use o título adequado antes do sobrenome em e-mails formais."},
      {"id":"bj12_a4","type":"text","prompt":"Write the greeting and first sentence of a formal business email to a new client you have never met, introducing yourself and stating your purpose.","keywords":["Dear","writing","introduce","regarding","inquire"],"hint":"Use: 'Dear Mr./Ms. [Name],', 'I am writing to...', 'My name is... and I work for...'"}
    ]
  },
  bj13: {
    context: "E-mails de solicitação e consulta são muito comuns no ambiente profissional. Frases como 'I would like to request...', 'Could you please...?' e 'I am writing to inquire about...' tornam as solicitações claras e educadas.",
    acts: [
      {"id":"bj13_a1","type":"tf","prompt":"'I was wondering if you could send me the report' is a polite way to make a request.","answer":true,"hint":"Usar o passado contínuo ('was wondering') suaviza a solicitação."},
      {"id":"bj13_a2","type":"mc","prompt":"Which is the most professional way to ask for information via email?","options":["Send me the file now.","I was wondering if you could provide more details about your services.","Give me the info ASAP.","Tell me everything."],"answerIdx":1,"hint":"E-mails profissionais usam linguagem educada e indireta."},
      {"id":"bj13_a3","type":"fill","prompt":"Complete: 'I am writing to ___ about the availability of your consulting services next month.'","answer":"inquire","keywords":["inquire","ask","find out"],"hint":"Este verbo significa perguntar formalmente sobre algo."},
      {"id":"bj13_a4","type":"text","prompt":"Write a short business email requesting a price quote for a service, including a polite greeting, the request, and a professional closing.","keywords":["request","quote","provide","appreciate","regards"],"hint":"Use: 'I am writing to request...', 'Could you please provide...', 'I look forward to hearing from you.'"}
    ]
  },
  bj14: {
    context: "Reclamações e pedidos de desculpa são situações delicadas que requerem linguagem precisa e profissional. Frases como 'I am writing to complain about...', 'I sincerely apologize for...' e 'Please accept our apologies' são essenciais.",
    acts: [
      {"id":"bj14_a1","type":"tf","prompt":"'I regret to inform you that...' is commonly used when delivering bad news in a business email.","answer":true,"hint":"Essa expressão é usada para comunicar más notícias de forma formal."},
      {"id":"bj14_a2","type":"mc","prompt":"Which is the most appropriate response to a customer complaint?","options":["It's not our fault.","We sincerely apologize for the inconvenience and will resolve this immediately.","Stop complaining.","Maybe we made a mistake."],"answerIdx":1,"hint":"Uma boa resposta reconhece o problema e oferece solução."},
      {"id":"bj14_a3","type":"fill","prompt":"Complete: 'We ___ apologize for the delay in delivering your order.'","answer":"sincerely","keywords":["sincerely","deeply","truly","humbly"],"hint":"Este advérbio intensifica o pedido de desculpas."},
      {"id":"bj14_a4","type":"text","prompt":"Write a short apology email to a client for a delayed shipment, acknowledging the problem, apologizing, and offering a solution.","keywords":["apologize","delay","inconvenience","resolve","compensate"],"hint":"Use: 'We sincerely apologize for...', 'We understand this has caused...', 'To resolve this, we will...'"}
    ]
  },
  bj15: {
    context: "E-mails com anexos e de acompanhamento (follow-up) são muito comuns no dia a dia corporativo. Expressões como 'Please find attached...', 'As per our conversation...' e 'I am following up on...' garantem comunicação eficiente.",
    acts: [
      {"id":"bj15_a1","type":"tf","prompt":"'Please find enclosed' is typically used in emails to indicate that a file is attached.","answer":true,"hint":"'Enclosed' ou 'attached' indica que há um documento junto ao e-mail."},
      {"id":"bj15_a2","type":"mc","prompt":"Which phrase is most appropriate when sending a document as an email attachment?","options":["Here's the thing you wanted.","Please find attached the report you requested.","I've added some stuff.","Check the file."],"answerIdx":1,"hint":"Use linguagem formal e específica ao mencionar anexos."},
      {"id":"bj15_a3","type":"fill","prompt":"Complete: 'I am writing to ___ up on the proposal I sent last week.'","answer":"follow","keywords":["follow"],"hint":"'Follow up' significa acompanhar ou dar continuidade a algo."},
      {"id":"bj15_a4","type":"text","prompt":"Write a follow-up email after a job interview, thanking the interviewer and reiterating your interest in the position.","keywords":["thank","interview","opportunity","interested","look forward"],"hint":"Use: 'I am writing to thank you for...', 'I remain very interested in...', 'I look forward to hearing from you.'"}
    ]
  },
  bj16: {
    context: "Negociações empresariais exigem vocabulário específico para fazer propostas, contraofertas e chegar a acordos. Termos como 'bottom line', 'win-win', 'leverage' e 'concession' são amplamente usados. Uma boa negociação busca benefícios mútuos.",
    acts: [
      {"id":"bj16_a1","type":"tf","prompt":"A 'win-win' negotiation means one party gets everything they want and the other gets nothing.","answer":false,"hint":"'Win-win' significa que ambas as partes saem satisfeitas."},
      {"id":"bj16_a2","type":"mc","prompt":"What does 'bottom line' mean in a negotiation context?","options":["The last item on the agenda","The minimum acceptable outcome","The final report","The total number of employees"],"answerIdx":1,"hint":"É o limite mínimo que uma parte está disposta a aceitar."},
      {"id":"bj16_a3","type":"fill","prompt":"Complete: 'We are willing to make a ___ on the price if you can guarantee a larger order.'","answer":"concession","keywords":["concession","compromise","reduction","discount"],"hint":"Uma concessão é algo que você abre mão durante uma negociação."},
      {"id":"bj16_a4","type":"text","prompt":"Describe a negotiation scenario where two companies are discussing a contract, using appropriate negotiation vocabulary.","keywords":["offer","negotiate","terms","agreement","concession"],"hint":"Use: 'We would like to propose...', 'Our position is...', 'We are willing to...'"}
    ]
  },
  bj17: {
    context: "Fazer ofertas e contraofertas são etapas fundamentais em qualquer negociação. Expressões como 'We are prepared to offer...', 'That's not quite what we had in mind...' e 'How about we meet halfway?' ajudam a conduzir negociações eficazmente.",
    acts: [
      {"id":"bj17_a1","type":"tf","prompt":"A counteroffer is a rejection of the original offer.","answer":false,"hint":"Uma contraoferta é uma resposta alternativa, não uma rejeição total."},
      {"id":"bj17_a2","type":"mc","prompt":"Which phrase is best for making an initial offer in a negotiation?","options":["Take it or leave it.","We are prepared to offer you a 10% discount on orders over 1,000 units.","I don't know, maybe something?","Give us what we want."],"answerIdx":1,"hint":"Ofertas devem ser específicas e profissionais."},
      {"id":"bj17_a3","type":"fill","prompt":"Complete: 'Your offer is interesting, but could we meet ___? We propose 15% instead of 20%.'","answer":"halfway","keywords":["halfway","in the middle"],"hint":"Esta expressão significa encontrar um meio-termo entre duas posições."},
      {"id":"bj17_a4","type":"text","prompt":"Write a short dialogue where one person makes an offer and the other responds with a counteroffer in a business negotiation.","keywords":["offer","propose","suggest","counter","agree"],"hint":"Pessoa A: 'We can offer...' Pessoa B: 'That's not quite... How about...'"}
    ]
  },
  bj18: {
    context: "Chegar a um acordo é o objetivo final de uma negociação. Expressões como 'We have a deal', 'Let's shake on it', 'We've reached an agreement' e 'I think we can make this work' marcam o fechamento bem-sucedido de negociações.",
    acts: [
      {"id":"bj18_a1","type":"tf","prompt":"'We have a deal' is commonly used to confirm an agreement has been reached.","answer":true,"hint":"Essa expressão confirma que ambas as partes chegaram a um acordo."},
      {"id":"bj18_a2","type":"mc","prompt":"Which phrase signals that an agreement has been successfully reached?","options":["We need to think about it.","I'm afraid we can't agree.","I think we can make this work. We have a deal!","Let's start over."],"answerIdx":2,"hint":"Procure a expressão que indica o fechamento positivo da negociação."},
      {"id":"bj18_a3","type":"fill","prompt":"Complete: 'We've reached an ___ on the terms of the contract.'","answer":"agreement","keywords":["agreement","understanding","deal","consensus"],"hint":"Esta palavra indica que ambas as partes concordaram com algo."},
      {"id":"bj18_a4","type":"text","prompt":"Write the closing statements of a successful business negotiation where both parties agree to the terms of a partnership.","keywords":["agree","terms","partnership","deal","forward"],"hint":"Use: 'We are pleased to agree on...', 'We look forward to...', 'Let's formalize this agreement.'"}
    ]
  },
  bj19: {
    context: "Atender chamadas telefônicas em inglês requer frases específicas para ser profissional e eficiente. Expressões como 'Good morning, ABC Company, how can I help you?', 'Who's calling, please?' e 'Please hold' são essenciais.",
    acts: [
      {"id":"bj19_a1","type":"tf","prompt":"'Speaking' is used on the phone to confirm that you are the person being asked for.","answer":true,"hint":"Quando perguntam se você é fulano, responde-se 'Speaking'."},
      {"id":"bj19_a2","type":"mc","prompt":"What is the most professional way to answer a business phone call?","options":["Yeah?","What do you want?","Good morning, Smith & Associates, this is Maria speaking. How may I help you?","Hello, who are you?"],"answerIdx":2,"hint":"Uma resposta profissional inclui saudação, empresa e nome."},
      {"id":"bj19_a3","type":"fill","prompt":"Complete: 'Could you please ___? I'll transfer you to the relevant department.'","answer":"hold","keywords":["hold","wait","hang on"],"hint":"Pede-se que a pessoa aguarde na linha."},
      {"id":"bj19_a4","type":"text","prompt":"Write a short telephone conversation where a receptionist answers a business call and professionally handles an inquiry.","keywords":["speaking","hold","transfer","help","department"],"hint":"Recepcionista: 'Good morning...', Chamador: 'I'd like to speak with...', Recepcionista: 'May I ask who's calling?'"}
    ]
  },
  bj20: {
    context: "Anotar recados telefônicos é uma habilidade importante no ambiente corporativo. Frases como 'I'm afraid she's not available at the moment', 'Can I take a message?' e 'I'll make sure she gets your message' são fundamentais.",
    acts: [
      {"id":"bj20_a1","type":"tf","prompt":"'Can I take a message?' means you are offering to write down information for someone who is unavailable.","answer":true,"hint":"Essa pergunta é usada quando a pessoa solicitada não está disponível."},
      {"id":"bj20_a2","type":"mc","prompt":"What do you say when the person being called is not available?","options":["She doesn't want to talk to you.","I'm afraid she's not available at the moment. Can I take a message?","She's hiding.","Try again later."],"answerIdx":1,"hint":"Use linguagem educada para informar a indisponibilidade."},
      {"id":"bj20_a3","type":"fill","prompt":"Complete: 'Could you ___ your name and phone number so she can call you back?'","answer":"leave","keywords":["leave","give me","provide"],"hint":"Pede-se que a pessoa deixe suas informações de contato."},
      {"id":"bj20_a4","type":"text","prompt":"Write a telephone conversation where a receptionist takes a message for a colleague who is unavailable, gathering the caller's name, number, and reason for calling.","keywords":["message","name","number","unavailable","return"],"hint":"Use: 'I'm afraid he/she is...', 'May I take a message?', 'Could I have your name and number?'"}
    ]
  },
  bj21: {
    context: "Marcar compromissos por telefone requer linguagem clara e cortês. Expressões como 'I'd like to schedule a meeting', 'Would Tuesday at 2pm work for you?' e 'Let me check my calendar' são muito úteis nesse contexto.",
    acts: [
      {"id":"bj21_a1","type":"tf","prompt":"'Does Thursday afternoon suit you?' is a way of suggesting a time for a meeting.","answer":true,"hint":"'Does... suit you?' é uma forma de verificar se um horário é conveniente."},
      {"id":"bj21_a2","type":"mc","prompt":"Which phrase is most appropriate for scheduling an appointment by phone?","options":["Come whenever.","I'd like to arrange a meeting. Would Wednesday at 10am be convenient for you?","Just show up.","Meet me somewhere."],"answerIdx":1,"hint":"Marcar compromissos requer clareza sobre data, hora e propósito."},
      {"id":"bj21_a3","type":"fill","prompt":"Complete: 'Let me ___ my calendar. Yes, Friday at 3pm works perfectly for me.'","answer":"check","keywords":["check","look at","review"],"hint":"Verificar a agenda antes de confirmar um compromisso."},
      {"id":"bj21_a4","type":"text","prompt":"Write a telephone conversation where two business professionals schedule a meeting, agreeing on a date, time, and location.","keywords":["schedule","appointment","convenient","confirm","calendar"],"hint":"Pessoa A: 'I'd like to schedule...', Pessoa B: 'Would... work for you?', Confirme data e hora."}
    ]
  },
  bj22: {
    context: "Lidar com reclamações de clientes exige empatia, paciência e linguagem profissional. Expressões como 'I understand your frustration', 'I sincerely apologize' e 'Let me look into this for you' demonstram comprometimento com o cliente.",
    acts: [
      {"id":"bj22_a1","type":"tf","prompt":"Saying 'That's not my problem' is an appropriate response to a customer complaint.","answer":false,"hint":"Nunca culpe ou ignore o cliente ao lidar com reclamações."},
      {"id":"bj22_a2","type":"mc","prompt":"What is the best initial response to an angry customer complaint?","options":["You're wrong.","I completely understand your frustration, and I sincerely apologize for the inconvenience.","It's not our fault.","Everyone has problems."],"answerIdx":1,"hint":"Reconheça o sentimento do cliente antes de oferecer soluções."},
      {"id":"bj22_a3","type":"fill","prompt":"Complete: 'I ___ your frustration and assure you we will resolve this as quickly as possible.'","answer":"understand","keywords":["understand","appreciate","acknowledge","recognize"],"hint":"Mostre empatia reconhecendo o sentimento do cliente."},
      {"id":"bj22_a4","type":"text","prompt":"Write a customer service response to a client who received a damaged product, using empathetic and professional language.","keywords":["apologize","understand","resolve","replacement","inconvenience"],"hint":"Use: 'I'm so sorry to hear that...', 'I completely understand...', 'We will send a replacement...'"}
    ]
  },
  bj23: {
    context: "Oferecer soluções eficazes aos clientes é fundamental para manter a satisfação e fidelidade. Frases como 'I'd be happy to offer you a refund', 'We can arrange a replacement' e 'Is there anything else I can help you with?' demonstram comprometimento.",
    acts: [
      {"id":"bj23_a1","type":"tf","prompt":"Offering a solution to a customer complaint is an important part of good customer service.","answer":true,"hint":"Soluções práticas são essenciais para resolver reclamações de clientes."},
      {"id":"bj23_a2","type":"mc","prompt":"Which is the most effective way to offer a solution to a dissatisfied customer?","options":["Deal with it yourself.","I'd be happy to offer you a full refund or a replacement at no extra charge.","It's company policy, sorry.","Read the manual."],"answerIdx":1,"hint":"Ofereça opções concretas e mostre disposição em ajudar."},
      {"id":"bj23_a3","type":"fill","prompt":"Complete: 'We can ___ a full refund to your account within 3-5 business days.'","answer":"process","keywords":["process","arrange","issue","provide"],"hint":"Este verbo indica que a devolução do dinheiro será realizada."},
      {"id":"bj23_a4","type":"text","prompt":"Write a customer service response where you offer two possible solutions to a client who has been waiting too long for a delivery.","keywords":["apologize","offer","refund","expedite","solution"],"hint":"Use: 'To resolve this, we can either...', 'Alternatively...', 'Which option would you prefer?'"}
    ]
  },
  bj24: {
    context: "Viagens de negócios frequentemente envolvem reservas de voos e hotéis. Vocabulário como 'book a flight', 'business class', 'check-in', 'room reservation' e 'cancellation policy' é essencial para organizar viagens profissionais.",
    acts: [
      {"id":"bj24_a1","type":"tf","prompt":"'Book a round trip' means buying a ticket to travel to a destination and back.","answer":true,"hint":"'Round trip' inclui a ida e a volta ao destino."},
      {"id":"bj24_a2","type":"mc","prompt":"What does 'complimentary breakfast' mean when booking a hotel?","options":["Breakfast is very good","Breakfast is included for free","You must pay extra for breakfast","Breakfast is optional"],"answerIdx":1,"hint":"'Complimentary' em inglês significa gratuito, incluído."},
      {"id":"bj24_a3","type":"fill","prompt":"Complete: 'I'd like to ___ a double room for three nights, checking in on Monday.'","answer":"book","keywords":["book","reserve","arrange"],"hint":"Este verbo significa fazer uma reserva."},
      {"id":"bj24_a4","type":"text","prompt":"Write an email to a hotel requesting a reservation for a business trip, including dates, room type, and any special requirements.","keywords":["reserve","check-in","check-out","room","confirm"],"hint":"Use: 'I would like to reserve...', 'The dates are...', 'Please confirm the availability...'"}
    ]
  },
  bj25: {
    context: "Navegar por aeroportos em inglês requer vocabulário específico. Termos como 'departure gate', 'boarding pass', 'customs', 'baggage claim' e 'connecting flight' são essenciais para viagens internacionais de negócios.",
    acts: [
      {"id":"bj25_a1","type":"tf","prompt":"'Baggage claim' is the area where passengers collect their luggage after a flight.","answer":true,"hint":"É a área do aeroporto onde as malas chegam após o voo."},
      {"id":"bj25_a2","type":"mc","prompt":"What does 'customs' refer to at an international airport?","options":["A place to buy souvenirs","The area where officials check passengers and their goods","A type of airline ticket","The boarding area"],"answerIdx":1,"hint":"Alfândega é onde suas bagagens e documentos são verificados."},
      {"id":"bj25_a3","type":"fill","prompt":"Complete: 'Please proceed to ___ B12 for your flight to London.'","answer":"gate","keywords":["gate","terminal","boarding gate"],"hint":"É o local de embarque do avião."},
      {"id":"bj25_a4","type":"text","prompt":"Describe the process of going through an international airport from check-in to boarding, using appropriate airport vocabulary.","keywords":["check-in","security","passport","gate","board"],"hint":"Use: 'First, you need to check in...', 'Then proceed through security...', 'Finally, board at gate...'"}
    ]
  },
  bj26: {
    context: "Fazer networking em eventos profissionais é essencial para expandir contatos de negócios. Expressões como 'What line of work are you in?', 'Here's my business card' e 'It was great meeting you' facilitam conexões profissionais significativas.",
    acts: [
      {"id":"bj26_a1","type":"tf","prompt":"'What do you do?' is a common question used when networking at a business event.","answer":true,"hint":"Essa pergunta é usada para descobrir a área de atuação profissional de alguém."},
      {"id":"bj26_a2","type":"mc","prompt":"Which is the best way to end a networking conversation professionally?","options":["I have to go now, bye!","It was great meeting you. Here's my card—let's stay in touch.","You're boring.","I don't need your contact."],"answerIdx":1,"hint":"Um encerramento profissional inclui troca de contatos e palavras positivas."},
      {"id":"bj26_a3","type":"fill","prompt":"Complete: 'I'd love to ___ in touch. Can I have your business card?'","answer":"keep","keywords":["keep","stay","get"],"hint":"'Keep/stay in touch' significa manter contato com alguém."},
      {"id":"bj26_a4","type":"text","prompt":"Write a short networking conversation at a business conference between two professionals meeting for the first time.","keywords":["work","company","nice","card","connect"],"hint":"Pessoa A: 'Hi, I'm...', Pessoa B: 'What do you do?', Troque informações e finalize profissionalmente."}
    ]
  },
  bj27: {
    context: "O LinkedIn é a principal rede social profissional do mundo. Termos como 'profile', 'headline', 'connections', 'endorsements' e 'recommendations' são fundamentais para criar e manter uma presença profissional online eficaz.",
    acts: [
      {"id":"bj27_a1","type":"tf","prompt":"A LinkedIn 'headline' is a brief description of your professional role that appears under your name.","answer":true,"hint":"O headline é uma linha curta que resume sua identidade profissional."},
      {"id":"bj27_a2","type":"mc","prompt":"What are 'endorsements' on LinkedIn?","options":["Job offers from companies","Short confirmations from connections that validate your skills","Negative reviews of your work","Messages from recruiters"],"answerIdx":1,"hint":"São validações das suas habilidades feitas por pessoas da sua rede."},
      {"id":"bj27_a3","type":"fill","prompt":"Complete: 'I'd like to add you to my professional ___ on LinkedIn.'","answer":"network","keywords":["network","connections","contacts"],"hint":"Sua rede de contatos profissionais no LinkedIn."},
      {"id":"bj27_a4","type":"text","prompt":"Write a professional LinkedIn summary (3-4 sentences) for a marketing manager with 5 years of experience.","keywords":["experience","specialize","passionate","results","connect"],"hint":"Use: 'I am a marketing professional with...', 'I specialize in...', 'I am passionate about...'"}
    ]
  },
  bj28: {
    context: "Entrevistas de emprego em inglês requerem preparação para responder perguntas comuns de forma confiante. Perguntas como 'Tell me about yourself', 'Why do you want to work here?' e 'What are your greatest strengths?' são muito frequentes.",
    acts: [
      {"id":"bj28_a1","type":"tf","prompt":"'Tell me about yourself' in a job interview is an invitation to share your entire life story.","answer":false,"hint":"Essa resposta deve ser profissional e focada em experiência e habilidades relevantes."},
      {"id":"bj28_a2","type":"mc","prompt":"Which is the best response to 'Why do you want to work here?'","options":["I need money.","I've always admired your company's innovation and believe my skills align perfectly with your goals.","It's close to my house.","My friend told me to apply."],"answerIdx":1,"hint":"Mostre que você pesquisou a empresa e tem razões profissionais."},
      {"id":"bj28_a3","type":"fill","prompt":"Complete: 'Where do you see ___ in five years?' is a common interview question about your career goals.","answer":"yourself","keywords":["yourself"],"hint":"A pergunta é sobre seus planos e objetivos profissionais futuros."},
      {"id":"bj28_a4","type":"text","prompt":"Write a professional response to the interview question 'Tell me about yourself' for a software engineer with 3 years of experience.","keywords":["background","experience","skills","currently","excited"],"hint":"Use: 'I have a background in...', 'I have been working as...', 'I am excited about the opportunity to...'"}
    ]
  },
  bj29: {
    context: "Falar sobre pontos fortes e fracos em entrevistas é uma oportunidade para demonstrar autoconhecimento. É importante apresentar fraquezas de forma construtiva, mostrando como você as está melhorando. Exemplos: 'I'm a perfectionist', 'I'm working on improving my public speaking skills'.",
    acts: [
      {"id":"bj29_a1","type":"tf","prompt":"When discussing weaknesses in a job interview, you should always end by explaining how you're working to improve.","answer":true,"hint":"Transformar uma fraqueza em área de melhoria demonstra maturidade profissional."},
      {"id":"bj29_a2","type":"mc","prompt":"Which is the best way to answer 'What is your greatest weakness?'","options":["I'm perfect, I have no weaknesses.","I tend to take on too much, but I've been learning to delegate and prioritize tasks more effectively.","I'm lazy sometimes.","I hate working with others."],"answerIdx":1,"hint":"Mencione uma fraqueza real e mostre como está trabalhando para melhorá-la."},
      {"id":"bj29_a3","type":"fill","prompt":"Complete: 'One of my greatest ___ is my ability to work well under pressure and meet tight deadlines.'","answer":"strengths","keywords":["strengths","qualities","skills"],"hint":"A palavra refere-se às suas qualidades ou pontos positivos."},
      {"id":"bj29_a4","type":"text","prompt":"Write a response to both 'What is your greatest strength?' and 'What is your greatest weakness?' for a project manager role.","keywords":["strength","weakness","working on","improve","result"],"hint":"Força: 'My greatest strength is...'. Fraqueza: 'One area I'm working on is..., and I've been...'"}
    ]
  },
  bj30: {
    context: "Negociar salário em uma entrevista é uma habilidade importante. Frases como 'Based on my experience, I was expecting...', 'Is there flexibility in the salary?' e 'What is the salary range for this position?' ajudam a abordar o tema de forma profissional.",
    acts: [
      {"id":"bj30_a1","type":"tf","prompt":"It is generally advisable to research typical salary ranges before negotiating your pay in an interview.","answer":true,"hint":"Conhecer o mercado te ajuda a negociar com base em dados concretos."},
      {"id":"bj30_a2","type":"mc","prompt":"Which is the most professional way to ask about salary in an interview?","options":["How much are you paying?","Could you tell me what the salary range for this position is?","I want maximum pay.","Money is all that matters to me."],"answerIdx":1,"hint":"Aborde o salário de forma educada e profissional."},
      {"id":"bj30_a3","type":"fill","prompt":"Complete: 'Based on my experience and the market rate, I was ___ a salary in the range of $70,000 to $80,000.'","answer":"expecting","keywords":["expecting","hoping for","looking for","targeting"],"hint":"Indique sua expectativa salarial de forma educada."},
      {"id":"bj30_a4","type":"text","prompt":"Write a short salary negotiation dialogue where a candidate professionally asks for a higher salary than initially offered.","keywords":["offer","expecting","experience","flexible","consider"],"hint":"Candidato: 'Thank you for the offer. Based on my experience...', Entrevistador: 'We can consider...'"}
    ]
  },
  bj31: {
    context: "Um currículo em inglês (CV ou resume) deve ser claro, conciso e profissional. Seções como 'Work Experience', 'Education', 'Skills' e 'Achievements' são padrão. Verbos como 'managed', 'developed', 'implemented' e 'achieved' tornam o currículo mais impactante.",
    acts: [
      {"id":"bj31_a1","type":"tf","prompt":"Action verbs like 'managed', 'developed', and 'led' are recommended for describing work experience on a CV.","answer":true,"hint":"Verbos de ação tornam as experiências mais dinâmicas e impressionantes."},
      {"id":"bj31_a2","type":"mc","prompt":"Which section of a CV typically lists your formal qualifications and degrees?","options":["Work Experience","References","Education","Skills"],"answerIdx":2,"hint":"Formação acadêmica é listada nesta seção do currículo."},
      {"id":"bj31_a3","type":"fill","prompt":"Complete: 'I ___ a team of 10 sales representatives and exceeded our quarterly targets by 20%.'","answer":"managed","keywords":["managed","led","supervised","oversaw"],"hint":"Use um verbo de ação forte no passado simples."},
      {"id":"bj31_a4","type":"text","prompt":"Write the 'Work Experience' section for a CV entry for a marketing coordinator position at a tech company.","keywords":["managed","developed","coordinated","achieved","responsible"],"hint":"Use: '[Job Title] | [Company] | [Dates]' seguido de bullet points com verbos de ação."}
    ]
  },
  bj32: {
    context: "Uma carta de apresentação (cover letter) acompanha o currículo e explica por que você é o candidato ideal. Deve incluir por que você quer trabalhar na empresa, suas qualificações relevantes e um convite para uma entrevista. Tom profissional e entusiasta é fundamental.",
    acts: [
      {"id":"bj32_a1","type":"tf","prompt":"A cover letter should simply repeat all the information already in your CV.","answer":false,"hint":"A carta de apresentação complementa o currículo com contexto e personalidade."},
      {"id":"bj32_a2","type":"mc","prompt":"What is the main purpose of a cover letter?","options":["To list all your qualifications","To explain why you are the ideal candidate for the specific position","To describe your hobbies","To request a higher salary"],"answerIdx":1,"hint":"A carta conecta suas experiências com as necessidades específicas do emprego."},
      {"id":"bj32_a3","type":"fill","prompt":"Complete: 'I am writing to ___ for the position of Marketing Manager advertised on your website.'","answer":"apply","keywords":["apply","express interest in","inquire about"],"hint":"Este verbo indica que você está se candidatando a uma vaga."},
      {"id":"bj32_a4","type":"text","prompt":"Write the opening paragraph of a cover letter for a financial analyst position at an international company.","keywords":["apply","position","experience","excited","contribute"],"hint":"Use: 'I am writing to apply for...', 'With [X] years of experience in...', 'I am excited by the opportunity to...'"}
    ]
  },
  bj33: {
    context: "Avaliações de desempenho são momentos importantes para discutir conquistas, áreas de melhoria e objetivos futuros. Expressões como 'exceeded expectations', 'areas for development', 'set goals' e 'constructive feedback' são fundamentais nesse contexto.",
    acts: [
      {"id":"bj33_a1","type":"tf","prompt":"A performance review is only for identifying employee weaknesses.","answer":false,"hint":"Avaliações de desempenho também reconhecem conquistas e definem metas."},
      {"id":"bj33_a2","type":"mc","prompt":"What does 'exceeded expectations' mean in a performance review?","options":["The employee did poorly","The employee performed better than required","The employee met the minimum requirements","The employee was absent frequently"],"answerIdx":1,"hint":"Indica que o funcionário superou o que era esperado."},
      {"id":"bj33_a3","type":"fill","prompt":"Complete: 'This quarter, you consistently ___ expectations in both quality and efficiency.'","answer":"exceeded","keywords":["exceeded","surpassed","went beyond","met and exceeded"],"hint":"Use um verbo que indica superar o esperado."},
      {"id":"bj33_a4","type":"text","prompt":"Write a brief performance review summary for an employee who performed well but needs to improve communication skills.","keywords":["performance","strength","area","improve","goal"],"hint":"Use: 'Overall performance has been...', 'Key strengths include...', 'One area for development is...'"}
    ]
  },
  bj34: {
    context: "Dar e receber feedback de forma eficaz é essencial para o crescimento profissional. Feedback construtivo usa frases como 'I appreciate your effort', 'One area to work on is...' e 'Have you considered...?'. Receber feedback bem demonstra maturidade.",
    acts: [
      {"id":"bj34_a1","type":"tf","prompt":"Constructive feedback should focus only on the negative aspects of someone's work.","answer":false,"hint":"Feedback construtivo equilibra elogios e sugestões de melhoria."},
      {"id":"bj34_a2","type":"mc","prompt":"Which is the best way to give constructive feedback?","options":["Your work is terrible.","I really appreciate your effort. One area we could work on together is improving your report structure.","You always make mistakes.","Just do it right next time."],"answerIdx":1,"hint":"Comece com algo positivo, depois sugira melhorias de forma respeitosa."},
      {"id":"bj34_a3","type":"fill","prompt":"Complete: 'Thank you for the feedback. I will take that on ___ and work on improving my presentation skills.'","answer":"board","keywords":["board"],"hint":"'Take on board' significa aceitar e considerar a sugestão."},
      {"id":"bj34_a4","type":"text","prompt":"Write a short feedback conversation where a manager gives constructive feedback to an employee about a recent presentation.","keywords":["appreciate","suggest","improve","positive","consider"],"hint":"Gerente: 'I really liked...', 'However, one thing to consider...', Funcionário: 'Thank you, I'll work on...'"}
    ]
  },
  bj35: {
    context: "Gerenciamento de projetos utiliza vocabulário específico. Termos como 'milestone', 'deliverable', 'stakeholder', 'scope', 'risk assessment' e 'KPI' (Key Performance Indicator) são essenciais para quem trabalha com projetos.",
    acts: [
      {"id":"bj35_a1","type":"tf","prompt":"A 'milestone' in project management is a significant point or event in the project timeline.","answer":true,"hint":"Milestones marcam conquistas importantes no progresso de um projeto."},
      {"id":"bj35_a2","type":"mc","prompt":"What is a 'deliverable' in project management?","options":["A package sent to a client","A specific result or output that must be produced","A type of meeting","A financial report"],"answerIdx":1,"hint":"É o resultado tangível que deve ser entregue ao final de uma fase do projeto."},
      {"id":"bj35_a3","type":"fill","prompt":"Complete: 'All ___ must approve the final project plan before we begin implementation.'","answer":"stakeholders","keywords":["stakeholders","parties","managers","directors"],"hint":"São as pessoas ou grupos com interesse no resultado do projeto."},
      {"id":"bj35_a4","type":"text","prompt":"Describe the key steps of managing a project from start to finish, using project management vocabulary.","keywords":["scope","milestone","deadline","stakeholder","deliverable"],"hint":"Use: 'First, define the scope...', 'Set milestones...', 'Monitor progress...', 'Deliver the final result...'"}
    ]
  },
  bj36: {
    context: "Prazos e cronogramas são elementos críticos em negócios. Expressões como 'meet the deadline', 'ahead of schedule', 'behind schedule', 'time frame' e 'on track' são usadas constantemente em ambientes corporativos.",
    acts: [
      {"id":"bj36_a1","type":"tf","prompt":"'Behind schedule' means the project is progressing faster than planned.","answer":false,"hint":"'Behind schedule' significa que o projeto está atrasado em relação ao planejado."},
      {"id":"bj36_a2","type":"mc","prompt":"Which phrase means the project is progressing as planned?","options":["We are behind schedule","We are on track","We have missed the deadline","The timeline has changed"],"answerIdx":1,"hint":"'On track' indica que tudo está ocorrendo conforme o planejado."},
      {"id":"bj36_a3","type":"fill","prompt":"Complete: 'We need to ___ the deadline or the client will lose confidence in our team.'","answer":"meet","keywords":["meet","hit","respect"],"hint":"'Meet the deadline' significa cumprir o prazo."},
      {"id":"bj36_a4","type":"text","prompt":"Write a project status update email informing the team that the project is slightly behind schedule and proposing solutions to get back on track.","keywords":["behind","schedule","delay","solutions","priority"],"hint":"Use: 'Unfortunately, we are slightly behind...', 'The reason for the delay is...', 'To get back on track, we will...'"}
    ]
  },
  bj37: {
    context: "Resolver problemas em negócios envolve identificar causas, avaliar opções e implementar soluções. Expressões como 'root cause', 'brainstorm', 'weigh the options', 'implement a solution' e 'evaluate results' são essenciais para o processo.",
    acts: [
      {"id":"bj37_a1","type":"tf","prompt":"'Brainstorming' is a technique where all ideas are welcomed without immediate judgment.","answer":true,"hint":"No brainstorming, todas as ideias são válidas inicialmente."},
      {"id":"bj37_a2","type":"mc","prompt":"What is the first step in effective business problem-solving?","options":["Implementing a solution immediately","Identifying and clearly defining the problem","Asking others to solve it","Ignoring the problem"],"answerIdx":1,"hint":"Antes de resolver, é necessário entender claramente o problema."},
      {"id":"bj37_a3","type":"fill","prompt":"Complete: 'We need to identify the ___ cause of the production delay before proposing solutions.'","answer":"root","keywords":["root","main","underlying","core"],"hint":"É a causa fundamental ou original de um problema."},
      {"id":"bj37_a4","type":"text","prompt":"Describe how you would approach solving a problem where customer satisfaction rates have dropped significantly. Use problem-solving language.","keywords":["identify","analyze","solution","implement","evaluate"],"hint":"Use: 'First, I would identify...', 'Then, analyze...', 'Possible solutions include...', 'We would then evaluate...'"}
    ]
  },
  bj38: {
    context: "Tomar decisões em ambientes corporativos requer linguagem específica. Expressões como 'weigh the pros and cons', 'make an informed decision', 'go with option A' e 'the consensus is...' são usadas ao comunicar processos decisórios.",
    acts: [
      {"id":"bj38_a1","type":"tf","prompt":"'Weighing the pros and cons' means considering both the advantages and disadvantages before deciding.","answer":true,"hint":"Avaliar prós e contras é uma etapa essencial da tomada de decisão racional."},
      {"id":"bj38_a2","type":"mc","prompt":"Which phrase is best used when announcing a final decision?","options":["I don't know what to do.","After careful consideration, we have decided to proceed with Option B.","Maybe we'll decide later.","Whatever."],"answerIdx":1,"hint":"Anuncie decisões com clareza e justificativa."},
      {"id":"bj38_a3","type":"fill","prompt":"Complete: 'The ___ is to move forward with the new supplier, as the majority agreed it offers the best value.'","answer":"consensus","keywords":["consensus","decision","agreement","conclusion"],"hint":"Indica que a maioria chegou a um acordo."},
      {"id":"bj38_a4","type":"text","prompt":"Write a short memo announcing a business decision to hire additional staff, explaining the reasoning behind the decision.","keywords":["decided","reason","benefit","effective","forward"],"hint":"Use: 'After careful consideration...', 'We have decided to...', 'This decision will...', 'We believe this will...'"}
    ]
  },
  bj39: {
    context: "Vocabulário financeiro básico é essencial para entender relatórios e discussões empresariais. Termos como 'revenue' (receita total), 'profit' (lucro), 'loss' (prejuízo), 'gross margin' e 'net income' são fundamentais em contextos corporativos.",
    acts: [
      {"id":"bj39_a1","type":"tf","prompt":"'Revenue' refers to the profit a company makes after deducting all expenses.","answer":false,"hint":"Revenue é a receita bruta; lucro (profit) é o que sobra após as despesas."},
      {"id":"bj39_a2","type":"mc","prompt":"What is the difference between 'gross profit' and 'net profit'?","options":["They are the same thing","Gross profit deducts cost of goods sold; net profit deducts all expenses","Net profit is always higher","Gross profit includes taxes"],"answerIdx":1,"hint":"Lucro bruto é antes das despesas operacionais; lucro líquido é após todas as deduções."},
      {"id":"bj39_a3","type":"fill","prompt":"Complete: 'Despite strong revenue, the company reported a net ___ due to high operating costs.'","answer":"loss","keywords":["loss","deficit"],"hint":"Quando as despesas superam as receitas, o resultado é negativo."},
      {"id":"bj39_a4","type":"text","prompt":"Explain the financial performance of a fictional company that earned $5 million in revenue but had $6 million in expenses, using appropriate financial vocabulary.","keywords":["revenue","expenses","loss","result","performance"],"hint":"Use: 'The company reported revenue of...', 'However, expenses totaled...', 'This resulted in a net loss of...'"}
    ]
  },
  bj40: {
    context: "Orçamentos e previsões financeiras são ferramentas essenciais de planejamento. Termos como 'budget', 'forecast', 'variance', 'allocation', 'cash flow' e 'break-even point' são usados em discussões financeiras corporativas.",
    acts: [
      {"id":"bj40_a1","type":"tf","prompt":"A 'forecast' is an estimate of future financial performance based on current data.","answer":true,"hint":"Previsões usam dados atuais para estimar resultados futuros."},
      {"id":"bj40_a2","type":"mc","prompt":"What does 'break-even point' mean?","options":["When a company shuts down","When revenue equals total costs, resulting in neither profit nor loss","When profits are at their highest","When the budget is cut"],"answerIdx":1,"hint":"É o ponto onde receitas e custos se igualam, sem lucro nem prejuízo."},
      {"id":"bj40_a3","type":"fill","prompt":"Complete: 'The marketing department exceeded its ___ by 15%, spending more than planned.'","answer":"budget","keywords":["budget","allocation","limit"],"hint":"É o valor planejado para gastos de um departamento ou projeto."},
      {"id":"bj40_a4","type":"text","prompt":"Write a short financial summary explaining that a company is on track with its budget but needs to reduce costs in Q4 to meet year-end targets.","keywords":["budget","forecast","target","reduce","quarter"],"hint":"Use: 'Our year-to-date spending is...', 'However, to meet our annual targets...', 'We recommend reducing costs in...'"}
    ]
  },
  bj41: {
    context: "Marketing moderno usa uma ampla variedade de termos especializados. Palavras como 'target audience', 'brand awareness', 'campaign', 'conversion rate', 'SEO' e 'value proposition' são fundamentais para profissionais da área.",
    acts: [
      {"id":"bj41_a1","type":"tf","prompt":"'Target audience' refers to the specific group of consumers a marketing campaign is aimed at.","answer":true,"hint":"O público-alvo são as pessoas mais propensas a se interessar pelo produto ou serviço."},
      {"id":"bj41_a2","type":"mc","prompt":"What does 'brand awareness' mean?","options":["How well a company knows its competitors","The extent to which consumers recognize and remember a brand","A type of advertising budget","The logo design of a company"],"answerIdx":1,"hint":"É o grau de reconhecimento e familiaridade dos consumidores com uma marca."},
      {"id":"bj41_a3","type":"fill","prompt":"Complete: 'Our latest campaign increased website traffic by 40%, improving our ___ rate significantly.'","answer":"conversion","keywords":["conversion","click-through","engagement"],"hint":"É a porcentagem de visitantes que realizam a ação desejada."},
      {"id":"bj41_a4","type":"text","prompt":"Write a brief marketing plan overview for launching a new eco-friendly product, including target audience, key message, and channels.","keywords":["audience","campaign","channel","message","strategy"],"hint":"Use: 'Our target audience is...', 'The key message is...', 'We will use channels such as...'"}
    ]
  },
  bj42: {
    context: "Vendas exigem vocabulário e técnicas específicas. Termos como 'pitch', 'close a deal', 'lead', 'prospect', 'upselling' e 'cold calling' são essenciais para profissionais de vendas. Saber apresentar benefícios em vez de características é uma técnica fundamental.",
    acts: [
      {"id":"bj42_a1","type":"tf","prompt":"'Upselling' means encouraging a customer to buy a cheaper version of a product.","answer":false,"hint":"Upselling é incentivar o cliente a comprar uma versão mais cara ou premium."},
      {"id":"bj42_a2","type":"mc","prompt":"What is a 'sales pitch'?","options":["A price reduction","A persuasive presentation aimed at convincing a customer to buy","A complaint from a client","A type of sales report"],"answerIdx":1,"hint":"É a apresentação persuasiva feita para convencer o cliente."},
      {"id":"bj42_a3","type":"fill","prompt":"Complete: 'After weeks of negotiation, we finally managed to ___ the deal with the new client.'","answer":"close","keywords":["close","seal","finalize"],"hint":"'Close a deal' significa finalizar ou concluir uma venda."},
      {"id":"bj42_a4","type":"text","prompt":"Write a short sales pitch for a cloud-based project management software aimed at small businesses.","keywords":["benefit","solution","helps","invest","improve"],"hint":"Foque nos benefícios: 'Our software helps you...', 'You will save...', 'Thousands of businesses trust...'"}
    ]
  },
  bj43: {
    context: "Cadeia de suprimentos e logística são áreas críticas para o funcionamento das empresas. Termos como 'supply chain', 'inventory', 'warehouse', 'distribution', 'lead time' e 'just-in-time' são fundamentais nesse setor.",
    acts: [
      {"id":"bj43_a1","type":"tf","prompt":"'Lead time' refers to the time between placing an order and receiving the goods.","answer":true,"hint":"É o tempo total desde o pedido até a entrega."},
      {"id":"bj43_a2","type":"mc","prompt":"What does 'just-in-time' (JIT) inventory management mean?","options":["Delivering goods as early as possible","Receiving goods only when needed to reduce storage costs","Storing large quantities of goods","Delivering goods late"],"answerIdx":1,"hint":"JIT visa receber materiais exatamente quando são necessários, minimizando estoques."},
      {"id":"bj43_a3","type":"fill","prompt":"Complete: 'The goods are stored in our ___ before being distributed to retail stores.'","answer":"warehouse","keywords":["warehouse","storage facility","distribution center"],"hint":"É o local onde os produtos são armazenados."},
      {"id":"bj43_a4","type":"text","prompt":"Describe the supply chain process for a clothing company, from raw materials to the final customer, using appropriate logistics vocabulary.","keywords":["supplier","manufacture","warehouse","distribute","deliver"],"hint":"Use: 'Raw materials are sourced from...', 'Products are manufactured at...', 'Then distributed to...'"}
    ]
  },
  bj44: {
    context: "Comércio internacional envolve vocabulário específico de importação e exportação. Termos como 'customs duties', 'tariff', 'freight', 'bill of lading', 'letter of credit' e 'free on board (FOB)' são essenciais para quem trabalha nessa área.",
    acts: [
      {"id":"bj44_a1","type":"tf","prompt":"A 'tariff' is a tax imposed on imported or exported goods.","answer":true,"hint":"Tarifas são impostos aduaneiros sobre mercadorias que cruzam fronteiras."},
      {"id":"bj44_a2","type":"mc","prompt":"What does 'FOB' (Free on Board) mean in international trade?","options":["The goods are free of charge","The seller is responsible for goods until they are loaded on the ship","The buyer pays for all freight costs","The goods are shipped by air"],"answerIdx":1,"hint":"FOB define até onde o vendedor é responsável pela mercadoria."},
      {"id":"bj44_a3","type":"fill","prompt":"Complete: 'The goods were held at ___ because the documentation was incomplete.'","answer":"customs","keywords":["customs","the port","border control"],"hint":"A alfândega reteve as mercadorias por problemas com os documentos."},
      {"id":"bj44_a4","type":"text","prompt":"Write a brief email to a customs broker asking for assistance with the import process for electronics from Asia, mentioning documentation needs.","keywords":["import","customs","documentation","tariff","shipment"],"hint":"Use: 'We are importing...', 'Could you assist with customs clearance?', 'We need help with...'"}
    ]
  },
  bj45: {
    context: "Vocabulário jurídico e contratual é essencial em negócios. Termos como 'contract', 'clause', 'liability', 'breach of contract', 'indemnification', 'non-disclosure agreement (NDA)' e 'arbitration' aparecem frequentemente em contextos corporativos.",
    acts: [
      {"id":"bj45_a1","type":"tf","prompt":"A 'non-disclosure agreement' (NDA) is a contract that prohibits parties from sharing confidential information.","answer":true,"hint":"NDAs protegem informações confidenciais entre as partes envolvidas."},
      {"id":"bj45_a2","type":"mc","prompt":"What is a 'breach of contract'?","options":["Signing a new contract","Failing to fulfill the terms of a contract","Renewing a contract","Negotiating contract terms"],"answerIdx":1,"hint":"Ocorre quando uma das partes não cumpre o que foi acordado no contrato."},
      {"id":"bj45_a3","type":"fill","prompt":"Complete: 'The contract includes a ___ that requires 30 days' notice for termination.'","answer":"clause","keywords":["clause","provision","term","condition"],"hint":"É uma seção ou condição específica dentro de um contrato."},
      {"id":"bj45_a4","type":"text","prompt":"Describe the key components that should be included in a business service contract between two companies.","keywords":["parties","terms","payment","liability","termination"],"hint":"Inclua: 'The contract should specify the parties involved, the scope of services, payment terms, liability clauses...'"}
    ]
  },
  bj46: {
    context: "Propriedade intelectual protege criações da mente. Termos como 'trademark', 'copyright', 'patent', 'trade secret' e 'intellectual property rights' são fundamentais para proteger ativos intangíveis de uma empresa.",
    acts: [
      {"id":"bj46_a1","type":"tf","prompt":"A 'patent' protects original literary or artistic works such as books and music.","answer":false,"hint":"Patentes protegem invenções; direitos autorais (copyright) protegem obras artísticas."},
      {"id":"bj46_a2","type":"mc","prompt":"What does a 'trademark' protect?","options":["A new invention","Brand names, logos, and symbols that identify a company's products","Scientific research","Confidential business processes"],"answerIdx":1,"hint":"Marcas registradas protegem a identidade visual e o nome de uma marca."},
      {"id":"bj46_a3","type":"fill","prompt":"Complete: 'Our new software algorithm is protected by a ___, preventing competitors from copying it.'","answer":"patent","keywords":["patent","copyright","trademark"],"hint":"Esta forma de propriedade intelectual protege invenções e inovações técnicas."},
      {"id":"bj46_a4","type":"text","prompt":"Explain the difference between a trademark and a copyright, giving one example of each.","keywords":["trademark","copyright","protect","brand","creative"],"hint":"Trademark: 'A trademark protects brand identity, such as...'. Copyright: 'Copyright protects creative works, such as...'"}
    ]
  },
  bj47: {
    context: "Recursos Humanos (RH) lida com a gestão de pessoas nas organizações. Termos como 'onboarding', 'turnover', 'compensation package', 'employee engagement', 'workforce planning' e 'talent acquisition' são fundamentais na área.",
    acts: [
      {"id":"bj47_a1","type":"tf","prompt":"'Onboarding' refers to the process of integrating a new employee into an organization.","answer":true,"hint":"Onboarding é o processo de introduzir e integrar novos funcionários."},
      {"id":"bj47_a2","type":"mc","prompt":"What does 'employee turnover' mean?","options":["How much an employee is paid","The rate at which employees leave and are replaced","A type of training program","An employee's annual review"],"answerIdx":1,"hint":"Alta rotatividade indica que muitos funcionários estão saindo da empresa."},
      {"id":"bj47_a3","type":"fill","prompt":"Complete: 'The company offers an attractive ___ package including health insurance, pension, and bonuses.'","answer":"compensation","keywords":["compensation","benefits","remuneration"],"hint":"É o conjunto de salário e benefícios oferecidos ao funcionário."},
      {"id":"bj47_a4","type":"text","prompt":"Describe three key responsibilities of a Human Resources department in a large company.","keywords":["recruitment","training","performance","policy","benefits"],"hint":"Use: 'HR is responsible for...', 'Another key function is...', 'Additionally, HR manages...'"}
    ]
  },
  bj48: {
    context: "O processo de recrutamento e contratação tem etapas bem definidas. Termos como 'job posting', 'applicant', 'shortlist', 'background check', 'offer letter' e 'probationary period' são comuns em processos seletivos.",
    acts: [
      {"id":"bj48_a1","type":"tf","prompt":"A 'probationary period' is a trial period during which a new employee's performance is assessed.","answer":true,"hint":"É o período inicial de avaliação antes de confirmar a contratação definitiva."},
      {"id":"bj48_a2","type":"mc","prompt":"What is a 'shortlist' in the recruitment process?","options":["A list of all applicants","A reduced list of the most suitable candidates","A list of rejected candidates","The final employment contract"],"answerIdx":1,"hint":"É a lista reduzida dos candidatos mais qualificados que passaram para a próxima etapa."},
      {"id":"bj48_a3","type":"fill","prompt":"Complete: 'We received over 200 applications and will ___ the best candidates for interviews next week.'","answer":"shortlist","keywords":["shortlist","select","screen","identify"],"hint":"Significa reduzir a lista de candidatos aos mais promissores."},
      {"id":"bj48_a4","type":"text","prompt":"Describe the typical steps in a recruitment process from posting a job to making an offer.","keywords":["post","application","interview","background","offer"],"hint":"Use: 'First, post the job...', 'Then review applications...', 'Conduct interviews...', 'Finally, extend an offer...'"}
    ]
  },
  bj49: {
    context: "O trabalho remoto criou uma nova série de termos profissionais. Expressões como 'work from home (WFH)', 'virtual meeting', 'asynchronous communication', 'digital nomad' e 'collaboration tools' são agora comuns no vocabulário corporativo moderno.",
    acts: [
      {"id":"bj49_a1","type":"tf","prompt":"'Asynchronous communication' means all team members must respond to messages immediately.","answer":false,"hint":"Comunicação assíncrona permite respostas em momentos diferentes, sem ser em tempo real."},
      {"id":"bj49_a2","type":"mc","prompt":"What does 'hybrid work model' mean?","options":["Working only from home","A combination of working from home and from the office","Working only in the office","Working while traveling"],"answerIdx":1,"hint":"Modelo híbrido combina dias presenciais e remotos."},
      {"id":"bj49_a3","type":"fill","prompt":"Complete: 'We use various ___ tools like Slack and Zoom to stay connected while working remotely.'","answer":"collaboration","keywords":["collaboration","communication","digital","online"],"hint":"Ferramentas que permitem trabalhar e comunicar com equipes à distância."},
      {"id":"bj49_a4","type":"text","prompt":"Write a short email to your team establishing new remote work guidelines, including expectations for availability, communication, and meetings.","keywords":["available","response","meeting","communication","flexible"],"hint":"Use: 'Regarding our remote work policy...', 'Team members are expected to...', 'All meetings will be...'"}
    ]
  },
  bj50: {
    context: "Ética empresarial define os princípios morais que guiam o comportamento de uma organização. Termos como 'code of conduct', 'conflict of interest', 'whistleblower', 'transparency', 'corporate governance' e 'integrity' são fundamentais nessa área.",
    acts: [
      {"id":"bj50_a1","type":"tf","prompt":"A 'code of conduct' outlines the ethical standards and behaviors expected of employees.","answer":true,"hint":"O código de conduta define as regras de comportamento ético na empresa."},
      {"id":"bj50_a2","type":"mc","prompt":"What is a 'conflict of interest' in business?","options":["A disagreement between two employees","A situation where personal interests could influence professional decisions","A type of business contract","A financial dispute"],"answerIdx":1,"hint":"Ocorre quando interesses pessoais podem comprometer decisões profissionais."},
      {"id":"bj50_a3","type":"fill","prompt":"Complete: 'The company promotes ___ by publishing detailed annual reports of all financial transactions.'","answer":"transparency","keywords":["transparency","accountability","openness"],"hint":"É a prática de ser aberto e honesto sobre as operações da empresa."},
      {"id":"bj50_a4","type":"text","prompt":"Describe what you would do if you discovered a colleague was accepting bribes, using ethical business language.","keywords":["report","integrity","conduct","appropriate","action"],"hint":"Use: 'I would first...', 'This violates our code of conduct...', 'The appropriate course of action is...'"}
    ]
  },
  bj51: {
    context: "Responsabilidade Social Corporativa (RSC) refere-se ao compromisso das empresas com práticas sustentáveis e éticas. Termos como 'sustainability', 'carbon footprint', 'fair trade', 'community outreach' e 'ESG' (Environmental, Social, Governance) são fundamentais.",
    acts: [
      {"id":"bj51_a1","type":"tf","prompt":"ESG stands for Environmental, Social, and Governance criteria used to evaluate a company's ethical impact.","answer":true,"hint":"ESG é uma estrutura para avaliar o impacto social e ambiental das empresas."},
      {"id":"bj51_a2","type":"mc","prompt":"What does 'carbon footprint' refer to in a business context?","options":["A company's marketing strategy","The total greenhouse gas emissions caused by a company's activities","A type of business tax","The company's production volume"],"answerIdx":1,"hint":"É a quantidade de emissões de carbono geradas pelas operações da empresa."},
      {"id":"bj51_a3","type":"fill","prompt":"Complete: 'Our company is committed to ___ practices, including reducing waste and using renewable energy.'","answer":"sustainable","keywords":["sustainable","eco-friendly","green","responsible"],"hint":"Adjetivo que descreve práticas que não prejudicam o meio ambiente a longo prazo."},
      {"id":"bj51_a4","type":"text","prompt":"Write a short CSR statement for a manufacturing company outlining three commitments to social and environmental responsibility.","keywords":["committed","reduce","community","sustainable","impact"],"hint":"Use: 'We are committed to...', 'Our environmental goals include...', 'We support our community by...'"}
    ]
  },
  bj52: {
    context: "Inovação e empreendedorismo são impulsionadores do crescimento econômico. Termos como 'disruptive innovation', 'pivot', 'prototype', 'minimum viable product (MVP)', 'scalability' e 'entrepreneurial mindset' são comuns nesse contexto.",
    acts: [
      {"id":"bj52_a1","type":"tf","prompt":"A 'pivot' in business means completely shutting down a company.","answer":false,"hint":"'Pivot' significa mudar de direção estratégica, não encerrar o negócio."},
      {"id":"bj52_a2","type":"mc","prompt":"What is a 'minimum viable product' (MVP)?","options":["The cheapest product a company makes","A basic version of a product released to test market demand","The company's best-selling product","A prototype that is never released"],"answerIdx":1,"hint":"MVP é lançado rapidamente para obter feedback antes do produto final."},
      {"id":"bj52_a3","type":"fill","prompt":"Complete: '___ innovation refers to a new product or service that significantly disrupts an existing market.'","answer":"Disruptive","keywords":["Disruptive","Radical","Game-changing"],"hint":"Este tipo de inovação transforma completamente um mercado ou setor."},
      {"id":"bj52_a4","type":"text","prompt":"Describe a business idea you have, explaining the problem it solves, the target market, and how it is innovative.","keywords":["problem","solution","target","innovative","market"],"hint":"Use: 'The problem I identified is...', 'My solution is...', 'The target market is...', 'What makes it innovative is...'"}
    ]
  },
  bj53: {
    context: "Startups e capital de risco têm vocabulário próprio. Termos como 'seed funding', 'venture capital', 'angel investor', 'unicorn', 'burn rate', 'runway' e 'IPO' (Initial Public Offering) são essenciais nesse ecossistema.",
    acts: [
      {"id":"bj53_a1","type":"tf","prompt":"A 'unicorn' in the startup world refers to a privately held company valued at over $1 billion.","answer":true,"hint":"Unicórnios são startups privadas com avaliação acima de 1 bilhão de dólares."},
      {"id":"bj53_a2","type":"mc","prompt":"What is 'seed funding'?","options":["Money to buy agricultural land","Initial capital provided to start a business","Government grants for established companies","Profits reinvested into the company"],"answerIdx":1,"hint":"É o capital inicial fornecido para lançar um negócio."},
      {"id":"bj53_a3","type":"fill","prompt":"Complete: 'With a monthly ___ rate of $50,000 and $300,000 in the bank, the startup has about 6 months of runway.'","answer":"burn","keywords":["burn"],"hint":"'Burn rate' é a velocidade com que uma startup gasta seu capital."},
      {"id":"bj53_a4","type":"text","prompt":"Write a short investor pitch for a tech startup, including the problem, solution, market size, and funding request.","keywords":["problem","solution","market","investment","growth"],"hint":"Use: 'We identified a problem...', 'Our solution is...', 'The market size is...', 'We are seeking investment of...'"}
    ]
  },
  bj54: {
    context: "Inglês de negócios está repleto de expressões idiomáticas (idioms). Expressões como 'back to the drawing board', 'think outside the box', 'get the ball rolling' e 'on the same page' são usadas frequentemente em contextos profissionais.",
    acts: [
      {"id":"bj54_a1","type":"tf","prompt":"'Back to the drawing board' means it's time to start a project completely over from the beginning.","answer":true,"hint":"A expressão é usada quando um plano falha e precisamos começar tudo de novo."},
      {"id":"bj54_a2","type":"mc","prompt":"What does 'think outside the box' mean?","options":["Work in a small office","Come up with creative and unconventional ideas","Follow standard procedures","Review the company's finances"],"answerIdx":1,"hint":"Significa pensar de forma criativa, além das soluções convencionais."},
      {"id":"bj54_a3","type":"fill","prompt":"Complete: 'Let's ___ the ball rolling on this project. Who wants to take the first step?'","answer":"get","keywords":["get","start","keep"],"hint":"'Get the ball rolling' significa dar início a algo."},
      {"id":"bj54_a4","type":"text","prompt":"Use at least THREE of these idioms in a short business context paragraph: 'on the same page', 'hit the ground running', 'bite the bullet', 'cut corners'.","keywords":["same page","ground running","bite","cut corners"],"hint":"'On the same page' = concordar; 'hit the ground running' = começar rapidamente; 'bite the bullet' = enfrentar algo difícil; 'cut corners' = fazer algo mal feito para economizar."}
    ]
  },
  bj55: {
    context: "Mais expressões idiomáticas são essenciais no vocabulário de negócios em inglês. Expressões como 'bottom line', 'touch base', 'move the goalposts', 'burn bridges' e 'ahead of the curve' aparecem regularmente em comunicações corporativas.",
    acts: [
      {"id":"bj55_a1","type":"tf","prompt":"'Burning bridges' in business means ending relationships in a way that cannot be repaired.","answer":true,"hint":"'Queimar pontes' significa prejudicar relacionamentos de forma irreparável."},
      {"id":"bj55_a2","type":"mc","prompt":"What does 'touch base' mean in a business context?","options":["To visit a client's office","To briefly make contact or check in with someone","To review the company's financials","To sign a contract"],"answerIdx":1,"hint":"Significa fazer um contato rápido para atualizar ou verificar o status de algo."},
      {"id":"bj55_a3","type":"fill","prompt":"Complete: 'Our company is always ___ of the curve by adopting new technologies before our competitors.'","answer":"ahead","keywords":["ahead"],"hint":"'Ahead of the curve' significa estar à frente da tendência ou da concorrência."},
      {"id":"bj55_a4","type":"text","prompt":"Use at least THREE of these idioms in a business conversation: 'touch base', 'bottom line', 'move the goalposts', 'ahead of the curve'.","keywords":["touch base","bottom line","goalposts","curve"],"hint":"'Touch base' = verificar; 'bottom line' = resultado final/essência; 'move the goalposts' = mudar as regras; 'ahead of the curve' = na vanguarda."}
    ]
  },
  bj56: {
    context: "Em inglês profissional, é essencial distinguir entre linguagem formal e informal. E-mails formais usam 'I would like to request...' enquanto mensagens informais usam 'Can you...?'. O contexto determina o registro adequado.",
    acts: [
      {"id":"bj56_a1","type":"tf","prompt":"'Gonna' and 'wanna' are appropriate for formal business emails.","answer":false,"hint":"Contrações informais como 'gonna' e 'wanna' são inadequadas em comunicações formais."},
      {"id":"bj56_a2","type":"mc","prompt":"Which is the formal equivalent of 'Can you send me the report?'","options":["Send me the report.","Could you please forward the report at your earliest convenience?","Hey, where's the report?","I need that report, okay?"],"answerIdx":1,"hint":"A versão formal usa linguagem mais educada e indireta."},
      {"id":"bj56_a3","type":"fill","prompt":"Complete the formal version: 'I ___ to inform you that the meeting has been rescheduled.'","answer":"regret","keywords":["regret","wish","am writing","would like"],"hint":"'I regret to inform you' é uma expressão formal para comunicar más notícias."},
      {"id":"bj56_a4","type":"text","prompt":"Rewrite this informal message in a formal register: 'Hey! Just wanted to check if you got my email. Can we meet up to chat about the project? Thanks!'","keywords":["writing","inquire","received","schedule","discuss"],"hint":"Use: 'Dear [Name],', 'I am writing to inquire whether...', 'I would like to schedule a meeting to discuss...', 'Kind regards'"}
    ]
  },
  bj57: {
    context: "Comunicação intercultural é cada vez mais importante em negócios globais. Diferentes culturas têm diferentes abordagens para hierarquia, comunicação direta vs indireta, pontualidade e relacionamentos profissionais. Reconhecer essas diferenças evita mal-entendidos.",
    acts: [
      {"id":"bj57_a1","type":"tf","prompt":"In high-context cultures, communication relies heavily on implicit messages and non-verbal cues.","answer":true,"hint":"Culturas de alto contexto comunicam muito através de contexto, tom e linguagem não-verbal."},
      {"id":"bj57_a2","type":"mc","prompt":"Which behavior might be considered rude in some Asian business cultures but normal in Western contexts?","options":["Exchanging business cards","Saying 'no' directly to a proposal","Bowing as a greeting","Showing respect to elders"],"answerIdx":1,"hint":"Em muitas culturas asiáticas, a recusa direta pode ser vista como desrespeitosa."},
      {"id":"bj57_a3","type":"fill","prompt":"Complete: 'Being ___ aware means understanding and respecting differences in business practices across countries.'","answer":"culturally","keywords":["culturally","cross-culturally","internationally"],"hint":"Este advérbio refere-se à consciência sobre diferenças entre culturas."},
      {"id":"bj57_a4","type":"text","prompt":"Describe two potential cultural misunderstandings that could occur in an international business meeting and how to avoid them.","keywords":["culture","misunderstanding","aware","respect","communication"],"hint":"Exemplo: 'In [culture], it is common to..., however, in [culture]... To avoid misunderstanding, one should...'"}
    ]
  },
  bj58: {
    context: "Linguagem diplomática em negócios evita conflitos e mantém relações profissionais positivas. Técnicas como hedging ('It seems like...'), suavização ('With all due respect...') e uso de voz passiva ajudam a comunicar mensagens difíceis de forma educada.",
    acts: [
      {"id":"bj58_a1","type":"tf","prompt":"Diplomatic language often uses softer phrases to avoid direct confrontation.","answer":true,"hint":"Linguagem diplomática usa formas indiretas para comunicar mensagens difíceis."},
      {"id":"bj58_a2","type":"mc","prompt":"Which is the most diplomatic way to disagree with a colleague's idea?","options":["That's a terrible idea.","I see your point, however, I wonder if we might also consider an alternative approach.","You're wrong.","Nobody agrees with you."],"answerIdx":1,"hint":"Discordâncias diplomáticas reconhecem o ponto do outro antes de apresentar outra perspectiva."},
      {"id":"bj58_a3","type":"fill","prompt":"Complete: 'With all ___ respect, I believe there may be a more effective solution to this challenge.'","answer":"due","keywords":["due"],"hint":"'With all due respect' é uma forma educada de discordar."},
      {"id":"bj58_a4","type":"text","prompt":"Rewrite these direct statements using diplomatic language: 1) 'Your plan won't work.' 2) 'You missed the deadline again.'","keywords":["concern","suggest","seem","alternative","discuss"],"hint":"1) 'I have some concerns about the plan. Perhaps we could consider...' 2) 'I noticed the deadline was not met. Could we discuss...'"}
    ]
  },
  bj59: {
    context: "Relatórios empresariais comunicam informações de forma estruturada. Eles geralmente incluem 'introduction', 'methodology', 'findings', 'conclusions' e 'recommendations'. Linguagem objetiva, impessoal e clara é fundamental na escrita de relatórios.",
    acts: [
      {"id":"bj59_a1","type":"tf","prompt":"Business reports should use personal opinions and informal language throughout.","answer":false,"hint":"Relatórios empresariais usam linguagem objetiva, formal e baseada em evidências."},
      {"id":"bj59_a2","type":"mc","prompt":"Which section of a business report presents possible actions based on the findings?","options":["Introduction","Methodology","Recommendations","Executive Summary"],"answerIdx":2,"hint":"As recomendações sugerem ações com base nas conclusões do relatório."},
      {"id":"bj59_a3","type":"fill","prompt":"Complete: 'The ___ of this report is to analyze customer satisfaction levels and identify areas for improvement.'","answer":"purpose","keywords":["purpose","aim","objective","goal"],"hint":"Esta palavra indica o objetivo principal do relatório."},
      {"id":"bj59_a4","type":"text","prompt":"Write the introduction and one recommendation for a business report on declining employee satisfaction at a company.","keywords":["purpose","findings","recommend","address","improve"],"hint":"Introdução: 'This report aims to...'. Recomendação: 'Based on the findings, it is recommended that the company...'"}
    ]
  },
  bj60: {
    context: "O sumário executivo é a seção mais lida de um relatório empresarial. Deve resumir o objetivo, os principais achados, conclusões e recomendações em poucas frases ou parágrafos. Deve ser escrito após o relatório completo, mas posicionado no início.",
    acts: [
      {"id":"bj60_a1","type":"tf","prompt":"An executive summary should be written before the full report is completed.","answer":false,"hint":"O sumário executivo é escrito após a conclusão do relatório completo, pois resume seu conteúdo."},
      {"id":"bj60_a2","type":"mc","prompt":"What is the primary purpose of an executive summary?","options":["To replace the full report","To provide a brief overview of the report's key points for busy decision-makers","To list all data and statistics","To explain the methodology in detail"],"answerIdx":1,"hint":"O sumário executivo dá aos líderes uma visão rápida sem precisar ler o relatório inteiro."},
      {"id":"bj60_a3","type":"fill","prompt":"Complete: 'This report ___ that the company should invest in employee training to improve retention rates.'","answer":"recommends","keywords":["recommends","concludes","suggests","proposes"],"hint":"Use um verbo formal para introduzir a recomendação principal."},
      {"id":"bj60_a4","type":"text","prompt":"Write a short executive summary (4-5 sentences) for a report on the benefits of implementing a flexible working policy at a mid-sized company.","keywords":["report","examines","findings","recommend","conclude"],"hint":"Use: 'This report examines...', 'Key findings indicate...', 'The data suggests...', 'It is therefore recommended that...'"}
    ]
  },
  tr1: {
    context: "O check-in no aeroporto é o primeiro passo da sua viagem internacional. Você precisa apresentar seu passaporte e bilhete, escolher seu assento e despachar a bagagem. É importante chegar com antecedência para evitar filas e perder o voo.",
    acts: [
      {"id":"tr1_a1","type":"tf","prompt":"At the airport check-in counter, you need to show your passport to the airline staff.","answer":true,"hint":"No balcão de check-in, documentos de identidade são obrigatórios."},
      {"id":"tr1_a2","type":"mc","prompt":"What does the airline staff usually ask at check-in?","options":["Did you pack your bags yourself?","Did you enjoy your last flight?","Do you want a newspaper?","Are you a frequent traveler?"],"answerIdx":0,"hint":"A equipe pergunta sobre a segurança da sua bagagem."},
      {"id":"tr1_a3","type":"fill","prompt":"I would like a ___ seat near the window, please.","answer":"window","keywords":["window","aisle","middle"],"hint":"Tipos de assento em inglês: window (janela), aisle (corredor)."},
      {"id":"tr1_a4","type":"text","prompt":"Describe what you would say to the airline staff when checking in for an international flight. Include your seat preference and baggage.","keywords":["passport","check-in","seat","luggage","boarding pass","window","aisle","baggage","flight"],"hint":"Use vocabulário de check-in: passaporte, assento, bagagem, cartão de embarque."}
    ]
  },
  tr2: {
    context: "Após o check-in, você passa pela segurança do aeroporto antes de embarcar. É necessário retirar sapatos, cintos e eletrônicos para passar pelo scanner. O portão de embarque fica na área restrita após a segurança.",
    acts: [
      {"id":"tr2_a1","type":"tf","prompt":"You must remove your laptop from your bag when going through airport security.","answer":true,"hint":"Eletrônicos devem ser retirados das bolsas para passar pelo scanner."},
      {"id":"tr2_a2","type":"mc","prompt":"Which of the following is NOT typically required at airport security?","options":["Removing your shoes","Showing your hotel reservation","Taking off your belt","Placing liquids in a clear bag"],"answerIdx":1,"hint":"A reserva de hotel não é necessária na segurança do aeroporto."},
      {"id":"tr2_a3","type":"fill","prompt":"Please have your ___ pass ready when boarding the plane.","answer":"boarding","keywords":["boarding","boarding pass","ticket"],"hint":"O cartão de embarque em inglês é 'boarding pass'."},
      {"id":"tr2_a4","type":"text","prompt":"Write about the process of going through security and boarding a plane. What items do you need to prepare?","keywords":["security","boarding pass","gate","scanner","liquids","shoes","belt","laptop","carry-on"],"hint":"Descreva o processo de segurança e embarque usando vocabulário adequado."}
    ]
  },
  tr3: {
    context: "A bordo do avião, você encontrará diferentes classes de serviço e uma variedade de amenidades. A tripulação de cabine está disponível para ajudar com qualquer necessidade durante o voo. É importante conhecer o vocabulário básico para se comunicar a bordo.",
    acts: [
      {"id":"tr3_a1","type":"tf","prompt":"The flight attendant is responsible for passenger safety on the plane.","answer":true,"hint":"Os comissários de bordo são responsáveis pela segurança dos passageiros."},
      {"id":"tr3_a2","type":"mc","prompt":"What do you press to call a flight attendant?","options":["The overhead light","The call button","The seat recline button","The window shade"],"answerIdx":1,"hint":"O botão de chamada serve para chamar o comissário de bordo."},
      {"id":"tr3_a3","type":"fill","prompt":"Could you please stow my bag in the ___ compartment?","answer":"overhead","keywords":["overhead","overhead compartment","storage"],"hint":"O compartimento acima dos assentos é chamado de 'overhead compartment'."},
      {"id":"tr3_a4","type":"text","prompt":"You are on a long flight and need assistance from the flight attendant. Write what you would say to request a meal, a blanket, and help with your luggage.","keywords":["flight attendant","meal","blanket","overhead","turbulence","seat belt","landing","takeoff","window","aisle"],"hint":"Use frases educadas para pedir ajuda a bordo do avião."}
    ]
  },
  tr4: {
    context: "Ao chegar ao seu destino internacional, você precisará passar pela imigração. Os agentes de imigração verificam seu passaporte, visto e cartão de entrada. É importante responder às perguntas com honestidade e clareza.",
    acts: [
      {"id":"tr4_a1","type":"tf","prompt":"You need to fill out an arrival card before speaking to the immigration officer.","answer":true,"hint":"O cartão de chegada é preenchido antes de falar com o agente de imigração."},
      {"id":"tr4_a2","type":"mc","prompt":"What is a common question asked by immigration officers?","options":["What is your favorite food?","What is the purpose of your visit?","How much does your luggage weigh?","Do you have travel insurance?"],"answerIdx":1,"hint":"Os agentes de imigração perguntam sobre o propósito da visita."},
      {"id":"tr4_a3","type":"fill","prompt":"I am here on a ___ visit for two weeks.","answer":"tourist","keywords":["tourist","business","transit","vacation"],"hint":"Tipos de visita: tourist (turismo), business (negócios), transit (trânsito)."},
      {"id":"tr4_a4","type":"text","prompt":"Describe a conversation with an immigration officer. Include your purpose of visit, length of stay, and where you will be staying.","keywords":["passport","visa","immigration","tourist","business","stay","hotel","purpose","return ticket","declaration"],"hint":"Responda com clareza sobre o motivo da visita, duração e acomodação."}
    ]
  },
  tr5: {
    context: "A declaração aduaneira é obrigatória ao entrar em outro país. Você deve declarar itens como alimentos, plantas, grandes quantias em dinheiro e mercadorias acima do limite permitido. Não declarar itens proibidos pode resultar em multas ou apreensão.",
    acts: [
      {"id":"tr5_a1","type":"tf","prompt":"You must declare cash amounts over $10,000 when entering most countries.","answer":true,"hint":"Grandes quantias em dinheiro devem ser declaradas na alfândega."},
      {"id":"tr5_a2","type":"mc","prompt":"Which item typically MUST be declared at customs?","options":["A personal book","Fruits and vegetables","A used toothbrush","Your mobile phone"],"answerIdx":1,"hint":"Alimentos e plantas geralmente precisam ser declarados na alfândega."},
      {"id":"tr5_a3","type":"fill","prompt":"Do you have anything to ___ at customs?","answer":"declare","keywords":["declare","declare customs","report"],"hint":"'To declare' significa declarar itens na alfândega."},
      {"id":"tr5_a4","type":"text","prompt":"You are filling out a customs declaration form. Write what items you have in your luggage that might need to be declared and explain why.","keywords":["declare","customs","prohibited","allowed","duty","tax","receipt","value","food","currency"],"hint":"Descreva os itens na bagagem que precisam ser declarados e o motivo."}
    ]
  },
  tr6: {
    context: "Após passar pela imigração e alfândega, você vai buscar sua bagagem no carrossel. Se sua mala não aparecer ou chegar danificada, você deve reportar imediatamente ao balcão da companhia aérea. Guarde sempre o comprovante de bagagem despachada.",
    acts: [
      {"id":"tr6_a1","type":"tf","prompt":"If your luggage is lost, you should report it to the airline before leaving the airport.","answer":true,"hint":"Bagagem perdida deve ser reportada à companhia aérea imediatamente no aeroporto."},
      {"id":"tr6_a2","type":"mc","prompt":"What is a baggage carousel?","options":["A ride at an amusement park","The moving belt where luggage arrives at the airport","A type of suitcase","A baggage storage facility"],"answerIdx":1,"hint":"O carrossel é a esteira giratória onde as malas chegam no aeroporto."},
      {"id":"tr6_a3","type":"fill","prompt":"My suitcase has not arrived. I would like to file a ___ report.","answer":"missing baggage","keywords":["missing baggage","lost luggage","baggage claim","lost","missing"],"hint":"'Missing baggage report' é o relatório de bagagem perdida."},
      {"id":"tr6_a4","type":"text","prompt":"Your luggage has not arrived at the baggage carousel. Write what you would say to the airline representative at the lost luggage desk.","keywords":["lost","luggage","suitcase","baggage claim","report","flight number","tag","description","deliver","compensation"],"hint":"Descreva sua mala e peça ajuda para localizar a bagagem perdida."}
    ]
  },
  tr7: {
    context: "Ao sair do aeroporto, você tem várias opções de transporte como táxi, Uber e outros aplicativos de carona. É importante saber o nome do seu destino e ter o endereço escrito. Confirme sempre o preço antes de entrar no veículo.",
    acts: [
      {"id":"tr7_a1","type":"tf","prompt":"You should always confirm the fare before getting into a taxi.","answer":true,"hint":"Confirme o valor da corrida antes de entrar no táxi para evitar surpresas."},
      {"id":"tr7_a2","type":"mc","prompt":"What does 'surge pricing' mean in rideshare apps?","options":["A discount during quiet hours","Higher prices during peak demand times","A flat rate for long distances","Free rides on special occasions"],"answerIdx":1,"hint":"'Surge pricing' é quando os preços sobem em horários de alta demanda."},
      {"id":"tr7_a3","type":"fill","prompt":"Could you take me to this ___, please? Here is the address.","answer":"address","keywords":["address","location","destination","hotel","place"],"hint":"'Address' significa endereço em inglês."},
      {"id":"tr7_a4","type":"text","prompt":"You just arrived at the airport and need to take a taxi to your hotel. Write the conversation you would have with the taxi driver, including destination, estimated time, and payment.","keywords":["taxi","driver","destination","address","fare","receipt","tip","traffic","route","hotel"],"hint":"Inclua o destino, tempo estimado e método de pagamento na conversa."}
    ]
  },
  tr8: {
    context: "O transporte público como ônibus e metrô é uma forma econômica de se locomover nas cidades. É importante entender o sistema de bilhetes, as linhas e os horários. Muitas cidades oferecem cartões de transporte recarregáveis para facilitar o uso.",
    acts: [
      {"id":"tr8_a1","type":"tf","prompt":"A transit card can usually be used on both buses and subways in the same city.","answer":true,"hint":"Cartões de transporte geralmente funcionam em vários meios de transporte da mesma cidade."},
      {"id":"tr8_a2","type":"mc","prompt":"What should you do if you miss your stop on the subway?","options":["Stay on the train and cry","Get off at the next stop and take the train back","Jump off the moving train","Ask the driver to go back"],"answerIdx":1,"hint":"Se perder a parada, desça na próxima estação e volte."},
      {"id":"tr8_a3","type":"fill","prompt":"Excuse me, which ___ do I take to get to the city center?","answer":"line","keywords":["line","bus","subway","train","route"],"hint":"'Line' significa linha de metrô ou ônibus."},
      {"id":"tr8_a4","type":"text","prompt":"You need to get from the airport to your hotel using public transportation. Write the steps you would follow and what you would ask local people for help.","keywords":["subway","bus","ticket","line","stop","transfer","platform","schedule","fare","exit"],"hint":"Descreva como usar o transporte público, incluindo comprar bilhetes e encontrar as linhas certas."}
    ]
  },
  tr9: {
    context: "Alugar um carro é uma ótima opção para explorar regiões menos acessíveis pelo transporte público. Você precisará de uma carteira de habilitação válida, cartão de crédito e pode precisar de uma licença internacional. É importante entender as cobranças por quilometragem, seguro e combustível.",
    acts: [
      {"id":"tr9_a1","type":"tf","prompt":"You always need an International Driving Permit to rent a car abroad.","answer":false,"hint":"Nem todos os países exigem licença internacional; depende do país de destino."},
      {"id":"tr9_a2","type":"mc","prompt":"What does 'full coverage insurance' mean when renting a car?","options":["Insurance that covers only the engine","Insurance that covers most damages and theft","Insurance only for the driver","Insurance for other passengers"],"answerIdx":1,"hint":"'Full coverage' cobre a maioria dos danos e roubo do veículo alugado."},
      {"id":"tr9_a3","type":"fill","prompt":"I would like to rent a car with ___ transmission, please.","answer":"automatic","keywords":["automatic","manual","transmission"],"hint":"'Automatic transmission' é câmbio automático; 'manual' é câmbio manual."},
      {"id":"tr9_a4","type":"text","prompt":"You are at a car rental agency. Write the conversation where you ask about available cars, insurance options, and the total cost for a week.","keywords":["rental","automatic","manual","insurance","mileage","fuel","deposit","license","return","upgrade"],"hint":"Pergunte sobre tipos de carro, seguro, quilometragem e custo total."}
    ]
  },
  tr10: {
    context: "Ao dirigir em outro país, é essencial conhecer as placas de trânsito e as regras da estrada. As regras podem variar significativamente de país para país, como o lado da estrada utilizado e os limites de velocidade. Sempre preste atenção às placas locais.",
    acts: [
      {"id":"tr10_a1","type":"tf","prompt":"In the United Kingdom, cars drive on the left side of the road.","answer":true,"hint":"No Reino Unido, Austrália e Japão, os carros andam pelo lado esquerdo da estrada."},
      {"id":"tr10_a2","type":"mc","prompt":"What does a 'yield' sign mean?","options":["Stop completely and wait","Speed up to merge","Give way to other vehicles","No entry allowed"],"answerIdx":2,"hint":"'Yield' significa ceder a passagem para outros veículos."},
      {"id":"tr10_a3","type":"fill","prompt":"The speed limit on this highway is 65 miles per ___.","answer":"hour","keywords":["hour","mph","per hour"],"hint":"'Miles per hour' (mph) é a unidade de velocidade usada nos EUA."},
      {"id":"tr10_a4","type":"text","prompt":"Describe the key driving rules and road signs you would need to know when driving in a foreign country. Include speed limits, right-of-way rules, and important signs.","keywords":["speed limit","yield","stop","roundabout","highway","lane","merge","pedestrian","traffic light","sign"],"hint":"Descreva regras de trânsito e placas importantes para dirigir no exterior."}
    ]
  },
  tr11: {
    context: "O check-in no hotel é o momento em que você registra sua chegada e recebe as chaves do quarto. Você precisará apresentar documentos de identificação e um cartão de crédito para caução. É uma boa oportunidade para perguntar sobre os serviços do hotel.",
    acts: [
      {"id":"tr11_a1","type":"tf","prompt":"Hotels usually require a credit card for a security deposit at check-in.","answer":true,"hint":"A caução no hotel geralmente é feita com cartão de crédito."},
      {"id":"tr11_a2","type":"mc","prompt":"What is a 'keycard' at a hotel?","options":["A physical metal key","A plastic card that unlocks your room electronically","A card with the room number","A card for using the hotel pool"],"answerIdx":1,"hint":"O keycard é o cartão eletrônico que abre a porta do quarto."},
      {"id":"tr11_a3","type":"fill","prompt":"I have a reservation under the name Smith. I would like to ___ in, please.","answer":"check","keywords":["check","check in","register"],"hint":"'Check in' significa registrar a chegada no hotel."},
      {"id":"tr11_a4","type":"text","prompt":"Write a conversation at the hotel front desk during check-in. Include confirming your reservation, asking about amenities, and requesting a room preference.","keywords":["check-in","reservation","room","floor","amenities","breakfast","pool","gym","keycard","deposit"],"hint":"Confirme a reserva, peça preferências de quarto e pergunte sobre os serviços do hotel."}
    ]
  },
  tr12: {
    context: "Os quartos de hotel oferecem diversas comodidades para tornar sua estadia confortável. É importante conhecer o vocabulário para pedir itens extras ou entender o que está disponível. Serviços como limpeza de quarto, lavanderia e serviço de quarto são comuns em hotéis.",
    acts: [
      {"id":"tr12_a1","type":"tf","prompt":"Room service means food and drinks can be delivered directly to your hotel room.","answer":true,"hint":"Serviço de quarto permite pedir comida e bebida diretamente no quarto."},
      {"id":"tr12_a2","type":"mc","prompt":"What is a 'mini-bar' in a hotel room?","options":["A small bar near the swimming pool","A small refrigerator with drinks and snacks in the room","A children's play area","A fitness room"],"answerIdx":1,"hint":"O mini-bar é uma pequena geladeira com bebidas e snacks no quarto."},
      {"id":"tr12_a3","type":"fill","prompt":"Could you please send extra ___ to my room? The ones here are all used.","answer":"towels","keywords":["towels","pillows","blankets","toiletries"],"hint":"'Towels' significa toalhas em inglês."},
      {"id":"tr12_a4","type":"text","prompt":"Describe your ideal hotel room. Include the amenities you would want and how you would request them from the hotel staff.","keywords":["amenities","towels","pillows","mini-bar","TV","air conditioning","housekeeping","room service","safe","Wi-Fi"],"hint":"Descreva as comodidades ideais do quarto e como solicitá-las."}
    ]
  },
  tr13: {
    context: "Às vezes, durante a estadia em um hotel, podem surgir problemas como barulho excessivo, ar condicionado quebrado ou insatisfação com o quarto. Saber reclamar de forma educada e eficaz em inglês pode ajudar a resolver esses problemas rapidamente. O serviço de atendimento ao hóspede está disponível para ajudar.",
    acts: [
      {"id":"tr13_a1","type":"tf","prompt":"If there is a problem with your hotel room, you should contact the front desk.","answer":true,"hint":"A recepção do hotel é o lugar certo para relatar problemas."},
      {"id":"tr13_a2","type":"mc","prompt":"How should you politely complain about a noisy room at a hotel?","options":["Yell at the front desk staff","Quietly tell the front desk there is excessive noise and ask to change rooms","Leave without saying anything","Call the police immediately"],"answerIdx":1,"hint":"Reclamar de forma educada e pedir uma solução é sempre a melhor abordagem."},
      {"id":"tr13_a3","type":"fill","prompt":"The air conditioning in my room is not working. Could you please send someone to ___ it?","answer":"fix","keywords":["fix","repair","check","look at"],"hint":"'Fix' ou 'repair' significam consertar em inglês."},
      {"id":"tr13_a4","type":"text","prompt":"Write a complaint to the hotel front desk about three problems in your room: a broken shower, noisy neighbors, and a dirty bathroom. Request solutions for each problem.","keywords":["complaint","broken","noisy","dirty","fix","repair","change rooms","refund","manager","housekeeping"],"hint":"Descreva os problemas educadamente e peça soluções específicas para cada um."}
    ]
  },
  tr14: {
    context: "O check-out do hotel envolve devolver as chaves do quarto e acertar a conta final. É importante verificar a fatura para garantir que não haja cobranças indevidas. Algumas estadias incluem café da manhã ou outros serviços no preço.",
    acts: [
      {"id":"tr14_a1","type":"tf","prompt":"You should always check your hotel bill carefully before paying at checkout.","answer":true,"hint":"Sempre verifique a fatura para evitar cobranças incorretas."},
      {"id":"tr14_a2","type":"mc","prompt":"What is a 'late checkout' at a hotel?","options":["Checking in after midnight","Leaving the hotel after the standard checkout time","A discount for early departures","A penalty fee for damage"],"answerIdx":1,"hint":"'Late checkout' é quando você sai depois do horário padrão de saída."},
      {"id":"tr14_a3","type":"fill","prompt":"I would like to ___ out. Can you please prepare my final bill?","answer":"check","keywords":["check","check out","leave"],"hint":"'Check out' significa fazer o check-out e sair do hotel."},
      {"id":"tr14_a4","type":"text","prompt":"Write the conversation at hotel checkout. Include reviewing the bill, disputing an incorrect charge, and asking for a receipt.","keywords":["checkout","bill","receipt","charge","dispute","incorrect","payment","credit card","late checkout","keycard"],"hint":"Revise a conta, questione cobranças incorretas e peça recibo."}
    ]
  },
  tr15: {
    context: "Além dos hotéis tradicionais, existem outras opções de acomodação como hostels, Airbnb e bed and breakfasts. Cada tipo tem suas vantagens e desvantagens em termos de custo, privacidade e experiência local. Escolher a acomodação certa pode melhorar muito sua experiência de viagem.",
    acts: [
      {"id":"tr15_a1","type":"tf","prompt":"A hostel typically offers shared dormitory rooms at a lower price than a hotel.","answer":true,"hint":"Hostels geralmente têm quartos compartilhados a preços mais baixos que hotéis."},
      {"id":"tr15_a2","type":"mc","prompt":"What does B&B stand for in travel?","options":["Bed and Breakfast","Budget and Bargain","Beach and Bar","Bus and Boat"],"answerIdx":0,"hint":"B&B significa 'Bed and Breakfast' - acomodação com café da manhã incluído."},
      {"id":"tr15_a3","type":"fill","prompt":"I booked a private room through ___, which is cheaper than a hotel.","answer":"Airbnb","keywords":["Airbnb","a home sharing app","an online platform"],"hint":"Airbnb é uma plataforma de aluguel de quartos e casas de temporada."},
      {"id":"tr15_a4","type":"text","prompt":"Compare three types of accommodation: a hotel, a hostel, and an Airbnb. Write about the advantages and disadvantages of each for a budget traveler.","keywords":["hotel","hostel","Airbnb","B&B","private","shared","dormitory","amenities","price","location"],"hint":"Compare os tipos de acomodação em termos de custo, privacidade e comodidades."}
    ]
  },
  tr16: {
    context: "Pedir e entender direções em inglês é uma habilidade essencial para viajantes. É importante conhecer vocabulário de orientação espacial como 'turn left', 'go straight' e 'on your right'. Você também pode usar aplicativos de navegação como complemento.",
    acts: [
      {"id":"tr16_a1","type":"tf","prompt":"'Turn left at the traffic light' means you should go right when you see the light.","answer":false,"hint":"'Turn left' significa virar à esquerda, não à direita."},
      {"id":"tr16_a2","type":"mc","prompt":"What does 'go straight ahead' mean?","options":["Turn right","Turn left","Continue in the same direction","Make a U-turn"],"answerIdx":2,"hint":"'Go straight ahead' significa continuar na mesma direção."},
      {"id":"tr16_a3","type":"fill","prompt":"Excuse me, could you tell me how to ___ to the nearest train station?","answer":"get","keywords":["get","go","walk","find my way"],"hint":"'How to get to' significa como chegar a algum lugar."},
      {"id":"tr16_a4","type":"text","prompt":"Ask a local person for directions to a famous landmark. Write the conversation, including the directions they give you with landmarks to help you find the way.","keywords":["turn left","turn right","straight","block","traffic light","corner","intersection","landmark","map","cross"],"hint":"Use vocabulário de direções: vire à esquerda/direita, siga em frente, na esquina, etc."}
    ]
  },
  tr17: {
    context: "Saber ler mapas e usar aplicativos de navegação é fundamental para se orientar em cidades desconhecidas. Mesmo com tecnologia, é bom entender termos como 'north', 'south', 'intersection' e 'block'. Mapas físicos ainda são úteis em áreas sem sinal de internet.",
    acts: [
      {"id":"tr17_a1","type":"tf","prompt":"On a standard map, North is usually at the top.","answer":true,"hint":"Na maioria dos mapas padrão, o norte fica no topo."},
      {"id":"tr17_a2","type":"mc","prompt":"What is a 'landmark' used for in navigation?","options":["A place to buy food","A recognizable feature used to identify your location","A type of road sign","A navigation app"],"answerIdx":1,"hint":"Pontos de referência são usados para identificar sua localização no mapa."},
      {"id":"tr17_a3","type":"fill","prompt":"According to the map, the museum is two ___ north of here.","answer":"blocks","keywords":["blocks","streets","kilometers","miles"],"hint":"'Block' é o espaço entre duas ruas paralelas em uma cidade."},
      {"id":"tr17_a4","type":"text","prompt":"Describe how you would use a map or navigation app to get from your hotel to a tourist attraction. Include the route, any landmarks, and estimated time.","keywords":["map","navigate","route","block","north","south","east","west","landmark","GPS"],"hint":"Descreva como usar um mapa ou GPS para chegar a um atrativo turístico."}
    ]
  },
  tr18: {
    context: "Explorar uma nova cidade requer planejamento e conhecimento das opções de transporte disponíveis. Caminhar, usar bicicletas públicas ou o transporte público são ótimas formas de conhecer a cidade. Planejar seu roteiro com antecedência economiza tempo e dinheiro.",
    acts: [
      {"id":"tr18_a1","type":"tf","prompt":"Walking is often the best way to explore historic city centers.","answer":true,"hint":"Caminhar é frequentemente a melhor forma de explorar centros históricos."},
      {"id":"tr18_a2","type":"mc","prompt":"What is a 'hop-on hop-off' bus?","options":["A bus that only goes one way","A tourist bus where you can board and exit at multiple stops","A bus without a schedule","A private charter bus"],"answerIdx":1,"hint":"O ônibus hop-on hop-off permite embarcar e desembarcar em várias paradas turísticas."},
      {"id":"tr18_a3","type":"fill","prompt":"I want to explore the old town. Should I take the ___ or walk?","answer":"bus","keywords":["bus","tram","subway","metro"],"hint":"Pergunte sobre a melhor opção de transporte para explorar a cidade."},
      {"id":"tr18_a4","type":"text","prompt":"Write a plan for spending one day exploring a new city. Include how you will get around, which areas you will visit, and how you will find information about local attractions.","keywords":["explore","map","walking tour","bus","attractions","neighborhood","guide","tourist","schedule","transport"],"hint":"Planeje um dia na cidade incluindo transporte, atrações e como obter informações locais."}
    ]
  },
  tr19: {
    context: "Ao visitar museus e atrações turísticas, geralmente é necessário comprar ingressos com antecedência ou na bilheteria. Muitos lugares oferecem descontos para estudantes, idosos e crianças. Algumas atrações permitem compras online para evitar filas.",
    acts: [
      {"id":"tr19_a1","type":"tf","prompt":"Many museums offer free admission on certain days of the week.","answer":true,"hint":"Muitos museus têm dias com entrada gratuita ou com desconto."},
      {"id":"tr19_a2","type":"mc","prompt":"What should you bring to get a student discount at a museum?","options":["Your hotel keycard","Your student ID card","Your passport","Your credit card"],"answerIdx":1,"hint":"A carteira de estudante é necessária para obter desconto de estudante."},
      {"id":"tr19_a3","type":"fill","prompt":"Do you have any ___ for students or children?","answer":"discounts","keywords":["discounts","concessions","reduced prices","special prices"],"hint":"'Discounts' significa descontos em inglês."},
      {"id":"tr19_a4","type":"text","prompt":"You are buying tickets for a museum. Write the conversation where you ask about prices, discounts, and opening hours, and then purchase tickets for two adults and one child.","keywords":["ticket","adult","child","student","discount","admission","opening hours","audio guide","tour","receipt"],"hint":"Pergunte sobre preços, descontos e horários ao comprar ingressos para museu."}
    ]
  },
  tr20: {
    context: "O turismo envolve visitar pontos históricos, naturais e culturais de um destino. Conhecer o vocabulário relacionado a atrações turísticas ajuda a planejar e aproveitar melhor sua visita. Guias de viagem, mapas turísticos e aplicativos são ferramentas essenciais.",
    acts: [
      {"id":"tr20_a1","type":"tf","prompt":"A 'must-see' attraction is one that visitors highly recommend you should not miss.","answer":true,"hint":"'Must-see' significa algo que definitivamente vale a pena ver."},
      {"id":"tr20_a2","type":"mc","prompt":"What is a 'heritage site'?","options":["A modern shopping mall","A place of historical, cultural, or natural significance","A popular beach resort","A new tourist development"],"answerIdx":1,"hint":"Um 'heritage site' é um local de importância histórica, cultural ou natural."},
      {"id":"tr20_a3","type":"fill","prompt":"The ancient castle is the most famous ___ in this city.","answer":"landmark","keywords":["landmark","attraction","sight","monument"],"hint":"'Landmark' é um ponto de referência ou atração famosa de um lugar."},
      {"id":"tr20_a4","type":"text","prompt":"Describe your favorite tourist attraction or one you would like to visit. Include what makes it special, what visitors can see there, and why you recommend it.","keywords":["landmark","heritage","monument","museum","historic","culture","tour","guide","architecture","beautiful"],"hint":"Descreva uma atração turística mencionando sua importância histórica e o que os visitantes podem ver."}
    ]
  },
  tr21: {
    context: "Fazer uma reserva em um restaurante é uma prática comum em muitos países, especialmente em restaurantes mais sofisticados. Você pode reservar por telefone, online ou pessoalmente. É importante informar o número de pessoas, a data e qualquer necessidade especial.",
    acts: [
      {"id":"tr21_a1","type":"tf","prompt":"You should always make a reservation at a fancy restaurant before visiting.","answer":true,"hint":"Reservas antecipadas são recomendadas, especialmente em restaurantes sofisticados."},
      {"id":"tr21_a2","type":"mc","prompt":"What information do you typically need when making a restaurant reservation?","options":["Your credit card number only","Your name, number of guests, and preferred time","Your home address","Your food allergies only"],"answerIdx":1,"hint":"Para reservar um restaurante, informe nome, número de pessoas e horário preferido."},
      {"id":"tr21_a3","type":"fill","prompt":"I would like to make a ___ for four people at 7 PM tonight.","answer":"reservation","keywords":["reservation","booking","table","booking"],"hint":"'Reservation' ou 'booking' significa reserva em inglês."},
      {"id":"tr21_a4","type":"text","prompt":"Call a restaurant to make a reservation for a special occasion. Write the conversation where you specify the number of guests, time, date, and any special requirements like a birthday cake or vegetarian menu.","keywords":["reservation","table","guests","occasion","vegetarian","allergy","window seat","birthday","confirm","cancel"],"hint":"Faça uma reserva especificando número de pessoas, horário e necessidades especiais."}
    ]
  },
  tr22: {
    context: "Pedir comida em um restaurante requer conhecimento de vocabulário culinário e expressões educadas. É importante saber perguntar sobre os ingredientes e o método de preparo dos pratos. O garçom está disponível para explicar o cardápio e fazer recomendações.",
    acts: [
      {"id":"tr22_a1","type":"tf","prompt":"It is polite to say 'I would like' instead of 'I want' when ordering food at a restaurant.","answer":true,"hint":"'I would like' é mais educado que 'I want' ao pedir em um restaurante."},
      {"id":"tr22_a2","type":"mc","prompt":"What does 'the dish of the day' mean at a restaurant?","options":["The most expensive item","A special meal prepared fresh that day","A traditional local dish","The vegetarian option"],"answerIdx":1,"hint":"'Dish of the day' é o prato especial preparado naquele dia."},
      {"id":"tr22_a3","type":"fill","prompt":"I would like to ___ the grilled salmon with vegetables, please.","answer":"order","keywords":["order","have","get"],"hint":"'To order' significa pedir no restaurante."},
      {"id":"tr22_a4","type":"text","prompt":"Write a conversation at a restaurant where you order a starter, main course, and dessert. Ask the waiter for recommendations and clarify how one dish is prepared.","keywords":["starter","main course","dessert","waiter","recommend","order","medium rare","grilled","sauce","side dish"],"hint":"Peça entrada, prato principal e sobremesa, e pergunte sobre recomendações e preparo."}
    ]
  },
  tr23: {
    context: "Comunicar preferências alimentares e restrições dietéticas é muito importante ao viajar. Alergias alimentares podem ser uma questão de saúde séria, por isso é essencial saber como comunicá-las em inglês. Muitos restaurantes têm menus com opções vegetarianas, veganas e sem glúten.",
    acts: [
      {"id":"tr23_a1","type":"tf","prompt":"You should always inform the restaurant about severe food allergies before ordering.","answer":true,"hint":"Sempre informe sobre alergias alimentares graves antes de pedir."},
      {"id":"tr23_a2","type":"mc","prompt":"What does 'gluten-free' mean?","options":["A diet without sugar","A diet without wheat and similar grains","A diet without meat","A diet without dairy"],"answerIdx":1,"hint":"'Gluten-free' significa sem glúten, geralmente sem trigo e grãos similares."},
      {"id":"tr23_a3","type":"fill","prompt":"I am ___ to nuts. Can you make sure this dish does not contain any?","answer":"allergic","keywords":["allergic","intolerant","sensitive"],"hint":"'Allergic to' significa alérgico a algum alimento."},
      {"id":"tr23_a4","type":"text","prompt":"You are a vegetarian with a nut allergy dining at a restaurant. Write how you would explain your dietary restrictions to the waiter and ask which dishes are suitable for you.","keywords":["vegetarian","vegan","allergy","gluten-free","dairy-free","nut","ingredient","substitute","suitable","contain"],"hint":"Explique suas restrições alimentares e pergunte quais pratos são adequados para você."}
    ]
  },
  tr24: {
    context: "Pagar a conta em um restaurante pode variar de cultura para cultura. Em muitos países anglófonos, é comum deixar gorjeta de 15 a 20% para o garçom. É importante saber como pedir a conta e dividir o pagamento entre várias pessoas.",
    acts: [
      {"id":"tr24_a1","type":"tf","prompt":"In the United States, leaving a tip of 15-20% is customary at restaurants.","answer":true,"hint":"Nos EUA, a gorjeta padrão em restaurantes é de 15 a 20%."},
      {"id":"tr24_a2","type":"mc","prompt":"What does 'splitting the bill' mean?","options":["Tearing the receipt in half","Each person paying for their own share","One person paying for everyone","Arguing about who pays"],"answerIdx":1,"hint":"'Splitting the bill' significa dividir a conta entre os participantes."},
      {"id":"tr24_a3","type":"fill","prompt":"Could we have the ___, please? We would like to pay separately.","answer":"bill","keywords":["bill","check","tab"],"hint":"'Bill' ou 'check' significa conta em um restaurante."},
      {"id":"tr24_a4","type":"text","prompt":"Write a conversation at the end of a restaurant meal where you ask for the bill, discover a mistake on it, and then pay by credit card while leaving a tip.","keywords":["bill","check","tip","gratuity","credit card","cash","split","mistake","receipt","service charge"],"hint":"Peça a conta, verifique erros, pague e deixe gorjeta."}
    ]
  },
  tr25: {
    context: "Restaurantes de fast food e cafés são opções práticas e rápidas durante viagens. Conhecer o vocabulário específico desses estabelecimentos facilita o pedido. Em muitos países, é possível personalizar seu pedido com opções extras ou substituições.",
    acts: [
      {"id":"tr25_a1","type":"tf","prompt":"At fast food restaurants, you usually order and pay at the counter before receiving your food.","answer":true,"hint":"Em lanchonetes de fast food, você geralmente pede e paga no balcão primeiro."},
      {"id":"tr25_a2","type":"mc","prompt":"What does 'to go' or 'takeaway' mean at a café?","options":["Dine in at the restaurant","Take your order to eat elsewhere","A special menu","A delivery service"],"answerIdx":1,"hint":"'To go' ou 'takeaway' significa levar o pedido para comer em outro lugar."},
      {"id":"tr25_a3","type":"fill","prompt":"Could I get a large coffee with ___ milk, please?","answer":"skimmed","keywords":["skimmed","skim","whole","oat","almond","soy"],"hint":"Tipos de leite: skimmed (desnatado), whole (integral), oat (aveia), almond (amêndoa)."},
      {"id":"tr25_a4","type":"text","prompt":"You are ordering at a café. Write your order for a customized coffee drink, a sandwich with modifications, and ask about the Wi-Fi password.","keywords":["latte","cappuccino","espresso","oat milk","sandwich","toasted","extra","shot","takeaway","Wi-Fi"],"hint":"Personalize seu pedido de café e lanche, e pergunte sobre o Wi-Fi."}
    ]
  },
  tr26: {
    context: "Fazer compras em países estrangeiros é uma das atividades mais populares entre turistas. É importante saber pedir ajuda para encontrar produtos específicos e entender as políticas de devolução. Shoppings, mercados e lojas especializadas oferecem diferentes experiências de compra.",
    acts: [
      {"id":"tr26_a1","type":"tf","prompt":"'I'm just browsing' means you are ready to buy something immediately.","answer":false,"hint":"'I'm just browsing' significa que você está apenas olhando, sem intenção de comprar agora."},
      {"id":"tr26_a2","type":"mc","prompt":"What should you say when you need help finding a specific item in a store?","options":["Leave the store and go elsewhere","Ask a shop assistant for help","Look for it yourself without speaking","Complain to the manager"],"answerIdx":1,"hint":"Peça ajuda ao atendente da loja para encontrar o produto."},
      {"id":"tr26_a3","type":"fill","prompt":"Excuse me, could you help me find the ___ section?","answer":"electronics","keywords":["electronics","clothing","shoes","accessories","toys"],"hint":"Peça ao atendente para te guiar até a seção desejada da loja."},
      {"id":"tr26_a4","type":"text","prompt":"You are shopping for souvenirs and gifts. Write a conversation with a shop assistant where you ask for help finding specific items, ask about prices, and compare two different products.","keywords":["souvenir","gift","price","compare","quality","material","brand","recommend","popular","local"],"hint":"Peça ajuda para encontrar itens, compare produtos e pergunte sobre preços."}
    ]
  },
  tr27: {
    context: "Experimentar roupas antes de comprar é uma prática comum nas lojas. É importante saber onde ficam os provadores e como pedir tamanhos diferentes. O vocabulário de tamanhos pode variar de país para país, então é bom estar preparado.",
    acts: [
      {"id":"tr27_a1","type":"tf","prompt":"Clothing sizes in the US and Europe are always the same.","answer":false,"hint":"Os tamanhos de roupas nos EUA e Europa são diferentes e precisam de conversão."},
      {"id":"tr27_a2","type":"mc","prompt":"What is a 'fitting room'?","options":["A room for repairing clothes","A room where you try on clothes before buying","A storage room for clothes","A laundry room"],"answerIdx":1,"hint":"O provador (fitting room) é onde você experimenta roupas antes de comprar."},
      {"id":"tr27_a3","type":"fill","prompt":"Excuse me, do you have this shirt in a ___ size?","answer":"larger","keywords":["larger","smaller","bigger","medium","small","large"],"hint":"Pergunte por tamanhos diferentes: larger (maior), smaller (menor)."},
      {"id":"tr27_a4","type":"text","prompt":"You are in a clothing store trying on outfits. Write a conversation with the shop assistant where you ask for a different size, describe how the clothes fit, and decide what to purchase.","keywords":["fitting room","size","too tight","too loose","fits well","exchange","color","style","try on","available"],"hint":"Descreva como as roupas ficam e peça tamanhos ou cores diferentes."}
    ]
  },
  tr28: {
    context: "Os preços em lojas e mercados podem variar muito, e em alguns lugares é possível negociar. Em mercados de artesanato e bazares, a negociação é parte da cultura local. Saber como perguntar preços e fazer ofertas educadamente é uma habilidade útil.",
    acts: [
      {"id":"tr28_a1","type":"tf","prompt":"Bargaining is acceptable in many street markets and bazaars around the world.","answer":true,"hint":"Negociar preços é comum e aceito em mercados e bazares ao redor do mundo."},
      {"id":"tr28_a2","type":"mc","prompt":"What does 'Is that your best price?' mean?","options":["Are you selling the most expensive item?","Can you offer a lower price?","Is this the newest product?","Do you have a price list?"],"answerIdx":1,"hint":"'Is that your best price?' significa perguntar se o vendedor pode oferecer um preço menor."},
      {"id":"tr28_a3","type":"fill","prompt":"That's a bit too expensive. Could you give me a ___?","answer":"discount","keywords":["discount","lower price","better deal","reduction"],"hint":"'Discount' significa desconto em inglês."},
      {"id":"tr28_a4","type":"text","prompt":"You are shopping at a local market and want to buy a handmade item. Write the negotiation conversation with the vendor, starting from the original price and reaching an agreement.","keywords":["price","discount","offer","deal","negotiate","too expensive","reasonable","final price","cash","bargain"],"hint":"Negocie o preço com o vendedor começando com uma oferta menor."}
    ]
  },
  tr29: {
    context: "Devolver ou trocar produtos que não atendem às expectativas é um direito do consumidor na maioria dos países. É importante guardar o recibo e conhecer a política de devolução da loja. Alguns itens como roupas íntimas ou produtos de higiene geralmente não podem ser devolvidos.",
    acts: [
      {"id":"tr29_a1","type":"tf","prompt":"You usually need a receipt to return or exchange a purchase.","answer":true,"hint":"O recibo geralmente é necessário para devoluções e trocas."},
      {"id":"tr29_a2","type":"mc","prompt":"What does 'store credit' mean in a return policy?","options":["Cash refund","A credit to use at that store instead of a cash refund","A discount on your next purchase","Free membership points"],"answerIdx":1,"hint":"'Store credit' é um crédito para usar na loja em vez de reembolso em dinheiro."},
      {"id":"tr29_a3","type":"fill","prompt":"I would like to ___ this jacket. It has a defect on the sleeve.","answer":"return","keywords":["return","exchange","refund","get a refund for"],"hint":"'Return' significa devolver um produto; 'exchange' significa trocar."},
      {"id":"tr29_a4","type":"text","prompt":"You bought a shirt that has a defect and you want to return it. Write the conversation with the store manager, explaining the problem, showing the receipt, and requesting a refund or exchange.","keywords":["return","exchange","refund","defect","receipt","policy","credit","manager","original price","replacement"],"hint":"Explique o defeito, mostre o recibo e peça reembolso ou troca."}
    ]
  },
  tr30: {
    context: "Trocar moeda é essencial quando se viaja para países com moedas diferentes. Casas de câmbio, bancos e até aeroportos oferecem serviços de câmbio, mas as taxas variam. É importante comparar taxas e desconfiar de taxas muito baixas ou ofertas suspeitas.",
    acts: [
      {"id":"tr30_a1","type":"tf","prompt":"Currency exchange rates at airports are usually the best rates available.","answer":false,"hint":"As casas de câmbio de aeroportos geralmente têm taxas menos favoráveis que bancos e câmbio locais."},
      {"id":"tr30_a2","type":"mc","prompt":"What is the 'exchange rate'?","options":["The cost of a travel card","The value of one currency compared to another","The fee for using an ATM","The total amount of money you can exchange"],"answerIdx":1,"hint":"A taxa de câmbio é o valor de uma moeda em relação a outra."},
      {"id":"tr30_a3","type":"fill","prompt":"I would like to ___ 200 US dollars into euros, please.","answer":"exchange","keywords":["exchange","convert","change","swap"],"hint":"'Exchange' ou 'convert' significa trocar uma moeda por outra."},
      {"id":"tr30_a4","type":"text","prompt":"You are at a currency exchange office. Write the conversation where you ask about the exchange rate, any fees, and then exchange your home currency for local currency.","keywords":["exchange rate","commission","fee","currency","convert","receipt","dollars","euros","pounds","rate"],"hint":"Pergunte sobre taxas de câmbio, comissões e conclua a transação."}
    ]
  },
  tr31: {
    context: "Usar caixas eletrônicos no exterior é uma forma conveniente de obter dinheiro local. É importante conhecer as taxas de saque e verificar se o seu cartão tem cobertura internacional. Algumas contas oferecem isenção de taxas no exterior, o que pode ser muito vantajoso.",
    acts: [
      {"id":"tr31_a1","type":"tf","prompt":"Using your home bank card at an ATM abroad may incur additional fees.","answer":true,"hint":"Usar seu cartão no exterior pode gerar taxas de saque e conversão de moeda."},
      {"id":"tr31_a2","type":"mc","prompt":"What should you do before using an ATM in a foreign country?","options":["Withdraw as much money as possible","Notify your bank of your travel plans","Use any ATM without checking","Exchange all money before arriving"],"answerIdx":1,"hint":"Avise seu banco antes de viajar para evitar o bloqueio do cartão por suspeita de fraude."},
      {"id":"tr31_a3","type":"fill","prompt":"I need to ___ some cash from the ATM before we go sightseeing.","answer":"withdraw","keywords":["withdraw","get","take out"],"hint":"'Withdraw' significa sacar dinheiro do caixa eletrônico."},
      {"id":"tr31_a4","type":"text","prompt":"Describe the steps you follow when using an ATM abroad. Include safety tips, how to check fees, and what to do if your card is declined.","keywords":["ATM","PIN","withdraw","fee","declined","notify bank","receipt","safe","daily limit","foreign transaction"],"hint":"Descreva como usar um caixa eletrônico no exterior com segurança."}
    ]
  },
  tr32: {
    context: "O seguro de viagem protege o viajante contra imprevistos como cancelamentos de voo, perdas de bagagem e emergências médicas. É fundamental entender os termos e coberturas da apólice antes de contratar. Guardar os documentos do seguro acessíveis durante toda a viagem é essencial.",
    acts: [
      {"id":"tr32_a1","type":"tf","prompt":"Travel insurance can cover medical emergencies that happen during your trip.","answer":true,"hint":"O seguro de viagem pode cobrir emergências médicas ocorridas durante a viagem."},
      {"id":"tr32_a2","type":"mc","prompt":"What is a 'deductible' in travel insurance?","options":["The total coverage amount","The amount you pay out of pocket before insurance covers the rest","The monthly premium","The insurance company name"],"answerIdx":1,"hint":"A franquia (deductible) é o valor que você paga antes de o seguro cobrir o restante."},
      {"id":"tr32_a3","type":"fill","prompt":"I need to file a ___ with my travel insurance company for the stolen camera.","answer":"claim","keywords":["claim","report","complaint"],"hint":"'File a claim' significa registrar uma reclamação com a seguradora."},
      {"id":"tr32_a4","type":"text","prompt":"Explain why travel insurance is important and describe three situations where it would be useful during a trip. Include the type of coverage needed for each situation.","keywords":["coverage","claim","medical","cancellation","lost luggage","deductible","policy","emergency","reimburse","premium"],"hint":"Explique a importância do seguro e descreva situações onde ele seria útil."}
    ]
  },
  tr33: {
    context: "Emergências médicas durante viagens podem ocorrer e é importante saber como comunicá-las em inglês. Conhecer frases para descrever sintomas e pedir ajuda pode fazer a diferença em situações críticas. O número de emergência varia por país, mas o 911 é usado nos EUA e o 999 no Reino Unido.",
    acts: [
      {"id":"tr33_a1","type":"tf","prompt":"The emergency number in the United States is 911.","answer":true,"hint":"O número de emergência nos EUA é 911; no Reino Unido é 999."},
      {"id":"tr33_a2","type":"mc","prompt":"What should you say in an emergency to get immediate help?","options":["Please help me when you have time","Help! I need an ambulance!","Excuse me, I feel a little unwell","I think I may need a doctor eventually"],"answerIdx":1,"hint":"Em emergências, use frases diretas e urgentes para pedir ajuda imediata."},
      {"id":"tr33_a3","type":"fill","prompt":"Call an ambulance! My friend is having a ___ attack.","answer":"heart","keywords":["heart","panic","asthma","allergic"],"hint":"'Heart attack' significa ataque cardíaco em inglês."},
      {"id":"tr33_a4","type":"text","prompt":"Describe what you would say when calling emergency services. Include the nature of the emergency, your location, the condition of the person who needs help, and your contact information.","keywords":["emergency","ambulance","police","fire","location","symptoms","unconscious","breathing","address","urgent"],"hint":"Ligue para os serviços de emergência descrevendo a situação, localização e condição da vítima."}
    ]
  },
  tr34: {
    context: "Farmácias no exterior podem ter nomes e sistemas diferentes do que você está acostumado. Saber descrever sintomas e pedir medicamentos comuns em inglês é essencial. Alguns medicamentos exigem receita médica, mesmo que no seu país sejam vendidos sem receita.",
    acts: [
      {"id":"tr34_a1","type":"tf","prompt":"Some medications available without a prescription in your home country may require a prescription abroad.","answer":true,"hint":"Regras sobre receitas médicas variam entre países."},
      {"id":"tr34_a2","type":"mc","prompt":"What do you say when you have a headache and need medicine at a pharmacy?","options":["I need something for a broken leg","Do you have anything for a headache?","I want the strongest medicine you have","Can I get antibiotics please?"],"answerIdx":1,"hint":"Descreva o sintoma específico ao pedir medicamento na farmácia."},
      {"id":"tr34_a3","type":"fill","prompt":"Could you recommend something for ___ stomach and nausea?","answer":"an upset","keywords":["an upset","a sore","a bad"],"hint":"'Upset stomach' significa estômago indisposto em inglês."},
      {"id":"tr34_a4","type":"text","prompt":"You are feeling ill and visit a pharmacy abroad. Describe your symptoms to the pharmacist and ask for appropriate medication. Include asking about dosage and side effects.","keywords":["symptom","pharmacist","prescription","dosage","side effects","allergic","medication","over-the-counter","fever","pain relief"],"hint":"Descreva os sintomas ao farmacêutico e pergunte sobre dosagem e efeitos colaterais."}
    ]
  },
  tr35: {
    context: "Visitar um médico em outro país pode ser uma experiência diferente da habitual. É essencial saber descrever sintomas com precisão e mencionar medicamentos que você já toma. Ter um seguro de saúde de viagem pode cobrir os custos de consultas e tratamentos.",
    acts: [
      {"id":"tr35_a1","type":"tf","prompt":"When visiting a doctor abroad, you should bring a list of your current medications.","answer":true,"hint":"Sempre leve uma lista dos medicamentos que você toma ao visitar um médico no exterior."},
      {"id":"tr35_a2","type":"mc","prompt":"How would you describe a sharp pain to a doctor?","options":["I feel a bit tired","I have a dull ache","I have a sharp, stabbing pain","I feel slightly uncomfortable"],"answerIdx":2,"hint":"Uma dor aguda é descrita como 'sharp' ou 'stabbing pain' em inglês."},
      {"id":"tr35_a3","type":"fill","prompt":"Doctor, I have been having ___ pain in my lower back for three days.","answer":"severe","keywords":["severe","intense","sharp","dull","mild"],"hint":"Palavras para descrever intensidade da dor: severe (grave), mild (leve), sharp (aguda)."},
      {"id":"tr35_a4","type":"text","prompt":"You are visiting a doctor abroad with a fever and sore throat. Write the conversation describing your symptoms, medical history, and current medications. Ask for diagnosis and treatment options.","keywords":["symptoms","fever","sore throat","diagnosis","treatment","prescription","allergy","medical history","blood test","follow-up"],"hint":"Descreva sintomas, histórico médico e medicamentos ao visitar um médico no exterior."}
    ]
  },
  tr36: {
    context: "Infelizmente, roubos e perdas podem ocorrer durante viagens. Saber como reportar esses incidentes à polícia é fundamental para obter documentação para o seguro. É importante agir rapidamente e guardar o número do boletim de ocorrência.",
    acts: [
      {"id":"tr36_a1","type":"tf","prompt":"You need a police report number to file an insurance claim for stolen items.","answer":true,"hint":"O número do boletim de ocorrência é necessário para reclamações de seguro."},
      {"id":"tr36_a2","type":"mc","prompt":"Where should you go to report a theft while traveling?","options":["Your hotel reception only","The nearest police station","The airport lost and found","Your country's embassy"],"answerIdx":1,"hint":"Vá à delegacia de polícia mais próxima para registrar um boletim de ocorrência."},
      {"id":"tr36_a3","type":"fill","prompt":"I would like to report a ___. My wallet was stolen from my bag.","answer":"theft","keywords":["theft","robbery","crime","incident"],"hint":"'Theft' significa roubo ou furto em inglês."},
      {"id":"tr36_a4","type":"text","prompt":"Your passport and phone were stolen at a busy tourist area. Write the report you would give to the police, including when and where it happened, what was taken, and any description of the suspect.","keywords":["stolen","theft","report","passport","phone","witness","description","location","time","crime reference number"],"hint":"Descreva o roubo à polícia com detalhes sobre o que aconteceu, onde e o que foi levado."}
    ]
  },
  tr37: {
    context: "As embaixadas e consulados são instituições do seu país no exterior que podem ajudar em situações de emergência, como perda de passaporte ou problemas legais. É sempre bom anotar o contato da sua embaixada antes de viajar. Os serviços consulares incluem emissão de passaportes de emergência e assistência jurídica.",
    acts: [
      {"id":"tr37_a1","type":"tf","prompt":"Your country's embassy can issue an emergency passport if yours is lost or stolen.","answer":true,"hint":"A embaixada pode emitir passaporte de emergência em casos de perda ou roubo."},
      {"id":"tr37_a2","type":"mc","prompt":"What is the main difference between an embassy and a consulate?","options":["They are exactly the same","An embassy is in the capital city while a consulate may be in other cities","A consulate is only for tourists","An embassy is private while a consulate is public"],"answerIdx":1,"hint":"A embaixada fica na capital do país anfitrião; o consulado pode estar em outras cidades."},
      {"id":"tr37_a3","type":"fill","prompt":"I need to contact my country's ___ because I lost my passport abroad.","answer":"embassy","keywords":["embassy","consulate","diplomatic mission"],"hint":"'Embassy' é embaixada; 'consulate' é consulado."},
      {"id":"tr37_a4","type":"text","prompt":"You are stranded abroad because your passport was stolen and you have no money. Write what you would say when calling your country's embassy for emergency assistance.","keywords":["embassy","consulate","passport","emergency","stranded","replacement","assistance","citizen","repatriation","contact"],"hint":"Explique sua situação de emergência à embaixada e peça assistência consular."}
    ]
  },
  tr38: {
    context: "O vocabulário climático é essencial para planejar atividades ao ar livre e escolher roupas adequadas durante a viagem. Condições climáticas podem mudar rapidamente, especialmente em regiões montanhosas ou tropicais. Verificar a previsão do tempo antes de sair é sempre uma boa prática.",
    acts: [
      {"id":"tr38_a1","type":"tf","prompt":"'Scattered showers' means it will rain everywhere all day.","answer":false,"hint":"'Scattered showers' significa chuvas esparsas, não chuva o dia todo em todo lugar."},
      {"id":"tr38_a2","type":"mc","prompt":"What does 'humidity' refer to in weather?","options":["The temperature in degrees","The amount of moisture in the air","The wind speed","The amount of rainfall"],"answerIdx":1,"hint":"'Humidity' refere-se à quantidade de umidade no ar."},
      {"id":"tr38_a3","type":"fill","prompt":"The weather forecast says it will be ___ and sunny tomorrow, perfect for the beach.","answer":"warm","keywords":["warm","hot","mild","sunny"],"hint":"'Warm' significa quente mas agradável; 'hot' é muito quente."},
      {"id":"tr38_a4","type":"text","prompt":"Check the weather forecast for a trip destination and describe what the weather will be like. Include temperature, precipitation, and what clothing you would recommend packing.","keywords":["forecast","temperature","humidity","rain","sunny","cloudy","wind","pack","layers","umbrella"],"hint":"Descreva a previsão do tempo e sugira roupas adequadas para as condições climáticas."}
    ]
  },
  tr39: {
    context: "As estações do ano afetam significativamente a experiência de viagem, incluindo o clima, os preços e as atividades disponíveis. Viajar fora de temporada pode ser mais econômico e tranquilo, mas algumas atrações podem estar fechadas. Conhecer as estações do destino ajuda a planejar melhor.",
    acts: [
      {"id":"tr39_a1","type":"tf","prompt":"In the Southern Hemisphere, summer occurs in December and January.","answer":true,"hint":"No Hemisfério Sul, as estações são invertidas: verão em dezembro e janeiro."},
      {"id":"tr39_a2","type":"mc","prompt":"What is the 'shoulder season' in travel?","options":["The busiest tourist season","The period between peak and off-peak seasons","The coldest time of year","The rainy season"],"answerIdx":1,"hint":"A temporada intermediária (shoulder season) fica entre a alta e a baixa temporada."},
      {"id":"tr39_a3","type":"fill","prompt":"I prefer to travel in the ___ when the crowds are smaller and prices are lower.","answer":"off-season","keywords":["off-season","low season","shoulder season"],"hint":"'Off-season' ou 'low season' significa baixa temporada turística."},
      {"id":"tr39_a4","type":"text","prompt":"Describe the best time of year to visit a destination you know well. Include information about weather, tourist crowds, prices, and what activities are available in each season.","keywords":["season","peak","off-peak","climate","rainy","dry","summer","winter","crowds","festival"],"hint":"Descreva as estações do ano no destino escolhido e a melhor época para visitar."}
    ]
  },
  tr40: {
    context: "Atividades ao ar livre são uma parte emocionante de muitas viagens. Desde caminhadas e ciclismo até esportes aquáticos e safáris, há algo para todos os gostos. É importante verificar os requisitos de equipamentos e segurança antes de participar dessas atividades.",
    acts: [
      {"id":"tr40_a1","type":"tf","prompt":"You should always bring water and sunscreen when doing outdoor activities.","answer":true,"hint":"Água e protetor solar são essenciais para atividades ao ar livre."},
      {"id":"tr40_a2","type":"mc","prompt":"What is 'gear' in the context of outdoor activities?","options":["The speed of a vehicle","Equipment and clothing for a specific activity","A type of hiking trail","A weather condition"],"answerIdx":1,"hint":"'Gear' refere-se a equipamentos e roupas específicas para uma atividade."},
      {"id":"tr40_a3","type":"fill","prompt":"We need to rent ___ before going on the kayaking tour.","answer":"equipment","keywords":["equipment","gear","kayaks","life jackets"],"hint":"'Equipment' ou 'gear' significa equipamento para atividades esportivas."},
      {"id":"tr40_a4","type":"text","prompt":"Plan an outdoor adventure day trip. Describe the activity, what equipment you need, safety precautions to take, and what you would need to bring with you.","keywords":["hiking","camping","kayaking","cycling","equipment","safety","guide","trail","water","sunscreen"],"hint":"Planeje uma atividade ao ar livre descrevendo equipamentos, segurança e o que levar."}
    ]
  },
  tr41: {
    context: "A praia é um dos destinos de férias mais populares do mundo. Conhecer o vocabulário relacionado à praia ajuda a aproveitar melhor a experiência. Desde alugar cadeiras e guarda-sóis até atividades como surfe e mergulho, há muito para explorar.",
    acts: [
      {"id":"tr41_a1","type":"tf","prompt":"A 'rip current' is a dangerous swimming condition at the beach.","answer":true,"hint":"Correntes de retorno (rip currents) são correntes perigosas que podem arrastar nadadores."},
      {"id":"tr41_a2","type":"mc","prompt":"What does a red flag at the beach mean?","options":["The beach is open for swimming","Water conditions are dangerous, swimming is prohibited","There is a beach party","Lifeguards are on duty"],"answerIdx":1,"hint":"Bandeira vermelha na praia significa condições perigosas e natação proibida."},
      {"id":"tr41_a3","type":"fill","prompt":"Could we rent a ___ and two beach chairs for the afternoon?","answer":"umbrella","keywords":["umbrella","parasol","sunshade","beach umbrella"],"hint":"'Beach umbrella' ou 'parasol' é guarda-sol de praia."},
      {"id":"tr41_a4","type":"text","prompt":"Describe a perfect beach day. Include what activities you would do, what items you would bring, and what you would need to rent or buy at the beach.","keywords":["sunscreen","umbrella","surfboard","snorkel","waves","tide","lifeguard","sandcastle","towel","cooler"],"hint":"Descreva um dia perfeito na praia incluindo atividades e itens necessários."}
    ]
  },
  tr42: {
    context: "Trilhas e atividades em montanha oferecem experiências únicas para os viajantes aventureiros. É essencial estar bem preparado com equipamentos adequados, roupas em camadas e informações sobre o percurso. Respeitar a natureza e seguir as regras dos parques é fundamental.",
    acts: [
      {"id":"tr42_a1","type":"tf","prompt":"Wearing layers of clothing is recommended when hiking in the mountains.","answer":true,"hint":"Usar roupas em camadas é essencial na montanha pois a temperatura varia muito."},
      {"id":"tr42_a2","type":"mc","prompt":"What is a 'trailhead'?","options":["The highest point of a mountain","The starting point of a hiking trail","A type of hiking boot","A mountain shelter"],"answerIdx":1,"hint":"O 'trailhead' é o ponto de partida de uma trilha."},
      {"id":"tr42_a3","type":"fill","prompt":"We need to start early to reach the ___ before the weather changes.","answer":"summit","keywords":["summit","peak","top","highest point"],"hint":"'Summit' ou 'peak' significa o topo, o ponto mais alto de uma montanha."},
      {"id":"tr42_a4","type":"text","prompt":"Plan a mountain hiking trip. Describe the trail difficulty, essential gear to bring, safety precautions, and what to do in case of an emergency on the trail.","keywords":["trail","summit","elevation","gear","backpack","altitude","map","compass","emergency","shelter"],"hint":"Planeje uma trilha de montanha descrevendo dificuldade, equipamentos e precauções de segurança."}
    ]
  },
  tr43: {
    context: "Museus e galerias de arte são atrações culturais essenciais em qualquer destino. Eles preservam e exibem o patrimônio histórico, artístico e científico da humanidade. Muitas cidades possuem museus gratuitos ou com horários especiais de acesso gratuito.",
    acts: [
      {"id":"tr43_a1","type":"tf","prompt":"Taking flash photography is usually not allowed inside museums.","answer":true,"hint":"Fotografar com flash geralmente é proibido em museus para proteger as obras."},
      {"id":"tr43_a2","type":"mc","prompt":"What is an 'audio guide' at a museum?","options":["A guide that shows you around personally","A recorded narration you listen to on a device while exploring","A printed map of the museum","A guided tour in sign language"],"answerIdx":1,"hint":"O audioguia é uma narração gravada que você ouve enquanto explora o museu."},
      {"id":"tr43_a3","type":"fill","prompt":"The museum has a special ___ on ancient Egyptian artifacts this month.","answer":"exhibition","keywords":["exhibition","exhibit","show","display"],"hint":"'Exhibition' significa exposição ou mostra em inglês."},
      {"id":"tr43_a4","type":"text","prompt":"Write about a visit to a museum or gallery. Describe the exhibits you saw, what you found most interesting, and what you learned from the visit.","keywords":["exhibit","artwork","collection","gallery","sculpture","painting","history","interactive","audio guide","guided tour"],"hint":"Descreva sua visita ao museu mencionando as exposições e o que foi mais interessante."}
    ]
  },
  tr44: {
    context: "Concertos, shows de teatro e espetáculos fazem parte da cultura de muitos destinos turísticos. Comprar ingressos com antecedência é frequentemente necessário para eventos populares. Conhecer o vocabulário de entretenimento ajuda a escolher e aproveitar melhor os espetáculos.",
    acts: [
      {"id":"tr44_a1","type":"tf","prompt":"It is usually better to book concert or show tickets in advance to guarantee your seat.","answer":true,"hint":"Comprar ingressos antecipadamente garante seu lugar em shows e concertos populares."},
      {"id":"tr44_a2","type":"mc","prompt":"What does 'sold out' mean for a concert or show?","options":["The show was cancelled","All tickets have been sold and none are available","The show is free","The show is not popular"],"answerIdx":1,"hint":"'Sold out' significa que todos os ingressos foram vendidos e não há mais disponibilidade."},
      {"id":"tr44_a3","type":"fill","prompt":"I would like to book two ___ in the front row for tonight's performance.","answer":"seats","keywords":["seats","tickets","places"],"hint":"'Seats' significa assentos em um teatro ou sala de shows."},
      {"id":"tr44_a4","type":"text","prompt":"Write about attending a live music concert or theater show while traveling. Include how you found out about the event, how you bought tickets, and what the experience was like.","keywords":["concert","theater","tickets","venue","performance","stage","interval","encore","usher","atmosphere"],"hint":"Descreva como comprou ingressos e como foi a experiência de um show ao vivo."}
    ]
  },
  tr45: {
    context: "Participar de atividades esportivas e recreativas é uma ótima forma de conhecer uma nova cultura e fazer exercício durante a viagem. Muitas cidades oferecem aluguel de bicicletas, aulas de surf e outros esportes para turistas. Verificar os requisitos de segurança antes de participar é sempre importante.",
    acts: [
      {"id":"tr45_a1","type":"tf","prompt":"Many tourist destinations offer equipment rental for sports and recreational activities.","answer":true,"hint":"Muitos destinos turísticos oferecem aluguel de equipamentos esportivos."},
      {"id":"tr45_a2","type":"mc","prompt":"What is a 'beginner's class' in a recreational activity?","options":["An advanced lesson for experts","A class designed for people with no prior experience","A private lesson","A class for children only"],"answerIdx":1,"hint":"A aula para iniciantes é destinada a pessoas sem experiência prévia."},
      {"id":"tr45_a3","type":"fill","prompt":"We would like to join the ___ scuba diving class this afternoon.","answer":"beginner","keywords":["beginner","introductory","basic","first-time"],"hint":"'Beginner' significa iniciante ou para quem está começando."},
      {"id":"tr45_a4","type":"text","prompt":"You want to try a new sport or activity while on vacation. Write about how you would find information, book a class or tour, and what questions you would ask the instructor before starting.","keywords":["activity","beginner","instructor","equipment","safety","book","class","experience","tour","adventure"],"hint":"Descreva como encontrar, reservar e se preparar para uma atividade esportiva no destino."}
    ]
  },
  tr46: {
    context: "Conhecer pessoas de outros países e fazer amizades durante a viagem é uma das experiências mais enriquecedoras do turismo. Saber iniciar conversas e expressar interesse na cultura do outro é fundamental. Hostels, tours compartilhados e eventos locais são ótimos lugares para socializar.",
    acts: [
      {"id":"tr46_a1","type":"tf","prompt":"Hostels are great places to meet other travelers from around the world.","answer":true,"hint":"Hostels são ótimos lugares para conhecer outros viajantes."},
      {"id":"tr46_a2","type":"mc","prompt":"What is a good way to start a conversation with a fellow traveler?","options":["Talk about your personal problems","Ask where they are from and what they have visited","Complain about the weather","Ignore them and look at your phone"],"answerIdx":1,"hint":"Perguntar sobre a origem e os lugares visitados é uma boa forma de iniciar uma conversa."},
      {"id":"tr46_a3","type":"fill","prompt":"Where are you from? I notice you have an interesting ___!","answer":"accent","keywords":["accent","backpack","travel guide","camera"],"hint":"'Accent' significa sotaque em inglês."},
      {"id":"tr46_a4","type":"text","prompt":"You meet another traveler at your hostel. Write the conversation where you introduce yourself, share travel stories, exchange recommendations, and plan to explore the city together.","keywords":["introduce","hometown","itinerary","recommendation","exchange","contact","hostel","adventure","solo","travel buddy"],"hint":"Apresente-se, compartilhe histórias de viagem e planeje explorar a cidade juntos."}
    ]
  },
  tr47: {
    context: "Entender e respeitar as diferenças culturais é essencial para uma experiência de viagem positiva e enriquecedora. Gestos, comportamentos e normas sociais variam muito entre países e culturas. O que é considerado educado em uma cultura pode ser ofensivo em outra.",
    acts: [
      {"id":"tr47_a1","type":"tf","prompt":"Pointing with your finger is considered rude in some cultures.","answer":true,"hint":"Em algumas culturas asiáticas e do Oriente Médio, apontar com o dedo é considerado rude."},
      {"id":"tr47_a2","type":"mc","prompt":"What does 'cultural sensitivity' mean?","options":["Avoiding all contact with local people","Being aware of and respectful towards cultural differences","Only eating food from your home country","Dressing exactly like locals"],"answerIdx":1,"hint":"Sensibilidade cultural significa estar ciente e respeitar as diferenças culturais."},
      {"id":"tr47_a3","type":"fill","prompt":"Before visiting a temple, you should ___ your shoes as a sign of respect.","answer":"remove","keywords":["remove","take off","leave"],"hint":"Em muitos templos asiáticos, é necessário tirar os sapatos ao entrar."},
      {"id":"tr47_a4","type":"text","prompt":"Describe three important cultural differences between your home country and another country. Explain how you would adapt your behavior to show respect for the local culture.","keywords":["customs","etiquette","respect","dress code","gesture","greeting","tradition","taboo","adapt","local"],"hint":"Descreva diferenças culturais e como adaptar seu comportamento para respeitar a cultura local."}
    ]
  },
  tr48: {
    context: "Aprender algumas frases locais e expressões de educação no idioma do país que você está visitando demonstra respeito e pode abrir muitas portas. Mesmo que você não fale o idioma local, um simples 'obrigado' ou 'por favor' na língua local é muito apreciado. A educação e o respeito são universais.",
    acts: [
      {"id":"tr48_a1","type":"tf","prompt":"Locals generally appreciate when tourists try to speak even a few words of their language.","answer":true,"hint":"Os moradores locais geralmente apreciam quando turistas tentam falar algumas palavras do idioma local."},
      {"id":"tr48_a2","type":"mc","prompt":"Which phrase would you use to politely get someone's attention?","options":["Hey you!","Excuse me","Move out of my way","Listen here"],"answerIdx":1,"hint":"'Excuse me' é a forma educada de chamar a atenção de alguém."},
      {"id":"tr48_a3","type":"fill","prompt":"I'm sorry, I don't speak the language. Do you speak ___?","answer":"English","keywords":["English","French","Spanish","any other language"],"hint":"Pergunte educadamente se a pessoa fala inglês ou outro idioma que você conheça."},
      {"id":"tr48_a4","type":"text","prompt":"Write about the importance of learning basic polite phrases in the local language when traveling. Include examples of useful phrases and explain how they can improve your travel experience.","keywords":["please","thank you","excuse me","sorry","hello","goodbye","help","local","respect","phrase book"],"hint":"Explique a importância de aprender frases educadas no idioma local ao viajar."}
    ]
  },
  tr49: {
    context: "Fotografar pessoas e locais durante a viagem requer sensibilidade e respeito. Em muitos lugares, é obrigatório pedir permissão antes de fotografar pessoas, especialmente em contextos culturais ou religiosos. Algumas atrações cobram uma taxa extra para fotografias.",
    acts: [
      {"id":"tr49_a1","type":"tf","prompt":"You should always ask permission before taking someone's photo in a foreign country.","answer":true,"hint":"Sempre peça permissão antes de fotografar pessoas, especialmente em contextos culturais."},
      {"id":"tr49_a2","type":"mc","prompt":"What does 'no photography allowed' sign mean?","options":["You can take photos with a flash only","Taking photos in that area is prohibited","Professional photos are not allowed","Photography is free of charge"],"answerIdx":1,"hint":"A placa 'no photography' significa que fotos são proibidas naquele local."},
      {"id":"tr49_a3","type":"fill","prompt":"Excuse me, would you mind if I took a ___ of you in your traditional costume?","answer":"photo","keywords":["photo","picture","photograph","photo of you"],"hint":"'Would you mind if I took a photo?' é uma forma educada de pedir para fotografar alguém."},
      {"id":"tr49_a4","type":"text","prompt":"Describe the etiquette of taking photos while traveling. Include when you should ask permission, places where photography is prohibited, and how to respectfully capture your travel memories.","keywords":["permission","photograph","portrait","respect","prohibited","sacred","sign","pose","share","privacy"],"hint":"Descreva as boas práticas de fotografia durante viagens, incluindo quando pedir permissão."}
    ]
  },
  tr50: {
    context: "As redes sociais são uma forma popular de compartilhar experiências de viagem com amigos e família. Manter-se conectado durante uma viagem pode ser desafiador em alguns destinos. É importante conhecer as opções de dados móveis e Wi-Fi disponíveis no destino.",
    acts: [
      {"id":"tr50_a1","type":"tf","prompt":"Most hotels and cafés provide free Wi-Fi for their customers.","answer":true,"hint":"A maioria dos hotéis e cafés oferece Wi-Fi gratuito para os clientes."},
      {"id":"tr50_a2","type":"mc","prompt":"What does 'geo-tagging' mean on social media?","options":["Adding a filter to a photo","Adding your location to a post or photo","Creating a travel blog","Sharing photos with friends only"],"answerIdx":1,"hint":"'Geo-tagging' significa adicionar sua localização a uma postagem ou foto."},
      {"id":"tr50_a3","type":"fill","prompt":"I am going to ___ some photos from today's adventure on Instagram.","answer":"post","keywords":["post","share","upload","publish"],"hint":"'Post' ou 'share' significa publicar fotos nas redes sociais."},
      {"id":"tr50_a4","type":"text","prompt":"Describe how you use social media to document and share your travel experiences. Include which platforms you use, what types of content you share, and any challenges with connectivity.","keywords":["social media","Instagram","post","story","hashtag","followers","Wi-Fi","data","connectivity","share"],"hint":"Descreva como usar redes sociais durante viagens para compartilhar experiências."}
    ]
  },
  tr51: {
    context: "Usar Wi-Fi público durante viagens é conveniente, mas pode apresentar riscos de segurança. Hackers podem interceptar dados transmitidos em redes não seguras. Usar uma VPN e evitar acessar informações sensíveis em redes públicas são medidas importantes de proteção.",
    acts: [
      {"id":"tr51_a1","type":"tf","prompt":"Using public Wi-Fi to access your bank account is safe and recommended.","answer":false,"hint":"Usar Wi-Fi público para acessar contas bancárias é arriscado devido a possíveis hackers."},
      {"id":"tr51_a2","type":"mc","prompt":"What is a VPN used for when browsing on public Wi-Fi?","options":["To make your internet faster","To encrypt your connection and protect your data","To get free Wi-Fi access","To post photos faster"],"answerIdx":1,"hint":"Uma VPN criptografa sua conexão e protege seus dados em redes públicas."},
      {"id":"tr51_a3","type":"fill","prompt":"I always use a ___ when connecting to public Wi-Fi to protect my personal data.","answer":"VPN","keywords":["VPN","virtual private network","security app"],"hint":"VPN (Virtual Private Network) protege seus dados em redes públicas."},
      {"id":"tr51_a4","type":"text","prompt":"Write about the risks of using public Wi-Fi while traveling and how to stay safe online. Include at least three safety tips and explain why they are important.","keywords":["VPN","encryption","secure","password","public Wi-Fi","hacker","sensitive","bank","antivirus","two-factor authentication"],"hint":"Descreva os riscos do Wi-Fi público e dê dicas de segurança para navegar com segurança."}
    ]
  },
  tr52: {
    context: "Fazer chamadas telefônicas internacionais pode ser caro se você não planejar corretamente. Comprar um chip local ou usar aplicativos de comunicação como WhatsApp e Skype pode economizar muito dinheiro. O roaming internacional pode ter tarifas elevadas dependendo da operadora.",
    acts: [
      {"id":"tr52_a1","type":"tf","prompt":"Buying a local SIM card is usually cheaper than using international roaming.","answer":true,"hint":"Comprar um chip local geralmente é mais barato do que usar roaming internacional."},
      {"id":"tr52_a2","type":"mc","prompt":"What does 'roaming' mean in mobile phone usage?","options":["A free service for international calls","Using your phone on a network in another country, usually for extra cost","Downloading apps while traveling","A type of mobile phone plan"],"answerIdx":1,"hint":"'Roaming' é usar seu celular em outra rede no exterior, geralmente com custo adicional."},
      {"id":"tr52_a3","type":"fill","prompt":"I need to buy a local ___ card to make calls without paying high roaming fees.","answer":"SIM","keywords":["SIM","prepaid","local"],"hint":"Um chip SIM local permite fazer chamadas sem pagar tarifas de roaming."},
      {"id":"tr52_a4","type":"text","prompt":"Describe the options available for making phone calls and accessing the internet while traveling internationally. Compare the costs and benefits of each option.","keywords":["SIM card","roaming","Wi-Fi calling","international plan","prepaid","data","WhatsApp","Skype","coverage","unlock"],"hint":"Compare opções de comunicação no exterior: chip local, roaming e aplicativos de chamada."}
    ]
  },
  tr53: {
    context: "Os serviços postais no exterior podem ser diferentes dos que você está acostumado. Enviar cartões postais e presentes para casa é uma tradição de viagem muito apreciada. É importante conhecer o vocabulário para enviar cartas e pacotes internacionalmente.",
    acts: [
      {"id":"tr53_a1","type":"tf","prompt":"You can usually buy stamps at a post office or sometimes at hotel reception.","answer":true,"hint":"Selos podem ser comprados nos correios ou às vezes na recepção do hotel."},
      {"id":"tr53_a2","type":"mc","prompt":"What information do you need to write on a postcard to send it internationally?","options":["Only the recipient's name","The recipient's full address and the country","Only the zip code","Your hotel's address"],"answerIdx":1,"hint":"Para enviar um cartão postal internacionalmente, inclua o endereço completo e o país."},
      {"id":"tr53_a3","type":"fill","prompt":"How much does it cost to send this ___ to Brazil by airmail?","answer":"package","keywords":["package","parcel","letter","postcard"],"hint":"'Package' ou 'parcel' significa pacote; 'airmail' é via aérea."},
      {"id":"tr53_a4","type":"text","prompt":"You want to send souvenirs and a postcard home from your travels. Write the conversation at the post office where you ask about rates, services, and send your items.","keywords":["post office","stamp","airmail","package","fragile","tracking","customs form","delivery","weight","postcard"],"hint":"Vá aos correios, pergunte sobre tarifas e serviços, e envie seus itens para casa."}
    ]
  },
  tr54: {
    context: "Viajar de trem é uma das experiências mais agradáveis e sustentáveis do turismo. Muitos países europeus e asiáticos possuem extensas redes ferroviárias de alta velocidade. Conhecer o vocabulário ferroviário facilita a compra de bilhetes e a navegação nas estações.",
    acts: [
      {"id":"tr54_a1","type":"tf","prompt":"A return ticket is the same as two single tickets.","answer":false,"hint":"Um bilhete de ida e volta (return ticket) pode ser mais barato que dois bilhetes simples."},
      {"id":"tr54_a2","type":"mc","prompt":"What is a 'platform' at a train station?","options":["The underground section of the station","The raised area where passengers board and exit trains","The ticket office","The station restaurant"],"answerIdx":1,"hint":"A plataforma é a área elevada onde os passageiros embarcam e desembarcam dos trens."},
      {"id":"tr54_a3","type":"fill","prompt":"The train departs from ___ 5 at 14:30. Please board now.","answer":"platform","keywords":["platform","track","bay"],"hint":"'Platform' é a plataforma de embarque da estação de trem."},
      {"id":"tr54_a4","type":"text","prompt":"Plan a train journey in Europe. Include buying tickets, choosing seat class, understanding the schedule, and what facilities are available on the train.","keywords":["ticket","platform","departure","arrival","first class","economy","schedule","delay","reservation","dining car"],"hint":"Planeje uma viagem de trem descrevendo compra de bilhetes, classes e facilidades a bordo."}
    ]
  },
  tr55: {
    context: "Viagens de balsa e barco são comuns em regiões com ilhas, lagos e rios. Em muitos países, as balsas são o principal meio de transporte entre ilhas e cidades costeiras. É importante verificar os horários com antecedência pois as balsas podem ter frequência limitada.",
    acts: [
      {"id":"tr55_a1","type":"tf","prompt":"Ferry services often have limited schedules, so you should book in advance.","answer":true,"hint":"Os serviços de balsa têm horários limitados; reservar com antecedência é recomendado."},
      {"id":"tr55_a2","type":"mc","prompt":"What is a 'life jacket'?","options":["A type of warm coat","A safety device that keeps you afloat in water","A jacket worn by sailors","A type of luggage storage"],"answerIdx":1,"hint":"Um colete salva-vidas mantém você flutuando na água em emergências."},
      {"id":"tr55_a3","type":"fill","prompt":"The ferry to the island departs from the ___ at 9 AM and returns at 5 PM.","answer":"dock","keywords":["dock","pier","harbor","port"],"hint":"'Dock' ou 'pier' é o cais onde as balsas atracam e partem."},
      {"id":"tr55_a4","type":"text","prompt":"Describe a boat or ferry journey you would like to take. Include your departure point, destination, duration, and what you would see and do during the crossing.","keywords":["ferry","boat","deck","port","harbor","seasick","crossing","island","schedule","ticket"],"hint":"Descreva uma viagem de balsa ou barco incluindo partida, destino e o que você veria."}
    ]
  },
  tr56: {
    context: "Os cruzeiros oferecem uma forma única de viajar, permitindo visitar vários destinos em uma única viagem. Os navios de cruzeiro possuem uma ampla variedade de comodidades como restaurantes, piscinas e entretenimento. É importante entender o vocabulário específico de cruzeiros para aproveitar ao máximo a experiência.",
    acts: [
      {"id":"tr56_a1","type":"tf","prompt":"On a cruise ship, 'port of call' refers to a destination city where the ship docks briefly.","answer":true,"hint":"'Port of call' é um destino intermediário onde o navio para por um tempo limitado."},
      {"id":"tr56_a2","type":"mc","prompt":"What is the 'lido deck' on a cruise ship?","options":["The engine room","The outdoor pool deck","The captain's quarters","The dining hall"],"answerIdx":1,"hint":"O 'lido deck' é o deck externo com piscina em um navio de cruzeiro."},
      {"id":"tr56_a3","type":"fill","prompt":"We will be ___ in Santorini for six hours before the ship continues to Rhodes.","answer":"docked","keywords":["docked","anchored","stopping","berthed"],"hint":"'Docked' significa que o navio está atracado no porto."},
      {"id":"tr56_a4","type":"text","prompt":"Describe life on a cruise ship. Include the daily routine, available activities, dining options, shore excursions, and any challenges of this type of travel.","keywords":["cabin","deck","excursion","buffet","formal night","seasick","port","itinerary","entertainment","captain"],"hint":"Descreva a vida a bordo de um cruzeiro, incluindo atividades, refeições e escalas."}
    ]
  },
  tr57: {
    context: "Passeios em grupo com guias turísticos são uma ótima maneira de conhecer os pontos mais importantes de um destino rapidamente. Os guias oferecem informações históricas e culturais que enriquecem a experiência. É importante verificar o que está incluído no passeio antes de reservar.",
    acts: [
      {"id":"tr57_a1","type":"tf","prompt":"Guided tours usually include a local expert who provides historical and cultural information.","answer":true,"hint":"Passeios guiados geralmente incluem um especialista local com informações históricas e culturais."},
      {"id":"tr57_a2","type":"mc","prompt":"What does 'all-inclusive tour' mean?","options":["A tour with no meals","A tour where most costs like meals and activities are included in the price","A tour only for families","A self-guided tour"],"answerIdx":1,"hint":"Um passeio 'all-inclusive' inclui a maioria dos custos como refeições e atividades no preço."},
      {"id":"tr57_a3","type":"fill","prompt":"The tour guide will ___ us at the hotel lobby at 8 AM before we depart.","answer":"meet","keywords":["meet","pick up","collect","join"],"hint":"O guia vai encontrar o grupo no hotel antes da partida do passeio."},
      {"id":"tr57_a4","type":"text","prompt":"Compare the advantages and disadvantages of joining a guided group tour versus exploring a destination independently. Which do you prefer and why?","keywords":["guided tour","independent","itinerary","flexibility","group","local guide","cost","convenience","schedule","explore"],"hint":"Compare passeios guiados em grupo com viagens independentes, listando vantagens e desvantagens."}
    ]
  },
  tr58: {
    context: "Viajar com orçamento limitado requer planejamento e conhecimento de alternativas econômicas. Existem muitas formas de economizar em acomodação, transporte e alimentação sem perder a qualidade da experiência. Plataformas online e aplicativos de viagem podem ajudar a encontrar as melhores ofertas.",
    acts: [
      {"id":"tr58_a1","type":"tf","prompt":"Booking flights and accommodation well in advance usually results in lower prices.","answer":true,"hint":"Reservar com antecedência geralmente garante preços mais baixos."},
      {"id":"tr58_a2","type":"mc","prompt":"What is 'couchsurfing' as a budget travel option?","options":["Surfing at a cheap beach resort","Staying for free at a local's home","A discount on hotel rooms","A budget airline service"],"answerIdx":1,"hint":"Couchsurfing é ficar de graça na casa de moradores locais."},
      {"id":"tr58_a3","type":"fill","prompt":"To save money, I always eat at local ___ instead of tourist restaurants.","answer":"markets","keywords":["markets","street food stalls","food markets","cafes"],"hint":"Comer em mercados locais é mais barato e autêntico do que restaurantes turísticos."},
      {"id":"tr58_a4","type":"text","prompt":"Write your top five tips for traveling on a tight budget. Include advice on accommodation, food, transportation, and activities, with specific examples.","keywords":["budget","hostel","street food","discount","off-season","walking","free museum","transport card","loyalty points","negotiate"],"hint":"Dê cinco dicas práticas para viajar com pouco dinheiro incluindo acomodação, alimentação e transporte."}
    ]
  },
  tr59: {
    context: "As viagens de luxo oferecem experiências exclusivas e serviços personalizados de alto padrão. Desde hotéis cinco estrelas e voos em primeira classe até safáris privados e iatismo, o luxo no turismo tem muitas facetas. Entender o vocabulário de viagens de luxo é útil mesmo para quem apenas sonha com essas experiências.",
    acts: [
      {"id":"tr59_a1","type":"tf","prompt":"A butler service at a luxury hotel means a personal assistant is available to help with your needs.","answer":true,"hint":"O serviço de mordomo em um hotel de luxo oferece um assistente pessoal para suas necessidades."},
      {"id":"tr59_a2","type":"mc","prompt":"What is a 'concierge' at a luxury hotel?","options":["A hotel security guard","A staff member who helps guests with reservations, recommendations, and special requests","The hotel chef","A room cleaning service"],"answerIdx":1,"hint":"O concierge é um funcionário que ajuda os hóspedes com reservas, recomendações e pedidos especiais."},
      {"id":"tr59_a3","type":"fill","prompt":"I would like to book the ___ suite with a private pool and ocean view.","answer":"penthouse","keywords":["penthouse","presidential","royal","deluxe"],"hint":"'Penthouse suite' é a suíte no último andar, geralmente a mais luxuosa."},
      {"id":"tr59_a4","type":"text","prompt":"Describe your dream luxury travel experience. Include the destination, type of accommodation, transportation, dining, and exclusive activities you would enjoy.","keywords":["first class","penthouse","private jet","butler","concierge","spa","yacht","exclusive","Michelin","chauffeur"],"hint":"Descreva sua viagem dos sonhos de luxo incluindo acomodação, transporte e experiências exclusivas."}
    ]
  },
  tr60: {
    context: "Compartilhar suas experiências de viagem é uma parte importante da cultura de viajantes. Saber descrever lugares, comidas, pessoas e emoções vividas enriquece as narrativas e inspira outros a explorar o mundo. O vocabulário descritivo e os tempos verbais do passado são essenciais para contar histórias de viagem.",
    acts: [
      {"id":"tr60_a1","type":"tf","prompt":"Using descriptive adjectives makes travel stories more vivid and engaging.","answer":true,"hint":"Adjetivos descritivos tornam as histórias de viagem mais vívidas e interessantes."},
      {"id":"tr60_a2","type":"mc","prompt":"Which phrase best describes a positive travel experience?","options":["It was a bit of a disappointment","It was an unforgettable and life-changing adventure","The trip was okay, nothing special","I wouldn't recommend it to anyone"],"answerIdx":1,"hint":"Frases positivas e descritivas transmitem melhor uma experiência de viagem marcante."},
      {"id":"tr60_a3","type":"fill","prompt":"The sunset over the mountains was absolutely ___, one of the most beautiful things I have ever seen.","answer":"breathtaking","keywords":["breathtaking","stunning","magnificent","gorgeous"],"hint":"'Breathtaking' significa algo tão bonito que te deixa sem fôlego."},
      {"id":"tr60_a4","type":"text","prompt":"Write a short travel story about your most memorable trip or a trip you would like to take. Use descriptive language, include highlights and challenges, and explain what you learned from the experience.","keywords":["unforgettable","highlight","challenge","culture","cuisine","landscape","recommend","adventure","memory","inspire"],"hint":"Escreva uma história de viagem usando linguagem descritiva para compartilhar destaques e aprendizados."}
    ]
  },
  cv1: {
    context: "Cumprimentos e apresentações são a base de qualquer conversa em inglês. Saber como se apresentar e cumprimentar pessoas corretamente é essencial para causar uma boa primeira impressão. Expressões como 'Nice to meet you' e 'How do you do?' são muito comuns em contextos formais e informais.",
    acts: [
      {"id":"cv1_a1","type":"tf","prompt":"'How do you do?' is a formal greeting used when meeting someone for the first time.","answer":true,"hint":"Pense em contextos formais de apresentação."},
      {"id":"cv1_a2","type":"mc","prompt":"Which response is most appropriate when someone says 'Nice to meet you'?","options":["Nice to meet you too","Good morning","See you later","How are you?"],"answerIdx":0,"hint":"Geralmente repetimos a expressão de volta para a pessoa."},
      {"id":"cv1_a3","type":"fill","prompt":"When meeting someone informally, you can say: 'Hi! I'm Sarah. What's your ___?'","answer":"name","keywords":["name","names"],"hint":"A palavra que pergunta como a pessoa se chama."},
      {"id":"cv1_a4","type":"text","prompt":"Write a short introduction of yourself as if you were meeting someone new at a party. Include your name, where you're from, and what you do.","keywords":["name","from","work","do","hello","hi","meet","nice"],"hint":"Inclua seu nome, de onde você é e o que você faz."}
    ]
  },
  cv2: {
    context: "Falar sobre o tempo é um dos tópicos favoritos dos falantes de inglês, especialmente britânicos. É uma forma educada de iniciar uma conversa com desconhecidos. Expressões como 'It's lovely out today' ou 'What awful weather!' são muito usadas no dia a dia.",
    acts: [
      {"id":"cv2_a1","type":"tf","prompt":"In English-speaking cultures, talking about the weather is considered a very common way to start a conversation.","answer":true,"hint":"Pense no hábito cultural de falar sobre o tempo como 'small talk'."},
      {"id":"cv2_a2","type":"mc","prompt":"Which sentence correctly describes cold and rainy weather?","options":["It's boiling hot outside","It's freezing and pouring with rain","The weather is gorgeous today","It's warm and sunny"],"answerIdx":1,"hint":"Procure a opção com vocabulário de frio e chuva."},
      {"id":"cv2_a3","type":"fill","prompt":"The forecast says it will ___ tomorrow, so bring an umbrella.","answer":"rain","keywords":["rain","pour","storm"],"hint":"O que a previsão diz que vai acontecer com o tempo?"},
      {"id":"cv2_a4","type":"text","prompt":"Describe the weather in your city today and say how it makes you feel. Use at least three weather-related words.","keywords":["sunny","rainy","cloudy","hot","cold","windy","weather","feels"],"hint":"Descreva o clima atual e como ele afeta seu humor."}
    ]
  },
  cv3: {
    context: "Conversar sobre o fim de semana e hobbies é uma ótima maneira de conhecer melhor as pessoas. Em inglês, perguntas como 'What do you get up to on weekends?' são muito comuns entre colegas e amigos. Compartilhar interesses cria conexões naturais na conversa.",
    acts: [
      {"id":"cv3_a1","type":"mc","prompt":"What does 'What do you get up to on weekends?' mean?","options":["What time do you wake up on weekends?","What activities do you do on weekends?","Do you work on weekends?","Where do you go on weekends?"],"answerIdx":1,"hint":"A expressão 'get up to' significa 'fazer' ou 'se envolver em'."},
      {"id":"cv3_a2","type":"mc","prompt":"Which sentence best describes a hobby?","options":["I have to commute to work every day","I enjoy painting in my free time","I eat dinner at 7pm","I sleep for eight hours"],"answerIdx":1,"hint":"Um hobby é algo que você faz por prazer no tempo livre."},
      {"id":"cv3_a3","type":"fill","prompt":"I love spending time ___ — hiking, cycling, and swimming are my favourite activities.","answer":"outdoors","keywords":["outdoors","outside","outdoor"],"hint":"A palavra descreve atividades feitas ao ar livre."},
      {"id":"cv3_a4","type":"text","prompt":"Tell someone about your favourite hobby and explain why you enjoy it. Mention how often you do it.","keywords":["hobby","enjoy","love","free time","weekend","often","every","because"],"hint":"Fale sobre um passatempo favorito, com que frequência você faz e por que gosta."}
    ]
  },
  cv4: {
    context: "Falar sobre a família é um tema muito pessoal e comum em conversas informais. Em inglês, há vocabulário específico para descrever relações familiares, como 'siblings' (irmãos), 'in-laws' (sogros/cunhados) e 'extended family' (família extensa). Compartilhar histórias sobre a família ajuda a criar vínculos nas conversas.",
    acts: [
      {"id":"cv4_a1","type":"tf","prompt":"'Siblings' refers to both brothers and sisters.","answer":true,"hint":"'Siblings' é o termo geral para irmãos e irmãs."},
      {"id":"cv4_a2","type":"mc","prompt":"What does 'in-laws' mean?","options":["Your biological family","Your friends who are like family","Your relatives by marriage","Your neighbours"],"answerIdx":2,"hint":"Essas são as pessoas que se tornam sua família através do casamento."},
      {"id":"cv4_a3","type":"fill","prompt":"My parents have three children, so I have two ___.","answer":"siblings","keywords":["siblings","brothers","sisters","brothers and sisters"],"hint":"A palavra para irmãos e irmãs em inglês."},
      {"id":"cv4_a4","type":"text","prompt":"Describe your family to a new friend. Mention how many people are in your family and say something interesting about one family member.","keywords":["family","parents","sibling","brother","sister","live","close","member"],"hint":"Descreva sua família, quantas pessoas são e fale algo sobre um deles."}
    ]
  },
  cv5: {
    context: "Falar sobre trabalho é inevitável em conversas sociais. Em inglês, é comum perguntar 'What do you do for a living?' para saber a profissão de alguém. Expressões como 'I work in marketing' ou 'I'm self-employed' são muito usadas para descrever a situação profissional.",
    acts: [
      {"id":"cv5_a1","type":"mc","prompt":"What does 'What do you do for a living?' mean?","options":["How do you stay healthy?","What is your job or profession?","Where do you live?","How much do you earn?"],"answerIdx":1,"hint":"A expressão é uma maneira educada de perguntar sobre a profissão de alguém."},
      {"id":"cv5_a2","type":"mc","prompt":"Which sentence means someone works for themselves?","options":["I work nine to five","I'm self-employed","I'm between jobs","I work overtime"],"answerIdx":1,"hint":"Quem trabalha por conta própria é chamado de..."},
      {"id":"cv5_a3","type":"fill","prompt":"She loves her job because she works ___ from home three days a week.","answer":"remotely","keywords":["remotely","remote","from home"],"hint":"A palavra descreve trabalhar à distância, sem ir ao escritório."},
      {"id":"cv5_a4","type":"text","prompt":"Tell someone about your job or ideal job. Explain what the role involves and what you like or dislike about it.","keywords":["work","job","role","company","enjoy","challenge","colleague","office"],"hint":"Descreva seu trabalho ou trabalho ideal, o que envolve e o que você gosta ou não."}
    ]
  },
  cv6: {
    context: "Conversar sobre onde se mora inclui descrever o bairro, o tipo de moradia e as vantagens de viver em determinado lugar. Em inglês, expressões como 'It's a lively neighbourhood' ou 'I live in the suburbs' são muito comuns. Descrever o ambiente onde vivemos diz muito sobre nosso estilo de vida.",
    acts: [
      {"id":"cv6_a1","type":"tf","prompt":"'The suburbs' refers to areas in the city centre with tall buildings.","answer":false,"hint":"Os subúrbios são áreas residenciais fora do centro da cidade."},
      {"id":"cv6_a2","type":"mc","prompt":"Which phrase best describes a busy and exciting area of a city?","options":["A quiet rural village","A lively neighbourhood","A remote countryside","A sleepy town"],"answerIdx":1,"hint":"Procure o adjetivo que significa animado e cheio de vida."},
      {"id":"cv6_a3","type":"fill","prompt":"I love my area because it has great public ___ — buses and trains run very frequently.","answer":"transport","keywords":["transport","transportation","transit"],"hint":"A palavra refere-se ao sistema de ônibus, trens e metrô."},
      {"id":"cv6_a4","type":"text","prompt":"Describe where you live. Mention what type of home you have, what your neighbourhood is like, and one thing you love or wish were different about it.","keywords":["live","house","apartment","neighbourhood","area","quiet","busy","near"],"hint":"Descreva sua casa, bairro e o que você gosta ou não onde mora."}
    ]
  },
  cv7: {
    context: "Expressar gostos e preferências é fundamental em qualquer conversa. Em inglês, usamos estruturas como 'I'm really into...', 'I can't stand...' e 'I'm not a big fan of...' para descrever o que gostamos ou não. Essas expressões tornam a conversa mais natural e interessante.",
    acts: [
      {"id":"cv7_a1","type":"tf","prompt":"'I can't stand horror movies' means the person loves horror movies.","answer":false,"hint":"'Can't stand' expressa uma forte aversão a algo."},
      {"id":"cv7_a2","type":"mc","prompt":"Which phrase expresses a strong liking for something?","options":["I don't mind it","I'm not bothered","I'm absolutely crazy about it","It's not really my thing"],"answerIdx":2,"hint":"Procure a expressão que mostra entusiasmo intenso."},
      {"id":"cv7_a3","type":"fill","prompt":"Cooking shows are really popular — I'm ___ into watching them every evening.","answer":"really","keywords":["really","totally","absolutely","so"],"hint":"Um advérbio que reforça o quanto você gosta de algo."},
      {"id":"cv7_a4","type":"text","prompt":"Tell someone about two things you love and one thing you dislike. Explain why you feel that way about each one.","keywords":["love","enjoy","like","hate","dislike","fan","into","because"],"hint":"Mencione duas coisas que você ama e uma que não gosta, explicando o motivo."}
    ]
  },
  cv8: {
    context: "As preferências alimentares são um tópico delicioso para conversas! Em inglês, expressões como 'I have a sweet tooth' (gosto de doces) ou 'I'm a foodie' (apreciador de comida) são muito comuns. Falar sobre comida também inclui restrições alimentares como 'I'm vegetarian' ou 'I'm lactose intolerant'.",
    acts: [
      {"id":"cv8_a1","type":"mc","prompt":"What does 'I have a sweet tooth' mean?","options":["I have a toothache from eating sugar","I really enjoy sweet foods and desserts","I am a dentist","I prefer savoury foods"],"answerIdx":1,"hint":"Esta expressão idiomática refere-se a gostar muito de alimentos doces."},
      {"id":"cv8_a2","type":"mc","prompt":"Which sentence describes a food restriction?","options":["I eat everything","I'm a great cook","I'm gluten intolerant","I love trying new restaurants"],"answerIdx":2,"hint":"Uma restrição alimentar é quando alguém não pode comer certos alimentos."},
      {"id":"cv8_a3","type":"fill","prompt":"She doesn't eat meat or fish — she's been ___ for over five years.","answer":"vegetarian","keywords":["vegetarian","vegan","plant-based"],"hint":"A palavra descreve alguém que não come carne."},
      {"id":"cv8_a4","type":"text","prompt":"Describe your food preferences to a friend. Mention your favourite food, something you dislike, and any dietary restrictions you have.","keywords":["favourite","food","eat","like","dislike","vegetarian","vegan","prefer"],"hint":"Fale sobre suas comidas favoritas, o que não gosta e se tem restrições alimentares."}
    ]
  },
  cv9: {
    context: "A música é um tema universal que conecta pessoas de diferentes culturas. Em inglês, falamos sobre gêneros musicais como 'jazz', 'R&B', 'classical' e 'indie'. Expressões como 'That song is a banger!' (essa música é incrível!) e 'I'm really into alternative music' são muito usadas no contexto informal.",
    acts: [
      {"id":"cv9_a1","type":"tf","prompt":"'That song is a banger' is a slang expression meaning the song is very good.","answer":true,"hint":"'Banger' é uma gíria informal para uma música ótima."},
      {"id":"cv9_a2","type":"mc","prompt":"Which sentence best expresses a music preference?","options":["I read books every evening","I'm really into jazz and blues","I watch documentaries on weekends","I go to the gym regularly"],"answerIdx":1,"hint":"Procure a frase relacionada a estilos musicais."},
      {"id":"cv9_a3","type":"fill","prompt":"I went to an amazing live ___ last night — the band played for over two hours.","answer":"concert","keywords":["concert","gig","show","performance"],"hint":"A palavra para um show de música ao vivo."},
      {"id":"cv9_a4","type":"text","prompt":"Tell a friend about your favourite music genre or artist. Explain why you like them and recommend a song they should listen to.","keywords":["music","listen","favourite","artist","song","genre","recommend","love"],"hint":"Fale sobre seu gênero ou artista favorito e recomende uma música."}
    ]
  },
  cv10: {
    context: "Filmes e séries de TV são temas populares em conversas casuais. Em inglês, expressões como 'I binge-watched the whole series' (assisti a série toda de uma vez) ou 'It's a must-watch' (é obrigatório assistir) são muito comuns. Discutir enredos e personagens favoritos torna a conversa animada.",
    acts: [
      {"id":"cv10_a1","type":"mc","prompt":"What does 'I binge-watched the whole series' mean?","options":["I watched one episode per day","I watched the series very slowly","I watched many episodes in one sitting","I didn't finish the series"],"answerIdx":2,"hint":"'Binge-watch' significa assistir vários episódios seguidos sem parar."},
      {"id":"cv10_a2","type":"mc","prompt":"Which phrase means a film or show is highly recommended?","options":["It's a slow burn","It's a must-watch","It's a long shot","It's a bit dull"],"answerIdx":1,"hint":"A expressão significa que você definitivamente deve assistir."},
      {"id":"cv10_a3","type":"fill","prompt":"The plot twist at the end of the movie completely ___ me — I didn't see it coming!","answer":"surprised","keywords":["surprised","shocked","blew away","amazed"],"hint":"A palavra descreve a reação inesperada a algo surpreendente."},
      {"id":"cv10_a4","type":"text","prompt":"Recommend a film or TV show to a friend. Describe the plot briefly and explain why you think they would enjoy it.","keywords":["watch","film","show","plot","recommend","enjoy","character","story"],"hint":"Recomende um filme ou série, descreva brevemente e explique por que vale a pena."}
    ]
  },
  cv11: {
    context: "Falar sobre esportes e exercícios é muito comum, especialmente ao discutir rotinas saudáveis. Em inglês, usamos expressões como 'I work out regularly' (me exercito regularmente) e 'I'm a huge fan of football'. Discutir times favoritos, competições e hábitos esportivos anima qualquer conversa.",
    acts: [
      {"id":"cv11_a1","type":"tf","prompt":"'I work out three times a week' means the person exercises three times a week.","answer":true,"hint":"'Work out' significa se exercitar ou fazer academia."},
      {"id":"cv11_a2","type":"mc","prompt":"Which phrase means someone strongly supports a sports team?","options":["I sometimes watch football","I'm a huge fan of the team","I don't follow sports","I played football once"],"answerIdx":1,"hint":"A expressão mostra um apoio entusiasta e intenso."},
      {"id":"cv11_a3","type":"fill","prompt":"She runs a 5K every morning to stay ___ and healthy.","answer":"fit","keywords":["fit","active","healthy","in shape"],"hint":"A palavra descreve estar em boa forma física."},
      {"id":"cv11_a4","type":"text","prompt":"Talk about your relationship with exercise or sport. Do you play any sport or follow any team? Explain your habits and how sport makes you feel.","keywords":["sport","exercise","play","team","gym","run","fit","health"],"hint":"Fale sobre seus hábitos esportivos ou de exercício e como isso te faz sentir."}
    ]
  },
  cv12: {
    context: "Conversar sobre saúde e bem-estar é cada vez mais comum nas relações sociais. Em inglês, expressões como 'I've been feeling under the weather' (me sentindo mal) ou 'I'm trying to improve my mental health' são muito usadas. Cuidar do bem-estar físico e mental é um tema que une as pessoas.",
    acts: [
      {"id":"cv12_a1","type":"mc","prompt":"What does 'I've been feeling under the weather' mean?","options":["I've been enjoying the outdoors","I haven't been feeling well","I'm very happy today","I've been working too hard"],"answerIdx":1,"hint":"Esta expressão idiomática significa não estar se sentindo bem de saúde."},
      {"id":"cv12_a2","type":"mc","prompt":"Which phrase describes taking care of mental health?","options":["I lift weights every day","I practise mindfulness to reduce stress","I eat a lot of fast food","I sleep only four hours"],"answerIdx":1,"hint":"Procure a atividade relacionada ao bem-estar mental."},
      {"id":"cv12_a3","type":"fill","prompt":"I've started meditating every morning to help manage my ___.","answer":"stress","keywords":["stress","anxiety","tension","worry"],"hint":"A palavra descreve a sensação de pressão ou tensão mental."},
      {"id":"cv12_a4","type":"text","prompt":"Tell a friend about one healthy habit you have and one you would like to start. Explain how these habits affect your wellbeing.","keywords":["health","habit","sleep","exercise","eat","stress","wellbeing","mental"],"hint":"Fale sobre um hábito saudável que você tem e um que quer começar."}
    ]
  },
  cv13: {
    context: "Discutir notícias e eventos atuais é uma habilidade importante para conversas em inglês. Expressões como 'Have you heard about...?' e 'What's your take on...?' são usadas para iniciar discussões sobre temas atuais. É importante saber expressar opiniões de forma educada e construtiva.",
    acts: [
      {"id":"cv13_a1","type":"tf","prompt":"'What's your take on this?' is asking for someone's opinion about a topic.","answer":true,"hint":"'Take' neste contexto significa perspectiva ou opinião sobre algo."},
      {"id":"cv13_a2","type":"mc","prompt":"Which phrase is best for introducing a news topic in conversation?","options":["Did you eat breakfast today?","Have you seen the latest news about the election?","What time is it?","Can you help me with this?"],"answerIdx":1,"hint":"Procure a frase que claramente introduz um tópico de notícia."},
      {"id":"cv13_a3","type":"fill","prompt":"The story went ___ overnight — millions of people shared it on social media.","answer":"viral","keywords":["viral","trending","worldwide"],"hint":"A palavra descreve algo que se espalha rapidamente pela internet."},
      {"id":"cv13_a4","type":"text","prompt":"Talk about a news story that caught your attention recently. Summarise what happened and share your opinion about it.","keywords":["news","story","happened","opinion","think","issue","problem","important"],"hint":"Resuma uma notícia recente e compartilhe sua opinião sobre ela."}
    ]
  },
  cv14: {
    context: "Dar e receber elogios é uma parte importante das interações sociais em inglês. Expressões como 'You look amazing!' ou 'That was a brilliant presentation!' são muito comuns. Saber aceitar um elogio graciosamente, dizendo 'Thank you, that's so kind of you', é tão importante quanto dá-los.",
    acts: [
      {"id":"cv14_a1","type":"tf","prompt":"When someone compliments you, it is polite to simply say 'thank you' rather than denying the compliment.","answer":true,"hint":"Em inglês, aceitar elogios com gratidão é considerado educado."},
      {"id":"cv14_a2","type":"mc","prompt":"Which response is the most gracious way to accept a compliment?","options":["No, I don't think so","Oh, it was nothing really","Thank you, that's really kind of you","Stop it, I'm terrible"],"answerIdx":2,"hint":"A resposta mais educada agradece genuinamente sem rejeitar o elogio."},
      {"id":"cv14_a3","type":"fill","prompt":"'I really love your jacket — where did you get it?' is an example of giving a ___ about someone's appearance.","answer":"compliment","keywords":["compliment","comment","compliments"],"hint":"A palavra para uma observação positiva que fazemos a alguém."},
      {"id":"cv14_a4","type":"text","prompt":"Write a short dialogue where you give a compliment to a colleague about their work and they respond. Include at least two exchanges.","keywords":["compliment","great","amazing","thank","kind","appreciate","work","well"],"hint":"Escreva um diálogo curto dando e recebendo um elogio sobre trabalho."}
    ]
  },
  cv15: {
    context: "Expressar emoções em inglês vai além de simplesmente dizer 'happy' ou 'sad'. Há uma rica variedade de vocabulário emocional, como 'ecstatic' (extasiado), 'devastated' (arrasado) e 'overwhelmed' (sobrecarregado). Usar palavras de emoção com precisão torna a comunicação mais autêntica.",
    acts: [
      {"id":"cv15_a1","type":"mc","prompt":"Which word means extremely happy?","options":["Devastated","Anxious","Ecstatic","Overwhelmed"],"answerIdx":2,"hint":"A palavra mais intensa para felicidade extrema."},
      {"id":"cv15_a2","type":"mc","prompt":"If someone says 'I'm feeling a bit down today', they mean they are:","options":["Very energetic","Slightly sad or low","Extremely angry","Very excited"],"answerIdx":1,"hint":"'Feeling down' é uma expressão para um estado de levemente triste ou deprimido."},
      {"id":"cv15_a3","type":"fill","prompt":"After waiting so long for the results, she was completely ___ when she found out she got the job.","answer":"overjoyed","keywords":["overjoyed","ecstatic","thrilled","delighted","elated"],"hint":"A palavra expressa alegria extrema e intensa."},
      {"id":"cv15_a4","type":"text","prompt":"Describe a time when you felt a strong emotion — happy, nervous, surprised, or sad. Use vivid emotional vocabulary to explain what happened and how you felt.","keywords":["felt","emotion","happy","nervous","excited","scared","surprised","when"],"hint":"Descreva um momento em que você sentiu uma emoção forte e use vocabulário variado."}
    ]
  },
  cv16: {
    context: "Saber se despedir corretamente em inglês é tão importante quanto saber cumprimentar. As despedidas variam do formal 'It was a pleasure meeting you' ao informal 'See you around!' ou 'Catch you later!'. A escolha da expressão depende do contexto e do grau de intimidade com a pessoa.",
    acts: [
      {"id":"cv16_a1","type":"tf","prompt":"'Catch you later' is a formal way to say goodbye.","answer":false,"hint":"Esta é uma expressão informal e casual de despedida."},
      {"id":"cv16_a2","type":"mc","prompt":"Which goodbye is most appropriate in a formal business meeting?","options":["See ya!","Bye bye!","It was a pleasure meeting you","Later!"],"answerIdx":2,"hint":"Escolha a despedida mais profissional e educada."},
      {"id":"cv16_a3","type":"fill","prompt":"It was lovely chatting with you — I hope we can ___ up again soon!","answer":"catch","keywords":["catch","meet","get","hook"],"hint":"A expressão 'catch up' significa se encontrar novamente para conversar."},
      {"id":"cv16_a4","type":"text","prompt":"Write two short goodbye exchanges — one formal (ending a business call) and one informal (saying bye to a friend). Show the difference in language used.","keywords":["goodbye","formal","informal","pleasure","later","see","take care","soon"],"hint":"Escreva duas despedidas: uma formal e uma informal, mostrando a diferença."}
    ]
  },
  cv17: {
    context: "Fazer planos com amigos em inglês envolve sugerir atividades, combinar horários e confirmar detalhes. Expressões como 'Are you free this weekend?' e 'How about we...?' são muito comuns. Saber negociar planos educadamente é uma habilidade conversacional essencial.",
    acts: [
      {"id":"cv17_a1","type":"mc","prompt":"Which phrase is used to suggest an activity?","options":["I can't make it","How about going to the cinema?","I'm busy all week","What happened last night?"],"answerIdx":1,"hint":"'How about...?' é usado para fazer sugestões de atividades."},
      {"id":"cv17_a2","type":"mc","prompt":"What does 'Are you free on Saturday?' mean?","options":["Do you have to work on Saturday?","Do you have money on Saturday?","Is Saturday a holiday?","Do you have no plans on Saturday?"],"answerIdx":3,"hint":"'Free' neste contexto significa estar disponível, sem compromissos."},
      {"id":"cv17_a3","type":"fill","prompt":"Let's ___ a time to meet — how does Saturday afternoon work for you?","answer":"set","keywords":["set","fix","arrange","pick","choose"],"hint":"A palavra significa definir ou marcar um horário."},
      {"id":"cv17_a4","type":"text","prompt":"Write a message to a friend suggesting plans for the weekend. Propose an activity, a time, and ask if they are available.","keywords":["weekend","free","plan","meet","time","Saturday","Sunday","suggest"],"hint":"Escreva uma mensagem sugerindo planos para o fim de semana com detalhes."}
    ]
  },
  cv18: {
    context: "Convidar alguém e aceitar ou recusar um convite com elegância são habilidades importantes em inglês. Para convidar, usamos 'Would you like to...?' ou 'Why don't you join us?'. Para aceitar: 'I'd love to!' e para recusar educadamente: 'I'd love to, but I'm afraid I can't.'",
    acts: [
      {"id":"cv18_a1","type":"tf","prompt":"'I'd love to, but I'm afraid I can't' is a polite way to decline an invitation.","answer":true,"hint":"Esta frase recusa um convite de forma educada, expressando pesar."},
      {"id":"cv18_a2","type":"mc","prompt":"Which phrase is the best way to invite someone to a party?","options":["You should come to my party","I'm having a party — would you like to come?","My party is on Friday","There will be a party"],"answerIdx":1,"hint":"A melhor forma de convidar inclui uma pergunta educada."},
      {"id":"cv18_a3","type":"fill","prompt":"'I appreciate the invitation, but I already have ___ plans for that evening.'","answer":"other","keywords":["other","prior","previous","existing"],"hint":"A palavra indica que você já tem compromissos anteriores."},
      {"id":"cv18_a4","type":"text","prompt":"Write a short dialogue where one person invites another to a dinner party. The second person accepts enthusiastically. Include details about when and where.","keywords":["invite","dinner","party","love","come","when","where","Saturday"],"hint":"Escreva um diálogo de convite e aceitação, com detalhes de data e local."}
    ]
  },
  cv19: {
    context: "Pedir desculpas e dar justificativas é uma parte essencial da comunicação em inglês. Expressões variam do simples 'Sorry!' ao mais formal 'I sincerely apologise for...' Saber fazer uma desculpa convincente sem parecer artificial é uma habilidade valiosa para relações pessoais e profissionais.",
    acts: [
      {"id":"cv19_a1","type":"mc","prompt":"Which apology sounds most sincere and formal?","options":["Whatever, sorry","I sincerely apologise for the inconvenience","Oops, my bad!","Sorry not sorry"],"answerIdx":1,"hint":"A desculpa mais formal e sincera usa linguagem profissional."},
      {"id":"cv19_a2","type":"mc","prompt":"What does 'I'm afraid I can't make it' mean?","options":["I am scared of coming","I won't be able to attend","I don't know the way","I'm not ready yet"],"answerIdx":1,"hint":"'Make it' significa conseguir comparecer a um evento ou encontro."},
      {"id":"cv19_a3","type":"fill","prompt":"I'm so sorry I'm late — I got ___ in traffic on the way here.","answer":"stuck","keywords":["stuck","caught","held up","delayed"],"hint":"A palavra descreve estar preso no trânsito sem conseguir se mover."},
      {"id":"cv19_a4","type":"text","prompt":"Write a message apologising to a friend for missing their birthday party. Explain why you couldn't attend and suggest a way to make it up to them.","keywords":["sorry","apologise","missed","birthday","reason","make it up","couldn't","hope"],"hint":"Escreva uma mensagem pedindo desculpas por perder uma festa, com explicação e proposta de compensação."}
    ]
  },
  cv20: {
    context: "Agradecer as pessoas é fundamental em qualquer cultura, mas em inglês há muitas formas diferentes de expressar gratidão. Do simples 'Thanks!' ao elaborado 'I can't thank you enough for everything you've done', as expressões variam conforme o grau de gratidão que queremos transmitir.",
    acts: [
      {"id":"cv20_a1","type":"tf","prompt":"'I can't thank you enough' means you are unable to find any words to say thank you.","answer":false,"hint":"Esta expressão significa que sua gratidão é tão grande que palavras não bastam para expressar."},
      {"id":"cv20_a2","type":"mc","prompt":"Which phrase expresses the deepest gratitude?","options":["Cheers","Thanks a lot","I'm incredibly grateful for everything you've done","No worries"],"answerIdx":2,"hint":"Procure a expressão mais elaborada e intensa de gratidão."},
      {"id":"cv20_a3","type":"fill","prompt":"Thank you so much for your help — I really ___ it!","answer":"appreciate","keywords":["appreciate","value","treasure"],"hint":"A palavra significa reconhecer e valorizar a ajuda recebida."},
      {"id":"cv20_a4","type":"text","prompt":"Write a thank-you message to a friend who helped you move to a new house. Express your gratitude specifically and mention what their help meant to you.","keywords":["thank","grateful","appreciate","help","move","meant","couldn't","without"],"hint":"Escreva uma mensagem de agradecimento específica por uma ajuda importante recebida."}
    ]
  },
  cv21: {
    context: "Pedir ajuda de forma educada é uma habilidade essencial em inglês. Usamos expressões como 'Could you possibly help me with...?' ou 'Would you mind...?' para fazer pedidos de forma mais suave e cortês. Em inglês, é considerado educado suavizar pedidos com palavras como 'possibly', 'perhaps' e 'if you don't mind'.",
    acts: [
      {"id":"cv21_a1","type":"tf","prompt":"'Would you mind helping me?' is a polite way to ask for assistance.","answer":true,"hint":"'Would you mind...?' é uma forma muito educada de fazer um pedido."},
      {"id":"cv21_a2","type":"mc","prompt":"Which is the most polite way to ask a stranger for directions?","options":["Tell me where the station is","Where's the station?","Excuse me, could you possibly tell me how to get to the station?","Hey, station?"],"answerIdx":2,"hint":"A forma mais educada inclui 'excuse me' e estrutura interrogativa suave."},
      {"id":"cv21_a3","type":"fill","prompt":"I'm a bit lost — could you ___ me a hand finding the right office?","answer":"give","keywords":["give","lend","offer"],"hint":"A expressão 'give someone a hand' significa ajudar alguém."},
      {"id":"cv21_a4","type":"text","prompt":"Write a message asking a colleague to cover your shift at work. Be polite, explain your reason briefly, and thank them in advance.","keywords":["could","help","cover","shift","appreciate","reason","please","thank"],"hint":"Escreva uma mensagem educada pedindo a um colega que cubra seu turno de trabalho."}
    ]
  },
  cv22: {
    context: "Oferecer ajuda de forma natural e educada é uma habilidade importante em inglês. Expressões como 'Can I give you a hand?' e 'Would you like some help?' são muito usadas no dia a dia. Oferecer ajuda espontaneamente demonstra empatia e cria uma atmosfera positiva nas interações sociais.",
    acts: [
      {"id":"cv22_a1","type":"mc","prompt":"Which phrase is the most natural way to offer help?","options":["You need help","Do you need assistance immediately?","Can I give you a hand with that?","Help is required"],"answerIdx":2,"hint":"Oferecer ajuda de forma natural soa casual e amigável."},
      {"id":"cv22_a2","type":"mc","prompt":"If someone says 'I'm fine, thanks', after you offer help, they mean:","options":["They are feeling healthy","They don't need your help","They want more help","They are confused"],"answerIdx":1,"hint":"'I'm fine, thanks' educadamente recusa a oferta de ajuda."},
      {"id":"cv22_a3","type":"fill","prompt":"'Let me know if you need anything — I'm happy to ___.'","answer":"help","keywords":["help","assist","support","lend a hand"],"hint":"A palavra simples que significa ajudar ou dar suporte."},
      {"id":"cv22_a4","type":"text","prompt":"Describe a situation where you offered help to someone — a friend, a colleague, or a stranger. Explain what you did and how they responded.","keywords":["help","offer","assist","support","situation","respond","grateful","needed"],"hint":"Descreva uma situação em que você ofereceu ajuda e como a pessoa reagiu."}
    ]
  },
  cv23: {
    context: "Dar conselhos em inglês requer o uso de estruturas específicas para não soar autoritário. Expressões como 'If I were you, I would...' e 'You might want to consider...' ou 'Have you thought about...?' são formas educadas de compartilhar sugestões. Dar conselhos com empatia é fundamental para conversas produtivas.",
    acts: [
      {"id":"cv23_a1","type":"tf","prompt":"'If I were you, I'd speak to your manager about it' is giving advice using a conditional structure.","answer":true,"hint":"'If I were you, I would...' é uma estrutura condicional clássica para dar conselhos."},
      {"id":"cv23_a2","type":"mc","prompt":"Which phrase gives advice in the gentlest way?","options":["You must do this immediately","Do that right now","You might want to consider talking to someone","Stop what you're doing"],"answerIdx":2,"hint":"O conselho mais suave usa 'might want to' para não soar como ordem."},
      {"id":"cv23_a3","type":"fill","prompt":"Have you ___ about trying a different approach? It might make things easier.","answer":"thought","keywords":["thought","considered","tried","think"],"hint":"A palavra completa a pergunta que introduz uma sugestão gentil."},
      {"id":"cv23_a4","type":"text","prompt":"A friend tells you they are very stressed about an important exam. Give them three pieces of advice using different expressions for giving advice.","keywords":["advice","suggest","should","could","might","try","consider","recommend"],"hint":"Dê três conselhos diferentes a um amigo estressado com um exame importante."}
    ]
  },
  cv24: {
    context: "Pedir e dar opiniões é essencial para conversas ricas em inglês. Para pedir opiniões, usamos 'What do you think about...?' e 'What's your opinion on...?'. Para expressar opiniões, dizemos 'In my opinion...' ou 'From my point of view...'. Essas expressões tornam as discussões mais estruturadas e respeitosas.",
    acts: [
      {"id":"cv24_a1","type":"mc","prompt":"Which phrase is best for asking someone's opinion?","options":["I think that...","You are right about...","What's your take on this issue?","It is obvious that..."],"answerIdx":2,"hint":"A melhor pergunta para solicitar uma opinião é aberta e neutra."},
      {"id":"cv24_a2","type":"mc","prompt":"Which phrase is used to express a personal opinion?","options":["Everyone knows that...","The fact is...","From my point of view, this could work","It has been proven that..."],"answerIdx":2,"hint":"Procure a expressão que claramente marca a opinião como pessoal."},
      {"id":"cv24_a3","type":"fill","prompt":"'In my ___, we should wait before making a final decision.'","answer":"opinion","keywords":["opinion","view","perspective","judgement"],"hint":"A palavra que completa a expressão para introduzir um ponto de vista pessoal."},
      {"id":"cv24_a4","type":"text","prompt":"Ask for and give opinions about working from home. Write a short dialogue where two people share their different views on the topic.","keywords":["opinion","think","view","working","home","advantage","disadvantage","prefer"],"hint":"Escreva um diálogo onde duas pessoas expressam opiniões diferentes sobre trabalho remoto."}
    ]
  },
  cv25: {
    context: "Concordar e discordar de forma educada é uma habilidade crucial em conversas em inglês. Em vez de simplesmente dizer 'You're wrong', usamos expressões como 'I see your point, but...' ou 'I respectfully disagree'. Manter uma conversa respeitosa mesmo quando há divergências é essencial para relações saudáveis.",
    acts: [
      {"id":"cv25_a1","type":"tf","prompt":"'I see your point, but I have a different view' is a polite way to disagree.","answer":true,"hint":"Reconhecer a opinião do outro antes de discordar é uma forma educada de expressar desacordo."},
      {"id":"cv25_a2","type":"mc","prompt":"Which phrase expresses partial agreement?","options":["I completely disagree","You're totally wrong","I see what you mean, but I'm not sure I fully agree","That's absolutely right"],"answerIdx":2,"hint":"Concordância parcial reconhece a validade de um ponto enquanto apresenta uma reserva."},
      {"id":"cv25_a3","type":"fill","prompt":"'That's a fair point. However, I think we should also ___ into account the cost.'","answer":"take","keywords":["take","bear","keep"],"hint":"A expressão 'take into account' significa considerar ou levar em consideração."},
      {"id":"cv25_a4","type":"text","prompt":"Write a polite disagreement with someone who says social media is only harmful. Acknowledge their view but present an opposing argument using respectful language.","keywords":["understand","point","however","disagree","social media","benefit","harmful","perspective"],"hint":"Escreva um desacordo educado sobre redes sociais, reconhecendo o outro ponto de vista."}
    ]
  },
  cv26: {
    context: "Mudar de assunto durante uma conversa é uma habilidade social importante. Em inglês, usamos expressões de transição como 'Anyway, speaking of which...' e 'On a different note...' ou 'By the way...'. Essas frases ajudam a redirecionar a conversa de forma natural e sem causar desconforto.",
    acts: [
      {"id":"cv26_a1","type":"mc","prompt":"Which phrase is commonly used to change the topic of conversation?","options":["In conclusion...","By the way, did you hear about...?","Furthermore...","To summarise..."],"answerIdx":1,"hint":"'By the way' é uma expressão casual para introduzir um novo tópico."},
      {"id":"cv26_a2","type":"mc","prompt":"What does 'On a different note' signal in a conversation?","options":["The speaker is singing","The speaker is ending the conversation","The speaker wants to discuss a new topic","The speaker is going back to an earlier point"],"answerIdx":2,"hint":"Esta expressão sinaliza a transição para um assunto diferente."},
      {"id":"cv26_a3","type":"fill","prompt":"Anyway, enough about work! On a ___ note, have you been on holiday recently?","answer":"different","keywords":["different","lighter","separate","another"],"hint":"A palavra completa a expressão para mudar para um novo assunto."},
      {"id":"cv26_a4","type":"text","prompt":"Write a short conversation where two people smoothly change the topic twice during their chat. Use appropriate transition expressions each time.","keywords":["anyway","speaking","different","note","way","change","topic","actually"],"hint":"Escreva um diálogo onde o assunto muda naturalmente duas vezes usando expressões de transição."}
    ]
  },
  cv27: {
    context: "Interromper educadamente é uma habilidade que requer prática em inglês. Expressões como 'Sorry to interrupt, but...' e 'If I could just jump in here...' permitem que você entre na conversa sem ser rude. Saber quando e como interromper demonstra respeito pelo interlocutor e pela conversa.",
    acts: [
      {"id":"cv27_a1","type":"tf","prompt":"'Sorry to interrupt, but I have something important to add' is a polite way to join a conversation.","answer":true,"hint":"Pedir desculpas antes de interromper é a forma educada de entrar em uma conversa."},
      {"id":"cv27_a2","type":"mc","prompt":"Which phrase allows you to politely add to what someone is saying?","options":["Stop talking, I have something to say","If I could just jump in here for a moment...","Be quiet and listen to me","You're wrong, let me explain"],"answerIdx":1,"hint":"A forma mais educada pede permissão antes de falar."},
      {"id":"cv27_a3","type":"fill","prompt":"'Can I just ___ in here? I think there's an important point we're missing.'","answer":"jump","keywords":["jump","cut","come","chip"],"hint":"A expressão 'jump in' significa entrar de forma rápida em uma conversa."},
      {"id":"cv27_a4","type":"text","prompt":"Write a short dialogue where someone politely interrupts a conversation to add an important piece of information. Show how the other speakers react.","keywords":["interrupt","sorry","add","point","moment","jump","include","important"],"hint":"Escreva um diálogo em que alguém interrompe educadamente para acrescentar informação."}
    ]
  },
  cv28: {
    context: "Pedir esclarecimentos e repetições é absolutamente normal e necessário quando aprendemos inglês. Expressões como 'Could you repeat that, please?' e 'Sorry, I didn't quite catch that' são muito usadas. Pedir que alguém fale mais devagar com 'Could you speak more slowly?' também é totalmente aceitável.",
    acts: [
      {"id":"cv28_a1","type":"mc","prompt":"Which phrase politely asks someone to repeat what they said?","options":["What?","I can't hear you","Could you say that again, please?","Louder please!"],"answerIdx":2,"hint":"A forma mais educada inclui 'could you' e 'please'."},
      {"id":"cv28_a2","type":"mc","prompt":"What does 'I didn't quite catch that' mean?","options":["I didn't receive the object you threw","I didn't fully understand or hear what you said","I wasn't paying attention at all","I forgot what you said"],"answerIdx":1,"hint":"'Catch' neste contexto significa ouvir e entender o que foi dito."},
      {"id":"cv28_a3","type":"fill","prompt":"'Sorry, I'm not sure I ___ what you mean — could you clarify?'","answer":"understand","keywords":["understand","follow","get","catch"],"hint":"A palavra expressa que você não compreendeu o significado do que foi dito."},
      {"id":"cv28_a4","type":"text","prompt":"Write a short dialogue where someone asks for clarification three times during a conversation about directions. Show how the other person patiently explains.","keywords":["sorry","repeat","mean","understand","clarify","again","slowly","explain"],"hint":"Escreva um diálogo com três pedidos de esclarecimento sobre direções."}
    ]
  },
  cv29: {
    context: "Palavras de hesitação e preenchimento são muito usadas por falantes nativos de inglês quando precisam de tempo para pensar. Expressões como 'Well...', 'Umm...', 'You know...', 'I mean...' e 'Kind of...' são naturais e mostram que o falante está processando o que vai dizer. Usá-las corretamente torna seu inglês mais fluente e natural.",
    acts: [
      {"id":"cv29_a1","type":"tf","prompt":"Using filler words like 'well', 'umm', and 'you know' is a sign of poor English.","answer":false,"hint":"Palavras de preenchimento são normais e naturais na fala de todos os falantes, inclusive nativos."},
      {"id":"cv29_a2","type":"mc","prompt":"Which filler word is typically used when the speaker is thinking or hesitating?","options":["However","Therefore","Umm, let me think...","In conclusion"],"answerIdx":2,"hint":"Procure a expressão que indica hesitação enquanto o falante pensa."},
      {"id":"cv29_a3","type":"fill","prompt":"'So, ___ of speaking, I wasn't exactly thrilled about the decision, but I accepted it.'","answer":"to","keywords":["to","sort of","kind of","so to speak"],"hint":"A expressão 'to speak' significa uma maneira informal de dizer algo."},
      {"id":"cv29_a4","type":"text","prompt":"Describe your typical morning routine naturally, including at least four filler words or hesitation expressions to make it sound like natural speech.","keywords":["well","umm","you know","kind of","I mean","sort of","actually","basically"],"hint":"Descreva sua rotina matinal usando pelo menos quatro palavras de hesitação naturalmente."}
    ]
  },
  cv30: {
    context: "Contar histórias e anedotas torna as conversas mais envolventes e memoráveis. Em inglês, começamos histórias com 'You'll never believe what happened to me...' ou 'So, funny story...' Estruturar uma boa narrativa com início, meio e fim, incluindo expressões como 'Eventually...' e 'In the end...' torna o relato mais interessante.",
    acts: [
      {"id":"cv30_a1","type":"mc","prompt":"Which phrase is typically used to start a funny or surprising story?","options":["In conclusion, I would like to say...","You'll never believe what happened to me yesterday!","The results indicate that...","According to recent studies..."],"answerIdx":1,"hint":"Esta expressão cria expectativa e convida o ouvinte a querer ouvir a história."},
      {"id":"cv30_a2","type":"mc","prompt":"Which word best signals the end of a story?","options":["Meanwhile","Eventually","Firstly","Before long"],"answerIdx":1,"hint":"'Eventually' sinaliza o resultado final de uma série de eventos."},
      {"id":"cv30_a3","type":"fill","prompt":"'So there I was, ___ around the corner, when I suddenly bumped into my old teacher!'","answer":"walking","keywords":["walking","turning","coming","going"],"hint":"A palavra descreve a ação que estava acontecendo no momento da história."},
      {"id":"cv30_a4","type":"text","prompt":"Tell a short anecdote about something funny, unexpected, or interesting that happened to you. Use story-telling expressions and make it engaging for the listener.","keywords":["happened","suddenly","eventually","anyway","turned out","finally","realised","story"],"hint":"Conte uma anedota curta e envolvente usando expressões narrativas em inglês."}
    ]
  },
  cv31: {
    context: "Falar sobre memórias do passado é uma forma de criar conexões emocionais em conversas. Em inglês, usamos o passado simples e expressões como 'I remember when...' e 'Back in the day...' para evocar lembranças. Compartilhar memórias nostálgicas cria momentos de empatia e proximidade entre as pessoas.",
    acts: [
      {"id":"cv31_a1","type":"tf","prompt":"'Back in the day' is an expression used to talk about events in the past.","answer":true,"hint":"'Back in the day' significa antigamente ou em uma época passada."},
      {"id":"cv31_a2","type":"mc","prompt":"Which sentence correctly describes a childhood memory?","options":["I will visit my grandparents next month","I remember going to the beach every summer as a child","I am going to school tomorrow","I work at a school now"],"answerIdx":1,"hint":"Memórias do passado usam verbos no passado com expressões de tempo como 'as a child'."},
      {"id":"cv31_a3","type":"fill","prompt":"Those were the days! I ___ how carefree we were back then.","answer":"remember","keywords":["remember","recall","miss","think about"],"hint":"A palavra introduz uma memória ou lembrança do passado."},
      {"id":"cv31_a4","type":"text","prompt":"Share a fond memory from your childhood or teenage years. Use past tense verbs and include expressions like 'I remember' and 'Back then...' to structure your story.","keywords":["remember","used to","back then","when","childhood","years ago","miss","those days"],"hint":"Compartilhe uma memória feliz do passado usando verbos no passado e expressões de nostalgia."}
    ]
  },
  cv32: {
    context: "Discutir planos futuros e sonhos é um tema comum e motivador em conversas em inglês. Usamos expressões como 'I'm planning to...' e 'One day, I'd love to...' para falar sobre o futuro. Compartilhar sonhos e aspirações revela muito sobre os valores e desejos de uma pessoa.",
    acts: [
      {"id":"cv32_a1","type":"mc","prompt":"Which sentence expresses a future dream or aspiration?","options":["I went to Paris last year","I work in finance","One day, I'd love to travel around the world","I studied medicine at university"],"answerIdx":2,"hint":"Um sonho futuro usa expressões como 'one day' e 'would love to'."},
      {"id":"cv32_a2","type":"mc","prompt":"What does 'I'm thinking about going back to school' suggest?","options":["The person has definitely enrolled in school","The person is considering further education","The person hated school","The person never finished school"],"answerIdx":1,"hint":"'Thinking about' sugere consideração, não uma decisão definitiva."},
      {"id":"cv32_a3","type":"fill","prompt":"I've always ___ of opening my own restaurant someday — it's been my dream for years.","answer":"dreamed","keywords":["dreamed","dreamt","thought","wanted"],"hint":"A palavra completa a expressão de ter um sonho de longo prazo."},
      {"id":"cv32_a4","type":"text","prompt":"Share two future plans (something definite) and two dreams (something you hope for). Use different future expressions to show the difference between plans and aspirations.","keywords":["plan","dream","hope","going to","would love","future","one day","someday"],"hint":"Compartilhe planos concretos e sonhos futuros usando expressões diferentes para cada tipo."}
    ]
  },
  cv33: {
    context: "Expressar surpresa e incredulidade é uma parte vibrante das conversas em inglês. Expressões como 'No way!' e 'You're kidding me!' são muito comuns em reações informais. Em contextos mais formais, usamos 'That's remarkable!' ou 'I must say, that's quite surprising'. Essas reações tornam as conversas mais dinâmicas.",
    acts: [
      {"id":"cv33_a1","type":"tf","prompt":"'No way!' and 'You're kidding me!' are formal expressions of surprise.","answer":false,"hint":"Essas são expressões informais e coloquiais de surpresa."},
      {"id":"cv33_a2","type":"mc","prompt":"Which expression shows the most formal surprise?","options":["No way!","Shut up!","That's quite remarkable!","Seriously?!"],"answerIdx":2,"hint":"A expressão mais formal usa vocabulário mais neutro e profissional."},
      {"id":"cv33_a3","type":"fill","prompt":"I can't believe it! That is absolutely ___ — I never expected that to happen.","answer":"unbelievable","keywords":["unbelievable","incredible","shocking","astounding","amazing"],"hint":"A palavra expressa que algo é difícil de acreditar ou muito surpreendente."},
      {"id":"cv33_a4","type":"text","prompt":"React to this surprising news: your best friend just won a million pounds in the lottery! Write your reaction using at least three different expressions of surprise.","keywords":["amazing","unbelievable","incredible","seriously","no way","believe","shocked","congratulations"],"hint":"Escreva uma reação a uma notícia surpreendente usando várias expressões de surpresa."}
    ]
  },
  cv34: {
    context: "Expressar simpatia e preocupação é fundamental para oferecer suporte emocional em inglês. Expressões como 'I'm so sorry to hear that' e 'That must be really tough' demonstram empatia. Saber quando ouvir e quando oferecer palavras de conforto é uma habilidade social muito valorizada em culturas anglófonas.",
    acts: [
      {"id":"cv34_a1","type":"mc","prompt":"Which phrase best expresses sympathy when someone shares bad news?","options":["That's your problem","I'm so sorry to hear that","That's funny","Don't worry, it's fine"],"answerIdx":1,"hint":"A expressão mais empática reconhece a dor da pessoa com genuíno pesar."},
      {"id":"cv34_a2","type":"mc","prompt":"What does 'That must be really tough' mean?","options":["The physical task is difficult","I think your situation is very difficult emotionally","You are strong and athletic","The material is hard"],"answerIdx":1,"hint":"'Tough' neste contexto refere-se a algo emocionalmente difícil ou desafiador."},
      {"id":"cv34_a3","type":"fill","prompt":"'I can't imagine how you must be feeling — please know that I'm here for you if you need ___ to talk to.'","answer":"someone","keywords":["someone","anybody","a shoulder","support"],"hint":"A palavra indica que você está disponível para ouvir a pessoa."},
      {"id":"cv34_a4","type":"text","prompt":"Write a supportive message to a friend who has just lost their job. Express sympathy, offer encouragement, and suggest practical support.","keywords":["sorry","tough","understand","support","help","encourage","here","better"],"hint":"Escreva uma mensagem de apoio a um amigo que perdeu o emprego, com empatia e encorajamento."}
    ]
  },
  cv35: {
    context: "Celebrações como aniversários e feriados são momentos importantes para praticar inglês. Expressões como 'Happy Birthday!' e 'Congratulations!' são universais, mas também há frases específicas como 'Many happy returns!' e 'Here's to you!' que são usadas em brinde. Saber participar dessas celebrações adequadamente torna as interações mais significativas.",
    acts: [
      {"id":"cv35_a1","type":"tf","prompt":"'Many happy returns' is a common birthday greeting in English.","answer":true,"hint":"Esta é uma expressão tradicional que deseja que a pessoa tenha muitos aniversários felizes."},
      {"id":"cv35_a2","type":"mc","prompt":"What do you say when raising a glass in celebration?","options":["Good luck!","Here's to you! Cheers!","Happy New Year!","Congratulations on your loss"],"answerIdx":1,"hint":"Durante um brinde, usamos expressões específicas para celebrar alguém."},
      {"id":"cv35_a3","type":"fill","prompt":"Happy ___ of age! I can't believe you're already thirty!","answer":"coming","keywords":["coming of age","birthday","anniversary"],"hint":"A expressão 'coming of age' celebra uma data especial de passagem de fase na vida."},
      {"id":"cv35_a4","type":"text","prompt":"Write a birthday message for a close friend turning 30. Include wishes, a memory you share, and a celebration suggestion.","keywords":["birthday","happy","wish","celebrate","memories","thirty","together","special"],"hint":"Escreva uma mensagem de aniversário para um amigo próximo com desejos, memórias e sugestão de celebração."}
    ]
  },
  cv36: {
    context: "Falar sobre hábitos de compras é um tema muito cotidiano em inglês. Expressões como 'I'm a bargain hunter' (caço promoções) e 'I prefer to shop online' são muito comuns. Discutir preferências entre compras físicas e online, marcas favoritas e hábitos de consumo são tópicos populares em conversas casuais.",
    acts: [
      {"id":"cv36_a1","type":"mc","prompt":"What does 'I'm a bargain hunter' mean?","options":["I work as a professional hunter","I love finding things at low prices","I hunt for rare items","I never go shopping"],"answerIdx":1,"hint":"Um 'bargain hunter' é alguém que procura ativamente por boas ofertas e preços baixos."},
      {"id":"cv36_a2","type":"mc","prompt":"Which phrase describes someone who spends a lot on fashion?","options":["They never buy clothes","They are a fashionista who splurges on designer brands","They wear the same clothes every day","They only shop in charity shops"],"answerIdx":1,"hint":"Uma 'fashionista' gasta muito em roupas e marcas de grife."},
      {"id":"cv36_a3","type":"fill","prompt":"I love shopping in the ___ season — you can find amazing deals on everything.","answer":"sale","keywords":["sale","clearance","discount","sales"],"hint":"A palavra descreve o período em que as lojas oferecem grandes descontos."},
      {"id":"cv36_a4","type":"text","prompt":"Describe your shopping habits. Do you prefer online or in-store shopping? Do you look for bargains or invest in quality items? Explain your approach.","keywords":["shop","online","store","bargain","quality","prefer","spend","buy"],"hint":"Descreva seus hábitos de compra, suas preferências e como você decide o que comprar."}
    ]
  },
  cv37: {
    context: "A tecnologia e os gadgets são temas inevitáveis nas conversas modernas. Em inglês, expressões como 'I'm a tech enthusiast' e 'I can't live without my smartphone' são muito comuns. Discutir os últimos dispositivos, aplicativos favoritos e o impacto da tecnologia na vida cotidiana é um tema que todos podem relacionar.",
    acts: [
      {"id":"cv37_a1","type":"tf","prompt":"A 'gadget' is a small, often innovative technological device.","answer":true,"hint":"Gadgets são geralmente dispositivos tecnológicos pequenos e práticos."},
      {"id":"cv37_a2","type":"mc","prompt":"Which phrase describes someone who loves technology?","options":["A technophobe","A tech enthusiast","A bookworm","A couch potato"],"answerIdx":1,"hint":"Um 'enthusiast' é alguém apaixonado e entusiasmado por um assunto."},
      {"id":"cv37_a3","type":"fill","prompt":"I just upgraded my ___ — the new model has an incredible camera and battery life.","answer":"smartphone","keywords":["smartphone","phone","device","tablet"],"hint":"O dispositivo eletrônico mais usado pelas pessoas atualmente."},
      {"id":"cv37_a4","type":"text","prompt":"Talk about a piece of technology you use every day. Explain what it does, why you find it useful, and whether you think technology makes life better or worse.","keywords":["technology","device","use","useful","app","digital","life","better"],"hint":"Fale sobre uma tecnologia que você usa diariamente e reflita sobre seu impacto na vida."}
    ]
  },
  cv38: {
    context: "As redes sociais transformaram a forma como as pessoas se comunicam e compartilham experiências. Em inglês, expressões como 'I just posted a story' e 'That video went viral' são muito comuns. Discutir hábitos de uso das redes sociais, influenciadores favoritos e o impacto das plataformas digitais são temas atuais e relevantes.",
    acts: [
      {"id":"cv38_a1","type":"mc","prompt":"What does 'That post went viral' mean?","options":["The post was deleted","The post was shared by millions of people very quickly","The post was about a virus","The post caused a computer virus"],"answerIdx":1,"hint":"Algo que 'goes viral' se espalha rapidamente por muitas pessoas nas redes sociais."},
      {"id":"cv38_a2","type":"mc","prompt":"What is an 'influencer' on social media?","options":["A computer programmer","A person who has political power","Someone with a large online following who influences others' choices","A social media platform"],"answerIdx":2,"hint":"Influenciadores têm muitos seguidores e impactam as decisões de seu público."},
      {"id":"cv38_a3","type":"fill","prompt":"She's always ___ her travel photos on Instagram — her feed looks absolutely stunning.","answer":"posting","keywords":["posting","sharing","uploading","publishing"],"hint":"A palavra descreve a ação de publicar conteúdo nas redes sociais."},
      {"id":"cv38_a4","type":"text","prompt":"Discuss your relationship with social media. Do you use it a lot or a little? What platforms do you prefer and why? What do you think are the advantages and disadvantages?","keywords":["social media","platform","post","follow","content","advantage","disadvantage","use"],"hint":"Fale sobre seu uso das redes sociais, plataformas preferidas e os prós e contras."}
    ]
  },
  cv39: {
    context: "Compartilhar experiências de viagem é um tema adorado em conversas em inglês. Expressões como 'It was an eye-opening experience' e 'I was blown away by...' são usadas para descrever viagens impactantes. Falar sobre destinos visitados, comidas experimentadas e culturas conhecidas enriquece qualquer conversa.",
    acts: [
      {"id":"cv39_a1","type":"tf","prompt":"'It was an eye-opening experience' means the trip was unpleasant.","answer":false,"hint":"'Eye-opening' significa algo que amplia sua perspectiva de mundo de forma positiva."},
      {"id":"cv39_a2","type":"mc","prompt":"Which phrase expresses being very impressed by something you saw while travelling?","options":["I wasn't impressed by the scenery","I was blown away by the landscapes","The views were okay I suppose","It was nothing special"],"answerIdx":1,"hint":"'Blown away' significa ficar completamente impressionado e maravilhado com algo."},
      {"id":"cv39_a3","type":"fill","prompt":"Travelling abroad really ___ your horizons and gives you a new perspective on life.","answer":"broadens","keywords":["broadens","expands","widens","opens"],"hint":"A palavra completa a expressão 'broaden your horizons', que significa ampliar sua visão de mundo."},
      {"id":"cv39_a4","type":"text","prompt":"Describe a memorable trip you took. Include where you went, what surprised you, and what you would recommend about that place to a friend.","keywords":["travel","visited","memorable","culture","food","recommend","experience","beautiful"],"hint":"Descreva uma viagem memorável com onde foi, o que te surpreendeu e o que recomendaria."}
    ]
  },
  cv40: {
    context: "Questões ambientais são cada vez mais presentes nas conversas cotidianas. Em inglês, termos como 'carbon footprint' (pegada de carbono), 'sustainability' (sustentabilidade) e 'climate change' (mudanças climáticas) são muito usados. Discutir ações individuais e coletivas para proteger o meio ambiente é um tema urgente e relevante.",
    acts: [
      {"id":"cv40_a1","type":"mc","prompt":"What is a 'carbon footprint'?","options":["A type of shoe","The amount of greenhouse gases produced by a person or activity","A scientific measurement of climate","A fossil fuel"],"answerIdx":1,"hint":"A pegada de carbono mede o impacto ambiental de nossas ações em termos de emissão de gases."},
      {"id":"cv40_a2","type":"mc","prompt":"Which action helps reduce environmental impact?","options":["Leaving lights on all night","Using single-use plastic bags","Cycling instead of driving","Eating meat every day"],"answerIdx":2,"hint":"Usar bicicleta em vez de carro reduz as emissões de carbono."},
      {"id":"cv40_a3","type":"fill","prompt":"We all need to do our part to ___ our carbon footprint for future generations.","answer":"reduce","keywords":["reduce","lower","decrease","cut","minimise"],"hint":"A palavra significa diminuir ou tornar menor."},
      {"id":"cv40_a4","type":"text","prompt":"Share your opinion on climate change and what individuals can do to help. Mention at least two specific actions and explain why they matter.","keywords":["environment","climate","change","reduce","sustainable","recycle","energy","future"],"hint":"Expresse sua opinião sobre mudanças climáticas e sugira ações concretas que as pessoas podem tomar."}
    ]
  },
  cv41: {
    context: "Discutir livros é uma excelente forma de praticar inglês e expandir o vocabulário. Expressões como 'I'm a bookworm' (rato de biblioteca) e 'I couldn't put it down' (não consegui parar de ler) são muito comuns. Recomendar livros e discutir personagens favoritos ou enredos são tópicos envolventes para qualquer conversa.",
    acts: [
      {"id":"cv41_a1","type":"tf","prompt":"'I couldn't put it down' means the book was so good that the person kept reading without stopping.","answer":true,"hint":"Esta expressão idiomática descreve um livro tão cativante que você não consegue parar de ler."},
      {"id":"cv41_a2","type":"mc","prompt":"What does 'I'm a bookworm' mean?","options":["I am afraid of worms","I collect antique books","I read a lot and love books","I work in a bookshop"],"answerIdx":2,"hint":"Um 'bookworm' é alguém que adora ler e lê com muita frequência."},
      {"id":"cv41_a3","type":"fill","prompt":"I love reading before bed — it really helps me ___ down after a long day.","answer":"wind","keywords":["wind", "calm","settle","relax"],"hint":"A expressão 'wind down' significa relaxar e desacelerar."},
      {"id":"cv41_a4","type":"text","prompt":"Recommend a book to a friend. Give the title, briefly describe the plot, explain why you enjoyed it, and say what type of reader you think would love it.","keywords":["book","read","story","character","plot","recommend","enjoy","genre"],"hint":"Recomende um livro com título, resumo do enredo, por que gostou e para quem indicaria."}
    ]
  },
  cv42: {
    context: "Arte e cultura são temas ricos para conversas em inglês. Expressões como 'I'm a huge fan of contemporary art' e 'That performance was breathtaking' são muito usadas. Discutir exposições, museus, teatro, dança e outras manifestações culturais demonstra interesse e curiosidade intelectual.",
    acts: [
      {"id":"cv42_a1","type":"mc","prompt":"What does 'breathtaking' mean when describing a performance?","options":["Very boring","Extremely impressive and stunning","Too long","Very loud"],"answerIdx":1,"hint":"'Breathtaking' descreve algo tão impressionante que literalmente te deixa sem fôlego."},
      {"id":"cv42_a2","type":"mc","prompt":"Which sentence best expresses appreciation for art?","options":["I don't understand art","The painting left me completely moved","Art is a waste of time","I don't visit museums"],"answerIdx":1,"hint":"Procure a expressão que mostra uma reação emocional positiva à arte."},
      {"id":"cv42_a3","type":"fill","prompt":"The exhibition was ___ — every piece told a unique story and challenged my thinking.","answer":"thought-provoking","keywords":["thought-provoking","inspiring","fascinating","remarkable","moving"],"hint":"A palavra descreve algo que te faz pensar de forma profunda e reflexiva."},
      {"id":"cv42_a4","type":"text","prompt":"Describe a cultural experience you enjoyed — a museum, concert, play, or exhibition. Explain what you saw, how it made you feel, and why you would recommend it.","keywords":["art","culture","exhibit","performance","museum","moving","beautiful","experience"],"hint":"Descreva uma experiência cultural marcante e por que você a recomendaria."}
    ]
  },
  cv43: {
    context: "O humor em inglês pode ser desafiador porque envolve aspectos culturais, trocadilhos e ironia. Expressões como 'That's hilarious!' e 'I nearly fell off my chair laughing!' são muito usadas. O humor britânico é especialmente conhecido pelo sarcasmo e pelo humor seco, enquanto o humor americano tende a ser mais direto.",
    acts: [
      {"id":"cv43_a1","type":"tf","prompt":"British humour is known for being dry and sarcastic.","answer":true,"hint":"O humor britânico é famoso por ser seco, irônico e muitas vezes sutil."},
      {"id":"cv43_a2","type":"mc","prompt":"What does 'I nearly fell off my chair laughing' mean?","options":["I was sitting dangerously","I found something extremely funny","I was very bored","I hurt myself"],"answerIdx":1,"hint":"Esta expressão hiperbólica descreve uma risada intensa provocada por algo muito engraçado."},
      {"id":"cv43_a3","type":"fill","prompt":"That joke was absolutely ___! I can't stop laughing.","answer":"hilarious","keywords":["hilarious","funny","priceless","brilliant","hysterical"],"hint":"A palavra descreve algo extremamente engraçado."},
      {"id":"cv43_a4","type":"text","prompt":"Tell a joke or describe a funny situation in English. Explain what made it funny and how people reacted. Use expressions like 'It was hilarious' and 'Everyone cracked up'.","keywords":["funny","joke","laugh","hilarious","sense of humour","cracked up","punchline","smile"],"hint":"Conte uma piada ou situação engraçada e descreva as reações usando vocabulário de humor."}
    ]
  },
  cv44: {
    context: "As gírias em inglês são palavras e expressões informais usadas principalmente em conversas cotidianas entre amigos. Expressões como 'That's lit!' (isso é incrível!), 'No cap' (sem mentira) e 'Vibe' (energia/atmosfera) são exemplos de gírias modernas. Entender essas expressões ajuda a compreender melhor os falantes nativos.",
    acts: [
      {"id":"cv44_a1","type":"mc","prompt":"What does 'That's lit!' mean in modern slang?","options":["It is on fire","It is very exciting or amazing","It is illuminated","It is old-fashioned"],"answerIdx":1,"hint":"'Lit' em gíria moderna significa algo incrível, empolgante ou muito legal."},
      {"id":"cv44_a2","type":"mc","prompt":"What does 'No cap' mean in slang?","options":["Without a hat","I'm not lying/I'm serious","Without a limit","I refuse to wear a cap"],"answerIdx":1,"hint":"'No cap' é uma gíria que significa 'sem mentira' ou 'falando sério'."},
      {"id":"cv44_a3","type":"fill","prompt":"That party last night had such a great ___! Everyone was dancing and having the best time.","answer":"vibe","keywords":["vibe","atmosphere","energy","feeling","mood"],"hint":"A palavra descreve a energia ou atmosfera de um lugar ou evento."},
      {"id":"cv44_a4","type":"text","prompt":"Write a text message to a friend using at least four pieces of slang to describe your weekend. Make it sound like natural, casual communication between friends.","keywords":["lit","vibe","awesome","hang out","chill","squad","lowkey","goat"],"hint":"Escreva uma mensagem de texto casual usando pelo menos quatro gírias modernas em inglês."}
    ]
  },
  cv45: {
    context: "Continuando com as gírias em inglês, há expressões populares como 'ghosting' (desaparecer sem dar satisfação), 'FOMO' (medo de ficar de fora) e 'slay' (arrasar). Essas expressões evoluem constantemente com a cultura pop e as redes sociais, tornando o inglês informal sempre dinâmico e atual.",
    acts: [
      {"id":"cv45_a1","type":"tf","prompt":"'Ghosting' someone means you suddenly stop all communication with them without explanation.","answer":true,"hint":"'Ghosting' significa desaparecer como um fantasma, cortando todo contato sem explicação."},
      {"id":"cv45_a2","type":"mc","prompt":"What does 'FOMO' stand for?","options":["Fear Of Missing Out","Free Online Media Options","Favourite Online Movie Options","Fear Of Making Omelettes"],"answerIdx":0,"hint":"FOMO é a sigla para a ansiedade de perder algo divertido ou importante."},
      {"id":"cv45_a3","type":"fill","prompt":"She absolutely ___ at that presentation — everyone was so impressed.","answer":"slayed","keywords":["slayed","nailed","killed it","crushed it","aced"],"hint":"A palavra gíria significa se sair muito bem ou arrasar em algo."},
      {"id":"cv45_a4","type":"text","prompt":"Write a short paragraph using at least five pieces of modern slang naturally in context. Describe hanging out with friends or attending an event.","keywords":["slay","ghost","fomo","lowkey","vibe","savage","cringe","lit"],"hint":"Escreva um parágrafo descrevendo um evento ou saída com amigos usando pelo menos cinco gírias."}
    ]
  },
  cv46: {
    context: "Os phrasal verbs (verbos frasais) são combinações de verbo + preposição ou advérbio que têm significados próprios. Por exemplo, 'give up' significa desistir e 'run into' significa encontrar por acaso. São extremamente comuns no inglês falado e dominá-los é essencial para soar mais natural.",
    acts: [
      {"id":"cv46_a1","type":"mc","prompt":"What does 'I ran into my old teacher at the supermarket' mean?","options":["I physically crashed into my teacher","I unexpectedly met my teacher","I ran away from my teacher","I called my teacher"],"answerIdx":1,"hint":"'Run into' significa encontrar alguém por acaso, sem planejar."},
      {"id":"cv46_a2","type":"mc","prompt":"What does 'give up' mean?","options":["Give someone a gift","Start something new","Stop trying or quit","Give more effort"],"answerIdx":2,"hint":"'Give up' significa desistir ou parar de tentar algo."},
      {"id":"cv46_a3","type":"fill","prompt":"She decided to ___ up her old job and pursue her passion for painting.","answer":"give","keywords":["give","quit","throw","pack"],"hint":"A palavra completa o phrasal verb que significa abandonar ou desistir de algo."},
      {"id":"cv46_a4","type":"text","prompt":"Write five sentences using different phrasal verbs. Use: look forward to, find out, come up with, carry on, and fall out with. Show you understand their meanings through context.","keywords":["look forward","find out","come up with","carry on","fall out","plan","discover","argue"],"hint":"Escreva cinco frases usando cada um dos phrasal verbs dados no contexto correto."}
    ]
  },
  cv47: {
    context: "Continuando com os phrasal verbs, expressões como 'put off' (adiar), 'come across' (dar a impressão de) e 'bring up' (mencionar / criar filhos) são muito usadas nas conversas diárias. Compreender o contexto é crucial para não confundir os múltiplos significados que um phrasal verb pode ter.",
    acts: [
      {"id":"cv47_a1","type":"tf","prompt":"'She came across as very confident in the interview' means she seemed confident.","answer":true,"hint":"'Come across as' significa passar a impressão de ser ou parecer algo."},
      {"id":"cv47_a2","type":"mc","prompt":"What does 'I keep putting off my dentist appointment' mean?","options":["I keep cancelling forever","I keep delaying and rescheduling the appointment","I never had a dentist appointment","I always arrive early to appointments"],"answerIdx":1,"hint":"'Put off' significa adiar ou postergar algo que você deveria fazer."},
      {"id":"cv47_a3","type":"fill","prompt":"He ___ up the topic of money during dinner, which made everyone uncomfortable.","answer":"brought","keywords":["brought","raised","mentioned","put"],"hint":"O phrasal verb 'bring up' significa introduzir ou mencionar um assunto em conversa."},
      {"id":"cv47_a4","type":"text","prompt":"Write a paragraph about your week using at least five phrasal verbs. Include: put off, come across, bring up, get along with, and turn down.","keywords":["put off","come across","bring up","get along","turn down","work","friend","situation"],"hint":"Descreva sua semana usando cinco phrasal verbs específicos no contexto correto."}
    ]
  },
  cv48: {
    context: "Os idioms (expressões idiomáticas) em inglês são frases cujo significado não pode ser interpretado literalmente. Por exemplo, 'hit the nail on the head' (acertar em cheio) e 'bite the bullet' (aguentar firme) são expressões muito usadas. Aprender idioms ajuda a compreender e usar o inglês de forma mais nativa e fluente.",
    acts: [
      {"id":"cv48_a1","type":"mc","prompt":"What does 'hit the nail on the head' mean?","options":["Hurt yourself with a hammer","Make a perfectly accurate point or observation","Make a mistake","Hit something hard"],"answerIdx":1,"hint":"Este idiom significa identificar exatamente o problema ou dizer algo completamente correto."},
      {"id":"cv48_a2","type":"mc","prompt":"What does 'bite the bullet' mean?","options":["Be very angry","Eat something metallic","Endure a difficult situation without complaining","Act cowardly"],"answerIdx":2,"hint":"Este idiom significa suportar algo difícil com coragem, mesmo que doa."},
      {"id":"cv48_a3","type":"fill","prompt":"I didn't want to go to the dentist, but I just had to ___ the bullet and make the appointment.","answer":"bite","keywords":["bite","take","face"],"hint":"A palavra completa o idiom que significa enfrentar algo desagradável com coragem."},
      {"id":"cv48_a4","type":"text","prompt":"Use four idioms in a short paragraph about a challenging situation at work or school: hit the nail on the head, bite the bullet, under the weather, and break a leg.","keywords":["nail","head","bullet","weather","break","leg","situation","challenge"],"hint":"Use quatro idioms específicos em um parágrafo sobre uma situação desafiadora."}
    ]
  },
  cv49: {
    context: "Continuando com os idioms, expressões como 'the ball is in your court' (a decisão é sua), 'spill the beans' (revelar um segredo) e 'let the cat out of the bag' (deixar escapar informação secreta) são muito populares. Dominar esses idioms permite que você compreenda conversas nativas com muito mais facilidade.",
    acts: [
      {"id":"cv49_a1","type":"tf","prompt":"'Spill the beans' and 'let the cat out of the bag' have similar meanings — they both mean to reveal a secret.","answer":true,"hint":"Ambos os idioms referem-se a revelar acidentalmente ou intencionalmente um segredo."},
      {"id":"cv49_a2","type":"mc","prompt":"What does 'the ball is in your court' mean?","options":["It's time to play a sport","It is now your responsibility to make a decision","The game is over","Someone else must decide"],"answerIdx":1,"hint":"Este idiom, do tênis, significa que a decisão ou ação seguinte cabe a você."},
      {"id":"cv49_a3","type":"fill","prompt":"I accidentally let the cat out of the ___ about the surprise party before it even started!","answer":"bag","keywords":["bag","box"],"hint":"A palavra completa o idiom sobre revelar acidentalmente um segredo."},
      {"id":"cv49_a4","type":"text","prompt":"Write a short story using at least four idioms: spill the beans, the ball is in your court, let the cat out of the bag, and once in a blue moon. Show you understand each meaning through context.","keywords":["spill","beans","ball","court","cat","bag","blue moon","secret"],"hint":"Escreva uma história curta usando quatro idioms específicos no contexto correto."}
    ]
  },
  cv50: {
    context: "Conversas telefônicas casuais em inglês têm estruturas e expressões específicas. Começamos com 'Hey, is that [name]?' e encerramos com 'Anyway, I'll let you go'. Expressões como 'Give me a ring' (me ligue) e 'I'll call you back' (te ligo de volta) são muito usadas. Saber conduzir uma ligação casual é uma habilidade prática essencial.",
    acts: [
      {"id":"cv50_a1","type":"mc","prompt":"What does 'Give me a ring later' mean?","options":["Give me a piece of jewellery","Call me later","Send me a message","Meet me later"],"answerIdx":1,"hint":"'Give someone a ring' é uma expressão informal que significa ligar para alguém."},
      {"id":"cv50_a2","type":"mc","prompt":"Which phrase is used to end a casual phone call politely?","options":["I have to hang up now, talk soon!","Tell me more","I don't want to call anymore","Please don't call again"],"answerIdx":0,"hint":"Ao encerrar uma ligação, usamos expressões que indicam encerramento e prometem continuar a conversa."},
      {"id":"cv50_a3","type":"fill","prompt":"'Sorry, I missed your call — I'll ___ you back as soon as I'm free.'","answer":"call","keywords":["call","ring","phone","get back to"],"hint":"A palavra completa a promessa de retornar uma ligação perdida."},
      {"id":"cv50_a4","type":"text","prompt":"Write out a short casual phone call between two friends arranging to meet up. Include a greeting, the main topic, and a natural ending to the call.","keywords":["hey","call","meet","free","ring","let you go","talk soon","plan"],"hint":"Escreva um diálogo de ligação telefônica casual entre amigos combinando um encontro."}
    ]
  },
  cv51: {
    context: "As videochamadas se tornaram parte do cotidiano e têm sua própria etiqueta em inglês. Expressões como 'You're on mute!' e 'I think we lost you' são muito comuns. Saber iniciar uma videochamada com 'Can everyone hear me?' e lidar com problemas técnicos é uma habilidade essencial no mundo moderno.",
    acts: [
      {"id":"cv51_a1","type":"tf","prompt":"'You're on mute' means the person's microphone is not transmitting their voice.","answer":true,"hint":"Estar no 'mute' significa que o microfone está desligado e ninguém consegue ouvir a pessoa."},
      {"id":"cv51_a2","type":"mc","prompt":"Which phrase is used when someone's video call connection drops?","options":["You're on mute","I think we lost you for a moment","Can you see my screen?","Let's move on"],"answerIdx":1,"hint":"Quando a conexão cai, usamos expressões para informar que a pessoa desapareceu da chamada."},
      {"id":"cv51_a3","type":"fill","prompt":"Before starting the meeting, she asked, 'Can everyone ___ me okay?'","answer":"hear","keywords":["hear","see","understand","get"],"hint":"A palavra pergunta se todos estão recebendo o áudio da chamada."},
      {"id":"cv51_a4","type":"text","prompt":"Write a short video call dialogue between two colleagues starting a work meeting. Include technical issues, checking audio and video, and starting the agenda.","keywords":["mute","video","hear","connection","screen","share","meeting","start"],"hint":"Escreva um diálogo de videochamada de trabalho com problemas técnicos e início de reunião."}
    ]
  },
  cv52: {
    context: "A linguagem de mensagens de texto é muito abreviada e informal em inglês. Expressões como 'lol' (laughing out loud), 'omg' (oh my god), 'brb' (be right back) e 'tbh' (to be honest) são amplamente usadas. Entender e usar essas abreviações ajuda a comunicar-se de forma natural com amigos em contextos digitais.",
    acts: [
      {"id":"cv52_a1","type":"mc","prompt":"What does 'tbh' mean in texting?","options":["To be hopeful","To be honest","Text back here","Too busy here"],"answerIdx":1,"hint":"'tbh' é a abreviação de 'to be honest', que significa sendo honesto."},
      {"id":"cv52_a2","type":"mc","prompt":"What does 'brb' mean?","options":["Be right back","Best regards, buddy","Bring really big","Be really boring"],"answerIdx":0,"hint":"'brb' significa que a pessoa vai se ausentar brevemente e vai voltar logo."},
      {"id":"cv52_a3","type":"fill","prompt":"OMG, you'll never believe what just happened! ___ me everything — I need the details!","answer":"Tell","keywords":["Tell","Give","Send","Message"],"hint":"A palavra pede que a pessoa compartilhe todas as informações sobre o que aconteceu."},
      {"id":"cv52_a4","type":"text","prompt":"Write a text message conversation between two friends using at least six text abbreviations or informal expressions. The topic is making plans for the weekend.","keywords":["lol","omg","btw","imo","ngl","gonna","wanna","asap"],"hint":"Escreva uma conversa por texto usando pelo menos seis abreviações ou expressões informais."}
    ]
  },
  cv53: {
    context: "O vocabulário de relacionamentos — especificamente amizades — é rico em inglês. Expressões como 'We go way back' (nos conhecemos há muito tempo) e 'She's my ride or die' (ela é minha melhor amiga incondicional) são muito usadas. Descrever diferentes tipos de amigos e a qualidade das amizades é um tema rico e pessoal.",
    acts: [
      {"id":"cv53_a1","type":"tf","prompt":"'We go way back' means the friends have known each other for a long time.","answer":true,"hint":"'Go way back' descreve uma amizade longa e de muitos anos."},
      {"id":"cv53_a2","type":"mc","prompt":"Which phrase describes a close, trusted friend?","options":["A fair-weather friend","A ride or die","A distant acquaintance","A colleague"],"answerIdx":1,"hint":"Uma 'ride or die' é uma amiga leal que está sempre presente, em bons e maus momentos."},
      {"id":"cv53_a3","type":"fill","prompt":"We met in primary school and have been best friends ever ___. We go way back!","answer":"since","keywords":["since","after","then","ago"],"hint":"A palavra conecta o tempo em que se conheceram com o presente."},
      {"id":"cv53_a4","type":"text","prompt":"Describe your best friendship. How did you meet? What do you have in common? What makes this friendship special?","keywords":["friend","close","trust","met","common","years","bond","special"],"hint":"Descreva sua melhor amizade: como se conheceram, o que têm em comum e o que a torna especial."}
    ]
  },
  cv54: {
    context: "O vocabulário de relacionamentos românticos em inglês inclui expressões como 'We're going steady' (estamos namorando) e 'She's the one' (ela é a pessoa certa). Expressar sentimentos com clareza e respeito é essencial. Expressões como 'I have a crush on someone' (estou apaixonado por alguém) são muito comuns entre jovens.",
    acts: [
      {"id":"cv54_a1","type":"mc","prompt":"What does 'I have a crush on someone' mean?","options":["I physically hurt someone","I have romantic feelings for someone","I dislike someone strongly","I am married"],"answerIdx":1,"hint":"Ter um 'crush' significa sentir atração romântica por alguém."},
      {"id":"cv54_a2","type":"mc","prompt":"Which phrase describes a serious, committed relationship?","options":["We're just friends","I have a crush on them","We've been going steady for two years","We just met"],"answerIdx":2,"hint":"'Going steady' descreve um relacionamento sério e estabelecido."},
      {"id":"cv54_a3","type":"fill","prompt":"They met by chance and hit it ___ immediately — they just had so much in common.","answer":"off","keywords":["off"],"hint":"A expressão 'hit it off' significa conectar-se imediatamente com alguém de forma muito positiva."},
      {"id":"cv54_a4","type":"text","prompt":"Describe what you look for in a romantic partner. Use vocabulary related to personality, values, and connection. Mention what makes a relationship healthy and strong.","keywords":["partner","relationship","trust","communication","love","compatible","honest","support"],"hint":"Descreva o que você procura em um parceiro romântico e o que torna um relacionamento saudável."}
    ]
  },
  cv55: {
    context: "Resolver conflitos em conversas requer habilidade linguística e emocional. Em inglês, expressões como 'Let's clear the air' (vamos esclarecer as coisas) e 'I understand where you're coming from' (entendo seu ponto de vista) são muito usadas em discussões. Manter a calma e ouvir ativamente são fundamentais para a resolução de conflitos.",
    acts: [
      {"id":"cv55_a1","type":"tf","prompt":"'Let's clear the air' means you want to resolve a misunderstanding or tension.","answer":true,"hint":"'Clear the air' significa resolver mal-entendidos e melhorar a atmosfera entre as pessoas."},
      {"id":"cv55_a2","type":"mc","prompt":"Which phrase shows you are listening and understanding the other person's perspective?","options":["You're wrong","I completely disagree","I understand where you're coming from","That's not my problem"],"answerIdx":2,"hint":"Esta expressão demonstra empatia e reconhecimento da perspectiva da outra pessoa."},
      {"id":"cv55_a3","type":"fill","prompt":"I know we've had our differences, but can we try to ___ things out between us?","answer":"sort","keywords":["sort","work","talk","figure","iron"],"hint":"A expressão 'sort things out' significa resolver problemas ou conflitos."},
      {"id":"cv55_a4","type":"text","prompt":"Write a dialogue where two friends resolve a misunderstanding. Show how they listen, apologise, and reach a mutual understanding. Use conflict resolution language.","keywords":["understand","sorry","perspective","resolve","talk","listen","agree","move on"],"hint":"Escreva um diálogo de resolução de conflito entre dois amigos com linguagem empática e respeitosa."}
    ]
  },
  cv56: {
    context: "Debater e discutir ideias de forma educada é uma habilidade valorizada em inglês. Expressões como 'I beg to differ' (discordo respeitosamente) e 'That's a valid point, but...' permitem que você expresse desacordo sem ser ofensivo. Um bom debate envolve argumentos lógicos, evidências e respeito mútuo.",
    acts: [
      {"id":"cv56_a1","type":"mc","prompt":"What does 'I beg to differ' mean?","options":["I completely agree with you","I respectfully disagree","I need more time to think","I don't understand the question"],"answerIdx":1,"hint":"'I beg to differ' é uma forma formal e educada de expressar desacordo."},
      {"id":"cv56_a2","type":"mc","prompt":"Which phrase acknowledges the other person's point before presenting a counter-argument?","options":["You're completely wrong","That's a valid point, however...","I don't care what you think","End of discussion"],"answerIdx":1,"hint":"Reconhecer o ponto do outro antes de contra-argumentar é uma técnica eficaz de debate."},
      {"id":"cv56_a3","type":"fill","prompt":"While I see your point, I ___ to differ — the evidence actually suggests the opposite.","answer":"beg","keywords":["beg","have","tend","dare"],"hint":"A palavra completa a expressão formal de desacordo educado."},
      {"id":"cv56_a4","type":"text","prompt":"Argue for or against this statement: 'Social media does more harm than good.' Use debate language, give two arguments, and acknowledge the opposing view.","keywords":["argue","believe","evidence","however","point","furthermore","disagree","conclusion"],"hint":"Argumente a favor ou contra a afirmação sobre redes sociais usando linguagem de debate educado."}
    ]
  },
  cv57: {
    context: "Fazer um brinde ou discurso em inglês requer habilidade e confiança. Expressões como 'Ladies and gentlemen...' e 'Please raise your glasses' são usadas em brindes formais. Discursos bem estruturados incluem uma abertura cativante, o conteúdo principal e uma conclusão memorável. Praticar isso aumenta a confiança em situações sociais.",
    acts: [
      {"id":"cv57_a1","type":"tf","prompt":"'Please raise your glasses' is a phrase used at the beginning of a toast.","answer":true,"hint":"Esta é a expressão clássica que convida todos a erguer os copos para o brinde."},
      {"id":"cv57_a2","type":"mc","prompt":"Which phrase is a good way to open a speech?","options":["Uh, well, I don't really know what to say","Good evening, ladies and gentlemen — thank you for having me","This is going to be boring","I hate speaking in public"],"answerIdx":1,"hint":"Uma boa abertura de discurso é confiante, educada e agradece a audiência."},
      {"id":"cv57_a3","type":"fill","prompt":"I'd like to ___ a toast to the happy couple — may your life together be full of joy!","answer":"raise","keywords":["raise","make","propose","give"],"hint":"A palavra introduz o brinde, convidando todos a participar."},
      {"id":"cv57_a4","type":"text","prompt":"Write a short wedding toast for a close friend. Include a warm opening, a funny or touching story about the friend, and a heartfelt wish for their future.","keywords":["toast","raise","wish","together","love","happiness","future","memories"],"hint":"Escreva um brinde de casamento com abertura calorosa, história pessoal e desejo sincero."}
    ]
  },
  cv58: {
    context: "Fazer networking em contextos sociais é diferente do profissional — é mais casual, mas ainda requer habilidades comunicativas. Em inglês, expressões como 'What brings you here tonight?' e 'We should definitely stay in touch' são muito usadas. Criar conexões genuínas através de conversas agradáveis é uma habilidade social valiosa.",
    acts: [
      {"id":"cv58_a1","type":"mc","prompt":"Which phrase is a good way to start a conversation with someone new at a social event?","options":["What's your salary?","What brings you here tonight?","I don't usually talk to strangers","How old are you?"],"answerIdx":1,"hint":"Uma boa abertura para conversa em evento social é educada e aberta a respostas variadas."},
      {"id":"cv58_a2","type":"mc","prompt":"What does 'We should stay in touch' mean?","options":["We should hold hands","We should maintain contact in the future","We should stand closer","We should not speak again"],"answerIdx":1,"hint":"'Stay in touch' significa manter contato após o encontro."},
      {"id":"cv58_a3","type":"fill","prompt":"It was lovely meeting you tonight — let's ___ each other's contact details and stay in touch.","answer":"exchange","keywords":["exchange","swap","share","give"],"hint":"A palavra descreve a ação de trocar informações de contato mutuamente."},
      {"id":"cv58_a4","type":"text","prompt":"Write a short conversation where you meet someone interesting at a party. Show how you introduce yourselves, find common ground, and arrange to stay in touch.","keywords":["meet","introduce","common","interest","contact","touch","connect","lovely"],"hint":"Escreva um diálogo de networking social em uma festa com apresentação, descoberta de interesses comuns e troca de contatos."}
    ]
  },
  cv59: {
    context: "Conversar sobre tópicos interculturais em inglês requer sensibilidade e curiosidade. Expressões como 'That's fascinating — how is it different in your culture?' demonstram interesse genuíno. Discutir diferenças culturais sem julgamento é fundamental para conversas enriquecedoras e respeitosas com pessoas de diferentes origens.",
    acts: [
      {"id":"cv59_a1","type":"tf","prompt":"Showing genuine curiosity about someone's culture is generally appreciated in cross-cultural conversations.","answer":true,"hint":"Demonstrar interesse genuíno pela cultura do outro é visto positivamente e cria conexão."},
      {"id":"cv59_a2","type":"mc","prompt":"Which question shows respectful curiosity about another culture?","options":["Why don't you do it like we do?","Your customs are very strange","How is this tradition celebrated in your country?","Your culture is so different from normal"],"answerIdx":2,"hint":"Uma pergunta respeitosa é neutra, aberta e genuinamente curiosa sem julgamento."},
      {"id":"cv59_a3","type":"fill","prompt":"'That's ___ interesting — I had no idea that was such an important celebration in your culture.'","answer":"really","keywords":["really","so","absolutely","incredibly","genuinely"],"hint":"O advérbio que intensifica o interesse genuíno pela informação cultural compartilhada."},
      {"id":"cv59_a4","type":"text","prompt":"Describe an interesting cultural difference between Brazil and an English-speaking country. Explain the difference respectfully and say what you find interesting about the other culture.","keywords":["culture","tradition","different","interesting","country","celebrate","custom","respect"],"hint":"Descreva uma diferença cultural interessante entre o Brasil e um país anglófono com respeito e curiosidade."}
    ]
  },
  cv60: {
    context: "Encerrar conversas de forma graciosa é tão importante quanto iniciá-las. Em inglês, há expressões específicas para encerrar uma conversa de forma natural, como 'Well, I won't keep you any longer' e 'It's been really great catching up'. Saber quando e como encerrar uma conversa deixa uma impressão positiva duradoura.",
    acts: [
      {"id":"cv60_a1","type":"mc","prompt":"Which phrase politely signals that you want to end a conversation?","options":["Stop talking now","I need to go, but it's been great talking with you!","This conversation is over","I'm bored now"],"answerIdx":1,"hint":"A forma mais educada de encerrar uma conversa inclui um agradecimento positivo."},
      {"id":"cv60_a2","type":"mc","prompt":"What does 'I won't keep you any longer' mean?","options":["I will keep your belongings","I am ending the conversation so you can go","I want to continue talking","I am keeping you waiting"],"answerIdx":1,"hint":"Esta expressão cortês indica que você está encerrando a conversa para não tomar mais o tempo da pessoa."},
      {"id":"cv60_a3","type":"fill","prompt":"It's been absolutely lovely ___ up with you — let's not leave it so long next time!","answer":"catching","keywords":["catching","getting","meeting","talking"],"hint":"A expressão 'catching up' significa se atualizar com alguém após um tempo sem se ver."},
      {"id":"cv60_a4","type":"text","prompt":"Write a natural conversation ending for two friends who haven't seen each other in a long time and are wrapping up their chat. Include promises to meet again and warm goodbyes.","keywords":["lovely","catching up","soon","again","take care","next time","keep in touch","wonderful"],"hint":"Escreva um encerramento natural de conversa entre amigos usando expressões de despedida calorosas."}
    ]
  },
  gr1: {
    context: "O Present Simple é usado para hábitos, verdades universais e estados permanentes, enquanto o Present Continuous descreve ações que estão acontecendo agora ou situações temporárias. A distinção é crucial: verbos de estado (know, believe, love) raramente aparecem no Continuous, e o contexto temporal determina qual forma usar.",
    acts: [
      {"id":"gr1_a1","type":"tf","prompt":"'I am knowing the answer' is a correct English sentence.","answer":false,"hint":"Verbos de estado como 'know' não costumam ser usados no Continuous."},
      {"id":"gr1_a2","type":"mc","prompt":"Which sentence uses the correct tense?","options":["She is working in a bank every day.","She works in a bank every day.","She is work in a bank every day.","She does work in a bank every day usually."],"answerIdx":1,"hint":"Rotinas e hábitos pedem o Present Simple."},
      {"id":"gr1_a3","type":"fill","prompt":"Complete with the correct form: He usually ___ (take) the bus, but today he ___ (drive) his car.","answer":"takes / is driving","keywords":["takes","is driving"],"hint":"Use Simple para hábito e Continuous para ação temporária de agora."},
      {"id":"gr1_a4","type":"text","prompt":"Write two sentences: one about your daily routine and one about what you are doing right now, using the correct tenses.","keywords":["every","always","usually","now","currently","am","is","are"],"hint":"Rotina → Simple; ação em progresso → Continuous."}
    ]
  },
  gr2: {
    context: "O Past Simple relata eventos concluídos em um tempo definido no passado, enquanto o Present Perfect conecta o passado ao presente, enfatizando relevância atual ou experiência de vida. Marcadores como 'yesterday', 'in 2010' pedem Past Simple, ao passo que 'ever', 'never', 'already', 'yet' frequentemente acompanham o Present Perfect.",
    acts: [
      {"id":"gr2_a1","type":"tf","prompt":"'I have seen that movie yesterday' is grammatically correct.","answer":false,"hint":"'Yesterday' é um marcador de tempo específico e requer Past Simple."},
      {"id":"gr2_a2","type":"mc","prompt":"Choose the correct sentence:","options":["Did you ever visit Paris?","Have you ever visited Paris?","Have you ever visit Paris?","Did you ever visited Paris?"],"answerIdx":1,"hint":"'Ever' em perguntas sobre experiências de vida pede Present Perfect."},
      {"id":"gr2_a3","type":"fill","prompt":"Complete: She ___ (live) in London for two years before she ___ (move) to New York in 2018.","answer":"had lived / moved","keywords":["had lived","moved"],"hint":"O evento anterior ao passado usa Past Perfect; o mais recente usa Past Simple."},
      {"id":"gr2_a4","type":"text","prompt":"Write two sentences: one about something you did at a specific time in the past, and one about an experience you have had in your life.","keywords":["ago","last","in","have","has","ever","never","been","visited","went"],"hint":"Tempo específico → Past Simple; experiência sem tempo definido → Present Perfect."}
    ]
  },
  gr3: {
    context: "O Past Simple narra ações completas e sequenciais no passado, enquanto o Past Continuous descreve ações em progresso em um momento específico do passado. O Past Continuous frequentemente fornece o contexto ou pano de fundo ('I was reading when she called'), e o Past Simple interrompe essa ação contínua.",
    acts: [
      {"id":"gr3_a1","type":"tf","prompt":"'While I cooked, the phone rang' is the most natural way to describe a background action being interrupted.","answer":false,"hint":"A ação de fundo ou contínua deve estar no Past Continuous: 'was cooking'."},
      {"id":"gr3_a2","type":"mc","prompt":"Which sentence correctly uses both tenses?","options":["I was reading when she called.","I read when she was calling.","I was reading when she was calling me suddenly.","I read while she was call."],"answerIdx":0,"hint":"A ação em progresso (Past Continuous) é interrompida pela ação súbita (Past Simple)."},
      {"id":"gr3_a3","type":"fill","prompt":"Complete: At 8 p.m. last night, they ___ (have) dinner when the lights ___ (go) out.","answer":"were having / went","keywords":["were having","went"],"hint":"A ação em andamento usa Past Continuous; a interrupção usa Past Simple."},
      {"id":"gr3_a4","type":"text","prompt":"Describe a past event where one action was interrupted by another. Use both Past Simple and Past Continuous.","keywords":["was","were","when","while","suddenly","happened","interrupted"],"hint":"Use 'while' ou 'when' para conectar as duas ações no passado."}
    ]
  },
  gr4: {
    context: "O Present Perfect relaciona o passado ao momento presente, enquanto o Past Perfect (had + particípio) descreve uma ação passada que ocorreu antes de outra ação no passado. O Past Perfect é essencial para estabelecer sequência temporal em narrativas, especialmente em subordinadas introduzidas por 'before', 'after', 'when' e 'by the time'.",
    acts: [
      {"id":"gr4_a1","type":"tf","prompt":"'By the time she arrived, we finished dinner' correctly uses the Past Perfect.","answer":false,"hint":"'By the time' indica que uma ação foi concluída antes de outra — use Past Perfect: 'had finished'."},
      {"id":"gr4_a2","type":"mc","prompt":"Which sentence correctly uses the Past Perfect?","options":["When I arrived, he already left.","When I arrived, he has already left.","When I arrived, he had already left.","When I arrived, he already had leave."],"answerIdx":2,"hint":"A ação que aconteceu primeiro no passado usa Past Perfect (had + particípio)."},
      {"id":"gr4_a3","type":"fill","prompt":"Complete: She told me she ___ (never/see) that film before, so we watched it together.","answer":"had never seen","keywords":["had never seen","had seen"],"hint":"A experiência que ela tinha (ou não) antes do momento passado usa Past Perfect."},
      {"id":"gr4_a4","type":"text","prompt":"Write two sentences using the Past Perfect to show a sequence of events in the past.","keywords":["had","before","after","already","by the time","when","because"],"hint":"Mostre que uma ação aconteceu antes de outra usando 'had + particípio'."}
    ]
  },
  gr5: {
    context: "Tanto 'will' quanto 'going to' falam sobre o futuro, mas com nuances importantes. 'Will' é usado para decisões espontâneas, previsões sem evidência e promessas, enquanto 'going to' expressa intenções pré-planejadas e previsões baseadas em evidências visíveis. Em inglês falado, essa distinção revela o grau de planejamento ou espontaneidade.",
    acts: [
      {"id":"gr5_a1","type":"tf","prompt":"'Look at those dark clouds — it will rain' is the most natural way to predict rain based on visible evidence.","answer":false,"hint":"Previsões baseadas em evidências presentes pedem 'going to': 'it's going to rain'."},
      {"id":"gr5_a2","type":"mc","prompt":"Someone knocks on the door unexpectedly. You say:","options":["I'm going to open it.","I open it.","I'll open it.","I am opening it."],"answerIdx":2,"hint":"Decisões tomadas no momento da fala usam 'will'."},
      {"id":"gr5_a3","type":"fill","prompt":"Complete: She has already bought the tickets — she ___ (visit) Rome next month.","answer":"is going to visit","keywords":["is going to visit","going to"],"hint":"Plano já decidido e com evidência concreta usa 'going to'."},
      {"id":"gr5_a4","type":"text","prompt":"Write two sentences: one about a spontaneous decision and one about a pre-planned intention, using 'will' and 'going to' correctly.","keywords":["will","going to","plan","decide","intend","promise","I'll","I'm going"],"hint":"'Will' para decisão espontânea; 'going to' para plano anterior."}
    ]
  },
  gr6: {
    context: "Os condicionais em inglês variam da realidade (zero e primeiro) à hipótese (segundo) e ao arrependimento (terceiro), além dos mistos, que combinam elementos temporais diferentes. Os condicionais mistos são sofisticados: 'If I had studied harder (passado), I would be a doctor now (presente)' mistura o terceiro e o segundo condicional para expressar que um resultado hipotético presente tem origem em uma ação passada diferente.",
    acts: [
      {"id":"gr6_a1","type":"tf","prompt":"'If I would have more time, I would help you' is a correct second conditional sentence.","answer":false,"hint":"Na condicional if, nunca se usa 'would' na cláusula com 'if' — use o passado simples: 'If I had'."},
      {"id":"gr6_a2","type":"mc","prompt":"Which is an example of a mixed conditional?","options":["If it rains, we stay inside.","If she had slept well, she wouldn't be tired now.","If he studied, he would pass.","If you heat ice, it melts."],"answerIdx":1,"hint":"Condicional misto combina passado (if + Past Perfect) com presente (would + base verb)."},
      {"id":"gr6_a3","type":"fill","prompt":"Complete: If they ___ (not/miss) the flight, they ___ (be) here by now.","answer":"hadn't missed / would be","keywords":["hadn't missed","would be"],"hint":"Causa no passado (Past Perfect) + resultado no presente (would + base) = condicional misto."},
      {"id":"gr6_a4","type":"text","prompt":"Write one third conditional and one mixed conditional sentence, explaining how they differ.","keywords":["if","had","would have","would be","now","past","result","condition"],"hint":"3rd: causa e resultado no passado. Misto: causa no passado, resultado no presente."}
    ]
  },
  gr7: {
    context: "'Wish' e 'If only' expressam desejos e arrependimentos, mas exigem o uso de tempos verbais específicos que diferem do sentido temporal real. Para situações presentes não satisfatórias, usa-se o passado simples (wish + past simple); para arrependimentos sobre o passado, usa-se o Past Perfect (wish + had + particípio); para desejos sobre o futuro ou irritação, usa-se 'would'.",
    acts: [
      {"id":"gr7_a1","type":"tf","prompt":"'I wish I can speak French' is correct when expressing a current unfulfilled wish.","answer":false,"hint":"Após 'wish' para situações presentes, use o passado simples: 'I wish I could speak French'."},
      {"id":"gr7_a2","type":"mc","prompt":"Which sentence correctly expresses regret about a past action?","options":["I wish I didn't eat so much.","I wish I hadn't eaten so much.","I wish I haven't eaten so much.","I wish I wouldn't eat so much."],"answerIdx":1,"hint":"Arrependimento sobre o passado: wish + Past Perfect (had + particípio)."},
      {"id":"gr7_a3","type":"fill","prompt":"Complete: If only she ___ (tell) me the truth earlier — now everything is complicated.","answer":"had told","keywords":["had told"],"hint":"'If only' para arrependimento sobre o passado usa Past Perfect."},
      {"id":"gr7_a4","type":"text","prompt":"Write two sentences using 'wish' or 'if only': one about an unfulfilled present wish and one about a past regret.","keywords":["wish","if only","could","had","were","knew","hadn't","didn't","would"],"hint":"Desejo presente → wish + past simple; arrependimento passado → wish + Past Perfect."}
    ]
  },
  gr8: {
    context: "'Used to' descreve hábitos e estados do passado que não existem mais, enquanto 'would' é usado apenas para ações habituais passadas (não estados). Por isso, 'I used to live in Paris' é correto, mas 'I would live in Paris' soa estranho para estado permanente. O 'would' habitual é mais comum em narrativas e precisa de contexto temporal estabelecido.",
    acts: [
      {"id":"gr8_a1","type":"tf","prompt":"'I would know a lot of people in my hometown' correctly describes a past state.","answer":false,"hint":"'Would' não é usado para estados passados; use 'used to know'."},
      {"id":"gr8_a2","type":"mc","prompt":"Which sentence is NOT correct?","options":["We used to go fishing every weekend.","He would visit his grandmother every Sunday.","She used to be very shy.","They would be best friends when they were young."],"answerIdx":3,"hint":"'Would' não pode descrever estados ou condições passadas — apenas ações repetidas."},
      {"id":"gr8_a3","type":"fill","prompt":"Complete: When I was a child, I ___ (play) in the garden every afternoon and I ___ (have) a dog called Rex.","answer":"used to play / used to have","keywords":["used to play","would play","used to have"],"hint":"Ambos são passado, mas 'have' é estado, então somente 'used to' funciona aqui."},
      {"id":"gr8_a4","type":"text","prompt":"Write two sentences about your childhood habits using 'used to' and 'would'. Include one state and one repeated action.","keywords":["used to","would","when","childhood","always","every","before","habit"],"hint":"Estado passado → somente 'used to'; ação repetida → 'used to' ou 'would'."}
    ]
  },
  gr9: {
    context: "'Be used to' significa estar acostumado a algo (estado), enquanto 'get used to' indica o processo de se acostumar (mudança). Ambas as expressões são seguidas por um substantivo ou gerúndio (-ing), o que as diferencia de 'used to + infinitivo'. Essas estruturas são frequentemente confundidas porque soam parecidas mas têm funções completamente distintas.",
    acts: [
      {"id":"gr9_a1","type":"tf","prompt":"'She is used to wake up early' is grammatically correct.","answer":false,"hint":"Após 'be/get used to', use gerúndio (-ing): 'She is used to waking up early'."},
      {"id":"gr9_a2","type":"mc","prompt":"Which sentence means the person is in the process of adapting?","options":["He is used to driving on the left.","He used to drive on the left.","He is getting used to driving on the left.","He gets used to drive on the left."],"answerIdx":2,"hint":"'Get used to' indica adaptação em progresso; 'be used to' indica adaptação já completa."},
      {"id":"gr9_a3","type":"fill","prompt":"Complete: Moving to a new country is hard, but most people eventually ___ (get/used to/live) there.","answer":"get used to living","keywords":["get used to living","used to living"],"hint":"'Get used to' + gerúndio (-ing) para processo de adaptação."},
      {"id":"gr9_a4","type":"text","prompt":"Write two sentences: one showing you are already adapted to something, and one showing you are still adapting.","keywords":["am used to","is used to","getting used to","living","working","waking","noise","weather","food"],"hint":"Já adaptado → 'be used to + -ing'; ainda adaptando → 'get used to + -ing'."}
    ]
  },
  gr10: {
    context: "A estrutura causativa com 'have' ou 'get' indica que o sujeito não faz algo por conta própria, mas faz com que outra pessoa faça. 'Have something done' é mais formal e neutro ('I had my hair cut'), enquanto 'get something done' é mais informal e pode indicar esforço ou insistência. O objeto direto vem antes do particípio passado nessas construções.",
    acts: [
      {"id":"gr10_a1","type":"tf","prompt":"'I had cut my hair' and 'I had my hair cut' mean the same thing.","answer":false,"hint":"'I had cut my hair' = eu mesmo cortei (Past Perfect); 'I had my hair cut' = outra pessoa cortou para mim (causativo)."},
      {"id":"gr10_a2","type":"mc","prompt":"Which sentence means someone else repaired the car for you?","options":["I repaired my car.","I had repaired my car.","I had my car repaired.","I was repairing my car."],"answerIdx":2,"hint":"Causativo: sujeito + have/get + objeto + particípio passado."},
      {"id":"gr10_a3","type":"fill","prompt":"Complete: She doesn't clean her own house — she ___ (get) it ___ (clean) every week.","answer":"gets / cleaned","keywords":["gets","cleaned","get","clean"],"hint":"Causativo com 'get': get + objeto + particípio passado."},
      {"id":"gr10_a4","type":"text","prompt":"Write two causative sentences: one with 'have' and one with 'get', describing services you use.","keywords":["had","got","done","repaired","cleaned","cut","fixed","delivered","painted","checked"],"hint":"have/get + objeto + particípio = outra pessoa faz o serviço para você."}
    ]
  },
  gr11: {
    context: "Alguns verbos mudam de significado dependendo de serem seguidos por infinitivo ou gerúndio. 'Remember to do' significa lembrar-se de fazer algo (futuro/obrigação), enquanto 'remember doing' significa lembrar-se de ter feito algo (passado). Outros pares importantes incluem: stop to do/stop doing, try to do/try doing, forget to do/forget doing, regret to say/regret saying.",
    acts: [
      {"id":"gr11_a1","type":"tf","prompt":"'I remember to lock the door' and 'I remember locking the door' express the same meaning.","answer":false,"hint":"'Remember to lock' = não esqueça de trancar (ação futura); 'remember locking' = lembro que tranquei (ação passada)."},
      {"id":"gr11_a2","type":"mc","prompt":"He stopped ___ cigarettes when his doctor warned him about his health.","options":["to smoke","smoke","smoking","to smoking"],"answerIdx":2,"hint":"'Stop doing' = abandonar o hábito; 'stop to do' = parar para fazer outra coisa."},
      {"id":"gr11_a3","type":"fill","prompt":"Complete: I tried ___ (open) the window but it was stuck, so I tried ___ (call) the maintenance team.","answer":"to open / calling","keywords":["to open","calling"],"hint":"'Try to do' = tentar com esforço; 'try doing' = experimentar uma abordagem diferente."},
      {"id":"gr11_a4","type":"text","prompt":"Write two sentences using 'remember' or 'forget' — one with a gerund (past meaning) and one with an infinitive (future/obligation meaning).","keywords":["remember","forget","to","ing","past","future","already","need","task","memory"],"hint":"Gerúndio após esses verbos = memória do passado; infinitivo = obrigação ou intenção futura."}
    ]
  },
  gr12: {
    context: "O infinitivo perfeito ('to have done') e o gerúndio perfeito ('having done') são usados para indicar que uma ação foi completada antes de outra ação ou momento de referência. O infinitivo perfeito aparece com verbos como 'seem', 'appear', 'claim', 'be supposed', enquanto o gerúndio perfeito é comum após preposições e em cláusulas participiais.",
    acts: [
      {"id":"gr12_a1","type":"tf","prompt":"'He seems to be very experienced in this field' uses the perfect infinitive correctly.","answer":false,"hint":"'Seems to be' é infinitivo simples; o perfeito seria 'seems to have been' para indicar experiência acumulada antes."},
      {"id":"gr12_a2","type":"mc","prompt":"Which sentence correctly uses the perfect gerund?","options":["After finishing the project, she celebrated.","Having finished the project, she celebrated.","Both A and B are correct.","Neither A nor B is correct."],"answerIdx":2,"hint":"Ambas as formas são corretas; o gerúndio perfeito 'having finished' enfatiza que a ação foi completada antes."},
      {"id":"gr12_a3","type":"fill","prompt":"Complete: She appears ___ (work) very hard all her life to reach this position.","answer":"to have worked","keywords":["to have worked"],"hint":"Infinitivo perfeito: to have + particípio, para ação anterior ao momento presente."},
      {"id":"gr12_a4","type":"text","prompt":"Write two sentences: one using a perfect infinitive and one using a perfect gerund, both showing an action completed before another.","keywords":["to have","having","done","finished","completed","before","after","already","seems","appears"],"hint":"Infinitivo perfeito: to have + particípio; gerúndio perfeito: having + particípio."}
    ]
  },
  gr13: {
    context: "A voz passiva em inglês pode ser formada em praticamente todos os tempos verbais usando o auxiliar 'be' no tempo correspondente mais o particípio passado. A escolha entre ativa e passiva depende do foco: na passiva, o objeto da ação ativa torna-se o sujeito, e o agente pode ser omitido ou introduzido por 'by'. Dominar a passiva em todos os tempos é essencial para escrita formal e acadêmica.",
    acts: [
      {"id":"gr13_a1","type":"tf","prompt":"'The report has been writing by the team' is a correct Present Perfect Passive sentence.","answer":false,"hint":"A voz passiva usa o particípio passado: 'has been written', não 'writing'."},
      {"id":"gr13_a2","type":"mc","prompt":"The active sentence 'They are building a new hospital' in the passive is:","options":["A new hospital is being built.","A new hospital has been built.","A new hospital is built.","A new hospital was being built."],"answerIdx":0,"hint":"Present Continuous Passivo: am/is/are + being + particípio passado."},
      {"id":"gr13_a3","type":"fill","prompt":"Complete: The documents ___ (sign) by the director before the meeting started.","answer":"had been signed","keywords":["had been signed"],"hint":"Past Perfect Passivo: had been + particípio passado."},
      {"id":"gr13_a4","type":"text","prompt":"Rewrite these two active sentences in the passive voice: 'Scientists discovered a new planet.' and 'They will announce the results tomorrow.'","keywords":["was discovered","will be announced","by","scientists","results","planet","passive"],"hint":"Identifique o objeto da ativa — ele vira sujeito da passiva; coloque 'be' no tempo correto + particípio."}
    ]
  },
  gr14: {
    context: "A voz passiva com modais combina o modal com 'be' e o particípio passado para expressar possibilidade, obrigação, permissão e dedução no contexto passivo. Para o passado, adiciona-se 'have been' entre o modal e o particípio: 'This problem could have been avoided'. Essa estrutura é muito comum em textos formais, regulamentos e relatórios.",
    acts: [
      {"id":"gr14_a1","type":"tf","prompt":"'This task should been completed by Friday' is grammatically correct.","answer":false,"hint":"Passivo com modal: modal + be + particípio; 'should be completed', não 'should been'."},
      {"id":"gr14_a2","type":"mc","prompt":"Which sentence correctly expresses that it was possible to avoid the accident in the past?","options":["The accident could be avoided.","The accident might avoid.","The accident could have been avoided.","The accident should avoided."],"answerIdx":2,"hint":"Modal passivo no passado: could/should/might + have been + particípio."},
      {"id":"gr14_a3","type":"fill","prompt":"Complete: These safety rules ___ (must/follow) at all times while on site.","answer":"must be followed","keywords":["must be followed"],"hint":"Obrigação passiva no presente: must + be + particípio passado."},
      {"id":"gr14_a4","type":"text","prompt":"Write two sentences using modal passives: one expressing present obligation and one expressing past possibility.","keywords":["must be","should be","could have been","might have been","done","followed","checked","avoided","reported"],"hint":"Presente: modal + be + particípio; passado: modal + have been + particípio."}
    ]
  },
  gr15: {
    context: "Os verbos de relato 'say', 'tell', 'ask' e 'advise' têm padrões sintáticos distintos. 'Say' não precisa de objeto indireto antes da oração ('She said she was tired'), enquanto 'tell' obrigatoriamente precisa ('She told me she was tired'). 'Ask' pode ser usado para perguntas e pedidos, e 'advise' traz uma recomendação formal. Ao reportar, os tempos verbais geralmente recuam um grau (backshift).",
    acts: [
      {"id":"gr15_a1","type":"tf","prompt":"'She told that she would be late' is a correct reported speech sentence.","answer":false,"hint":"'Tell' precisa de objeto indireto: 'She told me/us/him that she would be late'."},
      {"id":"gr15_a2","type":"mc","prompt":"Report the question 'Are you ready?' using 'ask':","options":["He asked if I was ready.","He asked was I ready.","He said me if I was ready.","He asked am I ready."],"answerIdx":0,"hint":"Perguntas indiretas usam ordem afirmativa e 'if/whether': 'asked if + sujeito + verbo'."},
      {"id":"gr15_a3","type":"fill","prompt":"Direct speech: 'You should see a doctor,' he said to me. Reported: He ___ me to see a doctor.","answer":"advised","keywords":["advised","told"],"hint":"'Advise' + objeto + infinitivo para recomendações em discurso indireto."},
      {"id":"gr15_a4","type":"text","prompt":"Report the following: 'I will call you tomorrow,' she said. 'Please open the window,' he said to her. Use say, tell, or ask.","keywords":["said","told","asked","would","call","open","reported","that","to"],"hint":"Recue o tempo verbal (will → would) e ajuste pronomes ao reportar."}
    ]
  },
  gr16: {
    context: "Os verbos 'suggest', 'recommend' e 'warn' têm padrões específicos no discurso indireto. 'Suggest' e 'recommend' podem ser seguidos por gerúndio, cláusula 'that' com subjuntivo, ou 'that + should': 'She suggested going' / 'She suggested that he should go'. 'Warn' é seguido por objeto + not + infinitivo: 'He warned us not to be late'. Cada padrão reflete diferentes graus de formalidade.",
    acts: [
      {"id":"gr16_a1","type":"tf","prompt":"'He suggested me to try the new restaurant' is grammatically correct.","answer":false,"hint":"'Suggest' não é seguido por objeto + infinitivo; use gerúndio ou 'that': 'suggested trying' ou 'suggested that I try'."},
      {"id":"gr16_a2","type":"mc","prompt":"Report: 'Don't touch the equipment,' the supervisor said to us.","options":["The supervisor warned us not to touch the equipment.","The supervisor suggested us to not touch the equipment.","The supervisor told not to touch the equipment.","The supervisor said us not touching the equipment."],"answerIdx":0,"hint":"'Warn' + objeto + not + infinitivo é o padrão correto para proibições."},
      {"id":"gr16_a3","type":"fill","prompt":"Report: 'You should take an umbrella,' she said. She ___ taking an umbrella.","answer":"recommended","keywords":["recommended","suggested"],"hint":"'Recommend' + gerúndio para sugestões no discurso indireto."},
      {"id":"gr16_a4","type":"text","prompt":"Report the following advice using suggest, recommend, and warn: 'Try the fish', 'You should drink more water', 'Don't walk alone at night'.","keywords":["suggested","recommended","warned","trying","drinking","not to walk","that","should"],"hint":"Suggest/recommend: gerúndio ou 'that + should'; warn: objeto + not + infinitivo."}
    ]
  },
  gr17: {
    context: "Orações substantivas (noun clauses) funcionam como sujeito, objeto ou predicado na frase principal. São introduzidas por 'that', pronomes interrogativos (what, who, which) ou 'if/whether'. A ordem das palavras dentro da noun clause segue a ordem afirmativa, mesmo em contextos de pergunta indireta: 'I don't know what he said' — não 'what did he say'.",
    acts: [
      {"id":"gr17_a1","type":"tf","prompt":"'Nobody knows where does she live' is a correct noun clause.","answer":false,"hint":"Em noun clauses, a ordem é afirmativa: 'Nobody knows where she lives'."},
      {"id":"gr17_a2","type":"mc","prompt":"Which sentence contains a correct noun clause as the subject?","options":["What she said surprised everyone.","What did she say surprised everyone.","That she said surprised everyone.","Which she said surprised everyone."],"answerIdx":0,"hint":"'What she said' é uma noun clause no papel de sujeito da frase."},
      {"id":"gr17_a3","type":"fill","prompt":"Complete: The main question is ___ we should accept the proposal or not.","answer":"whether","keywords":["whether","if"],"hint":"'Whether' (ou 'if') introduce noun clauses de escolha entre alternativas."},
      {"id":"gr17_a4","type":"text","prompt":"Write two sentences containing noun clauses: one as the subject and one as the object of the verb.","keywords":["that","what","whether","if","know","believe","understand","matters","important","said"],"hint":"Noun clause como sujeito: 'What matters is...'; como objeto: 'I believe that...'."}
    ]
  },
  gr18: {
    context: "As orações adjetivas (adjective/relative clauses) se dividem em restritivas e não-restritivas. As restritivas identificam o referente e não usam vírgulas ('The man who called you is my brother'). As não-restritivas adicionam informação extra sobre um referente já identificado e são separadas por vírgulas ('My brother, who lives in London, called me'). 'That' só pode ser usado em orações restritivas.",
    acts: [
      {"id":"gr18_a1","type":"tf","prompt":"'My father, that works as a doctor, is very busy' is correct.","answer":false,"hint":"Em orações não-restritivas (com vírgulas), usa-se 'who', não 'that'."},
      {"id":"gr18_a2","type":"mc","prompt":"Which sentence contains a non-restrictive relative clause?","options":["The book that I borrowed is excellent.","The car which is parked outside is mine.","Shakespeare, who wrote Hamlet, was born in 1564.","I know the student who won the prize."],"answerIdx":2,"hint":"Orações não-restritivas têm vírgulas e acrescentam informação extra sobre algo já identificado."},
      {"id":"gr18_a3","type":"fill","prompt":"Complete: The report ___ was submitted last week contained several errors.","answer":"that","keywords":["that","which"],"hint":"Sem vírgulas = oração restritiva; 'that' ou 'which' são aceitáveis."},
      {"id":"gr18_a4","type":"text","prompt":"Write one restrictive and one non-restrictive relative clause, explaining how the punctuation and pronoun choices differ.","keywords":["who","which","that","where","when","whose","comma","identify","add","extra"],"hint":"Restritiva: sem vírgulas, identifica o substantivo; não-restritiva: com vírgulas, acrescenta informação."}
    ]
  },
  gr19: {
    context: "As orações adverbiais de tempo são introduzidas por conjunções como 'when', 'while', 'after', 'before', 'as soon as', 'until', 'by the time', 'once' e 'as'. Uma regra fundamental é que após essas conjunções temporais, usamos o presente simples ou perfeito para referir ao futuro, nunca 'will': 'I'll call you when I arrive' (não 'when I will arrive').",
    acts: [
      {"id":"gr19_a1","type":"tf","prompt":"'I will text you as soon as I will get home' is correct.","answer":false,"hint":"Após conjunções temporais ('as soon as', 'when', 'before', etc.), use Present Simple para o futuro."},
      {"id":"gr19_a2","type":"mc","prompt":"Which sentence is grammatically correct?","options":["Call me when you will finish.","Call me when you finish.","Call me when you finished.","Call me when you have been finishing."],"answerIdx":1,"hint":"Após 'when' em contexto futuro, use o Present Simple."},
      {"id":"gr19_a3","type":"fill","prompt":"Complete: We can leave ___ (as soon as) everyone ___ (arrive).","answer":"as soon as / arrives","keywords":["as soon as","arrives"],"hint":"Conjunção temporal + Present Simple para referir-se ao futuro."},
      {"id":"gr19_a4","type":"text","prompt":"Write two sentences with time clauses: one using 'before' and one using 'after', both referring to future events.","keywords":["before","after","when","until","as soon as","once","arrive","finish","leave","start"],"hint":"Lembre-se: nas orações temporais que referem ao futuro, use o Present Simple, não 'will'."}
    ]
  },
  gr20: {
    context: "As orações adverbiais de causa são introduzidas por 'because', 'since', 'as' e 'due to the fact that', enquanto as de resultado usam 'so', 'therefore', 'consequently', 'as a result', 'such...that' e 'so...that'. A distinção entre 'because' (causa direta) e 'since/as' (causa pressuposta ou menos enfática) é sutil mas importante em registros formais.",
    acts: [
      {"id":"gr20_a1","type":"tf","prompt":"'The concert was cancelled due to it rained' is a correct sentence.","answer":false,"hint":"'Due to' é preposição e deve ser seguida de substantivo ou gerúndio: 'due to the rain' ou 'because it rained'."},
      {"id":"gr20_a2","type":"mc","prompt":"Which sentence correctly expresses a result?","options":["It was so cold that we stayed inside.","It was such cold that we stayed inside.","It was so much cold we stayed inside.","It was such a cold that we stayed inside."],"answerIdx":0,"hint":"'So + adjetivo + that' para resultado; 'such + (a/an) + adjetivo + substantivo + that'."},
      {"id":"gr20_a3","type":"fill","prompt":"Complete: ___ she had studied all night, she passed the exam with distinction.","answer":"Since / Because / As","keywords":["Since","Because","As"],"hint":"'Since', 'as' e 'because' introduzem orações causais; no início da frase, 'since' e 'as' são mais formais."},
      {"id":"gr20_a4","type":"text","prompt":"Write two sentences: one expressing a reason with 'because' or 'since', and one expressing a result with 'so...that' or 'such...that'.","keywords":["because","since","as","so","such","that","result","reason","therefore","consequently"],"hint":"Causa: because/since/as + oração; resultado: so + adj + that, ou such + noun phrase + that."}
    ]
  },
  gr21: {
    context: "As orações adverbiais de concessão expressam um contraste ou obstáculo inesperado. São introduzidas por 'although', 'even though', 'though', 'while', 'whereas' e 'despite/in spite of'. 'Although' e 'even though' introduzem orações verbais, enquanto 'despite' e 'in spite of' são preposições seguidas de substantivo ou gerúndio. Confundir esses padrões é um erro muito comum.",
    acts: [
      {"id":"gr21_a1","type":"tf","prompt":"'Despite she was tired, she kept working' is grammatically correct.","answer":false,"hint":"'Despite' é preposição: 'Despite being tired' ou use 'Although she was tired'."},
      {"id":"gr21_a2","type":"mc","prompt":"Which sentence correctly expresses concession?","options":["Although of the noise, she slept well.","Despite she was nervous, she spoke confidently.","Even though it was cold, they went for a walk.","In spite she failed, she tried again."],"answerIdx":2,"hint":"'Even though' introduz uma oração verbal completa sem preposição adicional."},
      {"id":"gr21_a3","type":"fill","prompt":"Complete: ___ (in spite of) the heavy traffic, she arrived on time.","answer":"In spite of","keywords":["In spite of","Despite"],"hint":"'In spite of' + substantivo/gerúndio; 'although' + oração verbal."},
      {"id":"gr21_a4","type":"text","prompt":"Write two sentences showing concession: one with 'although' and one with 'in spite of'.","keywords":["although","even though","in spite of","despite","however","still","nevertheless","but","yet"],"hint":"Although + oração; in spite of/despite + substantivo ou gerúndio."}
    ]
  },
  gr22: {
    context: "As orações adverbiais de condição vão além do simples 'if' e incluem 'unless' (a não ser que), 'provided that', 'as long as', 'on condition that', 'supposing', 'in case' e 'even if'. Cada um adiciona uma nuance diferente: 'unless' equivale a 'if not', enquanto 'in case' expressa precaução para uma possibilidade futura, não uma condição.",
    acts: [
      {"id":"gr22_a1","type":"tf","prompt":"'Unless you don't hurry, you'll miss the train' is correct.","answer":false,"hint":"'Unless' já inclui a negação ('if not'); 'Unless you hurry, you'll miss the train' é o correto."},
      {"id":"gr22_a2","type":"mc","prompt":"Which sentence correctly uses 'in case'?","options":["Take an umbrella in case it rains.","Take an umbrella in case it will rain.","Take an umbrella in case if it rains.","Take an umbrella in case of it rains."],"answerIdx":0,"hint":"'In case' + Present Simple para precaução futura; não use 'will' após 'in case'."},
      {"id":"gr22_a3","type":"fill","prompt":"Complete: You can borrow my car ___ (as long as) you ___ (return) it by 6 p.m.","answer":"as long as / return","keywords":["as long as","return"],"hint":"'As long as' = 'desde que'; seguido de Present Simple para condição futura."},
      {"id":"gr22_a4","type":"text","prompt":"Write two conditional sentences using 'unless' and 'provided that' to show different nuances.","keywords":["unless","provided that","as long as","in case","supposing","even if","condition","if not","requirement"],"hint":"Unless = if not; provided that/as long as = com a condição de que."}
    ]
  },
  gr23: {
    context: "As cláusulas participiais usam o particípio presente (-ing) ou passado (particípio passado regular ou irregular) para reduzir orações adverbiais ou adjetivas. O participio presente indica ação simultânea ou anterior próxima ao sujeito principal ('Walking home, she noticed something strange'), enquanto o participio passado indica passividade ('Exhausted by the journey, he slept immediately').",
    acts: [
      {"id":"gr23_a1","type":"tf","prompt":"'Having finished the report, it was sent to the manager' is a correct participial clause.","answer":false,"hint":"O sujeito implícito do participio deve ser o mesmo do verbo principal; aqui 'it' não terminou o relatório."},
      {"id":"gr23_a2","type":"mc","prompt":"Choose the sentence with a correctly attached participial clause:","options":["Walking down the street, a dog bit me.","Walking down the street, I noticed a new café.","Walking down the street, the rain started.","Walking down the street, my phone rang."],"answerIdx":1,"hint":"O sujeito do participio ('I') deve ser o mesmo do verbo principal."},
      {"id":"gr23_a3","type":"fill","prompt":"Reduce to a participial clause: 'Because she was exhausted, she went straight to bed.'","answer":"Exhausted, she went straight to bed.","keywords":["Exhausted","Being exhausted","Having been exhausted"],"hint":"Participio passado no início da frase substitui a oração de causa com sujeito igual."},
      {"id":"gr23_a4","type":"text","prompt":"Write two sentences using participial clauses: one with a present participle and one with a past participle.","keywords":["walking","having","knowing","exhausted","surprised","pleased","finished","seeing","done","completed"],"hint":"Presente (-ing): ação simultânea; passado (particípio): ação anterior ou voz passiva."}
    ]
  },
  gr24: {
    context: "As cláusulas absolutas (absolute clauses) são estruturas participiais que têm seu próprio sujeito, diferente do sujeito da oração principal. Elas modificam a oração inteira, não apenas um elemento, e são separadas por vírgula. São muito comuns em inglês escrito formal e literário: 'The sun having set, they decided to make camp'. Esse recurso adiciona sofisticação e precisão à escrita.",
    acts: [
      {"id":"gr24_a1","type":"tf","prompt":"'Weather permitting, we will hold the event outdoors' contains an absolute clause.","answer":true,"hint":"'Weather permitting' tem seu próprio sujeito ('weather') e funciona como cláusula absoluta."},
      {"id":"gr24_a2","type":"mc","prompt":"Which sentence contains a correct absolute clause?","options":["The task finished, he went home.","Having finished the task, he went home.","Finished the task, he went home.","He finished the task, going home."],"answerIdx":0,"hint":"Cláusula absoluta: sujeito próprio + participio, separada por vírgula da oração principal."},
      {"id":"gr24_a3","type":"fill","prompt":"Complete with an absolute clause: ___ (the/meeting/end), everyone returned to their offices.","answer":"The meeting having ended","keywords":["The meeting having ended","The meeting over","The meeting ended"],"hint":"Cláusula absoluta: sujeito próprio + particípio presente ou passado."},
      {"id":"gr24_a4","type":"text","prompt":"Write two sentences with absolute clauses, one formal and one more literary in style.","keywords":["having","over","done","completed","the sun","weather","all things","his work","being","considered"],"hint":"Cláusula absoluta = sujeito diferente do principal + participio, separado por vírgula."}
    ]
  },
  gr25: {
    context: "A inversão para ênfase (inversion) coloca auxiliar ou verbo antes do sujeito para dar ênfase ou para atender regras estilísticas formais. É obrigatória após advérbios negativos ou restritivos no início da frase: 'Never have I seen', 'Rarely does she complain', 'Not only did he lie, but he also...'. Esse recurso é predominante em inglês formal, literário e retórico.",
    acts: [
      {"id":"gr25_a1","type":"tf","prompt":"'Rarely she complains about anything' is correct when using inversion for emphasis.","answer":false,"hint":"Após 'rarely' no início da frase, é necessária a inversão: 'Rarely does she complain'."},
      {"id":"gr25_a2","type":"mc","prompt":"Which sentence correctly uses inversion?","options":["Never I have seen such bravery.","Never have I seen such bravery.","Never I seen such bravery.","Never saw I such bravery."],"answerIdx":1,"hint":"Inversão: advérbio negativo + auxiliar + sujeito + verbo principal."},
      {"id":"gr25_a3","type":"fill","prompt":"Complete: Not only ___ (she/arrive) late, but she also forgot to bring the documents.","answer":"did she arrive","keywords":["did she arrive"],"hint":"Após 'not only' no início da frase: auxiliar 'did' + sujeito + verbo base."},
      {"id":"gr25_a4","type":"text","prompt":"Write two sentences using inversion for emphasis: one with 'not only...but also' and one with 'seldom'.","keywords":["not only","but also","seldom","rarely","never","hardly","did","have","does","inversion"],"hint":"Inversão após advérbios negativos/restritivos: auxiliar + sujeito + verbo."}
    ]
  },
  gr26: {
    context: "As frases clivadas (cleft sentences) destacam um elemento específico da frase. 'It-cleft': 'It was John who called' (ênfase no sujeito). 'Wh-cleft' ou pseudo-cleft: 'What I need is more time' (ênfase no que é necessário). As clivadas são recursos retóricos poderosos que redirecionam o foco do interlocutor e são muito usadas em inglês formal e jornalístico.",
    acts: [
      {"id":"gr26_a1","type":"tf","prompt":"'It is what I need more time' is a correct cleft sentence.","answer":false,"hint":"It-cleft: 'It is more time that I need'; wh-cleft: 'What I need is more time'."},
      {"id":"gr26_a2","type":"mc","prompt":"'She wants a promotion.' Transform this into a cleft for emphasis on what she wants:","options":["It is she who wants a promotion.","What she wants is a promotion.","It is a promotion that she is wanting.","What is she wanting is a promotion."],"answerIdx":1,"hint":"Wh-cleft (pseudo-cleft): What + sujeito + verbo + is/are + elemento enfatizado."},
      {"id":"gr26_a3","type":"fill","prompt":"Complete the it-cleft: ___ was in 1969 ___ humans first landed on the moon.","answer":"It / that","keywords":["It","that"],"hint":"It-cleft: It + be + elemento enfatizado + that/who + resto da frase."},
      {"id":"gr26_a4","type":"text","prompt":"Write one it-cleft and one wh-cleft sentence based on the idea: 'I really want to improve my English.'","keywords":["It is","What I","that","who","want","need","really","emphasis","focus","cleft"],"hint":"It-cleft enfatiza um elemento específico; wh-cleft enfatiza o predicado ou objeto."}
    ]
  },
  gr27: {
    context: "O fronting (ou topicalização) é o recurso de mover um elemento da frase para o início com fins de ênfase ou contraste. Diferente da inversão, o fronting não exige necessariamente mudança na ordem sujeito-verbo: 'This book, I really love.' No entanto, quando adjuntos adverbiais negativos são frontados, a inversão se torna obrigatória. O fronting é comum em discurso e escrita expressiva.",
    acts: [
      {"id":"gr27_a1","type":"tf","prompt":"'This story I have never heard before' is an example of fronting.","answer":true,"hint":"'This story' foi movido para o início da frase (frontado) para dar ênfase ao objeto."},
      {"id":"gr27_a2","type":"mc","prompt":"Which sentence uses fronting for contrast or emphasis?","options":["I like coffee but not tea.","Coffee I like, but tea I can't stand.","I can't stand tea, but coffee I like.","Both B and C use fronting."],"answerIdx":3,"hint":"Tanto B quanto C movem o objeto para o início da frase para criar contraste — ambos usam fronting."},
      {"id":"gr27_a3","type":"fill","prompt":"Front the object for emphasis: 'I would never do such a thing.'","answer":"Such a thing I would never do.","keywords":["Such a thing","never","would"],"hint":"Mova o objeto para o início; com expressões negativas, considere a inversão."},
      {"id":"gr27_a4","type":"text","prompt":"Write two sentences using fronting: one fronting a direct object and one fronting an adverb or adjective phrase.","keywords":["this","that","such","here","there","never","always","extremely","front","emphasis","contrast"],"hint":"Fronting: mova qualquer elemento para o início da frase para dar ênfase ou criar contraste."}
    ]
  },
  gr28: {
    context: "A elipse omite palavras que podem ser inferidas pelo contexto ('I can swim and she can too' — omite 'swim'). A substituição usa palavras como 'so', 'do so', 'one/ones' e 'neither' para evitar repetição ('I think so', 'I did so', 'the red one'). Esses recursos tornam o discurso mais fluido e natural, sendo características marcantes do inglês falado e escrito de alto nível.",
    acts: [
      {"id":"gr28_a1","type":"tf","prompt":"'I haven't finished, and neither has she' correctly uses ellipsis and substitution.","answer":true,"hint":"'Neither has she' substitui 'she hasn't finished' — combinação de substituição e elipse."},
      {"id":"gr28_a2","type":"mc","prompt":"Choose the response that correctly uses a substitute form:","options":["— Did she call? — Yes, she did call.","— Did she call? — Yes, she did.","— Did she call? — Yes, she called.","— Did she call? — Yes, she does."],"answerIdx":1,"hint":"'Yes, she did' usa o auxiliar 'did' como substituto do verbo principal, evitando repetição."},
      {"id":"gr28_a3","type":"fill","prompt":"Complete avoiding repetition: 'I want to go home, and so ___ Tom.'","answer":"does","keywords":["does"],"hint":"'So + auxiliar + sujeito' para concordância afirmativa sem repetir o verbo."},
      {"id":"gr28_a4","type":"text","prompt":"Write a short dialogue (two exchanges) using ellipsis and substitution to avoid repetition naturally.","keywords":["so","neither","nor","one","ones","do so","did","does","either","too","already"],"hint":"Use 'so/neither + auxiliar + sujeito' e 'one/ones' para substituir substantivos já mencionados."}
    ]
  },
  gr29: {
    context: "O uso avançado dos artigos em inglês vai além da regra básica: o artigo definido 'the' é usado com superlativos, instrumentos musicais, adjetivos substantivados ('the poor', 'the elderly'), e em construções únicas; o artigo zero aparece com substantivos no plural ou incontáveis em sentido genérico. Nomes próprios geralmente não levam artigo, mas rios, oceanos, cadeias de montanhas e países no plural levam 'the'.",
    acts: [
      {"id":"gr29_a1","type":"tf","prompt":"'She plays the guitar in a band and also teaches the music at school' is correct.","answer":false,"hint":"'Music' em sentido geral não leva artigo: 'teaches music'; 'the guitar' (instrumento específico) está correto."},
      {"id":"gr29_a2","type":"mc","prompt":"Which sentence uses articles correctly?","options":["The life is too short to hold grudges.","Life is too short to hold grudges.","A life is too short to hold grudges.","Life is too short to hold the grudges."],"answerIdx":1,"hint":"Substantivos abstratos em sentido genérico geralmente não levam artigo."},
      {"id":"gr29_a3","type":"fill","prompt":"Complete: ___ Nile is ___ longest river in ___ Africa.","answer":"The / the / (no article)","keywords":["The","the"],"hint":"Rios levam 'the'; superlativo leva 'the'; continentes geralmente não levam artigo."},
      {"id":"gr29_a4","type":"text","prompt":"Write two sentences that correctly use both the definite article and the zero article, explaining your choices.","keywords":["the","a","an","music","life","poor","elderly","rivers","mountains","general","specific"],"hint":"The = específico/único; artigo zero = genérico/abstrato/incontável em sentido amplo."}
    ]
  },
  gr30: {
    context: "Os determinantes 'each', 'every', 'both', 'all' e 'whole' têm diferenças sutis mas importantes. 'Each' e 'every' referem-se a membros individuais de um grupo, mas 'each' foca em indivíduos separadamente, enquanto 'every' generaliza. 'Both' refere-se a dois elementos; 'all' a três ou mais ou à totalidade. 'Whole' enfatiza a integridade ou completude, sempre precedido por artigo ou possessivo.",
    acts: [
      {"id":"gr30_a1","type":"tf","prompt":"'Both students is responsible for the project' is correct.","answer":false,"hint":"'Both' refere-se a dois e exige verbo no plural: 'Both students are responsible'."},
      {"id":"gr30_a2","type":"mc","prompt":"Which sentence correctly uses 'whole'?","options":["She ate a whole the cake.","She ate whole cake.","She ate the whole cake.","She ate whole the cake."],"answerIdx":2,"hint":"'Whole' vem depois do artigo ou possessivo: 'the whole cake', 'my whole life'."},
      {"id":"gr30_a3","type":"fill","prompt":"Complete: ___ student in the class passed the exam — not a single one failed.","answer":"Every","keywords":["Every","Each"],"hint":"'Every' generaliza todos os membros de um grupo; usado com singular."},
      {"id":"gr30_a4","type":"text","prompt":"Write sentences using each of the following: each, every, both, all, whole — showing the difference in meaning.","keywords":["each","every","both","all","whole","student","day","person","time","group","individual"],"hint":"Each: individualmente; every: generalização; both: dois; all: totalidade; whole: completude."}
    ]
  },
  gr31: {
    context: "A distinção entre 'a little/little' e 'a few/few' é fundamental: 'a little' e 'a few' têm sentido positivo (alguma quantidade), enquanto 'little' e 'few' sem artigo têm sentido negativo (quase nenhum). 'A little' acompanha substantivos incontáveis; 'a few' acompanha contáveis no plural. Confundir esses quantificadores pode inverter completamente o significado de uma frase.",
    acts: [
      {"id":"gr31_a1","type":"tf","prompt":"'There are few people who can help us' means almost nobody can help.","answer":true,"hint":"'Few' (sem 'a') indica quantidade insuficiente, quase nenhuma — sentido negativo."},
      {"id":"gr31_a2","type":"mc","prompt":"Which sentence expresses a positive amount of money available?","options":["We have little money left, so let's go.","We have a little money left, so let's go.","We have few money left, so let's go.","We have a few money left, so let's go."],"answerIdx":1,"hint":"'A little' = algum (positivo) + incontável; 'little' = quase nenhum (negativo) + incontável."},
      {"id":"gr31_a3","type":"fill","prompt":"Complete: She has ___ friends here — only two or three, but they are very close.","answer":"a few","keywords":["a few"],"hint":"Número pequeno mas suficiente/positivo com contável plural → 'a few'."},
      {"id":"gr31_a4","type":"text","prompt":"Write four short sentences: using 'little', 'a little', 'few', and 'a few', each with a clear positive or negative nuance.","keywords":["little","a little","few","a few","money","time","people","friends","hope","chance","positive","negative"],"hint":"Com artigo 'a': sentido positivo (algum/alguns); sem artigo: sentido negativo (quase nenhum)."}
    ]
  },
  gr32: {
    context: "Os pronomes reflexivos (-self/-selves) indicam que a ação recai sobre o próprio sujeito ('She hurt herself') ou servem para ênfase ('I did it myself'). Os pronomes recíprocos 'each other' e 'one another' indicam ação mútua entre dois ou mais agentes ('They love each other'). Classicamente, 'each other' era usado para dois e 'one another' para três ou mais, mas essa distinção é menos rígida no inglês moderno.",
    acts: [
      {"id":"gr32_a1","type":"tf","prompt":"'They introduced each other' and 'They introduced themselves' mean the same thing.","answer":false,"hint":"'Each other' = ação mútua (A apresentou B e B apresentou A); 'themselves' = cada um se apresentou sozinho."},
      {"id":"gr32_a2","type":"mc","prompt":"Which sentence uses a reflexive pronoun for emphasis?","options":["He hurt himself playing football.","She herself designed the entire exhibition.","They enjoyed themselves at the party.","The machine turned itself off."],"answerIdx":1,"hint":"Reflexivo de ênfase: pode ser removido sem alterar o sentido básico — 'She herself designed...'"},
      {"id":"gr32_a3","type":"fill","prompt":"Complete: The two countries have been helping ___ for decades through trade agreements.","answer":"each other","keywords":["each other","one another"],"hint":"Ação mútua entre duas partes → 'each other'; três ou mais → 'one another'."},
      {"id":"gr32_a4","type":"text","prompt":"Write two sentences: one using a reflexive pronoun for emphasis and one using a reciprocal pronoun.","keywords":["myself","yourself","himself","herself","themselves","each other","one another","mutual","emphasis","reflexive"],"hint":"Reflexivo de ênfase reforça o sujeito; recíproco indica ação mútua entre dois ou mais."}
    ]
  },
  gr33: {
    context: "Os possessivos avançados incluem o uso do caso possessivo com apóstrofo (Saxon genitive), a estrutura 'of', e os pronomes possessivos absolutos (mine, yours, his, hers, ours, theirs). O duplo possessivo ('a friend of mine') combina ambas as formas. Em inglês formal, o Saxon genitive é preferido para pessoas e o 'of' para coisas, mas exceções existem especialmente com entidades personalizadas.",
    acts: [
      {"id":"gr33_a1","type":"tf","prompt":"'The car's engine' and 'the engine of the car' are always interchangeable.","answer":false,"hint":"Geralmente, o Saxon genitive é preferido para pessoas e organismos vivos; 'of' é mais neutro para objetos, mas ambos são frequentemente aceitos."},
      {"id":"gr33_a2","type":"mc","prompt":"Which sentence uses the double possessive correctly?","options":["She is a friend of me.","She is a friend of my.","She is a friend of mine.","She is my a friend."],"answerIdx":2,"hint":"Duplo possessivo: a/an/this/that + substantivo + of + pronome possessivo absoluto."},
      {"id":"gr33_a3","type":"fill","prompt":"Complete: I was talking to a colleague ___ (of/mine) when the boss walked in.","answer":"of mine","keywords":["of mine"],"hint":"'A colleague of mine' = um colega meu (duplo possessivo)."},
      {"id":"gr33_a4","type":"text","prompt":"Write two sentences: one using the Saxon genitive (apostrophe) and one using the double possessive construction.","keywords":["'s","of mine","of his","of theirs","friend","book","idea","colleague","suggestion","plan"],"hint":"Saxon genitive: sujeito's + substantivo; duplo possessivo: a + substantivo + of + possessivo absoluto."}
    ]
  },
  gr34: {
    context: "Os comparativos e superlativos irregulares mais importantes são: good/well → better → best; bad/badly → worse → worst; much/many → more → most; little → less → least; far → farther/further → farthest/furthest. A distinção entre 'farther' (distância física) e 'further' (sentido figurado ou extensão) é relevante em inglês formal, embora 'further' seja aceito em ambos os contextos.",
    acts: [
      {"id":"gr34_a1","type":"tf","prompt":"'She sings more good than her sister' is a correct comparative sentence.","answer":false,"hint":"'Good' tem comparativo irregular: 'better', não 'more good'."},
      {"id":"gr34_a2","type":"mc","prompt":"Which sentence correctly uses an irregular comparative?","options":["He drives more bad than I do.","He drives worse than I do.","He drives more worse than I do.","He drives worst than I do."],"answerIdx":1,"hint":"'Bad' → comparativo irregular: 'worse'; superlativo: 'worst'."},
      {"id":"gr34_a3","type":"fill","prompt":"Complete: This is ___ (bad) film I have ever seen — it was absolutely terrible.","answer":"the worst","keywords":["the worst"],"hint":"Superlativo de 'bad': 'the worst'."},
      {"id":"gr34_a4","type":"text","prompt":"Write three comparative or superlative sentences using irregular forms: good, bad, and far.","keywords":["better","best","worse","worst","further","furthest","farther","farthest","much","more","most","little","less","least"],"hint":"Forme comparativos e superlativos das formas irregulares sem usar 'more' ou 'most'."}
    ]
  },
  gr35: {
    context: "A estrutura 'as...as' é usada em comparações de igualdade ('She is as tall as her brother'), enquanto 'not as...as' ou 'not so...as' indicam desigualdade. Em frases afirmativas, 'as...as' é obrigatório; 'so...as' é mais comum em frases negativas e interrogativas formais. Com a estrutura, advérbios e adjetivos aparecem entre os dois 'as'.",
    acts: [
      {"id":"gr35_a1","type":"tf","prompt":"'He is so tall as his father' is a correct affirmative comparison of equality.","answer":false,"hint":"Em afirmativas, use 'as...as': 'He is as tall as his father'. 'So...as' é mais formal e usado em negativas."},
      {"id":"gr35_a2","type":"mc","prompt":"Which sentence correctly expresses that she does not run as quickly as him?","options":["She doesn't run as quick as him.","She doesn't run as quickly as him.","She doesn't run so quick than him.","She doesn't run as quickly than him."],"answerIdx":1,"hint":"Use advérbio 'quickly' (não adjetivo 'quick') para modificar o verbo 'run'; 'as...as' com negação."},
      {"id":"gr35_a3","type":"fill","prompt":"Complete: The test wasn't ___ difficult ___ I expected.","answer":"as / as","keywords":["as","as"],"hint":"Comparação com negação: not as + adjetivo + as."},
      {"id":"gr35_a4","type":"text","prompt":"Write two sentences: one using 'as...as' to express equality and one using 'not as...as' to express inequality.","keywords":["as","as tall","as fast","as well","not as","so...as","equal","comparison","than","similar"],"hint":"Igualdade: as + adjetivo/advérbio + as; desigualdade: not as + adjetivo/advérbio + as."}
    ]
  },
  gr36: {
    context: "O comparativo duplo 'the more...the more' (quanto mais...mais) expressa que dois eventos ou qualidades aumentam ou diminuem proporcionalmente. A estrutura é: 'the + comparativo, the + comparativo + oração'. Ambas as partes usam o comparativo do adjetivo ou advérbio. Esse padrão é muito produtivo e encontrado tanto em inglês formal quanto informal.",
    acts: [
      {"id":"gr36_a1","type":"tf","prompt":"'The more you practice, the better you will become' is a correct double comparative structure.","answer":true,"hint":"Estrutura correta: the + comparativo + oração, the + comparativo + oração."},
      {"id":"gr36_a2","type":"mc","prompt":"Which sentence correctly uses the double comparative?","options":["The more she study, the smarter she gets.","The more she studies, the smarter she gets.","The more she studies, the more smarter she gets.","More she studies, smarter she gets."],"answerIdx":1,"hint":"Estrutura: The + comparativo, the + comparativo; não duplique o 'more' com adjetivos irregulares."},
      {"id":"gr36_a3","type":"fill","prompt":"Complete: ___ (hard) you work, ___ (great) your chances of success.","answer":"The harder / the greater","keywords":["The harder","the greater","the more"],"hint":"The + comparativo de 'hard' = 'the harder'; 'great' = 'the greater'."},
      {"id":"gr36_a4","type":"text","prompt":"Write two double comparative sentences on any topic of your choice.","keywords":["the more","the better","the harder","the faster","the less","the fewer","the longer","the sooner","proportional","comparative"],"hint":"The + comparativo na primeira parte, the + comparativo na segunda — ambas as partes crescem juntas."}
    ]
  },
  gr37: {
    context: "Preposições avançadas em inglês muitas vezes não têm uma tradução direta e devem ser memorizadas por contexto. Casos difíceis incluem: 'at the end' (no final de algo) vs 'in the end' (finalmente/por fim); 'in time' (a tempo) vs 'on time' (pontualmente); 'at the beginning' vs 'in the beginning'; além de preposições com adjetivos e verbos específicos que exigem preposições fixas.",
    acts: [
      {"id":"gr37_a1","type":"tf","prompt":"'She arrived in time for the meeting' means she was punctual.","answer":false,"hint":"'In time' = com tempo suficiente antes do prazo; 'on time' = pontualmente, no horário marcado."},
      {"id":"gr37_a2","type":"mc","prompt":"Which sentence uses the correct preposition?","options":["I'm not interested on politics.","I'm not interested in politics.","I'm not interested at politics.","I'm not interested by politics."],"answerIdx":1,"hint":"'Interested in' é a colocação correta; a preposição é fixa com este adjetivo."},
      {"id":"gr37_a3","type":"fill","prompt":"Complete: ___ the end, they decided to cancel the project after months of discussion.","answer":"In","keywords":["In"],"hint":"'In the end' = finalmente/por fim (resultado após deliberação); 'at the end' = ao final de algo específico."},
      {"id":"gr37_a4","type":"text","prompt":"Write two sentences that correctly use tricky prepositions: one with 'on time'/'in time' and one with a fixed adjective + preposition collocation.","keywords":["on time","in time","interested in","responsible for","afraid of","keen on","good at","depend on","rely on"],"hint":"Preposições fixas com adjetivos devem ser memorizadas; 'on time' = pontual, 'in time' = com antecedência."}
    ]
  },
  gr38: {
    context: "As frases preposicionais (prepositional phrases) funcionam como advérbios ou adjetivos e são essenciais para expressar tempo, lugar, modo, causa e outros relacionamentos. Frases como 'in spite of', 'by means of', 'in accordance with', 'on behalf of' e 'with regard to' são expressões preposicionais complexas muito usadas em inglês formal e acadêmico.",
    acts: [
      {"id":"gr38_a1","type":"tf","prompt":"'With regard to your application, we will respond shortly' is a formal prepositional phrase.","answer":true,"hint":"'With regard to' é uma frase preposicional formal equivalente a 'regarding' ou 'concerning'."},
      {"id":"gr38_a2","type":"mc","prompt":"Which prepositional phrase means 'representing someone else'?","options":["By means of","On behalf of","In accordance with","With respect to"],"answerIdx":1,"hint":"'On behalf of' = em nome de, representando alguém."},
      {"id":"gr38_a3","type":"fill","prompt":"Complete: The decision was made ___ (in accordance with) the company's new policy on remote work.","answer":"in accordance with","keywords":["in accordance with"],"hint":"'In accordance with' = de acordo com, em conformidade com."},
      {"id":"gr38_a4","type":"text","prompt":"Write two formal sentences using complex prepositional phrases such as 'in terms of', 'with regard to', or 'by means of'.","keywords":["in terms of","with regard to","by means of","on behalf of","in accordance with","in addition to","as a result of"],"hint":"Frases preposicionais complexas são marcadores de registro formal e acadêmico."}
    ]
  },
  gr39: {
    context: "Os phrasal verbs separáveis permitem a inserção do objeto entre o verbo e a partícula ('turn off the light' / 'turn the light off'), e com pronomes, a separação é obrigatória ('turn it off', nunca 'turn off it'). Os inseparáveis nunca permitem essa separação ('look after the children', nunca 'look the children after'). Conhecer essa distinção é essencial para usar phrasal verbs com precisão.",
    acts: [
      {"id":"gr39_a1","type":"tf","prompt":"'She looked the word up in the dictionary' is a correct use of a separable phrasal verb.","answer":true,"hint":"'Look up' é separável: 'look it up' ou 'look the word up' — ambos corretos."},
      {"id":"gr39_a2","type":"mc","prompt":"Which sentence is grammatically incorrect?","options":["He turned off the TV.","He turned the TV off.","He turned it off.","He turned off it."],"answerIdx":3,"hint":"Com pronomes, phrasal verbs separáveis exigem separação obrigatória: 'turned it off', não 'turned off it'."},
      {"id":"gr39_a3","type":"fill","prompt":"Complete: Can you look ___ my cat while I'm on holiday? (inseparable phrasal verb)","answer":"after","keywords":["after"],"hint":"'Look after' = cuidar de; é inseparável — o objeto sempre vem depois da partícula."},
      {"id":"gr39_a4","type":"text","prompt":"Write two sentences: one using a separable phrasal verb with a pronoun, and one using an inseparable phrasal verb with a noun.","keywords":["look after","give up","put off","bring up","look up","turn off","take after","run into","put it off","turn it on"],"hint":"Separável + pronome: verbo + pronome + partícula; inseparável: verbo + partícula + objeto (sempre junto)."}
    ]
  },
  gr40: {
    context: "Os substantivos compostos (compound nouns) em inglês podem ser escritos como uma palavra ('sunflower', 'toothbrush'), duas palavras separadas ('bus stop', 'credit card') ou com hífen ('mother-in-law', 'well-being'). A formação pode combinar: substantivo + substantivo, adjetivo + substantivo, verbo + substantivo ou partícula + substantivo. O acento tônico recai geralmente na primeira palavra.",
    acts: [
      {"id":"gr40_a1","type":"tf","prompt":"'A book store' and 'a bookstore' are always two different things.","answer":false,"hint":"'Bookstore' e 'book store' são variações da mesma palavra; 'bookstore' é mais comum no inglês americano."},
      {"id":"gr40_a2","type":"mc","prompt":"In the compound noun 'traffic light', where does the main stress fall?","options":["On 'traf-'","On 'light'","Equally on both words","On 'fic'"],"answerIdx":0,"hint":"Em substantivos compostos, o acento principal geralmente recai na primeira palavra ou sílaba."},
      {"id":"gr40_a3","type":"fill","prompt":"Form a compound noun: a room where you sleep = ___.","answer":"bedroom","keywords":["bedroom","bed room","bed-room"],"hint":"Substantivos compostos frequentemente combinam dois substantivos para criar um novo conceito."},
      {"id":"gr40_a4","type":"text","prompt":"Write four compound nouns and use two of them in sentences.","keywords":["sunglasses","toothpaste","notebook","airport","greenhouse","football","deadline","software","doorbell","raincoat"],"hint":"Substantivos compostos podem ser escritos juntos, separados ou com hífen — verifique no dicionário."}
    ]
  },
  gr41: {
    context: "Uma noun phrase (sintagma nominal) é um grupo de palavras encabeçado por um substantivo, com todos os seus modificadores: determinantes, adjetivos, cláusulas relativas, frases preposicionais e particípios. A ordem dos modificadores pré-nominais em inglês é rígida: determinante → número → opinião → tamanho → idade → forma → cor → origem → material → substantivo.",
    acts: [
      {"id":"gr41_a1","type":"tf","prompt":"'Three beautiful old large Italian wooden tables' follows the correct modifier order in English.","answer":false,"hint":"A ordem correta é: número → opinião → tamanho → idade → forma → origem → material: 'three beautiful large old Italian wooden tables'."},
      {"id":"gr41_a2","type":"mc","prompt":"Which noun phrase follows the correct adjective order?","options":["a round small old French clock","a small old round French clock","a small old French round clock","a French small old round clock"],"answerIdx":1,"hint":"Ordem: tamanho (small) → idade (old) → forma (round) → origem (French)."},
      {"id":"gr41_a3","type":"fill","prompt":"Arrange in the correct order: (Italian / old / a / beautiful / painting)","answer":"a beautiful old Italian painting","keywords":["a beautiful old Italian painting"],"hint":"Opinião (beautiful) → idade (old) → origem (Italian) → substantivo."},
      {"id":"gr41_a4","type":"text","prompt":"Write two complex noun phrases with at least four modifiers each, using the correct adjective order.","keywords":["determiner","opinion","size","age","shape","color","origin","material","noun","order","beautiful","large","old"],"hint":"Lembre da ordem: opinião → tamanho → idade → forma → cor → origem → material + substantivo."}
    ]
  },
  gr42: {
    context: "A ordem dos adjetivos em inglês segue a hierarquia DOSASCOMP: Determiner, Opinion, Size, Age, Shape, Color, Origin, Material, Purpose/qualifier. Adjetivos de opinião sempre vêm antes dos adjetivos de fato ('a lovely old red dress'). Romper essa ordem produz frases que soam estranhas para os falantes nativos, mesmo que sejam gramaticalmente defensáveis.",
    acts: [
      {"id":"gr42_a1","type":"tf","prompt":"'A wooden big brown box' follows the natural English adjective order.","answer":false,"hint":"A ordem correta coloca tamanho antes de cor e origem antes de material: 'a big brown wooden box'."},
      {"id":"gr42_a2","type":"mc","prompt":"Which phrase has the correct adjective order?","options":["a red lovely silk scarf","a lovely red silk scarf","a silk lovely red scarf","a lovely silk red scarf"],"answerIdx":1,"hint":"Opinião (lovely) → cor (red) → material (silk) → substantivo."},
      {"id":"gr42_a3","type":"fill","prompt":"Put in order: (new / an / sports / amazing / Japanese / car)","answer":"an amazing new Japanese sports car","keywords":["an amazing new Japanese sports car"],"hint":"Opinião (amazing) → idade (new) → origem (Japanese) → qualificador/propósito (sports)."},
      {"id":"gr42_a4","type":"text","prompt":"Write two noun phrases each containing at least three adjectives in the correct order, then explain your ordering choices.","keywords":["opinion","size","age","shape","color","origin","material","purpose","order","natural","English","adjective"],"hint":"Memorize a sigla OSASCOMP para lembrar a ordem: Opinion, Size, Age, Shape, Color, Origin, Material, Purpose."}
    ]
  },
  gr43: {
    context: "Os advérbios modificadores (modifying adverbs) intensificam ou atenuam adjetivos e outros advérbios. Intensificadores como 'very', 'extremely', 'incredibly', 'absolutely' têm diferentes graus de força. Alguns adjetivos são 'ungradable' (absolutos como 'perfect', 'impossible', 'unique') e só aceitam intensificadores como 'absolutely', 'completely', 'utterly' — nunca 'very'.",
    acts: [
      {"id":"gr43_a1","type":"tf","prompt":"'The view was very perfect' is a natural and correct English sentence.","answer":false,"hint":"'Perfect' é um adjetivo absoluto/extremo; use 'absolutely perfect', não 'very perfect'."},
      {"id":"gr43_a2","type":"mc","prompt":"Which combination is correct?","options":["absolutely tired","utterly exhausted","very brilliant","completely perfect"],"answerIdx":1,"hint":"'Exhausted' é um adjetivo extremo; 'utterly' é um intensificador forte adequado para ele."},
      {"id":"gr43_a3","type":"fill","prompt":"Complete: The performance was ___ (absolutely/very) brilliant — the audience gave a standing ovation.","answer":"absolutely","keywords":["absolutely"],"hint":"'Brilliant' pode ser adjetivo extremo; 'absolutely' é mais forte e natural que 'very' nesse contexto."},
      {"id":"gr43_a4","type":"text","prompt":"Write two sentences: one using a gradable adjective with an intensifier, and one using an ungradable adjective with the appropriate booster.","keywords":["very","extremely","quite","fairly","absolutely","completely","totally","utterly","perfect","impossible","huge","tired","exhausted"],"hint":"Adjetivos graduáveis: very/extremely; adjetivos absolutos/extremos: absolutely/completely/utterly."}
    ]
  },
  gr44: {
    context: "Os advérbios de frase (sentence adverbs) modificam a sentença inteira, não apenas o verbo, e expressam a atitude ou perspectiva do falante sobre o enunciado. Exemplos: 'Frankly, I don't agree'; 'Honestly, that surprised me'; 'Clearly, the plan failed'. Esses advérbios são separados por vírgula do resto da frase e têm função pragmática e discursiva muito diferente dos advérbios comuns.",
    acts: [
      {"id":"gr44_a1","type":"tf","prompt":"In 'He drove surprisingly fast', 'surprisingly' is a sentence adverb.","answer":false,"hint":"'Surprisingly' aqui modifica o advérbio 'fast', não a sentença inteira — é um advérbio modificador, não de frase."},
      {"id":"gr44_a2","type":"mc","prompt":"Which sentence uses a sentence adverb correctly?","options":["She frankly spoke the truth.","Frankly, she spoke the truth.","She spoke frankly the truth.","Frankly she spoke truth."],"answerIdx":1,"hint":"Advérbio de frase no início da sentença, seguido de vírgula, modifica toda a proposição."},
      {"id":"gr44_a3","type":"fill","prompt":"Complete: ___, the project was delivered on time despite all the difficulties. (use a sentence adverb showing surprise)","answer":"Surprisingly","keywords":["Surprisingly","Remarkably","Amazingly"],"hint":"Advérbio de frase mostrando surpresa: 'Surprisingly', 'Remarkably', 'Amazingly' + vírgula."},
      {"id":"gr44_a4","type":"text","prompt":"Write two sentences using different sentence adverbs (e.g., honestly, clearly, unfortunately, obviously) to express your stance.","keywords":["frankly","honestly","clearly","obviously","unfortunately","surprisingly","apparently","admittedly","evidently","naturally"],"hint":"Advérbios de frase ficam no início (com vírgula) ou no meio da frase, expressando a atitude do falante."}
    ]
  },
  gr45: {
    context: "Os advérbios de ligação (linking adverbs) conectam ideias entre frases ou parágrafos, expressando relações de contraste ('however', 'nevertheless', 'on the other hand'), adição ('furthermore', 'moreover', 'in addition'), causa/resultado ('therefore', 'consequently', 'as a result') e exemplificação ('for instance', 'for example', 'namely'). São fundamentais para a coesão textual em escrita acadêmica e formal.",
    acts: [
      {"id":"gr45_a1","type":"tf","prompt":"'He was tired. However, he kept working' and 'He was tired, however, he kept working' are both punctuated correctly.","answer":false,"hint":"Com advérbio de ligação entre orações independentes, use ponto ou ponto-e-vírgula antes e vírgula depois; vírgula sozinha cria 'comma splice'."},
      {"id":"gr45_a2","type":"mc","prompt":"Which linking adverb best shows a logical result?","options":["However","Moreover","Therefore","Nevertheless"],"answerIdx":2,"hint":"'Therefore' = por isso, logo — indica resultado lógico ou conclusão."},
      {"id":"gr45_a3","type":"fill","prompt":"Complete: The company lost money last year; ___, they decided to cut costs significantly.","answer":"consequently","keywords":["consequently","therefore","as a result","thus"],"hint":"Resultado de uma causa anterior: 'consequently', 'therefore', 'thus', 'as a result'."},
      {"id":"gr45_a4","type":"text","prompt":"Write a short paragraph of three sentences connected by linking adverbs (use contrast, addition, and result).","keywords":["however","moreover","therefore","furthermore","consequently","nevertheless","in addition","on the other hand","thus","as a result"],"hint":"Use ponto ou ponto-e-vírgula antes do advérbio de ligação e vírgula após ele."}
    ]
  },
  gr46: {
    context: "Os modais perfeitos (modal + have + particípio passado) expressam deduções, arrependimentos e possibilidades sobre o passado. 'Should have done' indica que algo deveria ter sido feito mas não foi; 'could have done' indica possibilidade não realizada; 'might have done' e 'may have done' expressam possibilidade ou especulação; 'must have done' indica dedução lógica sobre o passado.",
    acts: [
      {"id":"gr46_a1","type":"tf","prompt":"'You must have been very tired after the marathon' expresses a logical deduction about the past.","answer":true,"hint":"'Must have + particípio' = dedução lógica sobre o passado baseada em evidências."},
      {"id":"gr46_a2","type":"mc","prompt":"Which sentence expresses regret or criticism about a past action?","options":["She could have been a doctor.","She should have studied harder.","She might have passed the exam.","She must have known about it."],"answerIdx":1,"hint":"'Should have + particípio' = crítica ou arrependimento sobre algo que não foi feito."},
      {"id":"gr46_a3","type":"fill","prompt":"Complete: He looks pale — he ___ (must/be) ill all weekend.","answer":"must have been","keywords":["must have been"],"hint":"Dedução lógica sobre estado no passado: must have been."},
      {"id":"gr46_a4","type":"text","prompt":"Write three sentences using should have, could have, and might have — each expressing a different nuance (regret, missed opportunity, speculation).","keywords":["should have","could have","might have","must have","done","said","told","gone","been","realized","known"],"hint":"Should have: arrependimento; could have: possibilidade não realizada; might have: especulação."}
    ]
  },
  gr47: {
    context: "As estruturas negativas em inglês incluem 'neither...nor', 'not...either', 'nor' e 'neither' como respostas. Quando 'neither' ou 'nor' iniciam uma cláusula de concordância negativa, a inversão é necessária: 'She can't swim, and neither can I.' / 'She doesn't like coffee, and nor do I.' 'Not...either' é a alternativa sem inversão: 'She doesn't like coffee, and I don't either.'",
    acts: [
      {"id":"gr47_a1","type":"tf","prompt":"'Neither do I like coffee nor I like tea' is grammatically correct.","answer":false,"hint":"'Neither...nor' conecta elementos paralelos: 'I like neither coffee nor tea' ou 'Neither coffee nor tea appeals to me'."},
      {"id":"gr47_a2","type":"mc","prompt":"Which response correctly agrees with 'I don't enjoy horror movies'?","options":["Neither do I.","Neither I do.","Nor I do.","I don't either."],"answerIdx":0,"hint":"'Neither do I' = nem eu (concordância negativa com inversão); 'I don't either' também está correto."},
      {"id":"gr47_a3","type":"fill","prompt":"Complete: He hasn't finished the report, and ___ has she.","answer":"neither","keywords":["neither","nor"],"hint":"'Neither + auxiliar + sujeito' para concordância negativa com inversão."},
      {"id":"gr47_a4","type":"text","prompt":"Write two sentences expressing negative agreement: one using 'neither...nor' and one using 'not...either'.","keywords":["neither","nor","not","either","can't","doesn't","haven't","never","inversion","negative","agreement"],"hint":"Neither/nor + inversão; not...either sem inversão — ambos expressam concordância negativa."}
    ]
  },
  gr48: {
    context: "A formação de perguntas em inglês segue padrões específicos: perguntas sim/não (auxiliar + sujeito + verbo), perguntas com pronome interrogativo (wh-word + auxiliar + sujeito), question tags (oposto da oração principal), perguntas indiretas (ordem afirmativa) e perguntas de sujeito (the subject question, como 'Who called?' sem inversão). Cada tipo tem sua própria estrutura.",
    acts: [
      {"id":"gr48_a1","type":"tf","prompt":"'Who did call you last night?' is the correct form of a subject question.","answer":false,"hint":"Perguntas de sujeito com 'who' não usam auxiliar 'did': 'Who called you last night?'"},
      {"id":"gr48_a2","type":"mc","prompt":"Which is a correct question tag for 'She never lies'?","options":["does she?","doesn't she?","She does, does she?","She lies, doesn't she?"],"answerIdx":0,"hint":"'Never' é negativo, então a tag deve ser afirmativa: 'She never lies, does she?'"},
      {"id":"gr48_a3","type":"fill","prompt":"Form an indirect question: 'Where does she work?' → Can you tell me ___ ?","answer":"where she works","keywords":["where she works"],"hint":"Pergunta indireta: wh-word + ordem afirmativa (sujeito + verbo), sem auxiliar."},
      {"id":"gr48_a4","type":"text","prompt":"Write four types of questions about the same topic (yes/no, wh-question, tag question, indirect question).","keywords":["do","does","did","who","what","where","when","why","how","isn't it","don't they","can you tell me","I wonder"],"hint":"Cada tipo de pergunta tem sua própria estrutura; perguntas indiretas usam ordem afirmativa."}
    ]
  },
  gr49: {
    context: "As perguntas retóricas (rhetorical questions) não esperam resposta — são usadas para enfatizar um ponto, provocar reflexão ou expressar ironia. Em inglês, elas têm a estrutura de uma pergunta mas a função de uma afirmação. São comuns em discursos, debates, escrita persuasiva e conversação informal. A entonação é frequentemente diferente da de uma pergunta genuína.",
    acts: [
      {"id":"gr49_a1","type":"tf","prompt":"'Isn't it obvious that we need change?' is a rhetorical question expecting a detailed answer.","answer":false,"hint":"Perguntas retóricas não esperam resposta — servem para enfatizar um ponto óbvio."},
      {"id":"gr49_a2","type":"mc","prompt":"Which sentence is a rhetorical question?","options":["What time does the meeting start?","Could you help me with this?","Who in their right mind would do such a thing?","Have you seen my keys?"],"answerIdx":2,"hint":"'Who in their right mind...' não espera resposta — é uma expressão de incredulidade retórica."},
      {"id":"gr49_a3","type":"fill","prompt":"Complete the rhetorical question: What's the point of ___ if nobody listens?","answer":"talking","keywords":["talking","arguing","trying","complaining"],"hint":"Perguntas retóricas frequentemente implicam uma resposta óbvia ou expressar frustração."},
      {"id":"gr49_a4","type":"text","prompt":"Write two rhetorical questions: one to emphasize a point and one to express irony or frustration.","keywords":["what's the point","who would","isn't it","how could","don't you think","what could be","when will","surely","obvious","rhetorical"],"hint":"Perguntas retóricas têm forma de pergunta mas função de afirmação enfática; não esperam resposta."}
    ]
  },
  gr50: {
    context: "As frases exclamativas (exclamatory sentences) em inglês são formadas com 'What' + (a/an) + adjetivo + substantivo + sujeito + verbo ('What a beautiful day it is!') ou 'How' + adjetivo/advérbio + sujeito + verbo ('How quickly she runs!'). A ordem é muito específica e difere do português. Em inglês informal, o verbo e o sujeito são frequentemente omitidos.",
    acts: [
      {"id":"gr50_a1","type":"tf","prompt":"'How a beautiful house!' is a correct exclamatory sentence in English.","answer":false,"hint":"'How' é seguido de adjetivo/advérbio sem artigo; 'What a beautiful house!' seria a forma correta aqui."},
      {"id":"gr50_a2","type":"mc","prompt":"Which exclamatory sentence is correct?","options":["What she is tall!","How tall is she!","How tall she is!","What tall she is!"],"answerIdx":2,"hint":"'How + adjetivo + sujeito + verbo' é a estrutura correta: 'How tall she is!'"},
      {"id":"gr50_a3","type":"fill","prompt":"Complete: ___ a terrible waste of time that was!","answer":"What","keywords":["What"],"hint":"'What + a/an + adjetivo + substantivo + sujeito + verbo' — usa 'what', não 'how'."},
      {"id":"gr50_a4","type":"text","prompt":"Write two exclamatory sentences: one using 'What' and one using 'How', based on something you feel strongly about.","keywords":["What a","What an","How beautiful","How fast","How incredible","What an amazing","What a pity","How sad","exclamation","emphasis"],"hint":"What + (a/an) + adj + noun; How + adj/adv + subject + verb."}
    ]
  },
  gr51: {
    context: "O modo imperativo em inglês é formado com o verbo na forma base, sem sujeito. Pode ser negativo ('Don't touch that'), enfatizado ('Do be careful!'), ou dirigido a terceiros com 'let' ('Let her speak', 'Let's go'). Formas mais formais ou educadas incluem 'Would you kindly...', 'Would you mind...ing', e o imperativo com 'please'. O imperativo em 'let' tem formas distintas para inclusão e exclusão do falante.",
    acts: [
      {"id":"gr51_a1","type":"tf","prompt":"'Don't you worry about that' is a correct negative imperative form in English.","answer":true,"hint":"Embora incomum, 'Don't you + verb' é uma forma enfática do imperativo negativo, usada para tranquilizar."},
      {"id":"gr51_a2","type":"mc","prompt":"Which sentence uses the emphatic affirmative imperative correctly?","options":["You do sit down, please.","Do sit down, please.","Please you sit down.","Sit you down, please."],"answerIdx":1,"hint":"Imperativo enfático afirmativo: 'do + verbo base'; adiciona ênfase ou insistência educada."},
      {"id":"gr51_a3","type":"fill","prompt":"Complete with the correct imperative: ___ (let/we) start the meeting — everyone is here.","answer":"Let's","keywords":["Let's"],"hint":"'Let's + verbo base' = inclusão do falante; 'Let + pronome/nome + verbo' = direcionado a outros."},
      {"id":"gr51_a4","type":"text","prompt":"Write three imperative sentences: one affirmative, one negative, and one using 'let', covering different registers (informal, formal, polite).","keywords":["please","don't","let's","do","be","would you","kindly","mind","stop","come","sit","wait","let her","let them"],"hint":"Imperativo simples: verbo base; enfático: do + verbo; negativo: don't + verbo; com 'let': let + obj + verbo."}
    ]
  },
  gr52: {
    context: "O subjuntivo em inglês é frequentemente ignorado por aprendizes, mas é muito usado em contextos formais e literários. O presente do subjuntivo usa a forma base do verbo para todas as pessoas ('It is essential that he be present'; 'She demanded that he apologize'). O subjuntivo passado usa 'were' para todas as pessoas ('If I were you...'). São estruturas distintas do indicativo.",
    acts: [
      {"id":"gr52_a1","type":"tf","prompt":"'If I was you, I would apologize' is considered more formal than 'If I were you'.","answer":false,"hint":"'Were' é a forma do subjuntivo para todas as pessoas; 'If I were you' é a forma formal correta."},
      {"id":"gr52_a2","type":"mc","prompt":"Which sentence correctly uses the present subjunctive?","options":["It is vital that she is present.","It is vital that she be present.","It is vital that she was present.","It is vital that she being present."],"answerIdx":1,"hint":"Subjuntivo presente após expressões de necessidade/importância: that + sujeito + verbo base (sem 's')."},
      {"id":"gr52_a3","type":"fill","prompt":"Complete: The committee recommended that each member ___ (submit) their report by Friday.","answer":"submit","keywords":["submit"],"hint":"Subjuntivo presente: forma base do verbo, sem '-s' para terceira pessoa do singular."},
      {"id":"gr52_a4","type":"text","prompt":"Write two sentences using the subjunctive: one in a conditional (were) and one after a verb of necessity or recommendation.","keywords":["were","be","submit","attend","that","if","recommend","suggest","essential","vital","necessary","important"],"hint":"Subjuntivo passado: were para todas as pessoas; subjuntivo presente: forma base do verbo."}
    ]
  },
  gr53: {
    context: "Estruturas formais na escrita em inglês incluem: o uso de passiva, subjuntivo, inversão, nominalizações (transformar verbos em substantivos: 'discuss' → 'discussion'), frases preposicionais complexas e a preferência por vocabulário latinizado ('commence' em vez de 'start'). O registro formal evita contrações, coloquialismos e phrasal verbs de sentido informal.",
    acts: [
      {"id":"gr53_a1","type":"tf","prompt":"'We talked about the issue' is more appropriate in formal academic writing than 'The issue was discussed'.","answer":false,"hint":"Na escrita formal, prefira voz passiva e nominalizações: 'The issue was discussed' é mais formal."},
      {"id":"gr53_a2","type":"mc","prompt":"Which sentence is most appropriate for a formal report?","options":["We got the results we wanted.","The desired results were obtained.","We ended up getting what we wanted.","Things worked out the way we hoped."],"answerIdx":1,"hint":"Escrita formal: voz passiva, vocabulário preciso, sem contrações ou coloquialismos."},
      {"id":"gr53_a3","type":"fill","prompt":"Make this sentence more formal: 'We need to look into the problem more carefully.' → 'A more thorough ___ of the problem is required.'","answer":"investigation","keywords":["investigation","examination","analysis"],"hint":"Nominalização: substitua phrasal verbs e verbos simples por substantivos formais derivados."},
      {"id":"gr53_a4","type":"text","prompt":"Rewrite this informal paragraph formally: 'We've found out that lots of people can't get access to the service. We need to fix this fast.'","keywords":["it has been found","numerous","individuals","unable","access","addressed","urgently","required","formal","passive"],"hint":"Formal: passiva, nominalizações, vocabulário latinizado, sem contrações e sem phrasal verbs informais."}
    ]
  },
  gr54: {
    context: "A linguagem de atenuação (hedging) é usada para fazer afirmações mais cautelosas, menos absolutas e mais acadêmicas. Recursos de hedging incluem: modais epistêmicos ('may', 'might', 'could'), verbos como 'seem', 'appear', 'tend', 'suggest', expressões como 'it is possible that', 'there is evidence to suggest' e advérbios como 'apparently', 'generally', 'typically'. É essencial na escrita científica e acadêmica.",
    acts: [
      {"id":"gr54_a1","type":"tf","prompt":"'The results prove that exercise definitely causes happiness' is an example of good academic hedging.","answer":false,"hint":"Afirmação muito absoluta; hedging adequado: 'The results suggest that exercise may contribute to happiness.'"},
      {"id":"gr54_a2","type":"mc","prompt":"Which sentence best demonstrates hedging in academic writing?","options":["This drug cures cancer.","This drug might have the potential to treat some forms of cancer.","This drug definitely doesn't cure cancer.","Nobody knows if this drug works."],"answerIdx":1,"hint":"Hedging: modal de possibilidade + expressão de potencial + especificação parcial."},
      {"id":"gr54_a3","type":"fill","prompt":"Add hedging: 'Stress causes health problems.' → 'Stress ___ (appear) to be a contributing factor to various health problems.'","answer":"appears","keywords":["appears","seems","may appear"],"hint":"'Appear to' é um verbo de hedging que suaviza a afirmação sem negar a possibilidade."},
      {"id":"gr54_a4","type":"text","prompt":"Rewrite this overclaimed sentence using appropriate hedging language: 'Social media destroys teenagers' mental health.'","keywords":["may","might","could","suggest","appear","seem","evidence","tend","some","possible","contribute","associated"],"hint":"Substitua afirmações absolutas por linguagem modal, expressões tentativas e qualificadores."}
    ]
  },
  gr55: {
    context: "As colocações de verbo + substantivo (verb + noun collocations) são combinações que os falantes nativos usam naturalmente e que não podem ser traduzidas literalmente. Exemplos: 'make a decision' (não 'do a decision'), 'take a risk', 'reach a conclusion', 'pay attention', 'hold a meeting', 'give advice'. O aprendizado de colocações é essencial para soar natural em inglês.",
    acts: [
      {"id":"gr55_a1","type":"tf","prompt":"'Do a mistake' is an acceptable collocation in standard English.","answer":false,"hint":"A colocação correta é 'make a mistake', não 'do a mistake'."},
      {"id":"gr55_a2","type":"mc","prompt":"Which verb collocates correctly with 'a decision'?","options":["do","have","make","take"],"answerIdx":2,"hint":"'Make a decision' é a colocação padrão em inglês."},
      {"id":"gr55_a3","type":"fill","prompt":"Complete: We need to ___ a meeting to discuss the budget before the end of the month.","answer":"hold","keywords":["hold","have","arrange","schedule"],"hint":"'Hold a meeting' é a colocação mais formal; 'have a meeting' também é aceita."},
      {"id":"gr55_a4","type":"text","prompt":"Write four sentences using these verb + noun collocations correctly: make progress, take action, reach an agreement, give a speech.","keywords":["make progress","take action","reach agreement","give speech","make","take","reach","give","hold","pay","draw","raise"],"hint":"Colocações não podem ser traduzidas literalmente — aprenda-as como unidades fixas."}
    ]
  },
  gr56: {
    context: "As colocações de adjetivo + substantivo (adjective + noun collocations) são igualmente importantes para soar natural. Exemplos: 'strong coffee' (não 'powerful coffee'), 'heavy rain' (não 'strong rain'), 'rich experience' (não 'rich history' — embora 'rich' possa ocorrer com 'history' em alguns contextos), 'deep sleep', 'bitter disappointment', 'golden opportunity'. Cada adjetivo tem seus parceiros fixos.",
    acts: [
      {"id":"gr56_a1","type":"tf","prompt":"'A strong rain fell all day' is a natural English collocation.","answer":false,"hint":"'Rain' coloca-se com 'heavy', não 'strong': 'heavy rain'."},
      {"id":"gr56_a2","type":"mc","prompt":"Which is the correct collocation?","options":["a powerful tea","a strong tea","a heavy tea","a deep tea"],"answerIdx":1,"hint":"'Tea' e 'coffee' colocam-se com 'strong' para indicar concentração intensa."},
      {"id":"gr56_a3","type":"fill","prompt":"Complete: She missed a ___ (golden/bright) opportunity to study abroad when she was younger.","answer":"golden","keywords":["golden"],"hint":"'Golden opportunity' é uma colocação fixa que significa uma chance rara e valiosa."},
      {"id":"gr56_a4","type":"text","prompt":"Write four sentences using these adjective + noun collocations: heavy traffic, bitter cold, deep sleep, strong evidence.","keywords":["heavy","bitter","deep","strong","traffic","cold","sleep","evidence","golden","rich","sharp","keen"],"hint":"Colocações adjetivo + substantivo são fixas; aprenda quais adjetivos combinam com quais substantivos."}
    ]
  },
  gr57: {
    context: "Os prefixos em inglês modificam o significado das palavras de maneiras previsíveis. Prefixos de negação incluem: 'un-' (unhappy), 'dis-' (disagree), 'in-/im-/ir-/il-' (incorrect, impossible, irregular, illegal), 'non-' (non-profit), 'mis-' (misunderstand). Prefixos de tamanho e grau: 'over-' (overcook), 'under-' (underestimate), 'super-' (supermarket). Conhecer prefixos expande o vocabulário de forma sistemática.",
    acts: [
      {"id":"gr57_a1","type":"tf","prompt":"'Irresponsible', 'impatient', and 'illegal' all use the same prefix with different spellings due to phonetic assimilation.","answer":true,"hint":"'In-' assimila-se ao som da letra seguinte: ir- antes de r, im- antes de p/b/m, il- antes de l."},
      {"id":"gr57_a2","type":"mc","prompt":"Which word uses the prefix 'mis-' correctly?","options":["mislead","misimportant","misrespect","mispolite"],"answerIdx":0,"hint":"'Mis-' indica ação incorreta ou errada: mislead (enganar), misunderstand, misbehave."},
      {"id":"gr57_a3","type":"fill","prompt":"Add the correct negative prefix: 'She was completely ___ (patient) during the long wait.'","answer":"impatient","keywords":["impatient"],"hint":"'In-' torna-se 'im-' antes de palavras que começam com p, b ou m."},
      {"id":"gr57_a4","type":"text","prompt":"Write four words using four different negative prefixes (un-, dis-, in-/im-/ir-/il-, mis-) and use two of them in sentences.","keywords":["un-","dis-","im-","il-","ir-","mis-","unhappy","disagree","impossible","illegal","irresponsible","misunderstand"],"hint":"Escolha o prefixo negativo correto com base na origem e som da palavra-base."}
    ]
  },
  gr58: {
    context: "Os sufixos em inglês criam novas classes de palavras a partir de raízes existentes. Sufixos nominais: '-tion/-sion' (information, decision), '-ness' (happiness), '-ity' (creativity), '-ment' (development), '-er/-or' (teacher, actor). Sufixos adjetivais: '-ful' (useful), '-less' (careless), '-ous' (famous), '-ive' (creative), '-able/-ible' (comfortable, responsible). Sufixos verbais: '-ize/-ise' (organize), '-en' (strengthen).",
    acts: [
      {"id":"gr58_a1","type":"tf","prompt":"'Beautiness' is a correctly formed English noun.","answer":false,"hint":"O sufixo correto para 'beauty' como substantivo já é 'beauty'; para o adjetivo 'beautiful', o substantivo seria 'beautifulness' (raro) ou simplesmente 'beauty'."},
      {"id":"gr58_a2","type":"mc","prompt":"Which word is formed correctly using a suffix?","options":["helpness","helpment","helpful","helpous"],"answerIdx":2,"hint":"'-ful' adiciona o sentido de 'cheio de/que proporciona': helpful, useful, powerful."},
      {"id":"gr58_a3","type":"fill","prompt":"Form a noun from the adjective 'creative': 'The ___ of young artists is remarkable.'","answer":"creativity","keywords":["creativity"],"hint":"'Creative' → 'creativity' usando o sufixo '-ity' (troca '-ive' por '-ivity')."},
      {"id":"gr58_a4","type":"text","prompt":"Form new words using suffixes from these roots: develop, responsible, organize, strong. Use two of them in sentences.","keywords":["development","responsibility","organization","strength","tion","ity","ment","ness","ize","en","able","ful"],"hint":"Sufixos mudam a classe gramatical; aprenda as combinações mais produtivas em inglês."}
    ]
  },
  gr59: {
    context: "Palavras frequentemente confundidas em inglês incluem pares como: 'affect' (verbo: influenciar) vs 'effect' (substantivo: efeito); 'complement' (completar) vs 'compliment' (elogiar); 'principle' (princípio/valor) vs 'principal' (principal/diretor); 'stationary' (parado) vs 'stationery' (papelaria); 'practice' (substantivo em inglês britânico, também verbo no americano) vs 'practise' (verbo em inglês britânico).",
    acts: [
      {"id":"gr59_a1","type":"tf","prompt":"'The new policy will effect great changes in the company' uses 'effect' correctly.","answer":false,"hint":"Aqui 'effect' é usado como verbo (raramente correto); o mais comum seria: 'will have a great effect on' ou 'will affect the company greatly'."},
      {"id":"gr59_a2","type":"mc","prompt":"Which sentence uses 'complement' correctly?","options":["She complimented her friend on the dress.","The wine complements the meal perfectly.","He gave her a sweet complement.","She complemented her on her cooking."],"answerIdx":1,"hint":"'Complement' (sem i) = completar ou harmonizar; 'compliment' = elogiar."},
      {"id":"gr59_a3","type":"fill","prompt":"Complete: The school ___ (principal/principle) reminded students of the school's core ___ (principal/principle) of respect.","answer":"principal / principle","keywords":["principal","principle"],"hint":"'Principal' = cargo ou adjetivo 'principal'; 'principle' = valor ou regra fundamental."},
      {"id":"gr59_a4","type":"text","prompt":"Write two sentences correctly using one word from each pair: affect/effect and stationary/stationery.","keywords":["affect","effect","stationary","stationery","complement","compliment","principal","principle","practice","practise"],"hint":"Memorize a diferença: affect (verbo), effect (substantivo); stationary (parado), stationery (material de escritório)."}
    ]
  },
  gr60: {
    context: "O registro linguístico refere-se ao nível de formalidade da linguagem. O inglês formal usa vocabulário latinizado, passiva, orações completas e estruturas complexas; o informal usa coloquialismos, contrações, phrasal verbs e frases mais curtas. Exemplos de contraste: 'commence' (formal) vs 'start' (informal); 'I was wondering if you could assist me' (formal) vs 'Can you help me?' (informal). Adaptar o registro ao contexto é uma marca de proficiência avançada.",
    acts: [
      {"id":"gr60_a1","type":"tf","prompt":"'Could you assist me in resolving this matter at your earliest convenience?' is informal English.","answer":false,"hint":"Essa frase é altamente formal; o equivalente informal seria 'Can you help me sort this out soon?'"},
      {"id":"gr60_a2","type":"mc","prompt":"Which expression is most appropriate in a formal business email?","options":["Just wanted to touch base about our meeting.","I'm writing with regard to our forthcoming meeting.","Hey, let's chat about the meeting soon.","FYI, we have a meeting coming up."],"answerIdx":1,"hint":"Registro formal em e-mails: frases completas, vocabulário formal, saudações e estrutura adequadas."},
      {"id":"gr60_a3","type":"fill","prompt":"Replace the informal word with a formal equivalent: 'We need to ___ (find out) the cause of the problem.' → 'We need to ___ the cause of the problem.'","answer":"investigate","keywords":["investigate","determine","ascertain","identify"],"hint":"Phrasal verbs informais frequentemente têm equivalentes formais de origem latina ou francesa."},
      {"id":"gr60_a4","type":"text","prompt":"Write the same message in two registers: first informally to a friend, then formally to a professor, about missing a class.","keywords":["sorry","apologize","couldn't make it","was unable to attend","let you know","inform","catch up","obtain the materials","missed","absence"],"hint":"Formal: frases completas, vocabulário latinizado, sem contrações; informal: contrações, coloquialismos, phrasal verbs."}
    ]
  },
  ac1: {
    context: "A escrita acadêmica difere da escrita cotidiana em tom, vocabulário e estrutura. Textos acadêmicos são formais, objetivos e baseados em evidências. Compreender essas diferenças é essencial para produzir trabalhos universitários de qualidade.",
    acts: [
      {"id":"ac1_a1","type":"tf","prompt":"Academic writing uses the same informal tone as everyday conversation.","answer":false,"hint":"Escrita acadêmica é formal e objetiva, diferente da linguagem cotidiana."},
      {"id":"ac1_a2","type":"mc","prompt":"Which sentence is most appropriate for academic writing?","options":["This idea is totally wrong.","The theory lacks empirical support.","Nobody really believes this anymore.","It's pretty clear this doesn't work."],"answerIdx":1,"hint":"Procure a opção mais formal e baseada em evidências."},
      {"id":"ac1_a3","type":"fill","prompt":"Complete with a formal expression: The study ___ that further research is needed.","answer":"indicates","keywords":["indicates","suggests","demonstrates","reveals"],"hint":"Use um verbo formal que introduza uma conclusão de pesquisa."},
      {"id":"ac1_a4","type":"text","prompt":"Rewrite this sentence in academic style: 'People think this idea is really good.'","keywords":["researchers","scholars","suggest","propose","acknowledge","widely","regarded"],"hint":"Substitua linguagem informal por expressões acadêmicas formais."}
    ]
  },
  ac2: {
    context: "Em textos acadêmicos, contrações como 'don't', 'can't' e 'it's' devem ser evitadas. Sempre use as formas completas: 'do not', 'cannot', 'it is'. Esse cuidado demonstra formalidade e precisão na escrita.",
    acts: [
      {"id":"ac2_a1","type":"tf","prompt":"Contractions like 'don't' and 'can't' are acceptable in formal academic writing.","answer":false,"hint":"Contrações são informais e devem ser evitadas em textos acadêmicos."},
      {"id":"ac2_a2","type":"mc","prompt":"Which version is correct for academic writing?","options":["The results weren't conclusive.","The results were not conclusive.","Results weren't that clear.","The results didn't show much."],"answerIdx":1,"hint":"Escolha a opção que usa a forma completa e linguagem mais formal."},
      {"id":"ac2_a3","type":"fill","prompt":"Replace the contraction: The data ___ support this conclusion.","answer":"does not","keywords":["does not","did not","cannot","do not"],"hint":"Evite contrações — use a forma negativa completa."},
      {"id":"ac2_a4","type":"text","prompt":"Rewrite without contractions: 'It's clear that we can't ignore the findings and shouldn't dismiss them.'","keywords":["it is","cannot","should not","evident","clear","findings","dismiss"],"hint":"Substitua cada contração pela sua forma completa correspondente."}
    ]
  },
  ac3: {
    context: "O vocabulário acadêmico em inglês inclui muitas palavras de origem latina, como 'demonstrate', 'utilize' e 'indicate'. Essas palavras conferem precisão e formalidade ao texto. Evite palavras simples e coloquiais quando existem equivalentes mais formais.",
    acts: [
      {"id":"ac3_a1","type":"tf","prompt":"Latinate words such as 'demonstrate' and 'utilize' are preferred in academic writing over simpler synonyms.","answer":true,"hint":"Palavras de origem latina são mais formais e comuns em contextos acadêmicos."},
      {"id":"ac3_a2","type":"mc","prompt":"Which word is the most appropriate Latinate equivalent of 'use' in academic writing?","options":["use","employ","grab","pick"],"answerIdx":1,"hint":"'Employ' é a alternativa mais formal e acadêmica para 'use'."},
      {"id":"ac3_a3","type":"fill","prompt":"Choose the more formal word: The experiment ___ the validity of the theory.","answer":"demonstrated","keywords":["demonstrated","confirmed","established","substantiated"],"hint":"Use um verbo de origem latina que significa 'mostrar claramente'."},
      {"id":"ac3_a4","type":"text","prompt":"Replace informal words with formal Latinate equivalents: 'The study helped us find out what causes the problem.'","keywords":["facilitated","identify","ascertain","determine","investigate","cause","factor"],"hint":"Substitua 'helped', 'find out' e 'causes' por palavras mais formais de origem latina."}
    ]
  },
  ac4: {
    context: "Frases em textos acadêmicos tendem a ser mais longas e complexas, com uso de subordinação e coordenação. No entanto, clareza é fundamental — frases excessivamente longas podem confundir o leitor. O equilíbrio entre complexidade e clareza é a marca da boa escrita acadêmica.",
    acts: [
      {"id":"ac4_a1","type":"tf","prompt":"In academic writing, longer sentences are always better than shorter ones.","answer":false,"hint":"Clareza é essencial — frases longas demais podem prejudicar a compreensão."},
      {"id":"ac4_a2","type":"mc","prompt":"Which sentence best demonstrates appropriate academic sentence structure?","options":["The test worked.","Although the sample size was limited, the results provided valuable preliminary insights.","The results were good because we tested things.","We did the experiment and it went okay."],"answerIdx":1,"hint":"Procure a frase que usa subordinação e linguagem formal de maneira equilibrada."},
      {"id":"ac4_a3","type":"fill","prompt":"Complete the sentence: ___ the data were inconclusive, the researchers continued the investigation.","answer":"Although","keywords":["Although","Despite","Even though","Whilst"],"hint":"Use uma conjunção subordinativa que indica contraste ou concessão."},
      {"id":"ac4_a4","type":"text","prompt":"Combine these two sentences into one academic sentence: 'The study was conducted. The results were surprising.'","keywords":["conducted","revealed","which","although","findings","surprising","unexpected","yielded"],"hint":"Use uma conjunção ou pronome relativo para combinar as frases de forma elegante."}
    ]
  },
  ac5: {
    context: "A frase-tópico é a primeira frase de um parágrafo acadêmico e apresenta a ideia principal que será desenvolvida. Ela deve ser clara, específica e diretamente relacionada à tese do texto. Uma boa frase-tópico orienta o leitor sobre o conteúdo do parágrafo.",
    acts: [
      {"id":"ac5_a1","type":"tf","prompt":"A topic sentence should present the main idea of the entire essay, not just the paragraph.","answer":false,"hint":"A frase-tópico apresenta a ideia principal do parágrafo, não do ensaio inteiro."},
      {"id":"ac5_a2","type":"mc","prompt":"Which is the best topic sentence for a paragraph about the effects of social media on mental health?","options":["Social media exists.","There are many things about social media.","Excessive social media use has been linked to increased rates of anxiety and depression.","People use social media a lot nowadays."],"answerIdx":2,"hint":"A melhor frase-tópico é específica e apresenta uma afirmação que pode ser desenvolvida."},
      {"id":"ac5_a3","type":"fill","prompt":"A topic sentence introduces the ___ idea of a paragraph.","answer":"main","keywords":["main","central","primary","key"],"hint":"Pense na função principal da frase-tópico no parágrafo."},
      {"id":"ac5_a4","type":"text","prompt":"Write a topic sentence for a paragraph about the benefits of regular exercise on academic performance.","keywords":["exercise","academic","performance","improve","enhance","research","suggests","demonstrates","benefits"],"hint":"Sua frase-tópico deve ser uma afirmação clara e específica que pode ser sustentada com evidências."}
    ]
  },
  ac6: {
    context: "As frases de suporte em um parágrafo acadêmico desenvolvem a ideia apresentada na frase-tópico. Elas incluem evidências, exemplos, dados e explicações que fundamentam o argumento. A coerência entre a frase-tópico e as frases de suporte é essencial para um parágrafo eficaz.",
    acts: [
      {"id":"ac6_a1","type":"tf","prompt":"Supporting sentences in a paragraph should introduce new, unrelated ideas to make the paragraph more interesting.","answer":false,"hint":"As frases de suporte devem desenvolver a ideia da frase-tópico, não introduzir ideias novas e não relacionadas."},
      {"id":"ac6_a2","type":"mc","prompt":"Which sentence would best serve as a supporting sentence for a topic sentence about pollution causing health problems?","options":["Pollution is bad.","Cars are a common form of transport.","Studies have shown that prolonged exposure to air pollutants increases the risk of respiratory disease.","The environment is important to protect."],"answerIdx":2,"hint":"A melhor frase de suporte fornece evidências específicas e relevantes."},
      {"id":"ac6_a3","type":"fill","prompt":"Supporting sentences provide ___, examples, and explanations to develop the main idea.","answer":"evidence","keywords":["evidence","data","proof","support"],"hint":"Pense no tipo de informação que sustenta um argumento acadêmico."},
      {"id":"ac6_a4","type":"text","prompt":"Write two supporting sentences for this topic sentence: 'Regular reading improves vocabulary and comprehension skills.'","keywords":["research","studies","show","demonstrate","vocabulary","comprehension","readers","exposure","language","evidence"],"hint":"Use evidências ou exemplos específicos para desenvolver a afirmação da frase-tópico."}
    ]
  },
  ac7: {
    context: "A frase de conclusão encerra o parágrafo acadêmico, resumindo a ideia principal ou conectando-a ao argumento mais amplo do texto. Ela não deve introduzir informações novas, mas sim reforçar o ponto desenvolvido. Uma boa frase de conclusão dá ao leitor uma sensação de fechamento.",
    acts: [
      {"id":"ac7_a1","type":"tf","prompt":"A concluding sentence in a paragraph should introduce a new argument to lead into the next paragraph.","answer":false,"hint":"A frase de conclusão deve encerrar o parágrafo, não introduzir novas ideias."},
      {"id":"ac7_a2","type":"mc","prompt":"Which is the most effective concluding sentence for a paragraph about the negative effects of fast food on health?","options":["In conclusion, fast food exists everywhere.","Therefore, the consumption of fast food represents a significant contributor to diet-related health issues.","Fast food is bad and we should not eat it.","Next, we will discuss exercise."],"answerIdx":1,"hint":"A melhor frase de conclusão resume o argumento de forma formal e coerente."},
      {"id":"ac7_a3","type":"fill","prompt":"A concluding sentence often begins with a transition such as ___ or 'therefore'.","answer":"thus","keywords":["thus","consequently","hence","accordingly"],"hint":"Pense em advérbios de conclusão que sinalizam o encerramento de um argumento."},
      {"id":"ac7_a4","type":"text","prompt":"Write a concluding sentence for a paragraph that argued that technology has transformed modern education.","keywords":["thus","therefore","consequently","transformed","education","technology","clear","evident","demonstrates"],"hint":"Resuma o argumento principal do parágrafo sem introduzir informações novas."}
    ]
  },
  ac8: {
    context: "Um ensaio acadêmico típico é composto por três partes: introdução, desenvolvimento (body) e conclusão. A introdução apresenta o tema e a tese; o desenvolvimento apresenta e sustenta os argumentos; a conclusão resume as ideias e oferece considerações finais. Conhecer essa estrutura é fundamental para organizar textos acadêmicos.",
    acts: [
      {"id":"ac8_a1","type":"tf","prompt":"The body of an essay is where the thesis statement is usually presented for the first time.","answer":false,"hint":"A tese é apresentada na introdução, não no desenvolvimento."},
      {"id":"ac8_a2","type":"mc","prompt":"What is the correct order of the main sections in a standard academic essay?","options":["Body, Introduction, Conclusion","Introduction, Conclusion, Body","Conclusion, Body, Introduction","Introduction, Body, Conclusion"],"answerIdx":3,"hint":"Pense na ordem lógica de um ensaio: apresentação, desenvolvimento, encerramento."},
      {"id":"ac8_a3","type":"fill","prompt":"The ___ of an essay presents the main arguments with supporting evidence.","answer":"body","keywords":["body","main body","development","central section"],"hint":"Qual seção do ensaio contém os parágrafos de argumento?"},
      {"id":"ac8_a4","type":"text","prompt":"Briefly describe the purpose of each section of a standard academic essay: introduction, body, and conclusion.","keywords":["introduction","thesis","body","arguments","evidence","conclusion","summarize","restate","purpose","present"],"hint":"Explique o papel de cada uma das três seções principais de um ensaio acadêmico."}
    ]
  },
  ac9: {
    context: "A frase de abertura (hook) é a primeira sentença da introdução e tem o objetivo de capturar a atenção do leitor. Pode ser uma pergunta instigante, uma estatística surpreendente, uma citação relevante ou uma afirmação provocativa. Um bom hook motiva o leitor a continuar lendo.",
    acts: [
      {"id":"ac9_a1","type":"tf","prompt":"A hook sentence at the beginning of an essay is used to provide the thesis statement.","answer":false,"hint":"O hook capta a atenção do leitor; a tese vem depois, ainda na introdução."},
      {"id":"ac9_a2","type":"mc","prompt":"Which of the following is the most effective hook sentence for an essay about climate change?","options":["This essay is about climate change.","Climate change is a topic many people discuss.","By 2050, rising sea levels may displace over 200 million people worldwide.","I will now explain what climate change is."],"answerIdx":2,"hint":"O hook mais eficaz usa um dado impactante para despertar o interesse do leitor."},
      {"id":"ac9_a3","type":"fill","prompt":"A hook can be a surprising statistic, a thought-provoking question, or a compelling ___.","answer":"quotation","keywords":["quotation","quote","anecdote","statement"],"hint":"Pense em outros tipos de abertura que chamam a atenção do leitor."},
      {"id":"ac9_a4","type":"text","prompt":"Write a hook sentence for an essay about the impact of artificial intelligence on employment.","keywords":["million","jobs","replaced","automation","predicted","forecast","question","imagine","consider"],"hint":"Use uma estatística, uma pergunta ou uma afirmação impactante para iniciar o ensaio."}
    ]
  },
  ac10: {
    context: "Após o hook, a introdução deve fornecer informações de contexto sobre o tema e culminar com a tese. O contexto ajuda o leitor a compreender a relevância do assunto, enquanto a tese apresenta a posição ou argumento central do ensaio. Essa progressão lógica orienta o leitor desde o início.",
    acts: [
      {"id":"ac10_a1","type":"tf","prompt":"Background information in an introduction should be so detailed that it covers most of the essay's content.","answer":false,"hint":"O contexto deve ser breve e servir apenas para introduzir o tema antes da tese."},
      {"id":"ac10_a2","type":"mc","prompt":"Where in the introduction is the thesis statement typically placed?","options":["At the very beginning","In the middle","At the end","It is not placed in the introduction"],"answerIdx":2,"hint":"A tese geralmente aparece no final da introdução, após o contexto."},
      {"id":"ac10_a3","type":"fill","prompt":"Background information in an introduction helps to ___ the topic for the reader.","answer":"contextualize","keywords":["contextualize","introduce","frame","establish"],"hint":"Pense no objetivo das informações de contexto na introdução."},
      {"id":"ac10_a4","type":"text","prompt":"Write 2–3 sentences of background information for an essay about the rise of online education.","keywords":["technology","internet","access","universities","traditional","learning","pandemic","grown","increasingly"],"hint":"Apresente o contexto histórico ou social do tema antes de introduzir sua tese."}
    ]
  },
  ac11: {
    context: "A declaração de tese (thesis statement) apresenta o argumento central ou a posição do autor no ensaio. Ela deve ser clara, específica e contestável — ou seja, não deve ser um fato óbvio. Uma boa tese orienta toda a estrutura argumentativa do texto.",
    acts: [
      {"id":"ac11_a1","type":"tf","prompt":"A thesis statement should be a widely accepted fact that no one can disagree with.","answer":false,"hint":"Uma boa tese é contestável e apresenta uma posição ou argumento específico."},
      {"id":"ac11_a2","type":"mc","prompt":"Which of the following is the most effective thesis statement?","options":["This essay is about social media.","Social media has both advantages and disadvantages.","Although social media facilitates communication, its addictive design poses serious risks to adolescent mental health.","Social media is used by many people around the world."],"answerIdx":2,"hint":"A melhor tese é específica, contestável e indica a direção do argumento."},
      {"id":"ac11_a3","type":"fill","prompt":"A thesis statement presents the central ___ or position of the essay.","answer":"argument","keywords":["argument","claim","position","assertion"],"hint":"Pense no propósito principal de uma declaração de tese."},
      {"id":"ac11_a4","type":"text","prompt":"Write a thesis statement for an essay arguing that governments should invest more in renewable energy.","keywords":["governments","invest","renewable","energy","argue","because","economic","environmental","long-term","benefits"],"hint":"Sua tese deve apresentar uma posição clara e indicar os principais argumentos do ensaio."}
    ]
  },
  ac12: {
    context: "No parágrafo de desenvolvimento, o argumento deve ser apresentado de forma clara e sustentado por evidências. A estrutura típica segue o modelo P-E-E: Point (ponto), Evidence (evidência) e Explanation (explicação). Cada parágrafo deve desenvolver apenas um argumento principal.",
    acts: [
      {"id":"ac12_a1","type":"tf","prompt":"A body paragraph in an academic essay should develop multiple unrelated arguments to cover more ground.","answer":false,"hint":"Cada parágrafo de desenvolvimento deve focar em um único argumento principal."},
      {"id":"ac12_a2","type":"mc","prompt":"What does the 'E-E' in the P-E-E paragraph model stand for?","options":["Example and Ending","Evidence and Explanation","Elaboration and Essay","Effect and Evaluation"],"answerIdx":1,"hint":"Após apresentar o ponto, você deve fornecer evidências e explicá-las."},
      {"id":"ac12_a3","type":"fill","prompt":"After stating your argument, you should provide ___ to support it.","answer":"evidence","keywords":["evidence","proof","support","data"],"hint":"O que sustenta um argumento em um parágrafo acadêmico?"},
      {"id":"ac12_a4","type":"text","prompt":"Write a body paragraph arguing that bilingual education improves cognitive skills. Use a point, evidence, and explanation.","keywords":["bilingual","cognitive","research","studies","suggest","demonstrate","therefore","consequently","skills","children"],"hint":"Siga o modelo P-E-E: apresente seu argumento, forneça evidências e explique a conexão."}
    ]
  },
  ac13: {
    context: "Em textos acadêmicos, argumentos devem ser sustentados por evidências concretas, como dados estatísticos, resultados de pesquisa e exemplos relevantes. A qualidade das evidências determina a força do argumento. É importante apresentar exemplos de forma integrada ao texto, não apenas listá-los.",
    acts: [
      {"id":"ac13_a1","type":"tf","prompt":"Personal opinions alone are sufficient evidence in academic writing.","answer":false,"hint":"Evidências acadêmicas devem ser baseadas em dados, pesquisas ou fontes confiáveis."},
      {"id":"ac13_a2","type":"mc","prompt":"Which phrase best introduces evidence in academic writing?","options":["I think that...","According to Smith (2021),...","Everyone knows that...","It is obvious that..."],"answerIdx":1,"hint":"Evidências acadêmicas são atribuídas a fontes específicas e confiáveis."},
      {"id":"ac13_a3","type":"fill","prompt":"For example, ___ illustrates how renewable energy can reduce carbon emissions.","answer":"solar power","keywords":["solar power","wind energy","this case","this study"],"hint":"Use um exemplo específico para ilustrar seu argumento."},
      {"id":"ac13_a4","type":"text","prompt":"Write a sentence that introduces a piece of evidence for the argument that exercise reduces stress.","keywords":["research","study","demonstrates","shows","found","suggests","participants","reduced","stress","exercise"],"hint":"Apresente a evidência de forma integrada, atribuindo-a a uma fonte ou estudo."}
    ]
  },
  ac14: {
    context: "Citações diretas devem ser integradas ao texto de forma fluente e sempre acompanhadas de referência à fonte. Usar as palavras exatas de outro autor entre aspas é aceitável, mas o excesso de citações diretas pode prejudicar a originalidade do texto. A integração correta demonstra domínio das fontes.",
    acts: [
      {"id":"ac14_a1","type":"tf","prompt":"Direct quotations can be used without any citation as long as the ideas are well-known.","answer":false,"hint":"Toda citação direta deve ser acompanhada da referência à fonte original."},
      {"id":"ac14_a2","type":"mc","prompt":"Which sentence correctly integrates a quotation?","options":["\"Education is the key to success.\"","According to Johnson (2020), \"education remains the most powerful tool for social change\" (p. 45).","Education is the key (p. 45).","Johnson says education is important."],"answerIdx":1,"hint":"Uma citação integrada corretamente inclui um verbo introdutório, aspas e referência à fonte."},
      {"id":"ac14_a3","type":"fill","prompt":"As Brown (2019) ___: 'Critical thinking is essential for academic success.'","answer":"argues","keywords":["argues","states","notes","claims","asserts"],"hint":"Use um verbo de citação para integrar a fala do autor ao seu texto."},
      {"id":"ac14_a4","type":"text","prompt":"Write a sentence that integrates the following quotation: 'Technology has reshaped the modern classroom.' (Davis, 2022, p. 12)","keywords":["Davis","2022","argues","states","notes","technology","classroom","according","reshaped"],"hint":"Use um verbo introdutório e inclua a referência completa ao integrar a citação."}
    ]
  },
  ac15: {
    context: "Parafrasear significa expressar as ideias de outro autor com suas próprias palavras, mantendo o significado original. Uma boa paráfrase vai além de simplesmente substituir palavras — ela reformula a estrutura da frase. A referência à fonte ainda é obrigatória mesmo em paráfrases.",
    acts: [
      {"id":"ac15_a1","type":"tf","prompt":"Paraphrasing means copying a source's sentences and replacing a few words with synonyms.","answer":false,"hint":"Parafrasear exige uma reformulação genuína da estrutura e do vocabulário da frase original."},
      {"id":"ac15_a2","type":"mc","prompt":"Which is a correct paraphrase of: 'Children who read regularly develop stronger language skills'?","options":["Children who read regularly develop stronger language skills (Smith, 2020).","Regular reading habits have been shown to enhance linguistic development in children (Smith, 2020).","Kids who read a lot get better at language (Smith, 2020).","Reading is good for children's language (Smith, 2020)."],"answerIdx":1,"hint":"Uma boa paráfrase mantém o significado, mas reformula completamente a estrutura e o vocabulário."},
      {"id":"ac15_a3","type":"fill","prompt":"When paraphrasing, you must still provide a ___ to acknowledge the original source.","answer":"citation","keywords":["citation","reference","source","credit"],"hint":"Paráfrases também exigem atribuição à fonte original."},
      {"id":"ac15_a4","type":"text","prompt":"Paraphrase this sentence: 'Global temperatures have risen significantly over the past century due to human activity.' (IPCC, 2021)","keywords":["human","activity","contributed","increased","temperatures","century","significantly","caused","risen","globally"],"hint":"Reformule completamente a estrutura da frase, mantendo o significado e incluindo a referência."}
    ]
  },
  ac16: {
    context: "Resumir uma fonte significa apresentar as ideias principais de um texto mais longo em suas próprias palavras de forma concisa. Diferente da paráfrase, que foca em uma passagem específica, o resumo abrange o texto completo ou uma seção maior. A referência à fonte é sempre necessária.",
    acts: [
      {"id":"ac16_a1","type":"tf","prompt":"A summary covers the main ideas of an entire text, whereas a paraphrase focuses on a specific passage.","answer":true,"hint":"Resumo cobre o texto completo; paráfrase reformula uma passagem específica."},
      {"id":"ac16_a2","type":"mc","prompt":"What is the main purpose of summarizing a source in academic writing?","options":["To quote the source directly","To present key ideas concisely in your own words","To copy the source's structure","To avoid citing the source"],"answerIdx":1,"hint":"O objetivo do resumo é apresentar as ideias principais de forma concisa e com suas próprias palavras."},
      {"id":"ac16_a3","type":"fill","prompt":"A good summary captures the ___ ideas of a source without unnecessary detail.","answer":"main","keywords":["main","key","central","essential"],"hint":"O resumo deve ser conciso e focar nas ideias mais importantes."},
      {"id":"ac16_a4","type":"text","prompt":"Write a two-sentence summary of an article that argues technology is both beneficial and harmful to education.","keywords":["technology","education","benefits","drawbacks","argues","however","both","positive","negative","concludes"],"hint":"Apresente as ideias principais do texto de forma equilibrada e concisa, com suas próprias palavras."}
    ]
  },
  ac17: {
    context: "A conclusão de um ensaio acadêmico começa retomando a tese com novas palavras. Isso não significa copiar a tese original — o autor deve reformulá-la à luz dos argumentos apresentados. Essa estratégia reforça a coerência do texto e lembra o leitor do argumento central.",
    acts: [
      {"id":"ac17_a1","type":"tf","prompt":"In the conclusion, the thesis should be copied word for word from the introduction.","answer":false,"hint":"A tese deve ser retomada com novas palavras, não copiada literalmente."},
      {"id":"ac17_a2","type":"mc","prompt":"Which sentence effectively restates a thesis about renewable energy in a conclusion?","options":["This essay was about renewable energy.","In conclusion, the transition to renewable energy sources is essential for sustainable development.","Renewable energy is good.","I have discussed renewable energy in this essay."],"answerIdx":1,"hint":"A retomada da tese deve ser formal, reformulada e refletir os argumentos desenvolvidos."},
      {"id":"ac17_a3","type":"fill","prompt":"In the conclusion, the thesis is ___, not simply repeated.","answer":"restated","keywords":["restated","reformulated","paraphrased","rephrased"],"hint":"Como a tese deve aparecer novamente na conclusão?"},
      {"id":"ac17_a4","type":"text","prompt":"Restate this thesis in the conclusion: 'Social media negatively affects teenagers' self-esteem by promoting unrealistic beauty standards.'","keywords":["therefore","thus","evident","social media","teenagers","self-esteem","unrealistic","standards","impact","demonstrated"],"hint":"Reformule a tese com novas palavras, refletindo os argumentos do ensaio."}
    ]
  },
  ac18: {
    context: "Após retomar a tese, a conclusão deve oferecer considerações finais que ampliem o alcance do argumento. Isso pode incluir implicações do estudo, sugestões para pesquisas futuras ou uma reflexão sobre a relevância do tema. O objetivo é deixar o leitor com uma mensagem significativa.",
    acts: [
      {"id":"ac18_a1","type":"tf","prompt":"The final thoughts in a conclusion can introduce completely new arguments not discussed in the essay.","answer":false,"hint":"A conclusão não deve introduzir novos argumentos, mas ampliar a reflexão sobre os já apresentados."},
      {"id":"ac18_a2","type":"mc","prompt":"Which is an appropriate final thought for an essay about climate change?","options":["In summary, this essay covered three points.","Future research should explore more cost-effective solutions to reduce carbon emissions globally.","I hope you enjoyed reading this essay.","Climate change is important, as I said before."],"answerIdx":1,"hint":"Considerações finais eficazes sugerem implicações ou direções futuras de forma formal."},
      {"id":"ac18_a3","type":"fill","prompt":"Conclusions often end with implications for future ___ or practice.","answer":"research","keywords":["research","study","investigation","inquiry"],"hint":"Qual direção futura é frequentemente sugerida em conclusões acadêmicas?"},
      {"id":"ac18_a4","type":"text","prompt":"Write 1–2 final sentences for an essay about the importance of early childhood education.","keywords":["therefore","future","investment","policymakers","research","implications","long-term","society","development","crucial"],"hint":"Ofereça uma reflexão final que destaque a relevância do tema ou sugira direções futuras."}
    ]
  },
  ac19: {
    context: "Palavras de transição de adição como 'furthermore', 'moreover', 'in addition' e 'additionally' são usadas para acrescentar informações ou argumentos. Elas ajudam a construir uma progressão lógica entre ideias relacionadas. O uso correto dessas palavras melhora a coesão do texto acadêmico.",
    acts: [
      {"id":"ac19_a1","type":"tf","prompt":"'Furthermore' and 'moreover' are used to introduce contrasting ideas in academic writing.","answer":false,"hint":"'Furthermore' e 'moreover' são usados para adicionar informações, não para contrastar ideias."},
      {"id":"ac19_a2","type":"mc","prompt":"Which transition word best completes the sentence: 'The study reduced costs. ___, it improved efficiency.'","options":["However","Therefore","Furthermore","Although"],"answerIdx":2,"hint":"Escolha a palavra de transição que indica adição de informação positiva."},
      {"id":"ac19_a3","type":"fill","prompt":"___ to reducing costs, the new policy also improved employee satisfaction.","answer":"In addition","keywords":["In addition","Additionally","Furthermore","Moreover"],"hint":"Use uma expressão de adição para acrescentar mais um benefício."},
      {"id":"ac19_a4","type":"text","prompt":"Write two sentences connected by an addition transition word about the benefits of regular physical exercise.","keywords":["furthermore","moreover","additionally","in addition","also","health","mental","physical","benefits","reduces"],"hint":"Use palavras como 'furthermore', 'moreover' ou 'in addition' para conectar duas ideias relacionadas."}
    ]
  },
  ac20: {
    context: "Palavras de transição de contraste como 'however', 'nevertheless', 'on the other hand' e 'in contrast' são usadas para apresentar ideias opostas ou limitações de um argumento. Elas sinalizam ao leitor que uma perspectiva diferente será apresentada. O uso correto dessas palavras enriquece a análise acadêmica.",
    acts: [
      {"id":"ac20_a1","type":"tf","prompt":"'However' and 'nevertheless' are used to add more support to the previous argument.","answer":false,"hint":"Essas palavras introduzem uma ideia contrária ou limitação ao argumento anterior."},
      {"id":"ac20_a2","type":"mc","prompt":"Which sentence correctly uses a contrast transition?","options":["The treatment was effective. Furthermore, some patients reported side effects.","The treatment was effective. However, some patients reported side effects.","The treatment was effective. Therefore, some patients reported side effects.","The treatment was effective. In addition, some patients reported side effects."],"answerIdx":1,"hint":"'However' introduz uma limitação ou informação contrária ao que foi dito antes."},
      {"id":"ac20_a3","type":"fill","prompt":"The new drug showed promising results; ___, further clinical trials are necessary.","answer":"nevertheless","keywords":["nevertheless","however","nonetheless","yet"],"hint":"Use uma palavra que introduza uma ressalva apesar do resultado positivo."},
      {"id":"ac20_a4","type":"text","prompt":"Write two sentences about online learning, using a contrast transition word to show a limitation.","keywords":["however","nevertheless","on the other hand","in contrast","although","flexible","lack","interaction","despite","disadvantage"],"hint":"Apresente um benefício do aprendizado online e, em seguida, use uma palavra de contraste para mostrar uma desvantagem."}
    ]
  },
  ac21: {
    context: "Palavras de transição de causa e efeito como 'therefore', 'consequently', 'as a result' e 'thus' conectam uma causa ao seu efeito. Elas são essenciais para estruturar argumentos lógicos em textos acadêmicos. O uso correto dessas palavras demonstra raciocínio claro e coerente.",
    acts: [
      {"id":"ac21_a1","type":"tf","prompt":"'As a result' and 'consequently' are used to introduce a cause, not an effect.","answer":false,"hint":"Essas expressões introduzem o efeito ou consequência de uma causa mencionada anteriormente."},
      {"id":"ac21_a2","type":"mc","prompt":"Which sentence correctly shows a cause-and-effect relationship?","options":["The company invested in training. However, productivity increased.","The company invested in training. In addition, productivity increased.","The company invested in training. As a result, productivity increased.","The company invested in training. On the other hand, productivity increased."],"answerIdx":2,"hint":"'As a result' indica que o que vem antes é a causa e o que vem depois é o efeito."},
      {"id":"ac21_a3","type":"fill","prompt":"Deforestation destroys natural habitats; ___, many species face extinction.","answer":"consequently","keywords":["consequently","therefore","as a result","thus"],"hint":"Use uma palavra que mostre que a extinção é uma consequência do desmatamento."},
      {"id":"ac21_a4","type":"text","prompt":"Write two sentences showing a cause-and-effect relationship between poor nutrition and academic performance.","keywords":["therefore","consequently","as a result","thus","poor nutrition","affects","concentration","academic","performance","leads"],"hint":"Apresente a causa (má nutrição) e use uma palavra de transição para mostrar o efeito (desempenho acadêmico)."}
    ]
  },
  ac22: {
    context: "Palavras de transição de exemplificação como 'for example', 'for instance', 'such as' e 'to illustrate' são usadas para apresentar exemplos que sustentam um argumento. Elas ajudam o leitor a compreender conceitos abstratos por meio de casos concretos. O uso adequado dessas expressões torna o texto mais persuasivo.",
    acts: [
      {"id":"ac22_a1","type":"tf","prompt":"'For example' and 'for instance' can be used interchangeably in academic writing.","answer":true,"hint":"Ambas as expressões introduzem exemplos e têm o mesmo significado em contextos acadêmicos."},
      {"id":"ac22_a2","type":"mc","prompt":"Which sentence correctly uses an exemplification transition?","options":["Many countries have adopted renewable energy. Therefore, solar panels are useful.","Many countries have adopted renewable energy. For instance, Germany generates over 40% of its electricity from renewable sources.","Many countries have adopted renewable energy. However, solar panels are useful.","Many countries have adopted renewable energy. Consequently, solar panels are useful."],"answerIdx":1,"hint":"'For instance' introduz um exemplo específico que ilustra a afirmação anterior."},
      {"id":"ac22_a3","type":"fill","prompt":"Several factors affect academic performance, ___ sleep quality and nutrition.","answer":"such as","keywords":["such as","for example","including","for instance"],"hint":"Use uma expressão que introduza exemplos de fatores específicos."},
      {"id":"ac22_a4","type":"text","prompt":"Write a sentence that uses an exemplification transition to support the claim that technology has changed communication.","keywords":["for example","for instance","such as","to illustrate","smartphones","social media","email","instant","messaging","communication"],"hint":"Use 'for example', 'for instance' ou 'such as' para dar um exemplo concreto da mudança na comunicação."}
    ]
  },
  ac23: {
    context: "Palavras de transição de sequência como 'first', 'secondly', 'then', 'subsequently' e 'finally' são usadas para organizar informações em ordem lógica ou cronológica. Elas são especialmente úteis em textos que descrevem processos, métodos ou argumentos em ordem. Seu uso correto melhora a clareza e a organização do texto.",
    acts: [
      {"id":"ac23_a1","type":"tf","prompt":"Sequence transition words are only used in narrative texts, not in academic writing.","answer":false,"hint":"Palavras de sequência são amplamente usadas em textos acadêmicos para organizar argumentos e processos."},
      {"id":"ac23_a2","type":"mc","prompt":"Which set of transitions is most appropriate for describing a sequential process?","options":["However, although, despite","First, then, subsequently, finally","Because, therefore, as a result","Moreover, furthermore, additionally"],"answerIdx":1,"hint":"Pense nas palavras que indicam a ordem dos passos em um processo."},
      {"id":"ac23_a3","type":"fill","prompt":"___ the data was collected, it was analysed using statistical software.","answer":"Subsequently","keywords":["Subsequently","Following this","After","Then"],"hint":"Use uma palavra de sequência que indica o que aconteceu após a coleta de dados."},
      {"id":"ac23_a4","type":"text","prompt":"Write 3 sentences describing the steps of a research process using sequence transition words.","keywords":["first","secondly","then","subsequently","finally","data","collected","analysed","hypothesis","conclusion"],"hint":"Use palavras como 'first', 'then', 'subsequently' e 'finally' para organizar as etapas em ordem."}
    ]
  },
  ac24: {
    context: "A linguagem de hedging (mitigação) é usada em textos acadêmicos para indicar cautela e reconhecer limitações. Expressões como 'may', 'might', 'could', 'it appears that' e 'it is suggested that' evitam afirmações absolutas. O hedging é especialmente importante em pesquisas onde os resultados não são definitivos.",
    acts: [
      {"id":"ac24_a1","type":"tf","prompt":"Hedging language is used to make academic claims sound more certain and absolute.","answer":false,"hint":"Hedging expressa cautela e reconhece incerteza, não certeza absoluta."},
      {"id":"ac24_a2","type":"mc","prompt":"Which sentence uses hedging language appropriately?","options":["The data proves that coffee causes cancer.","Coffee definitely leads to health problems.","The findings suggest that excessive coffee consumption may be linked to certain health risks.","Everyone agrees that coffee is bad for health."],"answerIdx":2,"hint":"Procure a opção que usa linguagem cautelosa como 'suggest' e 'may'."},
      {"id":"ac24_a3","type":"fill","prompt":"The results ___ indicate a positive correlation between sleep and academic performance.","answer":"appear to","keywords":["appear to","seem to","tend to","may"],"hint":"Use uma expressão que mitigue a afirmação sem torná-la definitiva."},
      {"id":"ac24_a4","type":"text","prompt":"Rewrite this sentence using hedging language: 'Stress causes heart disease.'","keywords":["may","might","could","suggest","appear","linked","contribute","evidence","indicates","associated"],"hint":"Reformule a afirmação absoluta usando linguagem de hedging para expressar possibilidade ou correlação."}
    ]
  },
  ac25: {
    context: "A voz passiva é frequentemente usada em textos acadêmicos para manter um tom impessoal e objetivo. Em vez de 'We conducted the experiment', escreve-se 'The experiment was conducted'. A voz passiva desvia a atenção do agente e coloca o foco na ação ou no objeto da pesquisa.",
    acts: [
      {"id":"ac25_a1","type":"tf","prompt":"The passive voice is preferred in academic writing because it creates a more objective and impersonal tone.","answer":true,"hint":"A voz passiva remove o agente e torna o texto mais objetivo e formal."},
      {"id":"ac25_a2","type":"mc","prompt":"Which sentence is written in the passive voice?","options":["The researchers collected the data.","We analysed the results carefully.","The samples were analysed in a laboratory setting.","Scientists discovered a new species."],"answerIdx":2,"hint":"Na voz passiva, o sujeito recebe a ação em vez de realizá-la."},
      {"id":"ac25_a3","type":"fill","prompt":"The participants ___ randomly assigned to two groups.","answer":"were","keywords":["were","had been","are","have been"],"hint":"Use o auxiliar correto para formar a voz passiva no passado."},
      {"id":"ac25_a4","type":"text","prompt":"Rewrite this sentence in the passive voice: 'The researchers measured the participants' blood pressure every hour.'","keywords":["was measured","were measured","blood pressure","participants","every hour","recorded","monitored"],"hint":"Mude o foco do agente (pesquisadores) para a ação (medir) usando a voz passiva."}
    ]
  },
  ac26: {
    context: "Estruturas impessoais como 'It is argued that', 'It has been shown that' e 'It is widely accepted that' são comuns em textos acadêmicos. Elas permitem apresentar ideias sem atribuí-las diretamente a uma pessoa específica, reforçando a objetividade do texto. Essas construções são especialmente úteis ao apresentar consensos científicos.",
    acts: [
      {"id":"ac26_a1","type":"tf","prompt":"Impersonal structures like 'It is argued that' are used to make the writer's opinion seem more objective.","answer":true,"hint":"Estruturas impessoais distanciam o autor da afirmação e conferem mais objetividade ao texto."},
      {"id":"ac26_a2","type":"mc","prompt":"Which sentence uses an impersonal structure correctly?","options":["I think that education is important.","It is widely believed that education is fundamental to social development.","We all know education matters.","Education is important, I feel."],"answerIdx":1,"hint":"Procure a opção que usa uma estrutura impessoal sem referenciar o autor diretamente."},
      {"id":"ac26_a3","type":"fill","prompt":"___ that early intervention can significantly improve language acquisition in children.","answer":"It has been shown","keywords":["It has been shown","It has been demonstrated","It is suggested","It is argued"],"hint":"Use uma estrutura impessoal que introduza uma descoberta ou conclusão de pesquisa."},
      {"id":"ac26_a4","type":"text","prompt":"Rewrite this sentence using an impersonal structure: 'I believe that climate change is the most pressing global issue.'","keywords":["It is argued","It is widely","It has been","suggested","considered","regarded","climate change","pressing","global"],"hint":"Substitua a perspectiva pessoal ('I believe') por uma estrutura impessoal."}
    ]
  },
  ac27: {
    context: "A nominalização é o processo de transformar verbos ou adjetivos em substantivos, como 'discover' → 'discovery' ou 'analyse' → 'analysis'. Esse recurso é muito comum em textos acadêmicos e contribui para um estilo mais formal e denso. O uso de nominalizações permite que o autor condense informações de forma eficiente.",
    acts: [
      {"id":"ac27_a1","type":"tf","prompt":"Nominalisation involves turning verbs or adjectives into nouns to create a more formal academic style.","answer":true,"hint":"Nominalização converte verbos e adjetivos em substantivos para dar formalidade ao texto."},
      {"id":"ac27_a2","type":"mc","prompt":"Which sentence uses nominalisation?","options":["The team decided to analyse the data.","The analysis of the data was conducted by the team.","We analysed the data.","The team is going to analyse the data."],"answerIdx":1,"hint":"Procure a frase em que um verbo foi transformado em substantivo (ex: 'analyse' → 'analysis')."},
      {"id":"ac27_a3","type":"fill","prompt":"The ___ of the results confirmed the hypothesis. (Nominalise 'discuss')","answer":"discussion","keywords":["discussion","analysis","examination","evaluation"],"hint":"Transforme o verbo 'discuss' em um substantivo para usar na frase."},
      {"id":"ac27_a4","type":"text","prompt":"Rewrite this sentence using nominalisation: 'The scientists decided to investigate why the cells failed to respond.'","keywords":["investigation","failure","response","decision","conducted","undertaken","cells","regarding","into","the"],"hint":"Transforme os verbos 'investigate' e 'respond' em substantivos para criar um estilo mais formal."}
    ]
  },
  ac28: {
    context: "Em textos acadêmicos, termos técnicos e conceitos importantes frequentemente precisam ser definidos para garantir a compreensão do leitor. Uma boa definição acadêmica identifica o termo, o coloca em uma categoria e descreve suas características distintivas. Expressões como 'is defined as', 'refers to' e 'can be understood as' são usadas para introduzir definições.",
    acts: [
      {"id":"ac28_a1","type":"tf","prompt":"In academic writing, it is unnecessary to define technical terms as readers are expected to know them.","answer":false,"hint":"Definir termos técnicos é essencial para garantir clareza e precisão no texto acadêmico."},
      {"id":"ac28_a2","type":"mc","prompt":"Which sentence correctly defines a term in academic style?","options":["Globalisation is when things go global.","Globalisation means countries mix.","Globalisation refers to the process by which economies, cultures, and societies become interconnected through international trade and communication.","Globalisation is a very important concept."],"answerIdx":2,"hint":"Uma boa definição acadêmica é precisa, coloca o termo em contexto e descreve suas características."},
      {"id":"ac28_a3","type":"fill","prompt":"Critical thinking ___ as the ability to analyse information objectively and make reasoned judgements.","answer":"is defined","keywords":["is defined","can be defined","is described","is understood"],"hint":"Use uma expressão formal para introduzir uma definição acadêmica."},
      {"id":"ac28_a4","type":"text","prompt":"Write a formal academic definition of 'sustainability'.","keywords":["refers to","is defined as","concept","meet","needs","future","generations","development","without","compromising"],"hint":"Use uma expressão introdutória como 'refers to' ou 'is defined as' e inclua as características principais do conceito."}
    ]
  },
  ac29: {
    context: "Comparar e contrastar são habilidades essenciais em textos acadêmicos. Ao comparar, identificamos semelhanças; ao contrastar, destacamos diferenças. Expressões como 'similarly', 'likewise', 'in contrast', 'whereas' e 'while' facilitam essa análise. Essa estrutura é comum em ensaios dissertativos e revisões de literatura.",
    acts: [
      {"id":"ac29_a1","type":"tf","prompt":"'Whereas' and 'while' can be used to introduce similarities between two ideas.","answer":false,"hint":"'Whereas' e 'while' introduzem diferenças ou contrastes, não semelhanças."},
      {"id":"ac29_a2","type":"mc","prompt":"Which sentence correctly compares two research methods?","options":["Quantitative research uses numbers, but qualitative research uses feelings.","Quantitative research analyses numerical data, whereas qualitative research explores subjective experiences.","Quantitative and qualitative research are both research.","Qualitative is better than quantitative research."],"answerIdx":1,"hint":"Procure a frase que usa vocabulário acadêmico e 'whereas' para contrastar os dois métodos."},
      {"id":"ac29_a3","type":"fill","prompt":"Traditional classrooms offer face-to-face interaction; ___, online platforms provide greater flexibility.","answer":"similarly","keywords":["similarly","likewise","in contrast","conversely"],"hint":"Se as ideias compartilham uma característica positiva, use uma palavra de comparação."},
      {"id":"ac29_a4","type":"text","prompt":"Write two sentences comparing and contrasting renewable and non-renewable energy sources.","keywords":["whereas","while","in contrast","similarly","renewable","non-renewable","sustainable","fossil","fuels","unlike"],"hint":"Use palavras de comparação e contraste para destacar semelhanças e diferenças entre os dois tipos de energia."}
    ]
  },
  ac30: {
    context: "Descrever tendências e dados é uma habilidade fundamental em textos acadêmicos, especialmente em seções de resultados e análise. Verbos como 'increase', 'decrease', 'rise', 'fall', 'fluctuate' e advérbios como 'significantly', 'gradually', 'sharply' são usados para expressar variações com precisão.",
    acts: [
      {"id":"ac30_a1","type":"tf","prompt":"Adverbs such as 'sharply', 'gradually', and 'significantly' are used to describe the degree of change in data.","answer":true,"hint":"Advérbios de grau modificam verbos de tendência para indicar a intensidade da mudança."},
      {"id":"ac30_a2","type":"mc","prompt":"Which sentence best describes a gradual increase in sales figures?","options":["Sales went up a lot.","Sales increased sharply over a short period.","Sales rose gradually throughout the year.","Sales were better."],"answerIdx":2,"hint":"Procure a frase com vocabulário preciso que descreve tanto a direção quanto o ritmo da mudança."},
      {"id":"ac30_a3","type":"fill","prompt":"The unemployment rate ___ significantly between 2010 and 2015.","answer":"declined","keywords":["declined","fell","dropped","decreased"],"hint":"Use um verbo que indica redução ou queda em um indicador."},
      {"id":"ac30_a4","type":"text","prompt":"Write two sentences describing a trend shown in data: temperatures increased from 15°C to 22°C between January and July.","keywords":["rose","increased","climbed","gradually","steadily","significantly","from","to","between","temperature"],"hint":"Use verbos de tendência e advérbios de grau para descrever a mudança de temperatura de forma precisa."}
    ]
  },
  ac31: {
    context: "Ao descrever gráficos e tabelas em textos acadêmicos, é necessário usar vocabulário específico para identificar o tipo de representação, descrever as tendências principais e destacar dados relevantes. Expressões como 'the graph illustrates', 'as shown in Figure 1' e 'the data reveals' são comuns nesse contexto.",
    acts: [
      {"id":"ac31_a1","type":"tf","prompt":"When describing a graph, you should copy all the numbers from the graph without analysing the trends.","answer":false,"hint":"A descrição de gráficos deve focar nas tendências e informações mais relevantes, não em todos os dados."},
      {"id":"ac31_a2","type":"mc","prompt":"Which sentence best introduces a graph description?","options":["Here is a graph about sales.","Figure 1 illustrates the fluctuation in global oil prices between 2000 and 2020.","The graph has some lines and numbers.","I will now describe the graph below."],"answerIdx":1,"hint":"Use uma expressão formal que identifique o gráfico e seu conteúdo principal."},
      {"id":"ac31_a3","type":"fill","prompt":"As ___ in Figure 2, the number of internet users doubled between 2005 and 2015.","answer":"shown","keywords":["shown","illustrated","depicted","indicated"],"hint":"Use o participio passado de um verbo que indica referência a uma figura."},
      {"id":"ac31_a4","type":"text","prompt":"Write 2 sentences describing the following data: In 2010, 30% of people used smartphones. By 2020, this figure had risen to 85%.","keywords":["increased","rose","from","to","figure","percentage","smartphones","significantly","over","decade"],"hint":"Descreva a tendência principal usando vocabulário acadêmico preciso e comparando os dois pontos no tempo."}
    ]
  },
  ac32: {
    context: "Ensaios de causa e efeito analisam as razões pelas quais algo acontece (causas) e as consequências resultantes (efeitos). Palavras como 'because', 'due to', 'as a result of', 'lead to' e 'give rise to' são usadas para expressar essas relações. A análise clara de causa e efeito é uma habilidade central na escrita acadêmica.",
    acts: [
      {"id":"ac32_a1","type":"tf","prompt":"In a cause and effect essay, 'due to' introduces an effect, while 'as a result' introduces a cause.","answer":false,"hint":"'Due to' introduz uma causa; 'as a result' introduz o efeito ou consequência."},
      {"id":"ac32_a2","type":"mc","prompt":"Which sentence correctly expresses a cause-and-effect relationship?","options":["Pollution is a problem. However, many people ignore it.","Due to increased greenhouse gas emissions, global temperatures have continued to rise.","Pollution is bad. In addition, it affects wildlife.","We need to reduce pollution. Furthermore, temperatures are rising."],"answerIdx":1,"hint":"Procure a frase que claramente conecta uma causa (emissões) ao seu efeito (aumento de temperatura)."},
      {"id":"ac32_a3","type":"fill","prompt":"Urbanisation has ___ increased demand for public transportation in major cities.","answer":"led to","keywords":["led to","resulted in","caused","given rise to"],"hint":"Use uma expressão verbal que conecta a causa (urbanização) ao efeito (demanda por transporte)."},
      {"id":"ac32_a4","type":"text","prompt":"Write two sentences explaining the causes and effects of deforestation.","keywords":["because","due to","as a result","consequently","leads to","habitat","biodiversity","climate","carbon","loss"],"hint":"Apresente pelo menos uma causa da desflorestação e uma de suas consequências usando conectivos apropriados."}
    ]
  },
  ac33: {
    context: "O ensaio de problema-solução é um tipo comum de texto acadêmico que identifica um problema, analisa suas causas e propõe soluções. A estrutura típica inclui: descrição do problema, causas, efeitos e soluções propostas. Esse formato é usado em redações de vestibular, relatórios e artigos científicos.",
    acts: [
      {"id":"ac33_a1","type":"tf","prompt":"A problem-solution essay focuses only on describing the problem without suggesting any solutions.","answer":false,"hint":"Um ensaio de problema-solução deve apresentar tanto o problema quanto soluções propostas."},
      {"id":"ac33_a2","type":"mc","prompt":"Which is the most appropriate structure for a problem-solution essay?","options":["Solution, Problem, Causes","Problem, Causes, Effects, Solutions","Introduction, Body, Conclusion only","Solutions, Examples, Problem"],"answerIdx":1,"hint":"A estrutura lógica apresenta o problema, suas causas, efeitos e, por fim, as soluções."},
      {"id":"ac33_a3","type":"fill","prompt":"One possible ___ to the problem of urban congestion is the expansion of public transport networks.","answer":"solution","keywords":["solution","approach","remedy","response"],"hint":"Use o substantivo que indica uma resposta proposta a um problema."},
      {"id":"ac33_a4","type":"text","prompt":"Write a short problem-solution paragraph about food waste in cities.","keywords":["problem","issue","solution","reduce","address","waste","initiatives","campaigns","awareness","tackle"],"hint":"Descreva o problema da desperdício de alimentos e proponha uma ou duas soluções concretas."}
    ]
  },
  ac34: {
    context: "O ensaio argumentativo de prós e contras (for/against) apresenta argumentos a favor e contra uma posição ou ideia. O autor deve apresentar ambos os lados de forma equilibrada antes de concluir com sua própria posição. Esse formato desenvolve o pensamento crítico e a habilidade de analisar diferentes perspectivas.",
    acts: [
      {"id":"ac34_a1","type":"tf","prompt":"In a for/against essay, the writer should only present arguments they personally agree with.","answer":false,"hint":"Um ensaio de prós e contras apresenta argumentos de ambos os lados de forma equilibrada."},
      {"id":"ac34_a2","type":"mc","prompt":"Which paragraph order is typical for a for/against essay?","options":["Introduction, against arguments, for arguments, conclusion","Introduction, for arguments, against arguments, conclusion","Introduction, conclusion, arguments","For arguments, against arguments only"],"answerIdx":1,"hint":"A ordem mais comum é introdução, argumentos a favor, argumentos contra e conclusão."},
      {"id":"ac34_a3","type":"fill","prompt":"___ of the benefits of working from home is greater flexibility in managing personal and professional responsibilities.","answer":"One","keywords":["One","Another","A key","A major"],"hint":"Use um artigo ou pronome indefinido para introduzir um argumento a favor."},
      {"id":"ac34_a4","type":"text","prompt":"Write one argument for and one argument against the use of mobile phones in schools.","keywords":["on one hand","on the other hand","however","benefit","disadvantage","distraction","educational","access","learning","tool"],"hint":"Apresente um argumento a favor e um contra o uso de celulares nas escolas, usando vocabulário acadêmico."}
    ]
  },
  ac35: {
    context: "O ensaio de opinião exige que o autor apresente claramente sua posição sobre um tema e a sustente com argumentos e evidências. Diferente do ensaio for/against, o ensaio de opinião é predominantemente unilateral. Expressões como 'I believe', 'In my view' e 'It is my contention that' introduzem a posição do autor, embora formas impessoais também sejam aceitas.",
    acts: [
      {"id":"ac35_a1","type":"tf","prompt":"An opinion essay requires the writer to present both sides of an argument equally without taking a position.","answer":false,"hint":"Um ensaio de opinião exige que o autor tome uma posição clara e a defenda."},
      {"id":"ac35_a2","type":"mc","prompt":"Which phrase is most appropriate for introducing a personal opinion in an academic essay?","options":["Everybody knows that...","I feel like...","It is my contention that stricter environmental regulations are urgently needed.","This is just my opinion but..."],"answerIdx":2,"hint":"Procure a expressão mais formal e acadêmica para introduzir uma opinião pessoal."},
      {"id":"ac35_a3","type":"fill","prompt":"In my ___, the government should invest more heavily in public education.","answer":"view","keywords":["view","opinion","assessment","judgement"],"hint":"Use um substantivo formal que introduza a perspectiva pessoal do autor."},
      {"id":"ac35_a4","type":"text","prompt":"Write an opening sentence for an opinion essay arguing that university education should be free for all students.","keywords":["contend","argue","believe","view","university","education","free","access","equal","opportunity"],"hint":"Use uma expressão formal de opinião e apresente sua posição de forma clara e direta."}
    ]
  },
  ac36: {
    context: "O ensaio discursivo explora múltiplas perspectivas sobre um tema controverso sem necessariamente tomar uma posição definitiva. O autor apresenta e analisa diferentes pontos de vista de forma equilibrada e crítica. Esse formato é comum em nível universitário e exige alto nível de análise e objetividade.",
    acts: [
      {"id":"ac36_a1","type":"tf","prompt":"A discursive essay is the same as an opinion essay because both require the writer to take a strong personal stance.","answer":false,"hint":"O ensaio discursivo explora diferentes perspectivas; o de opinião defende uma posição específica."},
      {"id":"ac36_a2","type":"mc","prompt":"Which approach best characterises a discursive essay?","options":["Presenting only the writer's opinion","Ignoring counterarguments","Exploring multiple perspectives on a controversial issue in a balanced way","Describing a series of events chronologically"],"answerIdx":2,"hint":"O ensaio discursivo é equilibrado e analisa diferentes pontos de vista sobre um tema."},
      {"id":"ac36_a3","type":"fill","prompt":"___ argue that social media has democratised information, while others contend it has spread misinformation.","answer":"Some","keywords":["Some","Many","Certain","Several"],"hint":"Use um pronome ou determinante que indique que existem diferentes perspectivas sobre o tema."},
      {"id":"ac36_a4","type":"text","prompt":"Write two sentences presenting contrasting perspectives on whether nuclear energy is a viable solution to climate change.","keywords":["proponents","critics","argue","contend","suggest","however","while","others","viable","risks"],"hint":"Apresente dois pontos de vista opostos usando linguagem acadêmica e formal, sem tomar partido."}
    ]
  },
  ac37: {
    context: "A revisão de literatura (literature review) é uma seção fundamental em artigos e dissertações acadêmicas. Ela sintetiza e analisa criticamente pesquisas anteriores sobre um tema, identificando lacunas, tendências e contradições na literatura. Uma boa revisão de literatura demonstra domínio do campo e justifica a necessidade da nova pesquisa.",
    acts: [
      {"id":"ac37_a1","type":"tf","prompt":"A literature review simply lists all the sources you have read without any critical analysis.","answer":false,"hint":"Uma revisão de literatura analisa criticamente as fontes, identificando padrões, lacunas e contradições."},
      {"id":"ac37_a2","type":"mc","prompt":"What is the main purpose of a literature review in academic writing?","options":["To list all books and articles you have read","To summarise and critically evaluate existing research on a topic","To present your own original research findings","To provide a bibliography of sources"],"answerIdx":1,"hint":"A revisão de literatura avalia criticamente a pesquisa existente e identifica lacunas no campo."},
      {"id":"ac37_a3","type":"fill","prompt":"Several studies have ___ that early bilingual education positively impacts cognitive development.","answer":"demonstrated","keywords":["demonstrated","shown","established","confirmed"],"hint":"Use um verbo formal que indica que pesquisas anteriores chegaram a uma conclusão."},
      {"id":"ac37_a4","type":"text","prompt":"Write 2 sentences that could appear in a literature review about the effects of sleep deprivation on memory.","keywords":["research","studies","found","demonstrated","suggest","indicate","however","limited","further","memory"],"hint":"Sintetize achados de pesquisas existentes e identifique uma tendência ou lacuna na literatura."}
    ]
  },
  ac38: {
    context: "Um artigo de pesquisa (research paper) segue uma estrutura convencional conhecida como IMRAD: Introduction, Methodology, Results, and Discussion. Cada seção tem um propósito específico e um vocabulário próprio. Compreender essa estrutura é essencial para ler e escrever textos científicos com eficiência.",
    acts: [
      {"id":"ac38_a1","type":"tf","prompt":"The IMRAD structure stands for Introduction, Methods, Results, and Discussion.","answer":true,"hint":"IMRAD é o acrônimo padrão para a estrutura de artigos científicos."},
      {"id":"ac38_a2","type":"mc","prompt":"In which section of a research paper would you typically find the research questions and rationale for the study?","options":["Results","Methodology","Introduction","Discussion"],"answerIdx":2,"hint":"As perguntas de pesquisa e a justificativa do estudo aparecem na introdução."},
      {"id":"ac38_a3","type":"fill","prompt":"The ___ section of a research paper describes how the study was conducted.","answer":"methodology","keywords":["methodology","methods","procedure","method"],"hint":"Qual seção do artigo científico descreve os procedimentos utilizados?"},
      {"id":"ac38_a4","type":"text","prompt":"Briefly describe the purpose of the 'Discussion' section in a research paper.","keywords":["interpret","findings","implications","compare","previous","research","limitations","suggest","future","significance"],"hint":"A seção de discussão interpreta os resultados e os relaciona com pesquisas anteriores e implicações futuras."}
    ]
  },
  ac39: {
    context: "O abstract (resumo) é uma breve descrição de um artigo científico, geralmente de 150 a 250 palavras. Ele deve sintetizar o objetivo do estudo, a metodologia, os principais resultados e as conclusões. O abstract é frequentemente a única parte lida por muitos leitores, por isso deve ser claro e informativo.",
    acts: [
      {"id":"ac39_a1","type":"tf","prompt":"An abstract should be written before the rest of the research paper is completed.","answer":false,"hint":"O abstract é geralmente escrito por último, após a conclusão do artigo."},
      {"id":"ac39_a2","type":"mc","prompt":"Which elements are typically included in a research abstract?","options":["Purpose, methods, results, and conclusions","Introduction, body, and conclusion","Bibliography and footnotes","Personal opinions and recommendations"],"answerIdx":0,"hint":"Um abstract completo sintetiza os quatro elementos principais do estudo."},
      {"id":"ac39_a3","type":"fill","prompt":"This study ___ to investigate the relationship between physical activity and academic achievement.","answer":"aims","keywords":["aims","seeks","attempts","endeavours"],"hint":"Use um verbo que expressa o objetivo do estudo no abstract."},
      {"id":"ac39_a4","type":"text","prompt":"Write a 3-sentence abstract for a study investigating the impact of social media on university students' academic performance.","keywords":["aims","investigate","methodology","participants","results","found","suggest","conclude","implications","academic"],"hint":"Inclua o objetivo, a metodologia e os resultados/conclusões principais do estudo."}
    ]
  },
  ac40: {
    context: "A seção de metodologia descreve como a pesquisa foi conduzida, incluindo o design do estudo, os participantes, os instrumentos de coleta de dados e os procedimentos de análise. O vocabulário desta seção inclui termos como 'sample', 'participants', 'data collection', 'questionnaire', 'qualitative' e 'quantitative'.",
    acts: [
      {"id":"ac40_a1","type":"tf","prompt":"The methodology section explains what the study found, not how it was conducted.","answer":false,"hint":"A seção de metodologia descreve como o estudo foi conduzido, não seus resultados."},
      {"id":"ac40_a2","type":"mc","prompt":"Which term refers to the group of people who participate in a research study?","options":["Sample","Abstract","Variable","Literature"],"answerIdx":0,"hint":"Em pesquisa, o grupo de participantes selecionado para o estudo é chamado de..."},
      {"id":"ac40_a3","type":"fill","prompt":"Data were collected using a structured ___ administered to 200 university students.","answer":"questionnaire","keywords":["questionnaire","survey","interview","instrument"],"hint":"Qual instrumento de coleta de dados é tipicamente 'administrado' a participantes?"},
      {"id":"ac40_a4","type":"text","prompt":"Write 2 sentences describing the methodology for a study on reading habits among teenagers, including participants and data collection method.","keywords":["participants","sample","consisted","data","collected","questionnaire","interviews","selected","randomly","conducted"],"hint":"Descreva quem participou do estudo e como os dados foram coletados, usando voz passiva e vocabulário técnico."}
    ]
  },
  ac41: {
    context: "A seção de resultados de um artigo científico apresenta as descobertas do estudo de forma objetiva, sem interpretação. Verbos como 'reveal', 'indicate', 'demonstrate', 'show' e expressões como 'the findings suggest' são comuns. Os resultados são frequentemente apresentados com referência a tabelas, gráficos ou estatísticas.",
    acts: [
      {"id":"ac41_a1","type":"tf","prompt":"The results section should include the researcher's interpretation and explanation of the findings.","answer":false,"hint":"A interpretação dos resultados ocorre na seção de discussão, não na de resultados."},
      {"id":"ac41_a2","type":"mc","prompt":"Which sentence is most appropriate for a results section?","options":["The results were interesting and surprising.","We think that the results show something important.","The data revealed a statistically significant correlation (r = 0.72, p < 0.01).","Clearly, the results prove our hypothesis was right."],"answerIdx":2,"hint":"A seção de resultados usa linguagem objetiva e inclui dados precisos sem interpretação pessoal."},
      {"id":"ac41_a3","type":"fill","prompt":"As shown in Table 1, participants in the experimental group ___ significantly better results.","answer":"achieved","keywords":["achieved","produced","demonstrated","showed"],"hint":"Use um verbo formal que descreva o desempenho dos participantes nos resultados."},
      {"id":"ac41_a4","type":"text","prompt":"Write 2 sentences reporting the results of a study where 75% of participants reported improved sleep after 4 weeks of exercise.","keywords":["revealed","demonstrated","indicated","majority","participants","reported","improvement","sleep","following","intervention"],"hint":"Apresente os resultados de forma objetiva, usando vocabulário formal e referenciando dados específicos."}
    ]
  },
  ac42: {
    context: "A seção de discussão interpreta os resultados do estudo, relacionando-os com pesquisas anteriores e explorando suas implicações. Aqui, o autor explica o significado dos dados, discute limitações e sugere direções para pesquisas futuras. É a seção mais analítica e crítica do artigo científico.",
    acts: [
      {"id":"ac42_a1","type":"tf","prompt":"The discussion section is where researchers present raw data and statistics without interpretation.","answer":false,"hint":"A discussão interpreta e contextualiza os dados; a apresentação dos dados ocorre na seção de resultados."},
      {"id":"ac42_a2","type":"mc","prompt":"Which phrase is most appropriate for the discussion section?","options":["50% of participants reported...","We conducted interviews with...","These findings are consistent with those of Smith (2019), who demonstrated similar patterns.","Table 3 shows the distribution of..."],"answerIdx":2,"hint":"A discussão relaciona os resultados do estudo com pesquisas anteriores."},
      {"id":"ac42_a3","type":"fill","prompt":"These findings ___ previous research suggesting that exercise improves cognitive function.","answer":"corroborate","keywords":["corroborate","support","confirm","align with"],"hint":"Use um verbo que indica que seus resultados estão de acordo com pesquisas anteriores."},
      {"id":"ac42_a4","type":"text","prompt":"Write 2 sentences for a discussion section interpreting the finding that students who exercise regularly perform better academically.","keywords":["findings suggest","may be explained","consistent","previous","research","cognitive","benefits","however","limited","implication"],"hint":"Interprete o resultado e relacione-o com pesquisas anteriores, usando linguagem de hedging quando necessário."}
    ]
  },
  ac43: {
    context: "Referências e bibliografias documentam as fontes utilizadas em um texto acadêmico. Cada sistema de citação (APA, MLA, Harvard) tem suas próprias regras de formatação. Uma lista de referências é essencial para dar crédito aos autores originais e permitir que os leitores verifiquem as fontes.",
    acts: [
      {"id":"ac43_a1","type":"tf","prompt":"A bibliography and a reference list are exactly the same thing in academic writing.","answer":false,"hint":"Uma lista de referências inclui apenas as obras citadas no texto; uma bibliografia pode incluir obras consultadas mas não citadas."},
      {"id":"ac43_a2","type":"mc","prompt":"Which element is NOT typically included in a full reference entry?","options":["Author's name","Year of publication","The reader's opinion of the book","Title of the work"],"answerIdx":2,"hint":"Uma entrada de referência inclui informações bibliográficas objetivas, não opiniões."},
      {"id":"ac43_a3","type":"fill","prompt":"References should be listed in ___ order by the author's last name.","answer":"alphabetical","keywords":["alphabetical","chronological","alphabetic","abc"],"hint":"Como é organizada a lista de referências na maioria dos estilos acadêmicos?"},
      {"id":"ac43_a4","type":"text","prompt":"Explain in 2 sentences why a reference list is important in academic writing.","keywords":["acknowledges","credit","verify","plagiarism","sources","authors","credibility","transparency","original","intellectual"],"hint":"Pense nos benefícios de documentar suas fontes para o leitor e para a integridade acadêmica."}
    ]
  },
  ac44: {
    context: "O estilo APA (American Psychological Association) usa citações no texto com o formato autor-data: (Smith, 2020) ou Smith (2020). Para citações diretas, inclui-se também o número da página: (Smith, 2020, p. 45). Esse sistema é amplamente usado em ciências sociais e psicologia.",
    acts: [
      {"id":"ac44_a1","type":"tf","prompt":"In APA style, in-text citations include the author's name and the year of publication.","answer":true,"hint":"O formato básico de citação APA no texto é (Autor, Ano)."},
      {"id":"ac44_a2","type":"mc","prompt":"Which is a correctly formatted APA in-text citation for a direct quote?","options":["(Smith 2020)","Smith (2020, p. 45)","[Smith, 2020]","Smith, 2020:45"],"answerIdx":1,"hint":"Citações diretas em APA incluem autor, ano e número de página."},
      {"id":"ac44_a3","type":"fill","prompt":"According to Johnson ___, bilingual children demonstrate enhanced executive function.","answer":"(2018)","keywords":["(2018)","(2018, p. 23)","2018","[2018]"],"hint":"Em APA, o ano da publicação aparece entre parênteses logo após o nome do autor."},
      {"id":"ac44_a4","type":"text","prompt":"Write a sentence with a correctly formatted APA in-text citation using this source: Author: Williams, Year: 2021, page: 78. The finding: exercise improves mood.","keywords":["Williams","2021","p.","argues","found","demonstrates","exercise","mood","improves","according"],"hint":"Inclua o nome do autor, o ano entre parênteses e o número da página para citações diretas."}
    ]
  },
  ac45: {
    context: "O estilo MLA (Modern Language Association) usa citações no texto com o formato autor-página: (Smith 45). Diferente do APA, não inclui o ano na citação dentro do texto. Esse sistema é comumente usado em humanidades, como literatura e línguas.",
    acts: [
      {"id":"ac45_a1","type":"tf","prompt":"In MLA style, in-text citations include the author's name and the year of publication.","answer":false,"hint":"No estilo MLA, a citação no texto inclui autor e número de página, não o ano."},
      {"id":"ac45_a2","type":"mc","prompt":"Which is a correctly formatted MLA in-text citation?","options":["(Brown, 2019, p. 32)","(Brown 32)","[Brown 2019]","Brown (2019:32)"],"answerIdx":1,"hint":"A citação MLA no texto usa apenas o sobrenome do autor e o número de página, sem vírgula e sem o ano."},
      {"id":"ac45_a3","type":"fill","prompt":"'Language shapes the way we perceive reality' ___","answer":"(Whorf 76)","keywords":["(Whorf 76)","(Whorf, 76)","Whorf (76)","[Whorf 76]"],"hint":"Em MLA, a citação no texto aparece entre parênteses com sobrenome e número de página sem vírgula."},
      {"id":"ac45_a4","type":"text","prompt":"Write a sentence with a correctly formatted MLA in-text citation using: Author: Garcia, page: 112. The claim: poetry reflects cultural identity.","keywords":["Garcia","112","argues","contends","claims","poetry","cultural","identity","reflects","according"],"hint":"Em MLA, a citação inclui apenas o sobrenome e o número da página entre parênteses, sem o ano."}
    ]
  },
  ac46: {
    context: "Plágio é o ato de usar as ideias ou palavras de outro autor sem dar o devido crédito. Em contextos acadêmicos, o plágio é uma falta grave que pode ter consequências sérias. Para evitá-lo, é necessário citar, parafrasear e resumir corretamente as fontes utilizadas.",
    acts: [
      {"id":"ac46_a1","type":"tf","prompt":"Paraphrasing a source without citing it is not considered plagiarism as long as you change the words.","answer":false,"hint":"Qualquer uso de ideias de outro autor, mesmo parafraseadas, exige citação para evitar plágio."},
      {"id":"ac46_a2","type":"mc","prompt":"Which action helps to avoid plagiarism?","options":["Copying text from a source and changing a few words","Using another author's ideas without citation","Properly citing all sources used in your writing","Submitting a friend's work with your name on it"],"answerIdx":2,"hint":"Citar corretamente todas as fontes é a estratégia mais importante para evitar plágio."},
      {"id":"ac46_a3","type":"fill","prompt":"To avoid plagiarism, all borrowed ideas must be properly ___ in the text.","answer":"cited","keywords":["cited","referenced","acknowledged","attributed"],"hint":"O que deve acontecer com ideias de outros autores usadas em seu texto?"},
      {"id":"ac46_a4","type":"text","prompt":"Explain in 2 sentences what plagiarism is and how to avoid it in academic writing.","keywords":["plagiarism","copying","using","without","credit","citation","paraphrase","reference","acknowledge","original"],"hint":"Defina plágio e mencione pelo menos uma estratégia para evitá-lo em textos acadêmicos."}
    ]
  },
  ac47: {
    context: "O pensamento crítico é a capacidade de analisar informações de forma objetiva, avaliar argumentos e formar julgamentos baseados em evidências. Em textos acadêmicos, isso se manifesta no uso de linguagem como 'evaluate', 'assess', 'critique', 'challenge' e 'question'. Desenvolver essa habilidade é essencial para o sucesso acadêmico.",
    acts: [
      {"id":"ac47_a1","type":"tf","prompt":"Critical thinking in academic writing means accepting all information from sources without questioning it.","answer":false,"hint":"Pensamento crítico envolve avaliar e questionar as fontes, não aceitá-las passivamente."},
      {"id":"ac47_a2","type":"mc","prompt":"Which sentence best demonstrates critical thinking in academic writing?","options":["Smith (2020) says social media is bad.","Everyone knows social media is harmful.","While Smith (2020) argues that social media is harmful, this conclusion may be limited by the study's small sample size.","Social media is the main cause of depression."],"answerIdx":2,"hint":"Pensamento crítico avalia tanto a afirmação quanto suas limitações metodológicas."},
      {"id":"ac47_a3","type":"fill","prompt":"It is important to ___ the validity of research findings before accepting them as fact.","answer":"evaluate","keywords":["evaluate","assess","question","examine"],"hint":"Use um verbo que indica análise crítica da validade de informações."},
      {"id":"ac47_a4","type":"text","prompt":"Write 2 sentences that demonstrate critical evaluation of this claim: 'Smartphones cause poor academic performance in teenagers.'","keywords":["however","limited","although","correlation","causation","evidence","suggests","further","research","methodology"],"hint":"Questione a validade da afirmação, mencionando possíveis limitações metodológicas ou alternativas explicativas."}
    ]
  },
  ac48: {
    context: "A escrita analítica vai além da descrição — ela interpreta, avalia e conecta informações para construir um argumento coerente. Um texto analítico não apenas apresenta fatos, mas explica seu significado e implicações. Verbos como 'analyse', 'examine', 'interpret', 'assess' e 'evaluate' são centrais nesse tipo de escrita.",
    acts: [
      {"id":"ac48_a1","type":"tf","prompt":"Analytical writing focuses primarily on describing what happened, rather than explaining why or what it means.","answer":false,"hint":"Escrita analítica vai além da descrição — ela interpreta e avalia o significado dos fatos."},
      {"id":"ac48_a2","type":"mc","prompt":"Which sentence is the most analytical?","options":["The unemployment rate rose by 5%.","The unemployment rate rose by 5%, which may be attributed to the combined effects of automation and reduced foreign investment.","Unemployment is high.","Many people lost their jobs."],"answerIdx":1,"hint":"A frase mais analítica não apenas apresenta o dado, mas explica suas possíveis causas."},
      {"id":"ac48_a3","type":"fill","prompt":"This section will ___ the relationship between poverty and educational attainment.","answer":"examine","keywords":["examine","analyse","investigate","explore"],"hint":"Use um verbo que indica análise aprofundada de uma relação ou tema."},
      {"id":"ac48_a4","type":"text","prompt":"Write 2 sentences that analytically interpret the following fact: 'Students who attend private schools tend to achieve higher exam scores.'","keywords":["may reflect","attributed","socioeconomic","resources","access","suggest","however","not necessarily","indicate","factors"],"hint":"Não apenas apresente o fato — interprete seu significado e discuta fatores que podem explicá-lo."}
    ]
  },
  ac49: {
    context: "Um contraargumento apresenta uma perspectiva oposta ao argumento do autor, enquanto a refutação responde a esse contraargumento explicando por que ele é fraco ou incorreto. Incluir e refutar contraargumentos fortalece o texto acadêmico e demonstra pensamento crítico. Expressões como 'while it may be argued that', 'critics suggest' e 'however' são comuns nesse contexto.",
    acts: [
      {"id":"ac49_a1","type":"tf","prompt":"Including counterarguments in an essay weakens the writer's position.","answer":false,"hint":"Incluir e refutar contraargumentos demonstra pensamento crítico e fortalece o argumento do autor."},
      {"id":"ac49_a2","type":"mc","prompt":"Which sentence correctly introduces a counterargument and refutation?","options":["Some people disagree. I still think I am right.","While it may be argued that online learning lacks interaction, evidence suggests that well-designed virtual environments can foster meaningful collaboration.","Online learning is bad. But it is also good.","Critics say online learning is bad, and they are wrong."],"answerIdx":1,"hint":"Um contraargumento eficaz é apresentado com linguagem formal e seguido de uma refutação baseada em evidências."},
      {"id":"ac49_a3","type":"fill","prompt":"___ some critics argue that standardised testing is a fair measure of ability, research indicates that it disadvantages students from lower socioeconomic backgrounds.","answer":"While","keywords":["While","Although","Even though","Whereas"],"hint":"Use uma conjunção de contraste para introduzir o contraargumento antes da refutação."},
      {"id":"ac49_a4","type":"text","prompt":"Write a sentence presenting a counterargument and a refutation for the claim that 'social media is entirely harmful to teenagers.'","keywords":["while","although","it may be argued","however","evidence","suggests","positive","connection","refute","mental"],"hint":"Apresente a perspectiva oposta com linguagem formal e refute-a com evidências ou raciocínio lógico."}
    ]
  },
  ac50: {
    context: "A coesão textual é alcançada, em parte, pelo uso adequado de pronomes de referência, que evitam a repetição excessiva de substantivos. Pronomes como 'it', 'they', 'this', 'these' e 'which' conectam ideias e criam fluxo no texto. O referente do pronome deve ser sempre claro para evitar ambiguidade.",
    acts: [
      {"id":"ac50_a1","type":"tf","prompt":"Using pronouns to refer back to previously mentioned nouns helps to avoid unnecessary repetition and improve cohesion.","answer":true,"hint":"Pronomes de referência melhoram a coesão ao evitar a repetição desnecessária de substantivos."},
      {"id":"ac50_a2","type":"mc","prompt":"What does 'it' refer to in this sentence: 'The government introduced a new policy. It aimed to reduce carbon emissions.'","options":["The government","A new policy","Carbon emissions","The reduction"],"answerIdx":1,"hint":"O pronome 'it' refere-se ao substantivo mais próximo e logicamente relacionado na frase anterior."},
      {"id":"ac50_a3","type":"fill","prompt":"The researchers published their findings. ___ were later confirmed by independent studies.","answer":"These","keywords":["These","They","Those","Such"],"hint":"Use um pronome demonstrativo que se refira aos 'findings' mencionados na frase anterior."},
      {"id":"ac50_a4","type":"text","prompt":"Rewrite these two sentences as one cohesive sentence using a pronoun: 'The experiment produced unexpected results. The unexpected results led researchers to revise the hypothesis.'","keywords":["which","these","they","it","results","led","prompted","researchers","revise","hypothesis"],"hint":"Use um pronome relativo ou demonstrativo para conectar as duas frases e eliminar a repetição."}
    ]
  },
  ac51: {
    context: "Além de pronomes, a coesão textual é mantida pelo uso de sinônimos e repetição estratégica de palavras-chave. Sinônimos evitam a repetição monótona, enquanto a repetição de termos centrais reforça a coerência temática. O equilíbrio entre variedade e consistência vocabular é uma marca da boa escrita acadêmica.",
    acts: [
      {"id":"ac51_a1","type":"tf","prompt":"Using synonyms in academic writing is a strategy to avoid repetition and maintain the reader's engagement.","answer":true,"hint":"Sinônimos criam variedade vocabular e melhoram o fluxo do texto acadêmico."},
      {"id":"ac51_a2","type":"mc","prompt":"Which pair of words are synonyms that could be used to avoid repetition in academic writing about research?","options":["study / investigate","result / introduction","method / conclusion","analysis / background"],"answerIdx":0,"hint":"Procure o par de palavras com significados semelhantes que poderiam ser usados alternadamente."},
      {"id":"ac51_a3","type":"fill","prompt":"Climate change is one of the most pressing global challenges. This ___ issue demands immediate international action.","answer":"environmental","keywords":["environmental","critical","urgent","complex"],"hint":"Substitua a repetição de 'climate change' por um adjetivo ou sinônimo que mantenha a coesão temática."},
      {"id":"ac51_a4","type":"text","prompt":"Rewrite this passage to improve cohesion by using synonyms: 'Education is important. Education helps people develop skills. Education also improves employment prospects.'","keywords":["furthermore","moreover","it","learning","schooling","academic","development","skills","opportunities","also"],"hint":"Use pronomes e sinônimos para 'education' para evitar a repetição e melhorar o fluxo do texto."}
    ]
  },
  ac52: {
    context: "O registro em textos acadêmicos deve ser formal e objetivo. Isso significa evitar gírias, linguagem emocional excessiva e expressões coloquiais. O tom deve ser neutro, imparcial e baseado em evidências. A escolha adequada do registro demonstra profissionalismo e respeito pelo contexto acadêmico.",
    acts: [
      {"id":"ac52_a1","type":"tf","prompt":"Using slang and colloquial expressions in academic writing makes the text more engaging and relatable.","answer":false,"hint":"Textos acadêmicos requerem linguagem formal; gírias e expressões coloquiais são inadequadas."},
      {"id":"ac52_a2","type":"mc","prompt":"Which sentence uses the most appropriate register for academic writing?","options":["This topic is super interesting and everyone should care about it.","Honestly, I think this research is kind of important.","The significance of this research extends beyond its immediate findings to broader societal implications.","This stuff is really worth looking into."],"answerIdx":2,"hint":"Procure a frase com vocabulário formal, tom objetivo e sem marcas de informalidade."},
      {"id":"ac52_a3","type":"fill","prompt":"Academic writing requires a ___ and objective tone, free from emotional language.","answer":"formal","keywords":["formal","professional","neutral","impersonal"],"hint":"Qual adjetivo descreve o tom adequado para textos acadêmicos?"},
      {"id":"ac52_a4","type":"text","prompt":"Rewrite this informal sentence in an appropriate academic register: 'Loads of kids nowadays are totally addicted to their phones and it's messing up their grades.'","keywords":["research","suggests","indicates","adolescents","excessive","smartphone","negatively","academic","performance","significant"],"hint":"Substitua vocabulário informal ('loads of', 'totally addicted', 'messing up') por equivalentes formais e objetivos."}
    ]
  },
  ac53: {
    context: "Revisar e editar são etapas fundamentais do processo de escrita acadêmica. A revisão (proofreading) foca em erros gramaticais, ortográficos e de pontuação, enquanto a edição envolve melhorias de conteúdo, estrutura e coerência. Ler o texto em voz alta, revisar em etapas e buscar feedback são estratégias eficazes.",
    acts: [
      {"id":"ac53_a1","type":"tf","prompt":"Proofreading and editing refer to the same process in academic writing.","answer":false,"hint":"Proofreading foca em erros de superfície; edição envolve melhorias mais profundas de conteúdo e estrutura."},
      {"id":"ac53_a2","type":"mc","prompt":"Which strategy is most effective for proofreading an academic text?","options":["Reading the text quickly once","Asking a friend to write the corrections for you","Reading the text aloud slowly to identify errors in grammar and punctuation","Submitting without reviewing because spell-check catches all errors"],"answerIdx":2,"hint":"Ler em voz alta ajuda a identificar erros que passam despercebidos na leitura silenciosa."},
      {"id":"ac53_a3","type":"fill","prompt":"When editing, you should check for ___, clarity, and logical flow of ideas.","answer":"coherence","keywords":["coherence","cohesion","consistency","organisation"],"hint":"Além da clareza, qual aspecto da estrutura do texto deve ser verificado durante a edição?"},
      {"id":"ac53_a4","type":"text","prompt":"List 3 specific things you should check when proofreading an academic essay.","keywords":["grammar","spelling","punctuation","agreement","subject-verb","tense","articles","prepositions","consistency","citations"],"hint":"Pense nos tipos mais comuns de erros linguísticos que aparecem em textos acadêmicos."}
    ]
  },
  ac54: {
    context: "Erros comuns em textos acadêmicos incluem problemas de concordância sujeito-verbo, uso incorreto de artigos, escolha de preposições inadequadas e fragmentos de oração. Identificar e corrigir esses erros é essencial para produzir textos claros e profissionais. A prática constante de revisão ajuda a reduzir a frequência desses erros.",
    acts: [
      {"id":"ac54_a1","type":"tf","prompt":"Subject-verb agreement errors occur when the verb does not match the subject in number.","answer":true,"hint":"Erros de concordância sujeito-verbo acontecem quando há falta de acordo entre sujeito e verbo."},
      {"id":"ac54_a2","type":"mc","prompt":"Which sentence contains a subject-verb agreement error?","options":["The results indicate a clear trend.","The data suggests further investigation is needed.","Each of the participants was interviewed individually.","The findings of the study are significant."],"answerIdx":1,"hint":"'Data' é tecnicamente plural em inglês formal acadêmico e exige verbo no plural."},
      {"id":"ac54_a3","type":"fill","prompt":"Correct the error: 'The research have shown that regular exercise improves mental health.'","answer":"has shown","keywords":["has shown","has demonstrated","has revealed","indicates"],"hint":"'The research' é um sujeito singular e exige um verbo no singular."},
      {"id":"ac54_a4","type":"text","prompt":"Identify and correct the errors in this sentence: 'The informations collected from the questionnaires was analysed using a statistical software.'","keywords":["information","were","analysed","collected","questionnaires","statistical","software","the","using","uncountable"],"hint":"Identifique erros de substantivos incontáveis (information), concordância verbal (was/were) e uso de artigos."}
    ]
  },
  ac55: {
    context: "Escrever definições precisas é uma habilidade importante em textos acadêmicos. Uma boa definição acadêmica identifica a categoria do termo e especifica suas características distintivas. Estruturas como '[Term] is/refers to/can be defined as [category] + [distinguishing features]' são amplamente usadas.",
    acts: [
      {"id":"ac55_a1","type":"tf","prompt":"A good academic definition should only give an example of the term, not explain what it means.","answer":false,"hint":"Uma boa definição acadêmica explica o significado e as características distintivas do termo."},
      {"id":"ac55_a2","type":"mc","prompt":"Which sentence provides the most complete academic definition?","options":["Democracy is a political system.","Democracy is when people vote.","Democracy refers to a system of government in which citizens exercise power through elected representatives.","Democracy is a concept related to politics and society."],"answerIdx":2,"hint":"A melhor definição identifica a categoria (sistema de governo) e suas características específicas."},
      {"id":"ac55_a3","type":"fill","prompt":"Biodiversity ___ to the variety of life forms found within a specific habitat or on Earth as a whole.","answer":"refers","keywords":["refers","is defined as","relates","pertains"],"hint":"Use o verbo que introduz formalmente uma definição acadêmica."},
      {"id":"ac55_a4","type":"text","prompt":"Write a formal academic definition of 'hypothesis'.","keywords":["hypothesis","refers","defined","proposition","statement","tested","prediction","research","assumed","verified"],"hint":"Use a estrutura: [termo] + 'refers to'/'is defined as' + categoria + características distintivas."}
    ]
  },
  ac56: {
    context: "Descrições de processos em textos acadêmicos explicam como algo funciona ou como um procedimento é executado. Elas geralmente usam voz passiva, tempo presente e palavras de sequência como 'first', 'subsequently', 'then' e 'finally'. Esse tipo de escrita é comum em seções de metodologia e textos científicos.",
    acts: [
      {"id":"ac56_a1","type":"tf","prompt":"Process descriptions in academic writing typically use the active voice and past tense.","answer":false,"hint":"Descrições de processos geralmente usam voz passiva e tempo presente em contextos acadêmicos."},
      {"id":"ac56_a2","type":"mc","prompt":"Which sentence correctly describes a step in a scientific process?","options":["We first mixed the chemicals.","First, the chemicals are mixed in a sterile container.","You mix the chemicals first.","First, mix the chemicals."],"answerIdx":1,"hint":"Procure a frase com voz passiva e vocabulário formal adequado para descrever um processo acadêmico."},
      {"id":"ac56_a3","type":"fill","prompt":"The samples are then ___ at 4°C for 24 hours before analysis.","answer":"stored","keywords":["stored","kept","maintained","preserved"],"hint":"Use um particípio passado que descreva o armazenamento das amostras nesse processo."},
      {"id":"ac56_a4","type":"text","prompt":"Write 3 sentences describing the process of how a questionnaire-based study is conducted (from design to analysis).","keywords":["first","subsequently","then","finally","designed","distributed","collected","analysed","participants","data"],"hint":"Use voz passiva e palavras de sequência para descrever as etapas do processo de pesquisa."}
    ]
  },
  ac57: {
    context: "Classificar e categorizar são habilidades essenciais em textos acadêmicos. Ao classificar, o autor organiza elementos em grupos com base em características comuns. Expressões como 'can be divided into', 'fall into three categories', 'there are two main types of' e 'can be classified as' são usadas para estruturar classificações.",
    acts: [
      {"id":"ac57_a1","type":"tf","prompt":"Classification in academic writing involves grouping items based on their shared characteristics.","answer":true,"hint":"Classificar significa organizar elementos em categorias com base em características comuns."},
      {"id":"ac57_a2","type":"mc","prompt":"Which sentence correctly introduces a classification?","options":["There are different things about energy.","Energy sources can be divided into two main categories: renewable and non-renewable.","Energy is important for many things.","We can talk about different types of energy."],"answerIdx":1,"hint":"Procure a frase que usa linguagem formal de classificação e apresenta as categorias claramente."},
      {"id":"ac57_a3","type":"fill","prompt":"Learning styles ___ three broad categories: visual, auditory, and kinaesthetic.","answer":"fall into","keywords":["fall into","can be divided into","are classified into","belong to"],"hint":"Use uma expressão verbal que indique que os estilos de aprendizagem pertencem a categorias específicas."},
      {"id":"ac57_a4","type":"text","prompt":"Write 2 sentences classifying the main types of research methods in social science.","keywords":["can be divided","classified","fall into","quantitative","qualitative","mixed","methods","categories","types","approaches"],"hint":"Use expressões de classificação para organizar os tipos de métodos de pesquisa em categorias claras."}
    ]
  },
  ac58: {
    context: "A linguagem de avaliação e julgamento é usada em textos acadêmicos para expressar o valor, a qualidade ou a importância de algo. Expressões como 'effective', 'significant', 'limited', 'valuable', 'problematic' e 'worthwhile' são comuns em análises críticas. O uso dessas palavras deve ser fundamentado em evidências, não em opiniões subjetivas.",
    acts: [
      {"id":"ac58_a1","type":"tf","prompt":"Evaluative language in academic writing should always be supported by evidence rather than personal preference.","answer":true,"hint":"Julgamentos acadêmicos devem ser fundamentados em evidências, não em preferências pessoais."},
      {"id":"ac58_a2","type":"mc","prompt":"Which sentence uses evaluative language most appropriately in an academic context?","options":["This method is the best ever.","I love this approach because it works well.","This methodology proves to be highly effective, as evidenced by its consistent replication across multiple studies.","This method is okay and gets good results."],"answerIdx":2,"hint":"Procure a avaliação formal que é sustentada por evidências específicas."},
      {"id":"ac58_a3","type":"fill","prompt":"The study's findings are ___; however, the small sample size limits their generalisability.","answer":"significant","keywords":["significant","valuable","noteworthy","meaningful"],"hint":"Use um adjetivo avaliativo que reconheça o valor dos achados antes de indicar uma limitação."},
      {"id":"ac58_a4","type":"text","prompt":"Write 2 sentences evaluating the strengths and limitations of using questionnaires as a research tool.","keywords":["effective","efficient","data","large","however","limited","depth","qualitative","valuable","provide"],"hint":"Use linguagem avaliativa formal para apresentar um ponto forte e uma limitação dos questionários como instrumento de pesquisa."}
    ]
  },
  ac59: {
    context: "Descrever a metodologia de pesquisa envolve explicar o design do estudo, os participantes, os instrumentos e os procedimentos de análise de dados. O vocabulário inclui termos como 'semi-structured interview', 'thematic analysis', 'random sampling', 'control group' e 'longitudinal study'. A precisão e a clareza são essenciais nessa seção.",
    acts: [
      {"id":"ac59_a1","type":"tf","prompt":"A longitudinal study collects data from participants at multiple points in time.","answer":true,"hint":"Estudos longitudinais acompanham participantes ao longo do tempo, coletando dados em múltiplos momentos."},
      {"id":"ac59_a2","type":"mc","prompt":"Which term refers to a sampling method in which every member of the population has an equal chance of being selected?","options":["Convenience sampling","Purposive sampling","Random sampling","Snowball sampling"],"answerIdx":2,"hint":"O método de amostragem em que todos têm igual probabilidade de ser selecionados é..."},
      {"id":"ac59_a3","type":"fill","prompt":"A ___ group receives no treatment and serves as a baseline for comparison in experimental studies.","answer":"control","keywords":["control","comparison","baseline","reference"],"hint":"Qual grupo em um experimento não recebe o tratamento e serve de comparação?"},
      {"id":"ac59_a4","type":"text","prompt":"Write 2 sentences describing the methodology of a qualitative study using semi-structured interviews with 15 university students.","keywords":["qualitative","semi-structured","interviews","conducted","15","participants","thematic","analysis","data","explore"],"hint":"Descreva o design, os participantes e o método de análise usando vocabulário técnico de metodologia de pesquisa."}
    ]
  },
  ac60: {
    context: "As conclusões de textos acadêmicos sintetizam os principais achados e discutem suas implicações teóricas ou práticas. Uma boa conclusão responde à pergunta de pesquisa, reconhece limitações e sugere direções futuras. Expressões como 'it can be concluded that', 'the findings imply' e 'future research should' são características desse tipo de escrita.",
    acts: [
      {"id":"ac60_a1","type":"tf","prompt":"A conclusion should introduce new arguments and evidence not discussed in the body of the essay.","answer":false,"hint":"A conclusão sintetiza os argumentos já apresentados; não é o lugar para introduzir novas ideias."},
      {"id":"ac60_a2","type":"mc","prompt":"Which sentence is most appropriate for the conclusion of an academic paper?","options":["I hope this essay was helpful and interesting.","In conclusion, this paper has examined X and shown that Y, with implications for future research in Z.","There is still so much we don't know about this topic.","I have now finished discussing the topic."],"answerIdx":1,"hint":"Procure a frase que formalmente sintetiza as descobertas e aponta para implicações futuras."},
      {"id":"ac60_a3","type":"fill","prompt":"The findings of this study ___ that early intervention is critical for language development.","answer":"imply","keywords":["imply","suggest","indicate","demonstrate"],"hint":"Use um verbo que indica que os achados apontam para uma conclusão ou implicação."},
      {"id":"ac60_a4","type":"text","prompt":"Write a 3-sentence conclusion for a study that found that mindfulness training reduces stress in university students.","keywords":["concluded","demonstrated","mindfulness","reduces","stress","implications","furthermore","future","research","wellbeing"],"hint":"Retome a descoberta principal, discuta suas implicações práticas e sugira uma direção para pesquisas futuras."}
    ]
  }
};
export default DEFAULT_ACTIVITIES;
