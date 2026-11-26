const PILLARS = [
  {
    id: 'dados',
    badge: 'Analista de Dados',
    title: 'Análise exploratória & diagnóstico',
    desc: 'Tratamento de dados, conciliação de registros, análise de SLAs e testes A/B estatísticos com Python, Pandas e SQL.',
    tools: ['Python', 'Pandas', 'SQL', 'EDA'],
  },
  {
    id: 'bi',
    badge: 'Analista de BI',
    title: 'Indicadores, Medallion & relatórios',
    desc: 'Modelagem em camadas (Bronze, Silver, Gold), monitoramento contínuo de KPIs e entregas em Delta Lake prontas para dashboard.',
    tools: ['Databricks', 'Spark', 'Delta Lake', 'KPIs'],
  },
  {
    id: 'ml',
    badge: 'Analista de ML',
    title: 'Anomalias, experimentação & IA',
    desc: 'Detecção de anomalias para prevenção a fraudes, avaliação de experimentos orientados a métricas e automação com IA generativa.',
    tools: ['Anomaly Detection', 'A/B Testing', 'IA Generativa'],
  },
] as const

export default function FocusSection() {
  return (
    <section className="focus-section fade-in" style={{ animationDelay: '380ms' }} aria-label="Áreas de atuação">
      <div className="section-header">
        <span className="section-label">Atuação</span>
      </div>
      <div className="focus-grid">
        {PILLARS.map((pillar) => (
          <article key={pillar.id} className={`focus-card track-${pillar.id}`}>
            <span className={`card-track-pill ${pillar.id}`}>{pillar.badge}</span>
            <h2 className="focus-title">{pillar.title}</h2>
            <p className="focus-desc">{pillar.desc}</p>
            <div className="card-tags">
              {pillar.tools.map((tool) => (
                <span key={tool} className="card-tag">{tool}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
