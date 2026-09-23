
function alterarStatus(id) {
    const jogo = document.getElementById("game-" + id);

    const imagem = jogo.querySelector(".dashboard__item__img");
    const botao = jogo.querySelector(".dashboard__item__button");

    if (imagem.classList.contains("dashboard__item__img--rented")) {
        imagem.classList.remove("dashboard__item__img--rented");
        botao.classList.remove("dashboard__item__button--return");
        botao.textContent = "Alugar";
    } else {
        imagem.classList.add("dashboard__item__img--rented");
        botao.classList.add("dashboard__item__button--return");
        botao.textContent = "Devolver";
    }
}

