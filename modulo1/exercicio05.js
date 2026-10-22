const prompt = require('prompt-sync')();

let insumos = ['Aço', 'Alumínio', 'Cobre'];

console.log(insumos[1]);

console.log(insumos.push('Polímero'));

console.log(insumos.shift());

console.log(insumos.length);

for(let i = 0; i < insumos.length; i++) {
    console.log(insumos[i]);
}

insumos.forEach(function(item) {
    console.log("Insumo pronto para uso: " + item);
});

let insumosCaracteres = insumos.map(function(item) {
    return item.length;
});

console.log("Quantidade de caracteres: " + insumosCaracteres);

let nomesInsumosMaiores = insumos.filter(function(insumo) {
    return insumo.length > 5; 
});

console.log("Insumos com mais de 5 caracteres: " + nomesInsumosMaiores);