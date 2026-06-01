import {
  BookOpen, Mic, PenLine, Headphones, Eye, MessageSquare,
  Calendar, Users, Settings, LogOut, ChevronRight, ChevronLeft,
  Plus, Trash2, Pencil, Check, X, RotateCcw, Star,
  Map, Info, ClipboardList, BarChart2, Flame, Trophy,
  Link, Save, AlertCircle, Search, Globe,
  GraduationCap, Briefcase, Plane, Wrench, Film, Volume2,
  Lightbulb, Target, Sparkles, NotebookPen, LayoutDashboard,
  Zap, ScrollText, BookMarked, FileText, Music, Repeat,
  ArrowLeft, Heart, MessageCircle, Layers
} from 'lucide-react'

const icons = {
  // Categorias de tarefa
  pronunciation: Mic,
  grammar:       BookMarked,
  vocab:         Star,
  listening:     Headphones,
  writing:       PenLine,
  speaking:      Mic,
  reading:       Eye,
  // Navegação
  students:      Users,
  calendar:      Calendar,
  settings:      Settings,
  logout:        LogOut,
  next:          ChevronRight,
  back:          ChevronLeft,
  // Ações
  add:           Plus,
  delete:        Trash2,
  edit:          Pencil,
  check:         Check,
  close:         X,
  reset:         RotateCcw,
  save:          Save,
  link:          Link,
  search:        Search,
  alert:         AlertCircle,
  // Abas do professor
  plan:          ClipboardList,
  feedback:      MessageCircle,
  homework:      ScrollText,
  info:          Info,
  habits:        Flame,
  progress:      BarChart2,
  dashboard:     LayoutDashboard,
  streak:        Zap,
  trophy:        Trophy,
  globe:         Globe,
  star:          Star,
  // Abas do aluno
  diary:         NotebookPen,
  // Jornadas
  general:       Sparkles,
  business:      Briefcase,
  travel:        Plane,
  conversation:  MessageSquare,
  grammar_kit:   Wrench,
  academic:      FileText,
  popculture:    Film,
  speaking_j:    Volume2,
  exam:          GraduationCap,
  graduation:    GraduationCap,
  // Misc
  map:           Map,
  target:        Target,
  lightbulb:     Lightbulb,
  arrowLeft:     ArrowLeft,
  volume:        Volume2,
  layers:        Layers,
  repeat:        Repeat,
  music:         Music,
  heart:         Heart,
  bookOpen:      BookOpen,
}

export default function Icon({ name, size = 16, color = 'currentColor', style = {} }) {
  const Component = icons[name]
  if (!Component) return null
  return <Component size={size} color={color} strokeWidth={1.8} style={{ display: 'inline-block', flexShrink: 0, ...style }} />
}
