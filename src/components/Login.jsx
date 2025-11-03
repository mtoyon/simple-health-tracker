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
      <h1 style={{textAlign:'center', fontSize:'28px', marginBottom:'24px', color:'#111827'}}>Simple Health Tracker</h1>
      <div className="card" style={{maxWidth:450, margin:'40px auto', fontSize:'14px', textAlign:'center'}}>
        <h2 style={{fontSize:'24px', marginBottom:'16px'}}>Sign in</h2>
        <p className="meta" style={{fontSize:'14px', marginBottom:'20px'}}>Enter a username to continue.</p>
        <form onSubmit={submit} style={{display:'grid',gap:12, marginTop:12}}>
          <input placeholder="Username (e.g. alice)" value={username} onChange={e=>setUsername(e.target.value)} style={{padding:'10px', fontSize:'14px'}} />
          <div style={{display:'flex',justifyContent:'center', marginTop:'6px'}}>
            <button type="submit" style={{padding:'10px 16px', fontSize:'14px'}}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
