export type Track = 'dados' | 'bi' | 'ml'

export type RoleFocus = 'dados' | 'bi' | 'ml'

export interface Project {
  id: string
  name: string
  track: Track
  trackLabel: string
  roles: RoleFocus[]
  tags: string[]
  desc: string
  url: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Operational Intelligence',
    track: 'bi',
    trackLabel: 'BI & IA',
    roles: ['dados', 'bi', 'ml'],
    tags: [
      'Python',
      'SQL',
      'KPI Monitoring',
      'SLA Monitoring',
      'Generative AI',
      'Process Automation',
    ],
    desc: 'Plataforma de inteligência operacional para análise de dados, monitoramento contínuo de KPIs e SLAs, automação de rotinas e geração de insights com Python, SQL e IA generativa.',
    url: 'https://github.com/nevvesdev/operational-intelligence',
    featured: true,
  },
  {
    id: '2',
    name: 'Pipeline de Dados - Medallion',
    track: 'bi',
    trackLabel: 'Spark & BI',
    roles: ['bi'],
    tags: [
      'Databricks',
      'Spark',
      'Delta Lake',
      'SQL',
      'Python',
      'Medallion',
      'Dashboard',
    ],
    desc: 'Pipeline em arquitetura Medallion (Bronze, Silver e Gold) com Spark no Databricks, processando corridas de táxi de Nova York até tabelas Delta orquestradas e prontas para dashboard.',
    url: 'https://github.com/nevvesdev/pipeline-dados-spark',
    featured: true,
  },
  {
    id: '3',
    name: 'SLA e Performance Operacional',
    track: 'dados',
    trackLabel: 'Análise de Dados',
    roles: ['dados', 'bi'],
    tags: [
      'Python',
      'Pandas',
      'Databricks',
      'SLA Analysis',
      'KPI Monitoring',
      'EDA',
    ],
    desc: 'Análise exploratória e diagnóstica de SLA e performance operacional sobre uma base de chamados internos em Python no Databricks, evidenciando gargalos e variações de atendimento.',
    url: 'https://github.com/nevvesdev/sla-performance-operacional',
    featured: true,
  },
  {
    id: '4',
    name: 'Detecção de Anomalias em Transações',
    track: 'ml',
    trackLabel: 'Machine Learning',
    roles: ['ml'],
    tags: [
      'Python',
      'Anomaly Detection',
      'Fraud Analytics',
      'Databricks',
      'Pandas',
      'Machine Learning',
    ],
    desc: 'Detecção de anomalias em transações financeiras em Python no Databricks para identificar padrões atípicos e sinalizar possíveis casos de fraude com foco em precisão analítica.',
    url: 'https://github.com/nevvesdev/deteccao-anomalias-transacoes',
    featured: true,
  },
  {
    id: '5',
    name: 'Teste A/B de Checkout',
    track: 'ml',
    trackLabel: 'Experimentação',
    roles: ['dados', 'ml'],
    tags: [
      'Python',
      'A/B Testing',
      'Estatística',
      'Conversion Rate',
      'Pandas',
      'Databricks',
    ],
    desc: 'Experimento A/B em Python no Databricks para comparar versões da página de checkout, avaliando impacto em conversão e embasando decisões orientadas a métricas.',
    url: 'https://github.com/nevvesdev/teste-ab-checkout',
    featured: true,
  },
  {
    id: '6',
    name: 'Conciliação Fiscal Automatizada',
    track: 'dados',
    trackLabel: 'Dados & Automação',
    roles: ['dados', 'bi'],
    tags: [
      'Python',
      'Pandas',
      'Databricks',
      'Data Reconciliation',
      'Reporting',
      'Auditoria',
    ],
    desc: 'Conciliação fiscal automatizada em Python no Databricks para cruzamento de registros, identificação de divergências e geração estruturada de relatórios gerenciais.',
    url: 'https://github.com/nevvesdev/conciliacao-fiscal-automatizada',
    featured: true,
  },
  // novos projetos acima desta linha
]

export default projects
