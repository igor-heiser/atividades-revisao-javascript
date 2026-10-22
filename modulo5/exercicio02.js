let receitaOriginal = {
    temperatura: 200,
    tempoMinutos: 45
}

let receitaAjustada = [...receitaOriginal];

receitaAjustada.temperatura = 220;

console.log("Temperatura: " + receitaAjustada.temperatura);