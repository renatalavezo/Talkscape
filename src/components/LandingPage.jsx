import { useState } from 'react'
import { useIsMobile } from '../hooks/useIsMobile'
import Logo from './Logo'
import Icon from './Icon'
import { dbLoad, dbSave } from '../firebase'
import { hashPassword } from '../utils'
import { AVATARS } from '../constants/avatars'
import { JOURNEYS } from '../constants/journeys'
import heroStudentImg from '../assets/hero-student.jpg'

// ---- local palette for the new landing-page design (scoped to this file only) ----
const C = {
  cream: '#FBF5EA',
  creamAlt: '#F4EAD8',
  dark: '#2B2621',
  text: '#3D362F',
  mid: '#5C534A',
  mid2: '#6E655C',
  muted: '#8A7F73',
  green: '#2E5631',
  greenSoft: '#E4EDE0',
  greenLight: '#CBD8C4',
  terracotta: '#C9581F',
  pink: '#C24A6B',
  tan: '#F1E4CF',
  tanText: '#6E3B24',
  border: 'rgba(110,59,36,.1)',
  border2: 'rgba(110,59,36,.12)',
  border3: 'rgba(110,59,36,.14)',
  white: '#fff',
  footer: '#2B2621',
  footerMuted: '#D8CFC2',
  aboutStripeA: '#E4CFAE', aboutStripeB: '#DCC49F',
}

const serif = (weight, size, extra = {}) => ({ fontFamily: "'Newsreader',serif", fontWeight: weight, fontSize: size, ...extra })
const sans = (weight, size, extra = {}) => ({ fontFamily: "'Hanken Grotesk',sans-serif", fontWeight: weight, fontSize: size, ...extra })
const navLink = { color: 'inherit', textDecoration: 'none' }

const FORMS_LINK = 'https://forms.gle/MgL1cMDT9gijCeWD9'
const INSTAGRAM = 'https://www.instagram.com/talkscape.byrenata'
const WHATSAPP = 'https://wa.me/5511986704076?text=Olá%20Renata!%20Vim%20pelo%20TalkScape%20e%20quero%20saber%20mais%20sobre%20as%20aulas.'
const WELCOME_CLASS = 'https://wa.me/5511986704076?text=Olá%20Renata!%20Vim%20pelo%20TalkScape%20e%20quero%20agendar%20minha%20Welcome%20Class%20gratuita.'
const LINK_PAGAMENTO_ASAAS = 'https://www.asaas.com/c/ri6cdcimyr50t33r'
const ASAAS_LINKS = [
  'https://www.asaas.com/c/ri6cdcimyr50t33r',   // 1 jornada
  'https://www.asaas.com/c/dcep19uf853426c8',    // 2
  'https://www.asaas.com/c/mgyhm610m8108n8r',    // 3
  'https://www.asaas.com/c/5beqc3ok654i2r64',    // 4
  'https://www.asaas.com/c/g6vszeumpn1p0yls',    // 5
  'https://www.asaas.com/c/21z5o7osm2k2cwjz',    // 6
  'https://www.asaas.com/c/gifgzldckasn46kf',    // 7
  'https://www.asaas.com/c/hb2l1nwqghtkbi8x',    // 8
]
const ASAAS_LINK_ALL = 'https://www.asaas.com/c/8tmx9qi6djugpxwv' // todas (promo)

const WAButton = ({ style, href = WHATSAPP, children = 'Falar no WhatsApp' }) => (
  <a href={href} target="_blank" rel="noreferrer"
    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: '#25D366', color: '#fff', borderRadius: 100, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: "'Hanken Grotesk',sans-serif", ...style }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    {children}
  </a>
)

// ---- static content data (mirrors the mockup copy) ----

const DIFFERENTIALS = [
  { icon: 'target', title: 'Verdadeiramente personalizado', text: 'Cada aluna percorre um caminho único, a partir do seu ritmo, dos seus objetivos e da sua história. Não existe receita pronta aqui. O que funciona pra uma pessoa pode não funcionar pra outra, e isso é respeitado desde o primeiro encontro.' },
  { icon: 'messagesSquare', title: 'Inglês como prática social', text: 'Aprender uma língua vai muito além de memorizar gramática. O foco é desenvolver a sua capacidade de se expressar e pensar em inglês de forma genuína, com contexto e propósito, não apenas pra passar em testes.' },
  { icon: 'trendingUp', title: 'Evolução acompanhada de perto', text: 'Com o TalkScape você visualiza seu progresso semana a semana, de forma concreta e transparente. Adeus àquela sensação de estudar sem sair do lugar. Aqui cada etapa é registrada e celebrada.' },
]

const HOW_IT_WORKS = [
  { n: '01', title: 'Seu ponto de partida', text: 'A gente descobre juntas seu nível, seus objetivos e a sua história com o inglês.' },
  { n: '02', title: 'Plano sob medida', text: 'Um caminho único, construído a partir do seu ritmo, nada de receita pronta.' },
  { n: '03', title: 'Aulas + plataforma', text: 'Aulas ao vivo com a Renata e a Jornada Digital pra praticar entre um encontro e outro.' },
  { n: '04', title: 'Progresso à vista', text: 'Você acompanha sua evolução semana a semana, de forma concreta e transparente.' },
]

const DIGITAL_SKILLS = [['listening', 'Listening'], ['speaking', 'Speaking'], ['bookOpen', 'Gramática'], ['star', 'Vocabulário']]
const DIGITAL_INCLUDES = ['Acesso completo à plataforma TalkScape', '1 jornada de 12 semanas incluída', 'Habit tracker diário', 'Espaço de dúvidas com a Renata']

const PLANS = [
  {
    name: 'Essencial', icon: 'sprout', color: C.green, highlight: false,
    hours: '1h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 400' }, { label: '3 meses', price: 'R$ 380' }, { label: '6 meses', price: 'R$ 350' }, { label: '12 meses', price: 'R$ 320' }],
    benefits: ['Acesso ao Grupo da Comunidade', 'Checklist mensal de estudo', 'Correção de até 1 texto mensal', 'Feedback class a cada 3 meses'],
  },
  {
    name: 'Jornada', icon: 'travel', color: C.terracotta, highlight: true,
    hours: '2h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 640' }, { label: '3 meses', price: 'R$ 610' }, { label: '6 meses', price: 'R$ 580' }, { label: '12 meses', price: 'R$ 540' }],
    benefits: ['Todos os benefícios do Essencial', 'Prioridade para reposições', 'Correção ilimitada de textos', 'Biblioteca exclusiva', 'Desconto de 10% em aulas avulsas'],
  },
  {
    name: 'Horizonte', icon: 'mountain', color: C.green, highlight: false,
    hours: '3h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 900' }, { label: '3 meses', price: 'R$ 860' }, { label: '6 meses', price: 'R$ 830' }, { label: '12 meses', price: 'R$ 790' }],
    benefits: ['Todos os benefícios do Jornada', 'Relatório de progresso mensal', 'Acesso prioritário na agenda'],
  },
]

const DUO_PLANS = [
  {
    name: 'Parceria Essencial', icon: 'handshake', color: C.green, highlight: false,
    hours: '1h/sem',
    prices: [{ label: 'Valor cheio', price: 'R$ 300/aluna' }, { label: '3 meses', price: 'R$ 285/aluna' }, { label: '6 meses', price: 'R$ 265/aluna' }, { label: '12 meses', price: 'R$ 240/aluna' }],
    benefits: ['Acesso ao Grupo da Comunidade', 'Checklist mensal para a dupla', 'Correção de até 1 texto mensal', 'Acompanhamento da dupla juntas'],
  },
  {
    name: 'Jornada a Dois', icon: 'travel', color: C.terracotta, highlight: true,
    hours: '2h/sem',
    prices: [{ label: 'Valor cheio', price: 'R$ 480/aluna' }, { label: '3 meses', price: 'R$ 455/aluna' }, { label: '6 meses', price: 'R$ 435/aluna' }, { label: '12 meses', price: 'R$ 405/aluna' }],
    benefits: ['Todos os benefícios da Parceria Essencial', 'Atividades extras semanais', 'Biblioteca exclusiva', 'Fast classes individuais de 15min'],
  },
  {
    name: 'Além do Horizonte', icon: 'mountain', color: C.green, highlight: false,
    hours: '3h/sem',
    prices: [{ label: 'Valor cheio', price: 'R$ 675/aluna' }, { label: '3 meses', price: 'R$ 640/aluna' }, { label: '6 meses', price: 'R$ 620/aluna' }, { label: '12 meses', price: 'R$ 590/aluna' }],
    benefits: ['Todos os benefícios da Jornada a Dois', 'Relatório individual bimestral', 'Acesso prioritário à agenda'],
  },
]

const SOCIAL_PROOF = [
  { icon: 'usersRound', value: '500+', label: 'alunas atendidas' },
  { icon: 'bookOpen', value: '6 anos', label: 'de experiência' },
  { icon: 'general', value: 'Pesquisa', label: 'em inglês decolonial' },
]

const FAQS = [
  { q: 'Como eu descubro meu nível de inglês?', a: 'Na sua Welcome Class a gente faz uma conversa natural pra entender onde você está. Não é um teste chato, é só pra eu conhecer seu ritmo e suas dúvidas.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim! Você tem 7 dias de garantia pra testar sem compromisso. Depois, pode cancelar a qualquer momento, sem multa. Só peço aviso com uma semana de antecedência pra avisar se houver reposição pendente.' },
  { q: 'Como funciona a Welcome Class?', a: 'A gente marca um horário no WhatsApp. São 30-40 minutos conversando em inglês sobre seus objetivos, sua história com a língua, e o que você espera alcançar. Depois eu mando uma proposta de plano personalizado.' },
  { q: 'E se eu perder uma aula?', a: 'Sem problema! Você pode repor em outro horário na mesma semana, desde que avise com 24h de antecedência. Os planos Jornada e Horizonte têm prioridade em reposição.' },
  { q: 'As aulas são síncronas (ao vivo)?', a: 'Sim, as aulas com a Renata são sempre ao vivo e online. Além delas, você tem acesso à plataforma com jornadas de estudo pra praticar no seu ritmo, entre um encontro e outro.' },
  { q: 'Qual plano é melhor pra mim?', a: 'Depende do seu ritmo e objetivo. Essencial é ótimo se você quer uma aula por semana. Jornada é mais completo com aulas + plataforma. Horizonte é pra quem quer mergulhar (3h/semana). Na Welcome Class a gente descobre juntas!' },
]

const TURMA_PLAN = {
  name: 'Turma Aberta', icon: 'usersRound', color: C.terracotta, highlight: true, badge: 'MAIS POPULAR',
  hours: '1h/semana',
  prices: [{ label: 'por aluna', price: 'R$ 250/aluna' }],
  note: 'para iniciantes',
  benefits: ['Para quem está começando', 'Grupos de até 4 alunas', 'Muita interação e prática', 'Abre com 4 inscritas', 'Acesso à plataforma'],
}

const PLAN_TABS = [
  ['individual', 'Individual'],
  ['dupla', 'Em dupla'],
  ['turma', 'Em turma'],
]

const TESTIMONIALS = [
  { text: 'Gosto da maneira dinâmica como a didática é aplicada. Recomendaria sim, as aulas são particulares e adaptadas para cada aluna.', name: 'Aluna do plano Essencial' },
  { text: 'As aulas são divertidas, leves e bem estruturadas. A cada semana trabalhamos um assunto novo, e isso me motiva a continuar. Os vídeos junto aos exercícios de escrita e conversação são muito eficazes.', name: 'Aluna do plano Jornada' },
  { text: 'Gosto do jeito que lida com o aprendizado e da liberdade pra nos adaptarmos. Reforcei muitos aprendizados e descobri coisas sobre a língua que nunca tinha visto. As dúvidas são tiradas de forma clara e o espaço é muito receptivo.', name: 'Aluna do plano Horizonte' },
]

// ---- small presentational helpers ----

const SectionEyebrow = ({ children }) => (
  <div style={{ color: C.terracotta, fontWeight: 700, fontSize: 14, letterSpacing: '.08em' }}>{children}</div>
)

const FaqItem = ({ q, a, open, onToggle }) => (
  <div style={{ background: '#fff', border: `1px solid ${C.border2}`, borderRadius: 14, padding: '20px 24px' }}>
    <button onClick={onToggle} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, fontFamily: "'Hanken Grotesk',sans-serif" }}>
      <span style={{ fontWeight: 700, fontSize: 16, color: C.dark }}>{q}</span>
      <span style={{ fontSize: 20, color: C.terracotta, flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform .15s' }}>+</span>
    </button>
    {open && <p style={{ fontSize: 15, lineHeight: 1.6, color: C.mid2, margin: '14px 0 0' }}>{a}</p>}
  </div>
)

// Tabela de valores fidelidade: quanto maior o compromisso, menor o mensal
const PriceLadder = ({ prices }) => (
  <div style={{ background: C.cream, borderRadius: 12, margin: '20px 0', overflow: 'hidden' }}>
    {prices.map((p, j) => {
      const last = j === prices.length - 1
      return (
        <div key={j} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 16px', fontSize: 15, borderTop: j > 0 ? `1px solid ${C.border3}` : 'none', background: last ? C.tan : 'transparent' }}>
          <span style={{ color: last ? C.tanText : C.mid2, fontWeight: last ? 600 : 400 }}>{p.label}</span>
          <span style={{ fontWeight: last ? 800 : 700, color: last ? C.terracotta : C.text }}>{p.price}</span>
        </div>
      )
    })}
  </div>
)

// Nota explicando o que é um plano fidelidade
const FidelityNote = () => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, maxWidth: 720, margin: '28px auto 0', background: '#fff', border: `1px solid ${C.border2}`, borderRadius: 14, padding: '16px 20px' }}>
    <Icon name="sprout" size={20} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
    <div style={{ fontSize: 14.5, lineHeight: 1.55, color: C.mid2 }}>
      <strong style={{ color: C.dark }}>O que é um plano fidelidade?</strong> É o seu tempo de compromisso com a jornada. Quanto mais meses você escolhe de uma vez (3, 6 ou 12), menor fica o valor mensal. O valor cheio é o plano mês a mês, sem fidelidade.
    </div>
  </div>
)

const PlanCard = ({ plan }) => (
  <div style={{
    background: '#fff', borderRadius: 20, padding: '32px 28px', position: 'relative',
    border: plan.highlight ? `1.5px solid ${C.terracotta}` : `1px solid ${C.border2}`,
    boxShadow: plan.highlight ? '0 30px 60px -35px rgba(201,88,31,.5)' : 'none',
  }}>
    {plan.highlight && (
      <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: C.terracotta, color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '.04em', padding: '5px 16px', borderRadius: 100, whiteSpace: 'nowrap' }}>
        {plan.badge || 'MAIS POPULAR'}
      </div>
    )}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <Icon name={plan.icon} size={24} color={plan.color} />
        <span style={sans(800, 22)}>{plan.name}</span>
      </div>
      <span style={{ fontSize: 14, fontWeight: 700, color: C.mid2, whiteSpace: 'nowrap' }}>{plan.hours}</span>
    </div>
    <PriceLadder prices={plan.prices} />
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: C.text }}>
      {plan.benefits.map((b, j) => (
        <div key={j} style={{ display: 'flex', gap: 10 }}>
          <Icon name="check" size={18} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
          <span>{b}</span>
        </div>
      ))}
    </div>
    <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{
      display: 'block', textAlign: 'center', fontWeight: plan.highlight ? 800 : 700, fontSize: 16, padding: 14, borderRadius: 100, marginTop: 24, textDecoration: 'none',
      background: plan.highlight ? C.terracotta : 'transparent', color: plan.highlight ? '#fff' : C.terracotta,
      border: plan.highlight ? 'none' : `1.5px solid ${C.terracotta}`,
    }}>
      Quero esse plano
    </a>
  </div>
)

export default function LandingPage({ onStudent, onCourse, onTeacher }) {
  const isMobile = useIsMobile(820)
  const [showModal, setShowModal] = useState(false)
  const [showTeacherLink, setShowTeacherLink] = useState(false)
  const [tipo, setTipo] = useState('particular')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')
  const [done, setDone] = useState(false)
  const [openFaq, setOpenFaq] = useState(0)
  const [planTab, setPlanTab] = useState('individual')

  const openModal = (t = 'particular') => { setTipo(t); setNome(''); setEmail(''); setPhone(''); setSenha(''); setErr(''); setShowModal(true) }

  const handleSubmit = async () => {
    if (!nome.trim() || !email.trim() || !senha.trim()) { setErr('Preencha todos os campos.'); return }
    if (tipo === 'particular' && !phone.trim()) { setErr('Preencha seu celular.'); return }
    if (senha.trim().length < 6) { setErr('A senha deve ter pelo menos 6 caracteres.'); return }
    setLoading(true); setErr('')
    try {
      const fresh = await dbLoad()
      const em = email.trim().toLowerCase()
      const hashed = await hashPassword(senha.trim())
      const avatar = AVATARS[Math.floor(Math.random() * AVATARS.length)]
      const id = `${tipo === 'particular' ? 'st' : 'cs'}_${Date.now()}_${Math.random().toString(36).slice(2,6)}`
      if (tipo === 'particular') {
        const students = Array.isArray(fresh.students) ? fresh.students : Object.values(fresh.students || {})
        const username = nome.trim().toLowerCase().replace(/\s+/g, '.').replace(/[^a-z0-9.]/g, '') + '_' + id.slice(-4)
        await dbSave({ ...fresh, students: [...students, { id, name: nome.trim(), username, email: em, phone: phone.trim(), password: hashed, avatar, active: false, createdAt: new Date().toISOString().slice(0,10) }] })
      } else {
        const cursos = Array.isArray(fresh.courseStudents) ? fresh.courseStudents : Object.values(fresh.courseStudents || {})
        await dbSave({ ...fresh, courseStudents: [...cursos, { id, name: nome.trim(), email: em, password: hashed, active: false, avatar, createdAt: new Date().toISOString().slice(0,10) }] })
      }
      setShowModal(false)
      setDone(true)
    } catch(e) {
      setErr('Erro ao salvar. Tente novamente.'); setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Hanken Grotesk',sans-serif", color: C.dark, background: C.cream }}>

      {done && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(43,38,33,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}>
          <div style={{ background: '#fff', borderRadius: 24, padding: 36, width: '100%', maxWidth: 380, textAlign: 'center', boxShadow: '0 24px 60px rgba(43,38,33,0.35)' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}><Icon name="checkCircle" size={52} color={C.green} /></div>
            <p style={sans(800, 20, { color: C.dark, marginBottom: 10 })}>Cadastro recebido!</p>
            <p style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 14, color: C.muted, lineHeight: 1.6, marginBottom: 24 }}>
              {tipo === 'particular'
                ? 'Teacher Renata vai entrar em contato para liberar seu acesso. Fique de olho no WhatsApp!'
                : 'Assim que confirmarmos seu pagamento, liberamos seu acesso. Fique de olho no WhatsApp!'}
            </p>
            <WAButton href="https://wa.me/5511986704076" style={{ marginBottom: 14 }}>WhatsApp Teacher Renata</WAButton>
            <br />
            <button style={{ background: 'none', border: 'none', color: C.muted, fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', marginTop: 4 }} onClick={() => setDone(false)}>
              Fechar
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(43,38,33,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => setShowModal(false)}>
          <div style={{ background: '#fff', borderRadius: 24, padding: 32, width: '100%', maxWidth: 400, boxShadow: '0 24px 60px rgba(43,38,33,0.35)', maxHeight: '90vh', overflowY: 'auto' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <p style={sans(800, 18, { color: C.dark })}>Começar minha jornada</p>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: C.muted }} onClick={() => setShowModal(false)}>×</button>
            </div>

            {/* Tipo selector */}
            <div style={{ display: 'flex', background: C.cream, borderRadius: 12, padding: 4, marginBottom: 24, gap: 4 }}>
              {[['particular', 'Aula com Teacher Renata'], ['curso', 'Jornada Digital']].map(([k, lb]) => (
                <button key={k} onClick={() => { setTipo(k); setErr('') }}
                  style={{ flex: 1, padding: '8px', borderRadius: 9, border: 'none', background: tipo === k ? '#fff' : 'transparent', color: tipo === k ? C.dark : C.muted, fontSize: 12, fontWeight: 700, fontFamily: "'Hanken Grotesk',sans-serif", cursor: 'pointer', boxShadow: tipo === k ? '0 2px 6px rgba(43,38,33,0.1)' : 'none', transition: 'all 0.15s' }}>
                  {lb}
                </button>
              ))}
            </div>

            {/* AULA PARTICULAR - link para forms */}
            {tipo === 'particular' && (
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: C.tan, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <Icon name="graduation" size={32} color={C.terracotta} />
                </div>
                <p style={sans(700, 16, { color: C.dark, marginBottom: 8 })}>Aulas particulares com Teacher Renata</p>
                <p style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 13, color: C.muted, lineHeight: 1.65, marginBottom: 24 }}>
                  Preencha o formulário e em breve Teacher Renata entra em contato para marcar sua primeira aula!
                </p>
                <a href={FORMS_LINK} target="_blank" rel="noreferrer"
                  style={{ display: 'block', width: '100%', padding: '14px', background: C.terracotta, borderRadius: 12, color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: "'Hanken Grotesk',sans-serif", textDecoration: 'none', boxSizing: 'border-box', marginBottom: 12 }}>
                  Preencher formulário →
                </a>
                <WAButton style={{ boxShadow: '0 4px 14px rgba(37,211,102,0.3)' }}>Ou fale no WhatsApp</WAButton>
              </div>
            )}

            {/* JORNADA DIGITAL - inscrição no site */}
            {tipo === 'curso' && (<>
              <p style={sans(600, 12, { color: C.muted, marginBottom: 6 })}>Nome completo</p>
              <input style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: `1.5px solid ${C.border3}`, fontSize: 14, fontFamily: "'Hanken Grotesk',sans-serif", marginBottom: 14, boxSizing: 'border-box', outline: 'none' }}
                placeholder="Seu nome completo" value={nome} onChange={e => { setNome(e.target.value); setErr('') }} />
              <p style={sans(600, 12, { color: C.muted, marginBottom: 6 })}>Email</p>
              <input type="email" style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: `1.5px solid ${C.border3}`, fontSize: 14, fontFamily: "'Hanken Grotesk',sans-serif", marginBottom: 14, boxSizing: 'border-box', outline: 'none' }}
                placeholder="seuemail@email.com" value={email} onChange={e => { setEmail(e.target.value); setErr('') }} />
              <p style={sans(600, 12, { color: C.muted, marginBottom: 4 })}>Senha de acesso</p>
              <p style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 11, color: C.muted, marginBottom: 6 }}>Mínimo 6 caracteres.</p>
              <input type="password" style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: `1.5px solid ${C.border3}`, fontSize: 14, fontFamily: "'Hanken Grotesk',sans-serif", marginBottom: 22, boxSizing: 'border-box', outline: 'none' }}
                placeholder="••••••••" value={senha} onChange={e => { setSenha(e.target.value); setErr('') }}
                onKeyDown={e => e.key === 'Enter' && handleSubmit()} />
              {err && <p style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 12, color: '#DC2626', marginBottom: 14, background: '#FEE2E2', padding: '8px 12px', borderRadius: 8 }}>{err}</p>}
              <button disabled={loading} onClick={handleSubmit}
                style={{ width: '100%', padding: '14px', background: loading ? '#e0c4a8' : C.terracotta, border: 'none', borderRadius: 12, color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: "'Hanken Grotesk',sans-serif", cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Salvando...' : 'Criar conta →'}
              </button>
            </>)}
          </div>
        </div>
      )}

      {/* NAV */}
      <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(251,245,234,.92)', backdropFilter: 'blur(10px)', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: isMobile ? '10px 16px' : '12px 40px' }}>
          <Logo h={isMobile ? 40 : 54} />
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 8 : 24, fontSize: 15, fontWeight: 600, color: '#4A423A', flexWrap: 'wrap' }}>
            {!isMobile && <>
              <a href="#porque" style={navLink}>Por quê</a><a href="#metodo" style={navLink}>Método</a><a href="#jornadas" style={navLink}>Jornadas</a><a href="#planos" style={navLink}>Planos</a><a href="#renata" style={navLink}>A Renata</a>
            </>}
            <button onClick={onStudent} style={{ border: `1.5px solid ${C.green}`, background: 'none', color: C.green, padding: isMobile ? '8px 14px' : '10px 20px', borderRadius: 100, fontWeight: 600, fontSize: isMobile ? 13 : 15, cursor: 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap' }}>Já sou aluna</button>
            <a href={WELCOME_CLASS} target="_blank" rel="noreferrer" style={{ background: C.terracotta, border: 'none', color: '#fff', padding: isMobile ? '8px 14px' : '10px 22px', borderRadius: 100, fontWeight: 700, fontSize: isMobile ? 13 : 15, cursor: 'pointer', fontFamily: "'Hanken Grotesk',sans-serif", whiteSpace: 'nowrap', textDecoration: 'none' }}>Agende sua Welcome Class</a>
          </div>
        </div>
      </div>

      {/* SOCIAL PROOF */}
      <div style={{ background: C.creamAlt, borderBottom: `1px solid ${C.border}` }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '16px 20px' : '22px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 16 : 28, flexWrap: 'wrap', textAlign: 'center' }}>
          {SOCIAL_PROOF.map((s, i) => (
            <div key={i} style={{ display: 'contents' }}>
              {i > 0 && <div style={{ width: 1, height: 34, background: C.border3 }} />}
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name={s.icon} size={isMobile ? 18 : 22} color={C.terracotta} />
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, fontSize: isMobile ? 15 : 17, color: C.terracotta, lineHeight: 1.1 }}>{s.value}</div>
                  <div style={{ fontSize: isMobile ? 12 : 13, color: C.muted }}>{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* HERO */}
      <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr .95fr', gap: isMobile ? 36 : 56, alignItems: 'center', padding: isMobile ? '40px 20px 48px' : '64px 40px 80px' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C.tan, color: C.tanText, fontWeight: 700, fontSize: isMobile ? 12.5 : 14, padding: '8px 16px', borderRadius: 100, letterSpacing: '.02em' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: C.pink, flexShrink: 0 }} /> INGLÊS ONLINE, DO SEU JEITO
          </div>
          <h1 style={serif(500, isMobile ? 42 : 66, { lineHeight: 1.05, letterSpacing: '-.015em', margin: '20px 0 0' })}>
            Fale inglês de <span style={{ fontStyle: 'italic', color: C.terracotta }}>verdade</span>, desde a primeira aula.
          </h1>
          <p style={{ fontSize: isMobile ? 17 : 20, lineHeight: 1.55, color: C.mid, maxWidth: 500, margin: '20px 0 0' }}>
            Aprenda conversando: aulas ao vivo <strong>individuais, em dupla ou em turma</strong>. Além de jornadas de estudo na plataforma pra você avançar no seu ritmo.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 30, flexWrap: 'wrap' }}>
            <a href={WELCOME_CLASS} target="_blank" rel="noreferrer" style={{ background: C.terracotta, color: '#fff', fontWeight: 700, fontSize: isMobile ? 16 : 18, padding: isMobile ? '14px 26px' : '17px 32px', borderRadius: 100, textDecoration: 'none' }}>Agende sua Welcome Class</a>
            <a href="#planos" style={{ color: C.green, fontWeight: 700, fontSize: isMobile ? 16 : 18, padding: '14px 8px', borderBottom: `2px solid ${C.green}`, textDecoration: 'none' }}>Ver planos e preços →</a>
          </div>
          <div style={{ marginTop: 14, fontSize: 14, color: C.muted, display: 'flex', alignItems: 'center', gap: 7 }}>
            <Icon name="check" size={16} color={C.green} /> Aula de boas-vindas gratuita, sem compromisso
          </div>
        </div>
        <div style={{ position: 'relative', maxWidth: isMobile ? 340 : 'none', width: '100%', margin: isMobile ? '0 auto' : 0 }}>
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '180px 180px 24px 24px', overflow: 'hidden', border: `1px solid ${C.border3}` }}>
            <img src={heroStudentImg} alt="Aluna estudando inglês online" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', filter: 'saturate(0.85) sepia(0.18) hue-rotate(-8deg) brightness(1.03)' }} />
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(165deg, ${C.green}55 0%, transparent 45%, ${C.terracotta}3d 100%)`, mixBlendMode: 'multiply' }} />
          </div>
          <div style={{ position: 'absolute', bottom: isMobile ? 16 : 26, left: isMobile ? 12 : -28, background: '#fff', borderRadius: 16, padding: '14px 18px', boxShadow: '0 20px 40px -20px rgba(43,38,33,.4)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: C.green, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>R</div>
            <div><div style={{ fontWeight: 700, fontSize: 15 }}>Aqui é o seu espaço</div><div style={{ fontSize: 13, color: '#6E655C' }}>no seu ritmo, sem pressão</div></div>
          </div>
        </div>
      </div>

      {/* POR QUE */}
      <div id="porque" style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '48px 20px' : '70px 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
          <SectionEyebrow>POR QUE O TALKSCAPE</SectionEyebrow>
          <h2 style={serif(500, 46, { margin: '12px 0 12px', lineHeight: 1.1 })}>Não é mais uma escola de inglês. É o seu espaço.</h2>
          <p style={{ fontSize: 18, color: C.mid, margin: 0 }}>Aqui a língua é meio de se expressar, compreender e criar novas conexões, não decoreba pra passar em teste.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: 22 }}>
          {DIFFERENTIALS.map((d, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, padding: '34px 30px', border: `1px solid ${C.border}` }}>
              <div style={{ width: 54, height: 54, borderRadius: 14, background: C.tan, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={d.icon} size={26} color={C.terracotta} />
              </div>
              <div style={{ fontWeight: 800, fontSize: 21, margin: '20px 0 10px' }}>{d.title}</div>
              <div style={{ color: C.mid2, fontSize: 16, lineHeight: 1.6 }}>{d.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* METODO */}
      <div id="metodo" style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '40px 20px 52px' : '60px 40px 80px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 52px' }}>
          <SectionEyebrow>COMO FUNCIONA</SectionEyebrow>
          <h2 style={serif(500, 44, { margin: '12px 0 0', lineHeight: 1.1 })}>Inglês que respeita quem você é</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: 22 }}>
          {HOW_IT_WORKS.map((s, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, padding: '30px 26px', border: `1px solid ${C.border}` }}>
              <div style={serif(400, 30, { color: C.pink })}>{s.n}</div>
              <div style={{ fontWeight: 700, fontSize: 19, margin: '14px 0 8px' }}>{s.title}</div>
              <div style={{ color: C.mid2, fontSize: 15, lineHeight: 1.5 }}>{s.text}</div>
            </div>
          ))}
        </div>
      </div>

      {/* JORNADA DIGITAL + JORNADAS DISPONÍVEIS (bloco único) */}
      <div id="jornadas" style={{ background: C.green, color: '#F3ECDD' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: 40, alignItems: 'stretch' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C.terracotta, color: '#fff', fontWeight: 700, fontSize: 13, padding: '6px 14px', borderRadius: 100, letterSpacing: '.03em' }}>
                <Icon name="general" size={15} color="#fff" /> NOVO · JORNADA DIGITAL
              </div>
              <h2 style={serif(500, 44, { margin: '20px 0 16px', lineHeight: 1.1 })}>O que é uma Jornada?</h2>
              <p style={{ fontSize: 19, lineHeight: 1.6, color: C.greenLight, margin: '0 0 28px', maxWidth: 480 }}>
                Um programa de estudo <strong style={{ color: '#fff' }}>autônomo de 12 semanas</strong>, com atividades semanais organizadas dentro da plataforma TalkScape. Você estuda no seu ritmo, com o suporte da Renata sempre que precisar.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, maxWidth: 440 }}>
                {DIGITAL_SKILLS.map(([ic, lb], i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,.08)', borderRadius: 12, padding: '14px 16px', fontWeight: 700, fontSize: 16 }}>
                    <Icon name={ic} size={20} color="#F0C9A0" /> {lb}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: C.terracotta, color: '#fff', borderRadius: 22, padding: 40, display: 'flex', flexDirection: 'column' }}>
              <div style={serif(400, 28, { lineHeight: 1.1 })}>Jornada TalkScape Digital</div>
              <div style={{ fontSize: 16, opacity: .9, marginTop: 6 }}>Acesso à plataforma + jornada à sua escolha</div>
              <div style={{ margin: '24px 0', height: 1, background: 'rgba(255,255,255,.25)' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: 11, fontSize: 16 }}>
                {DIGITAL_INCLUDES.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="check" size={19} color="#fff" /> {item}</div>
                ))}
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 26 }}>
                <div style={{ fontSize: 15, opacity: .9 }}>a partir de</div>
                <div style={serif(400, 52, { lineHeight: 1 })}>R$ 59,90<span style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: 17, fontWeight: 600, opacity: .9 }}> /mês · 1 jornada</span></div>
                <div style={{ display: 'inline-block', background: 'rgba(255,255,255,.18)', borderRadius: 100, padding: '6px 14px', fontSize: 14, fontWeight: 600, marginTop: 12 }}>+ R$ 19,90/mês por jornada adicional</div>
                <button onClick={() => openModal('curso')} style={{ display: 'block', width: '100%', textAlign: 'center', background: '#fff', color: C.terracotta, fontWeight: 800, fontSize: 17, padding: 16, borderRadius: 100, marginTop: 22, border: 'none', cursor: 'pointer', fontFamily: "'Hanken Grotesk',sans-serif" }}>
                  Quero me inscrever →
                </button>
              </div>
            </div>
          </div>

          {/* jornadas disponíveis - faixa compacta */}
          <div style={{ marginTop: 44, paddingTop: 36, borderTop: '1px solid rgba(255,255,255,.18)' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
              <h3 style={serif(500, 26, { margin: 0, color: '#fff' })}>Escolha entre {JOURNEYS.length} jornadas</h3>
              <span style={{ fontSize: 15, color: C.greenLight }}>faça uma por conta própria ou combine várias com as aulas ao vivo</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px,1fr))', gap: 10 }}>
              {JOURNEYS.map(j => (
                <div key={j.id} title={j.desc.pt} style={{ display: 'flex', alignItems: 'center', gap: 11, background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.14)', borderRadius: 12, padding: '13px 16px' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: j.color, flexShrink: 0, boxShadow: '0 0 0 3px rgba(255,255,255,.12)' }} />
                  <span style={{ fontWeight: 700, fontSize: 15, color: '#fff' }}>{j.pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PLANOS - formato único com alternador Individual / Em dupla / Em turma */}
      <div id="planos" style={{ background: C.creamAlt }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px' }}>
          <div style={{ textAlign: 'center', maxWidth: 660, margin: '0 auto 28px' }}>
            <SectionEyebrow>AULAS AO VIVO COM A RENATA</SectionEyebrow>
            <h2 style={serif(500, 46, { margin: '12px 0 12px', lineHeight: 1.1 })}>Escolha o formato que combina com você</h2>
            <p style={{ fontSize: 18, color: C.mid, margin: 0 }}>Aulas particulares com preços especiais, ou turma aberta mais acessível.</p>
          </div>

          {/* toggle */}
          <div style={{ textAlign: 'center', marginBottom: 26 }}>
            <div style={{ display: 'inline-flex', background: '#fff', border: `1px solid ${C.border2}`, borderRadius: 100, padding: 4, gap: 4 }}>
              {PLAN_TABS.map(([k, lb]) => {
                const active = planTab === k
                return (
                  <button key={k} onClick={() => setPlanTab(k)} style={{ fontFamily: "'Hanken Grotesk',sans-serif", fontSize: isMobile ? 13 : 15, fontWeight: 700, padding: isMobile ? '9px 16px' : '11px 24px', borderRadius: 100, border: 'none', cursor: 'pointer', transition: 'all .15s', background: active ? C.terracotta : 'transparent', color: active ? '#fff' : C.mid2 }}>{lb}</button>
                )
              })}
            </div>
          </div>

          {/* guarantee banner */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, textAlign: 'center', background: C.greenSoft, color: C.green, fontWeight: 700, fontSize: isMobile ? 13.5 : 14.5, padding: '12px 22px', borderRadius: 14, maxWidth: 560, margin: '0 auto 32px' }}>
            <Icon name="check" size={18} color={C.green} style={{ flexShrink: 0 }} /> Garantia de 7 dias: não curtiu a 1ª semana? Cancele sem multa.
          </div>

          {planTab === 'individual' && (
            <>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20, alignItems: 'start' }}>
                {PLANS.map((plan, i) => <PlanCard key={i} plan={plan} />)}
              </div>
              <FidelityNote />
            </>
          )}

          {planTab === 'dupla' && (
            <>
              <p style={{ textAlign: 'center', fontSize: 16, color: C.mid, margin: '0 auto 24px', maxWidth: 560 }}>Todos os benefícios dos planos individuais, com preço especial por aluna.</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20, alignItems: 'start' }}>
                {DUO_PLANS.map((plan, i) => <PlanCard key={i} plan={plan} />)}
              </div>
              <FidelityNote />
            </>
          )}

          {planTab === 'turma' && (
            <div style={{ maxWidth: 380, margin: '0 auto' }}>
              <div style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', position: 'relative', border: `1.5px solid ${C.terracotta}`, boxShadow: '0 30px 60px -35px rgba(201,88,31,.5)' }}>
                <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: C.terracotta, color: '#fff', fontSize: 12, fontWeight: 800, letterSpacing: '.04em', padding: '5px 16px', borderRadius: 100, whiteSpace: 'nowrap' }}>{TURMA_PLAN.badge}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon name={TURMA_PLAN.icon} size={24} color={TURMA_PLAN.color} />
                    <span style={sans(800, 22)}>{TURMA_PLAN.name}</span>
                  </div>
                  <span style={{ fontSize: 14, fontWeight: 700, color: C.mid2, whiteSpace: 'nowrap' }}>{TURMA_PLAN.hours}</span>
                </div>
                <div style={{ margin: '18px 0 6px' }}>
                  <span style={serif(500, 34, { color: C.terracotta })}>R$ 250</span>
                  <span style={{ fontSize: 14, color: C.mid2 }}>/mês</span>
                </div>
                <div style={{ fontSize: 12.5, color: C.muted, marginBottom: 20 }}>por aluna · {TURMA_PLAN.note}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, color: C.text }}>
                  {TURMA_PLAN.benefits.map((b, j) => (
                    <div key={j} style={{ display: 'flex', gap: 10 }}>
                      <Icon name="check" size={18} color={C.green} style={{ flexShrink: 0, marginTop: 2 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/5511986704076?text=Olá%20Renata!%20Quero%20entrar%20na%20lista%20de%20espera%20da%20turma%20aberta%20de%20iniciantes." target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', fontWeight: 800, fontSize: 16, padding: 14, borderRadius: 100, marginTop: 24, textDecoration: 'none', background: C.terracotta, color: '#fff' }}>Quero esse plano</a>
                <div style={{ textAlign: 'center', fontSize: 13, color: C.muted, marginTop: 12 }}>A turma abre quando completar 4 inscrições.</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* SOBRE A RENATA */}
      <div id="renata" style={{ background: C.creamAlt }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 56, alignItems: 'center', padding: isMobile ? '52px 20px' : '80px 40px' }}>
          <div style={{ aspectRatio: '4/5', borderRadius: 24, overflow: 'hidden', border: `1px solid ${C.border3}`, background: `repeating-linear-gradient(48deg,${C.aboutStripeA},${C.aboutStripeA} 14px,${C.aboutStripeB} 14px,${C.aboutStripeB} 28px)` }}>
            <img src="https://i.imgur.com/VJhFQyr.jpeg" alt="Renata" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div>
            <SectionEyebrow>SOBRE A PROFESSORA</SectionEyebrow>
            <h2 style={serif(500, 46, { margin: '12px 0 22px', lineHeight: 1.1 })}>Oi, eu sou a Renata!</h2>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: C.mid, margin: '0 0 16px' }}><strong style={{ color: C.dark }}>Professora desde antes de saber escrever</strong>, meus olhos sempre brilharam pelo ensinar, quando nas brincadeiras infantis havia apenas uma lousa com giz e alguns brinquedos me escutando.</p>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: C.mid, margin: '0 0 16px' }}>Hoje, além de dar aulas, tenho a oportunidade de estudar e pesquisar sobre o inglês: entender como essa língua é estruturada e, mais importante do que tudo, entender como podemos <strong style={{ color: C.dark }}>utilizá-la de forma crítica e reflexiva</strong>.</p>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: C.mid, margin: '0 0 16px' }}>Criei o TalkScape porque não acredito que uma língua deva ser apenas falada, como muitas escolas pregam por aí. Aqui, a língua deve ser compreendida como <strong style={{ color: C.green }}>meio de se expressar, compreender e criar novas conexões</strong>.</p>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: C.mid, margin: 0 }}>Ah, e por fim: tenho dois estagiários, a <strong style={{ color: C.dark }}>Toffee</strong> e o <strong style={{ color: C.dark }}>Gato</strong>. Eles estão ansiosos pra te conhecer.</p>
          </div>
        </div>
      </div>

      {/* DEPOIMENTOS */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '52px 20px' : '80px 40px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 44px' }}>
          <SectionEyebrow>DEPOIMENTOS</SectionEyebrow>
          <h2 style={serif(500, 46, { margin: '12px 0 12px', lineHeight: 1.1 })}>O que as alunas dizem</h2>
          <p style={{ fontSize: 18, color: C.mid, margin: 0 }}>Resultados reais de quem já está na jornada.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px,1fr))', gap: 20, alignItems: 'start' }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: '#fff', borderRadius: 18, padding: 32, border: `1px solid ${C.border}` }}>
              <Icon name="quote" size={30} color={C.pink} />
              <p style={serif(400, 20, { fontStyle: 'italic', lineHeight: 1.55, margin: '16px 0 22px', color: C.dark })}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: C.terracotta, fontWeight: 700, fontSize: 14 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: C.terracotta }} /> {t.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '0 20px 52px' : '0 40px 80px' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 40px' }}>
          <SectionEyebrow>DÚVIDAS?</SectionEyebrow>
          <h2 style={serif(500, 46, { margin: '12px 0 12px', lineHeight: 1.1 })}>Perguntas frequentes</h2>
        </div>
        <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} open={openFaq === i} onToggle={() => setOpenFaq(openFaq === i ? -1 : i)} />
          ))}
        </div>
      </div>

      {/* CTA FINAL */}
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: isMobile ? '0 20px 52px' : '0 40px 80px' }}>
        <div style={{ background: C.terracotta, borderRadius: 24, padding: '70px 56px', textAlign: 'center', color: '#fff' }}>
          <h2 style={serif(500, 50, { margin: '0 0 16px', lineHeight: 1.06 })}>Vem construir o seu espaço<br />de aprender inglês</h2>
          <p style={{ fontSize: 20, opacity: .92, margin: '0 auto 30px', maxWidth: 520 }}>Me conta seus objetivos na Welcome Class, uma aula gratuita pra a gente encontrar o formato ideal pra você.</p>
          <a href={WELCOME_CLASS} target="_blank" rel="noreferrer" style={{ display: 'inline-block', background: '#fff', color: C.terracotta, fontWeight: 800, fontSize: 19, padding: '18px 40px', borderRadius: 100, border: 'none', cursor: 'pointer', fontFamily: "'Hanken Grotesk',sans-serif", textDecoration: 'none' }}>
            Agende sua Welcome Class
          </a>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{ background: C.footer, color: C.footerMuted }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '48px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <Logo h={44} contrast />
          <div style={{ display: 'flex', gap: 28, fontSize: 15, fontWeight: 500, flexWrap: 'wrap' }}>
            <a href="#metodo" style={navLink}>Método</a><a href="#jornadas" style={navLink}>Jornadas</a><a href="#planos" style={navLink}>Planos</a><a href="#renata" style={navLink}>A Renata</a>
            <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={navLink}>Instagram</a>
          </div>
          <div style={{ fontSize: 14, opacity: .6 }}>© 2026 TalkScape by Renata</div>
        </div>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '0 40px 20px', display: 'flex', justifyContent: 'flex-end' }}>
          {!showTeacherLink ? (
            <button onClick={() => setShowTeacherLink(true)} style={{ background: 'none', border: 'none', color: 'rgba(216,207,194,0.35)', fontSize: 11, cursor: 'pointer', fontFamily: 'inherit' }}>
              acesso restrito
            </button>
          ) : (
            <button onClick={onTeacher} style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 10, padding: '7px 16px', color: 'rgba(216,207,194,0.7)', fontSize: 12, cursor: 'pointer', fontFamily: 'inherit' }}>
              Entrar como professora
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
