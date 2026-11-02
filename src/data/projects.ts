export type Lang = 'java' | 'go' | 'kotlin'

export interface Project {
  id: string
  name: string
  lang: Lang
  tags: string[]
  desc: string
  url: string
  featured?: boolean
}

const projects: Project[] = [
  {
    id: '1',
    name: 'Event-Driven Banking',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Kafka', 'PostgreSQL', 'Flyway', 'Docker Compose', 'GitHub Actions', 'Event-Driven'],
    desc: 'Sistema bancário composto por três microsserviços (conta, transferência e notificação) que se comunicam via REST e Kafka. Demonstra arquitetura orientada a eventos, idempotência e comunicação assíncrona entre serviços.',
    url: 'https://github.com/nevvesdev/event-driven-banking',
    featured: true,
  },
  {
    id: '2',
    name: 'Rate Limiter',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'JUnit 5', 'Mockito', 'AssertJ', 'Docker Compose', 'Actuator', 'Swagger UI'],
    desc: 'Implementação de rate limiting com algoritmos clássicos em Java puro, exposta via API REST, demonstrando domínio de concorrência, estruturas de dados e design de algoritmos — sem depender de frameworks para a lógica central.',
    url: 'https://github.com/nevvesdev/rate-limiter',
    featured: true,
  },
  {
    id: '3',
    name: 'Guardian API',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Security', 'JWT', 'PostgreSQL', 'Flyway', 'Redis', 'JUnit', 'Mockito', 'Testcontainers', 'Swagger UI'],
    desc: 'API de gestão de recursos com autenticação JWT (access e refresh token), controle de acesso por RBAC e auditoria de acessos. Inclui rate limiting com Redis e foi construída com padrões de produção.',
    url: 'https://github.com/nevvesdev/guardian-api',
    featured: true,
  },
  {
    id: '4',
    name: 'Open Finance Consent',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Security', 'OAuth2', 'JWT', 'JPA', 'PostgreSQL', 'Flyway', 'JUnit 5', 'Mockito', 'Testcontainers', 'Micrometer', 'Actuator', 'Scheduling'],
    desc: 'API de gestão de consentimentos de dados financeiros, no modelo do Open Finance Brasil. Implementa autenticação JWT RS256, validação de escopos OAuth2, geração de eventos com Transactional Outbox e agregação de dados de múltiplos bancos. Estruturada em Arquitetura Hexagonal.',
    url: 'https://github.com/nevvesdev/open-finance-consent',
    featured: true,
  },
  {
    id: '5',
    name: 'Notification Hub',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Kafka', 'Mail + Mailtrap', 'Thymeleaf', 'PostgreSQL', 'Flyway', 'Resilience4j', 'JUnit 5', 'Mockito', 'Testcontainers', 'Actuator', 'Micrometer'],
    desc: 'Microsserviço de notificações orientado a eventos, que consome mensagens do Kafka e envia notificações por e-mail. Oferece entrega confiável com retry automático, circuit breaker e rastreabilidade completa.',
    url: 'https://github.com/nevvesdev/notification-hub',
    featured: true,
  },
  {
    id: '6',
    name: 'CQRS + Transactional Outbox + CDC',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Kafka', 'CQRS', 'Outbox', 'CDC', 'Idempotência', 'JUnit 5', 'Mockito', 'Testcontainers', 'Swagger UI'],
    desc: 'Implementação dos padrões CQRS, Transactional Outbox e CDC em dois microsserviços. Garante consistência eventual entre serviços sem Two-Phase Commit, com publicação de eventos no Kafka por polling, simulando CDC.',
    url: 'https://github.com/nevvesdev/cqrs-pattern',
    featured: true,
  },
  {
    id: '7',
    name: 'FX Rate & Currency Exchange API',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Redis', 'Resilience4j', 'ShedLock', 'Micrometer', 'JaCoCo', 'JUnit 5', 'Mockito', 'Testcontainers', 'Docker Compose', 'GitHub Actions', 'Swagger UI'],
    desc: 'API REST de câmbio e taxas de moedas, voltada a fintechs e bancos digitais. Busca taxas de referência em provedor externo, armazena em cache e registra o histórico. Atualiza as taxas automaticamente e realiza conversões com precisão monetária exata.',
    url: 'https://github.com/nevvesdev/fx-currency-exchange',
    featured: false,
  },
  {
    id: '8',
    name: 'Distributed Cache',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Redis', 'Micrometer', 'JUnit 5', 'Mockito', 'Testcontainers', 'ArchUnit', 'Docker Compose', 'GitHub Actions'],
    desc: 'Serviço de consulta de saldo e limite de contas com cache distribuído no padrão Cache-Aside. Estruturado em Arquitetura Hexagonal, com resiliência e métricas.',
    url: 'https://github.com/nevvesdev/distributed-cache',
    featured: true,
  },
  {
    id: '9',
    name: 'Alcada',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'PostgreSQL', 'Flyway', 'Micrometer', 'Resilience4j', 'Prometheus', 'Actuator', 'JUnit 5', 'Testcontainers', 'ArchUnit', 'Docker Compose', 'GitHub Actions', 'Swagger UI'],
    desc: 'Serviço de aprovação e gestão de linhas de crédito. Utiliza Saga orquestrada com compensações, eventos via Transactional Outbox e requisições idempotentes. Recupera automaticamente processos interrompidos.',
    url: 'https://github.com/nevvesdev/alcada',
    featured: false,
  },
  {
    id: '10',
    name: 'FinanceFlow',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Security', 'JWT', 'PostgreSQL', 'Flyway', 'Angular 21', 'TypeScript', 'SCSS', 'Docker Compose'],
    desc: 'Painel de controle financeiro pessoal, com lançamentos, categorias, contas a vencer e alertas agendados. API: Java e Spring Boot e Web: Angular.',
    url: 'https://github.com/nevvesdev/financeflow',
    featured: false,
  },
 /* {
    id: '11',
    name: 'Payment Gateway Orchestrator',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Kafka', 'Redis', 'Resilience4j', 'Testcontainers'],
    desc: 'Orquestrador de gateway de pagamentos com Kafka, Redis para idempotência, Resilience4j e testes com Testcontainers.',
    url: 'https://github.com/nevvesdev/payment-gateway-orchestrator',
    featured: true,
  },
 /* {
    id: '12',
    name: 'Telegram Vagas Bot',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'H2', 'Telegram API', 'Web Scraping'],
    desc: 'Bot Telegram que monitora e entrega vagas de emprego em tempo real com deduplicação e polling agendado.',
    url: 'https://github.com/nevvesdev/vagas-bot',
    featured: false,
  },
 /* {
    id: '13',
    name: 'Settlement Engine',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Clean Architecture', 'Indempotência', 'ACID'],
    desc: 'Motor de liquidação de transações financeiras com garantia de consistência ACID e idempotência.',
    url: 'https://github.com/nevvesdev/settlement-engine',
    featured: false,
  },
  {
    id: '14',
    name: 'Rate Limiter',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Rate Limiter', 'Token Bucket', 'Sliding Window'],
    desc: 'Rate Limiter com Token Bucket e Sliding Window.',
    url: 'https://github.com/nevvesdev/rate-limiter',
    featured: false,
  },
/*  {
    id: '15',
    name: 'Credit Approval (SAGA Pattern)',
    lang: 'kotlin',
    tags: ['Kotlin', 'Spring Boot', 'Clean Architecture', 'SAGA Pattern', 'Redis', 'Flyway'],
    desc: 'Projeto que implementa o padrão Saga (orquestrada) aplicado a um fluxo de aprovação de crédito e KYC — ScoreCheck → FraudCheck → CreditLimitReserve → Approve/Reject.',
    url: 'https://github.com/nevvesdev/credit-approval-saga',
    featured: true,
  },
  {
    id: '16',
    name: 'Serverless Order Processing',
    lang: 'go',
    tags: ['Go', 'AWS', 'Lambda', 'Clean Architeture'],
    desc: 'Projeto desenvolvido para estudo de arquitetura Serverless (AWS Lambda) utilizando Go.',
    url: 'https://github.com/nevvesdev/serverless-order-processing',
    featured: true,
  },
  {
    id: '17',
    name: 'CQRS Pattern',
    lang: 'java',
    tags: ['Java 21', 'Spring Boot', 'Microsservices', 'CQRS Pattern', 'Transactional Outbox', 'CDC'],
    desc: 'Implementação dos padrões CQRS, Transactional Outbox e CDC com dois microsserviços em Spring Boot 3.0 + Java 21.',
    url: 'https://github.com/nevvesdev/cqrs-pattern',
    featured: true,
  },
/*  {
    id: '18',
    name: 'Interbank Transfer Service',
    lang: 'kotlin',
    tags: ['Kotlin', 'Spring Boot', 'Clean Architecture', 'gRPC'],
    desc: 'Serviço de transferência interbancária com Kotlin + Spring Boot + gRPC.',
    url: 'https://github.com/nevvesdev/interbank-transfer-service',
    featured: false,
  },

/* {
    id: '20',
    name: 'Realtime Payment',
    lang: 'go',
    tags: ['Go', 'Docker', 'Kafka', 'PostgreSQL', 'Redis'],
    desc: 'Processador de pagamentos em tempo real - estudando sobre GraphQL.',
    url: 'https://github.com/nevvesdev/realtime-payment',
    featured: true,
  }, */
/*  {
    id: '21',
    name: 'Distributed Cache',
    lang: 'java',
    tags: ['Java 21', 'Docker', 'Flyway', 'PostgreSQL', 'Redis'],
    desc: 'Serviço de consulta de saldo e limite de contas, com Redis como cache distribuído usando a estratégia Cache-Aside.',
    url: 'https://github.com/nevvesdev/distributed-cache',
    featured: true,
  },
 /* {
    id: '22',
    name: 'Distributed Transaction Coordinator',
    lang: 'java',
    tags: ['Java 21', 'Docker', 'Flyway', 'MySQL', 'SAGA Pattern'],
    desc: 'Um orquestrador de transações distribuídas com suporte a 2-Phase Commit e Saga Pattern.',
    url: 'https://github.com/nevvesdev/distributed-transaction-coordinator',
    featured: true,
  }, */
 /* {
    id: '24',
    name: 'Credit Line Management',
    lang: 'go',
    tags: ['Go'],
    desc: 'Gestão de limite de crédito com aprovação automática e controle de utilização.',
    url: 'https://github.com/nevvesdev/credit-line-management-system',
    featured: true,
  }, */
/*  {
    id: '25',
    name: 'Notification Hub',
    lang: 'go',
    tags: ['Java 21', 'Kafka', 'Mailtrap', 'PostgreSQL', 'Thymeleaf', 'Flyway', 'Resilience4j', 'Testcontainers'],
    desc: 'Microsserviço de notificações event-driven com Kafka, resiliência e audit log.',
    url: 'https://github.com/nevvesdev/notification-hub',
    featured: true,
  }, */

  // novos projetos acima desta linha
]

export default projects