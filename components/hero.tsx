import "./hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Conecte-se com sua comunidade</h1>
            <p>
              O Oi Vizinho é o aplicativo que une moradores, funcionários e empresas do seu bairro em um só lugar.
              Descubra serviços locais, participe de grupos temáticos e fortaleça os laços da sua comunidade.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Baixar para Android</button>
              <button className="btn-secondary">Baixar para iOS</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="app-preview">
                  <div className="status-bar"></div>
                  <div className="app-header">Oi Vizinho</div>
                  <div className="app-content">
                    <div className="feature-card">📱 Classificados</div>
                    <div className="feature-card">👥 Grupos</div>
                    <div className="feature-card">🗳️ Enquetes</div>
                    <div className="feature-card">🐕 Área Pet</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
