const prompt = require('prompt-sync')();

let totalTemperaturas = 0;

function calcularTemperaturaMedia(totalTemperaturas) {
    return totalTemperaturas / vezesDigitadas;
}

let opcao;
let vezesDigitadas = 0;

do {

    console.log("1 - Digitar temperatura");
    console.log("2 - Mostrar a temperatura média do lote de produção")
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch(opcao) {
        case 1:
            let temperatura = Number(prompt("Digite as medições de temperatura (em°C): "));
            totalTemperaturas += temperatura;
            vezesDigitadas++;
            break;
        case 2:
            console.log("Média da temperatura do lote de produção: " + calcularTemperaturaMedia(totalTemperaturas));
            break;
        case 0:
            console.log("Encerrando sistema...")
            break;
        default:
            console.log("ERRO: opção inválida! Tente novamente.");
            break;
    }

} while(opcao != 0);