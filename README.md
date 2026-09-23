# 🎲 AluGames

Atividade prática da disciplina de **Lógica de Programação II**, desenvolvida com **HTML**, **CSS** e **JavaScript**.

O objetivo é praticar manipulação do DOM e lógica de programação construindo a interatividade de uma aplicação web já estruturada visualmente.

---

## 📖 O que a aplicação faz

O **AluGames** é uma vitrine de aluguel de *boardgames* (jogos de tabuleiro). A tela exibe um catálogo com três jogos:

- **Monopoly** — disponível
- **Ticket to Ride** — disponível
- **Takenoko** — alugado

Cada jogo possui um botão que permite alternar seu estado:

- **Alugar** → marca o jogo como alugado (aplica um efeito visual de escurecimento na capa e troca o botão para *Devolver*).
- **Devolver** → marca o jogo como disponível novamente (remove o efeito da capa e troca o botão de volta para *Alugar*).

Toda a interface (HTML e CSS) já está pronta. **A lógica de interação em JavaScript é o que precisa ser implementado.**

---

## 📁 Estrutura do projeto

```
alugames/
├── index.html          # Estrutura da página e catálogo de jogos
├── css/
│   ├── _reset.css      # Reset de estilos padrão do navegador
│   └── main.css        # Estilos da aplicação
├── img/                # Imagens e ícones (logos, capas dos jogos e elementos visuais)
│   ├── logo.svg
│   ├── fade_bar.svg
│   ├── hachuras.svg
│   ├── monopoly.png
│   ├── ticket_to_ride.png
│   └── takenoko.png
├── js/
│   └── app.js          # ⚠️ Arquivo a ser implementado (lógica da aplicação)
└── README.md
```

---

## 🚀 Como clonar e executar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/lenoln-prof/alugames.git
```

### 2. Acessar a pasta do projeto

```bash
cd alugames
```

### 3. Executar

Por ser um projeto estático (HTML, CSS e JavaScript puro), basta abrir o arquivo `index.html` no navegador:

- **Opção 1:** dê um duplo clique no arquivo `index.html`.
- **Opção 2 (recomendada):** use a extensão **Live Server** do VS Code para recarregar a página automaticamente a cada alteração.

---

## 🛠️ O que precisa ser implementado

O arquivo [`js/app.js`](js/app.js) está **vazio** e é onde você deve escrever a lógica.

No `index.html`, cada botão chama a função `alterarStatus(id)`, passando o número do jogo:

```html
<a onclick="alterarStatus(1)" href="#" class="dashboard__item__button">Alugar</a>
```

Você precisa criar a função **`alterarStatus(id)`**, que deve:

1. Selecionar o jogo correspondente ao `id` (os `<li>` possuem `id="game-1"`, `id="game-2"` e `id="game-3"`).
2. Verificar se o jogo está **disponível** ou **alugado**.
3. Alternar o estado do jogo:
   - Adicionar/remover a classe `dashboard__item__img--rented` na `<div>` da imagem (efeito visual de "alugado").
   - Adicionar/remover a classe `dashboard__item__button--return` no botão.
   - Trocar o texto do botão entre **"Alugar"** e **"Devolver"**.

> 💡 As classes CSS que controlam a aparência dos estados já existem no `main.css`:
> - `dashboard__item__img--rented` — escurece a capa do jogo alugado.
> - `dashboard__item__button--return` — muda a cor do botão para o estado *Devolver*.

---

## 💡 Dicas

- Use `document.getElementById("game-" + id)` para localizar o elemento do jogo pelo `id`.
- A partir do elemento do jogo, use `querySelector()` para acessar a `<div>` da imagem e o botão internos.
- O método `classList.contains("classe")` ajuda a verificar se um estado já está ativo.
- Os métodos `classList.add()`, `classList.remove()` e, especialmente, `classList.toggle()` são úteis para alternar classes.
- Para trocar o texto do botão, use a propriedade `textContent`.
- Teste bastante: clique em **Alugar** e depois em **Devolver** para garantir que o estado alterna corretamente nas duas direções.

---

## 📦 Entrega

- Implemente a função `alterarStatus(id)` no arquivo [`js/app.js`](js/app.js).
- Garanta que os três jogos alternam entre **Alugar** e **Devolver** corretamente.
- Faça o commit e o push das alterações para o repositório:

```bash
git add .
git commit -m "Implementa a lógica de alterar status dos jogos"
git push origin main
```

- Envie o link do repositório conforme orientação da disciplina.

---

Desenvolvido como atividade prática de **Lógica de Programação II**. 🎮
