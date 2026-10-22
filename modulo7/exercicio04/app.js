const inputTemp = document.getElementById("inputTemp");
const mensagemTemp = document.getElementById("mensagemTemp");

inputTemp.addEventListener("input", () => {

    const temperatura = Number(inputTemp.value);

    if(temperatura == "") {
        mensagemTemp.textContent = "";
    } else if(temperatura > 80) {
        mensagemTemp.textContent = "Alerta deSuperaquecimento!";
        mensagemTemp.style.color = "red";
    } else {
        mensagemTemp.textContent = "Temperatura Normal";
        mensagemTemp.style.color = "green";
    }

});