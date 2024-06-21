import React from 'react'

export default function Navigation() {
  return (
    <div>
      <nav>
        <Link to="/home">Home</Link>
        || 
        <Link to="/about">About</Link>
        || 
        <Link to="/register">Register</Link>
      </nav>
    </div>
  )
}
