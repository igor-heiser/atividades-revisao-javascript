let ordensDeServico = [
    {
        idOS: 1,
        cliente: "João",
        detalhes: {
            produto: "Peça de motor",
            quantidade: 10
        }
    },
    {
        idOS: 2,
        cliente: "Maria",
        detalhes: {
            produto: "Engrenagem",
            quantidade: 5
        }
    },
    {
        idOS: 3,
        cliente: "Pedro",
        detalhes: {
            produto: "Eixo industrial",
            quantidade: 8
        }
    }
]

for(let i = 0; i < ordensDeServico.length; i++) {
    console.log("ID da OS: " + ordensDeServico[i].idOS);
    console.log("Nome do produto: " + ordensDeServico[i].detalhes.produto);
}