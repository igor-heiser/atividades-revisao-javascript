let maquinaInjetora = {
    producaoPlanejada: 1000,
    producaoRealizada: 10
}

maquinaInjetora.calcularEficiencia = function() {
    return (this.producaoRealizada / this.producaoPlanejada) * 100;
}

console.log("Produtividade: " + maquinaInjetora.calcularEficiencia() + "%");