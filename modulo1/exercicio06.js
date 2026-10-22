let horarios = [14, 8, 11];

let horariosOrdenados = horarios.sort(function(a, b) {
    return a - b;
});

console.log(horariosOrdenados);