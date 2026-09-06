# Carlos Eduardo Ferreira — Portfólio

Portfólio pessoal de Carlos Eduardo Ferreira, desenvolvido com React, TypeScript, Vite e Tailwind CSS.

Site: [carloseduardodev.com](https://carloseduardodev.com)

## Estrutura

```text
client/src/
├── app/          # composição da aplicação, providers e rotas
├── components/   # componentes compartilhados, layout e primitives de UI
├── config/       # navegação e informações globais do site
├── data/         # conteúdo estático do portfólio
├── features/     # funcionalidades isoladas, como contato e GitHub
├── hooks/        # hooks compartilhados
├── lib/          # utilitários sem dependência de interface
├── pages/        # páginas e suas seções específicas
└── types/        # contratos compartilhados

scripts/github-stats/
├── github-client.mjs   # acesso à API GraphQL
├── query.mjs           # consulta GraphQL
├── aggregate-stats.mjs # agregação sem acesso externo
└── config.mjs          # configuração do gerador
```

As páginas apenas compõem seções. Regras e efeitos de funcionalidades ficam em `features`, enquanto componentes genéricos não importam páginas nem o roteador.

## Desenvolvimento local

Requisitos: Node.js 20 ou superior e npm.

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Os arquivos estáticos de produção são gerados em `dist/public`.

Para visualizar o build localmente:

```bash
npm run preview
```

## Estatísticas do GitHub

A seção “Código & evolução contínua” usa dados estáticos gerados pela API do GitHub. O workflow `Update GitHub portfolio stats` é executado diariamente e também pode ser iniciado manualmente na aba **Actions** do repositório.

Sem configuração adicional, o processo considera somente repositórios públicos próprios. Em qualquer modo, forks e projetos arquivados são ignorados e somente dados agregados são salvos em `client/public/data/github-stats.json`. Nomes ou conteúdos de repositórios privados não são publicados e nenhum token é enviado ao navegador.

### Incluir estatísticas privadas

Para contabilizar linguagens e contribuições de repositórios privados, crie um Personal Access Token pertencente ao usuário `Carloseduardo-dev`. Para garantir suporte aos totais privados da API GraphQL, um token clássico precisa dos escopos `read:user` e `repo`. Prefira validade curta e revogue o token quando ele deixar de ser necessário. Salve-o exclusivamente como um secret do repositório chamado `GH_STATS_TOKEN` em **Settings → Secrets and variables → Actions**.

O workflow detecta esse secret automaticamente. Quando ele não existe, usa o `GITHUB_TOKEN` temporário do Actions e mantém apenas dados públicos. Nunca adicione o valor do token ao código, ao `.env` versionado ou à Vercel.
