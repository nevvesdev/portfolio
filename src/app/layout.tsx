import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'João Victor Macedo Neves — Analista de Dados, BI & ML',
  description:
    'Portfólio de João Victor Macedo Neves com projetos em Python, SQL, Databricks, Spark, análise de KPIs e SLAs, Business Intelligence e Machine Learning.',
  openGraph: {
    title: 'João Victor Macedo Neves — Analista de Dados, BI & ML',
    description:
      'Projetos em Python, SQL, Databricks, Spark, monitoramento de KPIs/SLAs, testes A/B e detecção de anomalias.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
