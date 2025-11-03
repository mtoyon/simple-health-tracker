export function medsKey(user){
  return `meds-${user}`
}
export function vitalsKey(user){
  return `vitals-${user}`
}

export function loadMeds(user){
  try{
    const raw = localStorage.getItem(medsKey(user))
    return raw ? JSON.parse(raw) : []
  }catch(e){
    console.error('loadMeds error',e)
    return []
  }
}

export function saveMeds(user, meds){
  try{
    localStorage.setItem(medsKey(user), JSON.stringify(meds))
  }catch(e){
    console.error('saveMeds error',e)
  }
}

export function loadVitals(user){
  try{
    const raw = localStorage.getItem(vitalsKey(user))
    return raw ? JSON.parse(raw) : []
  }catch(e){
    console.error('loadVitals error',e)
    return []
  }
}

export function saveVitals(user, vitals){
  try{
    localStorage.setItem(vitalsKey(user), JSON.stringify(vitals))
  }catch(e){
    console.error('saveVitals error',e)
  }
}
