'use client'

import { useState } from 'react'
import type { Project, RoleFocus } from '@/data/projects'
import ProjectCard from './ProjectCard'

const FILTERS = [
  { label: 'Todos', value: 'all', cls: '' },
  { label: 'Analista de Dados', value: 'dados', cls: 'f-dados' },
  { label: 'Analista de BI', value: 'bi', cls: 'f-bi' },
  { label: 'Analista de ML', value: 'ml', cls: 'f-ml' },
  { label: 'Databricks & Spark', value: 'databricks', cls: 'f-accent' },
  { label: 'SQL', value: 'sql', cls: 'f-bi' },
] as const

type FilterValue = (typeof FILTERS)[number]['value']

function matchesFilter(project: Project, filter: FilterValue): boolean {
  if (filter === 'all') return true
  if (filter === 'dados' || filter === 'bi' || filter === 'ml') {
    return project.roles.includes(filter as RoleFocus)
  }
  if (filter === 'databricks') {
    return project.tags.some((t) => {
      const lower = t.toLowerCase()
      return lower === 'databricks' || lower === 'spark'
    })
  }
  return project.tags.some((t) => t.toLowerCase() === 'sql')
}

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<FilterValue>('all')

  const matchingCount = projects.filter((p) => matchesFilter(p, active)).length
  const countText =
    active === 'all'
      ? `${projects.length} projetos`
      : `${matchingCount} de ${projects.length}`

  return (
    <section id="projetos" className="projects-section">
      <div className="projects-header">
        <span className="section-label fade-in" style={{ animationDelay: '440ms' }}>
          Projetos
        </span>
        <span className="projects-count fade-in" style={{ animationDelay: '440ms' }}>
          {countText}
        </span>
      </div>
      <div className="filters fade-in" style={{ animationDelay: '480ms' }} role="group" aria-label="Filtrar projetos">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            type="button"
            aria-pressed={active === f.value}
            className={['filter-chip', f.cls, active === f.value ? 'active' : ''].filter(Boolean).join(' ')}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <div className="projects-grid fade-in" style={{ animationDelay: '520ms' }}>
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} dimmed={!matchesFilter(p, active)} />
        ))}
      </div>
    </section>
  )
}
