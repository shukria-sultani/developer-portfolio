import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {
  const navigate = useNavigate()
  
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <h1 style={{fontSize: "80px"}}>404</h1>
        <p style={{fontSize: "x-large"}}>Couldn't Find What You Are Looking For!</p>
        <button onClick={()=> navigate("/")} className='back-to-home'>Back to Home</button>
    </div>
  )
}
