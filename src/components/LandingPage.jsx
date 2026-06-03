import { useState } from 'react'
import { B } from '../constants/colors'
import { ir, pp } from '../constants/styles'
import Logo from './Logo'
import Icon from './Icon'
import { JOURNEYS } from '../constants/journeys'
import { dbLoad, dbSave } from '../firebase'

const INSTAGRAM = 'https://www.instagram.com/talkscape.byrenata'
const WHATSAPP = 'https://wa.me/5511986704076?text=Olá%20Renata!%20Vim%20pelo%20TalkScape%20e%20quero%20saber%20mais%20sobre%20as%20aulas.'
const LINK_PAGAMENTO_ASAAS = 'COLOCAR_LINK_AQUI'
const WAButton = ({ style }) => (
  <a href={WHATSAPP} target="_blank" rel="noreferrer"
    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 24px', background: '#25D366', color: '#fff', borderRadius: 12, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', ...style }}>
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
    Falar no WhatsApp
  </a>
)

const PLANS = [
  {
    name: 'Essencial', icon: '📌', color: B.oliva, highlight: false,
    hours: '1h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 400' }, { label: '3 meses', price: 'R$ 380' }, { label: '6 meses', price: 'R$ 350' }, { label: '12 meses', price: 'R$ 320' }],
    benefits: ['Acesso ao Grupo da Comunidade', 'Checklist mensal de estudo', 'Correção de até 1 texto mensal', 'Feedback class a cada 3 meses'],
  },
  {
    name: 'Jornada', icon: '✈️', color: B.laranja, highlight: true,
    hours: '2h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 640' }, { label: '3 meses', price: 'R$ 610' }, { label: '6 meses', price: 'R$ 580' }, { label: '12 meses', price: 'R$ 540' }],
    benefits: ['Todos os benefícios do Essencial', 'Prioridade para reposições', 'Correção ilimitada de textos', 'Biblioteca exclusiva', 'Desconto de 10% em aulas avulsas'],
  },
  {
    name: 'Horizonte', icon: '🏞️', color: B.marrom, highlight: false,
    hours: '3h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 900' }, { label: '3 meses', price: 'R$ 860' }, { label: '6 meses', price: 'R$ 830' }, { label: '12 meses', price: 'R$ 790' }],
    benefits: ['Todos os benefícios do Jornada', 'Relatório de progresso mensal', 'Acesso prioritário na agenda'],
  },
]

const DUO_PLANS = [
  {
    name: 'Parceria Essencial', icon: '🤝', color: B.oliva, highlight: false,
    hours: '1h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 300/aluna' }, { label: '3 meses', price: 'R$ 285/aluna' }, { label: '6 meses', price: 'R$ 265/aluna' }, { label: '12 meses', price: 'R$ 240/aluna' }],
    benefits: ['Acesso ao Grupo da Comunidade', 'Checklist mensal para a dupla', 'Correção de até 1 texto mensal', 'Acompanhamento da dupla juntas'],
  },
  {
    name: 'Jornada a Dois', icon: '✈️', color: B.laranja, highlight: true,
    hours: '2h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 480/aluna' }, { label: '3 meses', price: 'R$ 455/aluna' }, { label: '6 meses', price: 'R$ 435/aluna' }, { label: '12 meses', price: 'R$ 405/aluna' }],
    benefits: ['Todos os benefícios da Parceria Essencial', 'Atividades extras semanais', 'Biblioteca exclusiva', 'Fast classes individuais de 15min'],
  },
  {
    name: 'Além do Horizonte', icon: '🏞️', color: B.marrom, highlight: false,
    hours: '3h/semana',
    prices: [{ label: 'Valor cheio', price: 'R$ 675/aluna' }, { label: '6 meses', price: 'R$ 620/aluna' }, { label: '12 meses', price: 'R$ 590/aluna' }],
    benefits: ['Todos os benefícios da Jornada a Dois', 'Relatório individual bimestral', 'Acesso prioritário à agenda'],
  },
]

const TESTIMONIALS = [
  { text: 'Eu gosto da maneira dinâmica como a didática é aplicada. Recomendaria sim, pois as aulas são particulares e adaptadas para cada aluno.', name: 'Aluna do plano Essencial' },
  { text: 'As aulas são divertidas, leves e bem estruturadas. A cada semana trabalhamos em um assunto novo e isso me motiva a continuar estudando inglês. A utilização de vídeos junto a exercícios de escrita e conversação são muito eficazes para o aprendizado.', name: 'Aluna do plano Jornada' },
  { text: 'Gosto do jeito que lida com o aprendizado de inglês e a liberdade que oferece para nos adaptarmos. Percebi que reforcei muitos aprendizados e descobri coisas sobre a língua que nunca tinha visto. As dúvidas são tiradas de forma clara e o espaço é extremamente receptivo.', name: 'Aluna do plano Horizonte' },
]

const DIFFERENTIALS = [
  { icon: 'target', title: 'Personalizado de verdade', text: 'Sem receita mágica. Cada aluna tem seu próprio caminho, ritmo e objetivos. O que funciona pra uma pode não funcionar pra outra — e tudo bem.' },
  { icon: 'feedback', title: 'Inglês como prática social', text: 'Estimulo o pensamento crítico mesmo numa segunda língua. Aqui você aprende a se expressar de verdade, não só a decorar regras.' },
  { icon: 'progress', title: 'Progresso visível', text: 'Com o TalkScape você acompanha sua evolução em tempo real, semana a semana. Nada de sensação de estar parada no lugar.' },
]

const PlanCard = ({ plan, isDuo = false, onStudent, onCourse }) => (
  <div style={{ borderRadius: 20, border: `2px solid ${plan.highlight ? plan.color : B.border}`, background: plan.highlight ? plan.color + '08' : B.white, padding: '28px 24px', position: 'relative', boxShadow: plan.highlight ? `0 12px 40px ${plan.color}22` : 'none' }}>
    {plan.highlight && (
      <div style={{ position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)', background: plan.color, color: '#fff', borderRadius: 20, padding: '4px 16px', fontSize: 11, fontWeight: 700, fontFamily: 'Poppins,sans-serif', whiteSpace: 'nowrap' }}>
        ⭐ Mais popular
      </div>
    )}
    <div style={{ background: B.cream, borderRadius: 12, padding: '12px 14px', marginBottom: 16 }}>
      {plan.prices.map((p, j) => (
        <div key={j} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: j < plan.prices.length - 1 ? `1px solid ${B.border}` : 'none' }}>
          <p style={{ ...ir(400, 12), color: B.mid }}>{p.label}</p>
          <p style={{ ...pp(700, 14), color: plan.color }}>{p.price}</p>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 20 }}>
      {plan.benefits.map((b, j) => (
        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <Icon name="check" size={14} color={plan.color} style={{ marginTop: 2, flexShrink: 0 }} />
          <p style={{ ...ir(400, 13), color: B.dark }}>{b}</p>
        </div>
      ))}
    </div>
    <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ display: 'block', textAlign: 'center', padding: '12px', background: plan.highlight ? plan.color : B.bege, color: plan.highlight ? '#fff' : B.dark, borderRadius: 12, fontSize: 13, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif' }}>
      Quero esse plano
    </a>
  </div>
)

export default function LandingPage({ onBack, onStudent, onCourse }) {
  const [showModal, setShowModal] = useState(false)
  const [tipo, setTipo] = useState('particular')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [usuario, setUsuario] = useState('')
  const [senha, setSenha] = useState('')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState('')

  const openModal = (t = 'particular') => { setTipo(t); setNome(''); setEmail(''); setUsuario(''); setSenha(''); setErr(''); setShowModal(true) }

  const handleSubmit = async () => {
    if (!nome.trim() || !email.trim() || !senha.trim()) { setErr('Preencha todos os campos.'); return }
    if (senha.trim().length < 6) { setErr('A senha deve ter pelo menos 6 caracteres.'); return }
    setLoading(true); setErr('')
    try {
      const fresh = await dbLoad()
      const em = email.trim().toLowerCase()
      const id = `${tipo === 'particular' ? 's' : 'cs'}_${Date.now()}`
      if (tipo === 'particular') {
        const students = Array.isArray(fresh.students) ? fresh.students : Object.values(fresh.students || {})
        await dbSave({
          ...fresh,
          students: [...students, { id, name: nome.trim(), username: em, email: em, password: senha.trim(), avatar: 'Lily', createdAt: new Date().toISOString().slice(0, 10) }]
        })
      } else {
        const cursos = Array.isArray(fresh.courseStudents) ? fresh.courseStudents : Object.values(fresh.courseStudents || {})
        await dbSave({
          ...fresh,
          courseStudents: [...cursos, { id, name: nome.trim(), email: em, password: senha.trim(), active: false, avatar: 'Lily', jid: null, createdAt: new Date().toISOString().slice(0, 10) }]
        })
      }
      window.location.href = LINK_PAGAMENTO_ASAAS
    } catch(e) {
      setErr('Erro ao salvar. Tente novamente.'); setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', background: B.cream, fontFamily: 'Inter, sans-serif' }}>

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(44,24,16,0.6)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }} onClick={() => setShowModal(false)}>
          <div style={{ background: '#fff', borderRadius: 24, padding: 32, width: '100%', maxWidth: 400, boxShadow: '0 24px 60px rgba(44,24,16,0.35)' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 800, fontSize: 18, color: '#2c1810' }}>Começar minha jornada</p>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 20, color: '#b0a090' }} onClick={() => setShowModal(false)}>×</button>
            </div>

            {/* Tipo selector */}
            <div style={{ display: 'flex', background: '#f5ede6', borderRadius: 12, padding: 4, marginBottom: 20, gap: 4 }}>
              {[['particular', 'Aula particular'], ['curso', 'Jornada Digital']].map(([k, lb]) => (
                <button key={k} onClick={() => { setTipo(k); setErr('') }}
                  style={{ flex: 1, padding: '8px', borderRadius: 9, border: 'none', background: tipo === k ? '#fff' : 'transparent', color: tipo === k ? '#2c1810' : '#8a7060', fontSize: 12, fontWeight: 700, fontFamily: 'Poppins,sans-serif', cursor: 'pointer', boxShadow: tipo === k ? '0 2px 6px rgba(44,24,16,0.1)' : 'none', transition: 'all 0.15s' }}>
                  {lb}
                </button>
              ))}
            </div>

            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#8a7060', marginBottom: 20, lineHeight: 1.6, background: '#fdf8f5', borderRadius: 10, padding: '10px 12px' }}>
              {tipo === 'particular'
                ? '📚 Você já pode acessar a plataforma após o cadastro. Será redirecionada para o pagamento.'
                : '✨ Após o cadastro você aguarda a confirmação do pagamento para acessar a plataforma.'}
            </p>

            <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 12, color: '#8a7060', marginBottom: 6 }}>Nome completo</p>
            <input style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #e0d4c8', fontSize: 14, fontFamily: 'Inter,sans-serif', marginBottom: 14, boxSizing: 'border-box', outline: 'none' }}
              placeholder="Seu nome completo" value={nome} onChange={e => { setNome(e.target.value); setErr('') }} />

            <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 12, color: '#8a7060', marginBottom: 6 }}>Email</p>
            <input type="email" style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #e0d4c8', fontSize: 14, fontFamily: 'Inter,sans-serif', marginBottom: 14, boxSizing: 'border-box', outline: 'none' }}
              placeholder="seuemail@email.com" value={email} onChange={e => { setEmail(e.target.value); setErr('') }} />

            <p style={{ fontFamily: 'Poppins,sans-serif', fontWeight: 600, fontSize: 12, color: '#8a7060', marginBottom: 4 }}>Senha de acesso</p>
            <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 11, color: '#b0a090', marginBottom: 6 }}>Mínimo 6 caracteres.</p>
            <input type="password" style={{ width: '100%', padding: '11px 14px', borderRadius: 12, border: '1.5px solid #e0d4c8', fontSize: 14, fontFamily: 'Inter,sans-serif', marginBottom: 20, boxSizing: 'border-box', outline: 'none' }}
              placeholder="••••••••" value={senha} onChange={e => { setSenha(e.target.value); setErr('') }}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()} />

            {err && <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#DC2626', marginBottom: 14, background: '#FEE2E2', padding: '8px 12px', borderRadius: 8 }}>{err}</p>}

            <button disabled={loading} onClick={handleSubmit}
              style={{ width: '100%', padding: '14px', background: loading ? '#e0c4a8' : '#d46427', border: 'none', borderRadius: 12, color: '#fff', fontSize: 15, fontWeight: 700, fontFamily: 'Poppins,sans-serif', cursor: loading ? 'not-allowed' : 'pointer' }}>
              {loading ? 'Salvando...' : tipo === 'curso' ? 'Criar conta e ir para o pagamento →' : 'Continuar →'}
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(247,244,239,0.95)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${B.border}`, padding: '12px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Logo h={36} />
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          <button onClick={onStudent} style={{ padding: '8px 14px', background: B.bege, border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 600, color: B.dark, cursor: 'pointer', fontFamily: 'inherit' }}>
            Já sou aluna
          </button>
<button onClick={() => openModal('particular')} style={{ padding: '8px 14px', background: B.laranja, border: 'none', borderRadius: 10, fontSize: 12, fontWeight: 700, color: '#fff', cursor: 'pointer', fontFamily: 'Poppins,sans-serif' }}>Quero começar</button>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: `linear-gradient(145deg,${B.marrom},${B.laranja} 55%,${B.rosa})`, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <Logo h={80} contrast />
          <h1 style={{ ...pp(800, 34), color: '#fff', marginTop: 28, marginBottom: 16, lineHeight: 1.2 }}>
            Inglês que transforma.<br />Aulas que respeitam quem você é.
          </h1>
          <p style={{ ...ir(400, 16), color: 'rgba(255,255,255,0.85)', marginBottom: 40, lineHeight: 1.7 }}>
            Aulas particulares com acompanhamento real, jornadas personalizadas e uma professora que acredita no seu potencial.
          </p>
          <button onClick={() => openModal('particular')} style={{ display: 'inline-block', padding: '13px 28px', background: B.white, color: B.marrom, borderRadius: 14, fontSize: 14, fontWeight: 700, border: 'none', fontFamily: 'Poppins,sans-serif', boxShadow: '0 8px 24px rgba(44,24,16,0.25)', maxWidth: 300, textAlign: 'center', lineHeight: 1.4, cursor: 'pointer' }}>Quero começar minha jornada</button>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section style={{ padding: '72px 24px', maxWidth: 960, margin: '0 auto' }}>
        <h2 style={{ ...pp(700, 28), color: B.dark, textAlign: 'center', marginBottom: 8 }}>Por que o TalkScape?</h2>
        <p style={{ ...ir(400, 15), color: B.mid, textAlign: 'center', marginBottom: 48 }}>Não é mais uma escola de inglês. É o seu espaço.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {DIFFERENTIALS.map((d, i) => (
            <div key={i} style={{ background: B.white, borderRadius: 18, padding: '28px 24px', border: `1.5px solid ${B.border}` }}>
              <div style={{ width: 48, height: 48, borderRadius: 14, background: B.larBg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                <Icon name={d.icon} size={24} color={B.laranja} />
              </div>
              <p style={{ ...pp(700, 16), color: B.dark, marginBottom: 8 }}>{d.title}</p>
              <p style={{ ...ir(400, 14), color: B.mid, lineHeight: 1.6 }}>{d.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOBRE A RENATA */}
      <section style={{ background: B.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 52, flexWrap: 'wrap' }}>
          <div style={{ flexShrink: 0, width: 220, height: 220, borderRadius: '50%', background: `linear-gradient(135deg,${B.marrom},${B.laranja} 60%,${B.rosa})`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 12px 40px rgba(230,122,46,0.3)' }}>
            <img src="https://i.imgur.com/VJhFQyr.jpeg" alt="Renata" style={{ width: 220, height: 300, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: `4px solid ${B.laranja}` }} />
          </div>
          <div style={{ flex: 1, minWidth: 240 }}>
            <p style={{ ...ir(600, 13), color: B.laranja, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Sobre a professora</p>
            <h2 style={{ ...pp(800, 28), color: B.dark, marginBottom: 16 }}>Oi, eu sou a Renata!</h2>
            <p style={{ ...ir(400, 15), color: B.mid, lineHeight: 1.8, marginBottom: 16 }}>
              Professora há 6 anos com experiências em diversos contextos de ensino, sempre senti que algo faltava nos modelos tradicionais. Por isso criei o TalkScape — um espaço que preza por ensino personalizado, sem receita mágica e sem pressão.
            </p>
            <p style={{ ...ir(400, 15), color: B.mid, lineHeight: 1.8, marginBottom: 24 }}>
              Acredito que aprender inglês é uma prática social, não uma lista de regras pra decorar. Aqui você desenvolve a língua enquanto desenvolve o pensamento crítico. Fora das aulas, sou pesquisadora, faço Letras na USP e sou mãe da Toffee e do Gato.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['6 anos de experiência', 'Letras USP', 'Pesquisadora', 'Ensino personalizado'].map((tag, i) => (
                <span key={i} style={{ background: B.larBg, color: B.larD, borderRadius: 20, padding: '5px 14px', fontSize: 12, fontWeight: 600, fontFamily: 'Poppins,sans-serif' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JORNADAS */}
      <section style={{ padding: '72px 24px', maxWidth: 960, margin: '0 auto' }}>
        <h2 style={{ ...pp(700, 28), color: B.dark, textAlign: 'center', marginBottom: 8 }}>Jornadas de aprendizado</h2>
        <p style={{ ...ir(400, 15), color: B.mid, textAlign: 'center', marginBottom: 48 }}>Cada aluna escolhe o caminho que faz sentido pra ela.</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {JOURNEYS.map(j => (
            <div key={j.id} style={{ background: j.color + '18', border: `1.5px solid ${j.color}44`, borderRadius: 14, padding: '12px 18px', display: 'flex', alignItems: 'center', gap: 10, maxWidth: 280 }}>
              <span style={{ fontSize: 22, flexShrink: 0 }}>{j.icon}</span>
              <div>
                <p style={{ ...pp(600, 13), color: B.dark }}>{j.pt}</p>
                <p style={{ ...ir(400, 11), color: B.mid }}>{j.desc.pt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PLANOS INDIVIDUAIS */}
      <section style={{ background: B.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <h2 style={{ ...pp(700, 28), color: B.dark, textAlign: 'center', marginBottom: 8 }}>Planos individuais</h2>
          <p style={{ ...ir(400, 15), color: B.mid, textAlign: 'center', marginBottom: 48 }}>Quanto mais tempo, mais você economiza.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {PLANS.map((plan, i) => <PlanCard key={i} plan={plan} onStudent={onStudent} onCourse={onCourse} />)}
          </div>
        </div>
      </section>

      {/* PLANOS DUPLAS */}
      <section style={{ padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ background: B.olivaBg, color: B.olivaD, borderRadius: 20, padding: '5px 16px', fontSize: 12, fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>👯‍♀️ Para duplas</span>
            <h2 style={{ ...pp(700, 28), color: B.dark, marginTop: 16, marginBottom: 8 }}>Estudem juntas, economizem juntas</h2>
            <p style={{ ...ir(400, 15), color: B.mid }}>Todos os benefícios dos planos individuais com preço especial por aluna.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {DUO_PLANS.map((plan, i) => <PlanCard key={i} plan={plan} isDuo onStudent={onStudent} onCourse={onCourse} />)}
          </div>
        </div>
      </section>

      {/* TURMAS */}
      <section style={{ background: B.white, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ background: B.larBg, color: B.larD, borderRadius: 20, padding: '5px 16px', fontSize: 12, fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>🌱 Novidade</span>
            <h2 style={{ ...pp(700, 28), color: B.dark, marginTop: 16, marginBottom: 8 }}>Turmas abertas</h2>
            <p style={{ ...ir(400, 15), color: B.mid, maxWidth: 520, margin: '0 auto' }}>Aprenda em grupo com alunas no mesmo nível e momento que você. Vagas limitadas para garantir atenção individualizada.</p>
          </div>

          {/* Turma card */}
          <div style={{ maxWidth: 560, margin: '0 auto', borderRadius: 20, border: `2px solid ${B.oliva}`, background: B.olivaBg, overflow: 'hidden', boxShadow: `0 12px 40px ${B.oliva}22` }}>
            <div style={{ background: B.oliva, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 32 }}>🌱</span>
              <div>
                <p style={{ ...pp(700, 18), color: '#fff' }}>General English — Iniciantes</p>
                <p style={{ ...ir(400, 13), color: 'rgba(255,255,255,0.8)' }}>Nível A1/A2 · 12 semanas · 1x por semana</p>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <p style={{ ...ir(400, 14), color: B.dark, lineHeight: 1.8, marginBottom: 20 }}>
                Nunca estudou inglês de verdade? Ou estudou mas esqueceu tudo? Começamos do zero, no seu ritmo, com alunas no mesmo momento que você.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 20 }}>
                {[['Turma', '3–4 alunas'], ['Duração', '12 semanas'], ['Frequência', '1x por semana'], ['Investimento', 'R$ 220/mês']].map(([label, val], i) => (
                  <div key={i} style={{ background: B.white, borderRadius: 10, padding: '10px 14px', border: `1px solid ${B.oliva}33` }}>
                    <p style={{ ...ir(400, 11), color: B.mid }}>{label}</p>
                    <p style={{ ...pp(700, 14), color: B.dark }}>{val}</p>
                  </div>
                ))}
              </div>
              <div style={{ background: B.white, borderRadius: 12, padding: '12px 16px', marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: `1px solid ${B.oliva}33` }}>
                <div>
                  <p style={{ ...ir(600, 12), color: B.mid }}>Vagas disponíveis</p>
                  <p style={{ ...pp(800, 22), color: B.oliva }}>4 vagas</p>
                </div>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[1,2,3,4].map(i => (
                    <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: B.oliva, opacity: 0.3 + (i * 0.1) }} />
                  ))}
                </div>
              </div>
              <a href={`${INSTAGRAM}?turma=general-english-iniciantes`} target="_blank" rel="noreferrer"
                style={{ display: 'block', textAlign: 'center', padding: '14px', background: B.oliva, color: '#fff', borderRadius: 12, fontSize: 14, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif' }}>
                Quero entrar na lista de espera
              </a>
              <p style={{ ...ir(400, 11), color: B.mid, textAlign: 'center', marginTop: 8 }}>A turma abre quando completar 3 inscrições</p>
            </div>
          </div>
        </div>
      </section>

      {/* JORNADAS DIGITAIS */}
      <section style={{ background: `linear-gradient(135deg,${B.marrom}11,${B.laranja}11)`, border: `1.5px solid ${B.laranja}22`, padding: '72px 24px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <span style={{ background: B.laranja, color: '#fff', borderRadius: 20, padding: '5px 16px', fontSize: 12, fontWeight: 700, fontFamily: 'Poppins,sans-serif' }}>✨ Novo</span>
            <h2 style={{ ...pp(700, 28), color: B.dark, marginTop: 16, marginBottom: 8 }}>Jornada Digital</h2>
            <p style={{ ...ir(400, 15), color: B.mid, maxWidth: 480, margin: '0 auto' }}>12 semanas de inglês estruturado com suporte real da Renata — sem precisar de aula ao vivo.</p>
          </div>

          <div style={{ background: B.white, borderRadius: 20, border: `2px solid ${B.laranja}44`, overflow: 'hidden', boxShadow: `0 12px 40px ${B.laranja}18` }}>
            <div style={{ background: B.laranja, padding: '20px 28px' }}>
              <p style={{ ...pp(700, 20), color: '#fff' }}>Jornada TalkScape Digital</p>
              <p style={{ ...ir(400, 13), color: 'rgba(255,255,255,0.85)' }}>Escolha sua jornada · 12 semanas · 3 meses de acesso</p>
            </div>
            <div style={{ padding: '28px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
              <div>
                <p style={{ ...pp(600, 13), color: B.mid, marginBottom: 12 }}>O que inclui:</p>
                {['Jornada completa de 12 semanas', 'Habit tracker diário', 'Espaço de dúvidas com a Renata', 'Suporte por 3 meses', 'Acesso à plataforma TalkScape'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: B.laranja, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name="check" size={11} color="#fff" />
                    </div>
                    <p style={{ ...ir(400, 13), color: B.dark }}>{item}</p>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                <p style={{ ...ir(400, 13), color: B.mid, marginBottom: 4 }}>3x de</p>
                <p style={{ ...pp(800, 40), color: B.laranja, lineHeight: 1 }}>R$ 197</p>
                <p style={{ ...ir(400, 12), color: B.mid, marginBottom: 8 }}>por mês</p>
                <div style={{ background: B.oliva + '22', borderRadius: 8, padding: '6px 12px', marginBottom: 20 }}>
                  <p style={{ ...pp(600, 12), color: B.oliva }}>ou R$ 497 à vista</p>
                </div>
                <button onClick={() => openModal('curso')} style={{ width: '100%', padding: '14px', background: '#d46427', border: 'none', borderRadius: 12, color: '#fff', fontSize: 14, fontWeight: 700, fontFamily: 'Poppins,sans-serif', cursor: 'pointer' }}>
                  Quero me inscrever na Jornada Digital →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section style={{ padding: '72px 24px', maxWidth: 960, margin: '0 auto' }}>
        <h2 style={{ ...pp(700, 28), color: B.dark, textAlign: 'center', marginBottom: 8 }}>O que as alunas dizem</h2>
        <p style={{ ...ir(400, 15), color: B.mid, textAlign: 'center', marginBottom: 48 }}>Resultados reais de quem já está na jornada.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} style={{ background: B.white, borderRadius: 18, padding: '28px 24px', border: `1.5px solid ${B.border}` }}>
              <div style={{ fontSize: 40, color: B.laranja, fontFamily: 'Georgia, serif', lineHeight: 1, marginBottom: 12, opacity: 0.3 }}>"</div>
              <p style={{ ...ir(400, 14), color: B.dark, lineHeight: 1.8, marginBottom: 16 }}>{t.text}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: B.laranja, flexShrink: 0 }} />
                <p style={{ ...ir(600, 12), color: B.mid }}>{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ background: `linear-gradient(135deg,${B.marrom},${B.laranja} 60%,${B.rosa})`, padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <Logo h={72} contrast />
          <h2 style={{ ...pp(800, 30), color: '#fff', marginTop: 28, marginBottom: 16 }}>
            Pronta para começar sua jornada?
          </h2>
          <p style={{ ...ir(400, 15), color: 'rgba(255,255,255,0.85)', marginBottom: 40, lineHeight: 1.7 }}>
            Manda uma mensagem no Instagram e a gente conversa sobre qual caminho faz mais sentido pra você.
          </p>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ display: 'inline-block', padding: '18px 40px', background: B.white, color: B.marrom, borderRadius: 16, fontSize: 16, fontWeight: 700, textDecoration: 'none', fontFamily: 'Poppins,sans-serif', boxShadow: '0 12px 40px rgba(44,24,16,0.3)' }}>
            Falar com a Renata no Instagram
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: B.dark, padding: '32px 24px', textAlign: 'center' }}>
        <Logo h={52} contrast />
        <p style={{ ...ir(400, 12), color: 'rgba(255,255,255,0.35)', marginTop: 16 }}>
          © 2025 TalkScape by Renata · Todos os direitos reservados
        </p>
      </footer>
    </div>
  )
}
