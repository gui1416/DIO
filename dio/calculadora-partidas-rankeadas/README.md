# 🏆 Calculadora de Partidas Rankeadas

Projeto desenvolvido como parte do desafio **Calculadora de Partidas Rankeadas** da **Digital Innovation One (DIO)**.

O objetivo é praticar conceitos fundamentais da linguagem JavaScript, utilizando funções, estruturas condicionais e laços de repetição para calcular o saldo de vitórias de jogadores e determinar seu nível no ranking.

---

## 📖 Sobre o desafio

Cada jogador possui uma quantidade de **vitórias** e **derrotas**.

O programa calcula automaticamente o **saldo de partidas ranqueadas**, utilizando a fórmula:

```text
Saldo = Vitórias - Derrotas
```

Em seguida, determina o nível do jogador com base na quantidade de vitórias.

### Classificação

| Vitórias     | Nível    |
| ------------ | -------- |
| Até 10       | Ferro    |
| 11 a 20      | Bronze   |
| 21 a 50      | Prata    |
| 51 a 80      | Ouro     |
| 81 a 90      | Diamante |
| 91 a 100     | Lendário |
| Acima de 100 | Imortal  |

Ao final, é exibida a mensagem:

```text
O Herói tem saldo de {saldoVitorias} vitórias e está no nível de {nivel}
```

---

## 🚀 Tecnologias utilizadas

* JavaScript (ES6+)
* Node.js

---

## 📂 Estrutura do projeto

```text
📦 calculadora-partidas-rankeadas
├── index.js
└── README.md
```

---

## 💻 Exemplo de saída

```text
O Herói Arthas tem saldo de 6 vitórias e está no nível de Ferro.
O Herói Ezio tem saldo de 13 vitórias e está no nível de Bronze.
O Herói Luna tem saldo de 23 vitórias e está no nível de Prata.
O Herói Thor tem saldo de 49 vitórias e está no nível de Ouro.
O Herói Athena tem saldo de 67 vitórias e está no nível de Diamante.
O Herói Kratos tem saldo de 81 vitórias e está no nível de Lendário.
O Herói Zeus tem saldo de 101 vitórias e está no nível de Imortal.
```

---

## 📚 Conceitos praticados

* Declaração de variáveis
* Arrays de objetos
* Operadores aritméticos
* Operadores relacionais
* Estruturas condicionais (`if` / `else if` / `else`)
* Laços de repetição (`for`)
* Funções
* Template Strings
* Desestruturação de objetos

---

## 🎯 Objetivo do projeto

Este projeto tem como finalidade consolidar os conhecimentos básicos em JavaScript por meio da implementação de uma calculadora de partidas ranqueadas, aplicando lógica de programação para calcular o saldo de vitórias e classificar jogadores conforme seu desempenho.

---

Desenvolvido como parte da formação da **Digital Innovation One (DIO)** em **"Blip - Lógica de Programação"**.
