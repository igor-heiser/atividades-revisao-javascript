let gerador = {
    id: 67,
    anoInstalacao: 2000
}

gerador.calcularAnosEmUso = function() {
    let anos = 2026 - this.anoInstalacao;
    console.log(`O gerador ${this.id} está em operação há ${anos} anos.`);
}

gerador.calcularAnosEmUso();