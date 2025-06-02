import "./features.css"

export default function Features() {
  const features = [
    {
      icon: "📱",
      title: "Classificados Locais",
      description: "Publique e encontre produtos e serviços na sua região com sistema de busca avançado.",
    },
    {
      icon: "👥",
      title: "Grupos Temáticos",
      description: "Participe de grupos e subgrupos por interesse, com entrada livre ou por convite.",
    },
    {
      icon: "🗳️",
      title: "Enquetes Comunitárias",
      description: "Crie e participe de enquetes simples com visualização de resultados em tempo real.",
    },
    {
      icon: "📍",
      title: "Geolocalização",
      description: "Encontre serviços e pessoas próximas com filtros por raio de distância.",
    },
    {
      icon: "⭐",
      title: "Destaques Pagos",
      description: "Promova suas postagens e perfil com alcance geográfico limitado.",
    },
    {
      icon: "🐕",
      title: "Área Pet",
      description: "Espaço dedicado para adoção, venda e achados e perdidos de pets.",
    },
  ]

  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-header">
          <h2>Funcionalidades Principais</h2>
          <p>Tudo que você precisa para se conectar com sua comunidade</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
