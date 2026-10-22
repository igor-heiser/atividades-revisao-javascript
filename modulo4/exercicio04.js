let plantaIndustrial = {
    empresa: "AutoTech Indústria",
    setores: {
        estamparia: {
        maquina1: { modelo: "Prensa Hidráulica 500T", fabricante: "Schuler" }
        },
        solda: {
        maquina1: { modelo: "Robo Kuk KRC4", fabricante: "KUK" },
        maquina2: { modelo: "Célula Fanuc ARC", fabricante: "Fanuc" }
        }
    }
};

console.log(plantaIndustrial.setores.solda.maquina1.modelo);