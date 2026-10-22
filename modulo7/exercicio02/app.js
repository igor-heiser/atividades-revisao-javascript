const contador = document.getElementById('contador');
const btnProduzir = document.getElementById('btnProduzir');

let numero = 0;

btnProduzir.addEventListener('click', () => {
    numero = numero + 1
    contador.textContent = numero;
});