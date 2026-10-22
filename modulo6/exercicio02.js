function Injetora(id, capacidadeToneladas) {
    this.id = id;
    this.capacidadeToneladas = capacidadeToneladas;
}

Injetora.prototype.exibirCapacidade = function(id, capacidadeToneladas) {
    console.log(`A injetora ${this.id} possui capacidade de ${this.capacidadeToneladas}T.`);
}

let injetora01 = new Injetora('INJ-01', 250);

injetora01.exibirCapacidade();