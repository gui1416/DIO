// ==========================================
// Desafio DIO - Calculadora de Partidas Rankeadas
// ==========================================

// Lista de jogadores para demonstrar o uso de laço de repetição
const players = [
  { nome: "Arthas", vitorias: 8, derrotas: 2 },
  { nome: "Ezio", vitorias: 18, derrotas: 5 },
  { nome: "Luna", vitorias: 35, derrotas: 12 },
  { nome: "Thor", vitorias: 67, derrotas: 18 },
  { nome: "Athena", vitorias: 88, derrotas: 21 },
  { nome: "Kratos", vitorias: 95, derrotas: 14 },
  { nome: "Zeus", vitorias: 120, derrotas: 19 }
];

// Função que calcula o saldo de vitórias
function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

// Função que define o nível do jogador
function definirNivel(vitorias) {
  if (vitorias <= 10) {
    return "Ferro";
  } else if (vitorias <= 20) {
    return "Bronze";
  } else if (vitorias <= 50) {
    return "Prata";
  } else if (vitorias <= 80) {
    return "Ouro";
  } else if (vitorias <= 90) {
    return "Diamante";
  } else if (vitorias <= 100) {
    return "Lendário";
  } else {
    return "Imortal";
  }
}

// Percorre todos os jogadores
for (let i = 0; i < players.length; i++) {
  const { nome, vitorias, derrotas } = players[i];

  const saldoVitorias = calcularSaldo(vitorias, derrotas);
  const nivel = definirNivel(vitorias);

  console.log(
    `O Herói ${nome} tem saldo de ${saldoVitorias} vitórias e está no nível de ${nivel}.`
  );
}