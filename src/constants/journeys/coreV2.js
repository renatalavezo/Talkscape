// Core English — v2 (situated). Target: A1–B1, base content authored for A2.
// PHASE 3 MODEL: week 1 is complete; weeks 2–12 are an outline to validate the arc.
// Not wired into the UI yet.

export const CORE_V2_META = {
  id: 'core', format: 'situated', baseLevel: 'A2', range: ['A1', 'B1'],
  // One continuous setting across the journey: the student joins an online
  // community ("Coffee & English") and its members reappear week after week.
  setting: {
    en: 'You join Coffee & English, an online community where people from different countries use English to talk, help each other and make plans.',
    pt: 'Você entra no Coffee & English, uma comunidade online em que pessoas de vários países usam o inglês para conversar, se ajudar e combinar coisas.',
  },
}

// Arc of the 12 weeks: situation → what the student can do afterwards.
export const CORE_V2_OUTLINE = [
  { week: 1,  theme: { en: 'New group, new people',        pt: 'Grupo novo, gente nova' },
    canDo: { en: 'Introduce myself to a group and start a conversation', pt: 'Me apresentar a um grupo e começar uma conversa' } },
  { week: 2,  theme: { en: 'Finding a time to talk',       pt: 'Achando um horário para conversar' },
    canDo: { en: 'Talk about my routine and agree on a time to meet', pt: 'Falar da minha rotina e combinar um horário' } },
  { week: 3,  theme: { en: 'Coffee, food and ordering',    pt: 'Café, comida e pedidos' },
    canDo: { en: 'Order, ask about options and solve small problems with an order', pt: 'Fazer pedidos, perguntar opções e resolver pequenos problemas' } },
  { week: 4,  theme: { en: 'Where is it?',                 pt: 'Onde fica?' },
    canDo: { en: 'Understand and give directions, describe where things are', pt: 'Entender e dar direções, dizer onde as coisas ficam' } },
  { week: 5,  theme: { en: 'Home and neighbours',          pt: 'Casa e vizinhos' },
    canDo: { en: 'Describe my place and ask for or offer help', pt: 'Descrever onde moro e pedir ou oferecer ajuda' } },
  { week: 6,  theme: { en: 'Choosing and buying',          pt: 'Escolhendo e comprando' },
    canDo: { en: 'Compare options, ask questions and decide what to buy', pt: 'Comparar opções, fazer perguntas e decidir o que comprar' } },
  { week: 7,  theme: { en: 'What happened?',               pt: 'O que aconteceu?' },
    canDo: { en: 'Tell a short story about something that happened to me', pt: 'Contar uma história curta sobre algo que aconteceu comigo' } },
  { week: 8,  theme: { en: 'Plans and invitations',        pt: 'Planos e convites' },
    canDo: { en: 'Invite, accept, decline and change plans politely', pt: 'Convidar, aceitar, recusar e mudar planos com educação' } },
  { week: 9,  theme: { en: 'Not feeling well',             pt: 'Não estou me sentindo bem' },
    canDo: { en: 'Explain how I feel and understand simple advice', pt: 'Explicar como me sinto e entender conselhos simples' } },
  { week: 10, theme: { en: 'You should try it!',           pt: 'Você tem que experimentar!' },
    canDo: { en: 'Recommend something and explain why', pt: 'Recomendar algo e explicar por quê' } },
  { week: 11, theme: { en: 'Something went wrong',         pt: 'Algo deu errado' },
    canDo: { en: 'Explain a problem and negotiate a solution', pt: 'Explicar um problema e negociar uma solução' } },
  { week: 12, theme: { en: 'Looking back, looking ahead',  pt: 'Olhando para trás e para frente' },
    canDo: { en: 'Talk about my progress and plans — and see how my week-1 introduction has changed', pt: 'Falar do meu progresso e dos meus planos — e ver como minha apresentação da semana 1 mudou' } },
]

// Members of the community (recurring characters).
export const CORE_V2_PEOPLE = {
  Mia:   { from: 'Manchester, UK', note: 'group admin, primary school teacher' },
  Priya: { from: 'Pune, India',    note: 'nurse, often works at night, loves cooking' },
  Lucas: { from: 'Recife, Brazil', note: 'software developer, works from home, dog called Pipoca' },
  Kenji: { from: 'Osaka, Japan',   note: 'student, photography and hiking, a bit shy' },
}

const INTROS = [
  { from: 'Mia',   text: "Hi everyone! 👋 Welcome to Coffee & English. I'm Mia, I'm from Manchester and I'm the group admin. I'm a primary school teacher and I love board games. New members: please say hello and tell us one thing you want to do in English this year!" },
  { from: 'Priya', text: "Hello! I'm Priya. I live in Pune, India. I work as a nurse, so I often work at night 😴. In my free time I love cooking — ask me about curry! This year I want to watch a series in English without subtitles." },
  { from: 'Lucas', text: "Hey guys! Lucas here, from Recife. I'm a software developer and I work from home. I have a dog called Pipoca 🐶. I want to speak English in meetings with more confidence." },
  { from: 'Kenji', text: "Hi, nice to meet you all. My name is Kenji. I'm a student in Osaka. I'm into photography and hiking. I'm a bit shy, but I want to make friends from other countries." },
]

const MIA_VOICE = "Hi! It's Mia again. Welcome to the group! So, two things. First, this Saturday we have our first voice chat, at seven p.m., UK time. It's really informal — just coffee and conversation. Second, when you post your introduction, tell us where you're from, what you do, and one thing you love. And please, don't worry about mistakes. We're all learning! See you on Saturday."

const CHECK_INTRO = [
  { en: "Did I answer Mia's request (where I'm from, what I do, one thing I love, one goal)?", pt: 'Respondi ao pedido da Mia (de onde sou, o que faço, algo que amo, um objetivo)?' },
  { en: 'Is there a "hook" — something people can ask me about?', pt: 'Tem um "gancho" — algo sobre o que as pessoas podem me perguntar?' },
  { en: 'Did I use a/an before my job (I\'m a nurse)?', pt: 'Usei a/an antes da profissão (I\'m a nurse)?' },
  { en: 'Would a new friend know what to say to me?', pt: 'Uma pessoa nova saberia o que me responder?' },
]

export const CORE_V2_WEEK_1 = {
  week: 1,
  theme: CORE_V2_OUTLINE[0].theme,
  situation: {
    en: 'You have just joined Coffee & English. Everyone starts by introducing themselves — and the first voice chat is on Saturday.',
    pt: 'Você acabou de entrar no Coffee & English. Todo mundo começa se apresentando — e o primeiro bate-papo por voz é no sábado.',
  },
  canDo: [
    { en: 'I can understand short introductions and find people with something in common', pt: 'Consigo entender apresentações curtas e achar pessoas com algo em comum' },
    { en: 'I can introduce myself in writing and out loud, with a "hook" for conversation', pt: 'Consigo me apresentar por escrito e em voz alta, com um "gancho" para conversa' },
    { en: 'I can answer simple questions about me and keep a short conversation going', pt: 'Consigo responder perguntas simples sobre mim e manter uma conversa curta' },
  ],
  tasks: [

    // ── 1 ─────────────────────────────────────────────── ENTRAR + EXPLORAR
    {
      id: 'core.w1.a1', cat: 'reading',
      en: "Who's in the group?", pt: 'Quem está no grupo?',
      skills: ['reading', 'interaction'], moves: ['enter', 'explore'],
      purpose: { en: 'Get to know the people in the group and choose someone to talk to.', pt: 'Conhecer as pessoas do grupo e escolher alguém para conversar.' },
      situation: { en: 'Four members have already posted their introductions.', pt: 'Quatro membros já postaram suas apresentações.' },
      steps: [
        { id: 's1', kind: 'prepare', multi: true,
          say: { en: 'Before reading: what do people usually say when they introduce themselves in a group like this?', pt: 'Antes de ler: o que as pessoas costumam dizer quando se apresentam num grupo como esse?' },
          options: ['their name', 'where they are from', 'their job', 'their age', 'their hobbies', 'their phone number', 'what they want to do', 'how much they earn'],
          after: { en: "Let's see what these people actually say.", pt: 'Vamos ver o que essas pessoas realmente dizem.' } },
        { id: 's2', kind: 'engage',
          say: { en: 'Read the messages. Don\'t worry about every word — try to get to know each person.', pt: 'Leia as mensagens. Não se preocupe com cada palavra — tente conhecer cada pessoa.' },
          input: { type: 'messages', items: INTROS } },
        { id: 's3', kind: 'check', mode: 'match',
          say: { en: 'Who is it?', pt: 'Quem é?' },
          pairs: [
            { left: 'often works at night', right: 'Priya' },
            { left: 'has a pet', right: 'Lucas' },
            { left: 'organises the group', right: 'Mia' },
            { left: 'likes taking pictures', right: 'Kenji' },
          ],
          why: { en: 'Clues: "I work as a nurse, so I often work at night", "a dog called Pipoca", "the group admin", "I\'m into photography".', pt: 'Pistas: "I work as a nurse, so I often work at night", "a dog called Pipoca", "the group admin", "I\'m into photography".' } },
        { id: 's4', kind: 'check', mode: 'open-choice', saveAs: 'w1.buddy',
          say: { en: 'Who would you like to talk to first? Choose a person and a reason.', pt: 'Com quem você gostaria de conversar primeiro? Escolha uma pessoa e um motivo.' },
          options: ['Mia', 'Priya', 'Lucas', 'Kenji'],
          reasons: ['we have the same hobby', 'we have a similar goal', "I'm curious about their country", 'we have a similar job', 'they seem friendly'],
          after: { en: 'Keep this person in mind — you will write to them later this week.', pt: 'Guarde essa pessoa — você vai escrever para ela nesta semana.' } },
      ],
      bridge: { en: 'Next: look at how these introductions are built, so you can build yours.', pt: 'A seguir: veja como essas apresentações são construídas, para montar a sua.' },
      levels: {
        A1: {
          steps: {
            s2: { glossary: [
              { term: 'admin', pt: 'administradora do grupo' }, { term: 'nurse', pt: 'enfermeira' },
              { term: 'free time', pt: 'tempo livre' }, { term: 'without subtitles', pt: 'sem legendas' },
              { term: "I'm into", pt: 'eu curto / gosto muito de' }, { term: 'shy', pt: 'tímido' },
            ] },
            s4: { reasons: null },
          },
        },
        B1: {
          steps: {
            s3: { mode: 'choice', pairs: null,
              say: { en: 'Read between the lines.', pt: 'Leia nas entrelinhas.' },
              questions: [
                { text: 'Who might find it hard to join a voice chat in the evening?', options: [
                  { text: 'Priya', ok: true, why: { en: 'She works as a nurse and often works at night.', pt: 'Ela é enfermeira e costuma trabalhar à noite.' } },
                  { text: 'Lucas', why: { en: 'He works from home — his evenings are probably free.', pt: 'Ele trabalha de casa — as noites dele provavelmente estão livres.' } },
                  { text: 'Kenji', why: { en: 'He is shy, but nothing says he is busy.', pt: 'Ele é tímido, mas nada indica que esteja ocupado.' } } ] },
                { text: 'Why does Kenji say "I\'m a bit shy, but…"?', options: [
                  { text: 'To prepare people: he may be quiet, but he wants to connect', ok: true, why: { en: '"But" turns the weakness into an invitation.', pt: 'O "but" transforma a fraqueza num convite.' } },
                  { text: 'Because he does not want to talk to anyone', why: { en: 'Look at the end: he wants to make friends.', pt: 'Veja o final: ele quer fazer amigos.' } } ] },
              ] },
            s4: { reasons: null, write: true,
              say: { en: 'Who would you like to talk to first? Explain why in one sentence.', pt: 'Com quem você gostaria de conversar primeiro? Explique por quê em uma frase.' } },
          },
        },
        B2: {
          addSteps: [{ after: 's3', step: { id: 's3b', kind: 'check', mode: 'choice',
            say: { en: 'Which message sounds the most informal — and what makes it informal?', pt: 'Qual mensagem soa mais informal — e o que a torna informal?' },
            questions: [{ text: 'The most informal message is…', options: [
              { text: 'Lucas', ok: true, why: { en: '"Hey guys!", "Lucas here" — short, chatty openings.', pt: '"Hey guys!", "Lucas here" — aberturas curtas, de conversa.' } },
              { text: 'Kenji', why: { en: '"Nice to meet you all" is polite and a little formal.', pt: '"Nice to meet you all" é educado e um pouco formal.' } },
              { text: 'Mia', why: { en: 'Friendly, but she is the admin and gives instructions.', pt: 'Simpática, mas ela é a admin e dá instruções.' } } ] }] } }],
        },
      },
    },

    // ── 2 ─────────────────────────────────────────────── PERCEBER
    {
      id: 'core.w1.a2', cat: 'vocab',
      en: 'How a good introduction works', pt: 'Como funciona uma boa apresentação',
      skills: ['reading', 'writing'], moves: ['notice'],
      purpose: { en: 'Notice the parts of an introduction and the language people use — so you can build yours.', pt: 'Perceber as partes de uma apresentação e a língua que as pessoas usam — para montar a sua.' },
      situation: { en: 'Same messages, a closer look.', pt: 'As mesmas mensagens, olhando de perto.' },
      steps: [
        { id: 's1', kind: 'notice',
          say: { en: "Look at Priya's message in parts. What does each part do?", pt: 'Veja a mensagem da Priya em partes. O que cada parte faz?' },
          parts: [
            { label: { en: 'Hello', pt: 'Cumprimento' }, text: 'Hello!' },
            { label: { en: 'Who I am', pt: 'Quem sou' }, text: "I'm Priya. I live in Pune, India." },
            { label: { en: 'What I do', pt: 'O que faço' }, text: 'I work as a nurse, so I often work at night.' },
            { label: { en: 'Something personal + a hook', pt: 'Algo pessoal + um gancho' }, text: 'In my free time I love cooking — ask me about curry!' },
            { label: { en: 'My goal', pt: 'Meu objetivo' }, text: 'This year I want to watch a series in English without subtitles.' },
          ],
          insight: { en: 'A group introduction is not a form. Each part gives people something to talk to you about.', pt: 'Uma apresentação em grupo não é uma ficha cadastral. Cada parte dá às pessoas um assunto para conversar com você.' } },
        { id: 's2', kind: 'check', mode: 'order',
          say: { en: "Put Lucas's message back in order.", pt: 'Coloque a mensagem do Lucas de volta na ordem.' },
          items: ['Hey guys!', 'Lucas here, from Recife.', "I'm a software developer and I work from home.", 'I have a dog called Pipoca 🐶.', 'I want to speak English in meetings with more confidence.'],
          why: { en: 'Greeting → who → what I do → something personal → goal. Same plan as Priya.', pt: 'Cumprimento → quem → o que faço → algo pessoal → objetivo. O mesmo plano da Priya.' } },
        { id: 's3', kind: 'notice',
          say: { en: 'How do people talk about work and things they like?', pt: 'Como as pessoas falam de trabalho e do que gostam?' },
          examples: [
            { text: "I'm a nurse. / I'm a software developer.", mark: ['a'] },
            { text: 'I work as a nurse. / I work from home.', mark: ['work as', 'work from home'] },
            { text: 'I love cooking. / I love board games.', mark: ['love'] },
            { text: "I'm into photography and hiking.", mark: ["I'm into"] },
            { text: 'This year I want to watch a series without subtitles.', mark: ['want to'] },
          ],
          insight: { en: 'In English, jobs need a/an: "I\'m a nurse", not "I\'m nurse". After "love" and "I\'m into" you can use a thing (photography) or an -ing activity (cooking).', pt: 'Em inglês, profissão pede a/an: "I\'m a nurse", e não "I\'m nurse". Depois de "love" e "I\'m into" você pode usar uma coisa (photography) ou uma atividade com -ing (cooking).' } },
        { id: 's4', kind: 'check', mode: 'choice',
          say: { en: 'Which sounds natural?', pt: 'Qual soa natural?' },
          questions: [
            { text: 'Talking about your job:', options: [
              { text: "I'm a teacher.", ok: true, why: { en: 'Job + a/an.', pt: 'Profissão + a/an.' } },
              { text: "I'm teacher.", why: { en: 'In Portuguese "sou professora" has no article — in English it needs "a".', pt: 'Em português "sou professora" não tem artigo — em inglês precisa do "a".' } },
              { text: 'I work how teacher.', why: { en: '"Trabalho como" = "I work as".', pt: '"Trabalho como" = "I work as".' } } ] },
            { text: 'Talking about a hobby:', options: [
              { text: "I'm into hiking.", ok: true, why: { en: '"Be into" + -ing or a noun.', pt: '"Be into" + -ing ou um substantivo.' } },
              { text: 'I like of hiking.', why: { en: '"Gosto de" — but in English there is no "of": "I like hiking".', pt: '"Gosto de" — mas em inglês não tem "of": "I like hiking".' } } ] },
          ] },
        { id: 's5', kind: 'check', mode: 'choice',
          say: { en: 'Which sentence invites people to reply?', pt: 'Qual frase convida as pessoas a responder?' },
          questions: [{ text: 'A good hook is…', options: [
            { text: 'Ask me about curry!', ok: true, why: { en: 'It tells people exactly what to ask.', pt: 'Diz exatamente o que perguntar.' } },
            { text: 'I live in Pune.', why: { en: 'Useful information, but it does not invite a reply by itself.', pt: 'Informação útil, mas sozinha não convida resposta.' } } ] }] },
      ],
      bridge: { en: 'Next: hear Mia in a voice message and try your introduction out loud.', pt: 'A seguir: ouça a Mia numa mensagem de voz e teste sua apresentação em voz alta.' },
      levels: {
        A1: { steps: { s5: null } },
        B1: {
          steps: {
            s3: { insight: { en: 'Notice the softeners and connectors: "so I often work at night" (consequence), "I\'m a bit shy, but…" (contrast). They make an introduction sound like a person, not a list.', pt: 'Repare nos suavizadores e conectores: "so I often work at night" (consequência), "I\'m a bit shy, but…" (contraste). Eles fazem a apresentação soar como uma pessoa, não como uma lista.' },
              examples: [
                { text: 'I work as a nurse, so I often work at night.', mark: ['so'] },
                { text: "I'm a bit shy, but I want to make friends.", mark: ['a bit', 'but'] },
                { text: "I'm into photography — ask me about my favourite places!", mark: ["I'm into", 'ask me about'] },
              ] },
          },
        },
        B2: {
          addSteps: [{ after: 's5', step: { id: 's6', kind: 'notice',
            say: { en: 'Look at how Mia gives instructions without sounding bossy.', pt: 'Veja como a Mia dá instruções sem soar mandona.' },
            examples: [{ text: 'New members: please say hello and tell us one thing you want to do in English this year!', mark: ['please', 'tell us', '!'] }],
            insight: { en: 'Imperatives can sound friendly with "please", "us" (we are a group) and an inviting tone. Compare: "Introduce yourselves."', pt: 'O imperativo pode soar simpático com "please", "us" (somos um grupo) e um tom convidativo. Compare: "Introduce yourselves."' } } }],
        },
      },
    },

    // ── 3 ─────────────────────────────────────────────── ESCUTAR + EXPERIMENTAR (falar)
    {
      id: 'core.w1.a3', cat: 'listening',
      en: "Mia's voice message", pt: 'A mensagem de voz da Mia',
      skills: ['listening', 'speaking'], moves: ['explore', 'notice', 'try'],
      purpose: { en: "Understand what Mia asks new members to do — and rehearse your introduction for Saturday's voice chat.", pt: 'Entender o que a Mia pede aos novos membros — e ensaiar sua apresentação para o bate-papo de sábado.' },
      situation: { en: 'Mia sent a voice message to everyone who just joined.', pt: 'A Mia mandou uma mensagem de voz para quem acabou de entrar.' },
      steps: [
        { id: 's1', kind: 'prepare',
          say: { en: 'Before listening: what do you think Mia wants to tell new members?', pt: 'Antes de ouvir: o que você acha que a Mia quer dizer aos novos membros?' },
          options: ['the group rules', 'an event', 'how to introduce yourself', 'how to pay'] },
        { id: 's2', kind: 'engage',
          say: { en: 'Listen once without reading. Then answer. You can listen again.', pt: 'Ouça uma vez sem ler. Depois responda. Você pode ouvir de novo.' },
          input: { type: 'audio', script: MIA_VOICE, voice: 'en-GB', rate: 0.95, transcript: 'after' } },
        { id: 's3', kind: 'check', mode: 'choice',
          say: { en: 'What did Mia say?', pt: 'O que a Mia disse?' },
          questions: [
            { text: 'When is the voice chat?', options: [
              { text: 'Saturday, 7 p.m. UK time', ok: true, why: { en: '"This Saturday… at seven p.m., UK time." In Brazil that is in the afternoon.', pt: '"This Saturday… at seven p.m., UK time." No Brasil, isso é à tarde.' } },
              { text: 'Sunday, 7 p.m.', why: { en: 'Listen again for the day.', pt: 'Ouça de novo procurando o dia.' } },
              { text: 'Saturday, 11 a.m.', why: { en: 'Listen again for the time.', pt: 'Ouça de novo procurando o horário.' } } ] },
            { text: 'What should your introduction include? (Mia says three things)', multi: true, options: [
              { text: "where you're from", ok: true }, { text: 'what you do', ok: true }, { text: 'one thing you love', ok: true },
              { text: 'your age', why: { en: 'Mia did not ask for this.', pt: 'A Mia não pediu isso.' } } ] },
          ] },
        { id: 's4', kind: 'notice', speak: true,
          say: { en: 'Listen to how these sound. Notice the short forms and the strong words.', pt: 'Ouça como estas frases soam. Repare nas formas curtas e nas palavras fortes.' },
          examples: [
            { text: "I'm a NURSE from PUNE.", mark: ["I'm"] },
            { text: "It's REALLY inFORmal.", mark: ["It's"] },
            { text: "I WORK from HOME.", mark: [] },
          ],
          insight: { en: 'Speakers say "I\'m", "it\'s", not "I am", "it is". The important words (job, place, feelings) are louder and longer — that\'s what listeners catch.', pt: 'Falantes dizem "I\'m", "it\'s", e não "I am", "it is". As palavras importantes (profissão, lugar, sentimentos) são mais fortes e longas — é isso que quem ouve capta.' } },
        { id: 's5', kind: 'try', mode: 'speak',
          say: { en: 'Rehearse your introduction for Saturday. Follow the plan, record, listen, and record again if you want.', pt: 'Ensaie sua apresentação para sábado. Siga o plano, grave, ouça e grave de novo se quiser.' },
          frame: ['Hi, I\'m … I\'m from …', 'I\'m a/an … / I work as … / I study …', 'I love … / I\'m into …', 'This year I want to …'],
          model: "Hi, I'm Carla. I'm from Belo Horizonte. I'm a nurse, like Priya! I love dancing. This year I want to travel and talk to people in English.",
          selfCheck: [
            { en: 'Could someone understand my name and where I\'m from?', pt: 'Alguém entenderia meu nome e de onde sou?' },
            { en: 'Did I say "I\'m", not "I am"?', pt: 'Falei "I\'m", e não "I am"?' },
            { en: 'Did I say something people could ask me about?', pt: 'Disse algo sobre o que as pessoas poderiam me perguntar?' },
          ] },
      ],
      bridge: { en: 'You know what to say. Now post your introduction in the group.', pt: 'Você já sabe o que dizer. Agora poste sua apresentação no grupo.' },
      levels: {
        A1: {
          steps: {
            s2: { input: { type: 'audio', script: MIA_VOICE, voice: 'en-GB', rate: 0.8, transcript: 'toggle' },
              say: { en: 'Listen as many times as you need. You can show the text after the first time.', pt: 'Ouça quantas vezes precisar. Você pode mostrar o texto depois da primeira vez.' } },
            s5: { frame: ['Hi, I\'m …', 'I\'m from …', 'I\'m a/an …', 'I love …'] },
          },
        },
        B1: {
          steps: {
            s2: { input: { type: 'audio', script: MIA_VOICE, voice: 'en-GB', rate: 1, transcript: 'after' } },
            s5: { frame: null,
              say: { en: 'Rehearse as if you are in the voice chat: introduce yourself and connect with one person from the group ("Like Lucas, I…").', pt: 'Ensaie como se estivesse no bate-papo: se apresente e conecte com alguém do grupo ("Like Lucas, I…").' } },
          },
          addSteps: [{ after: 's3', step: { id: 's3b', kind: 'check', mode: 'choice',
            say: { en: 'Read the mood.', pt: 'Perceba o clima.' },
            questions: [{ text: 'Mia says "It\'s really informal" and "don\'t worry about mistakes". What is she telling new members?', options: [
              { text: 'Relax — you don\'t need perfect English to join', ok: true, why: { en: 'She is lowering the pressure so people feel safe to speak.', pt: 'Ela está tirando a pressão para as pessoas se sentirem seguras para falar.' } },
              { text: 'Dress casually for the chat', why: { en: '"Informal" here is about the way people talk, not clothes.', pt: '"Informal" aqui é sobre o jeito de falar, não roupa.' } } ] }] } }],
        },
        B2: {
          steps: {
            s5: { say: { en: 'Rehearse two versions: a 3-sentence one for the start of the chat, and a longer one if someone says "Tell us more about you!"', pt: 'Ensaie duas versões: uma de 3 frases para o começo do bate-papo, e uma mais longa se alguém disser "Tell us more about you!"' } },
          },
        },
      },
    },

    // ── 4 ─────────────────────────────────────────────── AGIR (escrever)
    {
      id: 'core.w1.a4', cat: 'writing',
      en: 'Post your introduction', pt: 'Poste sua apresentação',
      skills: ['writing', 'interaction'], moves: ['act'],
      purpose: { en: 'Introduce yourself to the group so people know who you are and what to talk to you about.', pt: 'Se apresentar ao grupo para as pessoas saberem quem você é e sobre o que conversar com você.' },
      situation: { en: 'Your post goes to everyone in Coffee & English. Then you reply to the person you chose.', pt: 'Seu post vai para todo mundo do Coffee & English. Depois você responde à pessoa que escolheu.' },
      steps: [
        { id: 's1', kind: 'act', mode: 'write', saveAs: 'w1.intro',
          audience: { en: 'Everyone in the group', pt: 'Todo mundo do grupo' },
          say: { en: "Write your introduction post. Answer Mia's request and finish with a hook.", pt: 'Escreva seu post de apresentação. Responda ao pedido da Mia e termine com um gancho.' },
          starters: ["Hi everyone! I'm …", "I'm from …", "I'm a/an … / I work as …", 'In my free time I love …', 'This year I want to …', 'Ask me about …!'],
          wordBank: ['nurse', 'engineer', 'student', 'teacher', 'lawyer', 'salesperson', 'retired', 'I work from home', 'cooking', 'football', 'series', 'music', 'travelling', 'my kids', 'my cat'],
          model: "Hi everyone! I'm Carla, from Belo Horizonte, Brazil. I'm a nurse, like Priya, and I work in a big hospital. In my free time I love dancing — ask me about forró! This year I want to travel to Canada and talk to people without fear.",
          checklist: CHECK_INTRO },
        { id: 's2', kind: 'act', mode: 'write', ref: 'w1.buddy', saveAs: 'w1.reply',
          audience: { en: 'The person you chose', pt: 'A pessoa que você escolheu' },
          say: { en: 'Now reply to the person you chose. Say something about their message and ask them one question.', pt: 'Agora responda à pessoa que você escolheu. Comente algo da mensagem dela e faça uma pergunta.' },
          starters: ['Hi …! Nice to meet you.', 'I love … too!', 'Your dog is so cute!', 'What kind of … do you …?', 'How long have you …?'],
          models: {
            Mia:   'Hi Mia! Thanks for the welcome. I love board games too! What is your favourite game?',
            Priya: 'Hi Priya! I love cooking too. Can you send me a simple curry recipe?',
            Lucas: 'Hi Lucas! I\'m from Brazil too 😄. What is your dog like? Is he a good work partner?',
            Kenji: "Hi Kenji! Nice to meet you. I'm a bit shy too. What do you like to photograph?",
          },
          checklist: [
            { en: 'Did I mention something from their message?', pt: 'Mencionei algo da mensagem da pessoa?' },
            { en: 'Did I ask a question they can answer?', pt: 'Fiz uma pergunta que ela consegue responder?' },
          ] },
      ],
      bridge: { en: 'Your post is live. Next: someone replies — keep the conversation going.', pt: 'Seu post está no ar. A seguir: alguém responde — mantenha a conversa.' },
      levels: {
        A1: {
          steps: {
            s1: { mode: 'frame',
              say: { en: 'Complete your post with true information about you. Choose from the word bank or write your own.', pt: 'Complete seu post com informações verdadeiras sobre você. Escolha do banco de palavras ou escreva as suas.' },
              frame: ["Hi everyone! I'm ___.", "I'm from ___.", "I'm a/an ___.", 'I love ___.', 'This year I want to ___.'],
              checklist: [CHECK_INTRO[0], CHECK_INTRO[2]] },
            s2: { mode: 'frame', say: { en: 'Reply to the person you chose.', pt: 'Responda à pessoa que você escolheu.' },
              frame: ['Hi ___! Nice to meet you.', 'I love ___ too!', 'Do you ___?'] },
          },
        },
        B1: {
          steps: {
            s1: { starters: null,
              say: { en: 'Write your post without a template. Connect yourself to at least one member ("Like Lucas, I…", "Kenji, I\'m into photography too!").', pt: 'Escreva seu post sem modelo pronto. Conecte-se a pelo menos um membro ("Like Lucas, I…", "Kenji, I\'m into photography too!").' },
              checklist: [...CHECK_INTRO, { en: 'Did I connect with someone in the group?', pt: 'Me conectei com alguém do grupo?' }] },
            s2: { say: { en: 'Reply with a follow-up question that shows you really read their message.', pt: 'Responda com uma pergunta que mostre que você realmente leu a mensagem.' } },
          },
        },
        B2: {
          addSteps: [{ after: 's2', step: { id: 's3', kind: 'act', mode: 'write', ref: 'w1.buddy',
            audience: { en: 'A private message to the person you chose', pt: 'Uma mensagem privada para a pessoa que você escolheu' },
            say: { en: 'Send them a private message suggesting a time to practise together. Think about their life: Priya works nights, Kenji is 12 hours ahead of Brazil, Lucas works from home.', pt: 'Mande uma mensagem privada sugerindo um horário para praticarem juntos. Pense na vida da pessoa: a Priya trabalha à noite, o Kenji está 12 horas à frente do Brasil, o Lucas trabalha de casa.' },
            checklist: [
              { en: 'Did I suggest a specific time that works for both of us?', pt: 'Sugeri um horário específico que funcione para os dois?' },
              { en: 'Did I make it easy to say no or suggest another time?', pt: 'Deixei fácil dizer não ou sugerir outro horário?' },
            ] } }],
        },
      },
    },

    // ── 5 ─────────────────────────────────────────────── INTERAGIR + REFLETIR
    {
      id: 'core.w1.a5', cat: 'speaking',
      en: 'Someone replied!', pt: 'Alguém respondeu!',
      skills: ['interaction', 'speaking', 'writing'], moves: ['act', 'reflect'],
      purpose: { en: 'Keep a real conversation going — answer questions about you and ask back.', pt: 'Manter uma conversa de verdade — responder perguntas sobre você e perguntar de volta.' },
      situation: { en: 'The person you chose replied to your post.', pt: 'A pessoa que você escolheu respondeu ao seu post.' },
      steps: [
        { id: 's1', kind: 'chat', with: { ref: 'w1.buddy', default: 'Priya' },
          say: { en: 'Answer each message. You can type, or say it out loud first and then type. After each answer you will see one possible reply.', pt: 'Responda cada mensagem. Você pode digitar, ou falar em voz alta primeiro e depois digitar. Depois de cada resposta, você vê uma resposta possível.' },
          turns: [
            { them: 'Hi! Welcome 😊 Nice to meet you! So, what do you do?' },
            { you: { suggestions: ["I'm a/an …", 'I work as … at …', "I'm a student. I study …"], model: "I'm a nurse too! I work at a hospital in Belo Horizonte." } },
            { them: 'Oh, cool! And why do you want to practise English?' },
            { you: { suggestions: ['Because I want to …', 'For my job. I …', 'I love … in English.'], model: 'Because I want to travel and talk to people without fear.' } },
            { them: 'Me too! Are you coming to the voice chat on Saturday?' },
            { you: { suggestions: ['Yes, see you there!', "I'm not sure. I …", "Sorry, I can't. I …"], model: "Yes! I'm a bit nervous, but see you there!" } },
            { them: 'Great! Don\'t worry, everyone is nice here 😊' },
          ] },
        { id: 's2', kind: 'reflect',
          say: { en: 'This week — how do you feel about each of these?', pt: 'Nesta semana — como você se sente em relação a cada um destes?' },
          canDo: 'week',
          prompt: { en: 'What helped you most?', pt: 'O que mais te ajudou?' },
          options: ['the example messages', 'the word bank', 'recording myself', "Mia's voice message", 'the checklist'],
          note: { en: 'Your introduction is saved. In week 12 you will write a new one and compare the two.', pt: 'Sua apresentação ficou guardada. Na semana 12 você vai escrever uma nova e comparar as duas.' } },
      ],
      bridge: { en: 'Next week: the group wants to meet — find a time that works for everyone.', pt: 'Semana que vem: o grupo quer se encontrar — encontre um horário que funcione para todos.' },
      levels: {
        A1: {
          steps: { s1: { say: { en: 'Choose an answer and complete it with your information. Say it out loud before you send it.', pt: 'Escolha uma resposta e complete com suas informações. Fale em voz alta antes de enviar.' } } },
        },
        B1: {
          steps: { s1: { turns: [
            { them: 'Hi! Welcome 😊 I read your intro — tell me more about your job. Do you like it?' },
            { you: { suggestions: ['Yes, I love it because …', "It's interesting, but …"], model: "Yes, mostly! It's busy, but I like helping people. What about you?" } },
            { them: 'Ha, same! What is the hardest thing about English for you?' },
            { you: { suggestions: ['For me, the hardest thing is …', "I think it's …, because …"], model: "Listening, I think. People speak so fast! How about you?" } },
            { them: 'Are you coming to the voice chat on Saturday?' },
            { you: { suggestions: ['Yes, but …', "I'd love to, but …"], model: "I'd love to! It's 3 p.m. for me, so it's perfect." } },
            { them: 'Perfect, see you there!' },
          ] } },
        },
        B2: {
          steps: { s1: { turns: [
            { them: 'Hi! Loved your intro 😊 So what made you join the group?' },
            { you: { suggestions: ['Honestly, …', 'Mostly because …'], model: 'Honestly, I want to get more comfortable speaking without preparing everything first.' } },
            { them: 'Makes sense. Saturday is hard for me — I\'m working that night. Could we practise another day?' },
            { you: { suggestions: ['How about …?', "Would … work for you? It's … for me."], model: "Sure! How about Sunday morning? It's 10 a.m. for me — would that work for you?" } },
            { them: 'Sunday works. Shall we do 30 minutes?' },
            { you: { suggestions: ['Sounds good …', 'Perfect — …'], model: "Sounds good! I'll send you the link on Sunday. Looking forward to it!" } },
          ] } },
        },
      },
    },
  ],
}
