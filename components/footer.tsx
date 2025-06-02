import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Oi Vizinho</h3>
            <p>Conectando comunidades, fortalecendo laços locais.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                📘
              </a>
              <a href="#" aria-label="Instagram">
                📷
              </a>
              <a href="#" aria-label="Twitter">
                🐦
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Links Úteis</h4>
            <ul>
              <li>
                <a href="#features">Funcionalidades</a>
              </li>
              <li>
                <a href="#profiles">Perfis</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#download">Download</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Suporte</h4>
            <ul>
              <li>
                <a href="#">Central de Ajuda</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
              <li>
                <a href="#">Política de Privacidade</a>
              </li>
              <li>
                <a href="#">Termos de Uso</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Download</h4>
            <div className="download-buttons">
              <a href="#" className="download-btn">
                <span>📱</span>
                <div>
                  <small>Baixar para</small>
                  <strong>Android</strong>
                </div>
              </a>
              <a href="#" className="download-btn">
                <span>🍎</span>
                <div>
                  <small>Baixar para</small>
                  <strong>iOS</strong>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Oi Vizinho. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ para fortalecer comunidades locais.</p>
        </div>
      </div>
    </footer>
  )
}
