function RoboGantry(posicaoX, posicaoY) {
    this.posicaoX = posicaoX;
    this.posicaoY = posicaoY;
}

RoboGantry.prototype.moverOrigem = function() {
    this.posicaoX = 0;
    this.posicaoY = 0;
}

let robo1 = new RoboGantry(10, 100);
let robo2 = new RoboGantry(100, 10);

robo1.moverOrigem();
robo2.moverOrigem();

console.log(robo1);
console.log(robo2);