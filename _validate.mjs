const file = process.argv[2] || './src/constants/journeyCV.js'
const varName = process.argv[3] || 'JOURNEY_CV'
const mod = await import(file)
const DATA = mod[varName]
let fail=0; const err=m=>{console.log('❌',m);fail++}
const inter=Object.keys(DATA).filter(k=>(DATA[k].acts||[]).length>0)
for(const id of inter){
  const acts=DATA[id].acts
  if(acts.length!==10) err(`${id} has ${acts.length} acts`)
  const ids=new Set()
  for(const a of acts){
    if(ids.has(a.id))err(`dup ${a.id}`); ids.add(a.id)
    if(!a.levels){err(`${a.id} no levels`);continue}
    for(const lv of ['beginner','intermediate','advanced']){
      const v=a.levels[lv]; if(!v){err(`${a.id} missing ${lv}`);continue}
      if(!v.prompt&&!v.instruction) err(`${a.id} ${lv} no prompt`)
      if((a.type==='gapdrop'||a.type==='mc')){ if(!Array.isArray(v.options))err(`${a.id} ${lv} no options`); else if(v.answerIdx<0||v.answerIdx>=v.options.length)err(`${a.id} ${lv} answerIdx OOR`) }
      if(a.type==='order'&&(!Array.isArray(v.tokens)||v.tokens.length<2))err(`${a.id} ${lv} bad tokens`)
      if(a.type==='sort'){const c=new Set(v.groups); if(!v.items)err(`${a.id} ${lv} no items`); else v.items.forEach(it=>{if(!c.has(it.g))err(`${a.id} ${lv} '${it.t}' g='${it.g}' not in groups`)})}
      if(a.type==='fill'&&!v.answer)err(`${a.id} ${lv} no answer`)
      if(a.type==='match'&&!Array.isArray(v.pairs))err(`${a.id} ${lv} no pairs`)
    }
  }
}
console.log(`${varName}: interactive ${inter.length} | all 10 acts: ${inter.every(id=>DATA[id].acts.length===10)}`)
console.log(fail?`${fail} FAILURES`:'✅ OK')
process.exit(fail?1:0)
