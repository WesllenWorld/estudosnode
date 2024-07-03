function personagem(nome, velocidade, manobrabilidade, poder){
    this.nome = nome;
    this.velocidade = velocidade;
    this.manobrabilidade = manobrabilidade;
    this.poder = poder;
    this.pontos = 0
}

const mario = new personagem('Mario', 4, 3, 3);
const luigi = new personagem('Luigi', 3, 4, 4);
const peach = new personagem('Peach', 3, 4, 2);
const bowser = new personagem('Bowser', 5, 2, 5);
const yoshi = new personagem("Yoshi", 2, 4, 3);
const donkey_kong = new personagem("Donkey Kong", 2, 2, 5);

const personagens = [mario, luigi, peach, bowser, yoshi, donkey_kong];

d6 = () => Math.floor(Math.random() * 6) + 1;


const player1 = personagens[Math.floor(Math.random() * personagens.length)];
const player2 = personagens[Math.floor(Math.random() * personagens.length)];