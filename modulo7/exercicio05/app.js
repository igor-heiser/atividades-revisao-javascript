const btnConcluir = document.getElementById("btnConcluir");

btnConcluir.addEventListener("click", function() {
    const itensLista = document.querySelectorAll("#checklist li");

    itensLista.forEach(function(item) {
        item.classList.add("concluido");
    });
});