import React, { useState } from 'react'

export default function MedicationForm({ onAdd }){
  const [name, setName] = useState('')
  const [dosage, setDosage] = useState('')
  const [frequency, setFrequency] = useState('')

  function submit(e){
    e.preventDefault()
    const trimmed = name.trim()
    if(!trimmed) return
    onAdd({ id: Date.now(), name: trimmed, dosage: dosage.trim(), frequency: frequency.trim() })
    setName('')
    setDosage('')
    setFrequency('')
  }

  return (
    <div className="card">
      <h3>Add Medication</h3>
      <form onSubmit={submit} style={{display:'grid', gap:8}}>
        <input placeholder="Medication Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Dosage (e.g. 20mg)" value={dosage} onChange={e=>setDosage(e.target.value)} />
        <input placeholder="Frequency (e.g. Once daily in the morning)" value={frequency} onChange={e=>setFrequency(e.target.value)} />
        <div style={{display:'flex', justifyContent:'flex-end'}}>
          <button type="submit">Add Medication</button>
        </div>
      </form>
    </div>
  )
}
