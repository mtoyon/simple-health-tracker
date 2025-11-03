import React, { useState } from 'react'

export default function Login({ onLogin }){
  const [username, setUsername] = useState('')

  function submit(e){
    e.preventDefault()
    const name = username.trim()
    if(!name) return
    onLogin(name)
  }

  return (
    <div className="container">
      <h1 style={{textAlign:'center', fontSize:'24px', marginBottom:'20px', color:'#111827'}}>Simple Health Tracker</h1>
      <div className="card" style={{maxWidth:350, margin:'30px auto', fontSize:'13px', textAlign:'center'}}>
        <h2 style={{fontSize:'20px', marginBottom:'12px'}}>Sign in</h2>
        <p className="meta" style={{fontSize:'13px', marginBottom:'16px'}}>Enter a username to continue.</p>
        <form onSubmit={submit} style={{display:'grid',gap:10, marginTop:10}}>
          <input placeholder="Username (e.g. alice)" value={username} onChange={e=>setUsername(e.target.value)} style={{padding:'8px', fontSize:'13px'}} />
          <div style={{display:'flex',justifyContent:'center', marginTop:'4px'}}>
            <button type="submit" style={{padding:'8px 14px', fontSize:'13px'}}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
