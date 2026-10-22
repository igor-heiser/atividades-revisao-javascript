let maquina = {
    nome: "Teste",

    historicoManutencao: [
        {
           data: "20/10/2026",
           tecnico: "Igor",
           tipo: "Arriscada" 
        },
        {
           data: "20/10/2026",
           tecnico: "Igor Rebolla",
           tipo: "Preventiva" 
        }
    ]
}

let ultimaManutencao = maquina.historicoManutencao[maquina.historicoManutencao.length - 1];

console.log("Data da última manutenção: " + ultimaManutencao.data);
console.log("Técnico responsável: " + ultimaManutencao.tecnico);