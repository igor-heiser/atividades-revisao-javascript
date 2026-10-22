const prompt = require('prompt-sync')();

function verificarOcorrenciaEventos(codigosEspecifico, codigosDigitados) {

    let quantidadeOcorrenciaEvento = codigosDigitados.filter(function(codigo) {
        return codigo === codigosEspecifico;
    });

    return quantidadeOcorrenciaEvento.length;

}

let opcao;
let codigosEventos = [100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
let codigosDigitados = [];

do {

    console.log("\n1 - Digitar código");
    console.log("2 - Ver códigos de eventos existentes");
    console.log("3 - Ver quantas vezes esse evento específico ocorreu");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch(opcao) {
        case 1:
            let codigo = Number(prompt("Digite o código: "));

            if(codigosEventos.includes(codigo)) {
                codigosDigitados.push(codigo);
            }
            
            break;
        case 2:
            console.log("Códigos de eventos existentes: \n");
            console.log(codigosEventos);
            break;
        case 3:
            let codigosEspecifico = Number(prompt("Digite o código a ser consultado: "));

            if(codigosEventos.includes(codigosEspecifico)) {
                let quantidade = verificarOcorrenciaEventos(codigosEspecifico, codigosDigitados);

                console.log("O código consultado foi registrado " + quantidade + " vezes.");
            }
            
            break;
        case 0:
            console.log("Encerrando o sistema...");
            break;
        default:
            console.log("ERRO: opção inválida! Tente novamente.");
            break;
    }

}while(opcao != 0);