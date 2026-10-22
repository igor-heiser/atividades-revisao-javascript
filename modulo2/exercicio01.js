let tornoCNC = {
    id: 1,
    modelo: "Oi",
    horasTrabalhadas: 10
}

console.log("Modelo: " + tornoCNC.modelo);

console.log(tornoCNC.horasTrabalhadas = 12);

tornoCNC.precisaManutencao = function() {
    return this.horasTrabalhadas > 10;
}

console.log(tornoCNC.precisaManutencao());

tornoCNC.exibirRelatorio = function() {
    return "ID: " + this.id +
           "\nModelo: " + this.modelo +
           "\nHoras trabalhadas: " + this.horasTrabalhadas +
           "\nPrecisa de manutenção: " + this.precisaManutencao();
}

console.log(tornoCNC.exibirRelatorio());