let sensor = {
    idSensor: 67,
    leituraAtual: 10,
    status: 'Normal'
}

sensor.atualizarLeitura = function() {
    this.leituraAtual = 100;

    if(this.leituraAtual > 75) {
        sensor.status = "Alerta"
    }
}

sensor.atualizarLeitura();

console.log(sensor.leituraAtual);
console.log(sensor.status);