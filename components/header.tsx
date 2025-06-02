"use client"

import { useState } from "react"
import "./header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h1>Oi Vizinho</h1>
        </div>

        <nav className={`nav ${isMenuOpen ? "nav-open" : ""}`}>
          <a href="#features">Funcionalidades</a>
          <a href="#profiles">Perfis</a>
          <a href="#faq">FAQ</a>
          <a href="#download" className="cta-button">
            Baixar App
          </a>
        </nav>

        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
