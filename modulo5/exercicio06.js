let configPadrao = {
    velocidade: 100,
    modoSeguranca: true,
    idioma: 'PT'
}

let configPersonalizada = {...configPadrao, velocidade: 120}

console.log(configPersonalizada);