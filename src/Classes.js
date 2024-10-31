const classes = ["Mago", "Guerreiro", "Ninja", "Monge"];

function heroi(classes) {
    let nome = "Yuto";
    let idade = 24;
    let tipoClasse = classes[2];
    let atk = tipoClasse;

    if (atk === "Mago") {
        atk = "magia";
    } else if (atk === "Guerreiro") {
        atk = "espada";
    } else if (atk === "Ninja") {
        atk = "shuriken";
    } else {
        atk = "artes marciais";
    }

    return `O ${tipoClasse} ${nome} atacou usando ${atk}.`;
}

console.log(heroi(classes));