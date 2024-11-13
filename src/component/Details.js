import React from 'react'
import './Details.css'
import motherChild from './motherchild.jpg'


export default function Details() {
  return (
    <section className="hero-section">
     
        <h3 className="hero-title">Services Offered</h3>
        <ul className="hero-subtitle">
            <li>
            Family Matching: We work with each child and family to find the best possible match.
            </li>
            <li>
            Adding New Child : We also aim to cater home to the homeless souls for adoption.
            </li>
        </ul>
        <div className="hero-images">
        <img src={motherChild} alt="Happy mom owner with child" className="hero-main-image" />
    </div>
    </section>
  )
}

