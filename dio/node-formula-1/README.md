# 🏎️ API de Fórmula 1 - Desafio DIO

Este projeto é uma API RESTful desenvolvida como parte de um desafio prático da [Digital Innovation One (DIO)](https://www.dio.me/). O objetivo é disponibilizar dados estruturados sobre o universo da Fórmula 1, permitindo a consulta rápida de informações sobre pilotos, corridas e escuderias.

## 🎯 Contexto e Objetivos

A construção desta API foca em consolidar os fundamentos do desenvolvimento backend com arquiteturas modernas. O projeto foi desenhado para ser leve e performático, isolando responsabilidades entre rotas, controladores e serviços.

**Objetivos principais:**
- Criar endpoints consistentes para consumo de dados.
- Estruturar a aplicação utilizando boas práticas de engenharia de software.
- Validar contratos de entrada e saída de dados.

## 🛠️ Tecnologias Utilizadas

A stack do projeto foi escolhida para garantir velocidade de execução e segurança de tipagem:
*   **Node.js:** Ambiente de execução.
*   **Fastify:** Framework web focado em alta performance e baixo overhead.
*   **TypeScript:** Tipagem estática para maior previsibilidade e manutenção do código.

## 🚀 Como Executar o Projeto

1. Clone este repositório para sua máquina local.
2. Acesse a pasta do projeto via terminal e instale as dependências (que serão alocadas na pasta `node_modules`[cite: 3]):
```bash
   npm install
```

3. Crie um arquivo `.env` na raiz do projeto contendo as variáveis de ambiente necessárias (este arquivo não é rastreado pelo controle de versão).


4. Inicie o servidor em modo de desenvolvimento:
```bash
npm run dev
```


5. A API estará escutando as requisições, geralmente na porta `3333` ou na configurada no seu `.env`.



## 🛣️ Endpoints Principais (Exemplos)

* `GET /drivers` - Retorna a lista completa de pilotos da temporada.
* `GET /drivers/:id` - Retorna os dados detalhados de um piloto específico.
* `GET /teams` - Retorna as informações das escuderias ativas.

