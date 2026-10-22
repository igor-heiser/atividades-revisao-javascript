let telemetriaMecanica = {
    pressao: 10,
    rotacaoRPM: 120
}

let telemetriaEletrica = {
    correnteAmpere: 120,
    tensaoVolts: 10
}

let diagnosticoCompleto = {...telemetriaMecanica, ...telemetriaEletrica};

console.log("Resultado dos objetos juntos:");
console.log(diagnosticoCompleto);