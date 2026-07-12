// ==========================================
// Desafio DIO - Classificador de Nível de Herói
// ==========================================

// Lista de heróis para demonstrar o uso de laço de repetição
const heroes = [
  { nome: "Arthas", xp: 850 },
  { nome: "Ezio", xp: 1800 },
  { nome: "Luna", xp: 3200 },
  { nome: "Thor", xp: 6400 },
  { nome: "Athena", xp: 7900 },
  { nome: "Kratos", xp: 8700 },
  { nome: "Ares", xp: 9800 },
  { nome: "Zeus", xp: 12000 }
];

// Percorre todos os heróis
for (let i = 0; i < heroes.length; i++) {
  const { nome, xp } = heroes[i];

  let nivel = "";

  if (xp <= 1000) {
    nivel = "Ferro";
  } else if (xp <= 2000) {
    nivel = "Bronze";
  } else if (xp <= 5000) {
    nivel = "Prata";
  } else if (xp <= 7000) {
    nivel = "Ouro";
  } else if (xp <= 8000) {
    nivel = "Platina";
  } else if (xp <= 9000) {
    nivel = "Ascendente";
  } else if (xp <= 10000) {
    nivel = "Imortal";
  } else {
    nivel = "Radiante";
  }

  console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}