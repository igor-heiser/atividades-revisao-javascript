const prompt = require('prompt-sync')();

function verLotesDefeituosos(dimensoes, dimensaoMaximaPermitida) {

    let lotesDefeituosos = dimensoes.filter(function(dimensao) {
        return dimensao > dimensaoMaximaPermitida;
    });

    return lotesDefeituosos;

}

let opcao;
let dimensoes = [];
let dimensaoMaximaPermitida = 5.5;

do {

    console.log("1 - Digitar dimensões das peças");
    console.log("2 - Ver peças fora da especificação");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch(opcao) {

        case 1:
            let dimensao = Number(prompt("Digite as dimensões da peça em (mm): "));
            dimensoes.push(dimensao);
            break;
        case 2:
            console.log("Peças fora da especificação: " + verLotesDefeituosos(dimensoes, dimensaoMaximaPermitida));
            break;
        case 0:
            break;
        default:
            console.log("ERRO: opção inválida! Tente novamente.");
            break;

    }

}while(opcao != 0);