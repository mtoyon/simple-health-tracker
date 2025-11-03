import React from 'react'

function formatTS(iso){
  try{ return new Date(iso).toLocaleString() }catch(e){ return iso }
}

export default function VitalsLog({ entries }){
  if(!entries || entries.length === 0) return (
    <div className="card"><h3>Vitals Log</h3><p className="meta">No vitals logged yet.</p></div>
  )

  // assume entries may already be sorted, but ensure newest-first
  const sorted = [...entries].sort((a,b)=> new Date(b.timestamp) - new Date(a.timestamp))

  return (
    <div className="card">
      <h3>Vitals Log</h3>
      <div>
        {sorted.map(e => (
          <div key={e.id} className="list-item">
            <div style={{flex:1}}>
              <div style={{fontWeight:600}}>BP: {e.systolic}/{e.diastolic} mmHg • HR: {e.heartRate} bpm • Weight: {e.weight} kg</div>
              <div className="meta">{formatTS(e.timestamp)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
