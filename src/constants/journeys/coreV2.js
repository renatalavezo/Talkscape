// Core English — v2 (situated). PHASE 3 MODEL — not wired into the UI yet.
// Week 1 is complete; weeks 2–12 are an outline; the week-12 "then and now"
// activity is drafted to validate how week-1 productions are retrieved.

export const CORE_V2_META = {
  id: 'core', format: 'situated', baseLevel: 'A2',
  levels: {
    target: ['A1', 'B1'],     // designed for
    supported: ['A1', 'B2'],  // authored content; B2 = extension for B1+ students
  },
  aboveRange: {
    policy: 'cap',
    why: {
      en: 'Core works on everyday situations designed for A1–B1. A C1/C2 student should only be here by the teacher\'s choice (e.g. reactivating English or rebuilding confidence). They get the B2 extension — the most demanding version these situations genuinely support; a "C1 version" of introducing yourself in a group would be artificial. For C1 development, assign another journey.',
      pt: 'A Core trabalha situações do cotidiano pensadas para A1–B1. Um aluno C1/C2 só deveria estar aqui por escolha da professora (por exemplo, para reativar o inglês ou recuperar a confiança). Ele recebe a extensão B2 — a versão mais exigente que essas situações realmente sustentam; uma "versão C1" de se apresentar num grupo seria artificial. Para desenvolvimento C1, atribua outra jornada.',
    },
  },
  // A thread across the journey: the student belongs to an online community.
  // It gives continuity; it does NOT mean every activity is a chat with these
  // members — genres, interlocutors and social practices vary week to week.
  setting: {
    en: 'You join Coffee & English, an online community where people from different countries use English to talk, help each other and make plans.',
    pt: 'Você entra no Coffee & English, uma comunidade online em que pessoas de vários países usam o inglês para conversar, se ajudar e combinar coisas.',
  },
}

// Arc of the 12 weeks. `genres` and `with` show the planned variety of texts
// and interlocutors beyond the community thread.
export const CORE_V2_OUTLINE = [
  { week: 1,  theme: { en: 'New group, new people', pt: 'Grupo novo, gente nova' },
    canDo: { en: 'Introduce myself to a group and start a conversation', pt: 'Me apresentar a um grupo e começar uma conversa' },
    genres: ['group posts', 'voice message', 'direct message', 'chat'], with: ['community members'] },
  { week: 2,  theme: { en: 'Finding a time to talk', pt: 'Achando um horário para conversar' },
    canDo: { en: 'Talk about my routine and agree on a time to meet', pt: 'Falar da minha rotina e combinar um horário' },
    genres: ['scheduling poll', 'time-zone converter', 'calendar invite', 'voice note'], with: ['community members', 'a colleague'] },
  { week: 3,  theme: { en: 'Coffee, food and ordering', pt: 'Café, comida e pedidos' },
    canDo: { en: 'Order, ask about options and solve small problems with an order', pt: 'Fazer pedidos, perguntar opções e resolver pequenos problemas' },
    genres: ['café menu', 'counter dialogue (audio)', 'delivery-app support chat', 'short reviews'], with: ['barista', 'support agent'] },
  { week: 4,  theme: { en: 'Where is it?', pt: 'Onde fica?' },
    canDo: { en: 'Understand and give directions, describe where things are', pt: 'Entender e dar direções, dizer onde as coisas ficam' },
    genres: ['map', 'station announcement', 'directions from a stranger (audio)', 'message with a location'], with: ['a stranger in the street', 'a visiting friend'] },
  { week: 5,  theme: { en: 'Home and neighbours', pt: 'Casa e vizinhos' },
    canDo: { en: 'Describe my place and ask for or offer help', pt: 'Descrever onde moro e pedir ou oferecer ajuda' },
    genres: ['building notice', 'note to a neighbour', 'room-rental ad', 'video tour'], with: ['neighbour', 'building manager'] },
  { week: 6,  theme: { en: 'Choosing and buying', pt: 'Escolhendo e comprando' },
    canDo: { en: 'Compare options, ask questions and decide what to buy', pt: 'Comparar opções, fazer perguntas e decidir o que comprar' },
    genres: ['product pages', 'comparison table', 'returns policy', 'shop dialogue'], with: ['shop assistant', 'a friend asking for advice'] },
  { week: 7,  theme: { en: 'What happened?', pt: 'O que aconteceu?' },
    canDo: { en: 'Tell a short story about something that happened to me', pt: 'Contar uma história curta sobre algo que aconteceu comigo' },
    genres: ['social-media story', 'podcast anecdote', 'photo captions'], with: ['followers', 'a friend'] },
  { week: 8,  theme: { en: 'Plans and invitations', pt: 'Planos e convites' },
    canDo: { en: 'Invite, accept, decline and change plans politely', pt: 'Convidar, aceitar, recusar e mudar planos com educação' },
    genres: ['event page', 'invitation', 'RSVP', 'change-of-plans message'], with: ['community members', 'a host'] },
  { week: 9,  theme: { en: 'Not feeling well', pt: 'Não estou me sentindo bem' },
    canDo: { en: 'Explain how I feel and understand simple advice', pt: 'Explicar como me sinto e entender conselhos simples' },
    genres: ['medicine label', 'pharmacy dialogue (audio)', 'clinic booking form', 'sick-day message'], with: ['pharmacist', 'receptionist', 'manager'] },
  { week: 10, theme: { en: 'You should try it!', pt: 'Você tem que experimentar!' },
    canDo: { en: 'Recommend something and explain why', pt: 'Recomendar algo e explicar por quê' },
    genres: ['reviews', 'recommendation video', 'list post'], with: ['community', 'online readers'] },
  { week: 11, theme: { en: 'Something went wrong', pt: 'Algo deu errado' },
    canDo: { en: 'Explain a problem and negotiate a solution', pt: 'Explicar um problema e negociar uma solução' },
    genres: ['complaint email', 'customer-service chat', 'phone call (audio)'], with: ['company', 'customer service'] },
  { week: 12, theme: { en: 'Looking back, looking ahead', pt: 'Olhando para trás e para frente' },
    canDo: { en: 'Talk about my progress and plans — and see how my week-1 introduction has changed', pt: 'Falar do meu progresso e dos meus planos — e ver como minha apresentação da semana 1 mudou' },
    genres: ['new introduction post', 'then-and-now comparison', 'message to a new member'], with: ['a new member', 'myself'] },
]

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
  { en: "Did I answer Mia's request (where I'm from, what I do, one thing I love)?", pt: 'Respondi ao pedido da Mia (de onde sou, o que faço, algo que amo)?' },
  { en: 'Is there a "hook" — something people can ask me about?', pt: 'Tem um "gancho" — algo sobre o que as pessoas podem me perguntar?' },
  { en: "Did I use a/an before my job (I'm a nurse)?", pt: "Usei a/an antes da profissão (I'm a nurse)?" },
  { en: 'Would a new friend know what to say to me?', pt: 'Uma pessoa nova saberia o que me responder?' },
]

// Model introduction (week 1) — also shown in week 12 when the student's own
// week-1 text does not exist.
export const W1_MODEL_INTRO = "Hi everyone! I'm Carla, from Belo Horizonte, Brazil. I'm a nurse, like Priya, and I work in a big hospital. In my free time I love dancing — ask me about forró! This year I want to travel to Canada and talk to people without fear."

// How each member reacts when the student asks THEM a question (activity 5).
// Matched by keywords in the student's own question; fallback keeps the
// conversation natural when nothing matches.
const REPLY_POOL = {
  Priya: [
    { match: ['job', 'work', 'nurse', 'hospital', 'night'], text: "I love my job, but night shifts are hard! I work three nights a week, so I sleep in the morning 😅" },
    { match: ['cook', 'food', 'curry', 'recipe', 'eat'], text: "Oh, I love this question! My favourite is chickpea curry. It's easy — I can send you the recipe!" },
    { match: ['series', 'watch', 'film', 'movie', 'tv', 'subtitle'], text: "Right now I'm watching a cooking show, of course 😄 With subtitles, for now!" },
    { match: ['india', 'pune', 'city', 'live', 'from'], text: "Pune is a big city, but it's quite green. The weather is nice now — not too hot!" },
    { match: ['english', 'learn', 'study', 'long'], text: "I studied English at school, but I'm not confident speaking. That's why I'm here!" },
  ],
  Lucas: [
    { match: ['job', 'work', 'developer', 'home', 'meeting'], text: "I build apps for a company in Canada. Working from home is great, but the meetings in English make me nervous!" },
    { match: ['dog', 'pipoca', 'pet'], text: "Pipoca is a mix — very small, very loud 😂 He sleeps next to my desk all day." },
    { match: ['recife', 'brazil', 'city', 'from', 'live', 'beach'], text: "Recife is hot and sunny, and the beaches are beautiful. Have you been there?" },
    { match: ['english', 'learn', 'study', 'long'], text: "I read in English every day for work, but speaking is a different story!" },
  ],
  Kenji: [
    { match: ['photo', 'picture', 'camera', 'photograph'], text: "I mostly photograph mountains and old streets. I post them on Instagram — I can send you the link!" },
    { match: ['hik', 'mountain', 'walk'], text: "Last month I climbed a mountain near Kyoto. It was hard, but the view was amazing!" },
    { match: ['study', 'student', 'university', 'school'], text: "I study engineering. It's a lot of work, but I like it." },
    { match: ['japan', 'osaka', 'city', 'from', 'live', 'food'], text: "Osaka is famous for food! You must try takoyaki if you come here 🐙" },
    { match: ['shy', 'friend', 'english'], text: "Yes, I'm shy, especially speaking. But writing here is easier for me 😊" },
  ],
  Mia: [
    { match: ['game', 'board'], text: "My favourite is a game called Ticket to Ride — you build train lines across a map. Very addictive!" },
    { match: ['teach', 'school', 'job', 'work', 'kids', 'children'], text: "I teach seven-year-olds. Every day is different — and noisy! 😄" },
    { match: ['group', 'start', 'why', 'idea'], text: "I started the group because my students' parents wanted to practise English. Now people join from everywhere!" },
    { match: ['manchester', 'uk', 'england', 'city', 'from', 'live', 'weather', 'rain'], text: "Manchester is great — but yes, it rains a lot. Bring an umbrella if you visit! ☔" },
  ],
}
const REPLY_FALLBACK = {
  default: "Good question! 😄 Hmm, let me think… I'll tell you more on Saturday!",
}

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
    { en: 'I can answer questions about me and ask questions back', pt: 'Consigo responder perguntas sobre mim e fazer perguntas de volta' },
  ],
  // What each level works on (paraphrased CEFR descriptors) and what is expected.
  levelProfile: {
    A1: {
      cefr: [
        { en: 'Reading correspondence: understand short, simple messages, picking out names, places and familiar words', pt: 'Leitura de correspondência: entender mensagens curtas e simples, identificando nomes, lugares e palavras conhecidas' },
        { en: 'Listening: catch key details (day, time) in slow, clear speech, with repetition', pt: 'Escuta: captar detalhes-chave (dia, horário) em fala lenta e clara, com repetição' },
        { en: 'Written interaction: write a short message with personal details', pt: 'Interação escrita: escrever uma mensagem curta com dados pessoais' },
        { en: 'Spoken interaction: answer and ask simple questions about very familiar topics', pt: 'Interação oral: responder e fazer perguntas simples sobre temas muito familiares' },
      ],
      expect: { en: 'Uses memorised phrases and frames with own information; Portuguese support is legitimate.', pt: 'Usa expressões memorizadas e molduras com informações próprias; o apoio em português é legítimo.' },
    },
    A2: {
      cefr: [
        { en: 'Reading: find specific, predictable information in short everyday messages', pt: 'Leitura: encontrar informações específicas e previsíveis em mensagens curtas do cotidiano' },
        { en: 'Listening: understand the main point of a short, clear message', pt: 'Escuta: entender o ponto principal de uma mensagem curta e clara' },
        { en: 'Writing: describe in simple sentences job, place and interests', pt: 'Escrita: descrever em frases simples trabalho, lugar e interesses' },
        { en: 'Interaction: handle very short social exchanges; ask and answer about work and free time', pt: 'Interação: lidar com trocas sociais curtas; perguntar e responder sobre trabalho e tempo livre' },
      ],
      expect: { en: 'Links simple sentences with and/but/so, with starters as support.', pt: 'Liga frases simples com and/but/so, usando frases iniciais como apoio.' },
    },
    B1: {
      cefr: [
        { en: 'Reading: infer what is implied in everyday messages (constraints, attitudes)', pt: 'Leitura: inferir o que está implícito em mensagens do cotidiano (restrições, atitudes)' },
        { en: 'Listening: follow the main points and the tone of a message at natural speed', pt: 'Escuta: acompanhar os pontos principais e o tom de uma mensagem em velocidade natural' },
        { en: 'Writing: write a personal message connecting own experience to others\'', pt: 'Escrita: escrever uma mensagem pessoal conectando a própria experiência à dos outros' },
        { en: 'Interaction: enter unprepared into conversation on familiar topics; give reasons', pt: 'Interação: entrar sem preparo numa conversa sobre temas familiares; dar razões' },
      ],
      expect: { en: 'Writes without a template, keeps the conversation going with follow-up questions.', pt: 'Escreve sem modelo pronto e mantém a conversa com perguntas de continuidade.' },
    },
    B2: {
      cefr: [
        { en: 'Sociolinguistic appropriateness: notice and adapt register (public post vs private message)', pt: 'Adequação sociolinguística: perceber e adaptar o registro (post público × mensagem privada)' },
        { en: 'Interaction: negotiate a practical arrangement, taking the other person\'s constraints into account', pt: 'Interação: negociar um combinado prático, levando em conta as restrições da outra pessoa' },
        { en: 'Speaking: adapt length and detail to the moment', pt: 'Fala: adaptar extensão e detalhe ao momento' },
      ],
      expect: { en: 'Extension for B1+ students: same situation, more negotiation and audience awareness.', pt: 'Extensão para alunos B1+: mesma situação, mais negociação e consciência de público.' },
    },
  },
  tasks: [

    // ── 1 ─────────────────────────────────────────────── ENTRAR + EXPLORAR
    {
      id: 'core-w1-a1', cat: 'reading',
      en: "Who's in the group?", pt: 'Quem está no grupo?',
      skills: ['reading', 'interaction'], moves: ['enter', 'explore'],
      minutes: { A1: 15, A2: 10, B1: 12, B2: 15 },
      purpose: { en: 'Get to know the people in the group and choose someone to talk to.', pt: 'Conhecer as pessoas do grupo e escolher alguém para conversar.' },
      situation: { en: 'Four members have already posted their introductions.', pt: 'Quatro membros já postaram suas apresentações.' },
      steps: [
        { id: 's1', kind: 'prepare', multi: true,
          say: { en: 'Before reading: what do people usually say when they introduce themselves in a group like this?', pt: 'Antes de ler: o que as pessoas costumam dizer quando se apresentam num grupo como esse?' },
          options: ['their name', 'where they are from', 'their job', 'their age', 'their hobbies', 'their phone number', 'what they want to do', 'how much they earn'],
          after: { en: "Let's see what these people actually say.", pt: 'Vamos ver o que essas pessoas realmente dizem.' } },
        { id: 's2', kind: 'engage',
          say: { en: "Read the messages. Don't worry about every word — try to get to know each person.", pt: 'Leia as mensagens. Não se preocupe com cada palavra — tente conhecer cada pessoa.' },
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
        { id: 's4', kind: 'check', mode: 'open-choice', saveAs: 'w1-buddy',
          say: { en: 'Who would you like to talk to first? Choose a person and a reason.', pt: 'Com quem você gostaria de conversar primeiro? Escolha uma pessoa e um motivo.' },
          options: ['Mia', 'Priya', 'Lucas', 'Kenji'],
          reasons: ['we have the same hobby', 'we have a similar goal', "I'm curious about their country", 'we have a similar job', 'they seem friendly'],
          after: { en: 'Keep this person in mind — you will write to them later this week.', pt: 'Guarde essa pessoa — você vai escrever para ela nesta semana.' } },
      ],
      bridge: { en: 'Next: look at how these introductions are built, so you can build yours.', pt: 'A seguir: veja como essas apresentações são construídas, para montar a sua.' },
      levels: {
        A1: {
          steps: {
            s1: { options: ['their name', 'where they are from', 'their job', 'their hobbies', 'their phone number'] },
            s2: { glossary: [
              { term: 'admin', pt: 'administradora do grupo' }, { term: 'nurse', pt: 'enfermeira' },
              { term: 'free time', pt: 'tempo livre' }, { term: 'without subtitles', pt: 'sem legendas' },
              { term: "I'm into", pt: 'eu curto / gosto muito de' }, { term: 'shy', pt: 'tímido' },
            ] },
            s3: { glossary: [{ term: 'pet', pt: 'animal de estimação' }, { term: 'organises', pt: 'organiza' }, { term: 'taking pictures', pt: 'tirar fotos' }] },
            s4: { reasons: null },
          },
        },
        B1: {
          steps: {
            s3: { mode: 'choice', pairs: null, why: null,
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
      id: 'core-w1-a2', cat: 'vocab',
      en: 'How a good introduction works', pt: 'Como funciona uma boa apresentação',
      skills: ['reading', 'writing'], moves: ['notice'],
      minutes: { A1: 15, A2: 12, B1: 12, B2: 15 },
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
              { text: 'I love hiking.', ok: true, why: { en: '"Love" + -ing or a noun.', pt: '"Love" + -ing ou um substantivo.' } },
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
        // A1: the hook idea stays (it is what makes the post social) but as a
        // ready phrase to reuse, not an analysis task.
        A1: {
          steps: {
            s3: { examples: [
              { text: "I'm a nurse. / I'm a student.", mark: ['a'] },
              { text: "I'm from Recife. / I live in Pune.", mark: ["I'm from", 'I live in'] },
              { text: 'I love cooking. / I love music.', mark: ['love'] },
            ] },
            s5: { kind: 'notice', questions: null,
              say: { en: 'A phrase you can reuse to invite replies:', pt: 'Uma frase que você pode reutilizar para convidar respostas:' },
              examples: [{ text: 'Ask me about … !', mark: ['Ask me about'] }],
              insight: { en: 'Put something you like after it: "Ask me about football!"', pt: 'Coloque algo de que você gosta depois: "Ask me about football!"' } },
          },
        },
        B1: {
          steps: {
            s3: { insight: { en: 'Notice the connectors and softeners: "so I often work at night" (consequence), "I\'m a bit shy, but…" (contrast). They make an introduction sound like a person, not a list.', pt: 'Repare nos conectores e suavizadores: "so I often work at night" (consequência), "I\'m a bit shy, but…" (contraste). Eles fazem a apresentação soar como uma pessoa, não como uma lista.' },
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
      id: 'core-w1-a3', cat: 'listening',
      en: "Mia's voice message", pt: 'A mensagem de voz da Mia',
      skills: ['listening', 'speaking'], moves: ['explore', 'notice', 'try'],
      minutes: { A1: 20, A2: 15, B1: 15, B2: 20 },
      purpose: { en: "Understand what Mia asks new members to do — and rehearse your introduction for Saturday's voice chat.", pt: 'Entender o que a Mia pede aos novos membros — e ensaiar sua apresentação para o bate-papo de sábado.' },
      situation: { en: 'Mia sent a voice message to everyone who just joined.', pt: 'A Mia mandou uma mensagem de voz para quem acabou de entrar.' },
      steps: [
        { id: 's1', kind: 'prepare',
          say: { en: 'Before listening: what do you think Mia wants to tell new members?', pt: 'Antes de ouvir: o que você acha que a Mia quer dizer aos novos membros?' },
          options: ['the group rules', 'an event', 'how to introduce yourself', 'how to pay'] },
        { id: 's2', kind: 'engage',
          say: { en: 'Listen once without reading. Then answer. You can listen again — and read the text after the first listen.', pt: 'Ouça uma vez sem ler. Depois responda. Você pode ouvir de novo — e ler o texto depois da primeira escuta.' },
          input: { type: 'audio', script: MIA_VOICE, lang: 'en-GB', rates: [0.75, 0.9, 1], rate: 0.9, transcript: 'after-first' } },
        { id: 's3', kind: 'check', mode: 'choice',
          say: { en: 'What did Mia say?', pt: 'O que a Mia disse?' },
          questions: [
            { text: 'When is the voice chat?', options: [
              { text: 'Saturday, 7 p.m. UK time', ok: true, why: { en: '"This Saturday… at seven p.m., UK time." In Brazil, that is in the afternoon.', pt: '"This Saturday… at seven p.m., UK time." No Brasil, isso é à tarde.' } },
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
            { text: 'I WORK from HOME.', mark: [] },
          ],
          insight: { en: 'Speakers say "I\'m", "it\'s", not "I am", "it is". The important words (job, place, feelings) are louder and longer — that\'s what listeners catch.', pt: 'Falantes dizem "I\'m", "it\'s", e não "I am", "it is". As palavras importantes (profissão, lugar, sentimentos) são mais fortes e longas — é isso que quem ouve capta.' } },
        { id: 's5', kind: 'try', mode: 'speak',
          say: { en: 'Rehearse your introduction for Saturday. Follow the plan, record, listen, and record again if you want. Nothing is saved — this is just for you.', pt: 'Ensaie sua apresentação para sábado. Siga o plano, grave, ouça e grave de novo se quiser. Nada fica salvo — é só para você.' },
          frame: ["Hi, I'm … I'm from …", "I'm a/an … / I work as … / I study …", "I love … / I'm into …", 'This year I want to …'],
          model: "Hi, I'm Carla. I'm from Belo Horizonte. I'm a nurse, like Priya! I love dancing. This year I want to travel and talk to people in English.",
          selfCheck: [
            { en: "Could someone understand my name and where I'm from?", pt: 'Alguém entenderia meu nome e de onde sou?' },
            { en: 'Did I say "I\'m", not "I am"?', pt: 'Falei "I\'m", e não "I am"?' },
            { en: 'Did I say something people could ask me about?', pt: 'Disse algo sobre o que as pessoas poderiam me perguntar?' },
          ] },
      ],
      bridge: { en: 'You know what to say. Now post your introduction in the group.', pt: 'Você já sabe o que dizer. Agora poste sua apresentação no grupo.' },
      levels: {
        A1: {
          steps: {
            s2: { input: { type: 'audio', script: MIA_VOICE, lang: 'en-GB', rates: [0.7, 0.8, 0.9], rate: 0.8, transcript: 'always' },
              say: { en: 'Listen as many times as you need. The text is there to help — try once without it first.', pt: 'Ouça quantas vezes precisar. O texto está ali para ajudar — tente uma vez sem ele primeiro.' } },
            // A1 listens for concrete details only; "one thing you love" stays, as a word to catch.
            s3: { questions: [
              { text: 'What day is the voice chat?', options: [
                { text: 'Saturday', ok: true, why: { en: '"This Saturday".', pt: '"This Saturday" = neste sábado.' } },
                { text: 'Sunday', why: { en: 'Listen for "-day" at the start.', pt: 'Procure a palavra com "-day" no começo.' } } ] },
              { text: 'What time?', options: [
                { text: '7 p.m.', ok: true, why: { en: '"seven p.m."', pt: '"seven p.m." = 19h (no Reino Unido).' } },
                { text: '11 a.m.', why: { en: 'Listen for the number.', pt: 'Procure o número.' } } ] },
              { text: 'In your introduction, say… (choose three)', multi: true, options: [
                { text: "where you're from", ok: true }, { text: 'what you do', ok: true }, { text: 'one thing you love', ok: true },
                { text: 'your age', why: { en: 'Mia did not ask for this.', pt: 'A Mia não pediu isso.' } } ] },
            ] },
            s5: { frame: ["Hi, I'm …", "I'm from …", "I'm a/an …", 'I love …'] },
          },
        },
        B1: {
          steps: {
            s2: { input: { type: 'audio', script: MIA_VOICE, lang: 'en-GB', rates: [0.9, 1, 1.1], rate: 1, transcript: 'after-first' } },
            s5: { frame: null,
              say: { en: 'Rehearse as if you are in the voice chat: introduce yourself and connect with one person from the group ("Like Lucas, I…"). Nothing is saved.', pt: 'Ensaie como se estivesse no bate-papo: se apresente e conecte com alguém do grupo ("Like Lucas, I…"). Nada fica salvo.' } },
          },
          addSteps: [{ after: 's3', step: { id: 's3b', kind: 'check', mode: 'choice',
            say: { en: 'Read the mood.', pt: 'Perceba o clima.' },
            questions: [{ text: 'Mia says "It\'s really informal" and "don\'t worry about mistakes". What is she telling new members?', options: [
              { text: "Relax — you don't need perfect English to join", ok: true, why: { en: 'She is lowering the pressure so people feel safe to speak.', pt: 'Ela está tirando a pressão para as pessoas se sentirem seguras para falar.' } },
              { text: 'Dress casually for the chat', why: { en: '"Informal" here is about the way people talk, not clothes.', pt: '"Informal" aqui é sobre o jeito de falar, não roupa.' } } ] }] } }],
        },
        B2: {
          steps: {
            s5: { say: { en: 'Rehearse two versions: a 3-sentence one for the start of the chat, and a longer one in case someone says "Tell us more about you!" Nothing is saved.', pt: 'Ensaie duas versões: uma de 3 frases para o começo do bate-papo, e uma mais longa caso alguém diga "Tell us more about you!" Nada fica salvo.' } },
          },
        },
      },
    },

    // ── 4 ─────────────────────────────────────────────── AGIR (escrever)
    {
      id: 'core-w1-a4', cat: 'writing',
      en: 'Post your introduction', pt: 'Poste sua apresentação',
      skills: ['writing', 'interaction'], moves: ['act'],
      minutes: { A1: 20, A2: 20, B1: 20, B2: 30 },
      purpose: { en: 'Introduce yourself to the group so people know who you are and what to talk to you about.', pt: 'Se apresentar ao grupo para as pessoas saberem quem você é e sobre o que conversar com você.' },
      situation: { en: 'Your post goes to everyone in Coffee & English. Then you reply to the person you chose.', pt: 'Seu post vai para todo mundo do Coffee & English. Depois você responde à pessoa que escolheu.' },
      steps: [
        { id: 's1', kind: 'act', mode: 'write', saveAs: 'w1-intro',
          audience: { en: 'Everyone in the group', pt: 'Todo mundo do grupo' },
          say: { en: "Write your introduction post. Answer Mia's request, say one thing you want to do in English, and finish with a hook.", pt: 'Escreva seu post de apresentação. Responda ao pedido da Mia, diga algo que você quer fazer em inglês e termine com um gancho.' },
          starters: ["Hi everyone! I'm …", "I'm from …", "I'm a/an … / I work as …", 'In my free time I love …', 'This year I want to …', 'Ask me about …!'],
          wordBank: ['nurse', 'engineer', 'student', 'teacher', 'lawyer', 'salesperson', 'retired', 'I work from home', 'cooking', 'football', 'series', 'music', 'travelling', 'my kids', 'my cat'],
          model: W1_MODEL_INTRO,
          checklist: CHECK_INTRO,
          note: { en: 'Your post is saved. You can edit it any time — and in week 12 you will look back at this first version.', pt: 'Seu post fica salvo. Você pode editar quando quiser — e na semana 12 vai olhar de novo para esta primeira versão.' } },
        { id: 's2', kind: 'act', mode: 'write', ref: 'w1-buddy', saveAs: 'w1-reply',
          audience: { en: 'The person you chose', pt: 'A pessoa que você escolheu' },
          say: { en: 'Now reply to the person you chose. Say something about their message and ask them one question.', pt: 'Agora responda à pessoa que você escolheu. Comente algo da mensagem dela e faça uma pergunta.' },
          starters: ['Hi …! Nice to meet you.', 'I love … too!', "I'm also …", 'What kind of … do you …?', 'Do you …?'],
          models: {
            Mia:   'Hi Mia! Thanks for the welcome. I love board games too! What is your favourite game?',
            Priya: 'Hi Priya! I love cooking too. Can you send me a simple curry recipe?',
            Lucas: "Hi Lucas! I'm from Brazil too 😄. What is your dog like? Is he a good work partner?",
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
              say: { en: 'Complete your post with true information about you. Use the word bank or your own words. You can add more sentences if you want.', pt: 'Complete seu post com informações verdadeiras sobre você. Use o banco de palavras ou suas próprias palavras. Pode acrescentar mais frases se quiser.' },
              frame: ["Hi everyone! I'm ___.", "I'm from ___.", "I'm a/an ___.", 'I love ___.', 'Ask me about ___!'],
              checklist: [CHECK_INTRO[0], CHECK_INTRO[2]] },
            s2: { mode: 'frame', say: { en: 'Reply to the person you chose.', pt: 'Responda à pessoa que você escolheu.' },
              frame: ['Hi ___! Nice to meet you.', 'I love ___ too! / I am ___ too!', 'Do you ___?'] },
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
          addSteps: [{ after: 's2', step: { id: 's3', kind: 'act', mode: 'write', ref: 'w1-buddy', saveAs: 'w1-dm',
            audience: { en: 'A private message to the person you chose', pt: 'Uma mensagem privada para a pessoa que você escolheu' },
            say: { en: 'Send them a private message suggesting a time to practise together. Think about their life: Priya works nights, Kenji is 12 hours ahead of Brazil, Lucas works from home.', pt: 'Mande uma mensagem privada sugerindo um horário para praticarem juntos. Pense na vida da pessoa: a Priya trabalha à noite, o Kenji está 12 horas à frente do Brasil, o Lucas trabalha de casa.' },
            checklist: [
              { en: 'Did I suggest a specific time that works for both of us?', pt: 'Sugeri um horário específico que funcione para os dois?' },
              { en: 'Did I make it easy to say no or suggest another time?', pt: 'Deixei fácil dizer não ou sugerir outro horário?' },
              { en: 'Does it sound more personal than my public post?', pt: 'Soa mais pessoal que o meu post público?' },
            ] } }],
        },
      },
    },

    // ── 5 ─────────────────────────────────────────────── INTERAGIR + REFLETIR
    {
      id: 'core-w1-a5', cat: 'speaking',
      en: 'Someone replied!', pt: 'Alguém respondeu!',
      skills: ['interaction', 'writing', 'speaking'], moves: ['act', 'reflect'],
      minutes: { A1: 15, A2: 15, B1: 15, B2: 15 },
      purpose: { en: 'Keep a real conversation going — answer in your own words and ask your own questions.', pt: 'Manter uma conversa de verdade — responder com suas palavras e fazer suas próprias perguntas.' },
      situation: { en: 'The person you chose replied to your post.', pt: 'A pessoa que você escolheu respondeu ao seu post.' },
      steps: [
        { id: 's1', kind: 'chat', with: { ref: 'w1-buddy', default: 'Priya' },
          say: { en: "Write your own answers — there is no single right answer. Stuck? Open \"Ideas to start\". After you send, you'll see one possible reply (there are many!). Tip: say it out loud before you send it.", pt: 'Escreva suas próprias respostas — não existe uma única resposta certa. Travou? Abra "Ideias para começar". Depois de enviar, você vê uma resposta possível (existem muitas!). Dica: fale em voz alta antes de enviar.' },
          turns: [
            { them: 'Hi! Welcome 😊 Nice to meet you! So, what do you do?' },
            { you: { expects: 'answer', starters: ["I'm a/an …", 'I work as … at …', 'I study …'],
              model: "I'm a nurse too! I work at a hospital in Belo Horizonte.",
              criteria: [{ en: 'I answered the question', pt: 'Respondi à pergunta' }, { en: 'I added one detail', pt: 'Acrescentei um detalhe' }] } },
            { them: 'Oh, cool! And why do you want to practise English?' },
            { you: { expects: 'answer', starters: ['I want to …', 'Because …', 'For my job — I …'],
              model: 'Because I want to travel and talk to people without fear.',
              criteria: [{ en: 'I gave a reason', pt: 'Dei um motivo' }] } },
            { them: 'Me too! OK, your turn — ask me something! 😊' },
            { you: { expects: 'question', starters: ['What do you …?', 'Do you like …?', 'Where …?', 'How long …?'],
              models: { Priya: 'Do you like working at night?', Lucas: 'What is Recife like?', Kenji: 'What do you like to photograph?', Mia: 'What is your favourite board game?' },
              criteria: [{ en: 'It is a question (?)', pt: 'É uma pergunta (?)' }, { en: 'It is about them — something from their message', pt: 'É sobre a pessoa — algo da mensagem dela' }] } },
            { them: { replies: REPLY_POOL, fallback: REPLY_FALLBACK } },
            { them: 'Are you coming to the voice chat on Saturday?' },
            { you: { expects: 'any', starters: ['Yes, …', "I'm not sure. …", "Sorry, I can't. …"],
              model: "Yes! I'm a bit nervous, but see you there!",
              criteria: [{ en: 'I answered and said something more (how I feel, why)', pt: 'Respondi e disse algo a mais (como me sinto, por quê)' }] } },
            { them: 'OK! Thanks for chatting — see you in the group 😊' },
          ] },
        { id: 's2', kind: 'reflect',
          say: { en: 'This week — how do you feel about each of these? There is no wrong answer: "with help" is real progress.', pt: 'Nesta semana — como você se sente em relação a cada um destes? Não existe resposta errada: "com ajuda" é progresso de verdade.' },
          canDo: 'week',
          prompt: { en: 'What helped you most?', pt: 'O que mais te ajudou?' },
          options: ['the example messages', 'the word bank', 'recording myself', "Mia's voice message", 'the checklist', 'the ideas to start'],
          note: { en: 'Your introduction is saved. In week 12 you will write a new one and look at how you have changed — not to find mistakes, but to see what you can do now.', pt: 'Sua apresentação ficou guardada. Na semana 12 você vai escrever uma nova e ver como mudou — não para caçar erros, mas para ver o que você consegue fazer agora.' } },
      ],
      bridge: { en: 'Next week: the group wants to meet — find a time that works for everyone.', pt: 'Semana que vem: o grupo quer se encontrar — encontre um horário que funcione para todos.' },
      levels: {
        // A1 descriptor: simple questions on very familiar topics. "And you?" is a real A1 strategy.
        A1: {
          steps: { s1: {
            say: { en: 'Write your own answers using your information. Stuck? Open "Ideas to start". After you send, you\'ll see one possible reply. Say it out loud before you send it.', pt: 'Escreva suas respostas com suas informações. Travou? Abra "Ideias para começar". Depois de enviar, você vê uma resposta possível. Fale em voz alta antes de enviar.' },
            turns: [
              { them: 'Hi! Welcome 😊 Where are you from?' },
              { you: { expects: 'answer', starters: ["I'm from …", 'I live in …'], model: "I'm from Belo Horizonte, in Brazil.",
                criteria: [{ en: 'I said my city or country', pt: 'Disse minha cidade ou país' }] } },
              { them: 'Nice! What do you do?' },
              { you: { expects: 'answer', starters: ["I'm a/an …", "I'm a student. I study …"], model: "I'm a nurse.",
                criteria: [{ en: 'I used a/an with my job', pt: 'Usei a/an com a profissão' }] } },
              { them: 'Cool! Now ask me a question 😊' },
              { you: { expects: 'question', starters: ['And you? …', 'Do you like …?', 'Where …?'],
                models: { Priya: 'Do you like cooking?', Lucas: 'Do you like Recife?', Kenji: 'Do you like photos?', Mia: 'Do you like games?' },
                criteria: [{ en: 'It is a question (?)', pt: 'É uma pergunta (?)' }] } },
              { them: { replies: REPLY_POOL, fallback: REPLY_FALLBACK } },
              { them: 'See you on Saturday! 👋' },
              { you: { expects: 'any', starters: ['Bye! See you …', 'Thank you! …'], model: 'Thank you! See you on Saturday!',
                criteria: [{ en: 'I said goodbye', pt: 'Me despedi' }] } },
            ] } },
        },
        B1: {
          steps: { s1: { turns: [
            { them: 'Hi! Welcome 😊 I read your intro — tell me more about your job. Do you like it?' },
            { you: { expects: 'answer', starters: ['Yes, I love it because …', "It's interesting, but …", 'Not really — …'],
              model: "Yes, mostly! It's busy, but I like helping people.",
              criteria: [{ en: 'I gave my opinion and a reason', pt: 'Dei minha opinião e um motivo' }] } },
            { them: "What's the hardest thing about English for you?" },
            { you: { expects: 'answer', starters: ['For me, the hardest thing is …', "I think it's …, because …"],
              model: 'Listening, I think. People speak so fast!',
              criteria: [{ en: 'I explained why', pt: 'Expliquei por quê' }] } },
            { them: 'Ha, same for me! Anything you want to ask me?' },
            { you: { expects: 'question', starters: ['I saw that you …', 'How do you …?', 'What do you like about …?'],
              models: { Priya: 'You said you work at night — how do you find time to practise English?', Lucas: 'You said meetings make you nervous — what helps you?', Kenji: 'Where is your favourite place to take photos?', Mia: 'How did you start the group?' },
              criteria: [{ en: 'My question shows I read their message', pt: 'Minha pergunta mostra que li a mensagem da pessoa' }] } },
            { them: { replies: REPLY_POOL, fallback: REPLY_FALLBACK } },
            { them: 'Are you coming to the voice chat on Saturday?' },
            { you: { expects: 'any', starters: ['Yes, but …', "I'd love to, but …", 'Definitely! …'],
              model: "I'd love to! It's in the afternoon for me, so it's perfect.",
              criteria: [{ en: 'I answered and added something', pt: 'Respondi e acrescentei algo' }] } },
            { them: 'Great, see you there!' },
          ] } },
        },
        // B2: negotiation with the partner's real constraints.
        B2: {
          steps: { s1: { turns: [
            { them: 'Hi! Loved your intro 😊 So what made you join the group?' },
            { you: { expects: 'answer', starters: ['Honestly, …', 'Mostly because …'],
              model: 'Honestly, I want to get more comfortable speaking without preparing everything first.',
              criteria: [{ en: 'My answer sounds personal, not like a form', pt: 'Minha resposta soa pessoal, não como um formulário' }] } },
            { them: { default: "Makes sense. Saturday is hard for me — I'm busy that evening. Could we practise another day?", Priya: "Makes sense. Saturday is hard for me — I'm working that night. Could we practise another day?" } },
            { you: { expects: 'any', starters: ['How about …?', "Would … work for you? It's … for me."],
              models: {
                Priya: "Sure! How about Sunday? 10 a.m. for me would be 6:30 p.m. for you — would that work before your night shift?",
                Kenji: "Sure! How about Sunday at 9 p.m. my time? That's 9 a.m. on Monday for you — too early?",
                Lucas: "Sure! We're in the same time zone, so how about Tuesday after work, around 7?",
                Mia:   "Sure! How about Sunday afternoon? 3 p.m. for me is 7 p.m. for you, I think.",
              },
              criteria: [{ en: 'I proposed a specific time', pt: 'Propus um horário específico' }, { en: 'I considered their situation (time zone, work)', pt: 'Considerei a situação da pessoa (fuso, trabalho)' }] } },
            { them: "That could work! And what would you like to talk about? I'd like to practise something useful." },
            { you: { expects: 'any', starters: ['What about …? It would help me with …', 'Maybe we could …'],
              model: 'What about job interviews? We could take turns asking each other questions.',
              criteria: [{ en: 'I suggested a topic and explained why it is useful', pt: 'Sugeri um tema e expliquei por que é útil' }] } },
            { them: 'Love it. Anything you want to know about me before we meet?' },
            { you: { expects: 'question', starters: ['I was wondering …', 'You mentioned … — how …?', 'What made you …?'],
              models: { Priya: 'You mentioned night shifts — how do you keep your energy up?', Lucas: 'You said meetings in English make you nervous — what makes them hard?', Kenji: 'What made you start taking photos?', Mia: 'What made you start the group?' },
              criteria: [{ en: 'My question invites a longer answer, not just yes/no', pt: 'Minha pergunta convida uma resposta mais longa, não só sim/não' }] } },
            { them: { replies: REPLY_POOL, fallback: REPLY_FALLBACK } },
            { them: 'See you then! 🙌' },
          ] } },
        },
      },
    },
  ],
}

// ── Week 12 (draft of the activity that retrieves week 1) ─────────────────────
// Writing comes FIRST, so the new text is not a copy of the old one.
export const CORE_V2_W12_THEN_AND_NOW = {
  id: 'core-w12-a4', cat: 'writing',
  en: 'Then and now', pt: 'Antes e agora',
  skills: ['writing', 'reading'], moves: ['act', 'reflect'],
  minutes: { A1: 20, A2: 20, B1: 20, B2: 25 },
  purpose: { en: 'See how your English has changed since week 1 — what you can do now.', pt: 'Ver como seu inglês mudou desde a semana 1 — o que você consegue fazer agora.' },
  situation: { en: 'A new member just joined Coffee & English, like you did 12 weeks ago.', pt: 'Uma pessoa nova acabou de entrar no Coffee & English, como você 12 semanas atrás.' },
  steps: [
    { id: 's1', kind: 'act', mode: 'write', saveAs: 'w12-intro',
      audience: { en: 'The group — and the new member', pt: 'O grupo — e a pessoa nova' },
      say: { en: 'Write a new introduction for the group, as you would today. Welcome the new member too.', pt: 'Escreva uma nova apresentação para o grupo, como você faria hoje. Dê boas-vindas à pessoa nova também.' },
      checklist: CHECK_INTRO },
    { id: 's2', kind: 'compare', before: 'w1-intro', after: 'w12-intro',
      say: { en: 'Here is your first introduction, next to today\'s. Read them both.', pt: 'Aqui está sua primeira apresentação, ao lado da de hoje. Leia as duas.' },
      prompts: [
        { en: 'What can you say now that you did not say in week 1?', pt: 'O que você consegue dizer agora que não disse na semana 1?' },
        { en: 'Find one expression you learned in these 12 weeks.', pt: 'Encontre uma expressão que você aprendeu nessas 12 semanas.' },
        { en: 'How did it feel to write it this time?', pt: 'Como foi escrever desta vez?' },
      ],
      ifMissing: {
        en: 'Your week-1 introduction is not saved — that is fine. Look at the week-1 example (Carla\'s) and think: what does your text today do that you could not do when you started?',
        pt: 'Sua apresentação da semana 1 não está salva — tudo bem. Olhe o exemplo da semana 1 (o da Carla) e pense: o que o seu texto de hoje faz que você não conseguia fazer quando começou?',
      },
      fallbackText: W1_MODEL_INTRO },
    { id: 's3', kind: 'reflect',
      say: { en: 'Looking back at these 12 weeks — which situations can you handle now?', pt: 'Olhando para essas 12 semanas — com quais situações você consegue lidar agora?' },
      canDo: 'journey',
      prompt: { en: 'What do you want to do next in English?', pt: 'O que você quer fazer agora com o inglês?' } },
  ],
}
