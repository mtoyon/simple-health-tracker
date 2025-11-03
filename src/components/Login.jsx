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
      <h1 style={{textAlign:'center', fontSize:'36px', marginBottom:'32px', color:'#111827'}}>Health Tracker</h1>
      <div className="card" style={{maxWidth:600, margin:'40px auto', fontSize:'18px', textAlign:'center'}}>
        <h2 style={{fontSize:'32px', marginBottom:'20px'}}>Sign in</h2>
        <p className="meta" style={{fontSize:'16px', marginBottom:'24px'}}>Enter a username to continue.</p>
        <form onSubmit={submit} style={{display:'grid',gap:16, marginTop:12}}>
          <input placeholder="Username (e.g. alice)" value={username} onChange={e=>setUsername(e.target.value)} style={{padding:'12px', fontSize:'18px'}} />
          <div style={{display:'flex',justifyContent:'center', marginTop:'8px'}}>
            <button type="submit" style={{padding:'12px 20px', fontSize:'18px'}}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
