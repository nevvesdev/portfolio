import FocusSection from '@/components/FocusSection'
import Hero from '@/components/Hero'
import ProjectsSection from '@/components/ProjectsSection'
import projects from '@/data/projects'

export default function Home() {
  return (
    <main className="page">
      {/* Hero — posicionamento, stack pills, links sociais */}
      <Hero />

      {/* Divisor */}
      <div className="divider fade-in" style={{ animationDelay: '340ms' }} />

      {/* Áreas de atuação — Dados, BI e ML */}
      <FocusSection />

      {/* Divisor */}
      <div className="divider fade-in" style={{ animationDelay: '420ms' }} />

      {/* Projetos com filtros por vaga e stack */}
      <ProjectsSection projects={projects} />

      {/* Footer */}
      <footer className="footer fade-in" style={{ animationDelay: '600ms' }}>
        <span>João Victor Macedo Neves &copy; 2026</span>
        <span className="footer-sep" aria-hidden="true">·</span>
        <a href="https://github.com/nevvesdev" target="_blank" rel="noopener noreferrer">GitHub</a>
        <span className="footer-sep" aria-hidden="true">·</span>
        <a href="https://www.linkedin.com/in/nevvesdev/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </footer>
    </main>
  )
}
