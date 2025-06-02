import "./user-profiles.css"

export default function UserProfiles() {
  const profiles = [
    {
      type: "Morador",
      icon: "🏠",
      description: "Pessoa física com perfil pessoal",
      features: [
        "Nome e apresentação pessoal",
        "Endereço privado",
        "Acesso a todos os grupos",
        "Participação em enquetes",
        "Área de classificados",
      ],
      price: "Gratuito",
    },
    {
      type: "Funcionário/Staff",
      icon: "🔧",
      description: "Prestadores de serviço locais",
      features: [
        "Perfil profissional",
        "Portfólio de serviços",
        "Avaliações de clientes",
        "Contato direto",
        "Visibilidade local",
      ],
      price: "Gratuito",
    },
    {
      type: "Empresa Básica",
      icon: "🏢",
      description: "Modalidade gratuita para empresas",
      features: [
        "Catálogo simples",
        "Visibilidade básica",
        "Informações de contato",
        "Localização no mapa",
        "Perfil empresarial",
      ],
      price: "Gratuito",
    },
    {
      type: "Empresa Premium",
      icon: "⭐",
      description: "Modalidade paga com recursos avançados",
      features: [
        "Catálogo expandido",
        "Selo de empresa certificada",
        "Sistema de cupons",
        "Gestão de equipe",
        "Grupos de compra coletiva",
        "Destaques pagos",
      ],
      price: "Pago",
    },
  ]

  return (
    <section id="profiles" className="user-profiles">
      <div className="container">
        <div className="section-header">
          <h2>Tipos de Perfil</h2>
          <p>Escolha o perfil ideal para suas necessidades</p>
        </div>

        <div className="profiles-grid">
          {profiles.map((profile, index) => (
            <div key={index} className={`profile-card ${profile.price === "Pago" ? "premium" : ""}`}>
              <div className="profile-header">
                <div className="profile-icon">{profile.icon}</div>
                <h3>{profile.type}</h3>
                <p className="profile-description">{profile.description}</p>
                <div className={`price-tag ${profile.price === "Pago" ? "paid" : "free"}`}>{profile.price}</div>
              </div>

              <div className="profile-features">
                <ul>
                  {profile.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span className="check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
