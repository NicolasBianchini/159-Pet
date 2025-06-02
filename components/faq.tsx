"use client"

import { useState } from "react"
import "./faq.css"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Como funciona o cadastro no Oi Vizinho?",
      answer:
        "O cadastro é simples: você precisa informar seu nome, endereço e criar uma senha. Também oferecemos recuperação de senha por email.",
    },
    {
      question: "Qual a diferença entre os perfis de empresa?",
      answer:
        "A empresa básica (gratuita) tem catálogo simples e visibilidade básica. A premium (paga) inclui mais itens no catálogo, selo certificado, cupons, gestão de equipe e grupos de compra coletiva.",
    },
    {
      question: "Como funciona a geolocalização?",
      answer:
        "O app usa sua localização para mostrar serviços e pessoas próximas, com filtros por raio de distância. Você pode controlar essas configurações de privacidade.",
    },
    {
      question: "O que são os destaques pagos?",
      answer:
        "São promoções para postagens ou perfis que aumentam sua visibilidade na comunidade, com alcance limitado por raio geográfico.",
    },
    {
      question: "Como funciona a área pet?",
      answer:
        "É um espaço dedicado para adoção, venda e achados e perdidos de pets, com recursos de câmera, microfone e localização para facilitar as buscas.",
    },
    {
      question: "Quando o app estará disponível?",
      answer:
        "O desenvolvimento está dividido em 4 sprints. As funcionalidades básicas estarão disponíveis primeiro, seguidas pelos recursos avançados.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre o Oi Vizinho</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
