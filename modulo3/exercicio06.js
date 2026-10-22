let peca = {
     nome: 'Engrenagem Helicoidal',
     custoProducao: 45.00,
     etapas: ['Fundição', 'Usinagem', 'Tratamento Térmico']
}

console.log("A peça " + peca.nome + " tem custo de produção de R$" + peca.custoProducao);

peca.custoProducao = 48.50;

peca.revisada = true;

console.log("Nome: " + peca.nome);
console.log("Custo de produção: " + peca.custoProducao);
console.log("Etapas: " + peca.etapas);
console.log("Revisada: " + peca.revisada);