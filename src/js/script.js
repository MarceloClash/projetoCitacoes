class Citação {
  constructor(texto, autor) {
    this.texto = texto;
    this.autor = autor;
  }
}
const citações = [
  new Citação("A vida é uma lição em andamento.", "John Powell"),
  new Citação(
    "Acredite que você pode, e você está a metade do caminho.",
    "Theodoro  Roosevelt"
  ),
  new Citação(
    "Não olhe o relógio; faça o que ele faz. Continue.",
    "Sam Leverson"
  ),
  new Citação("Sonhe maior. Faça maior.", "Robin Sharma"),
  new Citação("A persistência realiza o impossivel.", "Confúcio"),
  new Citação(
    "A coragem não é a ausência de medo, é a conquista dele.",
    "Nelson Mandela"
  ),
  new Citação("A melhor forma de prever o futuro é o inventá-lo.", "Alan Kay"),
  new Citação("Não espere por inspiração, crie-a.", "George Bernard Shaw"),
  new Citação(
    "A vida é 10% o que acontece com você e 90% como você reage a isso.",
    "Charles R. Swindoll"
  ),
  new Citação(
    "A maior barreira para o sucesso é o medo do fracasso.",
    "Robert T. Kiyosaki"
  ),
  new Citação(
    "A maior glória na vida não é nunca cair, mas se levantar sempre.",
    "Nelson Mandela"
  ),
  new Citação(
    "A única maneira de fazer um grande trabalho é amar o que você faz.",
    "Steve Jobs"
  ),
  new Citação("A vida é um sonho. Realize-o.", "Antonio Porchia"),
  new Citação(
    "Não se preocupe em ser melhor que outra pessoa, seja melhor do que você próprio era ontem.",
    "Jim Rohn"
  ),
  new Citação(
    "A vida é um desafio para ser vencida, não um problema para ser evitado.",
    "Mahatma Gandhi"
  ),
  new Citação("A maior loucura é ter medo da loucura.", "André Gide"),
  new Citação(
    "Não é o que temos que ver que importa, mas o que somos.",
    "Henry David Thoreau"
  ),
  new Citação("A maior vitória é vencer a si mesmo.", "Platão"),
  new Citação(
    "A vida é uma viagem, e quem viaja mais rápido não é o mais esperto.",
    "Maurice Maeterlinck"
  ),
  new Citação(
    "A maior coisa que um homem pode fazer por outro é não precisar dele.",
    "Baltasar Gracián"
  ),
  new Citação(
    "A vida é curtinha, mas é longa o suficiente para fazer o que queremos.",
    "Lucius Annaeus Seneca"
  ),
  new Citação(
    "A maior coisa que um homem pode fazer por si mesmo é ser seu próprio amigo.",
    "Thomas Jefferson"
  ),
  new Citação(
    "A vida é uma soma de pequenos momentos.",
    "Marcus Valerius Martialis"
  ),
  new Citação(
    "A maior coisa que um homem pode fazer por si mesmo é aceitar totalmente a si mesmo.",
    "Johann Wolfgang von Goethe"
  ),
  new Citação(
    "A maior coisa que um homem pode fazer por outro é dar-lhe a esperança.",
    "Elizabeth Fry"
  ),
];

function getRandomQuote() {
  const citaçaoAleatoria =
    citações[Math.floor(Math.random() * citações.length)];
  printQuote(citaçaoAleatoria);
}

function printQuote(citação) {
  document.getElementById(
    "quote"
  ).innerText = `🙶${citação.texto} 🙷  - ❝${citação.autor}❞`;
}
window.onload = getRandomQuote;
