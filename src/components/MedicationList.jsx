import React from 'react'

export default function MedicationList({ meds, onRemove }){
  return (
    <div className="card">
      <h3>Medications</h3>
      {meds.length === 0 && <p className="meta">No medications added yet.</p>}
      <div style={{marginTop:8}}>
        {meds.map(m => (
          <div key={m.id} className="list-item">
            <div style={{flex:1}}>
              <div style={{fontWeight:600}}>{m.name}</div>
              <div className="meta">{m.dosage} • {m.frequency}</div>
            </div>
            <div>
              <button onClick={()=>onRemove(m.id)} style={{background:'#ef4444'}}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
