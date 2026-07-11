# 📚 Miniguia de Estudos com NotebookLM

### Engenharia de Prompts aplicada ao aprendizado sobre APIs REST e OpenAPI

> Projeto desenvolvido como parte do desafio da DIO, utilizando o NotebookLM como ferramenta de aprendizagem ativa para pesquisa, organização do conhecimento e engenharia de prompts.

---

# 🎯 Objetivo

Este projeto tem como objetivo demonstrar como a Inteligência Artificial pode ser utilizada para acelerar o aprendizado técnico de forma estruturada.

O tema escolhido foi **APIs REST e a especificação OpenAPI**, tecnologias amplamente utilizadas no desenvolvimento moderno de aplicações web e microsserviços.

Durante o estudo, o NotebookLM foi utilizado para:

* consolidar informações provenientes de múltiplas fontes;
* responder dúvidas técnicas;
* gerar resumos;
* comparar conceitos;
* criar glossários;
* produzir perguntas de revisão;
* auxiliar na construção deste guia de estudos.

---

# 📖 Objetivos de aprendizagem

Ao final deste estudo, os objetivos eram:

* compreender os fundamentos de APIs REST;
* entender os métodos HTTP e suas aplicações;
* conhecer os principais códigos de status HTTP;
* compreender a especificação OpenAPI;
* aprender boas práticas para documentação de APIs;
* desenvolver habilidades de engenharia de prompts utilizando IA.

---

# 📚 Fontes utilizadas

As seguintes referências foram adicionadas ao NotebookLM para compor a base de conhecimento utilizada durante o estudo.

| Fonte                                | Tipo                 |
| ------------------------------------ | -------------------- |
| https://swagger.io/specification/    | Documentação Oficial |
| https://learn.microsoft.com/         | Microsoft Learn      |
| https://restfulapi.net/              | Artigo Técnico       |
| https://developer.mozilla.org/       | Documentação         |
| https://cloud.google.com/apis/design | Guia de Design       |

---

# 🧠 Processo de estudo

O fluxo utilizado durante este projeto foi o seguinte:

```text
Pesquisa
        ↓
Seleção das fontes
        ↓
Upload no NotebookLM
        ↓
Criação de prompts
        ↓
Análise das respostas
        ↓
Refinamento dos prompts
        ↓
Consolidação do conhecimento
        ↓
Produção deste Miniguia
```

---

# 💬 Engenharia de Prompts

## Prompt 1

> Explique o que é uma API REST como se eu fosse um desenvolvedor iniciante.

### Objetivo

Obter uma explicação simples antes de aprofundar o tema.

### Resultado

O NotebookLM apresentou uma explicação clara utilizando analogias do cotidiano, facilitando o entendimento inicial.

---

## Prompt 2

> Compare REST, SOAP e GraphQL apresentando vantagens, desvantagens e casos de uso.

### Objetivo

Entender quando utilizar cada abordagem.

### Resultado

Foi gerada uma tabela comparativa bastante útil para tomada de decisão arquitetural.

---

## Prompt 3

> Crie um resumo completo sobre métodos HTTP.

### Resultado

Foram apresentados os métodos:

* GET
* POST
* PUT
* PATCH
* DELETE
* OPTIONS
* HEAD

incluindo finalidade e exemplos de utilização.

---

## Prompt 4

> Explique a especificação OpenAPI utilizando exemplos reais.

### Resultado

Foi possível compreender:

* estrutura do arquivo YAML;
* definição de endpoints;
* parâmetros;
* schemas;
* responses;
* autenticação.

---

## Prompt 5

> Gere 15 perguntas de entrevista sobre APIs REST.

### Resultado

O NotebookLM criou questões de nível júnior e pleno que poderão ser reutilizadas para revisão futura.

---

# 🔄 Refinamento dos Prompts (Cicatrizes)

Durante os testes foram observadas algumas limitações.

## Problema 1

Prompt muito genérico.

Exemplo:

> Explique APIs.

Resultado:

Resposta superficial.

### Solução

Prompt refinado:

> Explique APIs REST considerando que já possuo conhecimentos básicos de desenvolvimento web.

---

## Problema 2

Respostas extensas.

### Solução

Foi acrescentada a instrução:

> Resuma em até 10 tópicos.

---

## Problema 3

Poucos exemplos práticos.

### Solução

Adicionar:

> Utilize exemplos reais utilizando JSON e requisições HTTP.

---

## Aprendizados

Foi observado que quanto maior o contexto fornecido ao NotebookLM, mais precisas e úteis se tornaram as respostas.

---

# 📒 Resumo Estruturado

## O que é uma API

Uma API (Application Programming Interface) permite que diferentes sistemas se comuniquem de maneira padronizada.

---

## O que é REST

REST é um estilo arquitetural baseado em recursos identificados por URLs e manipulados através dos métodos HTTP.

Características:

* Stateless
* Cliente-Servidor
* Cacheável
* Interface uniforme

---

## Métodos HTTP

| Método | Finalidade              |
| ------ | ----------------------- |
| GET    | Consultar dados         |
| POST   | Criar recurso           |
| PUT    | Atualizar completamente |
| PATCH  | Atualizar parcialmente  |
| DELETE | Remover recurso         |

---

## Principais Status HTTP

| Código | Significado         |
| ------ | ------------------- |
| 200    | OK                  |
| 201    | Criado              |
| 204    | Sem conteúdo        |
| 400    | Requisição inválida |
| 401    | Não autenticado     |
| 403    | Sem permissão       |
| 404    | Não encontrado      |
| 500    | Erro interno        |

---

## OpenAPI

A OpenAPI Specification é um padrão utilizado para descrever APIs REST.

Ela permite:

* geração automática de documentação;
* geração de SDKs;
* validação de contratos;
* integração com Swagger UI;
* integração com ferramentas de testes.

---

# 📖 Glossário

## API

Interface que permite comunicação entre sistemas.

---

## Endpoint

Endereço específico de um recurso da API.

---

## JSON

Formato utilizado para troca de dados.

---

## HTTP

Protocolo responsável pela comunicação entre cliente e servidor.

---

## OpenAPI

Especificação para documentação de APIs REST.

---

## Swagger

Conjunto de ferramentas baseadas na especificação OpenAPI.

---

## Request

Requisição enviada ao servidor.

---

## Response

Resposta retornada pelo servidor.

---

## Status Code

Código indicando o resultado da requisição.

---

# 🚀 Prompts reutilizáveis

## Aprender um conceito

> Explique este conceito considerando que sou um desenvolvedor Full Stack em início de carreira.

---

## Criar resumo

> Resuma este conteúdo em até 15 tópicos objetivos.

---

## Revisão

> Transforme este conteúdo em flashcards para revisão.

---

## Entrevista

> Gere perguntas técnicas que poderiam ser feitas em uma entrevista.

---

## Comparação

> Compare as tecnologias apresentando vantagens, limitações e cenários ideais de uso.

---

## Roadmap

> Monte um roadmap de estudos baseado neste conteúdo.

---

# 💡 Lições aprendidas

Durante este projeto foi possível perceber que o NotebookLM não substitui o estudo tradicional, mas potencializa significativamente o processo de aprendizagem quando utilizado com boas fontes e prompts bem elaborados.

Além disso, ficou evidente a importância da engenharia de prompts para extrair respostas mais completas, objetivas e alinhadas ao contexto desejado.

---

# 🛠 Tecnologias utilizadas

* NotebookLM
* GitHub
* Markdown
* OpenAPI
* APIs REST

---

# 📌 Conclusão

Este projeto demonstrou uma aplicação prática da Inteligência Artificial como ferramenta de apoio ao aprendizado técnico.

A combinação entre curadoria de fontes confiáveis, engenharia de prompts e organização do conhecimento permitiu construir um material de estudo reutilizável, estruturado e de fácil consulta, servindo como base para futuras revisões e aprofundamentos sobre APIs REST e OpenAPI.

---

## 👨‍💻 Autor

**Guilherme Rabelo Machado**

Desenvolvedor Full Stack • Ciência da Computação • Entusiasta de Arquitetura de Software, APIs e Inteligência Artificial.
