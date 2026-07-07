import { initializeApp, getApps } from 'firebase/app'
import { getDatabase, ref, get, set } from 'firebase/database'

// ── Firebase configuration ─────────────────────────────────────────
const firebaseConfig = {
  apiKey:            'AIzaSyB95bx2d_rf6IRxGP3XM3byz-tTGDJ3xWE',
  authDomain:        'talkscape-by-renata.firebaseapp.com',
  databaseURL:       'https://talkscape-by-renata-default-rtdb.firebaseio.com',
  projectId:         'talkscape-by-renata',
  storageBucket:     'talkscape-by-renata.firebasestorage.app',
  messagingSenderId: '1085953776570',
  appId:             '1:1085953776570:web:62e52e73a7ed7e02931b83',
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
const db  = getDatabase(app)

export const rtdb = ref(db, 'talkscape_v1')

export const dbLoad = () =>
  get(rtdb).then(s => (s.exists() ? s.val() : {})).catch(() => ({}))

export const dbSave = data =>
  set(rtdb, data).catch(e => console.error('save error', e))
