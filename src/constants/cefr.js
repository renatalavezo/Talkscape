import { B } from './colors'

export const CEFR_META = [
  {
    level: 'A1', icon: '🌱', label: { en: 'Beginner', pt: 'Iniciante' },
    color: B.rosa, text: '#fff',
    canDo: {
      en: [
        'Introduce yourself and others',
        'Ask and answer basic personal questions',
        'Count, name colors and everyday objects',
        'Order food at a simple restaurant',
        'Understand and follow simple instructions',
        'Talk about your daily routine',
      ],
      pt: [
        'Se apresentar e apresentar outras pessoas',
        'Fazer e responder perguntas pessoais básicas',
        'Contar, nomear cores e objetos do dia a dia',
        'Pedir comida num restaurante simples',
        'Entender e seguir instruções simples',
        'Falar sobre sua rotina diária',
      ],
    },
  },
  {
    level: 'A2', icon: '🌿', label: { en: 'Elementary', pt: 'Elementar' },
    color: B.laranja, text: '#fff',
    canDo: {
      en: [
        'Describe your family, home and neighbourhood',
        'Talk about past events and daily habits',
        'Handle shopping and simple transactions',
        'Understand short texts and announcements',
        'Make simple plans and appointments',
        "Describe people's appearance and personality",
      ],
      pt: [
        'Descrever família, casa e bairro',
        'Falar sobre eventos passados e hábitos',
        'Fazer compras e transações simples',
        'Entender textos curtos e avisos',
        'Fazer planos simples e marcar compromissos',
        'Descrever aparência e personalidade',
      ],
    },
  },
  {
    level: 'B1', icon: '🌳', label: { en: 'Intermediate', pt: 'Intermediário' },
    color: B.oliva, text: '#fff',
    canDo: {
      en: [
        'Handle most travel situations confidently',
        'Express opinions and explain your views',
        'Write clear messages and emails',
        'Understand main points of TV shows and news',
        'Have conversations about familiar topics',
        'Talk about experiences and future plans',
      ],
      pt: [
        'Lidar com situações de viagem com confiança',
        'Expressar opiniões e explicar pontos de vista',
        'Escrever mensagens e e-mails claros',
        'Entender pontos principais de TV e notícias',
        'Ter conversas sobre temas familiares',
        'Falar sobre experiências e planos futuros',
      ],
    },
  },
  {
    level: 'B2', icon: '🌲', label: { en: 'Upper-Intermediate', pt: 'Interm. Avançado' },
    color: B.marrom, text: '#fff',
    canDo: {
      en: [
        'Have natural work and professional conversations',
        'Debate complex topics fluently',
        'Understand films and podcasts at natural speed',
        'Write detailed reports and structured texts',
        'Negotiate and handle difficult conversations',
        'Understand implicit meaning and nuance',
      ],
      pt: [
        'Ter conversas de trabalho e profissionais',
        'Debater temas complexos com fluência',
        'Entender filmes e podcasts em velocidade natural',
        'Escrever relatórios detalhados',
        'Negociar e lidar com conversas difíceis',
        'Entender significado implícito e nuances',
      ],
    },
  },
  {
    level: 'C1', icon: '🏔️', label: { en: 'Advanced', pt: 'Avançado' },
    color: B.dark, text: B.rosa,
    canDo: {
      en: [
        'Express yourself fluently and precisely',
        'Understand complex academic texts',
        'Write sophisticated essays and formal documents',
        'Understand humour, irony and cultural references',
        'Participate in any professional situation',
        'Read literature and nuanced media with ease',
      ],
      pt: [
        'Se expressar com fluência e precisão',
        'Entender textos acadêmicos complexos',
        'Escrever redações sofisticadas e documentos formais',
        'Entender humor, ironia e referências culturais',
        'Participar de qualquer situação profissional',
        'Ler literatura e mídia com nuances facilmente',
      ],
    },
  },
]
