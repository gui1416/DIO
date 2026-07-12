// ==========================================
// Desafio DIO - Escrevendo as Classes de um Jogo
// ==========================================

class Hero {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;

      case "guerreiro":
        ataque = "espada";
        break;

      case "monge":
        ataque = "artes marciais";
        break;

      case "ninja":
        ataque = "shuriken";
        break;

      default:
        ataque = "um ataque desconhecido";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);
  }
}

// Lista de heróis
const heroes = [
  new Hero("Merlin", 68, "mago"),
  new Hero("Arthur", 35, "guerreiro"),
  new Hero("Liang", 42, "monge"),
  new Hero("Hanzo", 28, "ninja")
];

// Percorre todos os heróis e realiza o ataque
for (const hero of heroes) {
  hero.atacar();
}