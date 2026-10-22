const filtroModulo = document.getElementById("filtroModulo");
const listaSetores = document.querySelectorAll("#listaSetores li");

filtroModulo.addEventListener("input", function() {
    const filtro = filtroModulo.value.toLocaleLowerCase();

    listaSetores.forEach(function(setor) {
        const setorNome = setor.textContent.toLocaleLowerCase();

        if(setorNome.includes(filtro)) {
            setor.style.display = "";
        } else {
            setor.style.display = "none";
        }
    }); 
}); 