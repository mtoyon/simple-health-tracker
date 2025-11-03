import React, { useEffect, useState, useCallback } from 'react'
import Login from './components/Login'
import MedicationForm from './components/MedicationForm'
import MedicationList from './components/MedicationList'
import VitalsForm from './components/VitalsForm'
import VitalsLog from './components/VitalsLog'
import { loadMeds, saveMeds, loadVitals, saveVitals } from './utils/storage'

const INACTIVITY_MS = 5 * 60 * 1000 // 5 minutes (see README assumption)

export default function App(){
  const [user, setUser] = useState(null)
  const [meds, setMeds] = useState([])
  const [vitals, setVitals] = useState([])

  // Load user session on app start
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('health-tracker-user')
      const lastActivity = localStorage.getItem('health-tracker-last-activity')
      
      if (savedUser && lastActivity) {
        const timeSinceActivity = Date.now() - parseInt(lastActivity, 10)
        if (timeSinceActivity < INACTIVITY_MS) {
          setUser(savedUser)
          // Update last activity to current time
          localStorage.setItem('health-tracker-last-activity', Date.now().toString())
        } else {
          // Session expired, clear storage
          localStorage.removeItem('health-tracker-user')
          localStorage.removeItem('health-tracker-last-activity')
        }
      }
    } catch (e) {
      console.error('Error loading user session:', e)
    }
  }, [])

  // Load user-specific data when user changes
  useEffect(()=>{
    if(!user) return
    setMeds(loadMeds(user))
    setVitals(loadVitals(user))
  },[user])

  // Persist meds and vitals on change
  useEffect(()=>{ if(user) saveMeds(user, meds) },[meds, user])
  useEffect(()=>{ if(user) saveVitals(user, vitals) },[vitals, user])

  const handleLogin = (username) => {
    setUser(username)
    // Save user session and current time
    localStorage.setItem('health-tracker-user', username)
    localStorage.setItem('health-tracker-last-activity', Date.now().toString())
  }

  const handleLogout = useCallback(()=>{
    setUser(null)
    setMeds([])
    setVitals([])
    // Clear user session
    localStorage.removeItem('health-tracker-user')
    localStorage.removeItem('health-tracker-last-activity')
  },[])

  // Inactivity auto-logout
  useEffect(()=>{
    if(!user) return
    let timeout = null
    const reset = () => {
      if(timeout) clearTimeout(timeout)
      // Update last activity time
      localStorage.setItem('health-tracker-last-activity', Date.now().toString())
      timeout = setTimeout(()=>{
        handleLogout()
        // lightweight UI notice
        try{ alert('You have been logged out due to inactivity.') }catch(e){}
      }, INACTIVITY_MS)
    }
    const events = ['mousemove','keydown','mousedown','touchstart']
    events.forEach(ev => window.addEventListener(ev, reset))
    reset()
    return ()=>{
      if(timeout) clearTimeout(timeout)
      events.forEach(ev => window.removeEventListener(ev, reset))
    }
  },[user, handleLogout])

  function addMedication(m){
    setMeds(prev => [ ...prev, m ])
  }

  function removeMedication(id){
    setMeds(prev => prev.filter(x => x.id !== id))
  }

  function addVitals(v){
    setVitals(prev => [ ...prev, v ])
  }

  if(!user) return <Login onLogin={handleLogin} />

  return (
    <div className="container">
      <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:12}}>
        <div style={{fontWeight:700, fontSize:'24px'}}>Health Tracker</div>
        <div className="spacer" />
        <div className="meta">Signed in as <strong>{user}</strong></div>
        <div><button onClick={handleLogout} style={{background:'#6b7280'}}>Logout</button></div>
      </div>

      <MedicationForm onAdd={addMedication} />
      <MedicationList meds={meds} onRemove={removeMedication} />

      <VitalsForm onAdd={addVitals} />
      <VitalsLog entries={vitals} />
    </div>
  )
}
