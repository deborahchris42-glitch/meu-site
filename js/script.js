// AURORA - interações básicas do site
document.addEventListener("DOMContentLoaded", () => {
  const menuBotao = document.querySelector(".menu-toggle");
  const navegacao = document.querySelector(".navegacao");

  menuBotao.addEventListener("click", () => {
    const aberto = navegacao.classList.toggle("aberto");
    menuBotao.setAttribute("aria-expanded", aberto);
  });

  document.querySelectorAll(".navegacao a").forEach(link => {
    link.addEventListener("click", () => {
      navegacao.classList.remove("aberto");
      menuBotao.setAttribute("aria-expanded", "false");
    });
  });

  const botoesFiltro = document.querySelectorAll(".filtro");
  const destinos = document.querySelectorAll(".destino");
  botoesFiltro.forEach(botao => {
    botao.addEventListener("click", () => {
      botoesFiltro.forEach(item => item.classList.remove("ativo"));
      botao.classList.add("ativo");
      const filtro = botao.dataset.filtro;
      destinos.forEach(destino => {
        destino.hidden = filtro !== "todos" && destino.dataset.tipo !== filtro;
      });
    });
  });

  document.querySelector("#calcular").addEventListener("click", () => {
    const passagem = Number(document.querySelector("#passagem").value) || 0;
    const hotel = Number(document.querySelector("#hotel").value) || 0;
    const extras = Number(document.querySelector("#extras").value) || 0;
    const total = passagem + hotel + extras;
    document.querySelector("#resultado").textContent =
      "Total estimado: " + total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  });
  // FORMULÁRIO DE CONTATO
  const formularioContato = document.querySelector("#form-contato");

  formularioContato.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("#nome").value;
    const retorno = document.querySelector("#retorno-contato");

    retorno.textContent = "Obrigada, " + nome + "! Sua mensagem foi registrada com sucesso.";

    formularioContato.reset();
  });
});

