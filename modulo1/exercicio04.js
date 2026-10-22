const prompt = require('prompt-sync')();

function criarFila(quantidadeLotes) {

    let fila = [];

    for(let i = 1; i <= quantidadeLotes; i++) {
        fila.push(i);
    }

    return fila;

}

let quantidadeLotes = Number(prompt("Digite a quantidade de lotes a serem produzidos: "));

console.log("Ordem de produção: " + criarFila(quantidadeLotes));