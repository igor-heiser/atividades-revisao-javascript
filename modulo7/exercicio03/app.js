const form = document.getElementById("form");
const tabelaEstoque = document.getElementById("tabelaEstoque");

form.onsubmit = function(event) {
    event.preventDefault();

    const nome = document.getElementById("nomeInsumo").value;
    const qtdInsumo = document.getElementById("qtdInsumo").value;

    const linha = document.createElement("tr");

    const colunaNome = document.createElement("td");
    colunaNome.textContent = nome;

    const colunaQuantidade = document.createElement("td");
    colunaQuantidade.textContent = qtdInsumo;

    linha.appendChild(colunaNome);
    linha.appendChild(colunaQuantidade);

    tabelaEstoque.appendChild(linha);
}