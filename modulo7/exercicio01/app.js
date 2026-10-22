const botaoAlerta = document.getElementById('btnAlerta');
const statusPainel = document.getElementById('statusPainel');

botaoAlerta.addEventListener('click', () => {
    statusPainel.textContent = 'ATENÇÃO: Parada de Emergência Solicitada!';
    statusPainel.style.color = "red";
});