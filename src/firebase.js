import { initializeApp, getApps } from 'firebase/app'
import { getDatabase, ref, get, set } from 'firebase/database'

// ── Firebase configuration ─────────────────────────────────────────
// Create a free project at https://console.firebase.google.com
// Enable Realtime Database, then paste your project config below.
const firebaseConfig = {
  apiKey:            'TALKSCAPE',
  authDomain:        'TALKSCAPE.firebaseapp.com',
  databaseURL:       'https://TALKSCAPE-default-rtdb.firebaseio.com',
  projectId:         'TALKSCAPE',
  storageBucket:     'TALKSCAPE.appspot.com',
  messagingSenderId: 'TALKSCAPE',
  appId:             'TALKSCAPE',
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig)
const db  = getDatabase(app)

export const rtdb = ref(db, 'talkscape_v1')

export const dbLoad = () =>
  get(rtdb).then(s => (s.exists() ? s.val() : {})).catch(() => ({}))

export const dbSave = data =>
  set(rtdb, data).catch(e => console.error('save error', e))
