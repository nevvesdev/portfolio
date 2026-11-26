# Portfólio — João Victor Macedo Neves

Portfólio pessoal focado em vagas de **Analista de Dados**, **Analista de BI** e **Analista de ML**, construído com **Next.js 15**, **TypeScript** e **CSS custom properties** em estética dark mode minimalista.

**Live:** [portfolio-nevvesdev.vercel.app](https://portfolio-nevvesdev.vercel.app/)

---

## Stack

- **Next.js 15** — App Router, Server Components
- **TypeScript** — strict mode
- **CSS** — vanilla, custom properties, sem Tailwind
- **Vercel** — CI/CD a cada push para `main`

## Decisões de arquitetura

**Server Components por padrão.** `page.tsx` lê `projects.ts` em build time e passa dados como props — sem fetching no cliente, sem loading states, sem useEffect.

**Client Component apenas onde necessário.** `ProjectsSection.tsx` é o único componente com `'use client'`, isolado para onde a interatividade (estado de filtro por vaga e tecnologia) existe.

**Única fonte de verdade para conteúdo.** Todos os projetos vivem em `src/data/projects.ts`. Adicionar um projeto significa editar um arquivo e fazer push — Vercel rebuilda automaticamente.

## Estrutura do projeto

```
src/
├── app/
│   ├── icon.svg            # favicon minimalista em dark mode
│   ├── layout.tsx          # root layout, metadata, fonte Inter
│   ├── page.tsx            # página home (Server Component)
│   └── globals.css         # todos os estilos — um arquivo, sem módulos
├── components/
│   ├── Hero.tsx            # posicionamento, stack pills, links sociais
│   ├── FocusSection.tsx    # pilares de atuação (Dados, BI, ML)
│   ├── ProjectsSection.tsx # filtros por vaga/stack (Client Component)
│   └── ProjectCard.tsx     # card individual de projeto
└── data/
    └── projects.ts         # ← único arquivo editado para adicionar projetos
```
