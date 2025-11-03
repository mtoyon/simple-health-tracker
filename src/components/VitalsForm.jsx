import React, { useState } from 'react'

export default function VitalsForm({ onAdd }){
  const [systolic, setSystolic] = useState('')
  const [diastolic, setDiastolic] = useState('')
  const [heartRate, setHeartRate] = useState('')
  const [weight, setWeight] = useState('')

  function handleNumberInput(value, setter) {
    // Only allow numbers and limit to 3 digits
    const cleaned = value.replace(/[^0-9.]/g, '')
    const parts = cleaned.split('.')
    if (parts[0] && parts[0].length > 3) return
    if (parts[1] && parts[1].length > 2) return // allow 2 decimal places
    setter(cleaned)
  }

  function submit(e){
    e.preventDefault()
    const s = parseInt(systolic,10)
    const d = parseInt(diastolic,10)
    const hr = parseInt(heartRate,10)
    const w = parseFloat(weight)
    if(Number.isNaN(s) || Number.isNaN(d) || Number.isNaN(hr) || Number.isNaN(w)) return
    onAdd({ id: Date.now(), systolic: s, diastolic: d, heartRate: hr, weight: w, timestamp: new Date().toISOString() })
    setSystolic(''); setDiastolic(''); setHeartRate(''); setWeight('')
  }

  return (
    <div className="card">
      <h3>Log Vitals</h3>
      <form onSubmit={submit} style={{display:'grid',gap:8}}>
        <input placeholder="Blood Pressure (Systolic)" value={systolic} onChange={e=>handleNumberInput(e.target.value, setSystolic)} />
        <input placeholder="Blood Pressure (Diastolic)" value={diastolic} onChange={e=>handleNumberInput(e.target.value, setDiastolic)} />
        <input placeholder="Heart Rate (BPM)" value={heartRate} onChange={e=>handleNumberInput(e.target.value, setHeartRate)} />
        <input placeholder="Weight (kg)" value={weight} onChange={e=>handleNumberInput(e.target.value, setWeight)} />
        <div style={{display:'flex', justifyContent:'flex-end'}}>
          <button type="submit">Add Vitals</button>
        </div>
      </form>
    </div>
  )
}
