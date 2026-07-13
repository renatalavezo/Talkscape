import { CORE_GE } from './coreActivities'
import { JOURNEY_CV } from './journeyCV'

const LEGACY_ACTIVITIES = {
  bj1: {
    context: "Em ambientes profissionais, é essencial saber se apresentar de forma clara e confiante, informando nome, cargo e empresa. Expressões como 'Nice to meet you', 'I work for...' e 'I'm responsible for...' são fundamentais para uma primeira impressão profissional.",
    acts: [
      {"id": "bj1_mc1", "type": "mc", "prompt": "Which sentence best introduces your name and job title in a professional setting?", "options": ["Hey, I'm Mike, whatever.", "My name is Mike Johnson, and I'm the Marketing Manager at Delta Inc.", "You can call me Mike or something.", "I'm just Mike, nothing special."], "answerIdx": 1, "hint": "Escolha a opção que usa nome completo e cargo de forma clara."},
      {"id": "bj1_mc2", "type": "mc", "prompt": "What is the correct response to 'Nice to meet you'?", "options": ["Nice to meet you too.", "I meet you too.", "Nice meet you.", "You too meet."], "answerIdx": 0, "hint": "Pense na resposta padrão e educada em inglês."},
      {"id": "bj1_mc3", "type": "mc", "prompt": "Which preposition correctly completes 'I work ___ ABC Corp.'?", "options": ["on", "for", "into", "about"], "answerIdx": 1, "hint": "Depois de 'work', use a preposição que indica a empresa empregadora."},
      {"id": "bj1_fill1", "type": "fill", "prompt": "Allow me to ___ myself: I'm the new Finance Director.", "answer": "introduce", "keywords": ["introduce"], "hint": "Verbo que significa 'apresentar'."},
      {"id": "bj1_fill2", "type": "fill", "prompt": "I ___ for a logistics company based in São Paulo.", "answer": "work", "keywords": ["work"], "hint": "Complete com o verbo que indica onde você é empregado (+ for)."},
      {"id": "bj1_fill3", "type": "fill", "prompt": "Nice to ___ you. I've heard a lot about your team.", "answer": "meet", "keywords": ["meet"], "hint": "Verbo usado na expressão padrão de cumprimento ao conhecer alguém."},
      {"id": "bj1_tf1", "type": "tf", "prompt": "Saying 'Nice to meet you' is appropriate the first time you meet someone.", "answer": true, "hint": "Pense em quando usamos essa expressão."},
      {"id": "bj1_tf2", "type": "tf", "prompt": "In business introductions, it is polite to state your job title along with your name.", "answer": true, "hint": "Pense no que torna uma apresentação profissional completa."},
      {"id": "bj1_text1", "type": "text", "prompt": "Write a short professional introduction (3-4 sentences) including your name, job title and company.", "keywords": ["name", "work", "position", "pleased", "meet"], "hint": "Use: 'My name is...', 'I work for...', 'I am responsible for...'"},
      {"id": "bj1_text2", "type": "text", "prompt": "Imagine you are meeting a new client for the first time. Write what you would say to introduce yourself and your role.", "keywords": ["name", "client", "role", "company", "pleasure"], "hint": "Comece com uma saudação formal e mencione seu cargo e empresa."}
    ]
  },
  bj2: {
    context: "Small talk é a conversa casual usada para quebrar o gelo antes de assuntos de trabalho. Temas seguros incluem clima, fim de semana e trajeto até o trabalho ('commute'). Dominar esse tipo de conversa ajuda a criar relacionamentos profissionais mais próximos.",
    acts: [
      {"id": "bj2_mc1", "type": "mc", "prompt": "Which is a common small talk question about the weekend?", "options": ["What's your salary?", "Did you do anything fun this weekend?", "How old are you?", "Are you married?"], "answerIdx": 1, "hint": "Pense em perguntas leves e apropriadas para conversa casual no trabalho."},
      {"id": "bj2_mc2", "type": "mc", "prompt": "Which topic is generally safe for small talk at work?", "options": ["Politics", "The weather", "Someone's personal finances", "Religion"], "answerIdx": 1, "hint": "Escolha um tema neutro e seguro para conversas casuais."},
      {"id": "bj2_mc3", "type": "mc", "prompt": "Which sentence is a natural idiomatic comment about heavy rain?", "options": ["It's raining cats and dogs today!", "It's raining cats today!", "It's raining like a dog today!", "It's cats and dogs raining today!"], "answerIdx": 0, "hint": "Pense na expressão idiomática correta para chuva forte."},
      {"id": "bj2_fill1", "type": "fill", "prompt": "Did you have a good ___?", "answer": "weekend", "keywords": ["weekend"], "hint": "Pergunta comum feita às segundas-feiras no trabalho."},
      {"id": "bj2_fill2", "type": "fill", "prompt": "The ___ is supposed to be sunny all week.", "answer": "weather", "keywords": ["weather"], "hint": "Palavra que descreve as condições climáticas."},
      {"id": "bj2_fill3", "type": "fill", "prompt": "How was your ___ to work this morning?", "answer": "commute", "keywords": ["commute", "trip", "journey"], "hint": "Palavra que descreve o trajeto diário até o trabalho."},
      {"id": "bj2_tf1", "type": "tf", "prompt": "'Did you do anything fun this weekend?' is a common small talk question.", "answer": true, "hint": "Pense em quando usamos essa pergunta."},
      {"id": "bj2_tf2", "type": "tf", "prompt": "Discussing a colleague's salary is considered appropriate small talk.", "answer": false, "hint": "Pense em temas considerados invasivos no trabalho."},
      {"id": "bj2_text1", "type": "text", "prompt": "Write a short small talk dialogue (4-6 lines) between two coworkers on a Monday morning.", "keywords": ["weekend", "how", "good", "did"], "hint": "Comece perguntando sobre o fim de semana da outra pessoa."},
      {"id": "bj2_text2", "type": "text", "prompt": "Write 3 questions you could ask a colleague about their commute.", "keywords": ["commute", "long", "traffic", "how"], "hint": "Use perguntas com 'how' e 'what' sobre o trajeto até o trabalho."}
    ]
  },
  bj3: {
    context: "O vocabulário básico de negócios inclui palavras usadas diariamente no ambiente corporativo, como 'colleague' (colega), 'deadline' (prazo) e 'meeting' (reunião). Conhecer esses termos é essencial para se comunicar com clareza no trabalho.",
    acts: [
      {"id": "bj3_mc1", "type": "mc", "prompt": "What does 'colleague' mean?", "options": ["A person you work with", "A family member", "A customer", "A competitor company"], "answerIdx": 0, "hint": "Pense em alguém que trabalha na mesma empresa que você."},
      {"id": "bj3_mc2", "type": "mc", "prompt": "What is a 'deadline'?", "options": ["A type of contract", "The date by which something must be completed", "A meeting room", "A job title"], "answerIdx": 1, "hint": "Pense no prazo final para entregar algo."},
      {"id": "bj3_mc3", "type": "mc", "prompt": "Which sentence uses 'deadline' correctly?", "options": ["The deadline for the report is next Friday.", "I have a deadline colleague.", "She deadlined the project.", "The deadline is my manager."], "answerIdx": 0, "hint": "'Deadline' é um substantivo que indica prazo."},
      {"id": "bj3_fill1", "type": "fill", "prompt": "I need to finish this report before the ___.", "answer": "deadline", "keywords": ["deadline"], "hint": "Palavra que indica o prazo final para uma tarefa."},
      {"id": "bj3_fill2", "type": "fill", "prompt": "My ___ from the sales team helped me with the client presentation.", "answer": "colleague", "keywords": ["colleague"], "hint": "Pessoa com quem você trabalha."},
      {"id": "bj3_fill3", "type": "fill", "prompt": "We have a ___ scheduled for 2pm to discuss the budget.", "answer": "meeting", "keywords": ["meeting"], "hint": "Encontro para discutir assuntos de trabalho."},
      {"id": "bj3_tf1", "type": "tf", "prompt": "A colleague is someone who works at a different company.", "answer": false, "hint": "Pense no local de trabalho de um 'colleague'."},
      {"id": "bj3_tf2", "type": "tf", "prompt": "A deadline is the date by which a task must be completed.", "answer": true, "hint": "Pense no significado literal de 'deadline'."},
      {"id": "bj3_text1", "type": "text", "prompt": "Write 3 sentences using the words 'colleague', 'deadline', and 'meeting'.", "keywords": ["colleague", "deadline", "meeting"], "hint": "Use cada palavra em uma frase completa e com sentido."},
      {"id": "bj3_text2", "type": "text", "prompt": "Describe a typical task you complete at work using at least 2 business vocabulary words.", "keywords": ["task", "department", "project"], "hint": "Escolha palavras como 'task', 'project' ou 'department'."}
    ]
  },
  bj4: {
    context: "Cumprimentos e despedidas variam conforme o horário do dia e o grau de formalidade da situação. Frases como 'Good morning', 'It was nice meeting you' e 'Take care' são essenciais no ambiente profissional.",
    acts: [
      {"id": "bj4_mc1", "type": "mc", "prompt": "Which greeting is appropriate in a professional email sent in the morning?", "options": ["Good morning,", "Yo,", "Sup,", "Hey dude,"], "answerIdx": 0, "hint": "Escolha a saudação mais formal e adequada ao horário."},
      {"id": "bj4_mc2", "type": "mc", "prompt": "Which farewell is appropriate at the end of a business meeting?", "options": ["Thank you for your time. Have a great day!", "Bye bye!", "See ya later, alligator!", "Whatever, I'm out."], "answerIdx": 0, "hint": "Escolha a despedida mais formal e educada."},
      {"id": "bj4_mc3", "type": "mc", "prompt": "Which is the correct response to 'How are you doing today?' in a professional context?", "options": ["I'm doing well, thank you. How about you?", "I doing well.", "I am well thank.", "Doing am well."], "answerIdx": 0, "hint": "Verifique a gramática correta da resposta."},
      {"id": "bj4_fill1", "type": "fill", "prompt": "___ morning! How was your trip?", "answer": "Good", "keywords": ["Good"], "hint": "Saudação comum usada antes do meio-dia."},
      {"id": "bj4_fill2", "type": "fill", "prompt": "Thank you for your time today. Have a great ___!", "answer": "day", "keywords": ["day"], "hint": "Palavra usada em despedidas educadas."},
      {"id": "bj4_fill3", "type": "fill", "prompt": "It was ___ meeting you. I hope we can talk again soon.", "answer": "nice", "keywords": ["nice", "great", "good"], "hint": "Adjetivo usado para expressar que o encontro foi agradável."},
      {"id": "bj4_tf1", "type": "tf", "prompt": "'Good morning' is typically used before 12pm.", "answer": true, "hint": "Pense no período do dia associado a essa saudação."},
      {"id": "bj4_tf2", "type": "tf", "prompt": "'Take care' is an inappropriate way to end a professional conversation.", "answer": false, "hint": "'Take care' é uma despedida educada e comum."},
      {"id": "bj4_text1", "type": "text", "prompt": "Write 3 different greetings you could use at different times of day in a professional setting.", "keywords": ["morning", "afternoon", "evening"], "hint": "Pense em saudações apropriadas para manhã, tarde e noite."},
      {"id": "bj4_text2", "type": "text", "prompt": "Write a short farewell message to a colleague who is leaving the company.", "keywords": ["goodbye", "miss", "best", "wishes"], "hint": "Use uma linguagem calorosa e profissional."}
    ]
  },
  bj5: {
    context: "Um resumo profissional no LinkedIn deve destacar cargo, experiência, habilidades e conquistas de forma concisa. Usar verbos de ação e resultados quantificáveis (como 'increased sales by 30%') torna o perfil mais atrativo para recrutadores e parceiros.",
    acts: [
      {"id": "bj5_mc1", "type": "mc", "prompt": "What is the purpose of a LinkedIn summary?", "options": ["To showcase your professional background and skills", "To list your favorite movies", "To share personal contact information only", "To complain about your previous job"], "answerIdx": 0, "hint": "Pense no objetivo principal de um resumo profissional."},
      {"id": "bj5_mc2", "type": "mc", "prompt": "Which sentence is appropriate for a LinkedIn headline?", "options": ["Just a guy looking for any job.", "Marketing Manager | Helping brands grow through data-driven strategy", "Unemployed, please hire me", "I hate my current job"], "answerIdx": 1, "hint": "Escolha a opção mais profissional e específica."},
      {"id": "bj5_mc3", "type": "mc", "prompt": "Which tense is most commonly used to describe your current role in a LinkedIn summary?", "options": ["Present Simple", "Past Perfect", "Future Continuous", "Past Continuous"], "answerIdx": 0, "hint": "Pense em como descrevemos ações e fatos atuais."},
      {"id": "bj5_fill1", "type": "fill", "prompt": "I am a ___-driven professional with a passion for innovation.", "answer": "results", "keywords": ["results"], "hint": "Adjetivo composto comum em resumos de LinkedIn."},
      {"id": "bj5_fill2", "type": "fill", "prompt": "Over the past five years, I have ___ my skills in project management.", "answer": "developed", "keywords": ["developed", "built", "honed"], "hint": "Verbo que significa 'aprimorar' ou 'desenvolver'."},
      {"id": "bj5_fill3", "type": "fill", "prompt": "I specialize ___ digital marketing and brand strategy.", "answer": "in", "keywords": ["in"], "hint": "Preposição usada após o verbo 'specialize'."},
      {"id": "bj5_tf1", "type": "tf", "prompt": "A LinkedIn summary should highlight your skills and professional achievements.", "answer": true, "hint": "Pense no propósito de um resumo profissional."},
      {"id": "bj5_tf2", "type": "tf", "prompt": "It's acceptable to use informal slang throughout a LinkedIn summary.", "answer": false, "hint": "Um perfil profissional deve manter um tom adequado."},
      {"id": "bj5_text1", "type": "text", "prompt": "Write 3 sentences describing your profession and what you enjoy about your work, suitable for a LinkedIn summary.", "keywords": ["work", "enjoy", "passionate"], "hint": "Use um tom positivo e profissional."},
      {"id": "bj5_text2", "type": "text", "prompt": "Write a LinkedIn headline (10-15 words) for your current or desired job title.", "keywords": ["title", "helping", "experience"], "hint": "Combine seu cargo com o valor que você entrega."}
    ]
  },
  bj6: {
    context: "Um e-mail profissional segue uma estrutura clara: linha de assunto (subject), saudação (greeting), corpo do texto (body) e encerramento (closing). Seguir essa estrutura garante que a mensagem seja compreendida com clareza e profissionalismo.",
    acts: [
      {"id": "bj6_mc1", "type": "mc", "prompt": "What is the purpose of the subject line in a business email?", "options": ["To summarize the email's content briefly", "To greet the recipient", "To sign off the email", "To attach a file"], "answerIdx": 0, "hint": "Pense no que aparece antes de abrir o e-mail."},
      {"id": "bj6_mc2", "type": "mc", "prompt": "Which part of an email typically comes right after the greeting?", "options": ["The subject line", "The body", "The signature", "The attachment"], "answerIdx": 1, "hint": "Pense na ordem lógica de um e-mail."},
      {"id": "bj6_mc3", "type": "mc", "prompt": "Which is an example of a professional email closing?", "options": ["Best regards,", "See ya,", "Whatever,", "Talk later,"], "answerIdx": 0, "hint": "Escolha o encerramento mais formal."},
      {"id": "bj6_fill1", "type": "fill", "prompt": "The ___ line should briefly summarize the purpose of the email.", "answer": "subject", "keywords": ["subject"], "hint": "Palavra que se refere ao título do e-mail."},
      {"id": "bj6_fill2", "type": "fill", "prompt": "Dear Mr. Lee, I hope this email finds you ___.", "answer": "well", "keywords": ["well"], "hint": "Palavra comum usada em saudações formais de e-mail."},
      {"id": "bj6_fill3", "type": "fill", "prompt": "Please find ___ the invoice for last month's services.", "answer": "attached", "keywords": ["attached"], "hint": "Palavra usada para indicar que há um arquivo anexado."},
      {"id": "bj6_tf1", "type": "tf", "prompt": "The subject line should clearly summarize the email's purpose.", "answer": true, "hint": "Pense no papel da linha de assunto."},
      {"id": "bj6_tf2", "type": "tf", "prompt": "The greeting comes after the body of the email.", "answer": false, "hint": "Pense na ordem correta de um e-mail."},
      {"id": "bj6_text1", "type": "text", "prompt": "Write a subject line for an email requesting a meeting about next quarter's budget.", "keywords": ["meeting", "budget", "request"], "hint": "Seja claro e específico sobre o objetivo do e-mail."},
      {"id": "bj6_text2", "type": "text", "prompt": "Write the greeting and first sentence of a formal email to someone you have never met.", "keywords": ["Dear", "writing", "regarding"], "hint": "Use uma saudação formal seguida do propósito do e-mail."}
    ]
  },
  bj7: {
    context: "Frases formais são fundamentais para escrever e-mails profissionais claros e educados. Expressões como 'I am writing to…' e 'Please find attached…' são amplamente usadas para introduzir o propósito do e-mail e mencionar anexos.",
    acts: [
      {"id": "bj7_mc1", "type": "mc", "prompt": "Which phrase is used to state the purpose of a formal email?", "options": ["I am writing to inform you about...", "I am writting about...", "I write you about...", "Writing I am about..."], "answerIdx": 0, "hint": "Escolha a opção gramaticalmente correta e formal."},
      {"id": "bj7_mc2", "type": "mc", "prompt": "Which phrase correctly introduces an attached file?", "options": ["Please find attached the requested document.", "Please find the attach document.", "Please attached find the document.", "Find please attached document."], "answerIdx": 0, "hint": "Verifique a ordem correta das palavras."},
      {"id": "bj7_mc3", "type": "mc", "prompt": "Which sentence uses 'I am writing to' correctly?", "options": ["I am writing to request further information.", "I am writing for request information.", "I am writing to requesting information.", "I writing to request information."], "answerIdx": 0, "hint": "Depois de 'to', use o verbo no infinitivo."},
      {"id": "bj7_fill1", "type": "fill", "prompt": "I am writing ___ inform you about the changes to our schedule.", "answer": "to", "keywords": ["to"], "hint": "Preposição usada após 'writing' para indicar propósito."},
      {"id": "bj7_fill2", "type": "fill", "prompt": "Please find ___ the contract for your review.", "answer": "attached", "keywords": ["attached"], "hint": "Palavra usada para indicar um anexo."},
      {"id": "bj7_fill3", "type": "fill", "prompt": "I am writing to ___ about the status of my application.", "answer": "inquire", "keywords": ["inquire", "ask"], "hint": "Verbo formal que significa 'perguntar'."},
      {"id": "bj7_tf1", "type": "tf", "prompt": "'I am writing to' is a common way to state the purpose of a formal email.", "answer": true, "hint": "Pense no uso comum dessa expressão."},
      {"id": "bj7_tf2", "type": "tf", "prompt": "'Please find attached' is used when there is no document attached.", "answer": false, "hint": "Essa expressão indica que há um anexo."},
      {"id": "bj7_text1", "type": "text", "prompt": "Write an opening sentence for a formal email requesting a price quote.", "keywords": ["writing", "request", "quote"], "hint": "Use 'I am writing to request...'"},
      {"id": "bj7_text2", "type": "text", "prompt": "Write a sentence mentioning an attached invoice using formal language.", "keywords": ["attached", "invoice", "please find"], "hint": "Use a expressão 'Please find attached...'"}
    ]
  },
  bj8: {
    context: "Pedidos educados por e-mail usam estruturas indiretas para soar mais gentis, como 'Could you please…?' e 'Would it be possible…?'. Quanto mais indireta a linguagem, geralmente mais formal e educada ela soa em inglês.",
    acts: [
      {"id": "bj8_mc1", "type": "mc", "prompt": "Which is the most polite way to ask someone to send a file?", "options": ["Could you please send me the file?", "Send me the file.", "Give file now.", "File send me please."], "answerIdx": 0, "hint": "Escolha a opção mais educada e indireta."},
      {"id": "bj8_mc2", "type": "mc", "prompt": "Which phrase softens a request the most?", "options": ["Would it be possible for you to review this by Friday?", "Review this by Friday.", "You need to review this.", "Review it now."], "answerIdx": 0, "hint": "Pense em qual opção soa menos direta e mais gentil."},
      {"id": "bj8_mc3", "type": "mc", "prompt": "Which sentence uses 'Would you mind' correctly?", "options": ["Would you mind sending me the updated figures?", "Would you mind to send me figures?", "Would you minding send figures?", "Mind you would send figures?"], "answerIdx": 0, "hint": "'Would you mind' é seguido de verbo-ing."},
      {"id": "bj8_fill1", "type": "fill", "prompt": "Could you ___ send me the report by Friday?", "answer": "please", "keywords": ["please"], "hint": "Palavra usada para tornar um pedido mais educado."},
      {"id": "bj8_fill2", "type": "fill", "prompt": "Would it be ___ for you to join the call at 3pm?", "answer": "possible", "keywords": ["possible"], "hint": "Palavra usada na expressão 'Would it be possible...?'"},
      {"id": "bj8_fill3", "type": "fill", "prompt": "Would you ___ closing the window? It's a bit cold in here.", "answer": "mind", "keywords": ["mind"], "hint": "Verbo usado na expressão 'Would you mind + verbo-ing'."},
      {"id": "bj8_tf1", "type": "tf", "prompt": "'Could you please...' is a polite way to make a request in English.", "answer": true, "hint": "Pense no uso comum dessa expressão."},
      {"id": "bj8_tf2", "type": "tf", "prompt": "'Would it be possible...' is considered a rude way to ask for something.", "answer": false, "hint": "Essa expressão é considerada educada e indireta."},
      {"id": "bj8_text1", "type": "text", "prompt": "Write a polite request asking a colleague to send you a document.", "keywords": ["could", "please", "send"], "hint": "Use 'Could you please...?'"},
      {"id": "bj8_text2", "type": "text", "prompt": "Write a polite request using 'Would it be possible...' to ask for a deadline extension.", "keywords": ["would", "possible", "extension"], "hint": "Combine a expressão com um pedido claro sobre o prazo."}
    ]
  },
  bj9: {
    context: "E-mails semi-formais equilibram cordialidade e profissionalismo. 'Hi' é mais casual que 'Dear', assim como 'Best' é mais leve que 'Regards' ou 'Sincerely'. Escolher o nível certo de formalidade depende da relação com o destinatário.",
    acts: [
      {"id": "bj9_mc1", "type": "mc", "prompt": "Which greeting is semi-formal, appropriate for someone you know but not closely?", "options": ["Hi John,", "Dear Sir or Madam,", "Yo John,", "To Whom It May Concern,"], "answerIdx": 0, "hint": "Pense em uma saudação nem muito formal nem muito casual."},
      {"id": "bj9_mc2", "type": "mc", "prompt": "Which closing is semi-formal?", "options": ["Best,", "Sincerely yours,", "Yours faithfully,", "With utmost respect,"], "answerIdx": 0, "hint": "Escolha o encerramento mais neutro."},
      {"id": "bj9_mc3", "type": "mc", "prompt": "Which greeting is the most formal?", "options": ["Dear Mr. Johnson,", "Hi Mike,", "Hey Mike,", "Hello there,"], "answerIdx": 0, "hint": "Escolha a saudação que usa título e sobrenome."},
      {"id": "bj9_fill1", "type": "fill", "prompt": "___ Laura, thanks for the quick update yesterday.", "answer": "Hi", "keywords": ["Hi"], "hint": "Saudação semi-formal comum entre colegas conhecidos."},
      {"id": "bj9_fill2", "type": "fill", "prompt": "___ Mr. Patel, I am writing to follow up on our previous conversation.", "answer": "Dear", "keywords": ["Dear"], "hint": "Saudação formal usada com título e sobrenome."},
      {"id": "bj9_fill3", "type": "fill", "prompt": "Best ___, Ana", "answer": "regards", "keywords": ["regards"], "hint": "Palavra comum em encerramentos de e-mail."},
      {"id": "bj9_tf1", "type": "tf", "prompt": "'Hi' is generally more casual than 'Dear' as an email greeting.", "answer": true, "hint": "Pense no nível de formalidade de cada saudação."},
      {"id": "bj9_tf2", "type": "tf", "prompt": "'Dear Sir or Madam' is used when you know the recipient's name.", "answer": false, "hint": "Essa expressão é usada quando o nome é desconhecido."},
      {"id": "bj9_text1", "type": "text", "prompt": "Write a semi-formal email greeting and closing for a colleague you know but don't work with closely.", "keywords": ["Hi", "Best", "regards"], "hint": "Use um tom equilibrado, nem muito formal nem muito casual."},
      {"id": "bj9_text2", "type": "text", "prompt": "Write a formal email greeting and closing for a company you are contacting for the first time.", "keywords": ["Dear", "Sincerely", "regards"], "hint": "Use uma saudação e um encerramento formais."}
    ]
  },
  bj10: {
    context: "Escrever e-mails de pedido, follow-up e desculpas exige estruturas específicas. Um e-mail de pedido usa linguagem educada para solicitar algo; um follow-up retoma um assunto anterior; e um e-mail de desculpas reconhece um erro e oferece solução.",
    acts: [
      {"id": "bj10_mc1", "type": "mc", "prompt": "Which sentence is characteristic of a request email?", "options": ["I am writing to request information about your services.", "I am writing to apologize for the delay.", "I am writing to follow up on my previous email.", "I am writing to thank you for the meeting."], "answerIdx": 0, "hint": "Pense em qual frase pede algo diretamente."},
      {"id": "bj10_mc2", "type": "mc", "prompt": "Which sentence is characteristic of a follow-up email?", "options": ["I am following up on the proposal I sent last week.", "I am sorry for the inconvenience caused.", "Please find attached my resume.", "I would like to request a refund."], "answerIdx": 0, "hint": "Pense em qual frase retoma um assunto já enviado antes."},
      {"id": "bj10_mc3", "type": "mc", "prompt": "Which sentence is characteristic of an apology email?", "options": ["We sincerely apologize for the delay in your shipment.", "We are writing to request a quote.", "We are following up on our last conversation.", "We would like to introduce our new product."], "answerIdx": 0, "hint": "Pense em qual frase reconhece um erro."},
      {"id": "bj10_fill1", "type": "fill", "prompt": "I am writing to ___ information about your pricing plans.", "answer": "request", "keywords": ["request"], "hint": "Verbo que significa 'pedir formalmente'."},
      {"id": "bj10_fill2", "type": "fill", "prompt": "I am ___ up on the email I sent last Tuesday.", "answer": "following", "keywords": ["following"], "hint": "Verbo usado na expressão 'follow up'."},
      {"id": "bj10_fill3", "type": "fill", "prompt": "We sincerely ___ for the inconvenience this has caused.", "answer": "apologize", "keywords": ["apologize"], "hint": "Verbo que significa 'pedir desculpas'."},
      {"id": "bj10_tf1", "type": "tf", "prompt": "A request email typically asks for something, like information or action.", "answer": true, "hint": "Pense no propósito de um e-mail de pedido."},
      {"id": "bj10_tf2", "type": "tf", "prompt": "A follow-up email is usually the first email sent in a conversation.", "answer": false, "hint": "Um follow-up retoma um contato anterior."},
      {"id": "bj10_text1", "type": "text", "prompt": "Write a short request email (3-4 sentences) asking a supplier for a price quote.", "keywords": ["writing", "request", "quote"], "hint": "Use 'I am writing to request...'"},
      {"id": "bj10_text2", "type": "text", "prompt": "Write a short follow-up email (3-4 sentences) after not receiving a reply to a proposal sent last week.", "keywords": ["following up", "proposal", "reply"], "hint": "Mencione o e-mail anterior e peça uma atualização."}
    ]
  },
  bj11: {
    context: "O vocabulário de reunião é essencial para participar e conduzir encontros profissionais em inglês. Palavras como 'agenda' (pauta), 'minutes' (ata) e 'action item' (tarefa a ser realizada) aparecem constantemente em reuniões de negócios.",
    acts: [
      {"id": "bj11_mc1", "type": "mc", "prompt": "What does 'agenda' mean in a business meeting context?", "options": ["A list of topics to be discussed", "A type of contract", "The meeting room", "A financial report"], "answerIdx": 0, "hint": "Pense na pauta que organiza os assuntos da reunião."},
      {"id": "bj11_mc2", "type": "mc", "prompt": "What are 'minutes' in a meeting context?", "options": ["Sixty seconds", "The written record of what was discussed and decided", "A type of snack served during meetings", "The meeting's starting time"], "answerIdx": 1, "hint": "Pense no documento que registra o que foi discutido."},
      {"id": "bj11_mc3", "type": "mc", "prompt": "What is an 'action item'?", "options": ["A task assigned to someone after the meeting", "A product being launched", "A type of vote", "The meeting's location"], "answerIdx": 0, "hint": "Pense nas tarefas que surgem após uma reunião."},
      {"id": "bj11_fill1", "type": "fill", "prompt": "The first item on today's ___ is the quarterly budget review.", "answer": "agenda", "keywords": ["agenda"], "hint": "Palavra que se refere à pauta da reunião."},
      {"id": "bj11_fill2", "type": "fill", "prompt": "Could you please take the ___ during today's meeting?", "answer": "minutes", "keywords": ["minutes"], "hint": "Palavra que se refere ao registro escrito da reunião."},
      {"id": "bj11_fill3", "type": "fill", "prompt": "Each ___ item needs to be completed by next Monday.", "answer": "action", "keywords": ["action"], "hint": "Palavra usada na expressão 'action item'."},
      {"id": "bj11_tf1", "type": "tf", "prompt": "'Minutes' in a business meeting refers to the unit of time.", "answer": false, "hint": "'Minutes' tem um significado diferente em reuniões."},
      {"id": "bj11_tf2", "type": "tf", "prompt": "An 'action item' is a task assigned to someone after the meeting.", "answer": true, "hint": "Pense no propósito de um action item."},
      {"id": "bj11_text1", "type": "text", "prompt": "Write 3 sentences using the words 'agenda', 'minutes', and 'action item'.", "keywords": ["agenda", "minutes", "action item"], "hint": "Use cada palavra em uma frase completa e com sentido."},
      {"id": "bj11_text2", "type": "text", "prompt": "Write a short meeting agenda with 3 topics for a weekly team meeting.", "keywords": ["agenda", "review", "discuss", "update"], "hint": "Organize os tópicos em uma lista numerada."}
    ]
  },
  bj12: {
    context: "Conduzir uma reunião envolve abrir com clareza, distribuir a palavra entre os participantes e encerrar com um resumo eficaz. Frases como 'I'd like to call this meeting to order' e 'Let's wrap up' ajudam a estruturar todo o encontro.",
    acts: [
      {"id": "bj12_mc1", "type": "mc", "prompt": "Which phrase is used to open a meeting formally?", "options": ["I'd like to call this meeting to order.", "Let's wrap this up.", "Does anyone object?", "I'll pass it to you."], "answerIdx": 0, "hint": "Escolha a frase usada para iniciar formalmente uma reunião."},
      {"id": "bj12_mc2", "type": "mc", "prompt": "Which phrase is used to give someone the floor to speak?", "options": ["I'll pass it over to you, Sarah.", "I'll take that away from you.", "Stop talking now.", "You can't speak."], "answerIdx": 0, "hint": "Escolha a frase que cede a palavra a alguém educadamente."},
      {"id": "bj12_mc3", "type": "mc", "prompt": "Which phrase is appropriate for moving to the next agenda item?", "options": ["Let's move on to the next point.", "Let's stop everything now.", "Forget the agenda.", "Let's skip to lunch."], "answerIdx": 0, "hint": "Escolha a transição apropriada entre itens da pauta."},
      {"id": "bj12_fill1", "type": "fill", "prompt": "I'd like to ___ this meeting to order.", "answer": "call", "keywords": ["call"], "hint": "Verbo usado na expressão formal de abertura de reunião."},
      {"id": "bj12_fill2", "type": "fill", "prompt": "Let's ___ on to the next item on the agenda.", "answer": "move", "keywords": ["move"], "hint": "Verbo usado para avançar para o próximo tópico."},
      {"id": "bj12_fill3", "type": "fill", "prompt": "I'll ___ it over to Maria to update us on sales.", "answer": "pass", "keywords": ["pass"], "hint": "Verbo usado para ceder a palavra a alguém."},
      {"id": "bj12_tf1", "type": "tf", "prompt": "'I'd like to call this meeting to order' is used to open a meeting.", "answer": true, "hint": "Pense no contexto dessa expressão."},
      {"id": "bj12_tf2", "type": "tf", "prompt": "A chair should let only one person speak, ignoring everyone else's opinion.", "answer": false, "hint": "Um bom moderador distribui a fala entre os participantes."},
      {"id": "bj12_text1", "type": "text", "prompt": "Write an opening line to formally start a business meeting as the chair.", "keywords": ["call", "order", "welcome"], "hint": "Use 'I'd like to call this meeting to order.'"},
      {"id": "bj12_text2", "type": "text", "prompt": "Write a sentence a chair could use to give the floor to a specific participant.", "keywords": ["pass", "over", "hear"], "hint": "Use 'I'll pass it over to...'"}
    ]
  },
  bj13: {
    context: "Interromper educadamente exige frases suaves como 'Sorry to interrupt…' e 'If I may add…', que permitem contribuir sem parecer rude. Essas expressões são essenciais em reuniões dinâmicas com muitos participantes.",
    acts: [
      {"id": "bj13_mc1", "type": "mc", "prompt": "Which phrase is a polite way to interrupt someone?", "options": ["Sorry to interrupt, but may I add something?", "Stop talking.", "Excuse me, shut up.", "Be quiet, it's my turn."], "answerIdx": 0, "hint": "Escolha a opção mais educada."},
      {"id": "bj13_mc2", "type": "mc", "prompt": "Which phrase is used to politely add a point during a discussion?", "options": ["If I may add, I think we should also consider the budget.", "I'm adding now, listen.", "Add point now.", "May I, add point?"], "answerIdx": 0, "hint": "Escolha a frase gramaticalmente correta e educada."},
      {"id": "bj13_mc3", "type": "mc", "prompt": "Which is a polite way to interrupt to ask a clarifying question?", "options": ["Sorry, could I just ask a quick question?", "Wait, question.", "Hold on, I have a question, obviously.", "Question time now."], "answerIdx": 0, "hint": "Escolha a opção mais suave e educada."},
      {"id": "bj13_fill1", "type": "fill", "prompt": "___ to interrupt, but may I add something?", "answer": "Sorry", "keywords": ["Sorry"], "hint": "Palavra usada para pedir desculpas educadamente antes de interromper."},
      {"id": "bj13_fill2", "type": "fill", "prompt": "If I ___ add, I think we should reconsider the budget.", "answer": "may", "keywords": ["may"], "hint": "Modal verb usado para pedir permissão educadamente."},
      {"id": "bj13_fill3", "type": "fill", "prompt": "Could I just ___ in here for a moment?", "answer": "jump", "keywords": ["jump"], "hint": "Verbo usado na expressão 'jump in' (interromper educadamente)."},
      {"id": "bj13_tf1", "type": "tf", "prompt": "'Sorry to interrupt' is a polite way to break into a conversation.", "answer": true, "hint": "Pense no propósito dessa expressão."},
      {"id": "bj13_tf2", "type": "tf", "prompt": "'If I may add' is used to politely contribute a point.", "answer": true, "hint": "Pense no significado dessa expressão."},
      {"id": "bj13_text1", "type": "text", "prompt": "Write a polite phrase you could use to interrupt a colleague during a meeting.", "keywords": ["sorry", "interrupt", "may"], "hint": "Use 'Sorry to interrupt, but...'"},
      {"id": "bj13_text2", "type": "text", "prompt": "Write a sentence using 'If I may add...' to contribute an idea during a discussion.", "keywords": ["if", "may", "add"], "hint": "Combine a expressão com uma ideia clara."}
    ]
  },
  bj14: {
    context: "Videochamadas exigem frases específicas para lidar com problemas técnicos, como 'Can you hear me?' e 'You are on mute'. Dominar esse vocabulário evita mal-entendidos durante reuniões virtuais.",
    acts: [
      {"id": "bj14_mc1", "type": "mc", "prompt": "Which phrase is used to check if others can hear you on a video call?", "options": ["Can you hear me okay?", "Are you listening to me?", "Can I hear you?", "Hear me you can?"], "answerIdx": 0, "hint": "Escolha a pergunta correta para verificar o áudio."},
      {"id": "bj14_mc2", "type": "mc", "prompt": "Which phrase would you use to tell someone their microphone is off?", "options": ["You're on mute.", "You are muting.", "Mute you are on.", "You have no sound button."], "answerIdx": 0, "hint": "Escolha a expressão correta e comum."},
      {"id": "bj14_mc3", "type": "mc", "prompt": "Which phrase indicates a poor internet connection during a call?", "options": ["You're breaking up a little.", "You are muted well.", "The call is on time.", "You have great signal."], "answerIdx": 0, "hint": "Escolha a expressão usada para conexão instável."},
      {"id": "bj14_fill1", "type": "fill", "prompt": "Can you ___ me okay?", "answer": "hear", "keywords": ["hear"], "hint": "Verbo usado para verificar se o áudio está funcionando."},
      {"id": "bj14_fill2", "type": "fill", "prompt": "I think you're on ___ — we can't hear you.", "answer": "mute", "keywords": ["mute"], "hint": "Palavra que indica que o microfone está desligado."},
      {"id": "bj14_fill3", "type": "fill", "prompt": "Sorry, you're ___ up a little; could you repeat that?", "answer": "breaking", "keywords": ["breaking"], "hint": "Verbo usado na expressão 'breaking up' (conexão instável)."},
      {"id": "bj14_tf1", "type": "tf", "prompt": "'Can you hear me?' is a common phrase used to check audio at the start of a video call.", "answer": true, "hint": "Pense no início típico de uma videochamada."},
      {"id": "bj14_tf2", "type": "tf", "prompt": "'You're on mute' is said when someone's microphone is not working or off.", "answer": true, "hint": "Pense no significado dessa expressão."},
      {"id": "bj14_text1", "type": "text", "prompt": "Write 2 phrases you could use to check if your audio is working at the start of a call.", "keywords": ["hear", "can you", "okay"], "hint": "Use 'Can you hear me?' como base."},
      {"id": "bj14_text2", "type": "text", "prompt": "Write a sentence you could use to tell someone politely that they are on mute.", "keywords": ["mute", "think", "you're"], "hint": "Use 'I think you're on mute.'"}
    ]
  },
  bj15: {
    context: "Participar de uma reunião simulada exige frases para concordar, discordar, pedir esclarecimentos e opinar. Praticar essas expressões em um roleplay ajuda a ganhar confiança para reuniões reais em inglês.",
    acts: [
      {"id": "bj15_mc1", "type": "mc", "prompt": "Which phrase is used to express agreement in a meeting?", "options": ["I completely agree with that point.", "No way, that's wrong.", "Whatever you say.", "I don't care."], "answerIdx": 0, "hint": "Escolha a expressão que indica concordância."},
      {"id": "bj15_mc2", "type": "mc", "prompt": "Which phrase is used to politely disagree in a meeting?", "options": ["I see your point, but I have a different perspective.", "You're totally wrong.", "That's a bad idea.", "No, never."], "answerIdx": 0, "hint": "Escolha a opção mais diplomática."},
      {"id": "bj15_mc3", "type": "mc", "prompt": "Which phrase is used to ask for clarification during a meeting?", "options": ["Could you clarify what you mean by that?", "What?", "I don't get it, explain.", "Say that again, now."], "answerIdx": 0, "hint": "Escolha a pergunta mais educada."},
      {"id": "bj15_fill1", "type": "fill", "prompt": "I completely ___ with that point.", "answer": "agree", "keywords": ["agree"], "hint": "Verbo que indica concordância total."},
      {"id": "bj15_fill2", "type": "fill", "prompt": "I see your point, but I have a ___ perspective.", "answer": "different", "keywords": ["different"], "hint": "Adjetivo que indica um ponto de vista diferente."},
      {"id": "bj15_fill3", "type": "fill", "prompt": "Could you ___ what you mean by that?", "answer": "clarify", "keywords": ["clarify"], "hint": "Verbo que significa esclarecer algo."},
      {"id": "bj15_tf1", "type": "tf", "prompt": "'I completely agree with that point' expresses full agreement.", "answer": true, "hint": "Pense no significado dessa expressão."},
      {"id": "bj15_tf2", "type": "tf", "prompt": "'I see your point, but...' is used to disagree politely.", "answer": true, "hint": "Pense em como essa estrutura suaviza uma discordância."},
      {"id": "bj15_text1", "type": "text", "prompt": "Write a sentence expressing agreement with a colleague's idea during a meeting.", "keywords": ["agree", "good point"], "hint": "Use 'I completely agree because...'"},
      {"id": "bj15_text2", "type": "text", "prompt": "Write a sentence politely disagreeing with a proposal made in a meeting.", "keywords": ["see your point", "however", "different"], "hint": "Use 'I see your point, however...'"}
    ]
  },
  bj16: {
    context: "Uma abertura forte captura a atenção do público desde o início. Frases como 'Today I'm going to talk about…' e 'By the end of this presentation, you will…' ajudam a apresentar o tema e o objetivo com clareza e confiança.",
    acts: [
      {"id": "bj16_mc1", "type": "mc", "prompt": "Which is an effective way to open a business presentation?", "options": ["Today, I'm going to talk about our new marketing strategy.", "Um, so, yeah, let's start I guess.", "I don't really know where to begin.", "Let's just get this over with."], "answerIdx": 0, "hint": "Escolha a abertura mais clara e confiante."},
      {"id": "bj16_mc2", "type": "mc", "prompt": "Which phrase states the presentation's objective?", "options": ["By the end of this presentation, you will understand our new pricing model.", "I hope you understand something by the end.", "Maybe you'll learn stuff.", "This presentation might be about something."], "answerIdx": 0, "hint": "Escolha a frase que define claramente o objetivo."},
      {"id": "bj16_mc3", "type": "mc", "prompt": "Which greeting typically opens a formal presentation?", "options": ["Good morning, everyone. Thank you for being here today.", "Hey guys, what's up.", "Yo, let's do this.", "Sup everybody."], "answerIdx": 0, "hint": "Escolha a saudação mais formal."},
      {"id": "bj16_fill1", "type": "fill", "prompt": "Today, I'm going ___ talk about our new marketing strategy.", "answer": "to", "keywords": ["to"], "hint": "Preposição usada após 'going' para indicar futuro próximo."},
      {"id": "bj16_fill2", "type": "fill", "prompt": "By the ___ of this presentation, you will understand our pricing model.", "answer": "end", "keywords": ["end"], "hint": "Palavra que indica o término da apresentação."},
      {"id": "bj16_fill3", "type": "fill", "prompt": "Good morning, ___. Thank you for being here today.", "answer": "everyone", "keywords": ["everyone"], "hint": "Palavra usada para se dirigir a todo o público."},
      {"id": "bj16_tf1", "type": "tf", "prompt": "'Today I'm going to talk about...' is a common way to introduce the topic of a presentation.", "answer": true, "hint": "Pense no uso comum dessa expressão."},
      {"id": "bj16_tf2", "type": "tf", "prompt": "Stating the purpose of a presentation at the beginning helps the audience know what to expect.", "answer": true, "hint": "Pense na importância de definir objetivos claros."},
      {"id": "bj16_text1", "type": "text", "prompt": "Write an opening line for a presentation about a new product launch.", "keywords": ["today", "talk about", "introduce"], "hint": "Use 'Today, I'm going to talk about...'"},
      {"id": "bj16_text2", "type": "text", "prompt": "Write a sentence stating the purpose of a presentation on cost reduction.", "keywords": ["purpose", "presentation", "introduce"], "hint": "Use 'The purpose of this presentation is...'"}
    ]
  },
  bj17: {
    context: "A linguagem de sinalização (signposting) ajuda o público a acompanhar a estrutura da apresentação. Expressões como 'First…', 'Moving on…' e 'To summarize…' indicam claramente a transição entre os pontos discutidos.",
    acts: [
      {"id": "bj17_mc1", "type": "mc", "prompt": "Which phrase signals the first point in a presentation?", "options": ["First, let's look at our current market position.", "So, whatever, first thing.", "Firstly point one, go.", "One, first, market."], "answerIdx": 0, "hint": "Escolha a opção gramaticalmente correta."},
      {"id": "bj17_mc2", "type": "mc", "prompt": "Which phrase signals moving to a new topic in a presentation?", "options": ["Moving on to our next point...", "Move, next.", "Now moving, whatever.", "Next moving on now."], "answerIdx": 0, "hint": "Escolha a transição correta e natural."},
      {"id": "bj17_mc3", "type": "mc", "prompt": "Which phrase is used to summarize at the end of a presentation?", "options": ["To summarize, we've covered three key strategies today.", "So basically, summary, whatever.", "Summary is, we talked, things.", "To sum, things were said."], "answerIdx": 0, "hint": "Escolha a frase gramaticalmente correta."},
      {"id": "bj17_fill1", "type": "fill", "prompt": "___, let's look at our current market position.", "answer": "First", "keywords": ["First"], "hint": "Palavra usada para introduzir o primeiro ponto."},
      {"id": "bj17_fill2", "type": "fill", "prompt": "Moving ___ to our next point, let's discuss the budget.", "answer": "on", "keywords": ["on"], "hint": "Palavra usada na expressão 'moving on'."},
      {"id": "bj17_fill3", "type": "fill", "prompt": "To ___, we've covered three key strategies today.", "answer": "summarize", "keywords": ["summarize"], "hint": "Verbo que significa resumir."},
      {"id": "bj17_tf1", "type": "tf", "prompt": "'First' is commonly used to introduce the initial point in a presentation.", "answer": true, "hint": "Pense no uso comum dessa palavra."},
      {"id": "bj17_tf2", "type": "tf", "prompt": "'Moving on to...' signals a transition to a new topic.", "answer": true, "hint": "Pense no significado dessa expressão."},
      {"id": "bj17_text1", "type": "text", "prompt": "Write a sentence using 'First' to introduce the opening point of a presentation.", "keywords": ["first", "point"], "hint": "Use 'First, let's look at...'"},
      {"id": "bj17_text2", "type": "text", "prompt": "Write a transition sentence using 'Moving on to...' between two topics.", "keywords": ["moving on", "next"], "hint": "Use 'Moving on to our next point...'"}
    ]
  },
  bj18: {
    context: "Descrever gráficos e tabelas exige vocabulário específico para indicar tendências, como 'rise' (subida), 'fall' (queda), 'peak' (pico) e 'steady' (estável). Esse vocabulário é essencial em relatórios e apresentações com dados.",
    acts: [
      {"id": "bj18_mc1", "type": "mc", "prompt": "Which word describes an increase in a chart?", "options": ["rise", "fall", "dip", "plunge"], "answerIdx": 0, "hint": "Pense na palavra que indica subida."},
      {"id": "bj18_mc2", "type": "mc", "prompt": "Which word describes a decrease in a chart?", "options": ["fall", "rise", "climb", "surge"], "answerIdx": 0, "hint": "Pense na palavra que indica queda."},
      {"id": "bj18_mc3", "type": "mc", "prompt": "Which word describes the highest point on a chart?", "options": ["peak", "trough", "base", "bottom"], "answerIdx": 0, "hint": "Pense no ponto mais alto de um gráfico."},
      {"id": "bj18_fill1", "type": "fill", "prompt": "Sales ___ sharply in the last quarter, reaching a new high.", "answer": "rose", "keywords": ["rose"], "hint": "Passado do verbo 'rise'."},
      {"id": "bj18_fill2", "type": "fill", "prompt": "Profits ___ significantly after the product recall.", "answer": "fell", "keywords": ["fell"], "hint": "Passado do verbo 'fall'."},
      {"id": "bj18_fill3", "type": "fill", "prompt": "The chart shows a ___ in July, the highest point of the year.", "answer": "peak", "keywords": ["peak"], "hint": "Palavra que indica o ponto mais alto do gráfico."},
      {"id": "bj18_tf1", "type": "tf", "prompt": "'Rise' describes an increase in a chart or graph.", "answer": true, "hint": "Pense no significado dessa palavra."},
      {"id": "bj18_tf2", "type": "tf", "prompt": "'Fall' describes an increase in value or numbers.", "answer": false, "hint": "'Fall' indica queda, não aumento."},
      {"id": "bj18_text1", "type": "text", "prompt": "Describe a chart showing sales rising steadily over 6 months.", "keywords": ["rose", "increased", "steadily"], "hint": "Use verbos como 'rose' ou 'increased'."},
      {"id": "bj18_text2", "type": "text", "prompt": "Describe a chart showing a sharp fall in revenue followed by recovery.", "keywords": ["fell", "sharply", "recovered"], "hint": "Descreva a queda e depois a recuperação."}
    ]
  },
  bj19: {
    context: "Responder perguntas com diplomacia durante uma apresentação demonstra profissionalismo, mesmo diante de questões difíceis. Frases como 'That's a great question' e 'I understand your concern' ajudam a manter a calma e o respeito na resposta.",
    acts: [
      {"id": "bj19_mc1", "type": "mc", "prompt": "Which is a diplomatic way to respond to a difficult question during a presentation?", "options": ["That's a great question. Let me address that.", "I don't want to answer that.", "Next question, please.", "That's not important."], "answerIdx": 0, "hint": "Escolha a resposta mais educada e profissional."},
      {"id": "bj19_mc2", "type": "mc", "prompt": "Which phrase is appropriate if you don't know the answer to a question?", "options": ["That's a great question — let me find out and get back to you.", "I have no idea, sorry.", "I don't know, next.", "No comment."], "answerIdx": 0, "hint": "Escolha a resposta mais profissional mesmo sem saber a resposta."},
      {"id": "bj19_mc3", "type": "mc", "prompt": "Which is a diplomatic way to handle a challenging or critical question?", "options": ["I understand your concern, and here's how we're addressing it.", "You're wrong about that.", "That's not my problem.", "I don't agree with you at all."], "answerIdx": 0, "hint": "Escolha a resposta mais respeitosa e construtiva."},
      {"id": "bj19_fill1", "type": "fill", "prompt": "That's a great ___. Let me address that.", "answer": "question", "keywords": ["question"], "hint": "Palavra que se refere à pergunta feita."},
      {"id": "bj19_fill2", "type": "fill", "prompt": "That's a great question — let me find ___ and get back to you.", "answer": "out", "keywords": ["out"], "hint": "Palavra usada na expressão 'find out' (descobrir)."},
      {"id": "bj19_fill3", "type": "fill", "prompt": "I ___ your concern, and here's how we're addressing it.", "answer": "understand", "keywords": ["understand"], "hint": "Verbo que significa 'compreender'."},
      {"id": "bj19_tf1", "type": "tf", "prompt": "'That's a great question. Let me address that.' is a diplomatic way to respond during a Q&A.", "answer": true, "hint": "Pense no tom dessa resposta."},
      {"id": "bj19_tf2", "type": "tf", "prompt": "Saying 'I have no idea, sorry' is the most professional way to respond when you don't know an answer.", "answer": false, "hint": "Existe uma forma mais profissional de admitir que não sabe a resposta."},
      {"id": "bj19_text1", "type": "text", "prompt": "Write a diplomatic response to a challenging question about your company's pricing.", "keywords": ["understand", "question", "address"], "hint": "Reconheça a pergunta antes de responder."},
      {"id": "bj19_text2", "type": "text", "prompt": "Write a response for when you don't know the answer to a question during a presentation.", "keywords": ["great question", "find out", "back to you"], "hint": "Use 'Let me find out and get back to you.'"}
    ]
  },
  bj20: {
    context: "Uma apresentação curta de 3 minutos exige uma estrutura clara: introdução, 2-3 pontos principais e conclusão, além de boas práticas de entrega, como manter contato visual e praticar antes de apresentar. É a atividade final que reúne tudo o que foi aprendido nesta semana.",
    acts: [
      {"id": "bj20_mc1", "type": "mc", "prompt": "Which structure best fits a short 3-minute presentation?", "options": ["Introduction, 2-3 main points, conclusion", "Only a conclusion", "Ten different topics with no order", "Random facts with no structure"], "answerIdx": 0, "hint": "Escolha a estrutura mais organizada e apropriada."},
      {"id": "bj20_mc2", "type": "mc", "prompt": "Which sentence would be appropriate to close a 3-minute presentation?", "options": ["In conclusion, these three strategies can help us grow our market share.", "So yeah, that's it I guess.", "Done talking now.", "The end, whatever."], "answerIdx": 0, "hint": "Escolha o encerramento mais profissional."},
      {"id": "bj20_mc3", "type": "mc", "prompt": "Which is a useful tip for keeping a short presentation within time?", "options": ["Practice beforehand and focus on your key points only.", "Talk as fast as possible.", "Add extra unrelated topics.", "Ignore the time limit."], "answerIdx": 0, "hint": "Pense em boas práticas de preparação."},
      {"id": "bj20_fill1", "type": "fill", "prompt": "Today, I'd like to ___ my thoughts on remote work productivity.", "answer": "share", "keywords": ["share"], "hint": "Verbo usado para introduzir o tema da apresentação."},
      {"id": "bj20_fill2", "type": "fill", "prompt": "Now, let's ___ to my second point.", "answer": "move", "keywords": ["move"], "hint": "Verbo usado para fazer a transição entre pontos."},
      {"id": "bj20_fill3", "type": "fill", "prompt": "In ___, these three strategies can help us grow our market share.", "answer": "conclusion", "keywords": ["conclusion"], "hint": "Palavra usada para introduzir o fechamento da apresentação."},
      {"id": "bj20_tf1", "type": "tf", "prompt": "A short 3-minute presentation should still have an introduction, body, and conclusion.", "answer": true, "hint": "Pense na importância da estrutura mesmo em apresentações curtas."},
      {"id": "bj20_tf2", "type": "tf", "prompt": "Reading directly from notes without pausing is an effective delivery technique.", "answer": false, "hint": "Ler diretamente das anotações prejudica o contato com o público."},
      {"id": "bj20_text1", "type": "text", "prompt": "Write an opening hook for a 3-minute presentation on any topic of your choice.", "keywords": ["today", "talk about", "share"], "hint": "Comece com uma frase que desperte o interesse do público."},
      {"id": "bj20_text2", "type": "text", "prompt": "Write 2 main points you would include in a short presentation about time management.", "keywords": ["first", "second", "point"], "hint": "Organize os pontos com palavras como 'first' e 'second'."}
    ]
  },
  bj21: {
    context: "Vocabulário de negociação é essencial para propor, rejeitar e ajustar termos em contextos empresariais. Palavras como 'proposal', 'counter-offer', 'compromise', 'concession', 'leverage' e 'bottom line' aparecem constantemente em negociações profissionais.",
    acts: [
      {"id": "bj21_mc1", "type": "mc", "prompt": "What is a 'counter-offer' in a business negotiation?", "options": ["The first offer made by a seller", "A new offer made in response to a proposal that was not accepted", "A final decision that cannot be changed", "A written contract"], "answerIdx": 1, "hint": "É a resposta dada quando você não aceita a proposta original."},
      {"id": "bj21_mc2", "type": "mc", "prompt": "In the sentence 'We're willing to make a few concessions if you can guarantee a two-year contract,' what does 'concessions' mean?", "options": ["Complaints", "Things you give up to reach an agreement", "Final prices", "Legal documents"], "answerIdx": 1, "hint": "Concessions são coisas que você cede para fechar um acordo."},
      {"id": "bj21_mc3", "type": "mc", "prompt": "What does 'bottom line' mean in a negotiation context?", "options": ["The first line of a contract", "The minimum acceptable result you will accept", "The final signature", "The total number of items"], "answerIdx": 1, "hint": "É o limite mínimo que você aceita antes de desistir."},
      {"id": "bj21_fill1", "type": "fill", "prompt": "Our supplier rejected our first offer, so we sent a ___ with better payment terms.", "answer": "counter-offer", "keywords": ["counter-offer", "counteroffer"], "hint": "É a nova oferta enviada em resposta à rejeição."},
      {"id": "bj21_fill2", "type": "fill", "prompt": "After hours of discussion, both teams reached a ___ that satisfied everyone.", "answer": "compromise", "keywords": ["compromise", "agreement"], "hint": "Um meio-termo em que ambos cedem um pouco."},
      {"id": "bj21_fill3", "type": "fill", "prompt": "We're prepared to make a small ___ on the delivery date if you can lower the price.", "answer": "concession", "keywords": ["concession"], "hint": "Algo que você cede para avançar na negociação."},
      {"id": "bj21_tf1", "type": "tf", "prompt": "A 'counter-offer' is the same as accepting the original offer.", "answer": false, "hint": "Um counter-offer é uma nova oferta, não uma aceitação."},
      {"id": "bj21_tf2", "type": "tf", "prompt": "'Common ground' refers to points that both sides already agree on.", "answer": true, "hint": "É aquilo que já é compartilhado pelas partes."},
      {"id": "bj21_text1", "type": "text", "prompt": "Write a short paragraph explaining what a 'counter-offer' is and give an example situation where you would make one.", "keywords": ["counter-offer", "reject", "alternative", "respond"], "hint": "Explique quando e por que se faz uma contraproposta."},
      {"id": "bj21_text2", "type": "text", "prompt": "Describe a negotiation scenario (real or imagined) where both sides reached a win-win compromise. Use at least 3 negotiation vocabulary words.", "keywords": ["compromise", "win-win", "concession", "agreement"], "hint": "Use o vocabulário de negociação estudado nesta lição."}
    ]
  },
  bj22: {
    context: "Fazer propostas de forma clara e educada é uma habilidade central em reuniões de negócios. Expressões como 'We'd like to suggest...', 'Our proposal is...', 'What if we...' e 'We recommend...' ajudam a apresentar ideias de forma profissional e diplomática.",
    acts: [
      {"id": "bj22_mc1", "type": "mc", "prompt": "Which is the most professional way to open a proposal in a business meeting?", "options": ["Here's what I think, whatever.", "We'd like to suggest a new approach to the marketing campaign.", "Do this now.", "I don't know, maybe this?"], "answerIdx": 1, "hint": "Uma proposta profissional começa com uma frase clara de sugestão."},
      {"id": "bj22_mc2", "type": "mc", "prompt": "Which sentence correctly uses 'propose' to introduce an idea?", "options": ["I propose we hire two more marketing hire.", "I propose that we hire two additional team members.", "I propose hire more people.", "I am proposing about hiring."], "answerIdx": 1, "hint": "'Propose that' é seguido de uma oração completa (sujeito + verbo)."},
      {"id": "bj22_mc3", "type": "mc", "prompt": "Which phrase softly suggests an idea rather than stating it as a demand?", "options": ["You must do this.", "What if we tried a different supplier?", "Do it my way.", "This is final."], "answerIdx": 1, "hint": "'What if we...' suaviza a sugestão, tornando-a uma pergunta."},
      {"id": "bj22_fill1", "type": "fill", "prompt": "We'd like to ___ a new approach to handling customer complaints.", "answer": "suggest", "keywords": ["suggest", "propose"], "hint": "Verbo usado após 'would like to'."},
      {"id": "bj22_fill2", "type": "fill", "prompt": "Our ___ is to launch the product in two phases instead of one.", "answer": "proposal", "keywords": ["proposal", "suggestion"], "hint": "Substantivo que significa 'proposta'."},
      {"id": "bj22_fill3", "type": "fill", "prompt": "What ___ we extended the trial period by another month?", "answer": "if", "keywords": ["if"], "hint": "Completa a expressão 'What if we...'"},
      {"id": "bj22_tf1", "type": "tf", "prompt": "'We'd like to suggest' is a polite way to introduce an idea.", "answer": true, "hint": "É uma forma educada de apresentar uma sugestão."},
      {"id": "bj22_tf2", "type": "tf", "prompt": "'I propose we hires more staff' is grammatically correct.", "answer": false, "hint": "Depois de 'we' o verbo não recebe 's'."},
      {"id": "bj22_text1", "type": "text", "prompt": "Write a short proposal (3-4 sentences) suggesting a new employee benefit for your company.", "keywords": ["propose", "suggest", "benefit", "would"], "hint": "Use frases como 'We'd like to suggest...' ou 'Our proposal is...'"},
      {"id": "bj22_text2", "type": "text", "prompt": "You want to suggest moving a weekly meeting to a different day. Write what you would say using at least two proposal phrases.", "keywords": ["suggest", "would like", "move", "meeting"], "hint": "Combine duas expressões de proposta diferentes."}
    ]
  },
  bj23: {
    context: "Linguagem persuasiva usa evidências e dados para fortalecer um argumento. Expressões como 'The main advantage is...', 'Evidence shows...', 'Research indicates...' e 'This demonstrates...' tornam apresentações e propostas mais convincentes.",
    acts: [
      {"id": "bj23_mc1", "type": "mc", "prompt": "Which phrase introduces evidence to support an argument?", "options": ["I guess maybe...", "Evidence shows that customer satisfaction increased by 20%.", "Whatever, who knows.", "It's just an opinion."], "answerIdx": 1, "hint": "'Evidence shows' apresenta dados concretos."},
      {"id": "bj23_mc2", "type": "mc", "prompt": "Which sentence best highlights a benefit persuasively?", "options": ["It's okay I suppose.", "The main advantage of this system is that it reduces processing time by half.", "It does something.", "Not sure what it does."], "answerIdx": 1, "hint": "Destaque o benefício principal de forma específica."},
      {"id": "bj23_mc3", "type": "mc", "prompt": "Choose the sentence that uses data to persuade.", "options": ["I feel like it's good.", "The data supports our decision to expand into the Asian market.", "People might like it.", "It could be fine."], "answerIdx": 1, "hint": "Use dados concretos para embasar a decisão."},
      {"id": "bj23_fill1", "type": "fill", "prompt": "The main ___ of this software is that it saves employees over five hours per week.", "answer": "advantage", "keywords": ["advantage", "benefit"], "hint": "Palavra usada para destacar o principal ponto positivo."},
      {"id": "bj23_fill2", "type": "fill", "prompt": "Evidence ___ that customers prefer the new packaging design.", "answer": "shows", "keywords": ["shows", "suggests", "indicates"], "hint": "Verbo que liga evidência a uma conclusão."},
      {"id": "bj23_fill3", "type": "fill", "prompt": "Research ___ that flexible schedules improve employee retention.", "answer": "indicates", "keywords": ["indicates", "shows", "suggests"], "hint": "Verbo que introduz um resultado de pesquisa."},
      {"id": "bj23_tf1", "type": "tf", "prompt": "'Evidence shows' is a phrase used to support an argument with facts or data.", "answer": true, "hint": "Introduz dados concretos que sustentam um ponto."},
      {"id": "bj23_tf2", "type": "tf", "prompt": "Persuasive language should avoid using data or statistics.", "answer": false, "hint": "Dados e estatísticas tornam o argumento mais forte."},
      {"id": "bj23_text1", "type": "text", "prompt": "Write a persuasive sentence about the main advantage of working remotely, using the phrase 'The main advantage is...'", "keywords": ["advantage", "remote", "because", "benefit"], "hint": "Destaque um benefício específico do trabalho remoto."},
      {"id": "bj23_text2", "type": "text", "prompt": "Write 2-3 sentences using 'Evidence shows' to persuade your manager to approve a new software purchase.", "keywords": ["evidence", "shows", "approve", "because"], "hint": "Apresente um dado que apoie sua solicitação."}
    ]
  },
  bj24: {
    context: "Chegar a um acordo requer frases que sinalizem aceitação clara dos termos negociados. Expressões como 'That sounds fair', 'We can work with that', 'Deal' e 'I think we have a deal' são usadas para confirmar que ambas as partes concordam.",
    acts: [
      {"id": "bj24_mc1", "type": "mc", "prompt": "Which phrase signals that you accept the terms of a negotiation?", "options": ["That's out of the question.", "That sounds fair — we can work with that.", "Absolutely not.", "We need to think forever."], "answerIdx": 1, "hint": "Essa expressão indica aceitação dos termos propostos."},
      {"id": "bj24_mc2", "type": "mc", "prompt": "What does 'We're on the same page' mean?", "options": ["We are reading the same document", "We agree and understand each other", "We disagree completely", "We need more paper"], "answerIdx": 1, "hint": "Significa que ambos concordam e entendem a mesma coisa."},
      {"id": "bj24_mc3", "type": "mc", "prompt": "Which phrase is used to confirm a final agreement?", "options": ["I think we have a deal.", "Maybe never.", "I refuse everything.", "Let's cancel this."], "answerIdx": 0, "hint": "Confirma que um acordo final foi alcançado."},
      {"id": "bj24_fill1", "type": "fill", "prompt": "That sounds ___ — I think we can move forward with these terms.", "answer": "fair", "keywords": ["fair", "reasonable"], "hint": "Adjetivo que significa 'justo'."},
      {"id": "bj24_fill2", "type": "fill", "prompt": "We can ___ with that price if you include free shipping.", "answer": "work", "keywords": ["work"], "hint": "Completa a expressão 'work with that'."},
      {"id": "bj24_fill3", "type": "fill", "prompt": "After the final revision, I think we have a ___.", "answer": "deal", "keywords": ["deal", "agreement"], "hint": "Palavra que significa 'acordo'."},
      {"id": "bj24_tf1", "type": "tf", "prompt": "'That sounds fair' is a way to indicate agreement with a proposed term.", "answer": true, "hint": "Indica que o termo proposto parece razoável."},
      {"id": "bj24_tf2", "type": "tf", "prompt": "'We can work with that' means the offer is completely unacceptable.", "answer": false, "hint": "Na verdade, indica disposição para aceitar."},
      {"id": "bj24_text1", "type": "text", "prompt": "Write a short dialogue where two negotiators reach a final agreement, using at least three agreement phrases.", "keywords": ["deal", "fair", "agreed", "work with"], "hint": "Use pelo menos três expressões de acordo diferentes."},
      {"id": "bj24_text2", "type": "text", "prompt": "A supplier offers you a 5% discount for a 12-month contract. Write your response accepting the offer.", "keywords": ["accept", "fair", "deal", "terms"], "hint": "Aceite formalmente os termos oferecidos."}
    ]
  },
  bj25: {
    context: "Uma proposta de negócios persuasiva e concisa apresenta o propósito, os benefícios e um chamado à ação em poucas palavras. Frases como 'We are writing to propose...', 'This would allow you to...' e 'We look forward to discussing this further' são fundamentais.",
    acts: [
      {"id": "bj25_mc1", "type": "mc", "prompt": "What should the opening of a business proposal typically include?", "options": ["A joke", "A brief statement of purpose and what you are proposing", "Irrelevant personal details", "A list of complaints"], "answerIdx": 1, "hint": "O início deve declarar claramente o propósito da proposta."},
      {"id": "bj25_mc2", "type": "mc", "prompt": "Which sentence is an appropriate proposal introduction?", "options": ["We are writing to propose a partnership between our companies.", "Hey, what's up, we have an idea.", "Read this if you want.", "This is just some info."], "answerIdx": 0, "hint": "Uma abertura formal apresenta o objetivo diretamente."},
      {"id": "bj25_mc3", "type": "mc", "prompt": "A strong business proposal should always include...", "options": ["Vague promises with no details", "Clear benefits and supporting evidence for the reader", "Only technical jargon", "Irrelevant statistics"], "answerIdx": 1, "hint": "Benefícios claros e evidências tornam a proposta convincente."},
      {"id": "bj25_fill1", "type": "fill", "prompt": "We are writing to ___ a new partnership opportunity between our companies.", "answer": "propose", "keywords": ["propose", "suggest"], "hint": "Verbo que introduz o propósito da carta."},
      {"id": "bj25_fill2", "type": "fill", "prompt": "This proposal ___ to address the delays currently affecting your supply chain.", "answer": "aims", "keywords": ["aims", "seeks"], "hint": "Verbo que significa 'tem como objetivo'."},
      {"id": "bj25_fill3", "type": "fill", "prompt": "By adopting our solution, your company could ___ costs by up to 20%.", "answer": "reduce", "keywords": ["reduce", "cut", "lower"], "hint": "Verbo que significa 'diminuir'."},
      {"id": "bj25_tf1", "type": "tf", "prompt": "A business proposal should clearly state its purpose in the opening sentence.", "answer": true, "hint": "O propósito deve ficar claro logo no início."},
      {"id": "bj25_tf2", "type": "tf", "prompt": "A good proposal ignores the reader's needs and only talks about the writer's company.", "answer": false, "hint": "Um bom proposta foca também nas necessidades do leitor."},
      {"id": "bj25_text1", "type": "text", "prompt": "Write a 100-word proposal suggesting your company partner with a local university for internships.", "keywords": ["propose", "partnership", "benefit", "university"], "hint": "Inclua propósito, benefício e um chamado à ação."},
      {"id": "bj25_text2", "type": "text", "prompt": "Write a short business proposal recommending your company switch to a new cloud storage provider.", "keywords": ["propose", "benefit", "cost", "recommend"], "hint": "Justifique com benefícios claros, como custo ou segurança."}
    ]
  },
  bj26: {
    context: "Relatórios de negócios seguem uma estrutura padrão: resumo executivo (summary), descobertas (findings) e recomendações (recommendations). Frases como 'The findings indicate...', 'Based on these results, we recommend...' organizam a informação com clareza.",
    acts: [
      {"id": "bj26_mc1", "type": "mc", "prompt": "Which section of a report typically comes first and gives a brief overview?", "options": ["Recommendations", "Executive summary", "Appendix", "References"], "answerIdx": 1, "hint": "O resumo executivo vem primeiro e resume o relatório inteiro."},
      {"id": "bj26_mc2", "type": "mc", "prompt": "The 'findings' section of a report usually presents...", "options": ["Personal opinions only", "The results or data discovered during research or analysis", "Random unrelated facts", "Only future predictions"], "answerIdx": 1, "hint": "Apresenta os resultados encontrados na pesquisa."},
      {"id": "bj26_mc3", "type": "mc", "prompt": "Which sentence is typical of a 'recommendations' section?", "options": ["We recommend increasing the marketing budget by 15% next quarter.", "Once upon a time...", "Maybe we'll think about it.", "Nothing needs to change ever."], "answerIdx": 0, "hint": "Recomendações são específicas e acionáveis."},
      {"id": "bj26_fill1", "type": "fill", "prompt": "The report begins with an executive ___ that outlines the main points.", "answer": "summary", "keywords": ["summary", "overview"], "hint": "Palavra que significa 'resumo'."},
      {"id": "bj26_fill2", "type": "fill", "prompt": "Our ___ show that customer satisfaction improved by 18% this quarter.", "answer": "findings", "keywords": ["findings", "results"], "hint": "Palavra que significa 'descobertas' ou 'resultados'."},
      {"id": "bj26_fill3", "type": "fill", "prompt": "Based on these results, we ___ increasing the customer support team by two members.", "answer": "recommend", "keywords": ["recommend", "suggest"], "hint": "Verbo usado para introduzir uma recomendação."},
      {"id": "bj26_tf1", "type": "tf", "prompt": "An executive summary should be the shortest part of a report but cover the key points.", "answer": true, "hint": "É curto mas cobre os pontos essenciais."},
      {"id": "bj26_tf2", "type": "tf", "prompt": "The 'findings' section presents personal opinions instead of data.", "answer": false, "hint": "Apresenta dados, não opiniões pessoais."},
      {"id": "bj26_text1", "type": "text", "prompt": "Write a short executive summary (3 sentences) for a report about declining customer satisfaction.", "keywords": ["summary", "findings", "overview", "report"], "hint": "Resuma o problema principal e o que o relatório aborda."},
      {"id": "bj26_text2", "type": "text", "prompt": "Write two findings statements based on this data: sales up 10%, customer complaints down 5%.", "keywords": ["findings", "increased", "decreased", "data"], "hint": "Apresente os dois dados de forma objetiva."}
    ]
  },
  bj27: {
    context: "Expressar tendências com dados é essencial em relatórios e apresentações. Expressões como 'increased by', 'dropped to', 'remained stable', 'peaked at' e 'fluctuated' descrevem como números mudam ao longo do tempo.",
    acts: [
      {"id": "bj27_mc1", "type": "mc", "prompt": "Which phrase describes a number going up?", "options": ["dropped to", "increased by", "remained stable", "fell by"], "answerIdx": 1, "hint": "Indica um aumento em relação ao valor anterior."},
      {"id": "bj27_mc2", "type": "mc", "prompt": "'Sales remained stable in Q3' means...", "options": ["Sales increased a lot", "Sales stayed roughly the same", "Sales fell drastically", "Sales became unpredictable"], "answerIdx": 1, "hint": "'Remained stable' significa que o valor não mudou muito."},
      {"id": "bj27_mc3", "type": "mc", "prompt": "Which sentence correctly describes a sharp decrease?", "options": ["Profits plummeted from $2M to $500K.", "Profits increased dramatically.", "Profits remained the same.", "Profits doubled overnight."], "answerIdx": 0, "hint": "'Plummeted' descreve uma queda brusca e acentuada."},
      {"id": "bj27_fill1", "type": "fill", "prompt": "Revenue ___ by 25% compared to last year.", "answer": "increased", "keywords": ["increased", "grew", "rose"], "hint": "Verbo que indica aumento."},
      {"id": "bj27_fill2", "type": "fill", "prompt": "The stock price ___ to $42 after the announcement.", "answer": "dropped", "keywords": ["dropped", "fell"], "hint": "Verbo que indica queda para um valor específico."},
      {"id": "bj27_fill3", "type": "fill", "prompt": "Employee satisfaction has ___ stable over the past three quarters.", "answer": "remained", "keywords": ["remained", "stayed"], "hint": "Verbo que completa 'remained stable'."},
      {"id": "bj27_tf1", "type": "tf", "prompt": "'Increased by 10%' means a value went up by that percentage.", "answer": true, "hint": "Indica o quanto o valor subiu."},
      {"id": "bj27_tf2", "type": "tf", "prompt": "'Remained stable' describes a value that changed dramatically.", "answer": false, "hint": "Na verdade descreve um valor que mudou pouco."},
      {"id": "bj27_text1", "type": "text", "prompt": "Describe a chart (real or imagined) showing quarterly sales using at least 3 trend expressions.", "keywords": ["increased", "peaked", "remained", "by"], "hint": "Use pelo menos três expressões de tendência diferentes."},
      {"id": "bj27_text2", "type": "text", "prompt": "Write 2-3 sentences describing how your company's revenue changed over the last year, using trend vocabulary.", "keywords": ["increased", "grew", "dropped", "by"], "hint": "Descreva a mudança usando verbos de tendência."}
    ]
  },
  bj28: {
    context: "Conectores de causa e efeito como 'as a result', 'this led to', 'due to' e 'because of' explicam por que algo aconteceu e quais foram suas consequências — essenciais para relatórios e análises de negócios.",
    acts: [
      {"id": "bj28_mc1", "type": "mc", "prompt": "Which connector correctly introduces a cause?", "options": ["As a result", "Due to", "Therefore", "Consequently"], "answerIdx": 1, "hint": "'Due to' é seguido de uma causa (substantivo)."},
      {"id": "bj28_mc2", "type": "mc", "prompt": "'Sales dropped due to poor weather.' — what does 'due to' introduce here?", "options": ["A result", "A cause", "A question", "An opinion"], "answerIdx": 1, "hint": "Introduz a causa da queda nas vendas."},
      {"id": "bj28_mc3", "type": "mc", "prompt": "Which sentence is grammatically correct?", "options": ["Due to the strike, deliveries were delayed.", "Due to the strike delayed deliveries.", "The strike due to delayed deliveries.", "Delayed due deliveries to the strike."], "answerIdx": 0, "hint": "'Due to' é seguido de um substantivo, depois vem a oração principal."},
      {"id": "bj28_fill1", "type": "fill", "prompt": "___ the new regulations, all employees must complete safety training.", "answer": "Due to", "keywords": ["Due to", "Because of"], "hint": "Expressão seguida de substantivo que introduz a causa."},
      {"id": "bj28_fill2", "type": "fill", "prompt": "The factory experienced delays. ___, the shipment arrived two weeks late.", "answer": "As a result", "keywords": ["As a result", "Consequently"], "hint": "Introduz a consequência da frase anterior."},
      {"id": "bj28_fill3", "type": "fill", "prompt": "Poor customer service ___ a significant loss of clients.", "answer": "led to", "keywords": ["led to", "resulted in", "caused"], "hint": "Expressão verbal que liga causa a efeito."},
      {"id": "bj28_tf1", "type": "tf", "prompt": "'Due to' is typically followed by a noun phrase, not a full clause.", "answer": true, "hint": "É seguido de substantivo, não de oração completa."},
      {"id": "bj28_tf2", "type": "tf", "prompt": "'Because' can be followed by a full clause (subject + verb).", "answer": true, "hint": "'Because' é seguido de sujeito + verbo."},
      {"id": "bj28_text1", "type": "text", "prompt": "Write 2 sentences explaining a business problem and its effect, using 'as a result.'", "keywords": ["as a result", "because", "cause", "effect"], "hint": "Ligue claramente a causa ao efeito."},
      {"id": "bj28_text2", "type": "text", "prompt": "Explain why a company's sales might have dropped, using 'due to.'", "keywords": ["due to", "dropped", "sales", "because"], "hint": "Use 'due to' seguido de um substantivo."}
    ]
  },
  bj29: {
    context: "A voz passiva (was launched, were analyzed) é comum em relatórios formais, pois coloca o foco na ação e no resultado, não em quem a executou. É formada com o verbo 'to be' + particípio passado.",
    acts: [
      {"id": "bj29_mc1", "type": "mc", "prompt": "Which sentence is in the passive voice?", "options": ["The team launched the product.", "The product was launched by the team.", "The team is launching the product.", "The team will launch the product."], "answerIdx": 1, "hint": "O sujeito ('the product') recebe a ação."},
      {"id": "bj29_mc2", "type": "mc", "prompt": "Passive voice is often preferred in formal reports because it...", "options": ["Focuses on the action rather than who performed it", "Is always shorter", "Is more casual", "Uses more contractions"], "answerIdx": 0, "hint": "Foca no resultado, não em quem executou a ação."},
      {"id": "bj29_mc3", "type": "mc", "prompt": "Which is the correct passive form of 'The company collected the data'?", "options": ["The data was collected by the company.", "The data collected by the company.", "The data is collect by the company.", "The data collecting by the company."], "answerIdx": 0, "hint": "Verbo 'to be' no passado + particípio passado."},
      {"id": "bj29_fill1", "type": "fill", "prompt": "The new product ___ launched in over 40 countries last year.", "answer": "was", "keywords": ["was"], "hint": "Sujeito singular ('product') no passado."},
      {"id": "bj29_fill2", "type": "fill", "prompt": "The survey results ___ analyzed by an independent research team.", "answer": "were", "keywords": ["were"], "hint": "Sujeito plural ('results') no passado."},
      {"id": "bj29_fill3", "type": "fill", "prompt": "The annual report ___ published on the company website.", "answer": "was", "keywords": ["was"], "hint": "Sujeito singular ('report') no passado."},
      {"id": "bj29_tf1", "type": "tf", "prompt": "'The product was launched last year' is an example of the passive voice.", "answer": true, "hint": "O sujeito recebe a ação, característica da voz passiva."},
      {"id": "bj29_tf2", "type": "tf", "prompt": "In the sentence 'They analyzed the data,' the subject performs the action, making it active voice.", "answer": true, "hint": "O sujeito 'they' executa a ação."},
      {"id": "bj29_text1", "type": "text", "prompt": "Rewrite this sentence in the passive voice: 'The IT department fixed the server issue.'", "keywords": ["was fixed", "by the", "server"], "hint": "O objeto da frase ativa vira o sujeito da passiva."},
      {"id": "bj29_text2", "type": "text", "prompt": "Write 2 sentences in the passive voice describing steps taken during a product recall.", "keywords": ["was", "were", "recalled", "notified"], "hint": "Use 'was/were' + particípio passado."}
    ]
  },
  bj30: {
    context: "Escrever um relatório curto baseado em um gráfico ou cenário exige descrever dados com precisão e tirar conclusões claras. Frases como 'As shown in the chart...', 'Compared to...' e 'Overall, the data suggests...' estruturam bem o texto.",
    acts: [
      {"id": "bj30_mc1", "type": "mc", "prompt": "When describing a chart in a report, which phrase is appropriate?", "options": ["As shown in the chart, sales increased steadily from January to June.", "The chart is a chart.", "Numbers went places.", "The chart shows nothing important."], "answerIdx": 0, "hint": "Conecta diretamente a descrição ao gráfico apresentado."},
      {"id": "bj30_mc2", "type": "mc", "prompt": "A report based on a chart should typically begin with...", "options": ["A random joke", "A brief overview of what the chart shows", "A list of unrelated facts", "The conclusion only"], "answerIdx": 1, "hint": "Comece explicando o que o gráfico representa."},
      {"id": "bj30_mc3", "type": "mc", "prompt": "Which phrase is used to highlight the most significant data point in a chart?", "options": ["Notably, sales peaked at $3 million in December.", "Sales, whatever, happened.", "Numbers are big sometimes.", "Nothing stood out at all."], "answerIdx": 0, "hint": "'Notably' destaca o dado mais relevante."},
      {"id": "bj30_fill1", "type": "fill", "prompt": "As ___ in the chart, revenue grew consistently over the four quarters.", "answer": "shown", "keywords": ["shown", "illustrated", "seen"], "hint": "Completa a expressão 'as shown in the chart'."},
      {"id": "bj30_fill2", "type": "fill", "prompt": "The data ___ that customer satisfaction improved significantly after the update.", "answer": "reveals", "keywords": ["reveals", "shows", "indicates"], "hint": "Verbo que liga dados a uma conclusão."},
      {"id": "bj30_fill3", "type": "fill", "prompt": "___ to the previous year, sales this year increased by 15%.", "answer": "Compared", "keywords": ["Compared"], "hint": "Completa a expressão 'compared to'."},
      {"id": "bj30_tf1", "type": "tf", "prompt": "A chart-based report should explain what the numbers mean, not just describe them.", "answer": true, "hint": "A interpretação é tão importante quanto a descrição."},
      {"id": "bj30_tf2", "type": "tf", "prompt": "A 150-word report should include unnecessary background details unrelated to the chart.", "answer": false, "hint": "Detalhes irrelevantes devem ser evitados em textos curtos."},
      {"id": "bj30_text1", "type": "text", "prompt": "Write a 150-word report describing a chart showing sales that increased steadily over 12 months.", "keywords": ["increased", "chart", "overall", "trend"], "hint": "Descreva a tendência e conclua com um resumo."},
      {"id": "bj30_text2", "type": "text", "prompt": "Write a short report analyzing a scenario where customer complaints rose after a product change.", "keywords": ["increased", "complaints", "recommend", "data"], "hint": "Inclua uma possível causa e uma recomendação."}
    ]
  },
  bj31: {
    context: "Expressões idiomáticas como 'touch base', 'ballpark figure' e 'bandwidth' são usadas o tempo todo em ambientes corporativos de língua inglesa. Conhecer esses idiomas ajuda a entender e participar de conversas de negócios com naturalidade.",
    acts: [
      {"id": "bj31_mc1", "type": "mc", "prompt": "What does 'touch base' mean?", "options": ["To play baseball", "To make brief contact with someone to check in", "To end a project", "To argue with someone"], "answerIdx": 1, "hint": "Significa entrar em contato rapidamente para atualizar alguém."},
      {"id": "bj31_mc2", "type": "mc", "prompt": "A 'ballpark figure' refers to...", "options": ["An exact, precise number", "A rough estimate", "A sports statistic", "A final decision"], "answerIdx": 1, "hint": "É uma estimativa aproximada, não um número exato."},
      {"id": "bj31_mc3", "type": "mc", "prompt": "'I don't have the bandwidth for this project right now' means...", "options": ["I don't have internet access", "I don't have enough time or capacity", "I don't understand the project", "I refuse to do it"], "answerIdx": 1, "hint": "Refere-se à capacidade ou tempo disponível de uma pessoa."},
      {"id": "bj31_fill1", "type": "fill", "prompt": "Let's ___ base next week to check on the project's progress.", "answer": "touch", "keywords": ["touch"], "hint": "Completa a expressão 'touch base'."},
      {"id": "bj31_fill2", "type": "fill", "prompt": "Can you give me a ___ figure for the total cost of the renovation?", "answer": "ballpark", "keywords": ["ballpark"], "hint": "Palavra que significa 'estimativa aproximada'."},
      {"id": "bj31_fill3", "type": "fill", "prompt": "I don't have the ___ to take on another project this month.", "answer": "bandwidth", "keywords": ["bandwidth"], "hint": "Palavra que significa 'capacidade' ou 'tempo disponível'."},
      {"id": "bj31_tf1", "type": "tf", "prompt": "'Touch base' means to have a quick conversation or check-in with someone.", "answer": true, "hint": "É um contato breve para atualizar alguém."},
      {"id": "bj31_tf2", "type": "tf", "prompt": "A 'ballpark figure' is meant to be an exact, precise number.", "answer": false, "hint": "Na verdade é uma estimativa aproximada."},
      {"id": "bj31_text1", "type": "text", "prompt": "Write 3 sentences using 'touch base,' 'ballpark figure,' and 'bandwidth' in a workplace context.", "keywords": ["touch base", "ballpark", "bandwidth"], "hint": "Use cada expressão em uma frase de trabalho realista."},
      {"id": "bj31_text2", "type": "text", "prompt": "Describe a time you or someone had to 'think outside the box' at work.", "keywords": ["think outside the box", "creative", "solution"], "hint": "Descreva uma solução criativa e não convencional."}
    ]
  },
  bj32: {
    context: "Siglas como ASAP, ETA, KPI, ROI, B2B e B2C aparecem em e-mails e reuniões corporativas diariamente. Entender e usar essas abreviações corretamente é essencial para comunicação eficiente no ambiente de trabalho.",
    acts: [
      {"id": "bj32_mc1", "type": "mc", "prompt": "What does 'ASAP' stand for?", "options": ["As Soon As Possible", "As Slow As Possible", "At Some Available Point", "Always Send A Package"], "answerIdx": 0, "hint": "Sigla muito comum para pedir urgência."},
      {"id": "bj32_mc2", "type": "mc", "prompt": "'ETA' in a business context means...", "options": ["Estimated Time of Arrival", "Extra Time Allowed", "Every Ten Attempts", "Employee Task Assignment"], "answerIdx": 0, "hint": "Usada para perguntar quando algo vai chegar."},
      {"id": "bj32_mc3", "type": "mc", "prompt": "A 'KPI' is used to...", "options": ["Measure performance against specific goals", "Book flights", "Order office supplies", "Sign contracts"], "answerIdx": 0, "hint": "Indicador usado para medir desempenho."},
      {"id": "bj32_fill1", "type": "fill", "prompt": "Please send the contract ___ — the client is waiting.", "answer": "ASAP", "keywords": ["ASAP"], "hint": "Sigla que significa 'o mais rápido possível'."},
      {"id": "bj32_fill2", "type": "fill", "prompt": "What's the ___ for the shipment? The client wants to know when it will arrive.", "answer": "ETA", "keywords": ["ETA"], "hint": "Sigla que significa 'horário estimado de chegada'."},
      {"id": "bj32_fill3", "type": "fill", "prompt": "Our main ___ this quarter is customer retention rate.", "answer": "KPI", "keywords": ["KPI"], "hint": "Sigla para indicador-chave de desempenho."},
      {"id": "bj32_tf1", "type": "tf", "prompt": "'ASAP' means 'As Soon As Possible.'", "answer": true, "hint": "É exatamente o significado da sigla."},
      {"id": "bj32_tf2", "type": "tf", "prompt": "'ETA' stands for 'Estimated Time of Arrival.'", "answer": true, "hint": "Refere-se ao horário estimado de chegada."},
      {"id": "bj32_text1", "type": "text", "prompt": "Write a short email using 'ASAP' and 'ETA' about a delayed shipment.", "keywords": ["ASAP", "ETA", "delayed", "shipment"], "hint": "Use as duas siglas de forma natural no e-mail."},
      {"id": "bj32_text2", "type": "text", "prompt": "Explain what KPIs your team might use to measure customer service performance.", "keywords": ["KPI", "measure", "performance", "customer"], "hint": "Pense em métricas relevantes para atendimento ao cliente."}
    ]
  },
  bj33: {
    context: "Vocabulário financeiro básico — revenue (receita), profit (lucro), forecast (previsão) e budget (orçamento) — é fundamental para entender relatórios financeiros e participar de discussões sobre o desempenho de uma empresa.",
    acts: [
      {"id": "bj33_mc1", "type": "mc", "prompt": "What is 'revenue'?", "options": ["The total income generated from sales before expenses", "The money left after all expenses", "A future prediction", "A type of loan"], "answerIdx": 0, "hint": "É a receita total antes de descontar despesas."},
      {"id": "bj33_mc2", "type": "mc", "prompt": "What is 'profit'?", "options": ["Total sales before costs", "The money remaining after all expenses are subtracted from revenue", "A type of tax", "An employee bonus"], "answerIdx": 1, "hint": "É o que sobra depois de todas as despesas."},
      {"id": "bj33_mc3", "type": "mc", "prompt": "A 'forecast' in business refers to...", "options": ["A past financial record", "A prediction of future financial performance", "A type of invoice", "A legal document"], "answerIdx": 1, "hint": "É uma previsão de desempenho futuro."},
      {"id": "bj33_fill1", "type": "fill", "prompt": "The company's ___ increased by 12% this year, reaching $8 million.", "answer": "revenue", "keywords": ["revenue"], "hint": "Palavra que significa 'receita total'."},
      {"id": "bj33_fill2", "type": "fill", "prompt": "After deducting all expenses, the company reported a net ___ of $500,000.", "answer": "profit", "keywords": ["profit"], "hint": "Palavra que significa 'lucro'."},
      {"id": "bj33_fill3", "type": "fill", "prompt": "Our financial ___ predicts steady growth over the next two quarters.", "answer": "forecast", "keywords": ["forecast"], "hint": "Palavra que significa 'previsão'."},
      {"id": "bj33_tf1", "type": "tf", "prompt": "'Revenue' refers to total income before any expenses are deducted.", "answer": true, "hint": "É a receita bruta, antes das despesas."},
      {"id": "bj33_tf2", "type": "tf", "prompt": "'Profit' and 'revenue' mean exactly the same thing.", "answer": false, "hint": "São conceitos diferentes: lucro vem depois das despesas."},
      {"id": "bj33_text1", "type": "text", "prompt": "Write 2 sentences describing a company's revenue and profit for the past year (use made-up numbers).", "keywords": ["revenue", "profit", "increased", "reported"], "hint": "Use números fictícios mas realistas."},
      {"id": "bj33_text2", "type": "text", "prompt": "Explain the difference between revenue and profit, using an example.", "keywords": ["revenue", "profit", "expenses", "difference"], "hint": "Mostre como as despesas transformam receita em lucro."}
    ]
  },
  bj34: {
    context: "Vocabulário de RH como 'onboarding' (integração de novos funcionários), 'performance review' (avaliação de desempenho) e 'benefits' (benefícios) é essencial para quem trabalha ou se candidata a vagas em empresas internacionais.",
    acts: [
      {"id": "bj34_mc1", "type": "mc", "prompt": "What is 'onboarding'?", "options": ["The process of firing an employee", "The process of integrating a new employee into a company", "A type of employee benefit", "A performance review method"], "answerIdx": 1, "hint": "É o processo de integração de um novo funcionário."},
      {"id": "bj34_mc2", "type": "mc", "prompt": "A 'performance review' is typically used to...", "options": ["Evaluate an employee's work and set future goals", "Fire employees immediately", "Plan company parties", "Approve vacation requests"], "answerIdx": 0, "hint": "Avalia o trabalho e define metas futuras."},
      {"id": "bj34_mc3", "type": "mc", "prompt": "'Employee benefits' commonly include...", "options": ["Health insurance and paid time off", "Only a salary", "Office furniture", "Company logos"], "answerIdx": 0, "hint": "Incluem seguro saúde, férias remuneradas, etc."},
      {"id": "bj34_fill1", "type": "fill", "prompt": "New hires complete a two-week ___ program to learn company procedures.", "answer": "onboarding", "keywords": ["onboarding"], "hint": "Palavra que significa 'integração'."},
      {"id": "bj34_fill2", "type": "fill", "prompt": "Her annual ___ showed strong improvement in customer service skills.", "answer": "performance review", "keywords": ["performance review", "review"], "hint": "Expressão que significa 'avaliação de desempenho'."},
      {"id": "bj34_fill3", "type": "fill", "prompt": "The company offers excellent ___, including health insurance and a retirement plan.", "answer": "benefits", "keywords": ["benefits"], "hint": "Palavra que significa 'benefícios'."},
      {"id": "bj34_tf1", "type": "tf", "prompt": "'Onboarding' refers to the process of helping a new employee settle into a company.", "answer": true, "hint": "É o processo de integração de um novo funcionário."},
      {"id": "bj34_tf2", "type": "tf", "prompt": "A 'performance review' is only conducted when an employee is about to be fired.", "answer": false, "hint": "É feita regularmente, não apenas antes de demissões."},
      {"id": "bj34_text1", "type": "text", "prompt": "Describe what a good onboarding process should include for a new employee.", "keywords": ["onboarding", "training", "welcome", "introduce"], "hint": "Pense em treinamento, boas-vindas e integração à equipe."},
      {"id": "bj34_text2", "type": "text", "prompt": "Write feedback for a performance review of an employee who consistently meets deadlines but struggles with teamwork.", "keywords": ["performance", "strength", "improve", "teamwork"], "hint": "Equilibre pontos fortes com áreas de melhoria."}
    ]
  },
  bj35: {
    context: "Usar expressões idiomáticas de negócios em um parágrafo coeso demonstra fluência e naturalidade. Idioms como 'back to square one', 'raise the bar', 'in the black/red' e 'bring to the table' são combinados aqui em contexto real.",
    acts: [
      {"id": "bj35_mc1", "type": "mc", "prompt": "'We're back to square one' means...", "options": ["We finished the project successfully", "We have to start over from the beginning", "We are ahead of schedule", "We reached an agreement"], "answerIdx": 1, "hint": "Significa recomeçar do zero após um revés."},
      {"id": "bj35_mc2", "type": "mc", "prompt": "'Don't cut corners on quality' means...", "options": ["Don't take shortcuts that reduce quality", "Don't cut the paper", "Don't discuss the corners of the room", "Don't reduce the price"], "answerIdx": 0, "hint": "Significa não fazer atalhos que prejudicam a qualidade."},
      {"id": "bj35_mc3", "type": "mc", "prompt": "'This will raise the bar for the whole industry' means it will...", "options": ["Lower expectations", "Set a new, higher standard", "Close a bar downtown", "Increase prices only"], "answerIdx": 1, "hint": "Significa estabelecer um novo padrão mais alto."},
      {"id": "bj35_fill1", "type": "fill", "prompt": "After the client rejected our plan, we were ___ to square one.", "answer": "back", "keywords": ["back"], "hint": "Completa a expressão 'back to square one'."},
      {"id": "bj35_fill2", "type": "fill", "prompt": "We can't ___ corners on safety, even if it saves money.", "answer": "cut", "keywords": ["cut"], "hint": "Completa a expressão 'cut corners'."},
      {"id": "bj35_fill3", "type": "fill", "prompt": "This new product could really ___ the bar for our competitors.", "answer": "raise", "keywords": ["raise"], "hint": "Completa a expressão 'raise the bar'."},
      {"id": "bj35_tf1", "type": "tf", "prompt": "'Back to square one' means starting over after a setback.", "answer": true, "hint": "Significa recomeçar do zero após um revés."},
      {"id": "bj35_tf2", "type": "tf", "prompt": "'Cut corners' means to do something thoroughly and carefully.", "answer": false, "hint": "Na verdade significa fazer algo de forma descuidada."},
      {"id": "bj35_text1", "type": "text", "prompt": "Write a short business paragraph (5-6 sentences) using at least 5 idioms from this lesson (back to square one, cut corners, raise the bar, keep posted, in the black).", "keywords": ["back to square one", "cut corners", "raise the bar", "in the black"], "hint": "Combine as expressões de forma coerente em um único parágrafo."},
      {"id": "bj35_text2", "type": "text", "prompt": "Describe a project that went 'back to square one' and explain why.", "keywords": ["back to square one", "restart", "because"], "hint": "Explique o motivo do recomeço do projeto."}
    ]
  },
  bj36: {
    context: "Um currículo (CV) eficaz em inglês organiza claramente skills (habilidades), experience (experiência) e qualifications (qualificações), usando verbos de ação e resultados quantificáveis para se destacar aos recrutadores.",
    acts: [
      {"id": "bj36_mc1", "type": "mc", "prompt": "Which section of a CV lists your degrees and certifications?", "options": ["Qualifications/Education", "Hobbies", "References", "Cover letter"], "answerIdx": 0, "hint": "Seção que lista formação acadêmica e certificações."},
      {"id": "bj36_mc2", "type": "mc", "prompt": "'Soft skills' refer to...", "options": ["Technical abilities like coding", "Interpersonal abilities like communication and teamwork", "Physical strength", "Educational qualifications"], "answerIdx": 1, "hint": "São habilidades interpessoais, como comunicação e trabalho em equipe."},
      {"id": "bj36_mc3", "type": "mc", "prompt": "Which is an example of a 'hard skill'?", "options": ["Teamwork", "Proficiency in Excel", "Communication", "Leadership"], "answerIdx": 1, "hint": "Habilidades técnicas específicas, como usar um programa."},
      {"id": "bj36_fill1", "type": "fill", "prompt": "She has five years of ___ in digital marketing.", "answer": "experience", "keywords": ["experience"], "hint": "Palavra que significa 'experiência'."},
      {"id": "bj36_fill2", "type": "fill", "prompt": "His key ___ include leadership, negotiation, and project management.", "answer": "skills", "keywords": ["skills"], "hint": "Palavra que significa 'habilidades'."},
      {"id": "bj36_fill3", "type": "fill", "prompt": "Candidates must have the required ___, including a bachelor's degree in finance.", "answer": "qualifications", "keywords": ["qualifications"], "hint": "Palavra que significa 'qualificações'."},
      {"id": "bj36_tf1", "type": "tf", "prompt": "'Soft skills' include abilities like communication and teamwork.", "answer": true, "hint": "São habilidades interpessoais e comportamentais."},
      {"id": "bj36_tf2", "type": "tf", "prompt": "'Hard skills' are typically interpersonal abilities rather than technical ones.", "answer": false, "hint": "Hard skills são técnicas, não interpessoais."},
      {"id": "bj36_text1", "type": "text", "prompt": "Write a CV skills section (bullet points) for a candidate applying for a graphic design position.", "keywords": ["skills", "design", "proficient", "experience"], "hint": "Liste habilidades técnicas e interpessoais relevantes."},
      {"id": "bj36_text2", "type": "text", "prompt": "Write a work experience entry for a customer service representative role, including a quantified achievement.", "keywords": ["experience", "managed", "increased", "achieved"], "hint": "Inclua um número que mostre uma conquista real."}
    ]
  },
  bj37: {
    context: "Responder 'Tell me about yourself' e perguntas sobre pontos fortes e fracos exige preparo e estrutura. Respostas devem ser breves, relevantes ao cargo e apoiadas por exemplos concretos de conquistas profissionais.",
    acts: [
      {"id": "bj37_mc1", "type": "mc", "prompt": "Which is the best approach to answering 'Tell me about yourself' in an interview?", "options": ["Share your entire life story from childhood", "Give a brief, professional summary focused on relevant experience", "Talk only about hobbies", "Ask the interviewer to go first"], "answerIdx": 1, "hint": "A resposta deve ser breve e focada na sua experiência profissional."},
      {"id": "bj37_mc2", "type": "mc", "prompt": "Which is a strong answer to 'What is your greatest strength?'", "options": ["I'm good at everything.", "I'm highly organized, which helped me manage multiple projects successfully.", "I don't really have any strengths.", "I'm the best employee ever."], "answerIdx": 1, "hint": "Uma boa resposta traz um exemplo concreto que comprova o ponto forte."},
      {"id": "bj37_mc3", "type": "mc", "prompt": "When discussing a weakness in an interview, you should...", "options": ["Pretend you have no weaknesses", "Mention a real area for growth and how you're improving it", "Criticize your previous employer", "Avoid answering the question"], "answerIdx": 1, "hint": "Mencione uma fraqueza real e como está trabalhando para melhorá-la."},
      {"id": "bj37_fill1", "type": "fill", "prompt": "I have over five years of ___ in project management, primarily in the tech industry.", "answer": "experience", "keywords": ["experience"], "hint": "Palavra que significa 'experiência'."},
      {"id": "bj37_fill2", "type": "fill", "prompt": "One of my greatest ___ is my ability to communicate clearly under pressure.", "answer": "strengths", "keywords": ["strengths"], "hint": "Palavra que significa 'pontos fortes'."},
      {"id": "bj37_fill3", "type": "fill", "prompt": "An area I'm ___ on is delegating tasks more effectively to my team.", "answer": "working", "keywords": ["working"], "hint": "Completa a expressão 'working on'."},
      {"id": "bj37_tf1", "type": "tf", "prompt": "'Tell me about yourself' should be answered with a full personal life history.", "answer": false, "hint": "A resposta deve ser breve e profissional, não uma biografia completa."},
      {"id": "bj37_tf2", "type": "tf", "prompt": "A good answer about strengths includes a specific example that supports the claim.", "answer": true, "hint": "Exemplos concretos tornam a resposta mais convincente."},
      {"id": "bj37_text1", "type": "text", "prompt": "Write a 3-4 sentence answer to 'Tell me about yourself' for a job in project management.", "keywords": ["experience", "background", "skills", "excited"], "hint": "Estruture: presente, experiência relevante, interesse na vaga."},
      {"id": "bj37_text2", "type": "text", "prompt": "Write an answer describing your greatest strength, with a specific example.", "keywords": ["strength", "example", "because", "achieved"], "hint": "Comprove o ponto forte com um exemplo real."}
    ]
  },
  bj38: {
    context: "O método STAR (Situation, Task, Action, Result) ajuda a estruturar respostas a perguntas comportamentais em entrevistas, contando uma história clara sobre um desafio, o que você fez e o resultado alcançado.",
    acts: [
      {"id": "bj38_mc1", "type": "mc", "prompt": "What does 'STAR' stand for in interview technique?", "options": ["Situation, Task, Action, Result", "Skills, Talent, Ability, Reference", "Strengths, Talents, Achievements, Review", "Speed, Time, Accuracy, Response"], "answerIdx": 0, "hint": "É um acrônimo para estruturar respostas comportamentais."},
      {"id": "bj38_mc2", "type": "mc", "prompt": "In the STAR method, 'Situation' refers to...", "options": ["The final outcome of your actions", "The context or background of the story you're telling", "Your personal opinion", "A future goal"], "answerIdx": 1, "hint": "É o contexto ou cenário inicial da história."},
      {"id": "bj38_mc3", "type": "mc", "prompt": "The 'Task' part of STAR describes...", "options": ["What you were responsible for achieving", "The final result", "Random unrelated information", "Your salary expectations"], "answerIdx": 0, "hint": "Descreve o que você era responsável por realizar."},
      {"id": "bj38_fill1", "type": "fill", "prompt": "In the STAR method, 'S' stands for ___.", "answer": "Situation", "keywords": ["Situation"], "hint": "Primeira letra do acrônimo STAR."},
      {"id": "bj38_fill2", "type": "fill", "prompt": "The 'T' in STAR represents the ___ you were responsible for.", "answer": "Task", "keywords": ["Task"], "hint": "Segunda letra do acrônimo STAR."},
      {"id": "bj38_fill3", "type": "fill", "prompt": "During the 'Action' step, describe the specific steps ___ took to address the problem.", "answer": "you", "keywords": ["you"], "hint": "Foque nas ações que VOCÊ tomou pessoalmente."},
      {"id": "bj38_tf1", "type": "tf", "prompt": "STAR stands for Situation, Task, Action, Result.", "answer": true, "hint": "É exatamente o que o acrônimo significa."},
      {"id": "bj38_tf2", "type": "tf", "prompt": "The 'Action' section should describe what your whole company did, not your individual contribution.", "answer": false, "hint": "Deve focar na sua contribuição individual."},
      {"id": "bj38_text1", "type": "text", "prompt": "Using the STAR method, describe a time you solved a problem at work or school.", "keywords": ["situation", "task", "action", "result"], "hint": "Siga a ordem: situação, tarefa, ação e resultado."},
      {"id": "bj38_text2", "type": "text", "prompt": "Write the 'Situation' and 'Task' parts of a STAR answer about a time you led a project.", "keywords": ["situation", "task", "led", "project"], "hint": "Descreva o contexto e sua responsabilidade específica."}
    ]
  },
  bj39: {
    context: "Fazer boas perguntas ao entrevistador — como 'What does success look like here?' — demonstra interesse genuíno na vaga e ajuda o candidato a avaliar se a empresa é realmente uma boa escolha para ele.",
    acts: [
      {"id": "bj39_mc1", "type": "mc", "prompt": "Why is it important for a candidate to ask questions at the end of an interview?", "options": ["It shows genuine interest and helps evaluate if the job is a good fit", "It is not important at all", "It wastes the interviewer's time", "It is only for senior candidates"], "answerIdx": 0, "hint": "Demonstra interesse genuíno e ajuda a avaliar a vaga."},
      {"id": "bj39_mc2", "type": "mc", "prompt": "Which is a strong question to ask an interviewer?", "options": ["Do I really have to work full time?", "What does success look like in this role after the first six months?", "Can I leave early on Fridays?", "How much vacation do I get immediately?"], "answerIdx": 1, "hint": "Mostra interesse nas expectativas do cargo."},
      {"id": "bj39_mc3", "type": "mc", "prompt": "Which question shows interest in company culture?", "options": ["How would you describe the team culture here?", "What's the WiFi password?", "Can I skip meetings?", "Is the office far from parking?"], "answerIdx": 0, "hint": "Pergunta diretamente sobre a cultura da equipe."},
      {"id": "bj39_fill1", "type": "fill", "prompt": "What does ___ look like in this role after the first six months?", "answer": "success", "keywords": ["success"], "hint": "Palavra que significa 'sucesso'."},
      {"id": "bj39_fill2", "type": "fill", "prompt": "Could you describe the team ___ I would be working with?", "answer": "culture", "keywords": ["culture", "dynamic"], "hint": "Palavra que significa 'cultura'."},
      {"id": "bj39_fill3", "type": "fill", "prompt": "What are the biggest ___ facing this team right now?", "answer": "challenges", "keywords": ["challenges"], "hint": "Palavra que significa 'desafios'."},
      {"id": "bj39_tf1", "type": "tf", "prompt": "Asking thoughtful questions at the end of an interview shows genuine interest in the role.", "answer": true, "hint": "Perguntas bem pensadas demonstram interesse real."},
      {"id": "bj39_tf2", "type": "tf", "prompt": "It's best to avoid asking any questions during a job interview.", "answer": false, "hint": "Fazer perguntas é altamente recomendado."},
      {"id": "bj39_text1", "type": "text", "prompt": "Write 3 thoughtful questions you would ask an interviewer at the end of a job interview.", "keywords": ["success", "team", "culture", "opportunities"], "hint": "Escolha perguntas sobre sucesso, equipe e crescimento."},
      {"id": "bj39_text2", "type": "text", "prompt": "Write a question asking about growth opportunities within a company, and explain why it's a good question to ask.", "keywords": ["growth", "opportunities", "development", "because"], "hint": "Justifique por que essa pergunta é relevante."}
    ]
  },
  bj40: {
    context: "Uma entrevista simulada completa combina apresentação pessoal, perguntas comportamentais (STAR), pontos fortes e fracos, e perguntas ao entrevistador — praticando do início ao fim como em uma entrevista real de 10 minutos.",
    acts: [
      {"id": "bj40_mc1", "type": "mc", "prompt": "In a mock interview, which opening is most professional when greeting the interviewer?", "options": ["Hey, what's up?", "Good morning, thank you for having me. I'm excited to be here.", "Yo, ready to start?", "I guess we can begin."], "answerIdx": 1, "hint": "Uma abertura formal e educada causa boa primeira impressão."},
      {"id": "bj40_mc2", "type": "mc", "prompt": "Which is the best way to respond to 'Why did you leave your last job?'", "options": ["My boss was terrible and I hated everyone.", "I was looking for new challenges and opportunities for growth.", "None of your business.", "I got fired, next question."], "answerIdx": 1, "hint": "Mantenha a resposta positiva e profissional."},
      {"id": "bj40_mc3", "type": "mc", "prompt": "Which is an appropriate way to handle a question you don't know how to answer?", "options": ["Panic and refuse to respond", "Take a brief moment to think, then answer honestly and calmly", "Change the subject immediately", "Walk out of the interview"], "answerIdx": 1, "hint": "Pense por um momento e responda com calma e honestidade."},
      {"id": "bj40_fill1", "type": "fill", "prompt": "Thank you for having me — I'm really ___ to be here today.", "answer": "excited", "keywords": ["excited", "happy"], "hint": "Adjetivo que significa 'animado/empolgado'."},
      {"id": "bj40_fill2", "type": "fill", "prompt": "I left my previous role because I was looking for new ___ for growth.", "answer": "opportunities", "keywords": ["opportunities"], "hint": "Palavra que significa 'oportunidades'."},
      {"id": "bj40_fill3", "type": "fill", "prompt": "I'm particularly interested in this role because it ___ well with my background in sales.", "answer": "aligns", "keywords": ["aligns", "fits"], "hint": "Verbo que significa 'se alinha'."},
      {"id": "bj40_tf1", "type": "tf", "prompt": "A full mock interview should include a mix of introduction, strengths/weaknesses, behavioral, and candidate questions.", "answer": true, "hint": "Uma entrevista completa cobre várias etapas diferentes."},
      {"id": "bj40_tf2", "type": "tf", "prompt": "Practicing a mock interview is not useful preparation for a real interview.", "answer": false, "hint": "Simular entrevistas é uma excelente forma de preparação."},
      {"id": "bj40_text1", "type": "text", "prompt": "Write the opening exchange of a mock interview, including a greeting and the candidate's brief self-introduction.", "keywords": ["thank you", "excited", "experience", "background"], "hint": "Comece com uma saudação educada e uma breve apresentação."},
      {"id": "bj40_text2", "type": "text", "prompt": "Write a full STAR-method answer to use in a mock interview about overcoming a challenge at work.", "keywords": ["situation", "task", "action", "result"], "hint": "Use as quatro partes do método STAR."}
    ]
  },
  bj41: {
    context: "Networking eficaz depende de frases específicas para iniciar, manter e encerrar conversas profissionais. Expressões como 'What do you do?', 'How did you get into...?', 'What brings you here?' e 'Let's stay in touch' ajudam a criar conexões genuínas em eventos de negócios.",
    acts: [
      {"id": "bj41_mc1", "type": "mc", "prompt": "Which question is commonly used to ask about someone's job at a networking event?", "options": ["How old are you?", "What do you do?", "How much do you earn?", "Where do you live exactly?"], "answerIdx": 1, "hint": "É a pergunta padrão e educada sobre a profissão de alguém."},
      {"id": "bj41_mc2", "type": "mc", "prompt": "What is the most natural way to ask how someone started their career in a field?", "options": ["How did you get into marketing?", "How much money do you make in marketing?", "Why are you still in marketing?", "When did you stop doing marketing?"], "answerIdx": 0, "hint": "'Get into' é usado para perguntar como a pessoa entrou nessa área."},
      {"id": "bj41_mc3", "type": "mc", "prompt": "Someone says: 'So, what brings you to this conference?' What are they asking?", "options": ["Why you are hungry", "Your reason for attending the event", "How you traveled here", "What time the event ends"], "answerIdx": 1, "hint": "Pergunta sobre o motivo de a pessoa estar presente no evento."},
      {"id": "bj41_fill1", "type": "fill", "prompt": "Complete: 'So, what ___ you do for a living?'", "answer": "do", "keywords": ["do"], "hint": "Verbo auxiliar usado na pergunta padrão sobre profissão."},
      {"id": "bj41_fill2", "type": "fill", "prompt": "Complete: 'How did you ___ into consulting?'", "answer": "get", "keywords": ["get", "break"], "hint": "A expressão 'get into' significa começar a atuar em uma área."},
      {"id": "bj41_fill3", "type": "fill", "prompt": "Complete: 'It was great ___ you at the conference yesterday.'", "answer": "meeting", "keywords": ["meeting", "to meet"], "hint": "Gerúndio usado depois de 'great' para expressar prazer em conhecer alguém."},
      {"id": "bj41_tf1", "type": "tf", "prompt": "'What do you do?' is a common and appropriate question to ask a stranger at a business networking event.", "answer": true, "hint": "É uma pergunta padrão para iniciar conversas profissionais."},
      {"id": "bj41_tf2", "type": "tf", "prompt": "Asking 'How much money do you make?' is considered polite small talk at a networking event.", "answer": false, "hint": "Perguntas sobre salário costumam ser vistas como invasivas em inglês profissional."},
      {"id": "bj41_text1", "type": "text", "prompt": "Write a short dialogue (4-6 lines) between two professionals meeting for the first time at a business conference.", "keywords": ["what do you do", "nice to meet", "industry", "business card"], "hint": "Use perguntas como 'What do you do?' e frases de apresentação, como 'Nice to meet you.'"},
      {"id": "bj41_text2", "type": "text", "prompt": "Introduce yourself in 3-4 sentences as if you were meeting a potential client at a trade show.", "keywords": ["I'm", "I work", "company", "pleasure"], "hint": "Inclua seu nome, cargo e empresa: 'Hi, I'm..., I work as...'"}
    ]
  },
  bj42: {
    context: "Mensagens de follow-up após eventos de networking reforçam a conexão criada pessoalmente. Frases como 'It was great meeting you...', 'I enjoyed our conversation about...', 'I wanted to follow up on...' e 'Looking forward to staying connected' são essenciais para escrever e-mails de acompanhamento eficazes.",
    acts: [
      {"id": "bj42_mc1", "type": "mc", "prompt": "Which opening line is best for a follow-up email after meeting someone at a conference?", "options": ["Give me your phone number now.", "It was great meeting you at the conference yesterday.", "I don't remember who you are.", "You should call me immediately."], "answerIdx": 1, "hint": "É a forma padrão e educada de começar um e-mail de follow-up."},
      {"id": "bj42_mc2", "type": "mc", "prompt": "What is the purpose of a follow-up email after a networking event?", "options": ["To ask for a loan", "To reinforce the connection and possibly continue the conversation", "To complain about the event", "To cancel a meeting"], "answerIdx": 1, "hint": "O objetivo é manter e fortalecer o contato criado no evento."},
      {"id": "bj42_mc3", "type": "mc", "prompt": "Which phrase is appropriate to reference a specific topic discussed during the first meeting?", "options": ["I enjoyed our conversation about your new product launch.", "I don't remember what we talked about.", "Whatever, it doesn't matter.", "We didn't really talk much."], "answerIdx": 0, "hint": "Mencionar um detalhe específico mostra que você prestou atenção na conversa."},
      {"id": "bj42_fill1", "type": "fill", "prompt": "Complete: 'It was ___ meeting you at yesterday's conference.'", "answer": "great", "keywords": ["great", "wonderful", "a pleasure"], "hint": "Adjetivo positivo comum para abrir um e-mail de follow-up."},
      {"id": "bj42_fill2", "type": "fill", "prompt": "Complete: 'I wanted to ___ up on our conversation about the new marketing campaign.'", "answer": "follow", "keywords": ["follow"], "hint": "'Follow up on' significa continuar ou dar continuidade a um assunto."},
      {"id": "bj42_fill3", "type": "fill", "prompt": "Complete: 'I really enjoyed ___ to you about your company's expansion plans.'", "answer": "talking", "keywords": ["talking", "speaking"], "hint": "Gerúndio depois de 'enjoyed'."},
      {"id": "bj42_tf1", "type": "tf", "prompt": "A follow-up email should ideally be sent within a day or two after the networking event.", "answer": true, "hint": "Enviar rapidamente mostra interesse genuíno enquanto a conversa está recente."},
      {"id": "bj42_tf2", "type": "tf", "prompt": "Mentioning a specific detail from your conversation makes a follow-up email feel more personal.", "answer": true, "hint": "Detalhes específicos mostram atenção e sinceridade."},
      {"id": "bj42_text1", "type": "text", "prompt": "Write a short follow-up email (4-5 sentences) to someone you met at a marketing conference, referencing a specific topic you discussed.", "keywords": ["great meeting you", "conversation about", "follow up", "touch"], "hint": "Comece com 'It was great meeting you at...' e mencione um tópico específico da conversa."},
      {"id": "bj42_text2", "type": "text", "prompt": "Write a follow-up message proposing a 15-minute call to continue a conversation about a potential partnership.", "keywords": ["would you be open", "call", "discuss", "schedule"], "hint": "Use uma pergunta educada como 'Would you be open to a quick call...?'"}
    ]
  },
  bj43: {
    context: "Construir rapport envolve encontrar pontos em comum e praticar escuta ativa. Frases como 'I completely relate to that', 'That's interesting, tell me more', 'We seem to have a lot in common' e técnicas de active listening ajudam a criar confiança em conversas profissionais.",
    acts: [
      {"id": "bj43_mc1", "type": "mc", "prompt": "What does 'building rapport' mean in a professional context?", "options": ["Signing a legal contract", "Creating a sense of trust and connection with someone", "Writing a formal report", "Negotiating a salary"], "answerIdx": 1, "hint": "Rapport é a relação de confiança e conexão criada entre duas pessoas."},
      {"id": "bj43_mc2", "type": "mc", "prompt": "Which phrase helps find common ground during a conversation?", "options": ["I don't care about that.", "We seem to have a lot in common.", "That's not my problem.", "I disagree with everything you said."], "answerIdx": 1, "hint": "A frase destaca semelhanças entre as pessoas, o que fortalece a conexão."},
      {"id": "bj43_mc3", "type": "mc", "prompt": "Which behavior best demonstrates active listening?", "options": ["Checking your phone while someone is talking", "Nodding and asking relevant follow-up questions", "Interrupting to change the subject", "Looking away and staying silent"], "answerIdx": 1, "hint": "Escuta ativa envolve sinais visuais e perguntas que mostram atenção real."},
      {"id": "bj43_fill1", "type": "fill", "prompt": "Complete: 'We seem to have a lot in ___ — we both studied engineering.'", "answer": "common", "keywords": ["common"], "hint": "Expressão usada quando duas pessoas compartilham interesses semelhantes."},
      {"id": "bj43_fill2", "type": "fill", "prompt": "Complete: 'That's really interesting — tell me ___ about your experience abroad.'", "answer": "more", "keywords": ["more"], "hint": "Frase usada para pedir que a pessoa continue compartilhando detalhes."},
      {"id": "bj43_fill3", "type": "fill", "prompt": "Complete: 'So, if I ___ correctly, you think the project timeline is unrealistic?'", "answer": "understand", "keywords": ["understand", "hear"], "hint": "Verbo usado ao parafrasear para confirmar compreensão."},
      {"id": "bj43_tf1", "type": "tf", "prompt": "Finding common ground with someone helps build trust and rapport more quickly.", "answer": true, "hint": "Semelhanças criam conexão e facilitam a confiança mútua."},
      {"id": "bj43_tf2", "type": "tf", "prompt": "Checking your phone frequently while someone is speaking is a sign of active listening.", "answer": false, "hint": "Escuta ativa exige atenção total, não distrações."},
      {"id": "bj43_text1", "type": "text", "prompt": "Write a short dialogue showing active listening, including at least one paraphrase and one follow-up question.", "keywords": ["so what you're saying", "tell me more", "understand"], "hint": "Inclua uma frase parafraseando o que a outra pessoa disse."},
      {"id": "bj43_text2", "type": "text", "prompt": "Describe two techniques you can use to find common ground with a new colleague.", "keywords": ["common", "ask about", "share", "interest"], "hint": "Pense em perguntas sobre interesses, formação ou experiências compartilhadas."}
    ]
  },
  bj44: {
    context: "Mensagens de LinkedIn seguem convenções próprias para conectar, se aproximar de novos contatos e agradecer. Frases como 'I'd like to connect with you', 'I came across your profile...', 'Thank you for accepting my request' e 'I'd love to learn more about...' são fundamentais na rede profissional.",
    acts: [
      {"id": "bj44_mc1", "type": "mc", "prompt": "Which message is appropriate for a LinkedIn connection request to someone you met briefly at a conference?", "options": ["Add me now or I'll be upset.", "Hi Maria, it was great meeting you at the conference. I'd love to connect!", "Hey, give me a job.", "I don't know you but add me anyway."], "answerIdx": 1, "hint": "Mensagens de conexão devem ser breves, educadas e mencionar o contexto."},
      {"id": "bj44_mc2", "type": "mc", "prompt": "What does 'I came across your profile' mean?", "options": ["I copied your profile", "I found your profile while browsing LinkedIn", "I reported your profile", "I deleted your profile"], "answerIdx": 1, "hint": "'Come across' significa encontrar algo por acaso."},
      {"id": "bj44_mc3", "type": "mc", "prompt": "Which phrase is best when thanking someone for accepting your connection request?", "options": ["Finally, you accepted.", "Thank you for accepting my connection request!", "It took you long enough.", "Whatever, thanks I guess."], "answerIdx": 1, "hint": "Uma mensagem de agradecimento simples e educada é a mais adequada."},
      {"id": "bj44_fill1", "type": "fill", "prompt": "Complete: 'I'd like to ___ with you on LinkedIn.'", "answer": "connect", "keywords": ["connect"], "hint": "Verbo padrão usado para pedir conexão na rede."},
      {"id": "bj44_fill2", "type": "fill", "prompt": "Complete: 'I ___ across your profile while researching the finance industry.'", "answer": "came", "keywords": ["came"], "hint": "'Come across' no passado é 'came across', significa encontrar por acaso."},
      {"id": "bj44_fill3", "type": "fill", "prompt": "Complete: 'Thank you for ___ my connection request.'", "answer": "accepting", "keywords": ["accepting"], "hint": "Gerúndio usado depois de 'for' para agradecer uma ação."},
      {"id": "bj44_tf1", "type": "tf", "prompt": "A LinkedIn connection request should always mention some shared context, such as an event or mutual interest.", "answer": true, "hint": "Mensagens personalizadas têm mais chance de serem aceitas."},
      {"id": "bj44_tf2", "type": "tf", "prompt": "It's appropriate to ask a new LinkedIn connection for a job immediately in your first message.", "answer": false, "hint": "É mais eficaz construir a relação antes de pedir algo diretamente."},
      {"id": "bj44_text1", "type": "text", "prompt": "Write a LinkedIn connection request message to someone you met briefly at an industry event.", "keywords": ["great meeting you", "connect", "event"], "hint": "Mencione onde vocês se conheceram e o motivo do pedido de conexão."},
      {"id": "bj44_text2", "type": "text", "prompt": "Write a short message thanking a connection for accepting your invitation and expressing interest in their work.", "keywords": ["thank you", "accepting", "interested", "work"], "hint": "Combine agradecimento com uma frase mostrando interesse genuíno."}
    ]
  },
  bj45: {
    context: "Um elevator pitch é uma apresentação pessoal de cerca de 30 segundos, usada para causar boa impressão rapidamente. Deve incluir quem você é, o que faz, o valor que agrega e um gancho final. Estrutura: hook, who you are, what you do, value, call to action.",
    acts: [
      {"id": "bj45_mc1", "type": "mc", "prompt": "What is the main purpose of an elevator pitch?", "options": ["To give a detailed 10-minute presentation", "To briefly and clearly introduce yourself and your value in a short time", "To read your entire resume aloud", "To describe your company's full financial history"], "answerIdx": 1, "hint": "É uma apresentação curta e objetiva, geralmente de 30 segundos."},
      {"id": "bj45_mc2", "type": "mc", "prompt": "Which element should typically NOT be included in a 30-second elevator pitch?", "options": ["Your name and role", "A clear statement of value you offer", "A detailed list of every job you've ever had", "A brief call to action"], "answerIdx": 2, "hint": "O pitch deve ser breve, sem listar todo o histórico profissional."},
      {"id": "bj45_mc3", "type": "mc", "prompt": "Which sentence is a strong opening 'hook' for an elevator pitch?", "options": ["Um, hi, I don't really know what to say.", "I help small businesses save up to 30% on operating costs through automation.", "I have a job, and I go to work every day.", "Let me tell you my entire life story."], "answerIdx": 1, "hint": "Um bom gancho chama atenção imediatamente com um resultado ou benefício claro."},
      {"id": "bj45_fill1", "type": "fill", "prompt": "Complete: 'Hi, I'm Carla, and I ___ companies reduce operational costs through automation.'", "answer": "help", "keywords": ["help", "assist"], "hint": "Verbo no presente simples que descreve o que você faz para os outros."},
      {"id": "bj45_fill2", "type": "fill", "prompt": "Complete: 'My ___ is helping startups scale their customer support teams efficiently.'", "answer": "specialty", "keywords": ["specialty", "expertise", "focus"], "hint": "Substantivo que indica sua área de especialização."},
      {"id": "bj45_fill3", "type": "fill", "prompt": "Complete: 'Unlike most consultants, I ___ on data-driven strategies rather than guesswork.'", "answer": "focus", "keywords": ["focus"], "hint": "Verbo que expressa onde você concentra sua atenção."},
      {"id": "bj45_tf1", "type": "tf", "prompt": "An elevator pitch should typically last around 30 seconds to one minute.", "answer": true, "hint": "O nome vem da ideia de se apresentar durante uma curta viagem de elevador."},
      {"id": "bj45_tf2", "type": "tf", "prompt": "A good elevator pitch should list every job you have ever had in detail.", "answer": false, "hint": "O pitch deve ser breve e focado no valor atual que você oferece."},
      {"id": "bj45_text1", "type": "text", "prompt": "Write a 30-second elevator pitch introducing yourself and your current role or field of study.", "keywords": ["I'm", "I help", "specialize", "would love"], "hint": "Siga a estrutura: quem você é, o que faz, o valor que oferece, e um próximo passo."},
      {"id": "bj45_text2", "type": "text", "prompt": "Write an elevator pitch for a freelance graphic designer looking for new clients.", "keywords": ["I help", "brands", "design", "would love"], "hint": "Foque no benefício que o design oferece aos clientes."}
    ]
  },
  bj46: {
    context: "Discutir problemas profissionalmente exige frases específicas para descrever desafios sem soar acusatório. Expressões como 'The issue is...', 'We are facing a challenge with...', 'This has become a problem because...' e 'We need to address...' ajudam a comunicar dificuldades de forma clara e construtiva.",
    acts: [
      {"id": "bj46_mc1", "type": "mc", "prompt": "Which phrase is appropriate to introduce a problem in a professional meeting?", "options": ["Everything is your fault.", "The issue is that our supplier missed the delivery deadline.", "I don't want to talk about this.", "This is a disaster and nobody cares."], "answerIdx": 1, "hint": "A frase descreve o problema de forma objetiva, sem culpar diretamente alguém."},
      {"id": "bj46_mc2", "type": "mc", "prompt": "Which sentence best describes a current business challenge?", "options": ["We are facing a challenge with retaining top talent.", "We never have any problems at all.", "Someone should fix this, whatever.", "I refuse to discuss any issues."], "answerIdx": 0, "hint": "Frase objetiva que nomeia claramente o desafio enfrentado."},
      {"id": "bj46_mc3", "type": "mc", "prompt": "Complete: 'This has become a problem ___ our system cannot handle the increased traffic.'", "options": ["because", "despite", "although", "unless"], "answerIdx": 0, "hint": "Conjunção usada para explicar a causa de um problema."},
      {"id": "bj46_fill1", "type": "fill", "prompt": "Complete: 'The ___ is that our current software cannot integrate with the new system.'", "answer": "issue", "keywords": ["issue", "problem"], "hint": "Substantivo comum usado para introduzir um problema."},
      {"id": "bj46_fill2", "type": "fill", "prompt": "Complete: 'We are ___ a challenge with our supply chain due to global shortages.'", "answer": "facing", "keywords": ["facing"], "hint": "Verbo usado para descrever que a empresa está enfrentando um desafio."},
      {"id": "bj46_fill3", "type": "fill", "prompt": "Complete: 'This has become a ___ because customer complaints have doubled this month.'", "answer": "problem", "keywords": ["problem", "issue"], "hint": "Substantivo geral para descrever uma dificuldade."},
      {"id": "bj46_tf1", "type": "tf", "prompt": "'The issue is...' is a neutral, professional way to introduce a problem.", "answer": true, "hint": "É uma expressão objetiva e comumente usada em reuniões."},
      {"id": "bj46_tf2", "type": "tf", "prompt": "Blaming a specific person directly is the most professional way to describe a problem in a meeting.", "answer": false, "hint": "É mais construtivo focar no processo, não em culpar indivíduos diretamente."},
      {"id": "bj46_text1", "type": "text", "prompt": "Write a short paragraph describing a workplace problem using the phrase 'The issue is...' and explaining its cause.", "keywords": ["the issue is", "because", "cause"], "hint": "Descreva o problema de forma objetiva e explique a razão por trás dele."},
      {"id": "bj46_text2", "type": "text", "prompt": "Write two sentences describing a challenge your team is currently facing, using 'We are facing a challenge with...'", "keywords": ["facing a challenge", "currently", "team"], "hint": "Use a estrutura sugerida e seja específico sobre o desafio."}
    ]
  },
  bj47: {
    context: "Sugerir soluções em inglês profissional envolve frases indiretas e educadas. Expressões como 'One option would be to...', 'Have you considered...?', 'What if we...?' e 'I'd suggest...' ajudam a propor ideias sem soar impositivo, abrindo espaço para discussão.",
    acts: [
      {"id": "bj47_mc1", "type": "mc", "prompt": "Which phrase is a polite way to propose a solution?", "options": ["You must do this now.", "One option would be to outsource part of the production.", "Do exactly what I say.", "There's only one way to do this, mine."], "answerIdx": 1, "hint": "'One option would be to...' propõe uma ideia sem soar autoritário."},
      {"id": "bj47_mc2", "type": "mc", "prompt": "Which question invites the other person to think about an alternative approach?", "options": ["Have you considered automating this process?", "Why haven't you fixed this already?", "This is obviously the only solution.", "I don't want your opinion."], "answerIdx": 0, "hint": "'Have you considered...?' convida a pessoa a refletir sobre uma alternativa."},
      {"id": "bj47_mc3", "type": "mc", "prompt": "Complete: 'What if we ___ the deadline by two weeks to allow more testing time?'", "options": ["extend", "extends", "extending", "extended"], "answerIdx": 0, "hint": "Depois de 'we' no presente, usa-se a forma base do verbo."},
      {"id": "bj47_fill1", "type": "fill", "prompt": "Complete: 'One ___ would be to reduce our marketing budget and focus on organic growth.'", "answer": "option", "keywords": ["option", "possibility", "solution"], "hint": "Substantivo que introduz uma alternativa possível."},
      {"id": "bj47_fill2", "type": "fill", "prompt": "Complete: 'Have you ___ hiring a freelance designer for this project?'", "answer": "considered", "keywords": ["considered"], "hint": "Verbo no gerúndio após 'considered' para propor uma ideia."},
      {"id": "bj47_fill3", "type": "fill", "prompt": "Complete: 'What ___ we offer a discount to retain unhappy customers?'", "answer": "if", "keywords": ["if"], "hint": "'What if' é usado para propor uma ideia hipotética."},
      {"id": "bj47_tf1", "type": "tf", "prompt": "'Have you considered...?' is a polite way to suggest an alternative without being direct.", "answer": true, "hint": "É uma pergunta indireta que convida à reflexão."},
      {"id": "bj47_tf2", "type": "tf", "prompt": "'You must do this now' is considered a diplomatic way to suggest a solution.", "answer": false, "hint": "É uma ordem direta, não uma sugestão diplomática."},
      {"id": "bj47_text1", "type": "text", "prompt": "Write two suggestions for reducing employee turnover, using 'One option would be to...' and 'Have you considered...?'", "keywords": ["one option", "have you considered", "reduce"], "hint": "Use ambas as estruturas indicadas para propor ideias diferentes."},
      {"id": "bj47_text2", "type": "text", "prompt": "Write a short response suggesting an alternative marketing strategy after the current one has failed.", "keywords": ["alternatively", "suggest", "instead", "try"], "hint": "Use 'Alternatively, we could...' para apresentar uma nova ideia."}
    ]
  },
  bj48: {
    context: "Concordar e discordar diplomaticamente evita conflitos desnecessários em ambientes profissionais. Expressões como 'I completely agree', 'I see your point, but...', 'I'm not sure I agree...' e 'That's a fair point, however...' permitem expressar opiniões com respeito.",
    acts: [
      {"id": "bj48_mc1", "type": "mc", "prompt": "Which phrase expresses strong agreement in a professional setting?", "options": ["I completely agree with your proposal.", "Whatever, I don't care.", "I guess that's fine, maybe.", "I have no opinion on anything."], "answerIdx": 0, "hint": "Expressa concordância total de forma clara e profissional."},
      {"id": "bj48_mc2", "type": "mc", "prompt": "Which phrase politely introduces a disagreement?", "options": ["You're completely wrong.", "I see your point, but I have a slightly different view.", "That's a stupid idea.", "I refuse to listen to you."], "answerIdx": 1, "hint": "Reconhece o ponto do outro antes de apresentar uma opinião diferente."},
      {"id": "bj48_mc3", "type": "mc", "prompt": "Complete: 'I'm not ___ I agree with that approach, to be honest.'", "options": ["sure", "surely", "assured", "assuring"], "answerIdx": 0, "hint": "'Not sure' expressa dúvida educada sobre uma ideia."},
      {"id": "bj48_fill1", "type": "fill", "prompt": "Complete: 'I completely ___ with your assessment of the market.'", "answer": "agree", "keywords": ["agree"], "hint": "Verbo que expressa concordância total."},
      {"id": "bj48_fill2", "type": "fill", "prompt": "Complete: 'I see your ___, but I think we should also consider the long-term costs.'", "answer": "point", "keywords": ["point"], "hint": "Substantivo usado para reconhecer o argumento de outra pessoa."},
      {"id": "bj48_fill3", "type": "fill", "prompt": "Complete: 'That's a ___ point, however I still believe we need more data.'", "answer": "fair", "keywords": ["fair", "valid"], "hint": "Adjetivo que reconhece que o argumento é razoável."},
      {"id": "bj48_tf1", "type": "tf", "prompt": "'I see your point, but...' is a diplomatic way to introduce a disagreement.", "answer": true, "hint": "Reconhece o argumento antes de apresentar uma visão diferente."},
      {"id": "bj48_tf2", "type": "tf", "prompt": "'You're completely wrong' is considered a diplomatic way to disagree in business English.", "answer": false, "hint": "É uma forma direta e potencialmente ofensiva de discordar."},
      {"id": "bj48_text1", "type": "text", "prompt": "Write a short dialogue where one person disagrees diplomatically with a colleague's proposal, using 'I see your point, but...'", "keywords": ["I see your point", "but", "however"], "hint": "Reconheça o argumento antes de apresentar sua opinião diferente."},
      {"id": "bj48_text2", "type": "text", "prompt": "Write a response expressing partial agreement with a budget proposal, mentioning one specific concern.", "keywords": ["agree", "however", "concern", "reservation"], "hint": "Combine concordância parcial com uma ressalva específica."}
    ]
  },
  bj49: {
    context: "Vocabulário de tomada de decisão inclui termos como 'pros and cons', 'trade-off', 'feasible', 'viable', 'drawback' e 'weigh the options'. Esse vocabulário é essencial para discutir e justificar decisões de negócios em inglês.",
    acts: [
      {"id": "bj49_mc1", "type": "mc", "prompt": "What does 'weigh the pros and cons' mean?", "options": ["To physically weigh objects on a scale", "To carefully consider the advantages and disadvantages of something", "To ignore all the options", "To choose randomly without thinking"], "answerIdx": 1, "hint": "É analisar cuidadosamente os pontos positivos e negativos antes de decidir."},
      {"id": "bj49_mc2", "type": "mc", "prompt": "What is a 'trade-off' in decision-making?", "options": ["A free gift included in a deal", "A balance between two desirable but conflicting things", "A type of financial loan", "A legal document"], "answerIdx": 1, "hint": "'Trade-off' é o equilíbrio entre ganhar algo e perder outra coisa ao mesmo tempo."},
      {"id": "bj49_mc3", "type": "mc", "prompt": "What does 'feasible' mean?", "options": ["Impossible to achieve", "Expensive beyond budget", "Able to be done successfully; practical", "Illegal or against regulations"], "answerIdx": 2, "hint": "'Feasible' significa algo que é possível de ser realizado na prática."},
      {"id": "bj49_fill1", "type": "fill", "prompt": "Complete: 'Let's carefully ___ the pros and cons before signing the contract.'", "answer": "weigh", "keywords": ["weigh", "consider"], "hint": "Verbo que significa analisar cuidadosamente as opções."},
      {"id": "bj49_fill2", "type": "fill", "prompt": "Complete: 'There is a clear ___ between cost and quality in this proposal.'", "answer": "trade-off", "keywords": ["trade-off", "tradeoff"], "hint": "Termo que descreve um equilíbrio entre dois fatores conflitantes."},
      {"id": "bj49_fill3", "type": "fill", "prompt": "Complete: 'Is this plan financially ___ given our current budget?'", "answer": "feasible", "keywords": ["feasible", "viable"], "hint": "Adjetivo que indica se algo é praticável ou realizável."},
      {"id": "bj49_tf1", "type": "tf", "prompt": "'Feasible' means something is practical and possible to achieve.", "answer": true, "hint": "É um adjetivo usado para descrever planos realizáveis."},
      {"id": "bj49_tf2", "type": "tf", "prompt": "A 'drawback' refers to a positive aspect or advantage of a decision.", "answer": false, "hint": "'Drawback' é uma desvantagem, não um ponto positivo."},
      {"id": "bj49_text1", "type": "text", "prompt": "Write a short paragraph weighing the pros and cons of working remotely versus in an office.", "keywords": ["pros", "cons", "however", "benefit", "drawback"], "hint": "Liste pelo menos um ponto positivo e um negativo para cada opção."},
      {"id": "bj49_text2", "type": "text", "prompt": "Describe a business decision that involves a trade-off between cost and quality.", "keywords": ["trade-off", "cost", "quality", "however"], "hint": "Explique o que se ganha e o que se perde nessa escolha."}
    ]
  },
  bj50: {
    context: "Analisar um estudo de caso em inglês envolve identificar o problema central, examinar causas, avaliar opções e propor uma recomendação estruturada. Frases como 'The main issue in this case is...', 'Based on the evidence...' e 'Therefore, I recommend...' organizam essa análise.",
    acts: [
      {"id": "bj50_mc1", "type": "mc", "prompt": "Which sentence correctly identifies the central issue in a case study?", "options": ["The main issue in this case is declining customer retention.", "This case has no issue at all.", "I don't understand cases.", "Cases are always boring."], "answerIdx": 0, "hint": "Frase objetiva que nomeia claramente o problema central do caso."},
      {"id": "bj50_mc2", "type": "mc", "prompt": "Which phrase is used to support an argument with facts from the case?", "options": ["Based on the evidence provided, sales dropped by 20% after the price increase.", "I just feel like this is true.", "Evidence doesn't matter here.", "Maybe, who knows."], "answerIdx": 0, "hint": "'Based on the evidence' conecta a análise a dados concretos do caso."},
      {"id": "bj50_mc3", "type": "mc", "prompt": "Which phrase introduces a final recommendation in a case analysis?", "options": ["Therefore, I recommend restructuring the sales team.", "I don't have any recommendation.", "This doesn't matter.", "Whatever happens, happens."], "answerIdx": 0, "hint": "'Therefore, I recommend...' conclui a análise com uma sugestão clara."},
      {"id": "bj50_fill1", "type": "fill", "prompt": "Complete: 'The main ___ in this case is a sharp decline in employee morale.'", "answer": "issue", "keywords": ["issue", "problem"], "hint": "Substantivo usado para identificar o problema central do caso."},
      {"id": "bj50_fill2", "type": "fill", "prompt": "Complete: 'Based on the ___ provided, the company lost two major clients last year.'", "answer": "evidence", "keywords": ["evidence", "data", "information"], "hint": "Substantivo que se refere aos dados ou fatos apresentados no caso."},
      {"id": "bj50_fill3", "type": "fill", "prompt": "Complete: '___, I recommend investing in employee training programs.'", "answer": "Therefore", "keywords": ["Therefore", "Thus", "Consequently"], "hint": "Advérbio que introduz uma conclusão baseada na análise anterior."},
      {"id": "bj50_tf1", "type": "tf", "prompt": "A case study analysis should begin by clearly identifying the main problem.", "answer": true, "hint": "É essencial entender o problema antes de propor soluções."},
      {"id": "bj50_tf2", "type": "tf", "prompt": "'Based on the evidence' means a conclusion is supported by facts from the case.", "answer": true, "hint": "Indica que a análise se baseia em dados concretos, não em opinião pessoal."},
      {"id": "bj50_text1", "type": "text", "prompt": "Read this mini case: 'A retail company's online sales dropped 30% after switching to a new payment platform that frequently crashes.' Identify the main issue and one contributing factor.", "keywords": ["main issue", "contributing factor", "payment", "crashes"], "hint": "Separe claramente o problema central da causa que o originou."},
      {"id": "bj50_text2", "type": "text", "prompt": "Based on the case in the previous question, write a recommendation using 'Therefore, I recommend...'", "keywords": ["therefore", "recommend", "fix", "platform"], "hint": "Conecte sua recomendação diretamente ao problema identificado."}
    ]
  },
  bj51: {
    context: "Culturas de alto e baixo contexto se comunicam de formas diferentes nos negócios. Em culturas de alto contexto (Japão, China), a comunicação é indireta e depende de contexto e relacionamento. Em culturas de baixo contexto (EUA, Alemanha), a comunicação é direta e explícita.",
    acts: [
      {"id": "bj51_mc1", "type": "mc", "prompt": "In a high-context culture, communication tends to be...", "options": ["Direct and explicit", "Indirect and reliant on shared context and non-verbal cues", "Always written, never spoken", "Completely irrelevant to business"], "answerIdx": 1, "hint": "Culturas de alto contexto comunicam muito através de contexto, tom e relacionamento."},
      {"id": "bj51_mc2", "type": "mc", "prompt": "Which country is typically considered a low-context business culture?", "options": ["Japan", "Germany", "China", "South Korea"], "answerIdx": 1, "hint": "A Alemanha é conhecida por comunicação direta e explícita nos negócios."},
      {"id": "bj51_mc3", "type": "mc", "prompt": "In a low-context culture, a business message would most likely be...", "options": ["Vague, relying on the listener to infer the meaning", "Clear, direct, and explicitly stated", "Never put in writing", "Communicated only through body language"], "answerIdx": 1, "hint": "Baixo contexto favorece clareza e explicitação direta da mensagem."},
      {"id": "bj51_fill1", "type": "fill", "prompt": "Complete: 'In high-context cultures, meaning is often implied rather than stated ___.'", "answer": "explicitly", "keywords": ["explicitly", "directly"], "hint": "Advérbio que indica algo dito de forma clara e direta."},
      {"id": "bj51_fill2", "type": "fill", "prompt": "Complete: 'Low-context cultures generally value ___ and directness in business communication.'", "answer": "clarity", "keywords": ["clarity", "directness"], "hint": "Substantivo que expressa a qualidade de ser claro e compreensível."},
      {"id": "bj51_fill3", "type": "fill", "prompt": "Complete: 'In many high-context cultures, ___ relationships often come before discussing business details.'", "answer": "personal", "keywords": ["personal"], "hint": "Adjetivo relacionado a conexões pessoais, não profissionais."},
      {"id": "bj51_tf1", "type": "tf", "prompt": "In high-context cultures, communication relies heavily on implicit messages and shared understanding.", "answer": true, "hint": "Culturas de alto contexto comunicam muito através de contexto e relacionamento."},
      {"id": "bj51_tf2", "type": "tf", "prompt": "Low-context cultures generally prefer vague, indirect communication over explicit statements.", "answer": false, "hint": "Culturas de baixo contexto preferem mensagens claras e diretas."},
      {"id": "bj51_text1", "type": "text", "prompt": "Explain, in your own words, the main difference between high-context and low-context communication styles.", "keywords": ["high-context", "low-context", "direct", "implicit"], "hint": "Compare como cada estilo transmite significado — explícito versus implícito."},
      {"id": "bj51_text2", "type": "text", "prompt": "Describe a situation where a misunderstanding could occur between a high-context and a low-context business partner.", "keywords": ["misunderstanding", "direct", "indirect", "context"], "hint": "Pense em como uma mensagem direta pode ser mal interpretada por alguém acostumado a comunicação indireta."}
    ]
  },
  bj52: {
    context: "O inglês americano e o britânico têm diferenças de vocabulário, ortografia e expressões nos negócios. Exemplos: 'resume' (EUA) vs 'CV' (RU), 'vacation' vs 'holiday', 'elevator' vs 'lift', '-ize' vs '-ise' na ortografia, e diferenças no formato de datas.",
    acts: [
      {"id": "bj52_mc1", "type": "mc", "prompt": "What is the British English equivalent of the American word 'resume' (for a job application document)?", "options": ["Profile", "CV", "Bio", "Portfolio"], "answerIdx": 1, "hint": "No Reino Unido, 'CV' (curriculum vitae) é o termo mais comum."},
      {"id": "bj52_mc2", "type": "mc", "prompt": "Which word is used in American English to describe time off from work, while British English typically uses 'holiday'?", "options": ["Vacation", "Recess", "Furlough", "Sabbatical"], "answerIdx": 0, "hint": "Americanos usam 'vacation'; britânicos usam 'holiday'."},
      {"id": "bj52_mc3", "type": "mc", "prompt": "Which spelling is standard in British English?", "options": ["Organize", "Organise", "Organizeing", "Organizd"], "answerIdx": 1, "hint": "O inglês britânico frequentemente usa '-ise' em vez de '-ize'."},
      {"id": "bj52_fill1", "type": "fill", "prompt": "Complete (American English): 'Please send me your updated ___ for the job application.'", "answer": "resume", "keywords": ["resume", "résumé"], "hint": "Termo americano para o documento com histórico profissional."},
      {"id": "bj52_fill2", "type": "fill", "prompt": "Complete (British English): 'Please send me your updated ___ for the job application.'", "answer": "CV", "keywords": ["CV", "curriculum vitae"], "hint": "Termo britânico para o documento com histórico profissional."},
      {"id": "bj52_fill3", "type": "fill", "prompt": "Complete (American English spelling): 'We need to ___ this project by next quarter.' (organize)", "answer": "organize", "keywords": ["organize"], "hint": "Grafia americana usa '-ize'."},
      {"id": "bj52_tf1", "type": "tf", "prompt": "'Resume' is the American English term, while 'CV' is more commonly used in British English.", "answer": true, "hint": "Ambos os termos descrevem o mesmo tipo de documento, mas variam por região."},
      {"id": "bj52_tf2", "type": "tf", "prompt": "'Vacation' and 'holiday' mean exactly the same thing but are used in American and British English respectively.", "answer": true, "hint": "São sinônimos regionais para o mesmo conceito de férias."},
      {"id": "bj52_text1", "type": "text", "prompt": "Write a short paragraph listing three vocabulary differences between American and British business English.", "keywords": ["resume", "CV", "vacation", "holiday"], "hint": "Pense em pares como resume/CV, vacation/holiday, elevator/lift."},
      {"id": "bj52_text2", "type": "text", "prompt": "Rewrite this sentence in British English: 'I'll take the elevator down and email you my resume before my vacation.'", "keywords": ["lift", "CV", "holiday"], "hint": "Substitua os termos americanos pelos equivalentes britânicos."}
    ]
  },
  bj53: {
    context: "Costumes de gorjeta, pontualidade e etiqueta variam bastante entre países de língua inglesa. Nos EUA, gorjetas de 15-20% são esperadas; no Reino Unido, gorjetas são menores ou opcionais. Pontualidade também tem expectativas diferentes: extremamente rígida na Alemanha e no Japão, mais flexível em outros lugares.",
    acts: [
      {"id": "bj53_mc1", "type": "mc", "prompt": "In the United States, what is the typical tipping range at restaurants?", "options": ["No tipping is expected at all", "15-20% of the bill", "1-2% of the bill", "Tipping is illegal"], "answerIdx": 1, "hint": "Nos EUA, gorjetas entre 15% e 20% são culturalmente esperadas em restaurantes."},
      {"id": "bj53_mc2", "type": "mc", "prompt": "Compared to the US, how is tipping generally viewed in the United Kingdom?", "options": ["Mandatory and much higher than in the US", "Smaller, optional, and less expected", "Illegal in all circumstances", "Exactly identical to US customs"], "answerIdx": 1, "hint": "No Reino Unido, gorjetas costumam ser menores e mais opcionais do que nos EUA."},
      {"id": "bj53_mc3", "type": "mc", "prompt": "Which statement about punctuality in German business culture is accurate?", "options": ["Being even a few minutes late is generally considered disrespectful.", "Arriving an hour late is completely normal and expected.", "Meetings never have a set start time.", "Punctuality is not valued at all."], "answerIdx": 0, "hint": "Na Alemanha, pontualidade é levada muito a sério nos negócios."},
      {"id": "bj53_fill1", "type": "fill", "prompt": "Complete: 'In the US, it's customary to leave a ___ of around 15-20% at restaurants.'", "answer": "tip", "keywords": ["tip", "gratuity"], "hint": "Substantivo que se refere à quantia extra dada como agradecimento pelo serviço."},
      {"id": "bj53_fill2", "type": "fill", "prompt": "Complete: 'Being ___ for a business meeting is highly valued in German culture.'", "answer": "punctual", "keywords": ["punctual", "on time"], "hint": "Adjetivo que descreve alguém que chega no horário combinado."},
      {"id": "bj53_fill3", "type": "fill", "prompt": "Complete: 'Business ___ refers to the accepted rules of professional behavior in a given culture.'", "answer": "etiquette", "keywords": ["etiquette"], "hint": "Substantivo que descreve normas de comportamento educado."},
      {"id": "bj53_tf1", "type": "tf", "prompt": "A 15-20% tip is generally expected at restaurants in the United States.", "answer": true, "hint": "É a faixa padrão de gorjeta esperada nos EUA."},
      {"id": "bj53_tf2", "type": "tf", "prompt": "Tipping customs are exactly the same in every English-speaking country.", "answer": false, "hint": "As práticas de gorjeta variam bastante entre países como EUA, Reino Unido e Austrália."},
      {"id": "bj53_text1", "type": "text", "prompt": "Write a short paragraph comparing tipping customs in the US and the UK.", "keywords": ["tip", "US", "UK", "optional"], "hint": "Compare a porcentagem esperada e o grau de obrigatoriedade em cada país."},
      {"id": "bj53_text2", "type": "text", "prompt": "Describe how punctuality expectations might differ between a business meeting in Germany and one in a more flexible culture.", "keywords": ["punctual", "flexible", "meeting", "expectation"], "hint": "Explique como o mesmo atraso pode ser visto de formas diferentes."}
    ]
  },
  bj54: {
    context: "Evitar mal-entendidos culturais no trabalho exige sensibilidade, escuta e evitar generalizações. Frases como 'I want to make sure I understand your perspective', 'In my experience...' e 'Could you help me understand how this is typically done in your culture?' ajudam a esclarecer diferenças com respeito.",
    acts: [
      {"id": "bj54_mc1", "type": "mc", "prompt": "Which phrase helps clarify a cultural difference respectfully during a meeting?", "options": ["That's a strange way to do things.", "Could you help me understand how this is typically done in your culture?", "Your way is definitely wrong.", "We don't do it like that, so change it."], "answerIdx": 1, "hint": "A pergunta demonstra curiosidade genuína e respeito, sem julgamento."},
      {"id": "bj54_mc2", "type": "mc", "prompt": "What is a 'stereotype' in the context of cross-cultural communication?", "options": ["A specific, accurate fact about one individual", "An oversimplified and often inaccurate generalization about a group of people", "A legal business document", "A type of contract clause"], "answerIdx": 1, "hint": "Estereótipos são generalizações simplificadas que nem sempre refletem a realidade individual."},
      {"id": "bj54_mc3", "type": "mc", "prompt": "Which behavior helps avoid cultural misunderstandings at work?", "options": ["Assuming everyone shares your own cultural norms", "Asking clarifying questions when something is unclear", "Ignoring differences and hoping for the best", "Making jokes about cultural stereotypes"], "answerIdx": 1, "hint": "Perguntar quando algo não está claro evita interpretações erradas."},
      {"id": "bj54_fill1", "type": "fill", "prompt": "Complete: 'I want to make sure I ___ your perspective correctly before we continue.'", "answer": "understand", "keywords": ["understand"], "hint": "Verbo que expressa o desejo de compreender o ponto de vista do outro."},
      {"id": "bj54_fill2", "type": "fill", "prompt": "Complete: 'Could you help me ___ how this is usually handled in your team?'", "answer": "understand", "keywords": ["understand"], "hint": "Verbo usado para pedir esclarecimento de forma educada."},
      {"id": "bj54_fill3", "type": "fill", "prompt": "Complete: 'A ___ is an oversimplified belief about a group of people.'", "answer": "stereotype", "keywords": ["stereotype", "generalization"], "hint": "Substantivo que descreve uma generalização simplificada e muitas vezes imprecisa."},
      {"id": "bj54_tf1", "type": "tf", "prompt": "Assuming everyone shares your own cultural norms is a good way to avoid misunderstandings.", "answer": false, "hint": "Essa suposição frequentemente causa, em vez de evitar, mal-entendidos."},
      {"id": "bj54_tf2", "type": "tf", "prompt": "Asking clarifying questions can help prevent cultural misunderstandings at work.", "answer": true, "hint": "Perguntar evita interpretações erradas baseadas em suposições."},
      {"id": "bj54_text1", "type": "text", "prompt": "Write a short dialogue in which a colleague respectfully asks about a cultural practice they don't understand.", "keywords": ["could you help me understand", "curious", "perspective"], "hint": "Use uma pergunta respeitosa como 'Could you help me understand...?'"},
      {"id": "bj54_text2", "type": "text", "prompt": "Describe a situation where making an assumption about someone's culture could lead to a misunderstanding at work.", "keywords": ["assume", "misunderstanding", "stereotype"], "hint": "Pense em uma situação onde uma suposição gerou um mal-entendido."}
    ]
  },
  bj55: {
    context: "Pesquisar um costume de negócios de um país anglófono desenvolve leitura e compreensão em inglês sobre etiqueta profissional. Países como Estados Unidos, Reino Unido, Canadá, Austrália, Irlanda e Nova Zelândia têm práticas distintas de saudação, hierarquia, reuniões e comunicação no ambiente de trabalho.",
    acts: [
      {"id": "bj55_mc1", "type": "mc", "prompt": "Read: 'In New Zealand business culture, meetings often begin with informal small talk, and hierarchy is generally downplayed compared to more formal cultures.' What does 'downplayed' mean here?", "options": ["Emphasized strongly", "Given less importance", "Illegal", "Increased significantly"], "answerIdx": 1, "hint": "'Downplay' significa reduzir a importância de algo."},
      {"id": "bj55_mc2", "type": "mc", "prompt": "Read: 'In Canadian workplaces, politeness and consensus-building are highly valued, and direct confrontation is generally avoided.' What is 'consensus-building'?", "options": ["Forcing a decision without discussion", "Working to reach general agreement among a group", "Ignoring other people's opinions", "A type of financial report"], "answerIdx": 1, "hint": "'Consensus-building' é o processo de buscar acordo geral entre as pessoas."},
      {"id": "bj55_mc3", "type": "mc", "prompt": "Read: 'In Irish business culture, humor is often used to ease tension, even during serious discussions.' What is the purpose of humor in this context?", "options": ["To offend colleagues", "To reduce tension and build connection", "To end the meeting early", "To avoid working"], "answerIdx": 1, "hint": "O humor é usado para tornar situações tensas mais leves e humanas."},
      {"id": "bj55_fill1", "type": "fill", "prompt": "Complete: 'In British business culture, ___ is common; problems are often described more mildly than they really are.'", "answer": "understatement", "keywords": ["understatement"], "hint": "Palavra que descreve a prática de suavizar a descrição de algo sério."},
      {"id": "bj55_fill2", "type": "fill", "prompt": "Complete: 'A flat ___ means fewer formal levels of authority between employees and leaders.'", "answer": "hierarchy", "keywords": ["hierarchy"], "hint": "Substantivo que se refere à estrutura de autoridade em uma organização."},
      {"id": "bj55_fill3", "type": "fill", "prompt": "Complete: 'In many English-speaking cultures, ___ is seen as a sign of respect for other people's time.'", "answer": "punctuality", "keywords": ["punctuality"], "hint": "Substantivo que descreve o hábito de chegar no horário combinado."},
      {"id": "bj55_tf1", "type": "tf", "prompt": "'Understatement' in British culture means describing something as more serious than it actually is.", "answer": false, "hint": "'Understatement' é descrever algo como menos sério do que realmente é."},
      {"id": "bj55_tf2", "type": "tf", "prompt": "A 'flat hierarchy' generally means there are fewer formal levels of authority between staff and leadership.", "answer": true, "hint": "Hierarquias planas reduzem as camadas formais de autoridade."},
      {"id": "bj55_text1", "type": "text", "prompt": "Choose one English-speaking country (not your own) and write 4-5 sentences describing a business custom you would research, such as greetings, meeting style, or hierarchy.", "keywords": ["custom", "country", "meeting", "greeting"], "hint": "Escolha um país específico e descreva um costume de negócios de forma clara."},
      {"id": "bj55_text2", "type": "text", "prompt": "Explain what you would want to learn about punctuality norms before attending a business meeting in a new country.", "keywords": ["punctuality", "research", "norms", "expect"], "hint": "Pense em perguntas específicas sobre horários e expectativas locais."}
    ]
  },
  bj56: {
    context: "Linguagem diplomática avançada usa hedging e estruturas indiretas para comunicar discordância ou críticas com respeito. Frases como 'I appreciate your perspective, however...', 'While I understand your point, I wonder if...' e 'It might be worth considering...' são essenciais em negociações delicadas.",
    acts: [
      {"id": "bj56_mc1", "type": "mc", "prompt": "Which sentence best demonstrates advanced diplomatic language to disagree?", "options": ["I appreciate your perspective, however I see this differently.", "You're wrong and I'm right.", "I don't care what you think.", "That's a bad idea, period."], "answerIdx": 0, "hint": "A frase reconhece o ponto de vista do outro antes de apresentar uma visão diferente."},
      {"id": "bj56_mc2", "type": "mc", "prompt": "What is 'hedging' in diplomatic language?", "options": ["Planting bushes around an office", "Using cautious or indirect language to soften a statement", "Speaking as loudly as possible", "Refusing to communicate at all"], "answerIdx": 1, "hint": "'Hedging' significa suavizar uma afirmação usando linguagem cautelosa."},
      {"id": "bj56_mc3", "type": "mc", "prompt": "Complete: 'While I understand your point, I ___ if there might be a more cost-effective approach.'", "options": ["wonder", "wondering", "wonders", "wondered"], "answerIdx": 0, "hint": "Presente simples na primeira pessoa: 'I wonder'."},
      {"id": "bj56_fill1", "type": "fill", "prompt": "Complete: 'I ___ your perspective, however I believe we should explore other options.'", "answer": "appreciate", "keywords": ["appreciate"], "hint": "Verbo usado para reconhecer respeitosamente o ponto de vista de alguém."},
      {"id": "bj56_fill2", "type": "fill", "prompt": "Complete: 'While I understand your point, I ___ if a phased approach might work better.'", "answer": "wonder", "keywords": ["wonder"], "hint": "Verbo que introduz uma sugestão de forma indireta e cautelosa."},
      {"id": "bj56_fill3", "type": "fill", "prompt": "Complete: 'It ___ be worth considering a longer timeline for this project.'", "answer": "might", "keywords": ["might", "could"], "hint": "Modal verb que suaviza a afirmação, tornando-a uma possibilidade."},
      {"id": "bj56_tf1", "type": "tf", "prompt": "'I appreciate your perspective, however...' is an example of diplomatic hedging language.", "answer": true, "hint": "A frase reconhece o outro ponto de vista antes de introduzir uma opinião diferente."},
      {"id": "bj56_tf2", "type": "tf", "prompt": "Hedging language always makes a statement sound more aggressive and direct.", "answer": false, "hint": "O hedging suaviza a afirmação, tornando-a menos direta e agressiva."},
      {"id": "bj56_text1", "type": "text", "prompt": "Rewrite this blunt statement using advanced diplomatic language: 'Your plan has too many flaws and won't work.'", "keywords": ["appreciate", "however", "perhaps", "reservations"], "hint": "Use estruturas como 'I appreciate your effort, however...' para suavizar."},
      {"id": "bj56_text2", "type": "text", "prompt": "Write a diplomatic response disagreeing with a business partner's proposed pricing strategy during a high-stakes negotiation.", "keywords": ["appreciate", "however", "concern", "perspective"], "hint": "Reconheça o esforço do parceiro antes de apresentar sua preocupação."}
    ]
  },
  bj57: {
    context: "Resumos executivos e memorandos exigem estrutura clara e linguagem concisa. Um memo geralmente inclui 'To:', 'From:', 'Date:', 'Re:' e um corpo objetivo. Um resumo executivo condensa o propósito, principais achados e recomendações de um documento maior em poucos parágrafos.",
    acts: [
      {"id": "bj57_mc1", "type": "mc", "prompt": "What are the four standard header elements of a business memo?", "options": ["To, From, Date, Re", "Name, Age, Address, Phone", "Title, Author, Price, ISBN", "Subject, Body, Footer, Signature"], "answerIdx": 0, "hint": "Um memo formal geralmente começa com esses quatro campos padrão."},
      {"id": "bj57_mc2", "type": "mc", "prompt": "What does 'Re:' typically mean in a memo header?", "options": ["Reply required", "Regarding / subject of the memo", "Return to sender", "Recently edited"], "answerIdx": 1, "hint": "'Re:' indica o assunto principal do memorando."},
      {"id": "bj57_mc3", "type": "mc", "prompt": "Which sentence is appropriate for the opening of an executive summary?", "options": ["This report examines the causes of declining customer retention and proposes solutions.", "Once upon a time, there was a company.", "This document doesn't really have a purpose.", "Read the whole report to find out what it's about."], "answerIdx": 0, "hint": "Uma boa abertura declara claramente o objetivo do relatório."},
      {"id": "bj57_fill1", "type": "fill", "prompt": "Complete the memo header: 'To: All Staff / From: HR Department / Date: July 8 / ___: New Remote Work Policy'", "answer": "Re", "keywords": ["Re", "Subject"], "hint": "Campo padrão que indica o assunto do memorando."},
      {"id": "bj57_fill2", "type": "fill", "prompt": "Complete: 'This report ___ the main findings on customer satisfaction trends.'", "answer": "examines", "keywords": ["examines", "analyzes", "summarizes"], "hint": "Verbo comum usado na abertura de um resumo executivo."},
      {"id": "bj57_fill3", "type": "fill", "prompt": "Complete: 'The ___ of this memo is to inform employees about the office relocation.'", "answer": "purpose", "keywords": ["purpose", "aim"], "hint": "Substantivo que indica o objetivo principal do documento."},
      {"id": "bj57_tf1", "type": "tf", "prompt": "A standard business memo header typically includes To, From, Date, and Re.", "answer": true, "hint": "Esses são os quatro campos padrão de um memorando formal."},
      {"id": "bj57_tf2", "type": "tf", "prompt": "An executive summary should be written before the full report is completed.", "answer": false, "hint": "O resumo executivo é escrito depois da conclusão do relatório completo."},
      {"id": "bj57_text1", "type": "text", "prompt": "Write a memo header (To, From, Date, Re) for a memo announcing a change in office hours.", "keywords": ["To", "From", "Date", "Re"], "hint": "Use os quatro campos padrão de um memorando."},
      {"id": "bj57_text2", "type": "text", "prompt": "Write the opening paragraph of an executive summary for a report on employee remote work satisfaction.", "keywords": ["report examines", "purpose", "findings"], "hint": "Comece declarando o objetivo do relatório claramente."}
    ]
  },
  bj58: {
    context: "Comunicação em crise exige reconhecer o problema publicamente, assumir responsabilidade e tranquilizar as partes interessadas. Frases como 'We take full responsibility...', 'We sincerely apologize for...', 'We are taking immediate steps to...' e 'We understand your concerns...' ajudam a comunicar problemas de forma transparente e profissional.",
    acts: [
      {"id": "bj58_mc1", "type": "mc", "prompt": "Which sentence appropriately acknowledges a company's mistake during a crisis?", "options": ["We take full responsibility for this error and sincerely apologize.", "This wasn't really our fault.", "We don't owe anyone an explanation.", "Mistakes happen, get over it."], "answerIdx": 0, "hint": "Assumir responsabilidade claramente é essencial em comunicação de crise."},
      {"id": "bj58_mc2", "type": "mc", "prompt": "Which phrase reassures stakeholders that action is being taken?", "options": ["We are taking immediate steps to resolve this issue.", "We might do something eventually, who knows.", "Nothing will change.", "We refuse to take any action."], "answerIdx": 0, "hint": "A frase mostra compromisso com uma solução imediata."},
      {"id": "bj58_mc3", "type": "mc", "prompt": "Which is an appropriate opening line for a public statement addressing a data breach?", "options": ["We are aware of a security incident affecting some customer accounts and are actively investigating.", "Nothing happened, ignore the rumors.", "This is not a big deal.", "We don't want to talk about this."], "answerIdx": 0, "hint": "Reconhecer o incidente de forma transparente é o primeiro passo em uma crise."},
      {"id": "bj58_fill1", "type": "fill", "prompt": "Complete: 'We take full ___ for this mistake and are committed to making it right.'", "answer": "responsibility", "keywords": ["responsibility"], "hint": "Substantivo que expressa assumir a culpa por algo."},
      {"id": "bj58_fill2", "type": "fill", "prompt": "Complete: 'We sincerely ___ for the inconvenience this situation has caused.'", "answer": "apologize", "keywords": ["apologize"], "hint": "Verbo usado para pedir desculpas formalmente."},
      {"id": "bj58_fill3", "type": "fill", "prompt": "Complete: 'We are taking ___ steps to resolve this issue as quickly as possible.'", "answer": "immediate", "keywords": ["immediate", "urgent"], "hint": "Adjetivo que indica que a ação está sendo tomada sem demora."},
      {"id": "bj58_tf1", "type": "tf", "prompt": "'We take full responsibility for this error' is an appropriate way to acknowledge a mistake during a crisis.", "answer": true, "hint": "Assumir responsabilidade é essencial em comunicação de crise eficaz."},
      {"id": "bj58_tf2", "type": "tf", "prompt": "Delaying a public response for as long as possible is generally recommended in crisis communication.", "answer": false, "hint": "Respostas rápidas ajudam a manter a confiança e reduzir especulações."},
      {"id": "bj58_text1", "type": "text", "prompt": "Write a short public statement (4-5 sentences) addressing a product recall due to a safety issue, including an apology and corrective action.", "keywords": ["apologize", "responsibility", "immediate", "recall"], "hint": "Inclua reconhecimento do problema, desculpas e ação corretiva."},
      {"id": "bj58_text2", "type": "text", "prompt": "Write a message to employees explaining how the company is responding to negative media coverage, while maintaining a calm and confident tone.", "keywords": ["addressing", "transparent", "confident", "update"], "hint": "Mantenha um tom calmo e transparente, sem parecer defensivo."}
    ]
  },
  bj59: {
    context: "Compreender podcasts de negócios nativos exige reconhecer fala rápida, redução de sons, gírias corporativas e expressões idiomáticas usadas naturalmente. Estratégias como prever o tema, prestar atenção às palavras-chave e ouvir múltiplas vezes ajudam na compreensão.",
    acts: [
      {"id": "bj59_mc1", "type": "mc", "prompt": "In fast native speech, 'What do you want to do?' is often reduced to sound like...", "options": ["What do you wanna do?", "What did you do do?", "Where do you want to?", "What you doing want?"], "answerIdx": 0, "hint": "'Want to' é frequentemente reduzido para 'wanna' na fala natural."},
      {"id": "bj59_mc2", "type": "mc", "prompt": "A podcast host says: 'Let's circle back to that point later.' What does 'circle back' mean?", "options": ["To draw a circle", "To return to a topic later", "To end the podcast immediately", "To disagree strongly"], "answerIdx": 1, "hint": "'Circle back' significa retomar um assunto mais tarde."},
      {"id": "bj59_mc3", "type": "mc", "prompt": "Which listening strategy is most helpful before starting a business podcast episode?", "options": ["Reading the episode title and description to predict the topic", "Skipping the introduction entirely every time", "Only listening to the last five minutes", "Ignoring any unfamiliar vocabulary"], "answerIdx": 0, "hint": "Prever o tema com base no título ajuda a preparar o ouvinte para o conteúdo."},
      {"id": "bj59_fill1", "type": "fill", "prompt": "Complete: 'Let's ___ back to the marketing numbers in a few minutes.' (meaning: return to)", "answer": "circle", "keywords": ["circle"], "hint": "'Circle back' significa retomar um assunto mais tarde."},
      {"id": "bj59_fill2", "type": "fill", "prompt": "Complete: 'We're going to ___ into the quarterly results now.' (meaning: examine closely)", "answer": "dive", "keywords": ["dive"], "hint": "'Dive into' significa explorar algo em profundidade."},
      {"id": "bj59_fill3", "type": "fill", "prompt": "Complete: 'This regulation is a bit of a ___ area; it's not clearly defined.'", "answer": "grey", "keywords": ["grey", "gray"], "hint": "'Grey area' descreve uma situação ambígua ou pouco clara."},
      {"id": "bj59_tf1", "type": "tf", "prompt": "'Circle back' means to return to a topic later in the conversation.", "answer": true, "hint": "É uma expressão comum em reuniões e podcasts de negócios."},
      {"id": "bj59_tf2", "type": "tf", "prompt": "'Dive into' means to completely avoid discussing a topic.", "answer": false, "hint": "Na verdade, significa explorar um assunto em profundidade."},
      {"id": "bj59_text1", "type": "text", "prompt": "Explain what 'circle back to that' and 'dive into the numbers' mean, and write a sentence using each expression.", "keywords": ["circle back", "dive into", "return", "examine"], "hint": "Explique o significado e depois crie frases próprias usando as expressões."},
      {"id": "bj59_text2", "type": "text", "prompt": "Describe two strategies you could use to better understand a fast-paced native English business podcast.", "keywords": ["context", "predict", "notes", "repeat"], "hint": "Pense em estratégias como prever o tema, usar contexto ou ouvir novamente."}
    ]
  },
  bj60: {
    context: "A apresentação final reúne todas as habilidades do curso: estrutura, persuasão, dados, linguagem diplomática e fluência. Uma proposta de negócios completa inclui problema, solução, benefícios, dados de suporte, orçamento e um pedido claro (call to action) para Teacher Renata.",
    acts: [
      {"id": "bj60_mc1", "type": "mc", "prompt": "Which section should typically open a full business proposal presentation?", "options": ["The budget breakdown", "A clear statement of the problem being addressed", "A random anecdote unrelated to the topic", "The presenter's personal hobbies"], "answerIdx": 1, "hint": "Uma boa proposta começa apresentando claramente o problema a ser resolvido."},
      {"id": "bj60_mc2", "type": "mc", "prompt": "Which phrase is an effective way to introduce your proposed solution?", "options": ["Our proposed solution addresses this challenge by...", "I don't really have a solution.", "Solutions are not important here.", "Maybe something could work, who knows."], "answerIdx": 0, "hint": "A frase conecta diretamente a solução ao problema apresentado anteriormente."},
      {"id": "bj60_mc3", "type": "mc", "prompt": "Which element strengthens a business proposal's credibility?", "options": ["Vague, unsupported claims", "Supporting data and evidence, such as statistics or case studies", "Ignoring the audience's concerns", "Avoiding any numbers at all"], "answerIdx": 1, "hint": "Dados e evidências tornam a proposta mais convincente e confiável."},
      {"id": "bj60_fill1", "type": "fill", "prompt": "Complete: 'The main ___ our company currently faces is a decline in customer retention.'", "answer": "problem", "keywords": ["problem", "issue", "challenge"], "hint": "Substantivo usado para introduzir o problema central da proposta."},
      {"id": "bj60_fill2", "type": "fill", "prompt": "Complete: 'Our proposed ___ addresses this issue through a new loyalty program.'", "answer": "solution", "keywords": ["solution"], "hint": "Substantivo que se refere à resposta proposta para o problema."},
      {"id": "bj60_fill3", "type": "fill", "prompt": "Complete: 'This approach offers several key ___ , including cost savings and improved efficiency.'", "answer": "benefits", "keywords": ["benefits", "advantages"], "hint": "Substantivo que descreve os pontos positivos da solução proposta."},
      {"id": "bj60_tf1", "type": "tf", "prompt": "A strong business proposal presentation typically begins by clearly stating the problem being addressed.", "answer": true, "hint": "Apresentar o problema logo no início contextualiza toda a proposta."},
      {"id": "bj60_tf2", "type": "tf", "prompt": "Supporting data and evidence, like statistics, can strengthen the credibility of a business proposal.", "answer": true, "hint": "Dados concretos tornam a proposta mais convincente."},
      {"id": "bj60_text1", "type": "text", "prompt": "Write the opening statement of a full business proposal presentation, clearly identifying the problem your proposal addresses.", "keywords": ["problem", "currently", "facing", "address"], "hint": "Comece descrevendo objetivamente o problema que a proposta resolve."},
      {"id": "bj60_text2", "type": "text", "prompt": "Write a paragraph presenting your proposed solution and its main benefits, connecting it clearly to the problem.", "keywords": ["solution", "benefits", "addresses", "because"], "hint": "Conecte a solução diretamente ao problema e destaque pelo menos dois benefícios."}
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

export const DEFAULT_ACTIVITIES = { ...LEGACY_ACTIVITIES, ...CORE_GE, ...JOURNEY_CV }
export default DEFAULT_ACTIVITIES;
