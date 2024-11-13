import React from 'react'
import Navbar from './Navbar'
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Heart Haven</h1>
     <Navbar />
      <button className="sign-up-btn">Sign Up</button>
    </header>
  )
}
