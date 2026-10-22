let parametrosSeguranca = {
     limiteTemperatura: 85
};

Object.freeze(parametrosSeguranca);

parametrosSeguranca.limiteTemperatura = 100;
parametrosSeguranca.limitePressao = 10;

console.log(parametrosSeguranca);