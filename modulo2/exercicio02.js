let balanca = {
    pesoAtual: 1000,
    capacidadeMaxima: 5000,

    pesar: function(massa) {
        this.pesoAtual = this.pesoAtual + massa;
    },

    zerar: function() {
        this.pesoAtual = 0;
    },

    verificarSobrecarga: function() {
        return this.pesoAtual > this.capacidadeMaxima;
    }
}

balanca.pesar(3000);
balanca.pesar(2500);

console.log("Peso atual: " + balanca.pesoAtual);
console.log("Capacidade máxima: " + balanca.verificarSobrecarga());

balanca.zerar();

console.log("Balança zerada: " + balanca.pesoAtual + "kg");