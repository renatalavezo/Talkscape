export const DEFAULT_ACTIVITIES = {
  ge1: [
    {"id":"ge1_a1","type":"mc","prompt":"Which sentence uses the Present Simple correctly?","options":["She go to school every day.","She goes to school every day.","She is go to school every day.","She going to school every day."],"answerIdx":1},
    {"id":"ge1_a2","type":"fill","prompt":"He ___ (work) at a hospital.","answer":"works","keywords":["works"]},
  ],
  ge2: [
    {"id":"ge2_a1","type":"fill","prompt":"They ___ (not / like) coffee.","answer":"don't like","keywords":["don't like","do not like"]},
    {"id":"ge2_a2","type":"mc","prompt":"Choose the correct question form.","options":["Does she likes tea?","Do she like tea?","Does she like tea?","She does like tea?"],"answerIdx":2},
  ],
  ge3: [
    {"id":"ge3_a1","type":"mc","prompt":"Choose the correct article: I saw ___ elephant at the zoo.","options":["a","an","the","—"],"answerIdx":1},
    {"id":"ge3_a2","type":"fill","prompt":"She is ___ honest person. (a/an)","answer":"an","keywords":["an"]},
  ],
  ge4: [
    {"id":"ge4_a1","type":"mc","prompt":"We have a meeting ___ Monday.","options":["in","on","at","to"],"answerIdx":1},
    {"id":"ge4_a2","type":"fill","prompt":"The party starts ___ 8 o'clock.","answer":"at","keywords":["at"]},
  ],
  ge5: [
    {"id":"ge5_a1","type":"text","prompt":"Write 5 sentences about yourself using the Present Simple (job, hobbies, routine).","keywords":["i am","i live","i work","i like","every day"]},
    {"id":"ge5_a2","type":"fill","prompt":"I ___ in São Paulo. (live)","answer":"live","keywords":["live"]},
  ],
  ge6: [
    {"id":"ge6_a1","type":"match","prompt":"Match the common words with their Portuguese meaning.","pairs":[{"left":"people","right":"pessoas"},{"left":"because","right":"porque"},{"left":"always","right":"sempre"},{"left":"never","right":"nunca"}]},
    {"id":"ge6_a2","type":"translate","prompt":"I want to learn English.","answer":"Eu quero aprender inglês.","keywords":["quero","aprender","inglês"]},
  ],
  ge7: [
    {"id":"ge7_a1","type":"mc","prompt":"What does the false friend \"actually\" really mean?","options":["atualmente","na verdade","de novo","agora"],"answerIdx":1},
    {"id":"ge7_a2","type":"match","prompt":"Match the false friend with its true meaning.","pairs":[{"left":"pretend","right":"fingir"},{"left":"push","right":"empurrar"},{"left":"parents","right":"pais"},{"left":"library","right":"biblioteca"}]},
  ],
  ge8: [
    {"id":"ge8_a1","type":"translate","prompt":"I go to work by bus.","answer":"Eu vou para o trabalho de ônibus.","keywords":["trabalho","ônibus","vou"]},
    {"id":"ge8_a2","type":"match","prompt":"Match the everyday word with its meaning.","pairs":[{"left":"breakfast","right":"café da manhã"},{"left":"kitchen","right":"cozinha"},{"left":"street","right":"rua"},{"left":"weekend","right":"fim de semana"}]},
  ],
  ge9: [
    {"id":"ge9_a1","type":"tf","prompt":"In \"6 Minute English\", the audio is about six minutes long.","answer":true},
    {"id":"ge9_a2","type":"text","prompt":"Write 2 new words you heard in the 6 Minute English episode and their meaning.","keywords":["word","meaning","learned"]},
  ],
  ge10: [
    {"id":"ge10_a1","type":"text","prompt":"Write 10 sentences using new vocabulary you have learned this week.","keywords":["i","the","because","new word"]},
    {"id":"ge10_a2","type":"fill","prompt":"Yesterday I learned a new ___ in English. (word)","answer":"word","keywords":["word"]},
  ],
  ge11: [
    {"id":"ge11_a1","type":"tf","prompt":"A1 listening usually uses slow, clear speech.","answer":true},
    {"id":"ge11_a2","type":"mc","prompt":"What is the best first step in a listening task?","options":["Translate every word","Read the questions first","Close your eyes","Speak louder"],"answerIdx":1},
  ],
  ge12: [
    {"id":"ge12_a1","type":"tf","prompt":"Subtitles in English can help you connect sound and spelling.","answer":true},
    {"id":"ge12_a2","type":"text","prompt":"Write 3 sentences you understood from the video you watched.","keywords":["i heard","the video","understood"]},
  ],
  ge13: [
    {"id":"ge13_a1","type":"mc","prompt":"\"Listening for gist\" means listening for:","options":["every single word","the main idea","only numbers","the speaker's name"],"answerIdx":1},
    {"id":"ge13_a2","type":"tf","prompt":"For gist you must understand 100% of the words.","answer":false},
  ],
  ge14: [
    {"id":"ge14_a1","type":"text","prompt":"Write the chorus of the song you listened to.","keywords":["chorus","song","lyrics"]},
    {"id":"ge14_a2","type":"tf","prompt":"Listening to songs can help you learn natural pronunciation.","answer":true},
  ],
  ge15: [
    {"id":"ge15_a1","type":"text","prompt":"Write 3 things you understood from the 3-minute video.","keywords":["i understood","the video","about"]},
    {"id":"ge15_a2","type":"tf","prompt":"You should watch the video at least twice.","answer":true},
  ],
  ge16: [
    {"id":"ge16_a1","type":"mc","prompt":"Which is a natural way to introduce yourself?","options":["My name be John.","Hi, I'm John, nice to meet you.","I John, hello.","Me is John."],"answerIdx":1},
    {"id":"ge16_a2","type":"text","prompt":"Introduce yourself: name, where you are from, and your job.","keywords":["my name","i am from","i work","nice to meet"]},
  ],
  ge17: [
    {"id":"ge17_a1","type":"match","prompt":"Match the small-talk topic with a phrase.","pairs":[{"left":"weather","right":"Nice day, isn't it?"},{"left":"weekend","right":"How was your weekend?"},{"left":"hobbies","right":"What do you do for fun?"},{"left":"work","right":"How's work going?"}]},
    {"id":"ge17_a2","type":"text","prompt":"Write a short small-talk conversation about the weekend.","keywords":["weekend","how about","did you","it was"]},
  ],
  ge18: [
    {"id":"ge18_a1","type":"mc","prompt":"Choose the correct question.","options":["Where you live?","Where do you live?","Where lives you?","You live where?"],"answerIdx":1},
    {"id":"ge18_a2","type":"fill","prompt":"___ time is it? (question word)","answer":"What","keywords":["What"]},
  ],
  ge19: [
    {"id":"ge19_a1","type":"text","prompt":"Script a 60-second self-introduction to record (name, origin, job, hobbies, goals).","keywords":["my name","i am from","i like","my goal"]},
    {"id":"ge19_a2","type":"tf","prompt":"Recording yourself helps you notice pronunciation mistakes.","answer":true},
  ],
  ge20: [
    {"id":"ge20_a1","type":"text","prompt":"Write a short message to Teacher Renata to send with your recording.","keywords":["hello","recording","teacher","thank you"]},
    {"id":"ge20_a2","type":"tf","prompt":"Sharing your recording with a teacher gives you useful feedback.","answer":true},
  ],
  ge21: [
    {"id":"ge21_a1","type":"tf","prompt":"A1 level stories use simple vocabulary and short sentences.","answer":true},
    {"id":"ge21_a2","type":"text","prompt":"Write 2 sentences summarizing the A1 story you read.","keywords":["the story","about","character"]},
  ],
  ge22: [
    {"id":"ge22_a1","type":"mc","prompt":"\"Skimming\" a text means:","options":["reading every word slowly","reading quickly for the main idea","reading only the last line","memorizing the text"],"answerIdx":1},
    {"id":"ge22_a2","type":"tf","prompt":"Skimming is useful to get a general understanding fast.","answer":true},
  ],
  ge23: [
    {"id":"ge23_a1","type":"text","prompt":"Write the main idea of the news story you read.","keywords":["the news","about","main idea"]},
    {"id":"ge23_a2","type":"tf","prompt":"Headlines often summarize the main idea of a news story.","answer":true},
  ],
  ge24: [
    {"id":"ge24_a1","type":"mc","prompt":"Using \"context clues\" means you:","options":["ignore unknown words","guess meaning from surrounding words","use a dictionary only","translate everything"],"answerIdx":1},
    {"id":"ge24_a2","type":"text","prompt":"Write one word you guessed from context and what you think it means.","keywords":["word","guess","context"]},
  ],
  ge25: [
    {"id":"ge25_a1","type":"text","prompt":"Write 3 sentences about what you read today.","keywords":["i read","it was about","i learned"]},
    {"id":"ge25_a2","type":"fill","prompt":"The text ___ about animals. (be)","answer":"was","keywords":["was","is"]},
  ],
  ge26: [
    {"id":"ge26_a1","type":"mc","prompt":"A good paragraph usually starts with a:","options":["conclusion","topic sentence","question only","random fact"],"answerIdx":1},
    {"id":"ge26_a2","type":"tf","prompt":"A paragraph should focus on one main idea.","answer":true},
  ],
  ge27: [
    {"id":"ge27_a1","type":"match","prompt":"Match the linking word with its function.","pairs":[{"left":"and","right":"addition"},{"left":"but","right":"contrast"},{"left":"because","right":"reason"},{"left":"so","right":"result"}]},
    {"id":"ge27_a2","type":"fill","prompt":"I was tired, ___ I went to bed early. (result)","answer":"so","keywords":["so"]},
  ],
  ge28: [
    {"id":"ge28_a1","type":"text","prompt":"Write a short paragraph about your daily routine using Present Simple.","keywords":["i wake up","then","every day","i go"]},
    {"id":"ge28_a2","type":"fill","prompt":"I usually ___ up at 7 a.m. (get)","answer":"get","keywords":["get"]},
  ],
  ge29: [
    {"id":"ge29_a1","type":"text","prompt":"Write an informal message to a friend inviting them to a movie.","keywords":["hey","do you want","movie","let's"]},
    {"id":"ge29_a2","type":"tf","prompt":"Informal messages can use contractions like \"I'm\" and \"let's\".","answer":true},
  ],
  ge30: [
    {"id":"ge30_a1","type":"mc","prompt":"Which sentence is punctuated correctly?","options":["i live in brazil","I live in Brazil.","I live in brazil","i Live In Brazil."],"answerIdx":1},
    {"id":"ge30_a2","type":"fill","prompt":"Spell the day: Wed___day","answer":"nes","keywords":["nes","nesday"]},
  ],
  ge31: [
    {"id":"ge31_a1","type":"mc","prompt":"What is the past simple of \"go\"?","options":["goed","went","gone","goes"],"answerIdx":1},
    {"id":"ge31_a2","type":"fill","prompt":"She ___ (visit) her grandmother last week.","answer":"visited","keywords":["visited"]},
  ],
  ge32: [
    {"id":"ge32_a1","type":"fill","prompt":"They ___ (not / play) football yesterday.","answer":"didn't play","keywords":["didn't play","did not play"]},
    {"id":"ge32_a2","type":"mc","prompt":"Choose the correct past question.","options":["Did you went?","Did you go?","Do you went?","Did you going?"],"answerIdx":1},
  ],
  ge33: [
    {"id":"ge33_a1","type":"match","prompt":"Match the verb with its past form.","pairs":[{"left":"eat","right":"ate"},{"left":"see","right":"saw"},{"left":"buy","right":"bought"},{"left":"make","right":"made"}]},
    {"id":"ge33_a2","type":"fill","prompt":"The past of \"have\" is ___.","answer":"had","keywords":["had"]},
  ],
  ge34: [
    {"id":"ge34_a1","type":"text","prompt":"Write 2 things that happened in the past-tense story you heard.","keywords":["happened","then","the story"]},
    {"id":"ge34_a2","type":"tf","prompt":"The story used past tense verbs to describe finished actions.","answer":true},
  ],
  ge35: [
    {"id":"ge35_a1","type":"text","prompt":"Write about what you did last weekend using past simple.","keywords":["last weekend","i went","i did","it was"]},
    {"id":"ge35_a2","type":"fill","prompt":"Last Saturday I ___ (watch) a movie.","answer":"watched","keywords":["watched"]},
  ],
  ge36: [
    {"id":"ge36_a1","type":"mc","prompt":"Which expresses a plan you already decided?","options":["I will maybe go.","I am going to visit Rio.","I go Rio.","I will go suddenly."],"answerIdx":1},
    {"id":"ge36_a2","type":"fill","prompt":"Look at those clouds! It ___ rain. (going to)","answer":"is going to","keywords":["is going to"]},
  ],
  ge37: [
    {"id":"ge37_a1","type":"mc","prompt":"We use \"will\" for:","options":["fixed plans","spontaneous decisions","past actions","daily routines"],"answerIdx":1},
    {"id":"ge37_a2","type":"fill","prompt":"The phone is ringing. I ___ answer it.","answer":"will","keywords":["will"]},
  ],
  ge38: [
    {"id":"ge38_a1","type":"match","prompt":"Match the future time expression with its meaning.","pairs":[{"left":"tomorrow","right":"amanhã"},{"left":"next week","right":"próxima semana"},{"left":"soon","right":"em breve"},{"left":"later","right":"mais tarde"}]},
    {"id":"ge38_a2","type":"fill","prompt":"I will see you ___ week. (next)","answer":"next","keywords":["next"]},
  ],
  ge39: [
    {"id":"ge39_a1","type":"tf","prompt":"People often use \"going to\" when talking about plans.","answer":true},
    {"id":"ge39_a2","type":"text","prompt":"Write 2 plans you heard people talk about.","keywords":["plan","going to","will"]},
  ],
  ge40: [
    {"id":"ge40_a1","type":"text","prompt":"Say/write 5 things you are going to do this week.","keywords":["i am going to","this week","will"]},
    {"id":"ge40_a2","type":"fill","prompt":"I am going ___ study tonight. (to)","answer":"to","keywords":["to"]},
  ],
  ge41: [
    {"id":"ge41_a1","type":"match","prompt":"Match the shopping phrase with its use.","pairs":[{"left":"How much is it?","right":"asking price"},{"left":"I'll take it","right":"deciding to buy"},{"left":"Do you have...?","right":"checking stock"},{"left":"Can I pay by card?","right":"payment"}]},
    {"id":"ge41_a2","type":"text","prompt":"Write a short dialogue buying a shirt in a shop.","keywords":["how much","i'll take","size","card"]},
  ],
  ge42: [
    {"id":"ge42_a1","type":"mc","prompt":"How do you politely ask for directions?","options":["Where is bank!","Excuse me, where is the bank?","Bank where?","Give me bank."],"answerIdx":1},
    {"id":"ge42_a2","type":"fill","prompt":"Go straight and turn ___ at the corner. (left/right)","answer":"left","keywords":["left","right"]},
  ],
  ge43: [
    {"id":"ge43_a1","type":"match","prompt":"Match the restaurant word with its meaning.","pairs":[{"left":"menu","right":"cardápio"},{"left":"bill","right":"conta"},{"left":"waiter","right":"garçom"},{"left":"starter","right":"entrada"}]},
    {"id":"ge43_a2","type":"translate","prompt":"Can I see the menu, please?","answer":"Posso ver o cardápio, por favor?","keywords":["cardápio","por favor","posso"]},
  ],
  ge44: [
    {"id":"ge44_a1","type":"tf","prompt":"At a café you might hear \"What can I get you?\"","answer":true},
    {"id":"ge44_a2","type":"mc","prompt":"A polite café order is:","options":["Give coffee.","I'll have a coffee, please.","Coffee now!","Want coffee."],"answerIdx":1},
  ],
  ge45: [
    {"id":"ge45_a1","type":"text","prompt":"Roleplay ordering a meal: greet, order a main, a drink, and ask for the bill.","keywords":["i'll have","for me","drink","the bill"]},
    {"id":"ge45_a2","type":"fill","prompt":"\"Are you ready to order?\" \"Yes, I ___ have the soup.\"","answer":"will","keywords":["will","'ll"]},
  ],
  ge46: [
    {"id":"ge46_a1","type":"match","prompt":"Match the adjective with its meaning.","pairs":[{"left":"tall","right":"alto"},{"left":"kind","right":"gentil"},{"left":"shy","right":"tímido"},{"left":"curly","right":"cacheado"}]},
    {"id":"ge46_a2","type":"text","prompt":"Describe a friend's appearance and personality in 2 sentences.","keywords":["he is","she is","tall","kind"]},
  ],
  ge47: [
    {"id":"ge47_a1","type":"mc","prompt":"Choose the correct comparative.","options":["She is more tall than me.","She is taller than me.","She is tallest than me.","She is more taller."],"answerIdx":1},
    {"id":"ge47_a2","type":"fill","prompt":"This book is the ___ (interesting) of all. (superlative)","answer":"most interesting","keywords":["most interesting"]},
  ],
  ge48: [
    {"id":"ge48_a1","type":"fill","prompt":"A cheetah is ___ (fast) than a dog.","answer":"faster","keywords":["faster"]},
    {"id":"ge48_a2","type":"mc","prompt":"Choose the correct superlative.","options":["the goodest","the best","the most good","the better"],"answerIdx":1},
  ],
  ge49: [
    {"id":"ge49_a1","type":"tf","prompt":"To describe people we use adjectives like \"friendly\" and \"serious\".","answer":true},
    {"id":"ge49_a2","type":"text","prompt":"Write 2 sentences describing a person you heard about.","keywords":["he","she","seems","looks"]},
  ],
  ge50: [
    {"id":"ge50_a1","type":"text","prompt":"Write a short paragraph describing a person you admire and why.","keywords":["i admire","because","he is","she is"]},
    {"id":"ge50_a2","type":"fill","prompt":"My mother is the ___ (strong) person I know. (superlative)","answer":"strongest","keywords":["strongest"]},
  ],
  ge51: [
    {"id":"ge51_a1","type":"tf","prompt":"In connected speech, words often blend together (e.g., \"gonna\").","answer":true},
    {"id":"ge51_a2","type":"mc","prompt":"\"Want to\" in fast speech often sounds like:","options":["wanna","wonto","wantu","wat"],"answerIdx":0},
  ],
  ge52: [
    {"id":"ge52_a1","type":"mc","prompt":"Which word contains the \"th\" sound /θ/?","options":["this","think","that","them"],"answerIdx":1},
    {"id":"ge52_a2","type":"text","prompt":"Write 3 words with the \"R\" sound and practice saying them.","keywords":["red","right","around","word"]},
  ],
  ge53: [
    {"id":"ge53_a1","type":"match","prompt":"Match the filler phrase with its use.","pairs":[{"left":"Well,","right":"starting to answer"},{"left":"you know","right":"seeking agreement"},{"left":"I mean","right":"clarifying"},{"left":"actually","right":"correcting"}]},
    {"id":"ge53_a2","type":"tf","prompt":"Filler phrases give you time to think while speaking.","answer":true},
  ],
  ge54: [
    {"id":"ge54_a1","type":"tf","prompt":"\"Shadowing\" means repeating audio immediately as you hear it.","answer":true},
    {"id":"ge54_a2","type":"text","prompt":"Write one sentence you shadowed and found difficult.","keywords":["sentence","difficult","shadow"]},
  ],
  ge55: [
    {"id":"ge55_a1","type":"text","prompt":"Record yourself answering: What did you do today? Use past simple.","keywords":["today i","i went","i did","then"]},
    {"id":"ge55_a2","type":"fill","prompt":"Earlier I ___ (have) lunch with a friend.","answer":"had","keywords":["had"]},
  ],
  ge56: [
    {"id":"ge56_a1","type":"text","prompt":"Write which grammar exercise was your favorite and why.","keywords":["favorite","because","exercise","grammar"]},
    {"id":"ge56_a2","type":"tf","prompt":"Reviewing exercises helps you remember grammar rules.","answer":true},
  ],
  ge57: [
    {"id":"ge57_a1","type":"tf","prompt":"An A2 test checks elementary-level skills.","answer":true},
    {"id":"ge57_a2","type":"text","prompt":"Write 2 questions you found difficult on the A2 test.","keywords":["question","difficult","test"]},
  ],
  ge58: [
    {"id":"ge58_a1","type":"tf","prompt":"An A2 conversation may include opinions and short stories.","answer":true},
    {"id":"ge58_a2","type":"text","prompt":"Write the main topic of the A2 conversation you heard.","keywords":["conversation","about","topic"]},
  ],
  ge59: [
    {"id":"ge59_a1","type":"text","prompt":"Prepare 5 questions to use in a 5-minute conversation.","keywords":["what","how","do you","where"]},
    {"id":"ge59_a2","type":"tf","prompt":"Asking follow-up questions keeps a conversation going.","answer":true},
  ],
  ge60: [
    {"id":"ge60_a1","type":"text","prompt":"Write a paragraph about your English learning journey so far.","keywords":["i started","i learned","my goal","progress"]},
    {"id":"ge60_a2","type":"fill","prompt":"I have ___ (learn) a lot of English. (present perfect)","answer":"learned","keywords":["learned"]},
  ],
  bj1: [
    {"id":"bj1_a1","type":"text","prompt":"Write a professional self-introduction: name, role, company, responsibility.","keywords":["my name","i work","i am responsible","at"]},
    {"id":"bj1_a2","type":"mc","prompt":"Which is most professional?","options":["Hi, I'm the boss guy.","Hello, I'm Ana, Marketing Manager at Acme.","Yo, Ana here.","Me Ana, marketing."],"answerIdx":1},
  ],
  bj2: [
    {"id":"bj2_a1","type":"text","prompt":"Write 3 work-appropriate small-talk openers.","keywords":["how was your","busy week","weekend","project"]},
    {"id":"bj2_a2","type":"tf","prompt":"Politics and salary are usually safe small-talk topics at work.","answer":false},
  ],
  bj3: [
    {"id":"bj3_a1","type":"match","prompt":"Match the business word with its meaning.","pairs":[{"left":"colleague","right":"colega"},{"left":"deadline","right":"prazo"},{"left":"meeting","right":"reunião"},{"left":"report","right":"relatório"}]},
    {"id":"bj3_a2","type":"translate","prompt":"The deadline is next Friday.","answer":"O prazo é na próxima sexta-feira.","keywords":["prazo","sexta","próxima"]},
  ],
  bj4: [
    {"id":"bj4_a1","type":"match","prompt":"Match the greeting/farewell with its register.","pairs":[{"left":"Dear Mr Smith","right":"formal opening"},{"left":"Hi team","right":"informal opening"},{"left":"Kind regards","right":"formal closing"},{"left":"Cheers","right":"informal closing"}]},
    {"id":"bj4_a2","type":"mc","prompt":"A professional farewell email closing is:","options":["Bye!","Best regards,","See ya","Later"],"answerIdx":1},
  ],
  bj5: [
    {"id":"bj5_a1","type":"text","prompt":"Write a 3-sentence LinkedIn summary about your professional self.","keywords":["experienced","passionate","skills","results"]},
    {"id":"bj5_a2","type":"tf","prompt":"A LinkedIn summary should highlight your skills and achievements.","answer":true},
  ],
  bj6: [
    {"id":"bj6_a1","type":"mc","prompt":"The correct order of an email is:","options":["Body, Subject, Greeting","Greeting, Body, Closing","Closing, Body, Greeting","Body only"],"answerIdx":1},
    {"id":"bj6_a2","type":"text","prompt":"Write the subject line and greeting for a meeting request email.","keywords":["subject","meeting","dear","hello"]},
  ],
  bj7: [
    {"id":"bj7_a1","type":"fill","prompt":"I am writing to ___ about the invoice. (enquire/inform)","answer":"enquire","keywords":["enquire","inquire","inform"]},
    {"id":"bj7_a2","type":"mc","prompt":"Which is a formal opening?","options":["I want to talk about...","I am writing to inform you...","Hey, quick thing...","So, the report..."],"answerIdx":1},
  ],
  bj8: [
    {"id":"bj8_a1","type":"fill","prompt":"___ you please send the report by Monday? (polite request)","answer":"Could","keywords":["Could","Would"]},
    {"id":"bj8_a2","type":"mc","prompt":"The most polite request is:","options":["Send the file.","Could you please send the file?","Give me the file now.","I need file."],"answerIdx":1},
  ],
  bj9: [
    {"id":"bj9_a1","type":"tf","prompt":"Semi-formal emails can use \"Hi [Name]\" as a greeting.","answer":true},
    {"id":"bj9_a2","type":"text","prompt":"Write a semi-formal email greeting and first line to a known client.","keywords":["hi","hope","following up","wanted to"]},
  ],
  bj10: [
    {"id":"bj10_a1","type":"text","prompt":"Draft a one-line request, a follow-up, and an apology email opener.","keywords":["could you","following up","apologize","sorry"]},
    {"id":"bj10_a2","type":"fill","prompt":"I ___ for the delay in my reply. (apologize)","answer":"apologize","keywords":["apologize","apologise"]},
  ],
  bj11: [
    {"id":"bj11_a1","type":"match","prompt":"Match the meeting term with its meaning.","pairs":[{"left":"agenda","right":"pauta"},{"left":"minutes","right":"ata"},{"left":"attendees","right":"participantes"},{"left":"action item","right":"tarefa"}]},
    {"id":"bj11_a2","type":"mc","prompt":"\"Minutes\" of a meeting are:","options":["the time spent","the written record","the breaks","the budget"],"answerIdx":1},
  ],
  bj12: [
    {"id":"bj12_a1","type":"text","prompt":"Write a phrase to open and a phrase to close a meeting you chair.","keywords":["let's get started","welcome","to wrap up","thank you"]},
    {"id":"bj12_a2","type":"mc","prompt":"To move to the next topic you say:","options":["Shut up.","Let's move on to the next point.","We finish.","Topic over."],"answerIdx":1},
  ],
  bj13: [
    {"id":"bj13_a1","type":"mc","prompt":"How do you interrupt politely?","options":["Stop talking!","Sorry to interrupt, but...","Hey listen!","No, me now."],"answerIdx":1},
    {"id":"bj13_a2","type":"text","prompt":"Write 2 polite phrases to interrupt in a meeting.","keywords":["sorry to interrupt","may i add","can i jump in","excuse me"]},
  ],
  bj14: [
    {"id":"bj14_a1","type":"match","prompt":"Match the video call phrase with its situation.","pairs":[{"left":"You're on mute","right":"can't hear someone"},{"left":"Can you see my screen?","right":"sharing"},{"left":"You're breaking up","right":"bad connection"},{"left":"Let's wrap up","right":"ending"}]},
    {"id":"bj14_a2","type":"tf","prompt":"\"You're on mute\" means your microphone is off.","answer":true},
  ],
  bj15: [
    {"id":"bj15_a1","type":"text","prompt":"Write your opening line and one contribution for a mock meeting.","keywords":["welcome","i'd like to suggest","in my opinion","let's"]},
    {"id":"bj15_a2","type":"tf","prompt":"In a meeting you should listen actively and respond to others.","answer":true},
  ],
  bj16: [
    {"id":"bj16_a1","type":"mc","prompt":"A good presentation opening is:","options":["So, yeah, hi.","Good morning, today I'll talk about our Q3 results.","Let's see what happens.","I don't know where to start."],"answerIdx":1},
    {"id":"bj16_a2","type":"text","prompt":"Write an opening line for a presentation about sales results.","keywords":["good morning","today","i'll talk about","present"]},
  ],
  bj17: [
    {"id":"bj17_a1","type":"match","prompt":"Match the signpost with its function.","pairs":[{"left":"Firstly,","right":"starting"},{"left":"Moving on,","right":"changing topic"},{"left":"In conclusion,","right":"ending"},{"left":"For example,","right":"giving an example"}]},
    {"id":"bj17_a2","type":"fill","prompt":"___ conclusion, our profits increased. (signpost)","answer":"In","keywords":["In"]},
  ],
  bj18: [
    {"id":"bj18_a1","type":"match","prompt":"Match the chart word with its meaning.","pairs":[{"left":"rise","right":"subir"},{"left":"fall","right":"cair"},{"left":"peak","right":"pico"},{"left":"trend","right":"tendência"}]},
    {"id":"bj18_a2","type":"fill","prompt":"Sales ___ sharply in March. (increased a lot)","answer":"rose","keywords":["rose","increased"]},
  ],
  bj19: [
    {"id":"bj19_a1","type":"mc","prompt":"How do you handle a tough question diplomatically?","options":["That's a stupid question.","That's a great question, let me clarify.","I don't answer that.","Next!"],"answerIdx":1},
    {"id":"bj19_a2","type":"text","prompt":"Write a phrase to handle a question you cannot answer immediately.","keywords":["great question","let me get back","i'll check","good point"]},
  ],
  bj20: [
    {"id":"bj20_a1","type":"text","prompt":"Write a 3-sentence script: opening, main point, conclusion of a presentation.","keywords":["today","firstly","in conclusion","thank you"]},
    {"id":"bj20_a2","type":"tf","prompt":"A 3-minute presentation should have a clear structure.","answer":true},
  ],
  bj21: [
    {"id":"bj21_a1","type":"match","prompt":"Match the negotiation term with its meaning.","pairs":[{"left":"offer","right":"oferta"},{"left":"counteroffer","right":"contraproposta"},{"left":"compromise","right":"acordo/meio-termo"},{"left":"deal","right":"acordo"}]},
    {"id":"bj21_a2","type":"translate","prompt":"We need to reach a deal.","answer":"Precisamos chegar a um acordo.","keywords":["acordo","chegar","precisamos"]},
  ],
  bj22: [
    {"id":"bj22_a1","type":"mc","prompt":"A clear proposal phrase is:","options":["Maybe we do something.","I propose we extend the deadline.","Whatever you want.","We see."],"answerIdx":1},
    {"id":"bj22_a2","type":"text","prompt":"Write a sentence proposing a solution to a budget problem.","keywords":["i propose","suggest","we could","recommend"]},
  ],
  bj23: [
    {"id":"bj23_a1","type":"text","prompt":"Write a persuasive sentence to convince a client to buy.","keywords":["benefit","save","best","guarantee"]},
    {"id":"bj23_a2","type":"mc","prompt":"Which is persuasive language?","options":["It might be okay.","This will significantly boost your sales.","I guess it works.","Not sure."],"answerIdx":1},
  ],
  bj24: [
    {"id":"bj24_a1","type":"fill","prompt":"I think we can ___ on a price of $500. (agree)","answer":"agree","keywords":["agree"]},
    {"id":"bj24_a2","type":"text","prompt":"Write a phrase to confirm agreement at the end of a negotiation.","keywords":["we have a deal","agreed","sounds good","let's proceed"]},
  ],
  bj25: [
    {"id":"bj25_a1","type":"text","prompt":"Write a short persuasive business proposal (problem, solution, benefit).","keywords":["problem","propose","solution","benefit"]},
    {"id":"bj25_a2","type":"tf","prompt":"A proposal should clearly state the benefit to the reader.","answer":true},
  ],
  bj26: [
    {"id":"bj26_a1","type":"mc","prompt":"A report usually includes:","options":["only opinions","introduction, findings, conclusion","jokes","a shopping list"],"answerIdx":1},
    {"id":"bj26_a2","type":"text","prompt":"Write the section headings of a short business report.","keywords":["introduction","findings","conclusion","recommendation"]},
  ],
  bj27: [
    {"id":"bj27_a1","type":"match","prompt":"Match the trend word with its meaning.","pairs":[{"left":"soar","right":"disparar"},{"left":"plummet","right":"despencar"},{"left":"stabilize","right":"estabilizar"},{"left":"fluctuate","right":"flutuar"}]},
    {"id":"bj27_a2","type":"fill","prompt":"Profits ___ from $1M to $5M last year. (rose sharply)","answer":"soared","keywords":["soared","rose"]},
  ],
  bj28: [
    {"id":"bj28_a1","type":"mc","prompt":"Which connector shows cause and effect?","options":["however","as a result","meanwhile","for instance"],"answerIdx":1},
    {"id":"bj28_a2","type":"fill","prompt":"Sales dropped; ___, we cut costs. (consequently)","answer":"consequently","keywords":["consequently","therefore","as a result"]},
  ],
  bj29: [
    {"id":"bj29_a1","type":"mc","prompt":"Choose the correct passive sentence.","options":["The report was written by the team.","The team write the report.","The report writing the team.","Wrote the team report."],"answerIdx":0},
    {"id":"bj29_a2","type":"fill","prompt":"The data ___ (analyze) by the experts. (passive, past)","answer":"was analyzed","keywords":["was analyzed","were analyzed"]},
  ],
  bj30: [
    {"id":"bj30_a1","type":"text","prompt":"Write a 150-word report on a project: intro, findings, recommendation.","keywords":["this report","findings","recommend","conclusion"]},
    {"id":"bj30_a2","type":"tf","prompt":"Reports should use objective, formal language.","answer":true},
  ],
  bj31: [
    {"id":"bj31_a1","type":"match","prompt":"Match the business idiom with its meaning.","pairs":[{"left":"ballpark figure","right":"estimativa"},{"left":"touch base","right":"entrar em contato"},{"left":"in the loop","right":"informado"},{"left":"cut corners","right":"economizar de forma arriscada"}]},
    {"id":"bj31_a2","type":"mc","prompt":"\"To touch base\" means to:","options":["hit something","make contact","win a game","start over"],"answerIdx":1},
  ],
  bj32: [
    {"id":"bj32_a1","type":"match","prompt":"Match the acronym with its meaning.","pairs":[{"left":"ASAP","right":"as soon as possible"},{"left":"KPI","right":"key performance indicator"},{"left":"ROI","right":"return on investment"},{"left":"EOD","right":"end of day"}]},
    {"id":"bj32_a2","type":"fill","prompt":"Please send it ___ — we are in a hurry. (acronym)","answer":"ASAP","keywords":["ASAP"]},
  ],
  bj33: [
    {"id":"bj33_a1","type":"match","prompt":"Match the financial term with its meaning.","pairs":[{"left":"revenue","right":"receita"},{"left":"profit","right":"lucro"},{"left":"budget","right":"orçamento"},{"left":"expense","right":"despesa"}]},
    {"id":"bj33_a2","type":"translate","prompt":"We need to cut expenses.","answer":"Precisamos cortar despesas.","keywords":["despesas","cortar","precisamos"]},
  ],
  bj34: [
    {"id":"bj34_a1","type":"match","prompt":"Match the HR term with its meaning.","pairs":[{"left":"recruitment","right":"recrutamento"},{"left":"onboarding","right":"integração"},{"left":"payroll","right":"folha de pagamento"},{"left":"leave","right":"licença"}]},
    {"id":"bj34_a2","type":"mc","prompt":"\"Onboarding\" refers to:","options":["firing staff","integrating new employees","paying taxes","closing a deal"],"answerIdx":1},
  ],
  bj35: [
    {"id":"bj35_a1","type":"text","prompt":"Write a short paragraph using at least 3 business idioms.","keywords":["touch base","in the loop","ballpark","on the same page"]},
    {"id":"bj35_a2","type":"tf","prompt":"Idioms can make business writing sound natural but should be used appropriately.","answer":true},
  ],
  bj36: [
    {"id":"bj36_a1","type":"match","prompt":"Match the CV term with its meaning.","pairs":[{"left":"experience","right":"experiência"},{"left":"skills","right":"habilidades"},{"left":"achievements","right":"conquistas"},{"left":"references","right":"referências"}]},
    {"id":"bj36_a2","type":"text","prompt":"Write 2 strong action verbs to start CV bullet points.","keywords":["managed","led","developed","achieved"]},
  ],
  bj37: [
    {"id":"bj37_a1","type":"text","prompt":"Write a 3-sentence answer to \"Tell me about yourself.\"","keywords":["i have","experience","i am","passionate"]},
    {"id":"bj37_a2","type":"tf","prompt":"\"Tell me about yourself\" should focus on professional background, not hobbies only.","answer":true},
  ],
  bj38: [
    {"id":"bj38_a1","type":"mc","prompt":"STAR stands for:","options":["Stop, Talk, Act, Rest","Situation, Task, Action, Result","Start, Try, Ask, Read","Skill, Task, Aim, Reach"],"answerIdx":1},
    {"id":"bj38_a2","type":"text","prompt":"Write a short STAR answer about solving a problem at work.","keywords":["situation","task","action","result"]},
  ],
  bj39: [
    {"id":"bj39_a1","type":"text","prompt":"Write 2 good questions to ask an interviewer.","keywords":["what","team","growth","expect"]},
    {"id":"bj39_a2","type":"tf","prompt":"Asking questions shows interest in the role.","answer":true},
  ],
  bj40: [
    {"id":"bj40_a1","type":"text","prompt":"Write your answers to 3 common interview questions.","keywords":["my strength","experience","i would","example"]},
    {"id":"bj40_a2","type":"mc","prompt":"A good interview answer to \"weakness\" is:","options":["I have none.","I'm improving my time management.","I'm perfect.","I hate work."],"answerIdx":1},
  ],
  bj41: [
    {"id":"bj41_a1","type":"text","prompt":"Write 2 networking phrases to start a conversation at an event.","keywords":["what do you do","nice to meet","i work in","interesting"]},
    {"id":"bj41_a2","type":"tf","prompt":"Exchanging contact details is a normal part of networking.","answer":true},
  ],
  bj42: [
    {"id":"bj42_a1","type":"text","prompt":"Write a follow-up message after meeting someone at an event.","keywords":["great to meet","follow up","stay in touch","look forward"]},
    {"id":"bj42_a2","type":"mc","prompt":"A good follow-up opening is:","options":["Hey, who are you?","It was great meeting you at the conference.","Buy my product.","Forget about it."],"answerIdx":1},
  ],
  bj43: [
    {"id":"bj43_a1","type":"text","prompt":"Write 2 phrases that help build rapport with a client.","keywords":["i understand","that's interesting","tell me more","we both"]},
    {"id":"bj43_a2","type":"tf","prompt":"Building rapport means creating a positive, trusting relationship.","answer":true},
  ],
  bj44: [
    {"id":"bj44_a1","type":"text","prompt":"Write a short professional LinkedIn connection message.","keywords":["hi","i'd like to connect","your work","best"]},
    {"id":"bj44_a2","type":"tf","prompt":"A LinkedIn message should be polite and have a clear reason.","answer":true},
  ],
  bj45: [
    {"id":"bj45_a1","type":"text","prompt":"Write a 30-second elevator pitch about yourself or your product.","keywords":["i help","we provide","solution","results"]},
    {"id":"bj45_a2","type":"tf","prompt":"An elevator pitch should be short and memorable.","answer":true},
  ],
  bj46: [
    {"id":"bj46_a1","type":"text","prompt":"Write a sentence describing a work problem professionally.","keywords":["we are facing","the issue","challenge","currently"]},
    {"id":"bj46_a2","type":"mc","prompt":"A professional way to raise a problem is:","options":["Everything is a disaster!","We're facing a challenge with the timeline.","It's your fault.","Nothing works."],"answerIdx":1},
  ],
  bj47: [
    {"id":"bj47_a1","type":"text","prompt":"Write 2 phrases for suggesting a solution.","keywords":["we could","i suggest","one option","how about"]},
    {"id":"bj47_a2","type":"fill","prompt":"___ we hire a new supplier? (suggestion, \"What if\")","answer":"What if","keywords":["What if","How about"]},
  ],
  bj48: [
    {"id":"bj48_a1","type":"match","prompt":"Match the phrase with its function.","pairs":[{"left":"I see your point, but...","right":"disagreeing politely"},{"left":"I completely agree","right":"agreeing"},{"left":"That's a fair point","right":"acknowledging"},{"left":"I'm not so sure","right":"soft disagreement"}]},
    {"id":"bj48_a2","type":"text","prompt":"Write a sentence to disagree politely in a meeting.","keywords":["i see your point","however","i'm not sure","respectfully"]},
  ],
  bj49: [
    {"id":"bj49_a1","type":"match","prompt":"Match the decision word with its meaning.","pairs":[{"left":"approve","right":"aprovar"},{"left":"reject","right":"rejeitar"},{"left":"postpone","right":"adiar"},{"left":"finalize","right":"finalizar"}]},
    {"id":"bj49_a2","type":"fill","prompt":"We decided to ___ the meeting until next week. (delay)","answer":"postpone","keywords":["postpone","delay"]},
  ],
  bj50: [
    {"id":"bj50_a1","type":"text","prompt":"Write a short analysis of a business case: problem and recommendation.","keywords":["the company","problem","recommend","solution"]},
    {"id":"bj50_a2","type":"tf","prompt":"A case study analysis should support recommendations with reasons.","answer":true},
  ],
  bj51: [
    {"id":"bj51_a1","type":"mc","prompt":"In a high-context culture, communication is often:","options":["very direct","indirect and implicit","only written","always loud"],"answerIdx":1},
    {"id":"bj51_a2","type":"tf","prompt":"Low-context cultures value explicit, direct communication.","answer":true},
  ],
  bj52: [
    {"id":"bj52_a1","type":"match","prompt":"Match American to British business English.","pairs":[{"left":"résumé","right":"CV"},{"left":"elevator","right":"lift"},{"left":"schedule","right":"timetable"},{"left":"check","right":"cheque"}]},
    {"id":"bj52_a2","type":"mc","prompt":"In British English, \"résumé\" is usually called:","options":["paper","CV","sheet","list"],"answerIdx":1},
  ],
  bj53: [
    {"id":"bj53_a1","type":"tf","prompt":"Punctuality expectations vary between cultures.","answer":true},
    {"id":"bj53_a2","type":"text","prompt":"Write 2 etiquette tips for doing business abroad.","keywords":["tipping","punctual","respect","dress"]},
  ],
  bj54: [
    {"id":"bj54_a1","type":"text","prompt":"Write one way to avoid a cultural misunderstanding in business.","keywords":["ask","clarify","research","respect"]},
    {"id":"bj54_a2","type":"tf","prompt":"Asking polite questions can prevent cultural misunderstandings.","answer":true},
  ],
  bj55: [
    {"id":"bj55_a1","type":"text","prompt":"Write 2 facts about a business custom in another country.","keywords":["custom","culture","meeting","business"]},
    {"id":"bj55_a2","type":"tf","prompt":"Researching customs before a trip shows professionalism.","answer":true},
  ],
  bj56: [
    {"id":"bj56_a1","type":"text","prompt":"Rewrite \"Your idea is bad\" using diplomatic language.","keywords":["perhaps","we might","consider","another approach"]},
    {"id":"bj56_a2","type":"mc","prompt":"Diplomatic language is:","options":["blunt","softened and polite","rude","silent"],"answerIdx":1},
  ],
  bj57: [
    {"id":"bj57_a1","type":"text","prompt":"Write a 2-sentence executive summary of a project.","keywords":["the project","aims","results","summary"]},
    {"id":"bj57_a2","type":"mc","prompt":"An executive summary should be:","options":["very long","short and high-level","full of jargon","a joke"],"answerIdx":1},
  ],
  bj58: [
    {"id":"bj58_a1","type":"text","prompt":"Write an opening line for a crisis communication message.","keywords":["we are aware","addressing","apologize","update"]},
    {"id":"bj58_a2","type":"tf","prompt":"In a crisis, communication should be clear, honest, and timely.","answer":true},
  ],
  bj59: [
    {"id":"bj59_a1","type":"tf","prompt":"Business podcasts can help you learn professional vocabulary.","answer":true},
    {"id":"bj59_a2","type":"text","prompt":"Write 2 business terms you learned from a podcast.","keywords":["term","learned","podcast","business"]},
  ],
  bj60: [
    {"id":"bj60_a1","type":"text","prompt":"Write the structure of your full business proposal presentation.","keywords":["introduction","problem","solution","benefits","conclusion"]},
    {"id":"bj60_a2","type":"tf","prompt":"A business proposal presentation should end with a clear call to action.","answer":true},
  ],
  tr1: [
    {"id":"tr1_a1","type":"match","prompt":"Match the airport word with its meaning.","pairs":[{"left":"boarding pass","right":"cartão de embarque"},{"left":"gate","right":"portão"},{"left":"luggage","right":"bagagem"},{"left":"departure","right":"partida"}]},
    {"id":"tr1_a2","type":"translate","prompt":"Where is the boarding gate?","answer":"Onde fica o portão de embarque?","keywords":["portão","embarque","onde"]},
  ],
  tr2: [
    {"id":"tr2_a1","type":"text","prompt":"Write a short check-in dialogue with an airline agent.","keywords":["passport","window seat","one bag","boarding"]},
    {"id":"tr2_a2","type":"mc","prompt":"At check-in the agent may ask:","options":["Do you have any luggage to check?","What's for dinner?","Where do you live?","How old are you?"],"answerIdx":0},
  ],
  tr3: [
    {"id":"tr3_a1","type":"text","prompt":"Write 2 phrases you might say at airport security.","keywords":["laptop","liquids","belt","take off"]},
    {"id":"tr3_a2","type":"tf","prompt":"At security you may be asked to remove your laptop and belt.","answer":true},
  ],
  tr4: [
    {"id":"tr4_a1","type":"tf","prompt":"\"Now boarding at gate 12\" means you can get on the plane.","answer":true},
    {"id":"tr4_a2","type":"mc","prompt":"\"The flight is delayed\" means:","options":["it left early","it will be later than planned","it was cancelled","it is on time"],"answerIdx":1},
  ],
  tr5: [
    {"id":"tr5_a1","type":"text","prompt":"Roleplay the check-in process: greet, give passport, choose seat, check bag.","keywords":["passport","seat","bag","boarding pass"]},
    {"id":"tr5_a2","type":"tf","prompt":"You should arrive early to allow time for check-in.","answer":true},
  ],
  tr6: [
    {"id":"tr6_a1","type":"match","prompt":"Match the hotel word with its meaning.","pairs":[{"left":"reception","right":"recepção"},{"left":"key card","right":"cartão-chave"},{"left":"check-out","right":"saída"},{"left":"booking","right":"reserva"}]},
    {"id":"tr6_a2","type":"translate","prompt":"I have a reservation under Silva.","answer":"Eu tenho uma reserva no nome de Silva.","keywords":["reserva","nome","tenho"]},
  ],
  tr7: [
    {"id":"tr7_a1","type":"text","prompt":"Write a hotel check-in dialogue with the receptionist.","keywords":["reservation","name","room","key"]},
    {"id":"tr7_a2","type":"mc","prompt":"At hotel check-in you say:","options":["Give room.","I have a reservation under...","Sleep now.","Where bed?"],"answerIdx":1},
  ],
  tr8: [
    {"id":"tr8_a1","type":"text","prompt":"Write 2 polite requests to make at a hotel.","keywords":["could i have","extra towels","wake-up call","please"]},
    {"id":"tr8_a2","type":"fill","prompt":"___ I have an extra pillow, please? (polite request)","answer":"Could","keywords":["Could","May"]},
  ],
  tr9: [
    {"id":"tr9_a1","type":"text","prompt":"Write a polite complaint about a noisy hotel room.","keywords":["excuse me","the room","noisy","could you"]},
    {"id":"tr9_a2","type":"mc","prompt":"A polite complaint starts with:","options":["This is terrible!","Excuse me, I have a small problem...","You're useless.","Fix it now!"],"answerIdx":1},
  ],
  tr10: [
    {"id":"tr10_a1","type":"text","prompt":"Write a short hotel review mentioning service and cleanliness.","keywords":["the hotel","clean","staff","recommend"]},
    {"id":"tr10_a2","type":"tf","prompt":"A balanced review can mention both positives and negatives.","answer":true},
  ],
  tr11: [
    {"id":"tr11_a1","type":"match","prompt":"Match the transport word with its meaning.","pairs":[{"left":"subway","right":"metrô"},{"left":"fare","right":"tarifa"},{"left":"platform","right":"plataforma"},{"left":"one-way","right":"só ida"}]},
    {"id":"tr11_a2","type":"translate","prompt":"A return ticket, please.","answer":"Uma passagem de ida e volta, por favor.","keywords":["ida e volta","passagem","por favor"]},
  ],
  tr12: [
    {"id":"tr12_a1","type":"text","prompt":"Write a dialogue buying a train ticket.","keywords":["ticket","return","how much","platform"]},
    {"id":"tr12_a2","type":"mc","prompt":"To buy a single ticket you say:","options":["One-way ticket, please.","Give train.","I go now.","Ticket bye."],"answerIdx":0},
  ],
  tr13: [
    {"id":"tr13_a1","type":"text","prompt":"Write 2 phrases for talking to a taxi or Uber driver.","keywords":["take me to","how much","here is fine","airport"]},
    {"id":"tr13_a2","type":"fill","prompt":"Please take me ___ the airport. (preposition)","answer":"to","keywords":["to"]},
  ],
  tr14: [
    {"id":"tr14_a1","type":"tf","prompt":"On a transport map, colored lines usually represent different routes.","answer":true},
    {"id":"tr14_a2","type":"text","prompt":"Write how you would explain a route using a map (2 steps).","keywords":["take the","line","change at","get off"]},
  ],
  tr15: [
    {"id":"tr15_a1","type":"text","prompt":"Plan a transport itinerary for one day in a city.","keywords":["take","then","metro","arrive"]},
    {"id":"tr15_a2","type":"tf","prompt":"Planning routes in advance saves time when traveling.","answer":true},
  ],
  tr16: [
    {"id":"tr16_a1","type":"match","prompt":"Match the restaurant word with its meaning.","pairs":[{"left":"reservation","right":"reserva"},{"left":"starter","right":"entrada"},{"left":"main course","right":"prato principal"},{"left":"tip","right":"gorjeta"}]},
    {"id":"tr16_a2","type":"translate","prompt":"A table for two, please.","answer":"Uma mesa para dois, por favor.","keywords":["mesa","dois","por favor"]},
  ],
  tr17: [
    {"id":"tr17_a1","type":"text","prompt":"Write a dialogue ordering food at a restaurant.","keywords":["i'll have","for me","drink","please"]},
    {"id":"tr17_a2","type":"mc","prompt":"To order you say:","options":["Give food.","I'll have the pasta, please.","Food now.","Eat this."],"answerIdx":1},
  ],
  tr18: [
    {"id":"tr18_a1","type":"text","prompt":"Write how to explain a dietary need (e.g., vegetarian, allergy).","keywords":["i'm vegetarian","allergic","without","i can't eat"]},
    {"id":"tr18_a2","type":"fill","prompt":"I'm ___ to nuts. (allergy)","answer":"allergic","keywords":["allergic"]},
  ],
  tr19: [
    {"id":"tr19_a1","type":"text","prompt":"Write 2 phrases for asking for and paying the bill.","keywords":["the bill","check please","can i pay","card"]},
    {"id":"tr19_a2","type":"mc","prompt":"To ask for the bill you say:","options":["Money!","Could we have the bill, please?","Pay now.","Bill go."],"answerIdx":1},
  ],
  tr20: [
    {"id":"tr20_a1","type":"text","prompt":"Roleplay a full restaurant visit: greet, order, eat, pay.","keywords":["table","order","i'll have","bill"]},
    {"id":"tr20_a2","type":"tf","prompt":"Saying \"please\" and \"thank you\" is polite in restaurants.","answer":true},
  ],
  tr21: [
    {"id":"tr21_a1","type":"match","prompt":"Match the shopping word with its meaning.","pairs":[{"left":"discount","right":"desconto"},{"left":"receipt","right":"recibo"},{"left":"fitting room","right":"provador"},{"left":"size","right":"tamanho"}]},
    {"id":"tr21_a2","type":"translate","prompt":"How much does this cost?","answer":"Quanto custa isto?","keywords":["quanto","custa","isto"]},
  ],
  tr22: [
    {"id":"tr22_a1","type":"text","prompt":"Write 2 questions to ask about a product in a shop.","keywords":["do you have","what size","how much","color"]},
    {"id":"tr22_a2","type":"fill","prompt":"Do you have this in a ___ size? (bigger)","answer":"bigger","keywords":["bigger","larger"]},
  ],
  tr23: [
    {"id":"tr23_a1","type":"text","prompt":"Write a bargaining dialogue at a market.","keywords":["too expensive","best price","can you","discount"]},
    {"id":"tr23_a2","type":"mc","prompt":"To bargain politely you say:","options":["Cheaper now!","Could you give me a better price?","Pay less!","No money."],"answerIdx":1},
  ],
  tr24: [
    {"id":"tr24_a1","type":"text","prompt":"Write a dialogue returning a product that doesn't fit.","keywords":["return","doesn't fit","receipt","refund"]},
    {"id":"tr24_a2","type":"fill","prompt":"I'd like to ___ this shirt, please. (give back)","answer":"return","keywords":["return"]},
  ],
  tr25: [
    {"id":"tr25_a1","type":"text","prompt":"Write a souvenir shopping dialogue.","keywords":["souvenir","how much","i'll take","gift"]},
    {"id":"tr25_a2","type":"tf","prompt":"Asking the price before buying is common when shopping.","answer":true},
  ],
  tr26: [
    {"id":"tr26_a1","type":"match","prompt":"Match the direction word with its meaning.","pairs":[{"left":"straight","right":"em frente"},{"left":"left","right":"esquerda"},{"left":"right","right":"direita"},{"left":"corner","right":"esquina"}]},
    {"id":"tr26_a2","type":"translate","prompt":"Turn left at the corner.","answer":"Vire à esquerda na esquina.","keywords":["vire","esquerda","esquina"]},
  ],
  tr27: [
    {"id":"tr27_a1","type":"text","prompt":"Write how you politely ask a stranger for directions.","keywords":["excuse me","how do i get","where is","nearest"]},
    {"id":"tr27_a2","type":"mc","prompt":"Polite way to ask directions:","options":["Where station!","Excuse me, how do I get to the station?","Station now.","Tell station."],"answerIdx":1},
  ],
  tr28: [
    {"id":"tr28_a1","type":"tf","prompt":"\"Go straight and it's on your right\" gives a direction.","answer":true},
    {"id":"tr28_a2","type":"text","prompt":"Write the directions you understood from a recording (2 steps).","keywords":["go straight","turn","on the","it's"]},
  ],
  tr29: [
    {"id":"tr29_a1","type":"match","prompt":"Match the Google Maps term with its meaning.","pairs":[{"left":"route","right":"rota"},{"left":"destination","right":"destino"},{"left":"nearby","right":"por perto"},{"left":"directions","right":"instruções"}]},
    {"id":"tr29_a2","type":"fill","prompt":"Set your ___ to the museum. (destination)","answer":"destination","keywords":["destination"]},
  ],
  tr30: [
    {"id":"tr30_a1","type":"text","prompt":"Write directions to 3 attractions from your hotel.","keywords":["go straight","turn","then","it's near"]},
    {"id":"tr30_a2","type":"tf","prompt":"Clear directions usually include landmarks.","answer":true},
  ],
  tr31: [
    {"id":"tr31_a1","type":"match","prompt":"Match the medical word with its meaning.","pairs":[{"left":"fever","right":"febre"},{"left":"pain","right":"dor"},{"left":"pharmacy","right":"farmácia"},{"left":"doctor","right":"médico"}]},
    {"id":"tr31_a2","type":"translate","prompt":"I need a doctor.","answer":"Eu preciso de um médico.","keywords":["médico","preciso","um"]},
  ],
  tr32: [
    {"id":"tr32_a1","type":"text","prompt":"Write a pharmacy dialogue asking for medicine for a headache.","keywords":["do you have","headache","medicine","painkiller"]},
    {"id":"tr32_a2","type":"fill","prompt":"I have a ___ and need some medicine. (head pain)","answer":"headache","keywords":["headache"]},
  ],
  tr33: [
    {"id":"tr33_a1","type":"text","prompt":"Write 2 emergency phrases you might need.","keywords":["help","call an ambulance","emergency","i need help"]},
    {"id":"tr33_a2","type":"mc","prompt":"In an emergency you shout:","options":["Hello?","Help! Call an ambulance!","Maybe later.","Nice day."],"answerIdx":1},
  ],
  tr34: [
    {"id":"tr34_a1","type":"text","prompt":"Write how you would describe symptoms to a doctor.","keywords":["i feel","i have a","it hurts","since"]},
    {"id":"tr34_a2","type":"fill","prompt":"I have a sore ___ and can't swallow. (throat)","answer":"throat","keywords":["throat"]},
  ],
  tr35: [
    {"id":"tr35_a1","type":"tf","prompt":"Knowing the local emergency number is important when traveling.","answer":true},
    {"id":"tr35_a2","type":"match","prompt":"Match the service with its purpose.","pairs":[{"left":"ambulance","right":"medical help"},{"left":"police","right":"crime/safety"},{"left":"fire brigade","right":"fires"},{"left":"pharmacy","right":"medicine"}]},
  ],
  tr36: [
    {"id":"tr36_a1","type":"match","prompt":"Match the tourism word with its meaning.","pairs":[{"left":"sightseeing","right":"passeio turístico"},{"left":"landmark","right":"ponto de referência"},{"left":"guide","right":"guia"},{"left":"admission","right":"entrada"}]},
    {"id":"tr36_a2","type":"translate","prompt":"How much is the entrance ticket?","answer":"Quanto custa o ingresso de entrada?","keywords":["ingresso","entrada","quanto"]},
  ],
  tr37: [
    {"id":"tr37_a1","type":"text","prompt":"Write a dialogue buying tickets for a museum.","keywords":["two tickets","how much","student","open"]},
    {"id":"tr37_a2","type":"fill","prompt":"Two ___ tickets, please. (entry)","answer":"admission","keywords":["admission","entrance","entry"]},
  ],
  tr38: [
    {"id":"tr38_a1","type":"match","prompt":"Match the adjective for places with its meaning.","pairs":[{"left":"ancient","right":"antigo"},{"left":"crowded","right":"lotado"},{"left":"stunning","right":"deslumbrante"},{"left":"lively","right":"animado"}]},
    {"id":"tr38_a2","type":"text","prompt":"Describe a place you visited in 2 sentences.","keywords":["beautiful","crowded","ancient","i visited"]},
  ],
  tr39: [
    {"id":"tr39_a1","type":"text","prompt":"Write how to politely ask a stranger to take your photo.","keywords":["could you","take a photo","excuse me","press"]},
    {"id":"tr39_a2","type":"mc","prompt":"To ask for a photo politely:","options":["Photo!","Could you take a photo of us, please?","Take it now.","Give photo."],"answerIdx":1},
  ],
  tr40: [
    {"id":"tr40_a1","type":"text","prompt":"Write a short travel journal entry about your day.","keywords":["today","we visited","i felt","amazing"]},
    {"id":"tr40_a2","type":"tf","prompt":"A travel journal often describes places and feelings.","answer":true},
  ],
  tr41: [
    {"id":"tr41_a1","type":"match","prompt":"Match the reservation word with its meaning.","pairs":[{"left":"book","right":"reservar"},{"left":"available","right":"disponível"},{"left":"confirm","right":"confirmar"},{"left":"cancel","right":"cancelar"}]},
    {"id":"tr41_a2","type":"translate","prompt":"I'd like to book a table.","answer":"Eu gostaria de reservar uma mesa.","keywords":["reservar","mesa","gostaria"]},
  ],
  tr42: [
    {"id":"tr42_a1","type":"text","prompt":"Write a phone dialogue reserving a restaurant table for tonight.","keywords":["i'd like to book","for two","tonight","name"]},
    {"id":"tr42_a2","type":"fill","prompt":"I'd like to ___ a table for two. (reserve)","answer":"book","keywords":["book","reserve"]},
  ],
  tr43: [
    {"id":"tr43_a1","type":"text","prompt":"Write a phone dialogue booking a hotel room.","keywords":["i'd like to book","room","nights","available"]},
    {"id":"tr43_a2","type":"tf","prompt":"When booking by phone, you usually give your name and dates.","answer":true},
  ],
  tr44: [
    {"id":"tr44_a1","type":"text","prompt":"Write how to change or cancel a booking politely.","keywords":["i'd like to change","cancel","reschedule","reservation"]},
    {"id":"tr44_a2","type":"fill","prompt":"I need to ___ my reservation, please. (cancel)","answer":"cancel","keywords":["cancel"]},
  ],
  tr45: [
    {"id":"tr45_a1","type":"text","prompt":"Write a short booking confirmation email.","keywords":["confirm","reservation","dates","thank you"]},
    {"id":"tr45_a2","type":"tf","prompt":"A confirmation email should include the dates and details of the booking.","answer":true},
  ],
  tr46: [
    {"id":"tr46_a1","type":"match","prompt":"Match the greeting with its culture style.","pairs":[{"left":"handshake","right":"common in business"},{"left":"bow","right":"Japan"},{"left":"cheek kiss","right":"France/Brazil"},{"left":"wave","right":"casual"}]},
    {"id":"tr46_a2","type":"tf","prompt":"Greeting styles can differ a lot between cultures.","answer":true},
  ],
  tr47: [
    {"id":"tr47_a1","type":"tf","prompt":"Table manners vary depending on the country.","answer":true},
    {"id":"tr47_a2","type":"match","prompt":"Match the table manner with its meaning.","pairs":[{"left":"napkin","right":"guardanapo"},{"left":"cutlery","right":"talheres"},{"left":"elbows off table","right":"polite habit"},{"left":"toast","right":"brinde"}]},
  ],
  tr48: [
    {"id":"tr48_a1","type":"tf","prompt":"Tipping customs are different around the world.","answer":true},
    {"id":"tr48_a2","type":"mc","prompt":"In the USA, tipping in restaurants is usually:","options":["forbidden","expected (15-20%)","never done","only coins"],"answerIdx":1},
  ],
  tr49: [
    {"id":"tr49_a1","type":"text","prompt":"Write one cultural \"do\" and one \"don't\" for traveling.","keywords":["do","don't","respect","avoid"]},
    {"id":"tr49_a2","type":"tf","prompt":"Learning local customs helps avoid offending people.","answer":true},
  ],
  tr50: [
    {"id":"tr50_a1","type":"text","prompt":"Write 2 cultural facts about a country you'd like to visit.","keywords":["culture","custom","people","famous"]},
    {"id":"tr50_a2","type":"tf","prompt":"Researching culture before travel improves your experience.","answer":true},
  ],
  tr51: [
    {"id":"tr51_a1","type":"text","prompt":"Write a dialogue reporting lost luggage at the airport.","keywords":["my luggage","lost","flight","baggage claim"]},
    {"id":"tr51_a2","type":"fill","prompt":"My ___ didn't arrive on the carousel. (suitcase)","answer":"suitcase","keywords":["suitcase","luggage","bag"]},
  ],
  tr52: [
    {"id":"tr52_a1","type":"text","prompt":"Write what you say to staff about a delayed flight.","keywords":["my flight","delayed","what time","rebook"]},
    {"id":"tr52_a2","type":"mc","prompt":"\"My connection was missed because of the delay\" means:","options":["you arrived early","you couldn't catch the next flight","the flight was free","you cancelled"],"answerIdx":1},
  ],
  tr53: [
    {"id":"tr53_a1","type":"text","prompt":"Write a formal complaint about poor service.","keywords":["i wish to complain","unacceptable","expect","resolve"]},
    {"id":"tr53_a2","type":"tf","prompt":"Formal complaints use polite but firm language.","answer":true},
  ],
  tr54: [
    {"id":"tr54_a1","type":"text","prompt":"Write the key details to put on a complaint form.","keywords":["name","date","description","reference"]},
    {"id":"tr54_a2","type":"tf","prompt":"A complaint form usually asks for the date and a description of the problem.","answer":true},
  ],
  tr55: [
    {"id":"tr55_a1","type":"text","prompt":"Write a complaint email about a damaged product.","keywords":["i am writing to complain","damaged","refund","regards"]},
    {"id":"tr55_a2","type":"fill","prompt":"I am writing to ___ about a faulty product. (complain)","answer":"complain","keywords":["complain"]},
  ],
  tr56: [
    {"id":"tr56_a1","type":"text","prompt":"Write 2 conversation starters to talk with locals.","keywords":["where are you from","do you know","what's good","nice place"]},
    {"id":"tr56_a2","type":"tf","prompt":"A friendly question can start a conversation with a local.","answer":true},
  ],
  tr57: [
    {"id":"tr57_a1","type":"text","prompt":"Write 3 sentences telling someone about Brazil.","keywords":["brazil","famous for","culture","people"]},
    {"id":"tr57_a2","type":"tf","prompt":"Talking about your home country is a good conversation topic.","answer":true},
  ],
  tr58: [
    {"id":"tr58_a1","type":"tf","prompt":"Different English accents can be hard to understand at first.","answer":true},
    {"id":"tr58_a2","type":"text","prompt":"Write one tip for understanding unfamiliar accents.","keywords":["listen","context","ask to repeat","slow"]},
  ],
  tr59: [
    {"id":"tr59_a1","type":"match","prompt":"Match the social media term with its meaning.","pairs":[{"left":"post","right":"publicação"},{"left":"follow","right":"seguir"},{"left":"caption","right":"legenda"},{"left":"share","right":"compartilhar"}]},
    {"id":"tr59_a2","type":"text","prompt":"Write a short English caption for a travel photo.","keywords":["amazing","view","trip","memories"]},
  ],
  tr60: [
    {"id":"tr60_a1","type":"text","prompt":"Prepare a short travel story to tell others (where, what, feeling).","keywords":["i went to","we saw","it was","the best part"]},
    {"id":"tr60_a2","type":"tf","prompt":"A good travel story has a beginning, middle, and end.","answer":true},
  ],
  cv1: [
    {"id":"cv1_a1","type":"text","prompt":"Write 3 safe small-talk topics.","keywords":["weather","weekend","hobbies","work"]},
    {"id":"cv1_a2","type":"mc","prompt":"A safe small-talk question is:","options":["How much do you earn?","Did you have a good weekend?","Why are you single?","What's your weight?"],"answerIdx":1},
  ],
  cv2: [
    {"id":"cv2_a1","type":"text","prompt":"Write 2 follow-up questions to \"I went to the beach.\"","keywords":["which beach","was it","did you","how long"]},
    {"id":"cv2_a2","type":"tf","prompt":"Follow-up questions show interest and keep a conversation going.","answer":true},
  ],
  cv3: [
    {"id":"cv3_a1","type":"match","prompt":"Match the active-listening phrase with its use.","pairs":[{"left":"I see","right":"showing attention"},{"left":"Really?","right":"showing interest"},{"left":"That makes sense","right":"agreeing"},{"left":"Go on","right":"encouraging"}]},
    {"id":"cv3_a2","type":"tf","prompt":"Active listening means showing you are paying attention.","answer":true},
  ],
  cv4: [
    {"id":"cv4_a1","type":"text","prompt":"Write a phrase to fill an awkward silence.","keywords":["anyway","so","by the way","speaking of"]},
    {"id":"cv4_a2","type":"mc","prompt":"To avoid awkward silence you can:","options":["stare silently","ask a new question","leave","look at your phone"],"answerIdx":1},
  ],
  cv5: [
    {"id":"cv5_a1","type":"text","prompt":"Prepare 5 questions for a 5-minute recorded conversation.","keywords":["what","how","why","do you","tell me"]},
    {"id":"cv5_a2","type":"tf","prompt":"Recording conversations helps you review your fluency.","answer":true},
  ],
  cv6: [
    {"id":"cv6_a1","type":"match","prompt":"Match the opinion phrase with its strength.","pairs":[{"left":"I think","right":"neutral"},{"left":"I'm sure","right":"strong"},{"left":"It seems to me","right":"soft"},{"left":"In my opinion","right":"neutral"}]},
    {"id":"cv6_a2","type":"text","prompt":"Write your opinion about social media in one sentence.","keywords":["i think","in my opinion","believe","feel"]},
  ],
  cv7: [
    {"id":"cv7_a1","type":"match","prompt":"Match the agreement phrase with its meaning.","pairs":[{"left":"Absolutely","right":"strong yes"},{"left":"I suppose so","right":"weak yes"},{"left":"Exactly","right":"full agreement"},{"left":"You're right","right":"agreement"}]},
    {"id":"cv7_a2","type":"text","prompt":"Write 2 ways to strongly agree with someone.","keywords":["absolutely","exactly","i totally agree","definitely"]},
  ],
  cv8: [
    {"id":"cv8_a1","type":"text","prompt":"Write a phrase to disagree politely.","keywords":["i see your point","i'm not sure","actually","however"]},
    {"id":"cv8_a2","type":"mc","prompt":"A polite way to disagree is:","options":["You're wrong.","I see your point, but I think...","That's stupid.","No way."],"answerIdx":1},
  ],
  cv9: [
    {"id":"cv9_a1","type":"mc","prompt":"Hedging language is used to:","options":["sound aggressive","sound less direct/softer","shout","end talk"],"answerIdx":1},
    {"id":"cv9_a2","type":"fill","prompt":"It's ___ of expensive. (hedging: a bit)","answer":"kind","keywords":["kind","sort"]},
  ],
  cv10: [
    {"id":"cv10_a1","type":"text","prompt":"Write 3 points you would make in a discussion about technology.","keywords":["i think","on one hand","however","for example"]},
    {"id":"cv10_a2","type":"tf","prompt":"In a discussion you should listen and respond to others' points.","answer":true},
  ],
  cv11: [
    {"id":"cv11_a1","type":"mc","prompt":"Which sentence uses narrative tenses correctly?","options":["I was walking when I saw a dog.","I walk when I see a dog yesterday.","I am walk when I saw.","I walked while I see."],"answerIdx":0},
    {"id":"cv11_a2","type":"fill","prompt":"I ___ (cook) dinner when the phone rang. (past continuous)","answer":"was cooking","keywords":["was cooking"]},
  ],
  cv12: [
    {"id":"cv12_a1","type":"text","prompt":"Write a good opening line for a personal story.","keywords":["so the other day","you won't believe","let me tell you","once"]},
    {"id":"cv12_a2","type":"mc","prompt":"A good story opener is:","options":["The end.","You won't believe what happened to me!","Nothing happened.","Bye."],"answerIdx":1},
  ],
  cv13: [
    {"id":"cv13_a1","type":"text","prompt":"Write a sentence that builds suspense in a story.","keywords":["suddenly","all of a sudden","out of nowhere","then"]},
    {"id":"cv13_a2","type":"tf","prompt":"Words like \"suddenly\" can build suspense in a story.","answer":true},
  ],
  cv14: [
    {"id":"cv14_a1","type":"match","prompt":"Match the emotion word with its meaning.","pairs":[{"left":"thrilled","right":"empolgado"},{"left":"nervous","right":"nervoso"},{"left":"frustrated","right":"frustrado"},{"left":"relieved","right":"aliviado"}]},
    {"id":"cv14_a2","type":"fill","prompt":"I was ___ when I passed the exam. (very happy)","answer":"thrilled","keywords":["thrilled","delighted","happy"]},
  ],
  cv15: [
    {"id":"cv15_a1","type":"text","prompt":"Tell a short personal story (beginning, event, ending).","keywords":["one day","then","suddenly","in the end"]},
    {"id":"cv15_a2","type":"tf","prompt":"A personal story should have a clear sequence of events.","answer":true},
  ],
  cv16: [
    {"id":"cv16_a1","type":"mc","prompt":"A debate usually has:","options":["only one speaker","two opposing sides","no rules","only jokes"],"answerIdx":1},
    {"id":"cv16_a2","type":"text","prompt":"Write your position for a debate on remote work.","keywords":["i believe","for","against","because"]},
  ],
  cv17: [
    {"id":"cv17_a1","type":"match","prompt":"Match the phrase with its debate function.","pairs":[{"left":"Firstly,","right":"first argument"},{"left":"Furthermore,","right":"adding"},{"left":"In addition,","right":"adding"},{"left":"To begin with,","right":"starting"}]},
    {"id":"cv17_a2","type":"fill","prompt":"___ all, education should be free. (First of)","answer":"First of","keywords":["First of","Above"]},
  ],
  cv18: [
    {"id":"cv18_a1","type":"text","prompt":"Write a phrase to counter an argument.","keywords":["on the other hand","however","that may be true but","i disagree because"]},
    {"id":"cv18_a2","type":"mc","prompt":"To counter an argument you say:","options":["I agree fully.","However, there is another side.","Yes, exactly.","Good point, done."],"answerIdx":1},
  ],
  cv19: [
    {"id":"cv19_a1","type":"text","prompt":"Write 2 debate topics and your opinion on one.","keywords":["should","i think","because","topic"]},
    {"id":"cv19_a2","type":"tf","prompt":"Good debate topics usually have two reasonable sides.","answer":true},
  ],
  cv20: [
    {"id":"cv20_a1","type":"text","prompt":"Prepare one argument for and one against social media for a mini-debate.","keywords":["for","against","because","on the other hand"]},
    {"id":"cv20_a2","type":"tf","prompt":"In a debate you should support your points with reasons.","answer":true},
  ],
  cv21: [
    {"id":"cv21_a1","type":"tf","prompt":"British and American humor can differ in style.","answer":true},
    {"id":"cv21_a2","type":"mc","prompt":"British humor is often described as:","options":["very direct","dry and sarcastic","only physical","never used"],"answerIdx":1},
  ],
  cv22: [
    {"id":"cv22_a1","type":"mc","prompt":"Sarcasm usually means:","options":["saying exactly what you mean","saying the opposite to be funny/critical","speaking loudly","being silent"],"answerIdx":1},
    {"id":"cv22_a2","type":"tf","prompt":"Tone of voice often signals sarcasm.","answer":true},
  ],
  cv23: [
    {"id":"cv23_a1","type":"text","prompt":"Write a simple pun or wordplay in English.","keywords":["pun","play on words","joke","funny"]},
    {"id":"cv23_a2","type":"tf","prompt":"A pun plays on words that sound similar or have double meanings.","answer":true},
  ],
  cv24: [
    {"id":"cv24_a1","type":"text","prompt":"Write one situation where humor is NOT appropriate.","keywords":["funeral","serious meeting","bad news","formal"]},
    {"id":"cv24_a2","type":"tf","prompt":"Knowing when not to joke is part of social intelligence.","answer":true},
  ],
  cv25: [
    {"id":"cv25_a1","type":"text","prompt":"Write 2 things you understood from the comedy clip.","keywords":["the comedian","joke","funny","about"]},
    {"id":"cv25_a2","type":"tf","prompt":"Stand-up comedy often uses cultural references.","answer":true},
  ],
  cv26: [
    {"id":"cv26_a1","type":"match","prompt":"Match the phone phrase with its use.","pairs":[{"left":"Who's calling?","right":"asking identity"},{"left":"Hold on, please","right":"asking to wait"},{"left":"Can I take a message?","right":"offering to note"},{"left":"Speaking","right":"confirming identity"}]},
    {"id":"cv26_a2","type":"text","prompt":"Write how you answer a professional phone call.","keywords":["hello","speaking","how can i help","this is"]},
  ],
  cv27: [
    {"id":"cv27_a1","type":"text","prompt":"Write a short voicemail message.","keywords":["hi","this is","please call me back","thanks"]},
    {"id":"cv27_a2","type":"tf","prompt":"A voicemail should include your name and reason for calling.","answer":true},
  ],
  cv28: [
    {"id":"cv28_a1","type":"text","prompt":"Write a phrase to clarify something on a call.","keywords":["sorry","could you repeat","did you say","i didn't catch"]},
    {"id":"cv28_a2","type":"mc","prompt":"To clarify on a call you say:","options":["Whatever.","Sorry, could you repeat that?","I don't care.","Bye."],"answerIdx":1},
  ],
  cv29: [
    {"id":"cv29_a1","type":"text","prompt":"Write 2 video call etiquette rules.","keywords":["mute","camera","on time","background"]},
    {"id":"cv29_a2","type":"tf","prompt":"Muting your mic when not speaking is good video call etiquette.","answer":true},
  ],
  cv30: [
    {"id":"cv30_a1","type":"text","prompt":"Roleplay a professional phone call: greet, state purpose, close.","keywords":["hello","this is","i'm calling about","thank you"]},
    {"id":"cv30_a2","type":"tf","prompt":"A professional call should have a clear purpose.","answer":true},
  ],
  cv31: [
    {"id":"cv31_a1","type":"match","prompt":"Match the party word with its meaning.","pairs":[{"left":"host","right":"anfitrião"},{"left":"guest","right":"convidado"},{"left":"toast","right":"brinde"},{"left":"invitation","right":"convite"}]},
    {"id":"cv31_a2","type":"text","prompt":"Write a sentence inviting someone to a party.","keywords":["would you like","party","join us","invite"]},
  ],
  cv32: [
    {"id":"cv32_a1","type":"text","prompt":"Write how you introduce yourself to a stranger at an event.","keywords":["hi","i'm","nice to meet","what brings you"]},
    {"id":"cv32_a2","type":"mc","prompt":"A friendly opener at an event:","options":["Who are you?","Hi, I'm Ana. How do you know the host?","Go away.","Boring."],"answerIdx":1},
  ],
  cv33: [
    {"id":"cv33_a1","type":"text","prompt":"Write 2 genuine compliments.","keywords":["i love your","that's a great","you did","well done"]},
    {"id":"cv33_a2","type":"tf","prompt":"A genuine compliment can help build rapport.","answer":true},
  ],
  cv34: [
    {"id":"cv34_a1","type":"text","prompt":"Write a polite phrase to leave a conversation.","keywords":["it was great","i should","excuse me","catch up later"]},
    {"id":"cv34_a2","type":"mc","prompt":"To leave a conversation politely:","options":["Bye, you're boring.","It was great talking, I should get going.","I leave.","Stop."],"answerIdx":1},
  ],
  cv35: [
    {"id":"cv35_a1","type":"text","prompt":"Write 3 dinner-party conversation topics.","keywords":["food","travel","movies","work"]},
    {"id":"cv35_a2","type":"tf","prompt":"At a dinner party, light topics are usually best.","answer":true},
  ],
  cv36: [
    {"id":"cv36_a1","type":"text","prompt":"Write 2 questions to ask about someone's hobbies.","keywords":["what do you do","how long","do you enjoy","favorite"]},
    {"id":"cv36_a2","type":"fill","prompt":"What do you do ___ your free time? (preposition)","answer":"in","keywords":["in"]},
  ],
  cv37: [
    {"id":"cv37_a1","type":"text","prompt":"Write 2 sentences about food culture in Brazil.","keywords":["in brazil","we eat","traditional","food"]},
    {"id":"cv37_a2","type":"tf","prompt":"Food is a popular and friendly conversation topic.","answer":true},
  ],
  cv38: [
    {"id":"cv38_a1","type":"text","prompt":"Write 2 questions about entertainment preferences.","keywords":["what kind of","do you prefer","favorite","watch"]},
    {"id":"cv38_a2","type":"fill","prompt":"Do you prefer movies ___ series? (or)","answer":"or","keywords":["or"]},
  ],
  cv39: [
    {"id":"cv39_a1","type":"text","prompt":"Compare a custom in Brazil with another country in 2 sentences.","keywords":["in brazil","while","different","compared"]},
    {"id":"cv39_a2","type":"tf","prompt":"Comparing cultures respectfully is a good conversation skill.","answer":true},
  ],
  cv40: [
    {"id":"cv40_a1","type":"text","prompt":"Present a favorite Brazilian thing (food, place, or tradition).","keywords":["my favorite","brazilian","because","famous"]},
    {"id":"cv40_a2","type":"tf","prompt":"Sharing your culture makes conversations interesting.","answer":true},
  ],
  cv41: [
    {"id":"cv41_a1","type":"match","prompt":"Match the advanced emotion with its meaning.","pairs":[{"left":"overwhelmed","right":"sobrecarregado"},{"left":"content","right":"satisfeito"},{"left":"anxious","right":"ansioso"},{"left":"grateful","right":"grato"}]},
    {"id":"cv41_a2","type":"fill","prompt":"After the long week, I felt completely ___. (overloaded)","answer":"overwhelmed","keywords":["overwhelmed"]},
  ],
  cv42: [
    {"id":"cv42_a1","type":"text","prompt":"Write a sentence showing empathy to a sad friend.","keywords":["i'm so sorry","that must be","i understand","here for you"]},
    {"id":"cv42_a2","type":"mc","prompt":"An empathetic response is:","options":["Get over it.","That must be really hard for you.","Who cares?","Not my problem."],"answerIdx":1},
  ],
  cv43: [
    {"id":"cv43_a1","type":"text","prompt":"Write how you share a personal feeling in conversation.","keywords":["i feel","honestly","to be honest","i've been"]},
    {"id":"cv43_a2","type":"tf","prompt":"Sharing feelings appropriately can deepen a conversation.","answer":true},
  ],
  cv44: [
    {"id":"cv44_a1","type":"text","prompt":"Write 2 phrases to comfort someone.","keywords":["it's okay","i'm here","take your time","everything will"]},
    {"id":"cv44_a2","type":"mc","prompt":"A comforting phrase is:","options":["Stop crying.","I'm here for you whenever you need.","Not interested.","Boring."],"answerIdx":1},
  ],
  cv45: [
    {"id":"cv45_a1","type":"text","prompt":"Describe a meaningful life experience in 3 sentences.","keywords":["one of the most","i learned","it changed","experience"]},
    {"id":"cv45_a2","type":"tf","prompt":"Meaningful stories often include what you learned.","answer":true},
  ],
  cv46: [
    {"id":"cv46_a1","type":"mc","prompt":"Which is formal?","options":["Hey, what's up?","Good afternoon, how are you?","Yo!","Sup?"],"answerIdx":1},
    {"id":"cv46_a2","type":"match","prompt":"Match the message with its register.","pairs":[{"left":"I am writing to inform you","right":"formal"},{"left":"Just letting you know","right":"informal"},{"left":"Dear Sir","right":"formal"},{"left":"Hey there","right":"informal"}]},
  ],
  cv47: [
    {"id":"cv47_a1","type":"match","prompt":"Match the slang with its meaning.","pairs":[{"left":"awesome","right":"incrível"},{"left":"hang out","right":"passar tempo"},{"left":"chill","right":"relaxar"},{"left":"guys","right":"pessoal"}]},
    {"id":"cv47_a2","type":"fill","prompt":"Let's ___ out this weekend. (slang for spend time)","answer":"hang","keywords":["hang"]},
  ],
  cv48: [
    {"id":"cv48_a1","type":"text","prompt":"Write \"I want help\" in formal, neutral, and informal registers.","keywords":["could you assist","can you help","gimme a hand","please"]},
    {"id":"cv48_a2","type":"tf","prompt":"The same message can be said in different registers.","answer":true},
  ],
  cv49: [
    {"id":"cv49_a1","type":"mc","prompt":"\"Reading the room\" means:","options":["ignoring everyone","sensing the mood and adjusting","reading a book","leaving the room"],"answerIdx":1},
    {"id":"cv49_a2","type":"tf","prompt":"Reading the room helps you choose the right tone.","answer":true},
  ],
  cv50: [
    {"id":"cv50_a1","type":"text","prompt":"Write the same greeting in a formal and an informal way.","keywords":["good morning","hi","hello","hey"]},
    {"id":"cv50_a2","type":"tf","prompt":"Switching between formal and informal is a useful skill.","answer":true},
  ],
  cv51: [
    {"id":"cv51_a1","type":"match","prompt":"Match the filler word with its use.","pairs":[{"left":"um","right":"thinking"},{"left":"like","right":"casual filler"},{"left":"so","right":"transition"},{"left":"right","right":"checking"}]},
    {"id":"cv51_a2","type":"tf","prompt":"Too many filler words can make speech less clear.","answer":true},
  ],
  cv52: [
    {"id":"cv52_a1","type":"text","prompt":"Paraphrase: \"The film was extremely boring.\"","keywords":["the movie","not interesting","dull","wasn't exciting"]},
    {"id":"cv52_a2","type":"mc","prompt":"Paraphrasing means:","options":["repeating exactly","saying the same idea differently","translating","summarizing only"],"answerIdx":1},
  ],
  cv53: [
    {"id":"cv53_a1","type":"text","prompt":"Write a phrase to self-correct while speaking.","keywords":["sorry, i mean","what i meant","let me rephrase","actually"]},
    {"id":"cv53_a2","type":"tf","prompt":"Self-correction shows awareness of your own mistakes.","answer":true},
  ],
  cv54: [
    {"id":"cv54_a1","type":"mc","prompt":"Circumlocution means:","options":["using one perfect word","describing a word you don't know","being silent","translating"],"answerIdx":1},
    {"id":"cv54_a2","type":"text","prompt":"Describe a \"remote control\" without naming it.","keywords":["device","change channels","tv","buttons"]},
  ],
  cv55: [
    {"id":"cv55_a1","type":"text","prompt":"Choose a topic and prepare points to speak for 5 minutes non-stop.","keywords":["topic","points","because","for example"]},
    {"id":"cv55_a2","type":"tf","prompt":"Speaking non-stop builds fluency even with small mistakes.","answer":true},
  ],
  cv56: [
    {"id":"cv56_a1","type":"tf","prompt":"Connected speech links words together in fluent speech.","answer":true},
    {"id":"cv56_a2","type":"mc","prompt":"\"Did you\" in fast speech often sounds like:","options":["didju","dead you","di yu","do you"],"answerIdx":0},
  ],
  cv57: [
    {"id":"cv57_a1","type":"mc","prompt":"Rising intonation often signals:","options":["a statement","a yes/no question","an order","silence"],"answerIdx":1},
    {"id":"cv57_a2","type":"text","prompt":"Write a sentence that changes meaning with intonation.","keywords":["really","oh","sure","intonation"]},
  ],
  cv58: [
    {"id":"cv58_a1","type":"tf","prompt":"English has stressed and unstressed syllables creating rhythm.","answer":true},
    {"id":"cv58_a2","type":"fill","prompt":"In \"photograph\", the stress is on the ___ syllable. (first)","answer":"first","keywords":["first"]},
  ],
  cv59: [
    {"id":"cv59_a1","type":"tf","prompt":"Shadowing a native speaker improves rhythm and pronunciation.","answer":true},
    {"id":"cv59_a2","type":"text","prompt":"Write one sentence you shadowed and found tricky.","keywords":["sentence","shadow","tricky","difficult"]},
  ],
  cv60: [
    {"id":"cv60_a1","type":"text","prompt":"Prepare 8 questions and topics for a 10-minute free conversation.","keywords":["what","how","tell me","why","do you"]},
    {"id":"cv60_a2","type":"tf","prompt":"A long free conversation tests your overall fluency.","answer":true},
  ],
  gr1: [
    {"id":"gr1_a1","type":"mc","prompt":"Choose the correct article: ___ university","options":["a","an","the","—"],"answerIdx":0},
    {"id":"gr1_a2","type":"fill","prompt":"She is ___ engineer. (a/an)","answer":"an","keywords":["an"]},
  ],
  gr2: [
    {"id":"gr2_a1","type":"mc","prompt":"Choose: I love ___ music.","options":["a","an","the","—"],"answerIdx":3},
    {"id":"gr2_a2","type":"fill","prompt":"___ sun rises in the east. (the/no article)","answer":"The","keywords":["The"]},
  ],
  gr3: [
    {"id":"gr3_a1","type":"mc","prompt":"Generic reference: \"___ dogs are loyal.\"","options":["A","An","The","—"],"answerIdx":3},
    {"id":"gr3_a2","type":"tf","prompt":"\"Dogs are loyal\" uses zero article for a general statement.","answer":true},
  ],
  gr4: [
    {"id":"gr4_a1","type":"fill","prompt":"She is ___ teacher. (article + profession)","answer":"a","keywords":["a"]},
    {"id":"gr4_a2","type":"mc","prompt":"Choose: He works as ___ artist.","options":["a","an","the","—"],"answerIdx":1},
  ],
  gr5: [
    {"id":"gr5_a1","type":"mc","prompt":"Fix the error: \"I have a information.\"","options":["a informations","an information","the information","information"],"answerIdx":3},
    {"id":"gr5_a2","type":"fill","prompt":"Correct: \"She is ___ honest woman.\" (a/an)","answer":"an","keywords":["an"]},
  ],
  gr6: [
    {"id":"gr6_a1","type":"mc","prompt":"We meet ___ the morning.","options":["in","on","at","to"],"answerIdx":0},
    {"id":"gr6_a2","type":"fill","prompt":"My birthday is ___ December. (month)","answer":"in","keywords":["in"]},
  ],
  gr7: [
    {"id":"gr7_a1","type":"mc","prompt":"The keys are ___ the table.","options":["in","on","at","to"],"answerIdx":1},
    {"id":"gr7_a2","type":"fill","prompt":"She lives ___ Brazil. (country)","answer":"in","keywords":["in"]},
  ],
  gr8: [
    {"id":"gr8_a1","type":"mc","prompt":"He walked ___ the room.","options":["into","on","at","of"],"answerIdx":0},
    {"id":"gr8_a2","type":"fill","prompt":"The cat jumped ___ the box. (out)","answer":"out of","keywords":["out of","out"]},
  ],
  gr9: [
    {"id":"gr9_a1","type":"mc","prompt":"Choose: I'm good ___ math.","options":["in","on","at","to"],"answerIdx":2},
    {"id":"gr9_a2","type":"fill","prompt":"She depends ___ her parents. (preposition)","answer":"on","keywords":["on"]},
  ],
  gr10: [
    {"id":"gr10_a1","type":"text","prompt":"Write a paragraph using at least 10 prepositions.","keywords":["in","on","at","under","between","behind"]},
    {"id":"gr10_a2","type":"fill","prompt":"The picture is ___ the wall. (on)","answer":"on","keywords":["on"]},
  ],
  gr11: [
    {"id":"gr11_a1","type":"mc","prompt":"Choose: I ___ TV right now.","options":["watch","am watching","watches","watched"],"answerIdx":1},
    {"id":"gr11_a2","type":"fill","prompt":"She usually ___ (drink) coffee, but today she ___ (drink) tea.","answer":"drinks / is drinking","keywords":["drinks","is drinking"]},
  ],
  gr12: [
    {"id":"gr12_a1","type":"mc","prompt":"Which verb is NOT used in continuous form?","options":["run","know","eat","walk"],"answerIdx":1},
    {"id":"gr12_a2","type":"fill","prompt":"I ___ (know) the answer. (state verb)","answer":"know","keywords":["know"]},
  ],
  gr13: [
    {"id":"gr13_a1","type":"mc","prompt":"Choose: I ___ this film before.","options":["saw","have seen","seen","was seeing"],"answerIdx":1},
    {"id":"gr13_a2","type":"fill","prompt":"She ___ (live) here since 2010. (present perfect)","answer":"has lived","keywords":["has lived"]},
  ],
  gr14: [
    {"id":"gr14_a1","type":"mc","prompt":"Choose: I ___ for two hours.","options":["have been waiting","wait","am wait","waited"],"answerIdx":0},
    {"id":"gr14_a2","type":"fill","prompt":"They ___ (study) all day. (present perfect continuous)","answer":"have been studying","keywords":["have been studying"]},
  ],
  gr15: [
    {"id":"gr15_a1","type":"text","prompt":"Write a paragraph about your day using present simple, continuous, and perfect.","keywords":["i usually","right now","i have","today"]},
    {"id":"gr15_a2","type":"fill","prompt":"Right now I ___ (write) and I ___ (finish) already two tasks.","answer":"am writing / have finished","keywords":["am writing","have finished"]},
  ],
  gr16: [
    {"id":"gr16_a1","type":"mc","prompt":"Choose: While I ___, the phone rang.","options":["cooked","was cooking","cook","have cooked"],"answerIdx":1},
    {"id":"gr16_a2","type":"fill","prompt":"I ___ (read) when she ___ (arrive). (past cont / past simple)","answer":"was reading / arrived","keywords":["was reading","arrived"]},
  ],
  gr17: [
    {"id":"gr17_a1","type":"mc","prompt":"Choose: When I arrived, the train ___.","options":["has left","had left","leaves","was leaving"],"answerIdx":1},
    {"id":"gr17_a2","type":"fill","prompt":"She ___ (finish) the work before he came. (past perfect)","answer":"had finished","keywords":["had finished"]},
  ],
  gr18: [
    {"id":"gr18_a1","type":"mc","prompt":"\"Used to\" describes:","options":["present habit","past habit no longer true","future plan","command"],"answerIdx":1},
    {"id":"gr18_a2","type":"fill","prompt":"I ___ to live in Rio. (past habit)","answer":"used","keywords":["used"]},
  ],
  gr19: [
    {"id":"gr19_a1","type":"mc","prompt":"\"Would\" for past habits is like:","options":["will","used to","can","must"],"answerIdx":1},
    {"id":"gr19_a2","type":"fill","prompt":"Every summer we ___ go to the beach. (past habit)","answer":"would","keywords":["would"]},
  ],
  gr20: [
    {"id":"gr20_a1","type":"text","prompt":"Write a short story using past simple, past continuous, and past perfect.","keywords":["was","were","had","when"]},
    {"id":"gr20_a2","type":"fill","prompt":"By the time we arrived, the show ___ (start). (past perfect)","answer":"had started","keywords":["had started"]},
  ],
  gr21: [
    {"id":"gr21_a1","type":"mc","prompt":"Choose: That bag is heavy. I ___ help you.","options":["am going to","will","would","was"],"answerIdx":1},
    {"id":"gr21_a2","type":"fill","prompt":"Look at the clouds! It ___ rain. (going to)","answer":"is going to","keywords":["is going to"]},
  ],
  gr22: [
    {"id":"gr22_a1","type":"mc","prompt":"Present continuous for future: \"I ___ Anna tonight.\"","options":["meet","am meeting","met","will meet"],"answerIdx":1},
    {"id":"gr22_a2","type":"fill","prompt":"We ___ (fly) to Spain tomorrow. (arranged future)","answer":"are flying","keywords":["are flying"]},
  ],
  gr23: [
    {"id":"gr23_a1","type":"mc","prompt":"Choose: By 2030, I ___ my studies.","options":["will finish","will have finished","finish","finished"],"answerIdx":1},
    {"id":"gr23_a2","type":"fill","prompt":"By next year she ___ (save) enough money. (future perfect)","answer":"will have saved","keywords":["will have saved"]},
  ],
  gr24: [
    {"id":"gr24_a1","type":"mc","prompt":"Choose: This time tomorrow I ___ on a beach.","options":["will lie","will be lying","lie","lay"],"answerIdx":1},
    {"id":"gr24_a2","type":"fill","prompt":"At 8 pm we ___ (have) dinner. (future continuous)","answer":"will be having","keywords":["will be having"]},
  ],
  gr25: [
    {"id":"gr25_a1","type":"text","prompt":"Write about your plans and predictions for next year.","keywords":["i will","i'm going to","i think","probably"]},
    {"id":"gr25_a2","type":"fill","prompt":"I think it ___ (rain) tomorrow. (prediction)","answer":"will rain","keywords":["will rain"]},
  ],
  gr26: [
    {"id":"gr26_a1","type":"mc","prompt":"Choose: I ___ swim when I was five.","options":["can","could","able","must"],"answerIdx":1},
    {"id":"gr26_a2","type":"fill","prompt":"She is ___ to speak three languages. (be able)","answer":"able","keywords":["able"]},
  ],
  gr27: [
    {"id":"gr27_a1","type":"mc","prompt":"Choose: You ___ see a doctor.","options":["should","can","will","do"],"answerIdx":0},
    {"id":"gr27_a2","type":"fill","prompt":"You ___ better take an umbrella. (advice)","answer":"had","keywords":["had"]},
  ],
  gr28: [
    {"id":"gr28_a1","type":"mc","prompt":"Choose: I ___ wear a uniform at work. (obligation)","options":["have to","should","could","may"],"answerIdx":0},
    {"id":"gr28_a2","type":"fill","prompt":"You ___ not smoke here. (prohibition: must)","answer":"must","keywords":["must"]},
  ],
  gr29: [
    {"id":"gr29_a1","type":"mc","prompt":"Choose: She ___ be at home, the lights are on.","options":["must","might","can't","should"],"answerIdx":0},
    {"id":"gr29_a2","type":"fill","prompt":"It ___ rain later; take a coat. (possibility)","answer":"might","keywords":["might","may","could"]},
  ],
  gr30: [
    {"id":"gr30_a1","type":"text","prompt":"Write 5 sentences using different modal verbs.","keywords":["can","must","should","might","have to"]},
    {"id":"gr30_a2","type":"fill","prompt":"Students ___ submit homework on time. (obligation)","answer":"must","keywords":["must","have to"]},
  ],
  gr31: [
    {"id":"gr31_a1","type":"mc","prompt":"Zero conditional: \"If you heat ice, it ___.\"","options":["melts","will melt","melted","would melt"],"answerIdx":0},
    {"id":"gr31_a2","type":"fill","prompt":"If you ___ (mix) blue and yellow, you get green.","answer":"mix","keywords":["mix"]},
  ],
  gr32: [
    {"id":"gr32_a1","type":"mc","prompt":"First conditional: \"If it rains, I ___ stay home.\"","options":["will","would","was","had"],"answerIdx":0},
    {"id":"gr32_a2","type":"fill","prompt":"If you study, you ___ (pass) the exam.","answer":"will pass","keywords":["will pass"]},
  ],
  gr33: [
    {"id":"gr33_a1","type":"mc","prompt":"Second conditional: \"If I ___ rich, I would travel.\"","options":["am","was","were","will be"],"answerIdx":2},
    {"id":"gr33_a2","type":"fill","prompt":"If I ___ (have) more time, I would learn piano.","answer":"had","keywords":["had"]},
  ],
  gr34: [
    {"id":"gr34_a1","type":"mc","prompt":"Third conditional: \"If I had studied, I ___ passed.\"","options":["will have","would have","had","would"],"answerIdx":1},
    {"id":"gr34_a2","type":"fill","prompt":"If she ___ (leave) earlier, she would have caught the bus.","answer":"had left","keywords":["had left"]},
  ],
  gr35: [
    {"id":"gr35_a1","type":"text","prompt":"Write one zero, one first, one second, and one third conditional sentence.","keywords":["if","will","would","had"]},
    {"id":"gr35_a2","type":"fill","prompt":"If I ___ (be) you, I would apologize. (second conditional)","answer":"were","keywords":["were"]},
  ],
  gr36: [
    {"id":"gr36_a1","type":"mc","prompt":"Passive structure: object + ___ + past participle.","options":["be","do","have","will"],"answerIdx":0},
    {"id":"gr36_a2","type":"fill","prompt":"The cake ___ (bake) by Maria. (passive present)","answer":"is baked","keywords":["is baked"]},
  ],
  gr37: [
    {"id":"gr37_a1","type":"mc","prompt":"We use the passive when:","options":["the doer is unknown/unimportant","we want to be informal","always","never"],"answerIdx":0},
    {"id":"gr37_a2","type":"tf","prompt":"\"The window was broken\" focuses on the window, not who broke it.","answer":true},
  ],
  gr38: [
    {"id":"gr38_a1","type":"fill","prompt":"The bridge ___ (build) in 1990. (passive past)","answer":"was built","keywords":["was built"]},
    {"id":"gr38_a2","type":"fill","prompt":"The report ___ (write) now. (passive present continuous)","answer":"is being written","keywords":["is being written"]},
  ],
  gr39: [
    {"id":"gr39_a1","type":"mc","prompt":"Passive with modal: \"The work ___ done by Friday.\"","options":["must","must be","must been","must being"],"answerIdx":1},
    {"id":"gr39_a2","type":"fill","prompt":"This ___ (can / do) easily. (passive with modal)","answer":"can be done","keywords":["can be done"]},
  ],
  gr40: [
    {"id":"gr40_a1","type":"text","prompt":"Rewrite \"They built the house\" in the passive.","keywords":["the house","was built","passive"]},
    {"id":"gr40_a2","type":"fill","prompt":"Active: \"Someone stole my bike.\" Passive: My bike ___.","answer":"was stolen","keywords":["was stolen"]},
  ],
  gr41: [
    {"id":"gr41_a1","type":"mc","prompt":"Choose: The man ___ lives next door is a doctor.","options":["which","who","where","whose"],"answerIdx":1},
    {"id":"gr41_a2","type":"fill","prompt":"This is the book ___ I told you about. (which/that)","answer":"that","keywords":["that","which"]},
  ],
  gr42: [
    {"id":"gr42_a1","type":"mc","prompt":"A non-defining relative clause uses:","options":["no commas","commas","no relative pronoun","only \"that\""],"answerIdx":1},
    {"id":"gr42_a2","type":"tf","prompt":"\"My brother, who lives in Rio, is a teacher\" is non-defining.","answer":true},
  ],
  gr43: [
    {"id":"gr43_a1","type":"mc","prompt":"Choose: That's the house ___ I was born.","options":["which","who","where","whose"],"answerIdx":2},
    {"id":"gr43_a2","type":"fill","prompt":"She's the woman ___ car was stolen. (possessive)","answer":"whose","keywords":["whose"]},
  ],
  gr44: [
    {"id":"gr44_a1","type":"mc","prompt":"Reduced relative: \"The man ___ at the desk is John.\"","options":["who sitting","sitting","sits","who sit"],"answerIdx":1},
    {"id":"gr44_a2","type":"fill","prompt":"The book ___ (write) by her is famous. (reduced: written)","answer":"written","keywords":["written"]},
  ],
  gr45: [
    {"id":"gr45_a1","type":"text","prompt":"Write 5 sentences each containing a relative clause.","keywords":["who","which","that","where","whose"]},
    {"id":"gr45_a2","type":"fill","prompt":"The teacher ___ helped me was very kind. (who)","answer":"who","keywords":["who","that"]},
  ],
  gr46: [
    {"id":"gr46_a1","type":"mc","prompt":"Common Brazilian error — choose the correct one:","options":["I have 20 years.","I am 20 years old.","I have 20 years old.","I am 20 years."],"answerIdx":1},
    {"id":"gr46_a2","type":"fill","prompt":"Correct: \"I ___ agree with you.\" (do/am)","answer":"agree","keywords":["agree"]},
  ],
  gr47: [
    {"id":"gr47_a1","type":"mc","prompt":"Which noun is uncountable?","options":["apple","information","chair","dog"],"answerIdx":1},
    {"id":"gr47_a2","type":"fill","prompt":"How ___ water do you drink? (much/many)","answer":"much","keywords":["much"]},
  ],
  gr48: [
    {"id":"gr48_a1","type":"match","prompt":"Match the false friend with its real meaning.","pairs":[{"left":"eventually","right":"finalmente"},{"left":"fabric","right":"tecido"},{"left":"realize","right":"perceber"},{"left":"attend","right":"comparecer"}]},
    {"id":"gr48_a2","type":"mc","prompt":"\"Eventually\" means:","options":["eventualmente","finalmente/no fim","talvez","rapidamente"],"answerIdx":1},
  ],
  gr49: [
    {"id":"gr49_a1","type":"mc","prompt":"Choose the correct word: \"Their/There/They're going home.\"","options":["Their","There","They're","Theyre"],"answerIdx":2},
    {"id":"gr49_a2","type":"fill","prompt":"Choose: \"I have fewer/less ___ books.\" (countable)","answer":"fewer","keywords":["fewer"]},
  ],
  gr50: [
    {"id":"gr50_a1","type":"text","prompt":"Find and fix grammar mistakes in a paragraph you wrote.","keywords":["corrected","mistake","grammar","fixed"]},
    {"id":"gr50_a2","type":"fill","prompt":"Correct: \"He don't like coffee.\" → He ___ like coffee.","answer":"doesn't","keywords":["doesn't","does not"]},
  ],
  gr51: [
    {"id":"gr51_a1","type":"mc","prompt":"Gerund as subject: \"___ is good for health.\"","options":["Swim","Swimming","To swimming","Swam"],"answerIdx":1},
    {"id":"gr51_a2","type":"fill","prompt":"___ (read) every day improves your English. (gerund subject)","answer":"Reading","keywords":["Reading"]},
  ],
  gr52: [
    {"id":"gr52_a1","type":"mc","prompt":"Choose: I enjoy ___.","options":["to read","reading","read","reads"],"answerIdx":1},
    {"id":"gr52_a2","type":"fill","prompt":"She avoided ___ (talk) to him. (gerund)","answer":"talking","keywords":["talking"]},
  ],
  gr53: [
    {"id":"gr53_a1","type":"mc","prompt":"Choose: I decided ___ early.","options":["leaving","to leave","leave","left"],"answerIdx":1},
    {"id":"gr53_a2","type":"fill","prompt":"We hope ___ (see) you soon. (infinitive)","answer":"to see","keywords":["to see"]},
  ],
  gr54: [
    {"id":"gr54_a1","type":"mc","prompt":"\"I stopped to smoke\" means:","options":["I quit smoking","I paused to have a cigarette","I never smoked","I dislike smoking"],"answerIdx":1},
    {"id":"gr54_a2","type":"fill","prompt":"\"I remember ___ (lock) the door\" = I did it and recall it. (gerund)","answer":"locking","keywords":["locking"]},
  ],
  gr55: [
    {"id":"gr55_a1","type":"text","prompt":"Write 5 gerund sentences and 5 infinitive sentences.","keywords":["-ing","to","enjoy","want"]},
    {"id":"gr55_a2","type":"fill","prompt":"I want ___ (learn) French. (infinitive)","answer":"to learn","keywords":["to learn"]},
  ],
  gr56: [
    {"id":"gr56_a1","type":"mc","prompt":"Inversion: \"Never ___ I seen such a view.\"","options":["have","had","did","do"],"answerIdx":0},
    {"id":"gr56_a2","type":"fill","prompt":"Rarely ___ we see snow here. (inversion: do)","answer":"do","keywords":["do"]},
  ],
  gr57: [
    {"id":"gr57_a1","type":"mc","prompt":"Cleft sentence: \"___ I want is peace.\"","options":["That","What","Which","Who"],"answerIdx":1},
    {"id":"gr57_a2","type":"fill","prompt":"It ___ John who called, not Mary. (cleft: was)","answer":"was","keywords":["was"]},
  ],
  gr58: [
    {"id":"gr58_a1","type":"mc","prompt":"Participle clause: \"___ tired, she went to bed.\"","options":["Feel","Feeling","Felt","To feel"],"answerIdx":1},
    {"id":"gr58_a2","type":"fill","prompt":"___ (finish) the work, he relaxed. (participle: Having finished)","answer":"Having finished","keywords":["Having finished"]},
  ],
  gr59: [
    {"id":"gr59_a1","type":"text","prompt":"Write which grammar topic challenges you most and why.","keywords":["challenge","difficult","because","grammar"]},
    {"id":"gr59_a2","type":"tf","prompt":"Reviewing weak grammar areas improves accuracy.","answer":true},
  ],
  gr60: [
    {"id":"gr60_a1","type":"text","prompt":"Write a 200-word text aiming for zero grammar errors.","keywords":["paragraph","because","however","therefore"]},
    {"id":"gr60_a2","type":"tf","prompt":"Proofreading helps you catch grammar errors before submitting.","answer":true},
  ],
  ac1: [
    {"id":"ac1_a1","type":"mc","prompt":"A topic sentence:","options":["ends a paragraph","states the main idea of a paragraph","is a question","is irrelevant"],"answerIdx":1},
    {"id":"ac1_a2","type":"text","prompt":"Write a topic sentence for a paragraph about climate change.","keywords":["climate change","main idea","is","one of"]},
  ],
  ac2: [
    {"id":"ac2_a1","type":"text","prompt":"Write 2 supporting sentences for the topic \"Exercise is healthy.\"","keywords":["for example","in addition","studies show","this helps"]},
    {"id":"ac2_a2","type":"tf","prompt":"Supporting sentences give details and examples for the topic sentence.","answer":true},
  ],
  ac3: [
    {"id":"ac3_a1","type":"mc","prompt":"A concluding sentence usually:","options":["adds new ideas","restates the main point","starts a topic","asks a question"],"answerIdx":1},
    {"id":"ac3_a2","type":"text","prompt":"Write a concluding sentence for a paragraph about reading.","keywords":["in conclusion","therefore","overall","reading"]},
  ],
  ac4: [
    {"id":"ac4_a1","type":"mc","prompt":"\"Coherence\" in a paragraph means:","options":["ideas flow logically","many topics","random order","no linking"],"answerIdx":0},
    {"id":"ac4_a2","type":"tf","prompt":"Unity means all sentences relate to one main idea.","answer":true},
  ],
  ac5: [
    {"id":"ac5_a1","type":"text","prompt":"Write 2 well-structured paragraphs (topic, support, conclusion each).","keywords":["firstly","for example","in conclusion","furthermore"]},
    {"id":"ac5_a2","type":"tf","prompt":"Each paragraph should focus on one main idea.","answer":true},
  ],
  ac6: [
    {"id":"ac6_a1","type":"match","prompt":"Match the addition linker with its use.","pairs":[{"left":"moreover","right":"adding strongly"},{"left":"in addition","right":"adding"},{"left":"furthermore","right":"adding"},{"left":"also","right":"adding"}]},
    {"id":"ac6_a2","type":"fill","prompt":"The plan is cheap; ___, it is fast. (addition)","answer":"moreover","keywords":["moreover","furthermore","in addition"]},
  ],
  ac7: [
    {"id":"ac7_a1","type":"match","prompt":"Match the contrast linker with its use.","pairs":[{"left":"however","right":"contrast"},{"left":"whereas","right":"comparison contrast"},{"left":"nevertheless","right":"despite that"},{"left":"on the other hand","right":"opposite view"}]},
    {"id":"ac7_a2","type":"fill","prompt":"It was raining; ___, we went out. (contrast)","answer":"however","keywords":["however","nevertheless"]},
  ],
  ac8: [
    {"id":"ac8_a1","type":"match","prompt":"Match the cause/effect linker with its use.","pairs":[{"left":"therefore","right":"result"},{"left":"because","right":"reason"},{"left":"as a result","right":"result"},{"left":"due to","right":"reason"}]},
    {"id":"ac8_a2","type":"fill","prompt":"He was ill; ___, he stayed home. (result)","answer":"therefore","keywords":["therefore","as a result"]},
  ],
  ac9: [
    {"id":"ac9_a1","type":"match","prompt":"Match the illustration linker with its use.","pairs":[{"left":"for example","right":"giving an example"},{"left":"such as","right":"listing examples"},{"left":"for instance","right":"giving an example"},{"left":"namely","right":"specifying"}]},
    {"id":"ac9_a2","type":"fill","prompt":"Many fruits, ___ apples, are healthy. (such as)","answer":"such as","keywords":["such as"]},
  ],
  ac10: [
    {"id":"ac10_a1","type":"text","prompt":"Write a paragraph using at least 6 different linking words.","keywords":["firstly","however","therefore","for example","moreover","in conclusion"]},
    {"id":"ac10_a2","type":"tf","prompt":"Varied linking words make writing flow better.","answer":true},
  ],
  ac11: [
    {"id":"ac11_a1","type":"mc","prompt":"An essay usually has:","options":["only a body","introduction, body, conclusion","only a conclusion","no structure"],"answerIdx":1},
    {"id":"ac11_a2","type":"text","prompt":"Write the three main parts of an essay.","keywords":["introduction","body","conclusion"]},
  ],
  ac12: [
    {"id":"ac12_a1","type":"mc","prompt":"A thesis statement:","options":["asks a question","states the main argument","is a title","is a quote"],"answerIdx":1},
    {"id":"ac12_a2","type":"text","prompt":"Write a thesis statement about online learning.","keywords":["online learning","because","offers","this essay"]},
  ],
  ac13: [
    {"id":"ac13_a1","type":"mc","prompt":"An introduction usually includes:","options":["only the thesis","hook, background, thesis","only examples","the conclusion"],"answerIdx":1},
    {"id":"ac13_a2","type":"text","prompt":"Write a hook for an essay about technology.","keywords":["imagine","did you know","today","technology"]},
  ],
  ac14: [
    {"id":"ac14_a1","type":"match","prompt":"Match the conclusion technique with its purpose.","pairs":[{"left":"restate thesis","right":"remind main point"},{"left":"summarize","right":"review key points"},{"left":"call to action","right":"urge the reader"},{"left":"final thought","right":"leave impression"}]},
    {"id":"ac14_a2","type":"tf","prompt":"A conclusion should not introduce completely new arguments.","answer":true},
  ],
  ac15: [
    {"id":"ac15_a1","type":"text","prompt":"Write a 200-word opinion essay with intro, body, and conclusion.","keywords":["i believe","firstly","however","in conclusion"]},
    {"id":"ac15_a2","type":"tf","prompt":"An opinion essay should clearly state and support your view.","answer":true},
  ],
  ac16: [
    {"id":"ac16_a1","type":"match","prompt":"Match the academic word with its meaning.","pairs":[{"left":"analyze","right":"analisar"},{"left":"significant","right":"significativo"},{"left":"establish","right":"estabelecer"},{"left":"demonstrate","right":"demonstrar"}]},
    {"id":"ac16_a2","type":"fill","prompt":"The data ___ a clear trend. (shows/demonstrates)","answer":"demonstrate","keywords":["demonstrate","demonstrates","show","shows"]},
  ],
  ac17: [
    {"id":"ac17_a1","type":"match","prompt":"Match informal to formal.","pairs":[{"left":"get","right":"obtain"},{"left":"a lot of","right":"numerous"},{"left":"kids","right":"children"},{"left":"buy","right":"purchase"}]},
    {"id":"ac17_a2","type":"mc","prompt":"Which is more formal?","options":["kids","get","therefore","wanna"],"answerIdx":2},
  ],
  ac18: [
    {"id":"ac18_a1","type":"mc","prompt":"Hedging in academic writing means:","options":["being 100% certain","being cautious (may, could, suggests)","being rude","using slang"],"answerIdx":1},
    {"id":"ac18_a2","type":"fill","prompt":"The results ___ that exercise helps. (suggest, cautious)","answer":"suggest","keywords":["suggest","indicate"]},
  ],
  ac19: [
    {"id":"ac19_a1","type":"match","prompt":"Match the reporting verb with its strength.","pairs":[{"left":"argues","right":"strong claim"},{"left":"suggests","right":"tentative"},{"left":"states","right":"neutral"},{"left":"claims","right":"doubtful"}]},
    {"id":"ac19_a2","type":"fill","prompt":"The author ___ that climate change is urgent. (argues)","answer":"argues","keywords":["argues","states","claims"]},
  ],
  ac20: [
    {"id":"ac20_a1","type":"text","prompt":"Rewrite \"Kids get a lot of stuff\" in formal English.","keywords":["children","obtain","numerous","items"]},
    {"id":"ac20_a2","type":"tf","prompt":"Academic writing avoids slang and contractions.","answer":true},
  ],
  ac21: [
    {"id":"ac21_a1","type":"mc","prompt":"A formal email greeting is:","options":["Hey!","Dear Dr. Smith,","Yo,","Hiya"],"answerIdx":1},
    {"id":"ac21_a2","type":"text","prompt":"Write a formal email opening line requesting information.","keywords":["i am writing","dear","regarding","could you"]},
  ],
  ac22: [
    {"id":"ac22_a1","type":"match","prompt":"Match the formal opening with its purpose.","pairs":[{"left":"I am writing to enquire","right":"asking info"},{"left":"I am writing regarding","right":"topic reference"},{"left":"With reference to","right":"referring back"},{"left":"I would like to","right":"polite intro"}]},
    {"id":"ac22_a2","type":"fill","prompt":"I am writing to ___ about the course. (ask)","answer":"enquire","keywords":["enquire","inquire","ask"]},
  ],
  ac23: [
    {"id":"ac23_a1","type":"fill","prompt":"I would be grateful if you ___ send the details. (could)","answer":"could","keywords":["could","would"]},
    {"id":"ac23_a2","type":"mc","prompt":"The most formal request is:","options":["Send it.","I would be grateful if you could send it.","Gimme it.","Send now."],"answerIdx":1},
  ],
  ac24: [
    {"id":"ac24_a1","type":"match","prompt":"Match the formal closing with its register.","pairs":[{"left":"Yours sincerely","right":"name known"},{"left":"Yours faithfully","right":"name unknown"},{"left":"Kind regards","right":"semi-formal"},{"left":"Best wishes","right":"friendly formal"}]},
    {"id":"ac24_a2","type":"mc","prompt":"When you start \"Dear Sir/Madam\", you close with:","options":["Yours sincerely","Yours faithfully","Cheers","Bye"],"answerIdx":1},
  ],
  ac25: [
    {"id":"ac25_a1","type":"text","prompt":"Write 3 formal email openings for different purposes.","keywords":["i am writing","dear","regarding","i would like"]},
    {"id":"ac25_a2","type":"tf","prompt":"Formal emails should have a clear subject and polite tone.","answer":true},
  ],
  ac26: [
    {"id":"ac26_a1","type":"mc","prompt":"A report usually has:","options":["no sections","title, intro, findings, conclusion","only opinions","jokes"],"answerIdx":1},
    {"id":"ac26_a2","type":"text","prompt":"Write the section headings of a formal report.","keywords":["introduction","findings","conclusion","recommendations"]},
  ],
  ac27: [
    {"id":"ac27_a1","type":"mc","prompt":"Objective language avoids:","options":["facts","personal feelings/bias","data","evidence"],"answerIdx":1},
    {"id":"ac27_a2","type":"fill","prompt":"Rewrite \"I think it's great\" objectively: \"The results ___ positive.\"","answer":"are","keywords":["are","were"]},
  ],
  ac28: [
    {"id":"ac28_a1","type":"text","prompt":"Write a sentence describing a finding from a study.","keywords":["the study found","results show","data indicates","it was found"]},
    {"id":"ac28_a2","type":"fill","prompt":"The survey ___ that 60% agreed. (found/revealed)","answer":"revealed","keywords":["revealed","found","showed"]},
  ],
  ac29: [
    {"id":"ac29_a1","type":"text","prompt":"Write a formal recommendation sentence.","keywords":["it is recommended","should","we suggest","in order to"]},
    {"id":"ac29_a2","type":"mc","prompt":"A formal recommendation phrase is:","options":["Do this!","It is recommended that the company...","Just do it.","Maybe try."],"answerIdx":1},
  ],
  ac30: [
    {"id":"ac30_a1","type":"text","prompt":"Write a 200-word formal report with intro, findings, and recommendation.","keywords":["this report","findings","recommend","conclusion"]},
    {"id":"ac30_a2","type":"tf","prompt":"A report should use objective, formal language.","answer":true},
  ],
  ac31: [
    {"id":"ac31_a1","type":"match","prompt":"Match the argument type with its meaning.","pairs":[{"left":"fact-based","right":"uses evidence"},{"left":"value-based","right":"uses beliefs"},{"left":"cause-effect","right":"shows consequences"},{"left":"comparison","right":"weighs options"}]},
    {"id":"ac31_a2","type":"text","prompt":"Write one fact-based argument for recycling.","keywords":["recycling","reduces","evidence","because"]},
  ],
  ac32: [
    {"id":"ac32_a1","type":"mc","prompt":"A counterargument is:","options":["your own point","the opposing view","a conclusion","a title"],"answerIdx":1},
    {"id":"ac32_a2","type":"text","prompt":"Write a counterargument and your response about online classes.","keywords":["some argue","however","on the other hand","nevertheless"]},
  ],
  ac33: [
    {"id":"ac33_a1","type":"match","prompt":"Match the logical fallacy with its meaning.","pairs":[{"left":"ad hominem","right":"attacking the person"},{"left":"slippery slope","right":"extreme chain of events"},{"left":"straw man","right":"misrepresenting an argument"},{"left":"false dilemma","right":"only two options"}]},
    {"id":"ac33_a2","type":"tf","prompt":"A logical fallacy weakens an argument.","answer":true},
  ],
  ac34: [
    {"id":"ac34_a1","type":"mc","prompt":"A reliable source is usually:","options":["anonymous blog","peer-reviewed journal","random comment","meme"],"answerIdx":1},
    {"id":"ac34_a2","type":"text","prompt":"Write 2 questions to evaluate a source's reliability.","keywords":["who wrote","when","reliable","evidence"]},
  ],
  ac35: [
    {"id":"ac35_a1","type":"text","prompt":"Write an argumentative paragraph: claim, evidence, explanation.","keywords":["i argue","for example","this shows","therefore"]},
    {"id":"ac35_a2","type":"tf","prompt":"An argumentative paragraph should support its claim with evidence.","answer":true},
  ],
  ac36: [
    {"id":"ac36_a1","type":"mc","prompt":"A good summary:","options":["copies the text","keeps main ideas in your words","adds opinions","is longer than the original"],"answerIdx":1},
    {"id":"ac36_a2","type":"text","prompt":"Write a one-sentence summary of an article you read.","keywords":["the article","argues","main point","about"]},
  ],
  ac37: [
    {"id":"ac37_a1","type":"text","prompt":"Paraphrase: \"Education is the key to success.\"","keywords":["learning","important","leads to","achievement"]},
    {"id":"ac37_a2","type":"mc","prompt":"Paraphrasing means:","options":["copying","restating in different words","quoting","ignoring"],"answerIdx":1},
  ],
  ac38: [
    {"id":"ac38_a1","type":"mc","prompt":"When quoting directly you must use:","options":["no marks","quotation marks and a citation","only italics","nothing"],"answerIdx":1},
    {"id":"ac38_a2","type":"fill","prompt":"Use ___ marks around a direct quote. (quotation)","answer":"quotation","keywords":["quotation","quote"]},
  ],
  ac39: [
    {"id":"ac39_a1","type":"mc","prompt":"To avoid plagiarism you should:","options":["copy without credit","cite your sources","hide sources","translate only"],"answerIdx":1},
    {"id":"ac39_a2","type":"tf","prompt":"Citing sources is necessary to avoid plagiarism.","answer":true},
  ],
  ac40: [
    {"id":"ac40_a1","type":"text","prompt":"Summarize and paraphrase a short article in your own words.","keywords":["the article","in summary","the author","main idea"]},
    {"id":"ac40_a2","type":"tf","prompt":"A summary should be shorter than the original and use your own words.","answer":true},
  ],
  ac41: [
    {"id":"ac41_a1","type":"mc","prompt":"A literature review:","options":["lists random facts","summarizes existing research","is fiction","is an intro only"],"answerIdx":1},
    {"id":"ac41_a2","type":"text","prompt":"Write an opening sentence for a literature review on sleep.","keywords":["several studies","research","previous","have shown"]},
  ],
  ac42: [
    {"id":"ac42_a1","type":"match","prompt":"Match the academic transition with its function.","pairs":[{"left":"consequently","right":"result"},{"left":"in contrast","right":"difference"},{"left":"similarly","right":"comparison"},{"left":"subsequently","right":"sequence"}]},
    {"id":"ac42_a2","type":"fill","prompt":"The trial failed; ___, the plan changed. (result)","answer":"consequently","keywords":["consequently","therefore"]},
  ],
  ac43: [
    {"id":"ac43_a1","type":"mc","prompt":"A methodology section describes:","options":["the results","how the research was done","the conclusion","opinions"],"answerIdx":1},
    {"id":"ac43_a2","type":"text","prompt":"Write a sentence describing a simple research method.","keywords":["data was collected","participants","method","survey"]},
  ],
  ac44: [
    {"id":"ac44_a1","type":"mc","prompt":"A discussion section:","options":["lists raw data","interprets the results","is the title","has no purpose"],"answerIdx":1},
    {"id":"ac44_a2","type":"text","prompt":"Write a sentence interpreting a result.","keywords":["this suggests","the results indicate","this means","therefore"]},
  ],
  ac45: [
    {"id":"ac45_a1","type":"text","prompt":"Write a 3-paragraph mini research paper: intro, body, conclusion.","keywords":["this paper","research","findings","in conclusion"]},
    {"id":"ac45_a2","type":"tf","prompt":"A research paper should be structured and evidence-based.","answer":true},
  ],
  ac46: [
    {"id":"ac46_a1","type":"mc","prompt":"Which sentence uses a comma correctly?","options":["Apples oranges and pears.","Apples, oranges, and pears.","Apples, oranges and, pears.","Apples oranges, and pears"],"answerIdx":1},
    {"id":"ac46_a2","type":"fill","prompt":"Add a comma: \"After dinner___ we went home.\"","answer":",","keywords":[","]},
  ],
  ac47: [
    {"id":"ac47_a1","type":"mc","prompt":"A semicolon is used to:","options":["end a question","join two related sentences","show possession","make a list of one item"],"answerIdx":1},
    {"id":"ac47_a2","type":"fill","prompt":"Choose ; or : — \"I need three things___ pens, paper, ink.\"","answer":":","keywords":[":"]},
  ],
  ac48: [
    {"id":"ac48_a1","type":"mc","prompt":"Which uses the apostrophe correctly?","options":["its raining","it's raining","its' raining","it raining"],"answerIdx":1},
    {"id":"ac48_a2","type":"fill","prompt":"Add an apostrophe: \"the dogs tail\" → the dog___ tail","answer":"'s","keywords":["'s"]},
  ],
  ac49: [
    {"id":"ac49_a1","type":"text","prompt":"Write 3 items for your editing checklist.","keywords":["spelling","grammar","punctuation","structure"]},
    {"id":"ac49_a2","type":"tf","prompt":"An editing checklist helps catch errors systematically.","answer":true},
  ],
  ac50: [
    {"id":"ac50_a1","type":"text","prompt":"Proofread a paragraph and note 2 corrections you made.","keywords":["corrected","error","fixed","proofread"]},
    {"id":"ac50_a2","type":"tf","prompt":"Proofreading should be done after writing, not while drafting.","answer":true},
  ],
  ac51: [
    {"id":"ac51_a1","type":"text","prompt":"Write the opening paragraph of a cover letter.","keywords":["i am writing to apply","position","experience","dear"]},
    {"id":"ac51_a2","type":"mc","prompt":"A cover letter should:","options":["list hobbies only","match your skills to the job","be very long","have no greeting"],"answerIdx":1},
  ],
  ac52: [
    {"id":"ac52_a1","type":"match","prompt":"Match the CV section with its content.","pairs":[{"left":"Profile","right":"short summary"},{"left":"Experience","right":"work history"},{"left":"Education","right":"qualifications"},{"left":"Skills","right":"abilities"}]},
    {"id":"ac52_a2","type":"text","prompt":"Write a 1-sentence professional profile for a CV.","keywords":["experienced","skilled","professional","results"]},
  ],
  ac53: [
    {"id":"ac53_a1","type":"mc","prompt":"An executive summary is:","options":["a long report","a short overview of key points","an introduction only","a list of names"],"answerIdx":1},
    {"id":"ac53_a2","type":"text","prompt":"Write a 2-sentence executive summary of a project.","keywords":["the project","aims","results","summary"]},
  ],
  ac54: [
    {"id":"ac54_a1","type":"mc","prompt":"A memo usually starts with:","options":["Dear Sir","To, From, Date, Subject","Once upon a time","Cheers"],"answerIdx":1},
    {"id":"ac54_a2","type":"text","prompt":"Write the header lines of a business memo.","keywords":["to","from","date","subject"]},
  ],
  ac55: [
    {"id":"ac55_a1","type":"text","prompt":"Write a full short cover letter for a job you want.","keywords":["dear","i am writing to apply","my experience","sincerely"]},
    {"id":"ac55_a2","type":"tf","prompt":"A cover letter should be tailored to the specific job.","answer":true},
  ],
  ac56: [
    {"id":"ac56_a1","type":"text","prompt":"Revise a piece of your writing and note 2 improvements.","keywords":["improved","revised","clearer","better"]},
    {"id":"ac56_a2","type":"tf","prompt":"Revising improves clarity and structure.","answer":true},
  ],
  ac57: [
    {"id":"ac57_a1","type":"text","prompt":"Write a 350-word argumentative essay with intro, 2 body paragraphs, conclusion.","keywords":["i argue","firstly","however","in conclusion"]},
    {"id":"ac57_a2","type":"tf","prompt":"An argumentative essay should address counterarguments.","answer":true},
  ],
  ac58: [
    {"id":"ac58_a1","type":"text","prompt":"Self-evaluate your writing: strengths and one area to improve.","keywords":["strength","improve","clear","grammar"]},
    {"id":"ac58_a2","type":"tf","prompt":"Self-evaluation helps you grow as a writer.","answer":true},
  ],
  ac59: [
    {"id":"ac59_a1","type":"text","prompt":"Write 2 pieces of constructive feedback for a peer's text.","keywords":["well done","you could","consider","clear"]},
    {"id":"ac59_a2","type":"tf","prompt":"Good feedback is specific and constructive.","answer":true},
  ],
  ac60: [
    {"id":"ac60_a1","type":"text","prompt":"Write a short introduction for presenting your writing portfolio.","keywords":["this portfolio","includes","i have improved","my best work"]},
    {"id":"ac60_a2","type":"tf","prompt":"A portfolio showcases your best and most improved work.","answer":true},
  ],
};

export default DEFAULT_ACTIVITIES;
