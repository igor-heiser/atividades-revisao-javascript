let equipamento = {
    alimentacaoEletrica: '380V'
}

let compressor = Object.create(equipamento);
compressor.pressaoMaxBar = 10;

console.log("Pressão máxima: " + compressor.pressaoMaxBar);

console.log("Alimentação elétrica: " + compressor.alimentacaoEletrica);