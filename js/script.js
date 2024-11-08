
let imagemAtual = document.querySelectorAll(".img-carrosel");
const setaDireita = document.querySelector(".seta-direita");
const setaEsquerda = document.querySelector(".seta-esquerda");

const imagens = [
  "images/carrosel/carrosel1.png",
  "images/carrosel/carrosel2.jpg",
  "images/carrosel/carrosel3.jpeg",
];

console.log(imagemAtual);
console.log(setaDireita);

imagemAtual.forEach((img) => {
  setaDireita.addEventListener("click", () => {
    for (let i = 0; i < imagens.length; i++) {
      if (img.src.includes(imagens[i])) {
        if (i === imagens.length - 1) {
          img.src = imagens[0];
        } else {
          img.src = imagens[i + 1];
        }
        break;
      }
    }
  });
  console.log(imagemAtual);
  setaEsquerda.addEventListener("click", () => {
    for (let i = 0; i < imagens.length; i++) {
      if (img.src.includes(imagens[i])) {
        if (i === 0) {
          img.src = imagens[imagens.length - 1];
        } else {
          img.src = imagens[i - 1];
        }
        break;
      }
    }
  });
});
setInterval(() => {
  imagemAtual.forEach((img) => {
    for (let i = 0; i < imagens.length; i++) {
      if (img.src.includes(imagens[i])) {
        if (i === imagens.length - 1) {
          img.src = imagens[0];
        } else {
          img.src = imagens[i + 1];
        }
        break;
      }
    }
  });
}, 5000);