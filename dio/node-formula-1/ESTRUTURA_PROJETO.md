# Estrutura do Projeto - F1 Minimal API

Abaixo está o mapeamento da estrutura de pastas e arquivos da API melhorada para o desafio da DIO:

```text
f1-api-dio/
├── src/                      # Código-fonte da aplicação
│   ├── controllers/          # Lógica de controle das requisições
│   │   └── f1-controller.ts  # Handlers para as rotas de equipes e pilotos
│   ├── data/                 # Armazenamento de dados (Mock)
│   │   └── f1-data.ts        # Dados estáticos de equipes e pilotos
│   ├── middlewares/          # Middlewares customizados (pronto para expansão)
│   ├── routes/               # Definição das rotas e esquemas OpenAPI
│   │   └── f1-routes.ts      # Rotas da API com documentação Swagger
│   └── server.ts             # Ponto de entrada (configuração do Fastify e segurança)
├── README.md                 # Documentação principal do projeto
├── package.json              # Dependências e scripts do Node.js
├── package-lock.json         # Travamento de versões das dependências
├── tsconfig.json             # Configuração do compilador TypeScript
└── ESTRUTURA_PROJETO.md      # Este arquivo de mapeamento
```

## Descrição dos Componentes Principais

| Componente | Descrição |
| :--- | :--- |
| **`server.ts`** | Configura o servidor Fastify, registra os plugins de segurança (**Helmet**, **Rate Limit**), o **CORS** e a documentação **Swagger**. |
| **`f1-routes.ts`** | Define os caminhos da API (`/teams`, `/drivers`, etc.) e utiliza o Fastify Schema para gerar automaticamente a documentação OpenAPI. |
| **`f1-controller.ts`** | Contém a lógica de negócio que processa as requisições e envia as respostas, mantendo as rotas limpas. |
| **`f1-data.ts`** | Centraliza os dados da API, facilitando a manutenção ou futura substituição por um banco de dados real. |
| **`package.json`** | Define scripts como `npm run dev` (desenvolvimento rápido com `tsx`) e `npm run build` (preparação para produção com `tsup`). |
